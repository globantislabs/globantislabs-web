import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Quote,
  ShieldCheck,
  Users,
  Cpu,
  Globe2,
  Rocket,
  Clock,
  Scale,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import {
  whyChooseTop,
  whyChooseGrid,
  whyChooseComparison,
  whyChooseFAQ,
  whyFeatures,
  stats,
  valueTags,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Why Choose Us | Globantis Labs",
  description:
    "Senior engineers on every engagement, security-first by default, 24/5 follow-the-sun coverage, written technical recommendations in 24 hours and code ownership transferred to your team.",
  path: "/why-choose-us",
  keywords: [
    "why choose Globantis Labs",
    "trusted IT partner",
    "global software engineering",
    "secure software development",
    "engineering excellence",
  ],
});

const topIcons = [ShieldCheck, Clock, Globe2];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Reliability you can audit."
        label="Why choose us"
        image="/images/wp/2025-01/why_choose01.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
      />

      {/* ============ 1. Top three reasons — premium cards ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why Leading Businesses Choose Us ]"
              title={
                <>
                  Trust, support and{" "}
                  <span className="text-flame">global experience.</span>
                </>
              }
              lead="We combine technology, innovation, and industry expertise to build digital solutions that help businesses scale, adapt, and lead in a rapidly evolving digital world."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseTop.map((r, i) => {
              const Icon = topIcons[i];
              return (
                <Reveal
                  key={r.title}
                  delay={Math.min(i * 0.08, 0.32)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-8 hover:border-flame/40 hover:shadow-lift">
                    {/* top accent bar */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Icon */}
                    <div>
                      <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" />
                      </span>
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {r.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 2. Stats band — engineering outcomes ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="section-label !text-brand-light">[ By the numbers ]</span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                A track record clients can rely on.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={Math.min(i * 0.08, 0.32)} className="h-full">
                <div className="flex h-full flex-col gap-2 p-6 sm:p-8">
                  <div aria-hidden className="rule-flame" />
                  <div className="mt-3 font-mono text-4xl font-bold leading-none text-white sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-tight text-white/60 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. The full picture — 6 disciplines ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ The full picture ]"
              title={
                <>
                  Six engineering disciplines we{" "}
                  <span className="text-flame">don't compromise on.</span>
                </>
              }
              lead="From how we hire to how we ship, every discipline below is observable inside our delivery dashboard — clients see the same numbers we do."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseGrid.map((g, i) => {
              const Icon = [Cpu, Rocket, ShieldCheck, Scale, Users, ShieldCheck][i] ?? Rocket;
              return (
                <Reveal
                  key={g.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <p className="mt-4 font-mono text-xs text-ink/45">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-display-sm font-bold text-ink">
                      {g.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-body">
                      {g.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. Comparison table — us vs typical vendors ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ How we compare ]"
              title={
                <>
                  What you get with Globantis, and what you{" "}
                  <span className="text-flame">typically don't</span> elsewhere.
                </>
              }
              lead="This isn't a sales pitch. Every row below is observable on day one of an engagement — ask us to prove any of them on the first call."
              align="center"
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
              {/* Header */}
              <div className="grid grid-cols-[1fr_5rem_5rem] items-center gap-2 border-b border-line bg-ink px-4 py-4 text-center sm:grid-cols-[1fr_10rem_10rem] sm:px-6">
                <p className="text-left text-xs font-semibold uppercase tracking-wider text-white/60">
                  Capability
                </p>
                <p className="text-sm font-bold text-brand-light">Globantis</p>
                <p className="text-sm font-bold text-white/40">Typical vendor</p>
              </div>
              {/* Rows */}
              {whyChooseComparison.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_5rem_5rem] items-center gap-2 px-4 py-4 text-center sm:grid-cols-[1fr_10rem_10rem] sm:px-6 ${
                    i % 2 === 0 ? "bg-shade" : "bg-white"
                  }`}
                >
                  <p className="text-left text-sm font-medium text-ink">
                    {row.label}
                  </p>
                  {row.us ? (
                    <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="size-4" />
                    </span>
                  ) : (
                    <X className="mx-auto size-5 text-ink/30" />
                  )}
                  {row.them ? (
                    <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="size-4" />
                    </span>
                  ) : (
                    <X className="mx-auto size-5 text-ink/30" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. Engineering principles — 4 navy cards ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Engineering principles ]"
              title="What every Globantis engineer signs up for."
              lead="Four principles that shape how we hire, how we ship and how we resolve the difficult trade-offs every complex project surfaces."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:border-flame/40 hover:bg-white/[0.07]">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-14 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                      {f.desc}
                    </p>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-4 font-mono text-[7rem] font-bold leading-none text-white/[0.04]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. Value pills + quote ============ */}
      <section className="bg-cream py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto size-10 text-flame" aria-hidden />
              <p className="mt-6 text-display-md font-bold leading-snug text-ink">
                &ldquo;Join our growing list of happy customers today — organizations
                across 12+ countries trust Globantis Labs to power their digital
                transformation.&rdquo;
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-2.5">
                {valueTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 7. FAQ ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ FAQ ]"
              title="Answers to the questions we hear most."
              lead="Real answers, not sales deflections. If your question isn't here, ask us on the next call."
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {whyChooseFAQ.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.05, 0.2)}>
                <details className="group card-lift rounded-2xl border border-line bg-white p-5 hover:border-flame/40 open:border-flame/40 open:shadow-lift [&_summary]:cursor-pointer">
                  <summary className="flex items-center justify-between text-base font-bold text-ink marker:content-none">
                    {item.q}
                    <ArrowRight
                      aria-hidden
                      className="size-4 shrink-0 text-brand transition-transform duration-300 ease-out-expo group-open:rotate-45"
                    />
                  </summary>
                  <p className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-body">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. CTA ============ */}
      <CTABand
        label="[ Ready to talk? ]"
        title="See the work process behind these promises."
        desc="Every promise above maps to a concrete stage in our delivery process. Read how we operate — then judge us against it."
        ctaHref="/work-process"
        ctaLabel="Read the work process"
        tone="brand"
      />
    </>
  );
}
