import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/**
 * PageHero — multi-variant hero for any sub-page.
 *
 * Variants (per it-page-designer skill Appendix A):
 *  - `fullbleed-overlay`     Full-width photo + navy scrim + left-aligned text. (default, original)
 *  - `split-image-right`     Text left (7 cols), photo right (5 cols) with rounded
 *                             corners + floating stat chip. Light background.
 *  - `split-image-left`      Mirror of split-image-right.
 *  - `diagonal-crop`         Photo cropped with a diagonal clip-path, text on a
 *                             solid navy brand block. Two-column 50/50 layout.
 *  - `centered-logo-strip`   Centered headline + CTA + partner / client logo row
 *                             below. Optional wide photo strip above the logos.
 *
 * Same treatment rules across all variants:
 *  - Breadcrumb (text-only, no logo)
 *  - Eyebrow label with flame rule
 *  - Single H1 title
 *  - Optional description (split + diagonal + centered variants)
 */
export type PageHeroVariant =
  | "fullbleed-overlay"
  | "split-image-left"
  | "split-image-right"
  | "diagonal-crop"
  | "centered-logo-strip";

export function PageHero({
  title,
  label,
  image,
  crumbs,
  variant = "fullbleed-overlay",
  description,
  statChip,
  partners,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  label?: string;
  image?: string;
  crumbs?: Crumb[];
  variant?: PageHeroVariant;
  description?: string;
  statChip?: { value: string; label: string };
  partners?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
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

  if (variant === "diagonal-crop") {
    return (
      <DiagonalCropHero
        title={title}
        label={label}
        image={heroImage}
        crumbs={trail}
        description={description}
      />
    );
  }

  if (variant === "centered-logo-strip") {
    return (
      <CenteredLogoStripHero
        title={title}
        label={label}
        crumbs={trail}
        description={description}
        partners={partners}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
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

/* ----------------------------------------------------------------
 * Diagonal-crop hero — text on a solid navy brand block (left),
 * photo on the right with a diagonal clip-path edge that bleeds
 * under the text block. Two-column 50/50 layout, dark-on-light
 * contrast.
 * ---------------------------------------------------------------- */
function DiagonalCropHero({
  title,
  label,
  image,
  crumbs,
  description,
}: {
  title: string;
  label?: string;
  image: string;
  crumbs: Crumb[];
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        {/* Left — navy brand block */}
        <div className="relative overflow-hidden bg-ink px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          {/* Decorative grid + flame orb */}
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-20 size-72 rounded-full bg-flame/15 blur-3xl"
          />

          {/* Diagonal clip on the right edge so the photo bleeds under */}
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-16 hidden lg:block"
            style={{
              background: "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0) 50%), linear-gradient(135deg, #00033d 50%, transparent 50%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 100% 50%, 0 50%)",
            }}
          />

          <div className="relative max-w-xl">
            {crumbs.length > 0 && (
              <nav
                aria-label="Breadcrumb"
                className="mb-3 flex flex-wrap items-center gap-1.5 text-xs text-white/60"
              >
                {crumbs.map((c, i) => (
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
                    {i < crumbs.length - 1 && (
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

            {description && (
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right — photo with diagonal crop on the LEFT edge */}
        <div className="relative min-h-[320px] overflow-hidden bg-shade lg:min-h-[460px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Subtle bottom-left navy vignette to tie back to the brand block */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to top, rgba(0,3,61,0.55) 0%, rgba(0,3,61,0) 100%)",
            }}
          />
          {/* Mobile-only top scrim so the diagonal seam reads cleanly */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/10 to-transparent lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
 * Centered logo-strip hero — centered headline + CTAs + a row of
 * partner / client names below. No photography in this variant
 * (it's the "trust + brand" hero from the skill).
 * ---------------------------------------------------------------- */
function CenteredLogoStripHero({
  title,
  label,
  crumbs,
  description,
  partners,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  label?: string;
  crumbs: Crumb[];
  description?: string;
  partners?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const LinkCta = ({
    cta,
    variant,
  }: {
    cta?: { label: string; href: string };
    variant: "primary" | "secondary";
  }) => {
    if (!cta) return null;
    return (
      <Link
        href={cta.href}
        className={
          variant === "primary"
            ? "btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full bg-flame px-7 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-flame-soft"
            : "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white/90 transition-colors hover:border-flame hover:text-flame"
        }
      >
        {cta.label}
      </Link>
    );
  };

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Decorative brand orbs + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-flame/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-brand/30 blur-3xl"
      />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-15" />

      <div className="container-site relative py-16 text-center lg:py-24">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/60"
          >
            {crumbs.map((c, i) => (
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
                {i < crumbs.length - 1 && (
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
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden
              className="h-[2px] w-8 rounded-full bg-gradient-to-r from-flame to-flame-soft"
            />
            <span className="text-xs font-semibold tracking-[0.08em] text-flame sm:text-sm">
              {label}
            </span>
            <span
              aria-hidden
              className="h-[2px] w-8 rounded-full bg-gradient-to-l from-flame to-flame-soft"
            />
          </div>
        )}

        <h1 className="mx-auto mt-4 max-w-4xl text-display-lg font-bold leading-[1.08] text-white sm:text-display-xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <LinkCta cta={primaryCta} variant="primary" />
            <LinkCta cta={secondaryCta} variant="secondary" />
          </div>
        )}

        {partners && partners.length > 0 && (
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Trusted by teams across the UK, Canada, Dubai & beyond
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {partners.map((p, i) => (
                <span
                  key={i}
                  className="font-mono text-base font-semibold tracking-tight text-white/55 transition-colors hover:text-white"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
