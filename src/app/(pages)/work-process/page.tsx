import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Map,
  PenTool,
  Code2,
  ClipboardCheck,
  UploadCloud,
  Activity,
  RefreshCw,
  ArrowRight,
  Clock,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { workProcessPhases } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Work Process | Globantis Labs",
  description:
    "Eight delivery phases from discovery to continuous improvement — a structured, transparent engineering loop that turns vision into value.",
  path: "/work-process",
  keywords: [
    "software delivery process",
    "engineering workflow",
    "agile development methodology",
    "project delivery phases",
  ],
});

/** Iconography for the eight phases — one icon per row, top-to-bottom. */
const phaseIcons = [
  Compass, // 01 Discover
  Map, // 02 Strategize
  PenTool, // 03 Design
  Code2, // 04 Develop
  ClipboardCheck, // 05 Test
  UploadCloud, // 06 Deploy
  Activity, // 07 Monitor
  RefreshCw, // 08 Evolve
];

const rituals = [
  {
    title: "Weekly review",
    desc: "Every Friday we ship a 30-minute review: what landed, what's queued for next week, blockers, and decisions we need from you.",
    icon: Compass,
  },
  {
    title: "Architecture board",
    desc: "Non-trivial design decisions pass through a senior-engineer review board before a single line of production code is written — risk caught early.",
    icon: ShieldCheck,
  },
  {
    title: "Quarterly review",
    desc: "Every 90 days, leadership reviews engineering outcomes against your business KPIs — not just velocity, sprint points, or commit count.",
    icon: Rocket,
  },
];

export default function WorkProcessPage() {
  return (
    <>
      <PageHero
        title="Our Work Process"
        label="Work process"
        image="/images/wp/2025-01/blog_new_05.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Work Process" }]}
      />

      {/* ============ 1. Intro — centered on white ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ How we work ]"
              title="Our Work Process"
              lead="From Vision to Value — A Structured Approach to Digital Excellence"
              align="center"
            />
            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-body">
              We follow a collaborative and transparent process that transforms
              ideas into scalable, reliable, and high-performing digital
              solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. Phases — sticky left + scrolling list right ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-16">
            {/* Left sticky heading */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div aria-hidden className="rule-flame" />
                <span className="section-label mt-5 block">
                  [ The delivery loop ]
                </span>
                <h2 className="text-display-lg font-bold text-ink">
                  Eight phases, one{" "}
                  <span className="text-flame">engineering loop.</span>
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-body">
                  Discovery doesn&apos;t end at kickoff. Design doesn&apos;t end
                  at hand-off. Each phase below feeds the next and feeds back
                  into the one before — so improvement is structural, not
                  occasional.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/60">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-4 text-brand" aria-hidden />
                    Two-week sprints
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <RefreshCw className="size-4 text-brand" aria-hidden />
                    Continuous loop
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="btn-lift mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  Start a project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Reveal>
            </div>

            {/* Right phase list with image breaks */}
            <div>
              {workProcessPhases.map((phase, i) => {
                const Icon = phaseIcons[i] ?? Code2;
                const isLast = i === workProcessPhases.length - 1;
                return (
                <div key={phase.phase}>
                  <Reveal delay={Math.min(i * 0.04, 0.24)}>
                    <div className="grid gap-4 border-t border-line py-6 sm:grid-cols-[2.75rem_3rem_1fr] sm:items-start sm:gap-5 sm:py-7">
                      {/* Mono number — small, never oversized */}
                      <span className="font-mono text-sm font-semibold text-ink/45">
                        {phase.phase}
                      </span>

                      {/* Icon tile */}
                      <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                        <Icon className="size-5" aria-hidden />
                      </div>

                      {/* Body — title + inline subtitle + desc */}
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <h3 className="text-display-sm font-bold text-ink">
                            {phase.title}
                          </h3>
                          <span className="text-sm font-medium text-brand">
                            — {phase.duration}
                          </span>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-body">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* Image break after phase 03 — between Design and Develop */}
                  {i === 2 && (
                    <Reveal delay={0.1}>
                      <div className="relative my-2 overflow-hidden rounded-2xl border border-line">
                        <Image
                          src="/images/wp/2025-02/technology1.png"
                          alt=""
                          width={960}
                          height={420}
                          className="h-56 w-full object-cover sm:h-64"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/55 to-ink-deep/20"
                        />
                        <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-2 p-6 sm:p-8">
                          <span className="section-label !text-brand-light !mb-0">
                            [ Design &rarr; Develop ]
                          </span>
                          <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                            
                          </p>
                          <p className="text-sm leading-relaxed text-white/75">
                            Design hands off a documented system — not a Figma
                            file — so engineering starts with intent, not
                            interpretation.
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Image break after phase 06 — between Deploy and Monitor */}
                  {i === 5 && (
                    <Reveal delay={0.1}>
                      <div className="relative my-2 overflow-hidden rounded-2xl border border-line">
                        <Image
                          src="/images/wp/2025-01/project_new_02.jpg"
                          alt="From deployment to monitoring at Globantis Labs"
                          width={960}
                          height={420}
                          className="h-56 w-full object-cover sm:h-64"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/55 to-ink-deep/20"
                        />
                        <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-2 p-6 sm:p-8">
                          <span className="section-label !text-brand-light !mb-0">
                            [ Deploy &rarr; Monitor ]
                          </span>
                          <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                            Launch day is a checkpoint, not a finish line.
                          </p>
                          <p className="text-sm leading-relaxed text-white/75">
                            Production telemetry, SLA dashboards and an on-call
                            rotation come online the moment code reaches the live
                            environment.
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Final hairline to close the list */}
                  {isLast && <div className="border-t border-line" aria-hidden />}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. Rituals — 3 cards on white ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Engineering rituals ]"
              title="Three rituals that make the loop stick."
              lead="The eight phases describe what we do. These rituals describe how we keep doing it — every week, every quarter, without exception."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rituals.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal
                  key={r.title}
                  delay={Math.min(i * 0.08, 0.24)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-7 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-display-sm font-bold text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-body">
                      {r.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. CTA — ink ============ */}
      <CTABand
        label="[ See it in motion ]"
        title="See it applied to a real engagement."
        desc="We'll walk you through a recent delivery — what we shipped, what we cut, and what we'd do differently next time."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="ink"
      />
    </>
  );
}
