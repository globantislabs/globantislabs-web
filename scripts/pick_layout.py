#!/usr/bin/env python3
"""Pick a unique layout plan for a service or industry page.

Usage:
  python pick_layout.py --type service --slug cloud-migration \
      --registry layout_registry.json --blocks overview,capabilities,process,outcomes,tech,case,faq

The plan is deterministic for a given slug (seeded), but if its fingerprint
already exists in the registry, the seed is bumped until it is unique.
Hero variant is also kept different from the last 3 pages.
"""
import argparse
import hashlib
import json
import random
import sys
from pathlib import Path

HEROES = {
    "service": ["split-image-right", "split-image-left", "gradient-mesh-stats",
                "centered-logo-strip", "diagonal-crop"],
    "industry": ["fullbleed-overlay", "split-image-left", "split-image-right",
                 "diagonal-crop", "centered-logo-strip"],
}

# section key -> possible variants
VARIANTS = {
    "overview": ["overview-split", "overview-lead-columns", "overview-sidebar"],
    "capabilities": ["cap-cards-3", "cap-grid-6", "cap-tabs", "cap-accordion-list", "cap-bento"],
    "process": ["process-timeline-h", "process-timeline-v", "process-cards-numbered", "process-chevrons"],
    "outcomes": ["stats-band-dark", "stats-cards-light", "stats-inline"],
    "tech": ["tech-logo-strip", "tech-grouped-chips", "tech-matrix"],
    "case": ["case-feature-split", "case-cards-3", "case-quote-banner"],
    "why": ["why-split-icons", "why-numbered-list"],
    "engagement": ["engage-3-col", "engage-toggle"],
    "challenges": ["challenge-cards-icons", "challenge-split-photo", "challenge-stat-led"],
    "solutions": ["map-challenge-to-service", "map-tabs-by-function"],
    "compliance": ["compliance-badges"],
    "faq": ["faq-accordion", "faq-two-col"],
    "related": ["related-cards"],
    "cta": ["cta-band-dark", "cta-split-form", "cta-photo-overlay"],
}

REQUIRED = {
    "service": ["overview", "capabilities", "process"],
    "industry": ["challenges", "solutions"],
}
PROOF = ["outcomes", "case"]  # at least one required

# sections that carry photography, and their slot name
IMAGE_VARIANTS = {
    "overview-split": "overview", "overview-sidebar": None,
    "cap-tabs": "cap", "cap-bento": "cap",
    "case-feature-split": "case", "case-quote-banner": "case",
    "why-split-icons": "why", "challenge-split-photo": "challenge",
    "cta-photo-overlay": "cta",
}
HERO_IMAGE = {"gradient-mesh-stats": False}

# variants that force a dark background
DARK_VARIANTS = {"stats-band-dark", "cta-band-dark", "cta-photo-overlay", "case-quote-banner"}

ACCENTS = ["underline-accent", "left-rule", "dot-eyebrow", "pill-eyebrow"]


def seeded(slug, bump):
    h = hashlib.sha256(f"{slug}:{bump}".encode()).hexdigest()
    return random.Random(int(h[:16], 16))


def assign_backgrounds(sections):
    """Alternate light/tint, respect forced dark, never two dark adjacent."""
    bgs = []
    toggle = 0
    for i, (key, var) in enumerate(sections):
        if var in DARK_VARIANTS:
            bg = "dark"
        else:
            bg = ["light", "tint"][toggle % 2]
            toggle += 1
        if bgs and bg == "dark" and bgs[-1] == "dark":
            bg = "light"
        bgs.append(bg)
    # avoid identical neighbours
    for i in range(1, len(bgs)):
        if bgs[i] == bgs[i - 1] and bgs[i] != "dark":
            bgs[i] = "tint" if bgs[i] == "light" else "light"
    return bgs


