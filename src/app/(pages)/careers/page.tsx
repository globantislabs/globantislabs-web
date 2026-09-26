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
                lead="We hire senior engineers who treat software as a craft. Small, deliberate team. No bench. No people-team between you and the work."
              />

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
      </section>    </>
  );
}
