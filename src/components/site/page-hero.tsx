import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/**
 * PageHero — multi-variant hero for any sub-page.
 *
 * Variants (per it-page-designer skill Appendix A):
 *  - `fullbleed-overlay`  Full-width photo + navy scrim + left-aligned text. (default, original)
 *  - `split-image-right`  Text left (7 cols), photo right (5 cols) with rounded
 *                          corners + floating stat chip. Light background.
 *  - `split-image-left`   Mirror of split-image-right.
 *
 * Other variants from the skill (centered-logo-strip, diagonal-crop,
 * gradient-mesh-stats) require data we don't have on every page
 * (partner logo strip, brand stats band, etc.) so they fall back to
 * `fullbleed-overlay`. Easy to extend later when the data exists.
 *
 * Same treatment rules across all variants:
 *  - Breadcrumb (text-only, no logo)
 *  - Eyebrow label with flame rule
 *  - Single H1 title
 *  - Optional description (only on split variants, since the fullbleed
 *    scrim already crowds text)
 */
export type PageHeroVariant =
  | "fullbleed-overlay"
  | "split-image-left"
  | "split-image-right";

export function PageHero({
  title,
  label,
  image,
  crumbs,
  variant = "fullbleed-overlay",
  description,
  statChip,
}: {
  title: string;
  label?: string;
  image?: string;
  crumbs?: Crumb[];
  variant?: PageHeroVariant;
  description?: string;
  statChip?: { value: string; label: string };
}) {
  const heroImage = image ?? "/images/wp/2025-01/about.jpg";
  const trail = crumbs ?? [];

  if (variant === "split-image-left" || variant === "split-image-right") {
    return (
      <SplitHero
        title={title}
        label={label}
        image={heroImage}
        crumbs={trail}
        side={variant === "split-image-left" ? "left" : "right"}
        description={description}
        statChip={statChip}
      />
    );
  }

  return (
    <FullbleedHero
      title={title}
      label={label}
      image={heroImage}
      crumbs={trail}
    />
  );
}

/* ----------------------------------------------------------------
 * Fullbleed overlay hero (original behaviour — unchanged).
 * ---------------------------------------------------------------- */
function FullbleedHero({
  title,
  label,
  image,
  crumbs,
}: {
  title: string;
  label?: string;
  image: string;
  crumbs: Crumb[];
}) {
  const trail = crumbs;
  return (
    <section className="relative flex min-h-[260px] items-center overflow-hidden bg-ink lg:min-h-[300px]">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Scrim — left-heavy for F-pattern text legibility + bottom vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,3,61,0.94) 0%, rgba(11,22,94,0.82) 40%, rgba(11,22,94,0.38) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(0,3,61,0.85) 0%, rgba(0,3,61,0) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="container-site relative w-full pt-14 pb-5 lg:pt-20 lg:pb-6">
        <div className="max-w-3xl">
          {trail.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-3 flex flex-wrap items-center gap-1.5 text-xs text-white/60"
            >
              {trail.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {i < trail.length - 1 && (
                    <ChevronRight
                      className="size-3 text-white/30"
                      aria-hidden
                    />
                  )}
                </span>
              ))}
            </nav>
          )}

          {label && (
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft"
              />
              <span className="text-xs font-semibold tracking-[0.08em] text-flame sm:text-sm">
                {label}
              </span>
            </div>
          )}

          <h1 className="mt-3 text-display-lg font-bold leading-[1.08] text-white">
            {title}
          </h1>
        </div>
      </div>

      {/* Bottom edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}

/* ----------------------------------------------------------------
 * Split hero — text on one side, photo on the other.
 * Light background (bg-shade) so it visually breaks from the
 * fullbleed-overlay style used on most other pages.
 * ---------------------------------------------------------------- */
function SplitHero({
  title,
  label,
  image,
  crumbs,
  side,
  description,
  statChip,
}: {
  title: string;
  label?: string;
  image: string;
  crumbs: Crumb[];
  side: "left" | "right";
  description?: string;
  statChip?: { value: string; label: string };
}) {
  const textOnLeft = side === "right"; // "split-image-right" → text on left, image on right
  return (
    <section className="relative overflow-hidden bg-shade">
      {/* Decorative brand orb — soft top-right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-flame/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 grid-pattern opacity-[0.04]"
      />

      <div className="container-site relative py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* Text column */}
          <div className={textOnLeft ? "" : "lg:order-2"}>
            {crumbs.length > 0 && (
              <nav
                aria-label="Breadcrumb"
                className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-ink/55"
              >
                {crumbs.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="transition-colors hover:text-ink"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-ink">{c.label}</span>
                    )}
                    {i < crumbs.length - 1 && (
                      <ChevronRight
                        className="size-3 text-ink/30"
                        aria-hidden
                      />
                    )}
                  </span>
                ))}
              </nav>
            )}

            {label && (
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft"
                />
                <span className="text-xs font-semibold tracking-[0.08em] text-flame sm:text-sm">
                  {label}
                </span>
              </div>
            )}

            <h1 className="mt-3 text-display-lg font-bold leading-[1.08] text-ink">
              {title}
            </h1>

            {description && (
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-body sm:text-[17px]">
                {description}
              </p>
            )}

            {statChip && (
              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-float">
                <span className="text-display-sm font-bold text-flame">
                  {statChip.value}
                </span>
                <span className="text-xs leading-tight text-body">
                  {statChip.label}
                </span>
              </div>
            )}
          </div>

          {/* Image column */}
          <div className={textOnLeft ? "" : "lg:order-1"}>
            <div className="relative">
              {/* Offset cream frame */}
              <div
                aria-hidden
                className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-3xl border border-line bg-ink shadow-lift">
                <Image
                  src={image}
                  alt={title}
                  width={720}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[560px]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,22,94,0.55) 0%, rgba(11,22,94,0) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
