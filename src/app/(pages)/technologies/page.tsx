import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  PenTool,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { technologiesGrid, technologyCategories } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Technologies | Globantis Labs",
  description:
    "Our engineering stack — frontend, backend, data, cloud, AI/ML. We pick boring, proven technology for production and adopt frontier tools only when they earn their keep.",
  path: "/technologies",
  keywords: [
    "software technologies",
    "tech stack",
    "React",
    "AWS",
    "Kubernetes",
    "AI ML",
  ],
});

const categoryIcons = [PenTool, Server, Database, Cloud, BrainCircuit];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        title="Technologies"
        label="Technologies"
        image="/images/wp/2025-02/technology1.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
      />

      {/* ============ 1. Intro — narrative ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ Toolchain ]"
                title={
                  <>
                    We pick boring, proven technology for{" "}
                    <span className="text-flame">production.</span>
                  </>
                }
                lead="Our engineers use these tools every day. We adopt frontier tools only when they earn their keep — meaning: a real workload, a clear win, and a documented trade-off."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                Every entry below has shipped production code for at least one
                of our clients. We don't list technologies because they're
                trendy — we list them because we've operated them at scale.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { label: "Active technologies", value: "30+" },
                  { label: "Categories", value: "5" },
                  { label: "Production deploys / wk", value: "200+" },
                  { label: "Uptime SLA", value: "99.99%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-line bg-shade p-3"
                  >
                    <p className="font-mono text-lg font-bold text-ink">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink/45">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

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

      {/* ============ 2. Tech logos marquee — proof of stack ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="section-label !text-brand-light">[ Stack proof ]</span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                The logos our engineers reach for.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                Real tools, used in real production environments — across 250+
                shipped projects.
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
                  <span className="text-sm font-medium text-white/85">{t.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 3. Categories — detailed sections ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ By category ]"
              title="Five disciplines. One engineering culture."
              lead="Filter by category to see what we'd reach for on day one of a new engagement. Each category below maps to a specific team inside Globantis."
              align="center"
            />
          </Reveal>

          <div className="mt-14 space-y-8">
            {technologyCategories.map((cat, i) => {
              const Icon = categoryIcons[i] ?? Layers;
              return (
                <Reveal key={cat.name} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="group grid gap-6 rounded-2xl border border-line bg-white p-6 hover:border-flame/30 hover:shadow-lift md:grid-cols-[16rem_1fr] md:items-center md:p-8">
                    {/* Left — category head */}
                    <div className="flex items-start gap-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-ink/45">
                          {String(i + 1).padStart(2, "0")} / 05
                        </span>
                        <h3 className="mt-0.5 text-display-sm font-bold text-ink">
                          {cat.name}
                        </h3>
                      </div>
                    </div>

                    {/* Right — desc + items */}
                    <div>
                      <p className="text-sm leading-relaxed text-body md:text-[15px]">
                        {cat.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
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

      {/* ============ 4. Engineering principles strip ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-6 rounded-2xl border border-line bg-shade p-6 md:grid-cols-3 md:p-8">
              {[
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
              ].map((p, i) => (
                <Reveal key={p.title} delay={Math.min(i * 0.07, 0.2)}>
                  <div className="flex flex-col gap-2">
                    <div aria-hidden className="rule-flame" />
                    <h3 className="mt-3 text-base font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. CTA ============ */}
      <CTABand
        label="[ Stack match ]"
        title="Want engineers who know your stack?"
        desc="Tell us what you're running today. We'll match you with senior engineers who have shipped production code on the same technology."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="brand"
      />
    </>
  );
}
