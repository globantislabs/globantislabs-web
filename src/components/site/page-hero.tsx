import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/**
 * PageHero — minimal full-bleed image hero for any sub-page.
 *
 * Same treatment as ServiceHero:
 * - Full-bleed background image with navy scrim (left-heavy for F-pattern)
 * - Text-only breadcrumb (no logo)
 * - Eyebrow label with flame rule
 * - Large H1 title
 *
 * Removed (per user request): description, CTAs, KPIs — those live in body sections below.
 */
export function PageHero({
  title,
  label,
  image,
  crumbs,
}: {
  title: string;
  label?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  const heroImage = image ?? "/images/wp/2025-01/about.jpg";
  const trail = crumbs ?? [];

  return (
    <section className="relative flex min-h-[340px] items-center overflow-hidden bg-ink lg:min-h-[420px]">
      {/* Background image */}
      <Image
        src={heroImage}
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

      {/* Content — minimal: breadcrumb + eyebrow + title only */}
      <div className="container-site relative w-full pt-16 pb-6 lg:pt-24 lg:pb-8">
        <div className="max-w-3xl">
          {/* Breadcrumb — text-only, no logo */}
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

          {/* Eyebrow */}
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

          {/* Title */}
          <h1 className="mt-4 text-display-xl font-bold leading-[1.04] text-white">
            {title}
          </h1>
        </div>
      </div>

      {/* Bottom edge — shared accent thread */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
