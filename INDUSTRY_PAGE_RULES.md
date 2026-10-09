# Industry Page — Layout & Content Rules

## Page Structure (Top to Bottom)

```
1. PageHero (fullbleed-overlay hero)
2. §2 Prose Sections (Overview + sub-sections)
3. OverviewQuote (tagline)
4. SolutionsImageGrid (3-col hover-overlay cards)
5. FinalCTADramatic (white bg)
```

---

## 1. PageHero

- **Background:** fullbleed-overlay (dark photo + navy scrim)
- **Title:** `ind.title` (big H1, white, left-aligned)
- **Label:** `ind.label ?? ind.title` (small orange eyebrow with flame rule)
- **Image:** `ind.bannerImage` (unique per industry, NO repeats)
- **Breadcrumb:** Home → Industries → {title}
- **No** description, CTAs, or KPIs in hero

---

## 2. Prose Sections

### First Section — MUST have:
- **Label:** `[ Overview ]` (orange text, no background/border)
- **Heading:** Big H3 (`text-display-md font-bold text-ink`)
- **Image:** Unique image (left or right side, alternating)
- **Paragraphs:** Full-width, justified (`text-align: justify`)
- **Background:** Alternating `bg-white` / `bg-shade`

### Subsequent Sections:
- **Label:** Optional (e.g., `[ Banking & Lending ]`, `[ Hospitality ]`)
- **Heading:** Same H3 style
- **Image:** Each section with image MUST use a UNIQUE image (no repeats)
- **Paragraphs:** Full-width, justified
- **Image side:** Alternates left/right between sections

### Rules:
- NO cards, NO bullet points, NO numbered lists
- Paragraphs only — explanatory prose
- `text-align: justify` globally via CSS: `section p { text-align: justify; }`
- When no image: text spans full container width (`w-full`, NOT `max-w-4xl`)
- When image: 2-col grid (`lg:grid-cols-2`)

---

## 3. OverviewQuote

- Rendered between prose sections and solutions grid
- Big italicized pull-quote, center-aligned
- **Example:** "Transform Healthcare. Empower People. Improve Outcomes."
- **CSS:** `section .text-center p { text-align: center; }` (overrides justify)
- Only render if `ind.overviewQuote` exists (not all industries have one)
- NO invented quotes — only use text from the user's content spec

---

## 4. SolutionsImageGrid (3-Col Hover-Overlay Cards)

### Section Heading:
- **Eyebrow:** `[ {eyebrow} ]` (if exists, e.g., `[ Solution ]`, `[ Description ]`)
- **Title:** Big H2 heading matching the MD's `##` heading (NOT invented)
- **Lead paragraph:** Full-width (`w-full`, NOT `max-w-3xl`)
- Left-aligned

### Card Layout:
- **Grid:** 3-col desktop, 2-col tablet, 1-col mobile
- **Gap:** `lg:gap-6` (tighter than 2-col variant)

### Card Design (Hover-Overlay Pattern):
```
┌─────────────────────────┐
│                         │
│        IMAGE            │  ← 16:9, always visible, scales 1.06 on hover (700ms)
│                         │
│  ▔▔▔▔▔▔ (flame rule)   │  ← Permanent bottom gradient (always visible)
│  Title (white, bold)    │  ← Title ALWAYS visible at bottom of image
│  Description (on hover) │  ← Fades + slides in on hover (500ms)
│  Read more → (on hover) │  ← Flame color
└─────────────────────────┘
```

### Card Rules:
- **Default state:** Image + permanent navy gradient + title visible at bottom
- **Hover state:** Gradient deepens + description + "Read more" fade/slide in
- **NO** numbered markers (01, 02, etc.)
- **NO** icon tiles (image-first, NOT icon-first)
- Each tile has a **unique image** (no repeats across the entire site)
- Strip `icon` field before passing to client component (server→client serialization)

### Closing Quote Band (optional):
- Dark navy `bg-ink` band after the card grid
- Big centered quote text (white, bold)
- Grid-pattern + flame/brand orbs
- Only render if `closingQuote` exists
- NO invented closing quotes

---

## 5. FinalCTADramatic

- **Background:** `bg-white` (NOT dark navy)
- **Border:** `border-t border-line` (clean top separator)
- **Text color:** `text-ink` (dark on white)
- **Eyebrow:** `[ Get started ]` (orange, plain text, no bg)
- **Title:** Big centered heading (`text-ink`)
- **Description:** `text-body`, centered
- **Primary CTA:** `bg-flame` button (flame orange, white text)
- **Secondary CTA:** `border-brand/30 bg-shade text-brand` outline button
- **NO** background image, scrim, orbs, or grid-pattern
- **Padding:** `py-section-md` (reduced height)

