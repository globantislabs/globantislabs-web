"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Plus, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/primitives";

/* ============================================================
 * Enterprise Sections — HCL-style enterprise page anatomy.
 *
 * Each section in this file maps to a section of the it-page-designer
 * / HCL-tech retail-services spec:
 *
 *   • AnchorNavigation        — sticky horizontal section nav
 *   • OverviewSplitSection    — 50/50 split: text + 4:3 image
 *   • FocusAreasGrid          — 4-col editorial grid (flat, no cards)
 *   • SolutionsImageGrid     — 2-col image+text cards (image-first)
 *   • StatisticsStrip         — horizontal metric strip with
 *                              vertical separators (no cards)
 *   • FinalCTADramatic       — dark dramatic CTA band
 *   • FAQAccordionRows       — full-width horizontal-divider rows
 *
 * Design rules (per spec):
 *   • Max 1440px container, 32–48px side padding
 *   • Vertical spacing 96–120px normal, 120–160px major
 *   • Border radius 0–8px (no 20px+ rounded cards everywhere)
 *   • Borders sparingly (#d8d8d8, 1px)
 *   • Hover: image scale(1.02), arrow translateX(4px) — subtle
 *   • Alternating bg rhythm: WHITE → IMAGE+TEXT → WHITE → GRID → …
 * ============================================================ */

/* ----------------------------------------------------------------
 * AnchorNavigation — sticky horizontal section nav.
 * Sticky below the global header. Smooth-scrolls to section IDs.
 * Mobile: horizontal scroll, no wrap.
 * ---------------------------------------------------------------- */
export type AnchorNavItem = { id: string; label: string };

