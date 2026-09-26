import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Compass,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Clock,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { workProcessPhases } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Work Process | Globantis Labs",
  description:
    "Seven delivery stages from discovery to continuous improvement. Each phase is owned by a named lead, produces tangible deliverables and has a documented exit criterion.",
  path: "/work-process",
  keywords: [
    "software delivery process",
    "agile software development",
    "engineering workflow",
    "project delivery methodology",
  ],
});

const phaseIcons = [
  Compass,
  FileText,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
];

export default function WorkProcessPage() {
  return (
    <>
      <PageHero
        title="Our Work Process"
        label="Work process"
        image="/images/wp/2025-02/about_mna00n.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Work Process" }]}
      />

      {/* ============ 1. Intro — narrative + image ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ The delivery loop ]"
                title={
                  <>
                    How a Globantis engagement{" "}
                    <span className="text-flame">actually runs.</span>
                  </>
                }
                lead="Each step below is owned by a named lead, has a documented exit criterion, and is reviewed with you before we move on. If a stage feels rushed, that's a bug — not a feature."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                We work in two-week sprints with formal reviews at the end of
                every phase. You always know what was promised, what shipped
                and what's coming next. No black boxes.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { label: "Sprint length", value: "2 weeks" },
                  { label: "Review cadence", value: "Weekly" },
                  { label: "Avg. release", value: "Every 3 days" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-line bg-shade p-3 text-center"
                  >
                    <p className="font-mono text-base font-bold text-ink">
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
                  href="/contact"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Start a project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/technologies"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  Our tech stack
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-02/about_mna00n.jpg"
                  alt="Globantis Labs team collaborating"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. Phases — detailed timeline with deliverables ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ The seven phases ]"
              title="Discovery to continuous improvement."
              lead="Every phase has a fixed duration estimate, a named owner and a documented deliverable list. The list below is what we ship — not what we promise."
              align="center"
            />
          </Reveal>

          <ol className="mt-16 space-y-6">
            {workProcessPhases.map((phase, i) => {
              const Icon = phaseIcons[i] ?? Code2;
              const isLast = i === workProcessPhases.length - 1;
              return (
                <Reveal key={phase.phase} delay={Math.min(i * 0.05, 0.25)}>
                  <li className="group relative grid gap-6 rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift md:grid-cols-[5rem_1fr_14rem] md:items-start md:gap-8 md:p-8">
                    {/* Number marker */}
                    <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-3">
                      <div className="flex size-14 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-3xl font-bold leading-none text-ink/15 transition-colors duration-300 group-hover:text-flame/30">
                        {phase.phase}
                      </span>
                    </div>

                    {/* Body */}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="text-display-sm font-bold text-ink">
                          {phase.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-brand">
                          <Clock className="size-3" aria-hidden />
                          {phase.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-body md:text-[15px]">
                        {phase.desc}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="md:border-l md:border-line md:pl-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                        Deliverables
                      </p>
                      <ul className="mt-2 space-y-2">
                        {phase.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-ink/80"
                          >
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ============ 3. Continuous improvement — image break ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              <Image
                src="/images/wp/2025-02/why-choose-24.jpg"
                alt="Continuous improvement at Globantis Labs"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-ink-deep/90 via-ink-deep/50 to-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-3 p-8 sm:p-12">
                <span className="section-label !text-brand-light">
                  [ Post-launch ]
                </span>
                <h2 className="text-display-md font-bold text-white">
                  The launch is the start, not the end.
                </h2>
                <p className="text-sm leading-relaxed text-white/75">
                  After go-live, we run monthly reviews, quarterly roadmaps and
                  a continuous improvement loop. Every metric we ship in the
                  SLA dashboard is the same metric we hold ourselves to.
                </p>
                <Link
                  href="/contact"
                  className="btn-lift mt-3 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Talk to our team
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. Engineering rituals — 3-col ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Engineering rituals ]"
              title="The rituals that make our process stick."
              lead="Three rituals run on every engagement, without exception. They're how we turn the seven phases above into a repeatable delivery engine."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Weekly client review",
                desc: "A 30-minute call every Friday: what shipped this week, what's planned next week, blockers and decisions needed from you.",
                icon: Compass,
              },
              {
                title: "Architecture review board",
                desc: "Every non-trivial design decision passes through a senior-engineer review board before implementation. Catches risk early.",
                icon: ShieldCheck,
              },
              {
                title: "Quarterly business review",
                desc: "Every 90 days, the leadership team reviews outcomes against business KPIs with you — not just engineering metrics.",
                icon: Rocket,
              },
            ].map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal
                  key={r.title}
                  delay={Math.min(i * 0.08, 0.32)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" />
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

      {/* ============ 5. CTA ============ */}
      <CTABand
        label="[ Let's build ]"
        title="See it applied to a real engagement."
        desc="We're happy to walk you through a recent delivery — what we shipped, what we cut, and what we'd do differently next time."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="ink"
      />
    </>
  );
}
