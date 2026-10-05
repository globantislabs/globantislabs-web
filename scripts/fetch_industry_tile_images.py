#!/usr/bin/env python3
"""Fetch and download real Western stock photos for every industry tile.

Uses z-ai image-search to find images, then downloads each one to
public/images/industries/{slug}/{tile-slug}.jpg. Skips already-downloaded
files so re-runs are idempotent.

Each (industry, tile) pair gets its own unique image — no repeats.
"""
import json
import os
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

OUT_BASE = Path("/home/z/my-project/public/images/industries")
OUT_BASE.mkdir(parents=True, exist_ok=True)

# (industry_slug, tile_slug, search_query)
# Strong queries per image-search skill — scene + subject + mood.
SPECS = [
    # === healthcare (5 solution tiles) ===
    ("healthcare", "elevate-patient-experiences", "patient using tablet in modern hospital room with clinician"),
    ("healthcare", "modernize-healthcare-operations", "hospital operations center with multiple monitors and staff"),
    ("healthcare", "strengthen-compliance-security", "healthcare data security dashboard with encryption visuals"),
    ("healthcare", "connect-healthcare-ecosystem", "doctor using telemedicine video call with patient on screen"),
    ("healthcare", "accelerate-innovation-scale", "medical research lab with scientist analyzing genomic data"),

    # === ecommerce (8 solution tiles) ===
    ("ecommerce", "digital-commerce", "modern ecommerce warehouse fulfillment with conveyor and packages"),
    ("ecommerce", "customer-experience", "retail customer using mobile app for shopping in store"),
    ("ecommerce", "retail-analytics-ai", "retail analytics dashboard with charts and ai insights on monitor"),
    ("ecommerce", "supply-chain-inventory", "warehouse inventory shelves with worker scanning barcodes"),
    ("ecommerce", "store-operations", "modern retail store interior with pos checkout and digital signage"),
    ("ecommerce", "retail-erp-business", "retail back office with multiple monitors showing erp dashboards"),
    ("ecommerce", "product-merchandising", "retail merchandising planning meeting with product samples on table"),
    ("ecommerce", "cloud-digital-transformation", "modern retail headquarters with cloud infrastructure visualization"),

    # === cybersecurity (6 solution tiles) ===
    ("cybersecurity", "security-consulting-advisory", "cybersecurity consultant presenting strategy to executive team"),
    ("cybersecurity", "implementation-engineering", "engineer configuring security infrastructure in data center"),
    ("cybersecurity", "managed-security-services", "security operations center with analysts monitoring multiple screens"),
    ("cybersecurity", "compliance-audit-readiness", "compliance auditor reviewing documents on tablet in modern office"),
    ("cybersecurity", "data-protection-privacy", "data encryption visualization with security shield on screen"),
    ("cybersecurity", "human-firewall-program", "office employees in security awareness training session"),

    # === automation (8 capability tiles) ===
    ("automation", "intelligent-process-automation", "industrial automation control room with engineers monitoring screens"),
    ("automation", "ai-powered-document-processing", "ai document processing with scanner and digital text extraction"),
    ("automation", "generative-ai-automation", "generative ai creating content with neural network visualization"),
    ("automation", "agentic-ai", "ai agent orchestrating tasks with workflow diagram on screen"),
    ("automation", "customer-service-automation", "ai chatbot customer service interface on screen with headset"),
    ("automation", "business-workflow-automation", "business workflow automation dashboard with process flows"),
    ("automation", "intelligent-decision-support", "executive using ai decision support dashboard on large monitor"),
    ("automation", "ai-driven-operations", "ai operations monitoring center with kpi dashboards and predictions"),

    # === education (3 platform features + 5 pathway = 8 total — use 6 for solutions grid) ===
    ("education", "personalized-learning", "student using adaptive learning platform on laptop in modern classroom"),
    ("education", "virtual-classroom", "virtual classroom video conference with teacher and diverse students"),
    ("education", "ai-learning-platform", "ai-powered learning platform interface on tablet with progress charts"),
    ("education", "cloud-lms", "cloud learning management system dashboard on screen in education setting"),
    ("education", "skill-diagnostics", "student skill assessment dashboard with analytics on monitor"),
    ("education", "capstone-assessment", "university student presenting capstone project to panel"),

    # === logistics (6 solution tiles — refresh the existing AI ones with real photos) ===
    ("logistics", "guest-experience", "luxury hotel lobby with guests checking in via mobile app"),
    ("logistics", "digital-hotel", "hotel staff member using tablet to manage property operations"),
    ("logistics", "supply-chain-visibility", "supply chain control tower dashboard with world map and routes"),
    ("logistics", "warehouse-management", "modern warehouse interior with workers scanning packages"),
    ("logistics", "transportation-optimization", "fleet of delivery trucks at distribution center at dawn"),
    ("logistics", "real-time-analytics", "logistics analytics dashboard with kpis on large monitor"),
]


def search_image(query, count=5):
    """Call z-ai image-search and return the first result URL."""
    try:
        result = subprocess.run(
            ["z-ai", "image-search", "--query", query, "--count", str(count),
             "--no-rank", "--gl", "us", "--output", "/tmp/img-search-result.json"],
            capture_output=True, text=True, timeout=90,
        )
        if result.returncode != 0:
            return None
        with open("/tmp/img-search-result.json") as f:
            data = json.load(f)
        if not data.get("success") or not data.get("results"):
            return None
        return data["results"][0].get("original_url")
    except Exception as e:
        print(f"  [warn] search failed: {e}", file=sys.stderr)
        return None


def download(url, dest):
    """Download a URL to a local file."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (z-ai-image-fetcher)"})
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
        dest.write_bytes(data)
        return len(data)
    except Exception as e:
        print(f"  [warn] download failed: {e}", file=sys.stderr)
        return 0


def main():
    fetched = 0
    skipped = 0
    failed = 0
    used_urls = set()  # ensure no URL is used twice

    for industry, tile, query in SPECS:
        out_dir = OUT_BASE / industry
        out_dir.mkdir(parents=True, exist_ok=True)
        dest = out_dir / f"{tile}.jpg"

        if dest.exists() and dest.stat().st_size > 5000:
            print(f"[skip] {industry}/{tile} — already exists ({dest.stat().st_size // 1024}KB)")
            skipped += 1
            continue

        print(f"[search] {industry}/{tile} — query: '{query}'")
        url = None
        for attempt in range(3):
            url = search_image(query, count=8)
            if url and url not in used_urls:
                used_urls.add(url)
                break
            time.sleep(2)
            # Try a slightly different query on retry
            query = query + " professional"
        if not url:
            print(f"  [fail] no result after retries")
            failed += 1
            continue

        size = download(url, dest)
        if size == 0:
            failed += 1
            continue
        print(f"  [ok] {dest.name} ({size // 1024}KB) ← {url[:80]}")
        fetched += 1
        time.sleep(1)  # gentle rate-limit buffer

    print(f"\n=== summary ===")
    print(f"  fetched:  {fetched}")
    print(f"  skipped:  {skipped}")
    print(f"  failed:   {failed}")
    print(f"  total specs: {len(SPECS)}")


if __name__ == "__main__":
    main()
