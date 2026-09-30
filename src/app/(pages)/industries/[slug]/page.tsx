import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { industries, type Industry } from "@/lib/site-data";

/* ============================================================
 * Dynamic industry detail page — handles all 7 industry slugs.
 * Layout picks by slug:
 *
 *   A (financial-services — kept AS-IS per user request)
 *      2-col sticky intro + offset-cream framed bannerImage →
 *      4-col KPI / stage cards (flow / workflow) →
 *      alternating full-width narrative sections →
 *      ink-navy glass cards (subIndustries / techEnablers).
 *
 *   B (healthcare · education · logistics · cybersecurity ·
 *      ecommerce · automation — clean editorial template)
 *      §1 white 2-col: intro text (eyebrow + heading +
 *        paragraph + focusAreas line + GlobalReachBadge) +
 *        offset-cream framed bannerImage.
 *      §2 alternating bg-shade / bg-white: ind.sections as
 *        paragraph-only prose blocks (heading + paragraphs +
 *        optional image — NO bullets, NO lists). Falls back to
 *        intro + tagline prose when ind.sections is empty.
 *      §3 white: cards grid (subIndustries → pillars →
 *        platformFeatures → layers → channels → flow →
 *        workflow → journey fallback chain) — icon tile +
 *        title + paragraph desc, NO bullets.
 *      §4 full-width banner image break with navy gradient
 *        overlay + tagline quote.
 *
 * No CTABand / CTAStrip / "Other industries" footer — every
 * layout ends cleanly on its last section.
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

  const layout = slug === "financial-services" ? "A" : "B";

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
  image,
  imageSide = "right",
}: {
  sec: NonNullable<Industry["sections"]>[number];
  bg: "bg-white" | "bg-shade";
  image?: string;
  imageSide?: "left" | "right";
}) {
  const useImage = sec.image || image;
  return (
    <section className={`${bg} py-section-md`}>
      <div className="container-site">
        <div className={`grid gap-12 lg:gap-16 ${useImage ? "lg:grid-cols-2 lg:items-center" : "mx-auto max-w-4xl"}`}>
          {/* Text side */}
          <div className={imageSide === "left" && useImage ? "lg:order-2" : ""}>
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
            </Reveal>
          </div>
          {/* Image side */}
          {useImage && (
            <Reveal delay={0.1} className={imageSide === "left" ? "lg:order-1" : ""}>
              <div className="relative">
                <div
                  aria-hidden
                  className={`absolute hidden h-full w-full rounded-2xl border border-line bg-cream lg:block ${
                    imageSide === "left" ? "-left-5 -top-5" : "-right-5 -top-5"
                  }`}
                />
                <div className="relative overflow-hidden rounded-2xl shadow-float">
                  <Image
                    src={useImage}
                    alt={sec.heading}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          )}
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

      {/* === §2 — shade, stage cards (flow/workflow only, NOT stats) === */}
      {stageData && stageData.length > 0 && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label="[ The stages ]"
                title={
                  <>
                    Stages that <span className="text-flame">connect.</span>
                  </>
                }
                lead="Five stages that move work end-to-end — each one observable, instrumented and recoverable in real time."
                align="center"
              />
            </Reveal>

            {/* Stage cards (logistics.flow / automation.workflow) */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stageData.map((step, i) => {
                const StepIcon = step.icon;
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
          </div>
        </section>
      )}

      {/* === §3 — narrative sections (alternating bg-white/bg-shade, para left + image right) === */}
      {ind.sections?.map((sec, i) => (
        <NarrativeSection
          key={i}
          sec={sec}
          bg={i % 2 === 0 ? "bg-white" : "bg-shade"}
          image={ind.bannerImage}
          imageSide={i % 2 === 0 ? "right" : "left"}
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

    </>
  );
}


/* ============================================================
 * LAYOUT B — healthcare · education · logistics · cybersecurity ·
 * ecommerce · automation (clean editorial template)
 *
 *   §1 white  · 2-col intro (eyebrow + heading + paragraph +
 *                  focusAreas line + GlobalReachBadge) +
 *                  offset-cream framed bannerImage.
 *   §2 shade↔white · ind.sections rendered as paragraph-only
 *                  prose (heading + paragraphs + optional image —
 *                  NO bullets, NO lists). Alternates bg-shade /
 *                  bg-white when multiple sections exist. Falls
 *                  back to a single intro+tagline prose block
 *                  when ind.sections is empty (e.g. automation).
 *   §3 white  · cards grid (subIndustries → pillars →
 *                  platformFeatures → layers → channels →
 *                  flow → workflow → journey fallback chain).
 *                  Each card: icon tile (or numbered tile when
 *                  the item has no icon, e.g. subIndustries
 *                  items) + title + paragraph desc. NO bullets.
 *   §4 full-width banner image break with navy gradient overlay
 *                  + flame rule + tagline quote + GlobalReach
 *                  caption with ArrowRight flourish.
 *
 * No CTA, no "Other industries" footer — ends on the image
 * break so every industry reads the same editorial rhythm.
 * ============================================================ */
function LayoutB({ ind }: { ind: Industry }) {
  // §3 — pick the first available card dataset following the spec
  // fallback chain. The flow / workflow / journey fallbacks are
  // appended so industries like logistics (which only has `flow`)
  // and automation (subIndustries items have no icon, image paths
  // broken — handled by skipping item.image and using a numbered
  // tile) still get a cards section.
  type CardItem = { icon?: LucideIcon; title: string; desc?: string };
  type CardsConfig = {
    items: CardItem[];
    label: string;
    title: ReactNode;
    lead: string;
  };

  const cards: CardsConfig | null = (() => {
    if (ind.subIndustries && ind.subIndustries.items.length > 0) {
      return {
        items: ind.subIndustries.items.map((it) => ({
          title: it.title,
          desc: it.desc,
        })),
        label: `[ ${ind.subIndustries.heading} ]`,
        title: (
          <>
            Engagements that <span className="text-flame">scale.</span>
          </>
        ),
        lead:
          "A focused set of service tracks inside this industry — each one scoped, engineered and shipped against a clear business outcome across the UK, Canada, Dubai and beyond.",
      };
    }
    if (ind.pillars && ind.pillars.length > 0) {
      return {
        items: ind.pillars.map(({ icon, title, desc }) => ({
          icon,
          title,
          desc,
        })),
        label: "[ Care pillars ]",
        title: (
          <>
            Pillars of <span className="text-flame">modern care.</span>
          </>
        ),
        lead:
          "Every engagement is built on these pillars — audited against outcomes, not transactions.",
      };
    }
    if (ind.platformFeatures && ind.platformFeatures.length > 0) {
      return {
        items: ind.platformFeatures.map(({ icon, title, desc }) => ({
          icon,
          title,
          desc,
        })),
        label: "[ Platform features ]",
        title: (
          <>
            Built for <span className="text-flame">scale.</span>
          </>
        ),
        lead:
          "The platform capabilities that make every program measurable, scalable, and resilient across regions, devices and cohorts.",
      };
    }
    if (ind.layers && ind.layers.length > 0) {
      return {
        items: ind.layers.map(({ icon, title, desc }) => ({
          icon,
          title,
          desc,
        })),
        label: "[ Defense layers ]",
        title: (
          <>
            Defense-in-depth,{" "}
            <span className="text-flame">edge to human.</span>
          </>
        ),
        lead:
          "Defensive layers compound into full-spectrum resilience — every layer instrumented, every coverage gap measured and closed.",
      };
    }
    if (ind.channels && ind.channels.length > 0) {
      return {
        items: ind.channels.map(({ icon, label }) => ({
          icon,
          title: label,
        })),
        label: "[ Omnichannel ]",
        title: (
          <>
            Every touchpoint,{" "}
            <span className="text-flame">one experience.</span>
          </>
        ),
        lead:
          "A converged commerce spine across every customer surface — unified inventory, identity, pricing and insight.",
      };
    }
    if (ind.flow && ind.flow.length > 0) {
      return {
        items: ind.flow.map(({ icon, label, desc }) => ({
          icon,
          title: label,
          desc,
        })),
        label: "[ The stages ]",
        title: (
          <>
            Stages that <span className="text-flame">connect.</span>
          </>
        ),
        lead:
          "End-to-end stages that move work through the chain — each one observable, instrumented and recoverable in real time.",
      };
    }
    if (ind.workflow && ind.workflow.length > 0) {
      return {
        items: ind.workflow.map(({ icon, label, desc }) => ({
          icon,
          title: label,
          desc,
        })),
        label: "[ Workflow ]",
        title: (
          <>
            A closed loop that{" "}
            <span className="text-flame">learns.</span>
          </>
        ),
        lead:
          "Five workflow stages that take manual effort out of every cycle — trigger, decide, act, monitor, optimize.",
      };
    }
    if (ind.journey && ind.journey.length > 0) {
      return {
        items: ind.journey.map(({ icon, title, desc }) => ({
          icon,
          title,
          desc,
        })),
        label: "[ Patient journey ]",
        title: (
          <>
            From schedule to{" "}
            <span className="text-flame">recovery.</span>
          </>
        ),
        lead:
          "The patient journey, reimagined around outcomes — every step instrumented, every handoff accountable, every recovery visible.",
      };
    }
    return null;
  })();

  // §2 — prose sections: ind.sections, or a single fallback section
  // synthesized from intro + tagline when ind.sections is empty
  // (e.g. automation has no `sections` field).
  type ProseSection = NonNullable<Industry["sections"]>[number];
  const proseSections: ProseSection[] =
    ind.sections && ind.sections.length > 0
      ? ind.sections
      : [
          {
            heading: ind.heroHeading ?? ind.title,
            paragraphs: [ind.intro, ind.tagline].filter(
              Boolean
            ) as string[],
          },
        ];

  return (
    <>
      {/* === §1 — full-width image banner with integrated intro text === */}
      <section className="relative overflow-hidden bg-ink">
        {ind.bannerImage && (
          <Image
            src={ind.bannerImage}
            alt={ind.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,3,61,0.95) 0%, rgba(11,22,94,0.75) 45%, rgba(11,22,94,0.35) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-site relative py-20 lg:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <div aria-hidden className="rule-flame mb-5" />
              <h2 className="text-display-xl font-bold leading-[1.05] text-white">
                {ind.heroHeading ?? ind.title}
              </h2>
              {ind.intro && (
                <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                  {ind.intro}
                </p>
              )}
              <p className="mt-4 text-sm font-medium text-brand-light">
                {ind.focusAreas?.join("  ·  ") ?? ind.tagline}
                {"  —  "}
                Serving clients across the UK, Canada, Dubai, and beyond.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === §2 — alternating shade / white prose sections (para left + image right) === */}
      {proseSections.map((sec, i) => (
        <NarrativeSection
          key={i}
          sec={sec}
          bg={i % 2 === 0 ? "bg-shade" : "bg-white"}
          image={ind.bannerImage}
          imageSide={i % 2 === 0 ? "right" : "left"}
        />
      ))}

      {/* === §3 — white, paragraph-based content with image (NOT cards) === */}
      {cards && cards.items.length > 0 && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              {/* Left — paragraph */}
              <div>
                <Reveal>
                  <div aria-hidden className="rule-flame mb-6" />
                  <h3 className="text-display-md font-bold leading-snug text-ink">
                    {cards.title}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {cards.items.map((item, i) => (
                      <p key={i} className="text-[16px] leading-relaxed text-body">
                        <span className="font-semibold text-ink">{item.title}</span>
                        {item.desc ? ` — ${item.desc}` : ""}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
              {/* Right — image */}
              {ind.bannerImage && (
                <Reveal delay={0.1}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
                    />
                    <div className="relative overflow-hidden rounded-2xl shadow-float">
                      <Image
                        src={ind.bannerImage}
                        alt={ind.title}
                        width={640}
                        height={480}
                        className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
                      />
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* === §4 — full-width banner image break with navy overlay + tagline === */}
      {ind.bannerImage && (
        <section className="relative overflow-hidden bg-ink">
          <div className="relative h-[400px] w-full sm:h-[480px] lg:h-[560px]">
            <Image
              src={ind.bannerImage}
              alt={ind.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, rgba(0,3,61,0.94) 0%, rgba(11,22,94,0.78) 50%, rgba(11,22,94,0.52) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 grid-pattern opacity-20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-flame/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full bg-flame/15 blur-3xl"
            />
            <div className="container-site relative flex h-full items-center">
              <div className="max-w-2xl">
                <div aria-hidden className="rule-flame mb-6" />
                {ind.tagline && (
                  <p className="text-display-md font-bold leading-[1.15] text-white lg:text-display-lg">
                    {ind.tagline}
                  </p>
                )}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-flame">
                  <span
                    aria-hidden
                    className="inline-block size-1.5 rounded-full bg-flame"
                  />
                  Serving clients across the UK, Canada, Dubai, and beyond
                  <ArrowRight className="size-4" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