def build_plan(page_type, slug, blocks, bump, avoid_heroes):
    rnd = seeded(slug, bump)
    hero_pool = [h for h in HEROES[page_type] if h not in avoid_heroes] or HEROES[page_type]
    hero = rnd.choice(hero_pool)

    wanted = list(dict.fromkeys(b.strip() for b in blocks if b.strip()))
    # normalise aliases
    alias = {"solutions-map": "solutions", "stats": "outcomes", "case-study": "case",
             "technology": "tech", "process-steps": "process"}
    wanted = [alias.get(b, b) for b in wanted]

    for req in REQUIRED[page_type]:
        if req not in wanted:
            wanted.append(req)
    if not any(p in wanted for p in PROOF):
        wanted.append("outcomes")
    wanted = [w for w in wanted if w in VARIANTS and w != "cta"]

    order_ref = {
        "service": ["overview", "capabilities", "process", "tech", "why", "outcomes",
                    "case", "engagement", "faq", "related"],
        "industry": ["challenges", "solutions", "compliance", "why", "outcomes", "case",
                     "tech", "faq", "related"],
    }[page_type]
    wanted.sort(key=lambda k: order_ref.index(k) if k in order_ref else 99)

    sections = []
    for key in wanted:
        sections.append((key, rnd.choice(VARIANTS[key])))
    sections.append(("cta", rnd.choice(VARIANTS["cta"])))

    # never repeat the same variant string twice (safety)
    seen = set()
    fixed = []
    for key, var in sections:
        if var in seen and len(VARIANTS[key]) > 1:
            var = next(v for v in VARIANTS[key] if v not in seen)
        seen.add(var)
        fixed.append((key, var))
    sections = fixed

    bgs = assign_backgrounds(sections)

    # alternate image side for image-bearing sections
    side = rnd.choice(["left", "right"])
    plan_sections = []
    slots = []
    if HERO_IMAGE.get(hero, True):
        slots.append({"slot": "hero", "section": "hero"})
    for (key, var), bg in zip(sections, bgs):
        entry = {"section": key, "variant": var, "background": bg}
        slot = IMAGE_VARIANTS.get(var)
        if slot:
            entry["image_side"] = side
            side = "left" if side == "right" else "right"
            slots.append({"slot": slot, "section": key})
        plan_sections.append(entry)

    return {
        "page_type": page_type,
        "slug": slug,
        "hero": hero,
        "accent_treatment": rnd.choice(ACCENTS),
        "sections": plan_sections,
        "image_slots": slots,
    }


def fingerprint(plan):
    parts = [plan["hero"]] + [s["variant"] for s in plan["sections"]]
    return hashlib.sha1("|".join(parts).encode()).hexdigest()[:12]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--type", choices=["service", "industry"], required=True)
    ap.add_argument("--slug", required=True)
    ap.add_argument("--registry", default="layout_registry.json")
    ap.add_argument("--blocks", default="", help="comma list of content blocks found in the page")
    ap.add_argument("--no-save", action="store_true")
    a = ap.parse_args()

    reg_path = Path(a.registry)
    registry = json.loads(reg_path.read_text()) if reg_path.exists() else {"pages": {}}
    pages = registry["pages"]

    used = {p["fingerprint"] for s, p in pages.items() if s != a.slug}
    recent = [p["hero"] for p in list(pages.values())[-3:] if p.get("slug") != a.slug]
    blocks = a.blocks.split(",") if a.blocks else []

    plan = None
    for bump in range(200):
        cand = build_plan(a.type, a.slug, blocks, bump, set(recent))
        fp = fingerprint(cand)
        if fp not in used:
            cand["fingerprint"] = fp
            plan = cand
            break
    if plan is None:
        print("Could not find a unique layout after 200 attempts", file=sys.stderr)
        sys.exit(1)

    if not a.no_save:
        pages[a.slug] = {"slug": a.slug, "type": a.type, "hero": plan["hero"],
                         "fingerprint": plan["fingerprint"]}
        reg_path.write_text(json.dumps(registry, indent=2))
    print(json.dumps(plan, indent=2))


if __name__ == "__main__":
    main()