export function AnchorNavigation({
  items,
  stickyTop = "top-16 lg:top-20",
}: {
  items: AnchorNavItem[];
  stickyTop?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Section navigation"
      className={`sticky z-30 ${stickyTop} border-y border-line bg-white/95 backdrop-blur`}
    >
      <div className="container-site">
        <ul className="flex items-center gap-7 overflow-x-auto whitespace-nowrap py-3 text-sm font-medium text-ink/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-flame"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------------
 * OverviewSplitSection — 50/50 split: text left, large 4:3 image right.
 * Spec §6 & §7 — Hero / Overview.
 * ---------------------------------------------------------------- */
export function OverviewSplitSection({
  id,
  eyebrow,
  title,
  paragraphs,
  cta,
  image,
  imageAlt,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
  image: string;
  imageAlt?: string;
  bg?: "bg-white" | "bg-shade";
}) {
  return (
    <section id={id} className={`${bg} py-section-lg`}>
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — text */}
          <div className="order-1">
            <Reveal>
              {eyebrow && (
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft"
                  />
                  <span className="text-xs font-semibold tracking-[0.08em] text-flame sm:text-sm">
                    {eyebrow}
                  </span>
                </div>
              )}
              <h2 className="mt-4 text-[clamp(36px,4.6vw,56px)] font-semibold leading-[1.05] tracking-tight text-ink">
                {title}
              </h2>
              <div className="mt-6 max-w-xl space-y-4">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-relaxed text-body sm:text-[18px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {cta && (
                <Link
                  href={cta.href}
                  className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-flame"
                >
                  {cta.label}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
            </Reveal>
          </div>

          {/* Right — large 4:3 image, no rounded card */}
          <div className="order-2">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden bg-shade">
                <Image
                  src={image}
                  alt={imageAlt ?? title}
                  width={760}
                  height={570}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * FocusAreasGrid — 4-col editorial grid (flat, NO cards).
 * Spec §9 — Focus Areas.
 * Uses thin separators + typography-driven design.
 * ---------------------------------------------------------------- */
export function FocusAreasGrid({
  id,
  eyebrow,
  title,
  lead,
  areas,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  areas: { icon?: LucideIcon; title: string; desc: string }[];
  bg?: "bg-white" | "bg-shade";
}) {
  if (!areas || areas.length === 0) return null;
  return (
    <section id={id} className={`${bg} py-section-lg`}>
      <div className="container-site">
        <Reveal>
          <SectionHeading
            label={eyebrow ? `[ ${eyebrow} ]` : undefined}
            title={title}
            lead={lead}
            align="left"
          />
        </Reveal>
        <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                key={a.title}
                delay={Math.min(i * 0.06, 0.3)}
                className="border-b border-r border-line p-8 last:border-r-0"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon aria-hidden className="size-6 text-flame" />
                  )}
                </div>
                <p className="mt-5 text-lg font-semibold leading-snug text-ink">
                  {a.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {a.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * SolutionsImageGrid — image+text cards (image-first).
 * Spec §10 & §11 — Solutions Section.
 * Each tile: 16:9 image on top, then heading + desc + arrow link.
 * NO big rounded cards.
 *
 * `columns` prop picks the desktop grid:
 *   - 2 (default) — large editorial cards, 28-32px headings
 *   - 3           — HCL-tech retail-services style, smaller cards,
 *                   20-22px headings, tighter spacing, 6-tile grid
 *                   (3 cols × 2 rows). Matches the reference at
 *                   https://www.hcltech.com/retail-services.
 * ---------------------------------------------------------------- */
export function SolutionsImageGrid({
  id,
  eyebrow,
  title,
  lead,
  items,
  bg = "bg-shade",
  columns = 2,
  closingQuote,
  closingBg = "bg-ink",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  items: {
    image?: string;
    title: string;
    desc: string;
    href?: string;
  }[];
  bg?: "bg-white" | "bg-shade";
  columns?: 2 | 3;
  closingQuote?: string;
  closingBg?: "bg-ink" | "bg-brand" | "bg-white";
}) {
  if (!items || items.length === 0) return null;

  // Use a single fallback image if items don't supply their own.
  const fallback = items.find((i) => i.image)?.image;

  // Grid + per-card sizing picked by column count.
  const gridClass =
    columns === 3
      ? "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      : "grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20";
  const imgSizes =
    columns === 3
      ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      : "(min-width: 1024px) 50vw, 100vw";

  return (
    <>
      <section id={id} className={`${bg} py-section-lg`}>
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label={eyebrow ? `[ ${eyebrow} ]` : undefined}
              title={title}
              lead={lead}
              align="left"
            />
          </Reveal>

          <div className={`mt-12 grid ${gridClass}`}>
            {items.map((item, i) => {
              const img = item.image ?? fallback ?? "/images/wp/2025-01/about.jpg";
              return (
                <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
                  <article className="group relative overflow-hidden bg-shade">
                    {/* Image — always visible, scales on hover */}
                    <Image
                      src={img}
                      alt={item.title}
                      width={720}
                      height={405}
                      sizes={imgSizes}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Permanent bottom gradient — ALWAYS visible so the
                     * overlaid title is legible against any image. Deepens
                     * slightly on hover (60% → 100% opacity via the second
                     * overlay layer below). */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1/2"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,3,61,0.92) 0%, rgba(0,3,61,0.78) 38%, rgba(0,3,61,0.35) 75%, rgba(0,3,61,0) 100%)",
                      }}
                    />

                    {/* Second overlay — extends gradient UP on hover so the
                     * description has a backdrop when it slides in. */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-2/3 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,3,61,0.96) 0%, rgba(0,3,61,0.7) 50%, rgba(0,3,61,0) 100%)",
                      }}
                    />

                    {/* Title — ALWAYS visible at the bottom of the image
                     * (overlaid on the permanent gradient). This is what
                     * the user asked for — title visible by default, not
                     * only on hover. */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <span
                        aria-hidden
                        className="mb-2 block h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft"
                      />
                      <h3
                        className={
                          columns === 3
                            ? "text-[20px] font-semibold leading-snug text-white sm:text-[22px]"
                            : "text-[26px] font-semibold leading-snug text-white sm:text-[30px]"
                        }
                      >
                        {item.title}
                      </h3>

                      {/* Description + Read more — hidden by default, fade +
                       * slide up on hover (the gradient above deepens to
                       * give them a legible backdrop). */}
                      <div className="grid max-h-0 grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                        <div className="overflow-hidden">
                          <p
                            className={
                              columns === 3
                                ? "mt-2 text-[13px] leading-relaxed text-white/75 sm:text-[14px]"
                                : "mt-2.5 text-[15px] leading-relaxed text-white/80 sm:text-[16px]"
                            }
                          >
                            {item.desc}
                          </p>
                          {item.href && (
                            <Link
                              href={item.href}
                              className="group/arrow mt-3 inline-flex items-center gap-2 text-sm font-semibold text-flame transition-colors hover:text-flame-soft"
                            >
                              Read more
                              <ArrowRight
                                aria-hidden
                                className="size-4 transition-transform group-hover/arrow:translate-x-1"
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optional closing quote band — same treatment as SolutionsSection */}
      {closingQuote && (
        <section className={`${closingBg} relative overflow-hidden py-16 lg:py-20`}>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-flame/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-flame/10 blur-3xl"
          />
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-15" />
          <div className="container-site relative">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <span
                  aria-hidden
                  className="mx-auto mb-6 block h-[2px] w-12 rounded-full bg-gradient-to-r from-flame to-flame-soft"
                />
                <p className="text-display-md font-bold leading-tight text-white sm:text-display-lg">
                  {closingQuote}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

/* ----------------------------------------------------------------
 * StatisticsStrip — horizontal metric strip with vertical separators.
 * Spec §20 — Statistics. NO cards. NO shadows.
 * ---------------------------------------------------------------- */
export function StatisticsStrip({
  id,
  eyebrow,
  title,
  stats,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  stats: { value: string; label: string }[];
  bg?: "bg-white" | "bg-shade" | "bg-ink";
}) {
  if (!stats || stats.length === 0) return null;

  const isDark = bg === "bg-ink";
  return (
    <section
      id={id}
      className={`${bg} ${isDark ? "text-white" : ""} py-section-lg`}
    >
      <div className="container-site">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-12 max-w-3xl">
              {eyebrow && (
                <span
                  className={`section-label ${isDark ? "!text-brand-light" : ""}`}
                >
                  [ {eyebrow} ]
                </span>
              )}
              {title && (
                <h2
                  className={`mt-3 text-[clamp(28px,3vw,40px)] font-semibold leading-snug ${isDark ? "text-white" : "text-ink"}`}
                >
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-2 gap-0 border-y border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={Math.min(i * 0.06, 0.3)}
              className={`p-8 ${
                i < stats.length - 1 ? "border-r border-line lg:border-r" : ""
              } ${i % 2 === 1 ? "border-r-0 lg:border-r" : ""}`}
            >
              <p
                className={`text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-tight ${
                  isDark ? "text-flame" : "text-ink"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  isDark ? "text-white/70" : "text-body"
                }`}
              >
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * FinalCTADramatic — dark dramatic CTA band.
 * Spec §23 — Final CTA. Full-width, dark, large type, minimal content.
 * ---------------------------------------------------------------- */
export function FinalCTADramatic({
  eyebrow,
  title,
  desc,
  primaryCta,
  secondaryCta,
  image,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-section-md text-ink border-t border-line">
      <div className="container-site relative text-center">
        <Reveal>
          {eyebrow && (
            <span className="section-label !mx-auto !block">
              [ {eyebrow} ]
            </span>
          )}
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-tight text-ink">
            {title}
          </h2>
          {desc && (
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-body sm:text-[18px]">
              {desc}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryCta.href}
              className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full bg-flame px-8 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-flame-soft"
            >
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-brand/30 bg-shade px-7 text-sm font-semibold text-brand transition-colors hover:border-flame hover:text-flame"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * FAQAccordionRows — full-width horizontal-divider rows.
 * Spec §24 — FAQ. No boxed cards. Single open item at a time.
 * ---------------------------------------------------------------- */
export function FAQAccordionRows({
  id,
  eyebrow,
  title,
  items,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: { q: string; a: string }[];
  bg?: "bg-white" | "bg-shade";
}) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items || items.length === 0) return null;

  return (
    <section id={id} className={`${bg} py-section-lg`}>
      <div className="container-site">
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="section-label">[ {eyebrow} ]</span>
            )}
            <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] font-semibold leading-snug text-ink">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl border-t border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-flame"
                >
                  <span
                    className={`text-[18px] font-semibold leading-snug sm:text-[20px] ${
                      isOpen ? "text-flame" : "text-ink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="shrink-0 text-ink/50">
                    {isOpen ? (
                      <Minus aria-hidden className="size-5" />
                    ) : (
                      <Plus aria-hidden className="size-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-8 text-[16px] leading-relaxed text-body sm:text-[17px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * WhyUsEditorial — large editorial block + CTA.
 * Spec §19 — Why Us.
 * ---------------------------------------------------------------- */
export function WhyUsEditorial({
  id,
  eyebrow,
  title,
  paragraphs,
  cta,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
  bg?: "bg-white" | "bg-shade";
}) {
  return (
    <section id={id} className={`${bg} py-section-lg`}>
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            {eyebrow && (
              <span className="section-label !mx-auto !block">[ {eyebrow} ]</span>
            )}
            <div
              aria-hidden
              className="mx-auto mt-3 mb-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-flame to-flame-soft"
            />
            <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-tight text-ink">
              {title}
            </h2>
            <div className="mt-7 space-y-4 text-left">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-body sm:text-[18px]"
                >
                  {p}
                </p>
              ))}
            </div>
            {cta && (
              <Link
                href={cta.href}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                {cta.label}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * EditorialParagraphs — max-w-1100px prose block (single column).
 * Spec §8 — Featured Content.
 * ---------------------------------------------------------------- */
export function EditorialParagraphs({
  id,
  eyebrow,
  title,
  paragraphs,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
  bg?: "bg-white" | "bg-shade";
}) {
  return (
    <section id={id} className={`${bg} py-section-lg`}>
      <div className="container-site">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            {eyebrow && (
              <span className="section-label">[ {eyebrow} ]</span>
            )}
            {title && (
              <h2 className="mt-3 text-[clamp(32px,4vw,48px)] font-semibold leading-snug text-ink">
                {title}
              </h2>
            )}
            <div className="mt-7 space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-body sm:text-[18px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
