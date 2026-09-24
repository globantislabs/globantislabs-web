import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  History,
  Quote,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Globe2,
  Cpu,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import {
  aboutTabs,
  aboutValues,
  aboutPills,
  valueTags,
  stats,
  companyTimeline,
  leadershipTeam,
  certifications,
  officeLocations,
  company,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About Us | Globantis Labs",
  description:
    "Globantis Labs is a global software engineering firm delivering secure, scalable digital solutions across the USA, Canada and India — 250+ projects, 40+ enterprise clients, 30+ senior engineers.",
  path: "/about",
  keywords: [
    "about Globantis Labs",
    "global software development company",
    "custom software development",
    "IT consulting company",
    "digital transformation services",
  ],
});

const tabIcons: Record<string, typeof Target> = {
  mission: Target,
  vision: Eye,
  history: History,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Globantis Labs"
        label="About company"
        image="/images/wp/2025-01/about.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* ============ 1. Company intro — editorial two-column ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy */}
            <Reveal>
              <SectionHeading
                label="[ About company ]"
                title={
                  <>
                    Building The Future With{" "}
                    <span className="text-flame">Cutting-Edge IT Solutions</span>
                  </>
                }
                lead="Globantis Labs is a global software engineering firm focused on delivering high-quality, scalable, and secure digital solutions for clients across the USA, Canada and India. Founded with a strong global vision, we help businesses leverage technology to drive growth, efficiency and innovation in a competitive digital landscape."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                We specialize in custom software development, web and mobile
                applications, cloud-based systems, AI-driven solutions and
                enterprise platforms tailored to international business
                standards. Our solutions are designed with a deep understanding
                of global compliance, performance expectations, security
                requirements and cross-border scalability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {aboutPills.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-shade px-3.5 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                  >
                    <CheckCircle2 className="size-3.5 text-brand" />
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Start a project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/work-process"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  See how we work
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            {/* Right: editorial image with offset frame + stat overlay */}
            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-01/about.jpg"
                  alt="Globantis Labs team at work"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
                {/* Floating stat tile */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">15+</span>
                    <span className="text-xs text-white/70">years</span>
                  </div>
                  <p className="text-[11px] text-white/60">of engineering software</p>
                </div>
              </div>
              {/* Secondary image — offset editorial */}
              <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-xl border-4 border-white shadow-lift sm:block">
                <Image
                  src="/images/wp/2025-01/about-1.jpg"
                  alt="About Globantis"
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. Stats band — editorial KPI strip ============ */}
      <section className="relative overflow-hidden bg-ink py-section-sm text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
        />
        <div className="container-site relative">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="section-label !text-brand-light">[ By the numbers ]</span>
              <h2 className="mt-3 text-display-md font-bold text-white">
                Outcomes we stand behind.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                Engineering outcomes, not vanity metrics. Every number below is
                auditable inside our delivery dashboard.
              </p>
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

      {/* ============ 3. Mission / Vision / History (expandable) ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal className="relative">
              <div
                aria-hidden
                className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2026-01/about-office-e1767452844756.jpg"
                  alt="Globantis Labs office"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Editorial accent — Vector-8.svg */}
              <Image
                src="/images/wp/2025-02/Vector-8.svg"
                alt=""
                width={120}
                height={120}
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 hidden opacity-70 lg:block"
              />
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  label="[ Our story ]"
                  title="Mission, vision and how we got here."
                  lead="The principles that drive every engineering decision we make — and the path that brought us to where we are today."
                />
              </Reveal>

              <div className="mt-8 space-y-3">
                {aboutTabs.map((tab, i) => {
                  const Icon = tabIcons[tab.key];
                  return (
                    <Reveal key={tab.key} delay={Math.min(i * 0.07, 0.35)}>
                      <details className="group card-lift rounded-2xl border border-line bg-white p-5 hover:border-flame/40 open:border-flame/40 open:shadow-lift [&_summary]:cursor-pointer">
                        <summary className="flex items-center justify-between marker:content-none">
                          <span className="flex items-center gap-3">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-300 group-open:border-brand group-open:bg-brand group-open:text-white">
                              <Icon className="size-5" />
                            </span>
                            <span className="text-base font-bold text-ink">{tab.label}</span>
                          </span>
                          <ArrowRight
                            aria-hidden
                            className="size-4 shrink-0 text-brand transition-transform duration-300 ease-out-expo group-open:rotate-45"
                          />
                        </summary>
                        <p className="mt-4 border-t border-line pt-4 pl-13 text-sm leading-relaxed text-body">
                          {tab.body}
                        </p>
                      </details>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. Company timeline — vertical journey ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Our journey ]"
              title={
                <>
                  From a small founding team to a{" "}
                  <span className="text-flame">global technology partner.</span>
                </>
              }
              lead="Sixteen years. Three countries. One engineering culture. Every milestone below maps to a measurable change in how we operate."
              align="center"
            />
          </Reveal>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[1.4rem] top-0 h-full w-px bg-gradient-to-b from-flame via-flame/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            />
            <ol className="space-y-10 sm:space-y-16">
              {companyTimeline.map((t, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={t.year} delay={Math.min(i * 0.05, 0.25)}>
                    <li
                      className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                        isLeft ? "" : "sm:flex-row-reverse"
                      }`}
                    >
                      {/* Marker dot */}
                      <span
                        aria-hidden
                        className="absolute left-[1.4rem] top-1.5 z-10 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-flame bg-white shadow-md sm:left-1/2"
                      >
                        <span className="size-2 rounded-full bg-flame" />
                      </span>

                      {/* Year side */}
                      <div
                        className={`hidden w-1/2 shrink-0 sm:block ${
                          isLeft ? "pr-12 text-right" : "pl-12"
                        }`}
                      >
                        <span className="font-mono text-5xl font-bold leading-none text-flame/30">
                          {t.year}
                        </span>
                      </div>

                      {/* Content card */}
                      <div
                        className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${
                          isLeft ? "sm:pl-12" : "sm:pr-12"
                        }`}
                      >
                        <div className="card-lift group rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                          <span
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                          />
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand sm:hidden">
                            {t.year}
                          </p>
                          <h3 className="mt-1 text-display-sm font-bold text-ink">
                            {t.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-body">
                            {t.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ 5. Leadership team ============ */}
      <section className="relative overflow-hidden bg-shade py-section-md">
        <div
          aria-hidden
          className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-flame/10 blur-[100px]"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Leadership ]"
              title="The people who own the engineering bar."
              lead="Our leadership team has shipped production software across financial services, healthcare, logistics and e-commerce — for clients on three continents."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((person, i) => (
              <Reveal
                key={person.name}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  {/* Flame top-bar */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  {/* Avatar — branded initials tile */}
                  <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-2xl bg-brand-gradient text-2xl font-bold text-white shadow-lg shadow-brand/30">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-4 -right-2 text-6xl font-bold text-white/15"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {person.initials}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{person.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-brand">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. Core values — premium cards ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Living our values ]"
              title={
                <>
                  What every Globantis engineer{" "}
                  <span className="text-flame">signs up for.</span>
                </>
              }
              lead="Our values are not posters on a wall. They shape hiring, promotion and how we resolve the difficult trade-offs that every complex project surfaces."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <Reveal
                key={v.title}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  {/* top accent bar */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  {/* Number tile */}
                  <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-lg font-bold text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-display-sm font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full-width image break */}
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              <Image
                src="/images/wp/2025-01/why_choose01.jpg"
                alt="Why choose Globantis Labs"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/40 to-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-3 p-8 sm:p-12">
                <Quote className="size-8 text-flame" aria-hidden />
                <p className="text-display-sm font-bold text-white">
                  Join our growing list of happy customers.
                </p>
                <p className="text-sm leading-relaxed text-white/75">
                  Organizations across 12+ countries trust Globantis Labs to
                  power their digital transformation.
                </p>
                <Link
                  href="/contact"
                  className="btn-lift mt-3 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Become a client
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 7. Value pills marquee ============ */}
      <section className="bg-cream py-section-sm">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                What clients say about working with us
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
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

      {/* ============ 8. Global offices ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Where we work ]"
              title="Three delivery centres, one engineering culture."
              lead="We deliver from the United States, Canada and India — follow-the-sun coverage for time-sensitive projects and the local domain expertise each market demands."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {officeLocations.map((o, i) => (
              <Reveal
                key={o.city}
                delay={Math.min(i * 0.08, 0.32)}
                className="h-full"
              >
                <div className="card-lift group h-full overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={o.image}
                      alt={`${o.city} office`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/20 to-transparent"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                        {o.country}
                      </p>
                      <p className="font-display text-xl font-bold text-white">
                        {o.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-start gap-2 text-sm text-body">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      <span className="leading-relaxed">{o.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-body">
                      <Clock className="size-4 shrink-0 text-brand" aria-hidden />
                      {o.tz}
                    </div>
                    <div className="border-t border-line pt-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                        Role
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/80">
                        {o.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. Certifications & standards ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Security & compliance ]"
              title="Standards we ship to, by default."
              lead="These are not optional add-ons. Every Globantis engagement inherits the controls below — your compliance team will see them in the audit trail from day one."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal
                key={c.code}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-300 hover:border-flame/40 hover:bg-white/[0.07]">
                  <ShieldCheck className="size-7 text-brand-light" aria-hidden />
                  <h3 className="mt-4 text-display-sm font-bold text-white">
                    {c.code}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trust strip */}
          <Reveal className="mt-10">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Globe2 className="size-4 text-brand-light" aria-hidden />
                12+ countries served
              </span>
              <span className="inline-flex items-center gap-2">
                <Cpu className="size-4 text-brand-light" aria-hidden />
                30+ senior engineers
              </span>
              <span className="inline-flex items-center gap-2">
                <Rocket className="size-4 text-brand-light" aria-hidden />
                250+ projects shipped
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-brand-light" aria-hidden />
                99.99% platform uptime
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 10. CTA ============ */}
      <CTABand
        label="[ Let's talk ]"
        title="Want to see how we work?"
        desc="Read our delivery process, scan the technologies we use, or just reach out — we'll walk you through a real engagement."
        ctaHref="/contact"
        ctaLabel="Start a project"
        tone="brand"
      />
    </>
  );
}
