import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content-data";

export const metadata = buildMetadata({
  title: "Case Studies | Globantis Labs",
  description:
    "Real engineering work, with real metrics. Six case studies across fintech, healthcare, e-commerce, logistics, education and SaaS.",
  path: "/case-studies",
  keywords: ["case studies", "engineering portfolio", "client work", "metrics"],
});

export default function CaseStudiesPage() {
  return (
    <PageShell>
    <>
      <PageHero
        title="Case studies"
        label="Portfolio"
        image="/images/wp/2025-01/blog_new_03.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
      />

      {/* Intro + stats strip */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Real work, real metrics ]"
              title="Six engagements, six measurable outcomes."
              lead="Every case study below ships with the metrics that mattered to the client — conversion, latency, uptime, ROI. If we can't measure it, we don't put it in the case study."
            />
          </Reveal>

          {/* Aggregate stats */}
          <Reveal delay={0.1} className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {[
                { value: "6", label: "Case studies published" },
                { value: "38%", label: "Avg conversion uplift" },
                { value: "0.8s", label: "Best LCP shipped" },
                { value: "99.99%", label: "Best uptime SLA" },
              ].map((s) => (
                <div key={s.label} className="bg-shade p-6 text-center">
                  <div className="font-mono text-3xl font-bold text-ink sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-body">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case study list — alternating layout */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={cs.slug} delay={Math.min(i * 0.04, 0.2)}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group grid gap-8 rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift md:grid-cols-2 md:items-center md:p-8 lg:gap-12"
                  >
                    {/* Image */}
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl ${!isLeft ? "md:order-2" : ""}`}>
                      <Image
                        src={cs.heroImage}
                        alt={cs.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink backdrop-blur">
                        {cs.clientIndustry}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 text-xs text-body">
                        <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                          {cs.clientStage}
                        </span>
                        <span>·</span>
                        <span>{cs.duration} engagement</span>
                      </div>
                      <h2 className="mt-3 text-display-md font-bold leading-tight text-ink">
                        {cs.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-body">
                        {cs.excerpt}
                      </p>

                      {/* Top metrics inline */}
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        {cs.metrics.slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <div className="font-mono text-xl font-bold text-ink sm:text-2xl">
                              {m.value}
                            </div>
                            <div className="text-[10px] leading-tight text-body">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Read case study
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        label="[ Your case study next? ]"
        title="Want to be the next case study we publish?"
        desc="If you have an engineering challenge with measurable outcomes, we'd love to scope it. Book a free 30-minute consultation."
        ctaHref="/appointment"
        ctaLabel="Book a consultation"
        tone="brand"
      />
    </>
    </PageShell>
  );
}