---

## Global CSS Rules

```css
/* All paragraphs justified */
section p {
  text-align: justify;
  text-justify: inter-word;
}

/* List items stay left-aligned */
li p, li span {
  text-align: left;
}

/* Quote portions center-aligned (overrides justify) */
section .text-center p {
  text-align: center;
}
```

---

## Section Label Style

```css
.section-label {
  display: inline-block;
  color: #d9742b;           /* orange */
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 14px;
  letter-spacing: 0.02em;
  /* NO background, NO border, NO padding, NO border-radius */
}
```

Renders as: `[ Overview ]` — plain orange bold text

---

## Content Rules

1. **Content must match the user's PDF/DOCX/MD exactly** — no invented text
2. **Bold text in MD → big headings** on the site
3. **`##` headings →** Big H2 via SectionHeading
4. **`###` headings →** Medium H3 or eyebrow labels
5. **`**bold**` standalone lines →** Big headings or bold paragraphs
6. **`**bold**` inline →** Bold inline text within paragraphs
7. **Max 3 sections per page** — keep it concise
8. **Remove any section not in the user's content spec**
9. **Remove invented overviewQuotes and closingQuotes** — only use text from MD
10. **Solutions intro titles must match MD `##` headings** — NOT invented titles

---

## Image Rules

1. **Every image must be unique** — no repeats anywhere on the site
2. **Same image must NOT appear 2+ times on the same page**
3. **No Chinese-style images** — use Western/enterprise stock photos
4. **Download locally** — no hotlinking, no visible source URLs
5. **Hero image (`bannerImage`) used exactly ONCE** per page (in PageHero only)
6. **Prose section images** — unique per section (`sec.image`)
7. **Tile images** — unique per tile (`tile.image`)
8. **Challenges image** — unique per industry (NOT the banner)
9. **Image treatment:** `object-fit: cover`, consistent aspect ratios
10. **Hover:** `scale(1.06)` on image, 700ms ease-out

---

## Removed Sections (per user request)

- ❌ ChallengesSection — removed from ALL industry pages
- ❌ IndustryShowcase — removed from ALL industry pages
- ❌ WhyUsEditorial — removed from ALL industry pages
- ❌ AnchorNavigation — removed from ALL industry pages
- ❌ OverviewSplitSection — removed (was duplicating hero image)
- ❌ StatisticsStrip / "By the numbers" — removed
- ❌ Numbered markers (01, 02, STEP 01, L01) — removed everywhere
- ❌ "Pillars of modern care" — removed from healthcare
- ❌ "Every touchpoint, one experience" — removed from ecommerce
- ❌ "Defense-in-depth" tagline — removed from cybersecurity
- ❌ "Have Any Projects In Your Mind?" — removed from footer
- ❌ Education industry — removed entirely from site + menus

---

## Per-Industry Tile Counts

| Industry | Tiles | Overview Quote | Closing Quote |
|---|---|---|---|
| Financial Services | 6 | "Transform Finance..." | — |
| Healthcare | 5 | "Transform Healthcare..." | "Reimagine Healthcare..." |
| Logistics & Hospitality | 6 | "Transform Today..." | — |
| Cybersecurity | 6 | — | — |
| E-Commerce & Retail | 8 | — | — |
| Automation | 6 | "From Automation..." | "Transform Workflows..." |

---

## Menu Updates

- "Logistics" → "Logistics & Hospitality" (in mega-menu + footer)
- Education removed from mega-menu + footer
- Cybersecurity nav description: "Security consulting, implementation & managed services"

---

## File Locations

- **Industry data:** `src/lib/site-data.ts` → `industries` array
- **Service data:** `src/lib/services-data.ts` → `servicesV2` array
- **Industry page renderer:** `src/app/(pages)/industries/[slug]/page.tsx`
- **Service page renderer:** `src/app/(pages)/services/[slug]/page.tsx`
- **SolutionsImageGrid + FinalCTADramatic:** `src/components/site/enterprise-sections.tsx`
- **SolutionsSection + OverviewQuote:** `src/components/site/solutions-section.tsx`
- **PageHero:** `src/components/site/page-hero.tsx`
- **SectionHeading + Reveal:** `src/components/site/primitives.tsx`
- **Global CSS:** `src/app/globals.css`
- **Layout selection:** `const layout = "B"` (all industries use LayoutB)
- **Visibility flags:** `SHOW_CHALLENGES` (empty), `SHOW_WHY_US` (empty), `SHOW_CARDS_GRID` (cybersecurity + automation only)
