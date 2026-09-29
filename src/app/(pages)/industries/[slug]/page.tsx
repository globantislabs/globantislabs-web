import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { industries, type Industry } from "@/lib/site-data";

/* ============================================================
 * Dynamic industry detail page — handles all 7 industry slugs.
 * Layout picks by slug so each industry gets its own structure
 * (NOT a shared template):
 *
 *   A (financial-services · logistics · automation)
 *      2-col sticky intro + offset-cream framed bannerImage →
 *      4-col KPI cards (stats / flow / workflow) →
 *      alternating full-width narrative sections →
 *      ink-navy glass cards (subIndustries / techEnablers) →
 *      "Other industries" 3-card footer.
 *
 *   B (healthcare · cybersecurity)
 *      centered shade overview (max-w-3xl) →
 *      4-col premium cards (pillars / layers with coverage) →
 *      ink-navy horizontal flow (journey / faq-as-cards) →
 *      shade stacked content sections →
 *      "Other industries" footer.
 *
 *   C (education · ecommerce)
 *      left-aligned overview with flame rule (max-w-2xl) →
 *      shade horizontal stepper (pathway / channels) →
 *      white KPI / feature cards (ecommerceMetrics / platformFeatures) →
 *      shade content blocks (sections) →
 *      optional white horizontal strip (flow / techEnablers) →
 *      "Other industries" footer.
 *
 * No CTABand / CTAStrip at the bottom — every layout ends with
 * the "Other industries" 3-card grid.
 * ============================================================ */

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  const title = `${ind.title} | Globantis Labs`;
  const description =
    ind.intro ??
    ind.heroHeading ??
    ind.sections?.[0]?.paragraphs?.[0] ??
    ind.tagline ??
    ind.title;
  return buildMetadata({
    title,
    description,
    path: `/industries/${slug}`,
    keywords: [ind.title, ind.tagline, ...(ind.focusAreas ?? [])].filter(
      Boolean
    ) as string[],
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const layout =
    slug === "financial-services" || slug === "logistics" || slug === "automation"
      ? "A"
      : slug === "healthcare" || slug === "cybersecurity"
        ? "B"
        : "C";

  return (
    <>
      <PageHero
        title={ind.title}
        label={ind.label ?? ind.title}
        image={ind.bannerImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.title },
        ]}
      />
      {layout === "A" && <LayoutA ind={ind} />}
      {layout === "B" && <LayoutB ind={ind} />}
      {layout === "C" && <LayoutC ind={ind} />}
    </>
  );
}

/* ============================================================
 * Shared — Global reach badge
 * Woven into the intro of every layout so the UK, Canada, Dubai
 * reach is visible without dominating the page.
 * ============================================================ */
function GlobalReachBadge({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-cream px-3.5 py-2 text-xs font-semibold text-brand">
        <span aria-hidden className="size-1.5 rounded-full bg-flame" />
        Serving clients across the UK, Canada, Dubai, and beyond
      </span>
    </div>
  );
}

/* ============================================================
 * Shared — Other industries footer
 * 3-card grid of sibling industries with arrow affordance.
 * NO CTA section after this — the page ends here.
 * ============================================================ */
