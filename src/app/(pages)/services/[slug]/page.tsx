
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
import { FinalCTADramatic } from "@/components/site/enterprise-sections";
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

      {/* === Per content.md: strip to ONLY MD content. Removed:
       *  AnchorNavigation, WhyUsEditorial, FinalCTADramatic — none
       *  of these appear in the user's MD file. === */}

      {layout === 0 && <LayoutA service={service} />}
      {layout === 1 && <LayoutB service={service} />}
      {layout === 2 && <LayoutC service={service} />}

      {/* === Final CTA — white bg band === */}
      <FinalCTADramatic
        eyebrow="Get started"
        title={`Ready to scope your ${service.shortTitle.toLowerCase()} project?`}
        desc="One discovery session. A scoped plan. A clear path from opportunity to production outcome — across Canada, the UK, Dubai and beyond."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "Explore all services", href: "/services" }}
        image={service.heroImage}
      />
    </>
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
      <section id="capabilities" className="bg-white py-section-md">
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

      {/* === Section 2 — animated capabilities — skipped when tiles exist === */}
      {!service.capabilitiesTiles && (
        <AnimatedCapabilities shortTitle={service.shortTitle} capabilities={service.capabilities} />
      )}

      {/* === Section 2.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <div id="solutions">
          <SolutionsSection
            intro={service.capabilitiesTiles.intro}
            tiles={service.capabilitiesTiles.tiles}
            closingQuote={service.capabilitiesTiles.closingQuote}
            bg="bg-shade"
            closingBg="bg-ink"
          />
        </div>
      )}


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

      {/* === Section 3.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <div id="solutions">
          <SolutionsSection
            intro={service.capabilitiesTiles.intro}
            tiles={service.capabilitiesTiles.tiles}
            closingQuote={service.capabilitiesTiles.closingQuote}
            bg="bg-white"
            closingBg="bg-ink"
          />
        </div>
      )}

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

      {/* === Section 2 — animated capabilities — skipped when tiles exist === */}
      {!service.capabilitiesTiles && (
        <AnimatedCapabilities shortTitle={service.shortTitle} capabilities={service.capabilities} />
      )}


      {/* === Section 3.5 — HCL-style capabilities tiles + closing quote === */}
      {service.overviewQuote && (
        <OverviewQuote quote={service.overviewQuote} bg="bg-white" />
      )}
      {service.capabilitiesTiles && service.capabilitiesTiles.tiles.length > 0 && (
        <div id="solutions">
          <SolutionsSection
            intro={service.capabilitiesTiles.intro}
            tiles={service.capabilitiesTiles.tiles}
            closingQuote={service.capabilitiesTiles.closingQuote}
            bg="bg-shade"
            closingBg="bg-ink"
          />
        </div>
      )}

    </>
  );
}
