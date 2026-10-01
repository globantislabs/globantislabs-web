
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import {
  SolutionsSection,
  OverviewQuote,
} from "@/components/site/solutions-section";
import { buildMetadata } from "@/lib/seo";
import { servicesV2, type ServiceV2 } from "@/lib/services-data";
import { AnimatedCapabilities } from "./animated-capabilities";

/* ============================================================
 * Dynamic service detail page — handles all 10 service slugs.
 * Layout picks based on the service's index in servicesV2:
 *   layout = serviceIndex % 3   →   0 = A · 1 = B · 2 = C
 *
 *   A (0, 3, 6, 9)  : Custom Software · Mobile · Cybersecurity · Managed
 *   B (1, 4, 7)     : AI & Automation · Cloud & DevOps · E-Commerce
 *   C (2, 5, 8)     : Web Solutions · Data · Enterprise Integration
 * ============================================================ */

export function generateStaticParams() {
  return servicesV2.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesV2.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} | Globantis Labs`,
    description: service.desc,
    path: `/services/${slug}`,
    keywords: [service.shortTitle, service.tagline, service.revenueEngine],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceIndex = servicesV2.findIndex((s) => s.slug === slug);
  if (serviceIndex < 0) notFound();
  const service = servicesV2[serviceIndex];
  const layout = serviceIndex % 3; // 0=A, 1=B, 2=C

  return (
    <>
      <PageHero
        title={service.title}
        label={service.number}
        image={service.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {layout === 0 && <LayoutA service={service} />}
      {layout === 1 && <LayoutB service={service} />}
      {layout === 2 && <LayoutC service={service} />}
    </>
  );
}

/* ============================================================
 * Shared CTA — used by every layout at the end of the page.
 * Primary button label is always "Start a project" → /contact.
 * An optional secondary outline link lets the layout surface a
 * "back to /services" or sibling navigation affordance.
 * ============================================================ */
function CTASection({
  bg,
  eyebrow,
  title,
  desc,
  secondaryHref,
  secondaryLabel,
}: {
  bg: "bg-white" | "bg-shade";
  eyebrow: string;
  title: string;
  desc: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className={`${bg} py-section-md`}>
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line ink-gradient px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-16">
            <div aria-hidden className="absolute inset-0 grid-pattern opacity-25" />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/20 blur-3xl"
            />
            <div className="relative">
              <span className="section-label !text-brand-light">{eyebrow}</span>
              <h2 className="text-display-lg font-bold text-white">{title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-white/70">
                {desc}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                >
                  Start a project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                {secondaryHref && secondaryLabel && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-base font-semibold text-white transition-colors duration-300 hover:border-flame hover:text-flame"
                  >
                    {secondaryLabel}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
 * LAYOUT A — services 0, 3, 6, 9
 * (Custom Software · Mobile · Cybersecurity · Managed Services)
 *
 *   §1 white  · 2-col sticky heading + offset-cream framed image
 *   §2 shade  · 2-col checkmark hairline grid (NOT cards)
 *   §3 white  · CTA "Explore this service" + "Start a project"
 * ============================================================ */
function LayoutA({ service }: { service: ServiceV2 }) {
  const Icon = service.icon;
  return (
    <>
      {/* === Section 1 — white, 2-col sticky heading + offset-cream framed image === */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            {/* Left — sticky heading */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                    Service {service.number} · {service.revenueEngine}
                  </span>
                </div>
                <div aria-hidden className="rule-flame mt-6" />
                <span className="section-label">[ Overview ]</span>
                <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                  {service.overviewHeading}
                </h2>
                <div className="mt-6 space-y-4">
                  {service.overviewParas.map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — hero image in a rounded frame with offset cream border */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -left-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-ink shadow-lift">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={760}
                    height={560}
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,22,94,0.55) 0%, rgba(11,22,94,0) 100%)",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Section 2 — animated capabilities (navy) === */}
      <AnimatedCapabilities shortTitle={service.shortTitle} capabilities={service.capabilities} />

      {/* === Section 2.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <SolutionsSection
          intro={service.capabilitiesTiles.intro}
          tiles={service.capabilitiesTiles.tiles}
          closingQuote={service.capabilitiesTiles.closingQuote}
          bg="bg-shade"
          closingBg="bg-ink"
        />
      )}


      {/* === Section 3 — white, CTA === */}
      <CTASection
        bg="bg-white"
        eyebrow="[ Explore this service ]"
        title={`Ready to scope your ${service.shortTitle} project?`}
        desc="From first call to first commit — we'll scope, sequence and price your engagement in a single discovery session."
        secondaryHref="/services"
        secondaryLabel="Explore all services"
      />
    </>
  );
}

/* ============================================================
 * LAYOUT B — services 1, 4, 7
 * (AI & Automation · Cloud & DevOps · E-Commerce)
 *
 *   §1 shade  · centered overview (max-w-3xl)
 *   §2 white  · full-width image with navy gradient + overlay text
 *   §3 shade  · 3-col capability card grid (name only)
 *   §4 white  · CTA
 * ============================================================ */
function LayoutB({ service }: { service: ServiceV2 }) {
  const Icon = service.icon;
  return (
    <>
      {/* === Section 1 — shade, centered overview === */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand">
                  <Icon className="size-7" aria-hidden />
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                  Service {service.number} · {service.revenueEngine}
                </span>
              </div>
              <div aria-hidden className="rule-flame mx-auto" />
              <span className="section-label !mx-auto !mt-6 !block">[ Overview ]</span>
              <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                {service.overviewHeading}
              </h2>
              <div className="mt-6 space-y-4">
                {service.overviewParas.map((p, i) => (
                  <p key={i} className="text-[16px] leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Section 2 — white, full-width image with navy gradient overlay === */}
      <section className="relative h-[340px] overflow-hidden bg-ink sm:h-[440px] lg:h-[480px]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,3,61,0.94) 0%, rgba(11,22,94,0.65) 50%, rgba(11,22,94,0.25) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/4 size-72 rounded-full bg-flame/20 blur-[120px]"
        />
        <div className="container-site relative flex h-full items-center">
          <Reveal className="max-w-xl">
            <span className="section-label !text-brand-light">
              [ Capabilities that ship ]
            </span>
            <p className="mt-3 text-display-md font-bold leading-snug text-white sm:text-display-lg">
              Capabilities that <span className="text-flame">ship.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Production-ready building blocks — each one scoped, engineered and
              delivered as part of the engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* === Section 3 — shade, 3-col capability card grid === */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ The scope ]"
              title={
                <>
                  Production-ready{" "}
                  <span className="text-flame">building blocks.</span>
                </>
              }
              lead="Each item below is a capability we've shipped before — selected, scoped and delivered as part of the engagement."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {service.capabilities.map((cap, i) => (
              <Reveal key={cap} className="h-full" delay={Math.min(i * 0.05, 0.3)}>
                <div className="card-lift group flex h-full items-center gap-3 rounded-xl border border-line bg-white p-5 hover:border-flame/40 hover:shadow-lift">
                  <CheckCircle2
                    className="size-5 shrink-0 text-brand transition-colors duration-500 group-hover:text-flame"
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-ink">{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Section 3.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <SolutionsSection
          intro={service.capabilitiesTiles.intro}
          tiles={service.capabilitiesTiles.tiles}
          closingQuote={service.capabilitiesTiles.closingQuote}
          bg="bg-white"
          closingBg="bg-ink"
        />
      )}

      {/* === Section 4 — white, CTA === */}
      <CTASection
        bg="bg-white"
        eyebrow="[ Start a project ]"
        title={`Ready to scope your ${service.shortTitle} project?`}
        desc="One discovery session. A scoped plan. A clear path from opportunity to production outcome."
      />
    </>
  );
}

/* ============================================================
 * LAYOUT C — services 2, 5, 8
 * (Web Solutions · Data & Analytics · Enterprise Integration)
 *
 *   §1 white  · left-aligned overview with flame rule (max-w-2xl)
 *   §2 shade  · 2-col split: sticky "[ Capabilities ]" + numbered list
 *   §3 white  · full-width image break with overlay quote
 *   §4 shade  · CTA
 * ============================================================ */
function LayoutC({ service }: { service: ServiceV2 }) {
  const Icon = service.icon;
  return (
    <>
      {/* === Section 1 — white, left-aligned overview with flame rule === */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                  <Icon className="size-7" aria-hidden />
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                  Service {service.number} · {service.revenueEngine}
                </span>
              </div>
              <div aria-hidden className="rule-flame mt-6" />
              <span className="section-label">[ Overview ]</span>
              <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                {service.overviewHeading}
              </h2>
              <div className="mt-6 space-y-4">
                {service.overviewParas.map((p, i) => (
                  <p key={i} className="text-[16px] leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Section 2 — animated capabilities (navy) === */}
      <AnimatedCapabilities shortTitle={service.shortTitle} capabilities={service.capabilities} />


      {/* === Section 3 — white, full-width image break with overlay quote === */}
      <section className="relative h-[360px] overflow-hidden bg-ink sm:h-[460px] lg:h-[520px]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,3,61,0.95) 0%, rgba(11,22,94,0.72) 50%, rgba(11,22,94,0.32) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-1/3 size-72 rounded-full bg-flame/20 blur-[120px]"
        />
        <div className="container-site relative flex h-full items-center">
          <Reveal className="max-w-2xl">
            <span className="section-label !text-brand-light">[ Field note ]</span>
            <blockquote className="mt-3 text-display-md font-bold leading-snug text-white sm:text-display-lg">
              <span className="text-flame" aria-hidden>
                &ldquo;
              </span>
              {service.tagline}
              <span className="text-flame" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {service.shortTitle} — engineered around the outcomes that matter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* === Section 3.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <SolutionsSection
          intro={service.capabilitiesTiles.intro}
          tiles={service.capabilitiesTiles.tiles}
          closingQuote={service.capabilitiesTiles.closingQuote}
          bg="bg-shade"
          closingBg="bg-ink"
        />
      )}

      {/* === Section 4 — shade, CTA === */}
      <CTASection
        bg="bg-shade"
        eyebrow="[ Start a project ]"
        title={`Ready to scope your ${service.shortTitle} project?`}
        desc="Tell us where you are today. We'll translate it into a scoped engagement with clear milestones and a delivery plan."
      />
    </>
  );
}
