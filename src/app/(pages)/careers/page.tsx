import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Briefcase,
  MapPin,
  Clock,
  Send,
  Globe2,
  Cpu,
  ShieldCheck,
  Rocket,
  Users,
  Sparkles,
  Heart,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import {
  jobOpenings,
  hiringProcess,
  culturePillars,
  company,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Careers | Globantis Labs",
  description:
    "Engineering, on purpose. Globantis Labs hires senior engineers, designers and delivery leads who treat software as a craft. Open roles, hiring process and culture.",
  path: "/careers",
  keywords: [
    "software engineering jobs",
    "developer careers",
    "DevOps jobs",
    "AI ML engineer careers",
    "Globantis Labs careers",
  ],
});

const benefitsIcons = [Globe2, Cpu, ShieldCheck, Rocket, Users, Sparkles];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Engineering, on purpose."
        label="Careers"
        image="/images/wp/2026-01/about-office-e1767452844756.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* ============ 1. Intro — narrative + image ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ Why engineers join ]"
                title={
                  <>
                    Built for engineers,{" "}
                    <span className="text-flame">not headcount.</span>
                  </>
                }
                lead="Globantis Labs hires senior engineers, designers and delivery leads who treat software as a craft. We're a small, deliberate firm — and we publish exactly what we work on, how we pay and how we promote."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                No quarterly hiring targets. No bench. No 'people team' between
                you and the work. Every engineer here reports to a senior
                engineer who's shipped production code in the last six months.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Open roles", value: "4" },
                  { label: "Senior mentors", value: "1:5" },
                  { label: "Curiosity budget", value: "10%" },
                  { label: "Offices", value: "3" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-line bg-shade p-3 text-center"
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
                <a
                  href="#open-roles"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  See open roles
                  <ArrowRight className="size-4" aria-hidden />
                </a>
                <a
                  href={`mailto:${company.careersEmail ?? "careers@globantislabs.com"}`}
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift"
                >
                  Send a note
                  <Send className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2026-01/about-office-e1767452844756.jpg"
                  alt="Globantis Labs office"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
                {/* Floating quote */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-sm leading-relaxed text-white/85">
                    &ldquo;I've shipped more production code in 6 months here than
                    in 2 years at my last firm.&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-white/60">— Sofia, VP Engineering</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. Culture pillars — navy cards ============ */}
      <section className="relative overflow-hidden bg-ink py-section-md text-white">
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
        <div
          aria-hidden
          className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-flame/15 blur-[130px]"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Culture ]"
              title="What every Globantis engineer signs up for."
              lead="Four principles that shape hiring, promotion and how we resolve the difficult trade-offs every complex project surfaces."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.title}
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
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                      {p.desc}
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

      {/* ============ 3. Open roles ============ */}
      <section id="open-roles" className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                label="[ Open roles ]"
                title="Currently hiring."
                lead="If a role fits, apply. If it doesn't, send a note anyway — we keep an internal pipeline of senior engineers we'd hire when the right engagement lands."
              />
              <Link
                href="#open-roles"
                className="hidden text-sm font-semibold text-brand hover:underline sm:inline-flex"
              >
                {jobOpenings.length} open roles →
              </Link>
            </div>
          </Reveal>

          <ul className="mt-12 space-y-4">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.id} delay={Math.min(i * 0.05, 0.2)}>
                <li className="group card-lift relative overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift md:p-8">
                  {/* top accent bar */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="grid gap-4 md:grid-cols-[3rem_1fr_auto] md:items-start md:gap-8">
                    <span className="font-mono text-2xl font-bold text-ink/15 transition-colors duration-300 group-hover:text-flame/30">
                      {job.id}
                    </span>
                    <div>
                      <h3 className="text-display-sm font-bold text-ink">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body md:text-[15px]">
                        {job.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-body">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-3.5 text-brand" aria-hidden />
                          {job.meta}
                        </span>
                      </div>
                    </div>
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-lift inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                    >
                      Apply
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* Speculative applications */}
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-line bg-shade p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand">
                  <Heart className="size-6" />
                </span>
                <div>
                  <h3 className="text-display-sm font-bold text-ink">
                    Don't see your role?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body md:text-[15px]">
                    We're always interested in senior engineers and designers who
                    care about craft. Email{" "}
                    <a
                      href={`mailto:${company.careersEmail ?? "careers@globantislabs.com"}`}
                      className="font-semibold text-brand hover:underline"
                    >
                      {company.careersEmail ?? "careers@globantislabs.com"}
                    </a>{" "}
                    with a short note and a link to your work. A senior engineer
                    will read every application within 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. Hiring process — numbered steps ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Hiring process ]"
              title="From application to offer in 5 clear steps."
              lead="We publish our hiring process so you know what to expect — no surprise rounds, no 'cultural fit' ambushes, no take-home tests that eat your weekend."
              align="center"
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {hiringProcess.map((step, i) => (
              <Reveal
                key={step.step}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <li className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-bold text-flame/30">
                      {step.step}
                    </span>
                    <Clock className="size-5 text-ink/30" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-body">
                    {step.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Stats strip */}
          <Reveal className="mt-12">
            <div className="grid gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-3 md:p-8">
              {[
                { label: "Avg. time to offer", value: "12 days" },
                { label: "Take-home tests", value: "0" },
                { label: "Applications reviewed by", value: "Senior engineers" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-ink">
                    {s.value}
                  </span>
                  <span className="text-xs text-body">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. Offices strip ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Where you'll work ]"
              title="Three offices, one engineering culture."
              lead="Remote-first, with optional desk space in our three delivery centres. Most engineers work hybrid — 2 days in an office, 3 days wherever they ship best."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {company.offices?.length ? (
              <>
                {[
                  {
                    city: "Laval, Québec",
                    country: "Canada",
                    role: "Delivery · AI research",
                    icon: MapPin,
                  },
                  {
                    city: "Chennai",
                    country: "India",
                    role: "Engineering hub · 24/5",
                    icon: MapPin,
                  },
                ].map((o, i) => (
                  <Reveal
                    key={o.city}
                    delay={Math.min(i * 0.08, 0.32)}
                    className="h-full"
                  >
                    <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                      />
                      <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                        <o.icon className="size-6" />
                      </span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                        {o.country}
                      </p>
                      <h3 className="mt-0.5 text-display-sm font-bold text-ink">
                        {o.city}
                      </h3>
                      <p className="mt-2 text-sm text-body">{o.role}</p>
                    </div>
                  </Reveal>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </section>

      {/* ============ 6. CTA ============ */}
      <CTABand
        label="[ Apply today ]"
        title="Know an engineer who'd fit? Send them our way."
        desc="We pay a meaningful referral bonus for hires we make — and we always have a list of senior engineers we'd hire when the right role opens up."
        ctaHref="/contact"
        ctaLabel="Get in touch"
        tone="ink"
      />
    </>
  );
}
