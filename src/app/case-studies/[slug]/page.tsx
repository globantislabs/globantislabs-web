import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Clock, Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return buildMetadata({
    title: `${cs.title} | Globantis Labs Case Study`,
    description: cs.excerpt,
    path: `/case-studies/${slug}`,
    keywords: cs.tags,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();

  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  // JSON-LD for CaseStudy / Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.excerpt,
    author: {
      "@type": "Organization",
      name: "Globantis Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "Globantis Labs",
    },
    keywords: cs.tags.join(", "),
    image: cs.heroImage,
  };

  return (
    <PageShell>
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={cs.title}
        label={cs.clientIndustry}
        image={cs.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
          { label: cs.clientIndustry },
        ]}
      />

      {/* Meta strip */}
      <section className="bg-shade py-section-sm">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-4 md:p-8">
              <MetaItem icon={Clock} label="Engagement" value={cs.duration} />
              <MetaItem icon={Users} label="Team" value={cs.team} />
              <MetaItem icon={CheckCircle2} label="Industry" value={cs.clientIndustry} />
              <MetaItem icon={CheckCircle2} label="Stage" value={cs.clientStage} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes — KPI band */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 size-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="section-label !text-brand-light">[ Outcomes ]</span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                The numbers that mattered to the client.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:grid-cols-4">
            {cs.metrics.map((m, i) => (
              <Reveal key={m.label} delay={Math.min(i * 0.08, 0.32)} className="h-full">
                <div className="flex h-full flex-col gap-2 p-6 sm:p-8">
                  <div aria-hidden className="rule-flame" />
                  <div className="mt-3 font-mono text-4xl font-bold leading-none text-white sm:text-5xl">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs leading-tight text-white/60 sm:text-sm">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution / Outcomes narrative */}
      <section className="bg-white py-section-md">
        <div className="container-site max-w-3xl">
          {/* Problem */}
          <Reveal>
            <SectionHeading label="[ The problem ]" title="What we walked into." />
            <div className="mt-6 space-y-4">
              {cs.problem.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Solution */}
          <Reveal className="mt-12">
            <SectionHeading label="[ The solution ]" title="What we built." />
            <div className="mt-6 space-y-4">
              {cs.solution.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Tech stack */}
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-line bg-shade p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                Tech stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Outcomes list */}
          <Reveal className="mt-12">
            <SectionHeading label="[ The outcomes ]" title="What changed for the client." />
            <ul className="mt-6 space-y-3">
              {cs.outcomes.map((o, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-line bg-shade px-4 py-3.5 text-sm font-medium text-ink"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-white p-8 text-center shadow-float md:p-12">
              <Quote aria-hidden className="mx-auto size-12 text-flame" />
              <p className="mt-6 text-display-md font-bold leading-snug text-ink">
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <div className="mt-6 flex flex-col items-center gap-1">
                <p className="font-bold text-ink">{cs.quote.author}</p>
                <p className="text-sm text-body">{cs.quote.role}</p>
              </div>
              <div
                aria-hidden
                className="absolute -left-12 -top-12 size-32 rounded-full bg-flame/10 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-12 -right-12 size-32 rounded-full bg-flame/10 blur-3xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other case studies */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="text-display-md font-bold text-ink">More case studies</h2>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                All case studies
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={Math.min(i * 0.05, 0.15)} className="h-full">
                <Link
                  href={`/case-studies/${o.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-shade hover:border-flame/40 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={o.heroImage}
                      alt={o.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                      {o.clientIndustry}
                    </span>
                    <h3 className="text-sm font-bold leading-tight text-ink">
                      {o.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-brand">
                      Read
                      <ArrowRight className="size-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        label="[ Your case study next? ]"
        title="Want results like these?"
        desc="Book a free 30-minute consultation. We'll review your situation and propose a small first milestone — same playbook as the case studies above."
        ctaHref="/appointment"
        ctaLabel="Book a consultation"
        tone="ink"
      />
    </>
    </PageShell>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand">
        <Icon className="size-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/45">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold leading-tight text-ink">{value}</p>
      </div>
    </div>
  );
}
