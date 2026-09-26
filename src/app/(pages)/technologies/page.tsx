import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Server,
  Smartphone,
  BrainCircuit,
  Cloud,
  Database,
  Boxes,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { technologiesGrid, technologyCategories } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Technologies | Globantis Labs",
  description:
    "Seven engineering categories — frontend, backend, mobile, AI & data, cloud, database and DevOps — under one roof. We pick boring, proven technology for production and adopt frontier tools only when they earn their keep.",
  path: "/technologies",
  keywords: [
    "software technologies",
    "tech stack",
    "frontend engineering",
    "backend engineering",
    "mobile development",
    "AI ML",
    "cloud infrastructure",
    "database",
    "DevOps",
  ],
});

/** Icon per category — 1:1 with the 7 entries in `technologyCategories`
 *  (Frontend, Backend, Mobile, AI & Data, Cloud, Database, DevOps). */
const categoryIcons = [
  Layers,
  Server,
  Smartphone,
  BrainCircuit,
  Cloud,
  Database,
  Boxes,
];

const principles = [
  {
    title: "Boring technology first",
    desc: "We pick proven tools for production — and reach for frontier tools only when they earn their keep.",
  },
  {
    title: "Owned, not rented",
    desc: "Every tool we use, we operate ourselves. No 'we'll figure out Kubernetes later' — we run it daily.",
  },
  {
    title: "Versioned, observed, repeatable",
    desc: "Code, infra and ML models all versioned. Observability from day one. Every change rolls back in one command.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        title="Technologies"
        label="Technologies"
        image="/images/wp/2025-02/technology1.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
      />

      {/* ============ 1. Intro — narrative (2-col) ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ Tech stack ]"
                title="Technologies"
                lead="Technology That Drives Digital Excellence"
              />
              <p className="mt-5 text-[15px] leading-relaxed text-body">
                We combine modern technologies, intelligent engineering, and
                scalable architectures to build secure, high-performance
                digital solutions for businesses worldwide.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  See services
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  Start a project
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            {/* Right — editorial image with offset cream frame */}
            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -left-5 -bottom-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-02/technology1.png"
                  alt="Globantis Labs technology workspace"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. Tech logos — proof of stack (navy) ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="section-label !text-brand-light">
                [ Stack proof ]
              </span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                The tools our engineers reach for.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                Real tools, used in real production environments — across 250+
                shipped projects and three offices worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {technologiesGrid.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur transition-colors duration-200 hover:border-flame/40 hover:bg-white/[0.07]"
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={24}
                    height={24}
                    className="size-5 object-contain"
                    unoptimized
                  />
                  <span className="text-sm font-medium text-white/85">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. Categories — 7 cards (shade) ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ By category ]"
              title="Seven categories. One engineering culture."
              lead="Filter by category to see what we'd reach for on day one of a new engagement. Each category below maps to a specific team inside Globantis."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {technologyCategories.map((cat, i) => {
              const Icon = categoryIcons[i] ?? Layers;
              return (
                <Reveal
                  key={cat.name}
                  className="h-full"
                  delay={Math.min(i * 0.07, 0.35)}
                >
                  <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift lg:p-8">
                    {/* Signature flame top-bar */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Soft cream glow in top-right corner — appears on hover */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-flame/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Header — icon tile only, NO numbered marker */}
                    <div className="relative">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" aria-hidden />
                      </div>
                    </div>

                    {/* Title + description */}
                    <h3 className="relative mt-6 text-display-sm font-bold text-ink">
                      {cat.name}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-body md:text-[15px]">
                      {cat.desc}
                    </p>

                    {/* Tech items as chips — pinned to card bottom */}
                    <div className="relative mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-line bg-shade px-3.5 py-1.5 text-xs font-medium text-ink/80 transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. Engineering principles strip (white) ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Engineering principles ]"
              title="How we choose what makes the cut."
              lead="Three rules govern every technology decision we make — from the frameworks in our stack to the tools we operate in production."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                className="h-full"
                delay={Math.min(i * 0.07, 0.21)}
              >
                <div className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-shade p-7 hover:border-flame/30 hover:shadow-lift lg:p-8">
                  {/* Signature flame rule */}
                  <div aria-hidden className="rule-flame" />
                  <h3 className="mt-4 text-display-sm font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body md:text-[15px]">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. CTA (ink) ============ */}
      <CTABand
        label="[ Stack match ]"
        title="Want engineers who know your stack?"
        desc="Tell us what you're running today. We'll match you with senior engineers who have shipped production code on the same technology."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="ink"
      />
    </>
  );
}