function OtherIndustries({ current }: { current: Industry }) {
  const others = industries.filter((i) => i.slug !== current.slug).slice(0, 3);
  return (
    <section className="bg-white py-section-md">
      <div className="container-site">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              label="[ Keep exploring ]"
              title="Other industries we serve"
              size="md"
            />
          </Reveal>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View all industries
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((i, idx) => {
            const Icon = i.icon;
            return (
              <Reveal key={i.slug} delay={Math.min(idx * 0.07, 0.35)}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="card-lift group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    {Icon ? (
                      <span className="flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon aria-hidden className="size-5" />
                      </span>
                    ) : (
                      <span className="flex size-11 items-center justify-center rounded-xl bg-cream text-sm font-bold text-brand">
                        {i.title.charAt(0)}
                      </span>
                    )}
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-ink">
                      {i.title}
                    </h3>
                    {i.tagline && (
                      <p className="mt-1 text-xs leading-relaxed text-body">
                        {i.tagline}
                      </p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Shared — narrative section renderer
 * Renders one ind.sections[] block with eyebrow + flame rule +
 * heading + paragraphs + optional image. Used by all layouts
 * so the prose voice stays consistent while each layout owns
 * its surrounding section bg.
 * ============================================================ */
function NarrativeSection({
  sec,
  bg,
}: {
  sec: NonNullable<Industry["sections"]>[number];
  bg: "bg-white" | "bg-shade";
}) {
  return (
    <section className={`${bg} py-section-md`}>
      <div className="container-site">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            {sec.label && <span className="section-label">[ {sec.label} ]</span>}
            <div aria-hidden className="rule-flame mb-6" />
            <h3 className="text-display-md font-bold leading-snug text-ink">
              {sec.heading}
            </h3>
            <div className="mt-5 space-y-4">
              {sec.paragraphs?.map((p, j) => (
                <p key={j} className="text-[16px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
            {sec.image && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={sec.image}
                  alt={sec.heading}
                  width={960}
                  height={520}
                  className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]"
                />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * LAYOUT A — financial-services · logistics · automation
 *
 *   §1 white  · 2-col sticky intro + offset-cream framed bannerImage
 *   §2 shade  · 4-col KPI / stage cards with flame rules
 *   §3 white  · narrative sections (alternating bg-white/bg-shade)
 *   §4 navy   · glass cards (subIndustries / techEnablers)
 *   §5 white  · "Other industries"
 * ============================================================ */
function LayoutA({ ind }: { ind: Industry }) {
  const Icon = ind.icon;
  const stageData = ind.flow ?? ind.workflow; // logistics.flow / automation.workflow
  const glassData = ind.subIndustries?.items ?? ind.techEnablers;

  return (
    <>
      {/* === §1 — white, 2-col sticky intro + offset-cream framed image === */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
            {/* Left — sticky intro */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div className="flex items-center gap-4">
                  {Icon && (
                    <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                      <Icon aria-hidden className="size-7" />
                    </span>
                  )}
                  <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                    Industry · {ind.title}
                  </span>
                </div>
                <div aria-hidden className="rule-flame mt-6" />
                <span className="section-label">[ {ind.label ?? ind.title} ]</span>
                <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                  {ind.heroHeading ?? ind.title}
                </h2>
                {ind.intro && (
                  <p className="mt-6 text-[16px] leading-relaxed text-body">
                    {ind.intro}
                  </p>
                )}
                {ind.focusAreas && ind.focusAreas.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {ind.focusAreas.map((fa) => (
                      <li
                        key={fa}
                        className="rounded-full border border-brand/30 bg-cream px-3.5 py-1.5 text-xs font-semibold text-brand"
                      >
                        {fa}
                      </li>
                    ))}
                  </ul>
                )}
                <GlobalReachBadge className="mt-6" />
              </Reveal>
            </div>

            {/* Right — bannerImage in offset cream frame */}
            {ind.bannerImage && (
              <Reveal delay={0.1}>
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -left-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-ink shadow-lift">
                    <Image
                      src={ind.bannerImage}
                      alt={ind.title}
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
            )}
          </div>
        </div>
      </section>

      {/* === §2 — shade, KPI cards (stats) OR stage cards (flow/workflow) === */}
      {((ind.stats && ind.stats.length > 0) ||
        (stageData && stageData.length > 0)) && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={
                  ind.stats && ind.stats.length > 0
                    ? "[ By the numbers ]"
                    : "[ The stages ]"
                }
                title={
                  ind.stats && ind.stats.length > 0 ? (
                    <>
                      Outcomes that <span className="text-flame">compound.</span>
                    </>
                  ) : (
                    <>
                      Stages that <span className="text-flame">connect.</span>
                    </>
                  )
                }
                lead={
                  ind.stats && ind.stats.length > 0
                    ? "Benchmarks from engagements across the UK, Canada, Dubai and beyond — measured at the moments that matter to operators."
                    : "Five stages that move work end-to-end — each one observable, instrumented and recoverable in real time."
                }
                align="center"
              />
            </Reveal>

            {/* KPI cards (financial-services stats) */}
            {ind.stats && ind.stats.length > 0 && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {ind.stats.map((s, i) => (
                  <Reveal key={s.label} delay={Math.min(i * 0.07, 0.3)}>
                    <div className="card-lift relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                      <div aria-hidden className="rule-flame" />
                      <p className="mt-4 text-display-md font-bold text-ink">
                        {s.value}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {s.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Stage cards (logistics.flow / automation.workflow) */}
            {!ind.stats && stageData && stageData.length > 0 && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {stageData.map((step, i) => {
                  const StepIcon = step.icon;
                  // Both ind.flow and ind.workflow items have `label` (not `title`).
                  const stepLabel = step.label;
                  return (
                    <Reveal key={stepLabel + i} delay={Math.min(i * 0.05, 0.3)}>
                      <div className="card-lift relative flex h-full flex-col rounded-2xl border border-line bg-white p-5 hover:border-flame/40 hover:shadow-lift">
                        <div className="flex items-center justify-between">
                          {StepIcon && (
                            <span className="flex size-10 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand">
                              <StepIcon aria-hidden className="size-5" />
                            </span>
                          )}
                          <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-4 text-base font-bold text-ink">
                          {stepLabel}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-body">
                          {step.desc}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* === §3 — narrative sections (alternating bg-white/bg-shade) === */}
      {ind.sections?.map((sec, i) => (
        <NarrativeSection
          key={i}
          sec={sec}
          bg={i % 2 === 0 ? "bg-white" : "bg-shade"}
        />
      ))}

      {/* === §4 — ink navy, glass cards (subIndustries / techEnablers) === */}
      {glassData && glassData.length > 0 && (
        <section className="ink-gradient relative overflow-hidden py-section-md">
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/15 blur-3xl"
          />
          <div className="container-site relative">
            <Reveal>
              <SectionHeading
                label={
                  ind.subIndustries
                    ? `[ ${ind.subIndustries.heading} ]`
                    : "[ Tech enablers ]"
                }
                title={
                  ind.subIndustries ? (
                    <>
                      Engagements that <span className="text-flame">scale.</span>
                    </>
                  ) : (
                    <>
                      The stack that <span className="text-flame">powers it.</span>
                    </>
                  )
                }
                lead={
                  ind.subIndustries
                    ? "Three flagship service tracks inside this industry — each one scoped, engineered and shipped against a clear business outcome."
                    : "The technologies that make every shipment visible, every contract provable, and every cycle tunable."
                }
                tone="dark"
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {glassData.map((item, i) => {
                const TIcon = "icon" in item ? item.icon : undefined;
                const itemTitle =
                  "title" in item
                    ? item.title
                    : "name" in item
                      ? item.name
                      : "label" in item
                        ? item.label
                        : "";
                const itemDesc = "desc" in item ? item.desc : "";
                const itemImage = "image" in item ? item.image : undefined;
                return (
                  <Reveal key={itemTitle + i} delay={Math.min(i * 0.07, 0.3)}>
                    <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm hover:border-flame/40">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      {itemImage && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={itemImage}
                            alt={itemTitle}
                            fill
                            className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                          />
                          <div
                            aria-hidden
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,3,61,0.92) 0%, rgba(0,3,61,0.25) 60%, rgba(0,3,61,0) 100%)",
                            }}
                          />
                          <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold leading-snug text-white">
                            {itemTitle}
                          </h3>
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        {!itemImage && TIcon && (
                          <span className="flex size-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-flame">
                            <TIcon aria-hidden className="size-6" />
                          </span>
                        )}
                        {!itemImage && (
                          <h3 className="mt-4 text-base font-bold leading-snug text-white">
                            {itemTitle}
                          </h3>
                        )}
                        {itemDesc && (
                          <p
                            className={`text-sm leading-relaxed text-white/70 ${
                              itemImage ? "pt-1" : "mt-2"
                            }`}
                          >
                            {itemDesc}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === §5 — Other industries footer === */}
      <OtherIndustries current={ind} />
    </>
  );
}

/* ============================================================
 * LAYOUT B — healthcare · cybersecurity
 *
 *   §1 shade  · centered overview (max-w-3xl)
 *   §2 white  · 4-col premium cards (pillars / layers with coverage)
 *   §3 navy   · horizontal flow (journey / faq items as cards)
 *   §4 shade  · stacked content sections
 *   §5 white  · "Other industries"
 * ============================================================ */
function LayoutB({ ind }: { ind: Industry }) {
  const Icon = ind.icon;
  const isHealthcare = ind.slug === "healthcare";
  const gridData = ind.pillars ?? ind.layers;
  // Cybersecurity has no journey/workflow — fall back to FAQ items as the
  // navy "domains" section so the layout stays full and on-structure.
  const flowData = ind.journey ?? ind.workflow ?? ind.faq?.items;

  return (
    <>
      {/* === §1 — shade, centered overview === */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                {Icon && (
                  <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand">
                    <Icon aria-hidden className="size-7" />
                  </span>
                )}
                <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                  Industry · {ind.title}
                </span>
              </div>
              <div aria-hidden className="rule-flame mx-auto" />
              <span className="section-label !mx-auto !mt-6 !block">
                [ Overview ]
              </span>
              <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                {ind.heroHeading ?? ind.sections?.[0]?.heading ?? ind.title}
              </h2>
              <div className="mt-6 space-y-4">
                {ind.intro ? (
                  <p className="text-[16px] leading-relaxed text-body">
                    {ind.intro}
                  </p>
                ) : (
                  ind.sections?.[0]?.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-relaxed text-body"
                    >
                      {p}
                    </p>
                  ))
                )}
              </div>
              <GlobalReachBadge className="mt-6 flex justify-center" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* === §2 — white, 4-col premium cards (pillars / layers) === */}
      {gridData && gridData.length > 0 && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={isHealthcare ? "[ Care pillars ]" : "[ Defense layers ]"}
                title={
                  isHealthcare ? (
                    <>
                      Four pillars of <span className="text-flame">modern care.</span>
                    </>
                  ) : (
                    <>
                      Defense-in-depth, <span className="text-flame">edge to human.</span>
                    </>
                  )
                }
                lead={
                  isHealthcare
                    ? "Four pillars shape every engagement — from first consult to long-term recovery, audited against outcomes not transactions."
                    : "Four defensive layers compound into full-spectrum resilience — every layer instrumented, every coverage gap measured and closed."
                }
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gridData.map((item, i) => {
                const ItemIcon = item.icon;
                // Extract coverage via a type guard helper so the narrowing
                // survives the JSX conditional block (in-operator narrowing
                // inside `&&` JSX containers is unreliable in TS 5.9).
                const layerItem = item as { coverage?: number };
                const coverage = layerItem.coverage;
                return (
                  <Reveal key={item.title} delay={Math.min(i * 0.07, 0.3)}>
                    <div className="card-lift group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      {ItemIcon && (
                        <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          <ItemIcon aria-hidden className="size-6" />
                        </span>
                      )}
                      <h3 className="mt-5 text-base font-bold leading-snug text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {item.desc}
                      </p>
                      {coverage !== undefined && (
                        <div className="mt-auto border-t border-line pt-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono font-semibold tracking-[0.12em] text-ink/45">
                              Coverage
                            </span>
                            <span className="font-bold text-brand">
                              {coverage}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-shade">
                            <div
                              className="h-full rounded-full brand-gradient"
                              style={{ width: `${coverage}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === §3 — ink navy, horizontal flow (journey) / faq cards === */}
      {flowData && flowData.length > 0 && (
        <section className="ink-gradient relative overflow-hidden py-section-md">
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/15 blur-3xl"
          />
          <div className="container-site relative">
            <Reveal>
              <SectionHeading
                label={
                  ind.faq
                    ? `[ ${ind.faq.label ?? "What we secure"} ]`
                    : isHealthcare
                      ? "[ Patient journey ]"
                      : "[ Workflow ]"
                }
                title={
                  ind.faq ? (
                    <>
                      Security, <span className="text-flame">answered.</span>
                    </>
                  ) : isHealthcare ? (
                    <>
                      From schedule to <span className="text-flame">recovery.</span>
                    </>
                  ) : (
                    <>
                      A closed loop that <span className="text-flame">learns.</span>
                    </>
                  )
                }
                lead={
                  ind.faq
                    ? "Straight answers to the questions security leaders ask us first — from threat surface to compliance posture to human firewalls."
                    : isHealthcare
                      ? "The patient journey, reimagined around outcomes — every step instrumented, every handoff accountable, every recovery visible."
                      : "Five workflow stages that take manual effort out of every cycle — trigger, decide, act, monitor, optimize."
                }
                tone="dark"
                align="center"
              />
            </Reveal>

            {ind.faq ? (
              // FAQ-as-navy-cards (cybersecurity)
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {flowData.map((item, i) => {
                  const itemImage = "image" in item ? item.image : undefined;
                  return (
                    <Reveal key={i} delay={Math.min(i * 0.07, 0.3)}>
                      <div className="card-lift group flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm hover:border-flame/40">
                        <div className="flex items-center gap-3">
                          {itemImage && (
                            <span className="flex size-10 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/[0.04]">
                              <Image
                                src={itemImage}
                                alt=""
                                width={40}
                                height={40}
                                className="size-10 object-contain"
                              />
                            </span>
                          )}
                          <span className="font-mono text-xs font-semibold tracking-[0.12em] text-white/45">
                            Q{String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mt-4 text-base font-bold leading-snug text-white">
                          {item.q}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {item.a}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              // Horizontal flow with connected nodes (healthcare journey)
              <div className="relative mt-12">
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-flame/40 to-transparent lg:block"
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {flowData.map((step, i) => {
                    const StepIcon = step.icon;
                    const stepTitle = "title" in step ? step.title : step.label;
                    return (
                      <Reveal
                        key={stepTitle + i}
                        delay={Math.min(i * 0.07, 0.3)}
                        className="relative"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-flame/40 bg-brand/10 text-flame">
                            {StepIcon && (
                              <StepIcon aria-hidden className="size-7" />
                            )}
                          </div>
                          <span className="mt-4 font-mono text-xs font-semibold tracking-[0.12em] text-white/45">
                            Step {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 text-base font-bold text-white">
                            {stepTitle}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-white/70">
                            {step.desc}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* === §4 — shade, stacked content sections === */}
      {ind.sections?.map((sec, i) => (
        <NarrativeSection key={i} sec={sec} bg="bg-shade" />
      ))}

      {/* === §5 — Other industries footer === */}
      <OtherIndustries current={ind} />
    </>
  );
}

/* ============================================================
 * LAYOUT C — education · ecommerce
 *
 *   §1 white  · left-aligned overview with flame rule (max-w-2xl)
 *   §2 shade  · horizontal stepper (pathway / channels) with arrows
 *   §3 white  · KPI / feature cards (ecommerceMetrics / platformFeatures)
 *   §4 shade  · stacked content sections
 *   §5 white  · horizontal strip (flow / techEnablers) — only if present
 *   §6 white  · "Other industries"
 * ============================================================ */
function LayoutC({ ind }: { ind: Industry }) {
  const Icon = ind.icon;
  const isEcommerce = ind.slug === "ecommerce";
  const stepperData = isEcommerce ? ind.channels : ind.pathway;
  const cardsData = isEcommerce ? ind.ecommerceMetrics : ind.platformFeatures;
  const stripData = ind.flow ?? ind.techEnablers;

  return (
    <>
      {/* === §1 — white, left-aligned overview with flame rule === */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                {Icon && (
                  <span className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                    <Icon aria-hidden className="size-7" />
                  </span>
                )}
                <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                  Industry · {ind.title}
                </span>
              </div>
              <div aria-hidden className="rule-flame mt-6" />
              <span className="section-label">[ Overview ]</span>
              <h2 className="text-display-lg font-bold leading-[1.1] text-ink">
                {ind.heroHeading ?? ind.title}
              </h2>
              <div className="mt-6 space-y-4">
                {ind.intro ? (
                  <p className="text-[16px] leading-relaxed text-body">
                    {ind.intro}
                  </p>
                ) : (
                  <p className="text-[16px] leading-relaxed text-body">
                    {ind.tagline}
                  </p>
                )}
              </div>
              <GlobalReachBadge className="mt-6" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* === §2 — shade, horizontal stepper (pathway / channels) === */}
      {stepperData && stepperData.length > 0 && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={isEcommerce ? "[ Omnichannel ]" : "[ Learner pathway ]"}
                title={
                  isEcommerce ? (
                    <>
                      Every touchpoint, <span className="text-flame">one experience.</span>
                    </>
                  ) : (
                    <>
                      From onboarding to <span className="text-flame">career.</span>
                    </>
                  )
                }
                lead={
                  isEcommerce
                    ? "Six channels converging on a single commerce spine — inventory, identity, pricing, and insight unified across every customer surface."
                    : "Five steps from first login to a credential that opens doors — adaptive, observable, and measurable at every step."
                }
                align="center"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {stepperData.map((step, i) => {
                  const StepIcon = "icon" in step ? step.icon : undefined;
                  const stepLabel = "label" in step ? step.label : step.title;
                  const stepDesc = "desc" in step ? step.desc : "";
                  return (
                    <li key={stepLabel + i} className="relative">
                      <div className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-white p-5 hover:border-flame/40 hover:shadow-lift">
                        <div className="flex items-center justify-between">
                          {StepIcon ? (
                            <span className="flex size-10 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand">
                              <StepIcon aria-hidden className="size-5" />
                            </span>
                          ) : (
                            <span className="font-mono text-2xl font-bold leading-none text-flame">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          )}
                          <span className="font-mono text-xs font-semibold tracking-[0.12em] text-ink/45">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-4 text-sm font-bold text-ink">
                          {stepLabel}
                        </p>
                        {stepDesc && (
                          <p className="mt-1 text-xs leading-relaxed text-body">
                            {stepDesc}
                          </p>
                        )}
                      </div>
                      {i < stepperData.length - 1 && (
                        <ArrowRight
                          aria-hidden
                          className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white p-0.5 text-flame shadow-soft lg:flex"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </section>
      )}

      {/* === §3 — white, KPI / feature cards === */}
      {cardsData && cardsData.length > 0 && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={
                  isEcommerce ? "[ Commerce KPIs ]" : "[ Platform features ]"
                }
                title={
                  isEcommerce ? (
                    <>
                      Numbers that <span className="text-flame">compound.</span>
                    </>
                  ) : (
                    <>
                      Built for <span className="text-flame">scale.</span>
                    </>
                  )
                }
                lead={
                  isEcommerce
                    ? "Three KPIs we move on every engagement — and the baselines we beat across the UK, Canada, Dubai and beyond."
                    : "Three platform features that make learning measurable, scalable, and resilient across regions, devices and cohorts."
                }
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cardsData.map((item, i) => {
                const ItemIcon = "icon" in item ? item.icon : undefined;
                const isMetric = "value" in item;
                const itemTitle = "title" in item ? item.title : "";
                const itemDesc = "desc" in item ? item.desc : "";
                return (
                  <Reveal key={i} delay={Math.min(i * 0.07, 0.3)}>
                    <div className="card-lift group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      {isMetric ? (
                        <>
                          <div aria-hidden className="rule-flame" />
                          <p className="mt-4 text-display-md font-bold text-ink">
                            {item.value}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-body">
                            {item.label}
                          </p>
                          {"trend" in item && item.trend && (
                            <p className="mt-1 text-xs font-semibold text-brand">
                              {item.trend}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          {ItemIcon && (
                            <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-all duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                              <ItemIcon aria-hidden className="size-6" />
                            </span>
                          )}
                          <h3 className="mt-5 text-base font-bold leading-snug text-ink">
                            {itemTitle}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-body">
                            {itemDesc}
                          </p>
                        </>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === §4 — shade, stacked content sections === */}
      {ind.sections?.map((sec, i) => (
        <NarrativeSection key={i} sec={sec} bg="bg-shade" />
      ))}

      {/* === §5 — white, horizontal strip (flow / techEnablers) === */}
      {stripData && stripData.length > 0 && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label="[ Tech enablers ]"
                title={
                  <>
                    The stack that <span className="text-flame">powers it.</span>
                  </>
                }
                lead="The technologies that make every transaction observable, every shipment provable, every cycle tunable."
                align="center"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap items-stretch justify-center gap-3">
                {stripData.map((t, i) => {
                  const TIcon = "icon" in t ? t.icon : undefined;
                  const tName =
                    "name" in t
                      ? t.name
                      : "label" in t
                        ? t.label
                        : "title" in t
                          ? t.title
                          : "";
                  const tDesc = "desc" in t ? t.desc : "";
                  return (
                    <li
                      key={tName + i}
                      className="card-lift flex items-center gap-3 rounded-2xl border border-line bg-cream px-5 py-4 hover:border-flame/40"
                    >
                      {TIcon && (
                        <span className="flex size-9 items-center justify-center rounded-lg border border-brand/20 bg-white text-brand">
                          <TIcon aria-hidden className="size-5" />
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-bold text-ink">{tName}</p>
                        {tDesc && (
                          <p className="text-xs leading-relaxed text-body">
                            {tDesc}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* === §6 — Other industries footer === */}
      <OtherIndustries current={ind} />
    </>
  );
}
