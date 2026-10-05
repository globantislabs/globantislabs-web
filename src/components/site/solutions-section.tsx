import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/primitives";

/* ============================================================
 * SolutionsSection — HCL-tech-style "Powering the future of X"
 * block. Renders an intro (eyebrow + title + lead) followed by a
 * responsive grid of solution tiles (icon + title + desc), then
 * an optional closing tagline band.
 *
 * Used by:
 *   - Industry pages (industries/[slug]/page.tsx → IndustryShowcase)
 *   - Service pages (services/[slug]/page.tsx)
 *
 * Layout variants:
 *   - tiles in 2-col / 3-col / 4-col grid based on count
 *   - alternating bg colour per page (caller chooses)
 *   - closing quote on a contrasting band
 * ============================================================ */

export type SolutionTile = {
  icon?: LucideIcon;
  title: string;
  desc: string;
};

export function SolutionsSection({
  intro,
  tiles,
  closingQuote,
  bg = "bg-shade",
  closingBg = "bg-ink",
  image,
}: {
  intro?: { eyebrow?: string; title: string; desc?: string };
  tiles: SolutionTile[];
  closingQuote?: string;
  bg?: "bg-white" | "bg-shade" | "bg-cream";
  closingBg?: "bg-ink" | "bg-brand" | "bg-white";
  image?: string;
}) {
  if (!tiles || tiles.length === 0) return null;

  // Grid columns picked by tile count so the layout always feels right.
  const gridCols =
    tiles.length <= 3
      ? "md:grid-cols-3"
      : tiles.length === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : tiles.length === 5
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : tiles.length === 6
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : tiles.length <= 8
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* Intro + tiles grid */}
      <section className={`${bg} py-section-md`}>
        <div className="container-site">
          {intro && (
            <Reveal>
              <SectionHeading
                label={intro.eyebrow ? `[ ${intro.eyebrow} ]` : undefined}
                title={intro.title}
                lead={intro.desc}
                align="center"
              />
            </Reveal>
          )}

          <div className={`mt-12 grid gap-5 ${gridCols}`}>
            {tiles.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={Math.min(i * 0.06, 0.36)}>
                  <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                    {/* Flame top-bar on hover */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between">
                      {Icon && (
                        <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors group-hover:bg-flame group-hover:text-white">
                          <Icon aria-hidden className="size-6" />
                        </span>
                      )}
                    </div>
                    <p className="mt-5 text-base font-bold leading-snug text-ink">
                      {t.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {t.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing quote band */}
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

/* ============================================================
 * OverviewQuote — big italicised pull-quote rendered between
 * the prose overview and the solutions grid. Pure typography
 * moment that breaks the page rhythm.
 * ============================================================ */
export function OverviewQuote({
  quote,
  bg = "bg-white",
}: {
  quote: string;
  bg?: "bg-white" | "bg-shade" | "bg-cream";
}) {
  if (!quote) return null;
  return (
    <section className={`${bg} py-12 lg:py-16`}>
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span
              aria-hidden
              className="mx-auto mb-5 block h-[2px] w-10 rounded-full bg-flame"
            />
            <p className="font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl lg:text-[34px]">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
