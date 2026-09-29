import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { servicesV2, revenueEngines } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "Services | Globantis Labs",
  description:
    "Ten engineering services — custom software, AI & automation, web, mobile, cloud & DevOps, data & analytics, cybersecurity, e-commerce, integration and managed services — across four revenue engines.",
  path: "/services",
  keywords: [
    "technology services",
    "custom software development",
    "AI and automation",
    "enterprise web solutions",
    "mobile app development",
    "cloud and DevOps",
    "data and analytics",
    "cybersecurity services",
    "e-commerce development",
    "enterprise integration",
    "managed IT services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        label="Services"
        image="/images/wp/2025-01/project_new_06.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* ============ 1. Intro — white, centered ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Technology services ]"
              title={
                <>
                  Engineering Digital Solutions for the{" "}
                  <span className="text-flame">Next Generation of Business</span>
                </>
              }
              lead="We help organizations transform ideas, modernize technology, automate operations and build scalable digital products through software engineering, artificial intelligence, cloud, data and cybersecurity."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-body md:text-base">
              From a new digital product to enterprise-wide transformation, our
              teams combine technology expertise, industry understanding and
              engineering excellence to deliver solutions designed for
              long-term business value.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div aria-hidden className="rule-flame mx-auto mt-9" />
          </Reveal>
        </div>
      </section>

      {/* ============ Editorial image break — full-bleed with navy overlay ============ */}
      <section className="relative h-[300px] overflow-hidden bg-ink sm:h-[380px] lg:h-[440px]">
        <Image
          src="/images/wp/2025-01/project_new_05.jpg"
          alt="Globantis Labs engineers building a custom software product"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Navy gradient overlay — left-heavy for F-pattern legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,3,61,0.94) 0%, rgba(11,22,94,0.72) 45%, rgba(11,22,94,0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(0,3,61,0.85) 0%, rgba(0,3,61,0) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 size-72 rounded-full bg-flame/20 blur-[120px]"
        />

        <div className="container-site relative flex h-full items-center">
          <Reveal className="max-w-2xl">
            <span className="section-label !text-brand-light">
              [ Engineering → Production → Value ]
            </span>
            <p className="mt-2 text-display-md font-bold leading-snug text-white sm:text-display-lg">
              From first commit to long-term{" "}
              <span className="text-flame">business value.</span>
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Ten engineering services, four revenue engines, one engineering
              culture — built to take you from idea to outcome without changing
              partners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. Revenue Engines — shade bg, 4-col grid ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Revenue engines ]"
              title={
                <>
                  Four ways we{" "}
                  <span className="text-flame">create value.</span>
                </>
              }
              lead="That combination gives you both high-value project revenue and recurring international revenue."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {revenueEngines.map((engine, i) => {
              const Icon = engine.icon;
              return (
                <Reveal
                  key={engine.title}
                  className="h-full"
                  delay={Math.min(i * 0.07, 0.28)}
                >
                  <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                    {/* Signature flame top-bar — slides in on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Icon tile — cream → brand on hover */}
                    <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-7" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-display-sm font-bold leading-snug text-ink">
                      {engine.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {engine.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3. Our Services — white bg, 2-col grid ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Our services ]"
              title={
                <>
                  Ten services.{" "}
                  <span className="text-flame">One engineering culture.</span>
                </>
              }
              lead="Each capability below maps to one of the four revenue engines above — so you can start with a single project and grow into a dedicated team or a long-term managed engagement without changing partners."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7">
            {servicesV2.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  key={s.slug}
                  className="h-full"
                  delay={Math.min(i * 0.06, 0.3)}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-shade p-7 transition-colors duration-300 ease-out-quart hover:border-flame/40 hover:bg-cream hover:shadow-lift lg:p-8"
                  >
                    {/* Header row: icon tile + small mono number (NOT oversized) */}
                    <div className="flex items-start justify-between">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-7" aria-hidden />
                      </div>
                      <span
                        aria-hidden
                        className="font-mono text-xs font-medium tracking-[0.12em] text-ink/45 transition-colors duration-300 group-hover:text-brand"
                      >
                        {s.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-display-sm font-bold leading-snug text-ink">
                      {s.title}
                    </h3>

                    {/* Tagline — brand orange */}
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-brand">
                      {s.tagline}
                    </p>

                    {/* Description — line-clamp-2 */}
                    <p className="mt-3 text-sm leading-relaxed text-body line-clamp-2">
                      {s.desc}
                    </p>

                    {/* Explore link — pinned to the card bottom so cards align in a row */}
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-flame">
                        Explore
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. CTA — shade bg ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-16">
              {/* Decorative texture + flame orbs */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/15 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/15 blur-3xl"
              />

              <div className="relative">
                <span className="section-label">[ Talk to us ]</span>
                <h2 className="text-display-lg font-bold text-ink">
                  Not sure which service fits?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-body">
                  Tell us where you are today and where you want to be. We&apos;ll
                  walk you through the right revenue engine — project, AI
                  initiative, dedicated team or long-term managed engagement —
                  and recommend the capabilities you actually need.
                </p>
                <div className="mt-9">
                  <Link
                    href="/contact"
                    className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                  >
                    Book a consultation
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
