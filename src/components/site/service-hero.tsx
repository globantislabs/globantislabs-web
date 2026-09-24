import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import type { Service } from "@/lib/site-data";

type Crumb = { label: string; href?: string };

/**
 * ServiceHero — full-bleed image hero for the top of every service detail page.
 *
 * Spec (per user request):
 * - Full-width background image (unique per service — set on service.banner.image)
 * - Navy ink scrim on the left for F-pattern text legibility
 * - Breadcrumb at top-left
 * - Eyebrow label + H1 title + description + CTA button
 * - 3-4 KPI strip at the bottom of the hero
 *
 * Style references: Stripe / Apple service pages, full-bleed photo + scrim + text.
 */
export function ServiceHero({
  service,
  crumbs,
}: {
  service: Pick<Service, "title" | "desc" | "banner" | "stats">;
  crumbs?: Crumb[];
}) {
  const heroImage = service.banner?.image ?? "/images/wp/2025-01/about.jpg";
  const stats = (service.stats ?? []).slice(0, 4);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink lg:min-h-[80vh]">
      {/* Background image */}
      <Image
        src={heroImage}
        alt={service.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Scrim — left-heavy for F-pattern text legibility + bottom vignette into ink */}
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
      <div className="container-site relative w-full py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/60"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Logo variant="dark" />
            </Link>
            {(crumbs ?? []).map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <ChevronRight className="size-3 text-white/30" aria-hidden />
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
              </span>
            ))}
          </nav>

          {/* Eyebrow + title */}
          {service.banner?.label && (
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="h-[3px] w-11 rounded-full bg-gradient-to-r from-flame to-flame-soft"
              />
              <span className="text-sm font-semibold tracking-[0.08em] text-flame sm:text-base">
                {service.banner.label}
              </span>
            </div>
          )}

          <h1 className="mt-5 text-display-xl font-bold text-white">
            {service.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {service.desc}
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
            >
              Discuss your project
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/appointment"
              className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Book a free call
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          {/* KPI strip at the bottom of the hero */}
          {stats.length > 0 && (
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-8 lg:mt-16">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <div className="font-mono text-3xl font-bold leading-none text-white sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs leading-tight text-white/60 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
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
