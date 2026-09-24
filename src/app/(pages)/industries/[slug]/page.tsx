import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading, Stat } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { industries, type Industry } from "@/lib/site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry not found" };
  return {
    title: industry.title,
    description: industry.tagline,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return notFound();

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <PageShell>
      <IndustryDetail industry={industry} others={others} />
    </PageShell>
  );
}

function IndustryDetail({
  industry,
  others,
}: {
  industry: Industry;
  others: Industry[];
}) {
  const Icon = industry.icon;

  return (
    <>
      <PageBanner
        eyebrow={industry.label ?? "Industry"}
        title={industry.heroHeading ?? industry.title}
        description={industry.intro ?? industry.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      {/* Focus areas strip */}
      <Section className="border-b border-hairline">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <p className="micro-label">Focus areas</p>
            <ul className="flex flex-wrap gap-2">
              {industry.focusAreas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center rounded-full border border-hairline bg-paper px-3 py-1 text-xs font-medium text-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Stats (financial services, ecommerce) */}
      {industry.stats && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Outcomes"
                title="Numbers we stand behind."
                description="Engineering outcomes that translate directly to business value. Auditable, year over year."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-8 border-y border-hairline py-10 md:grid-cols-4">
              {industry.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <Stat value={s.value} label={s.label} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Pillars (healthcare) */}
      {industry.pillars && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Care pillars"
                title="Four pillars we engineer for."
                description="Every healthcare engagement we ship maps to one of these four pillars. If a feature doesn't advance at least one, we cut it from scope."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {industry.pillars.map((p, i) => {
                const PillarIcon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col gap-2 bg-background p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <PillarIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-base font-semibold text-foreground">
                        {p.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Journey (healthcare) — horizontal strip */}
      {industry.journey && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Patient journey"
                title="From schedule to recovery."
                description="The patient journey we engineer for — every step instrumented, every step auditable."
              />
            </Reveal>
            <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {industry.journey.map((j, i) => {
                const JourneyIcon = j.icon;
                return (
                  <Reveal key={j.title} delay={i * 0.06}>
                    <li className="flex h-full flex-col gap-3 bg-background p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                          <JourneyIcon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="font-display text-base font-semibold text-foreground">
                        {j.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {j.desc}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </Container>
        </Section>
      )}

      {/* Pathway (education) — numbered sequence */}
      {industry.pathway && (
        <Section className="border-b border-hairline">
          <Container size="narrow">
            <Reveal>
              <SectionHeading
                eyebrow="Learning pathway"
                title="Five stages, one learner."
                description="A real sequence — so numbered markers fit. Each stage produces a documented outcome the next stage depends on."
              />
            </Reveal>
            <ol className="mt-14 space-y-0">
              {industry.pathway.map((p, i) => {
                const isLast = i === industry.pathway!.length - 1;
                return (
                  <Reveal key={p.title} delay={Math.min(i * 0.04, 0.2)}>
                    <li className="relative grid grid-cols-[auto_1fr] gap-6 pb-10 md:grid-cols-[6rem_1fr] md:gap-8">
                      <div className="relative flex flex-col items-start">
                        <span className="font-mono text-2xl text-brand md:text-3xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {!isLast && (
                          <span className="mt-2 hidden h-[calc(100%-2rem)] w-px bg-hairline md:block" />
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="font-display text-lg font-semibold text-foreground md:text-xl">
                          {p.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {p.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </Container>
        </Section>
      )}

      {/* Platform features (education) */}
      {industry.platformFeatures && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Platform"
                title="Three platform features we don't ship without."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3">
              {industry.platformFeatures.map((p, i) => {
                const PlatformIcon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col gap-2 bg-background p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <PlatformIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-base font-semibold text-foreground">
                        {p.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Flow (logistics) — horizontal supply chain */}
      {industry.flow && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Supply chain flow"
                title="From source to optimization."
                description="The five-node flow we engineer for. Each node is independently observable and replaceable."
              />
            </Reveal>
            <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
              {industry.flow.map((f, i) => {
                const FlowIcon = f.icon;
                return (
                  <Reveal key={f.label} delay={Math.min(i * 0.05, 0.2)}>
                    <li className="flex h-full flex-col gap-2 bg-background p-5">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                          <FlowIcon className="h-5 w-5" />
                        </span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {f.label}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {f.desc}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </Container>
        </Section>
      )}

      {/* Tech enablers (logistics) */}
      {industry.techEnablers && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Tech enablers"
                title="Four technologies doing the heavy lifting."
              />
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-4">
              {industry.techEnablers.map((t, i) => {
                const TechIcon = t.icon;
                return (
                  <Reveal key={t.name} delay={i * 0.05}>
                    <li className="flex flex-col gap-2 bg-background p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <TechIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* Layers (cybersecurity) */}
      {industry.layers && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Defense in depth"
                title="Four layers, four coverages."
                description="Defense in depth means each layer is independently measurable. We report against these numbers every quarter."
              />
            </Reveal>
            <div className="mt-12 space-y-px overflow-hidden rounded-md border border-hairline bg-hairline">
              {industry.layers.map((l, i) => {
                const LayerIcon = l.icon;
                return (
                  <Reveal key={l.title} delay={i * 0.05}>
                    <div className="grid grid-cols-1 gap-4 bg-background p-6 md:grid-cols-[auto_1fr_8rem] md:items-center md:gap-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <LayerIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-muted-foreground">
                            Layer {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="font-display text-base font-semibold text-foreground">
                            {l.title}
                          </p>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {l.desc}
                        </p>
                        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-paper-soft">
                          <div
                            className="h-full rounded-full bg-brand"
                            style={{ width: `${l.coverage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-2xl text-foreground">
                          {l.coverage}%
                        </span>
                        <p className="text-xs text-muted-foreground">coverage</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Workflow (automation) — numbered sequence */}
      {industry.workflow && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Automation workflow"
                title="Trigger to optimization."
                description="The automation loop we engineer for. Each step is independently observable and replaceable — no step is a black box."
              />
            </Reveal>
            <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
              {industry.workflow.map((w, i) => {
                const WorkflowIcon = w.icon;
                return (
                  <Reveal key={w.label} delay={Math.min(i * 0.05, 0.2)}>
                    <li className="flex h-full flex-col gap-2 bg-background p-5">
                      <span className="font-mono text-xs text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <WorkflowIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {w.label}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {w.desc}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </Container>
        </Section>
      )}

      {/* Channels (ecommerce) */}
      {industry.channels && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Omnichannel"
                title="Six channels, one commerce backbone."
                description="Each channel plugs into the same commerce backbone — inventory, pricing, payments, personalization. No silos."
              />
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-6">
              {industry.channels.map((c, i) => {
                const ChannelIcon = c.icon;
                return (
                  <Reveal key={c.label} delay={Math.min(i * 0.04, 0.2)}>
                    <li className="flex flex-col items-center gap-2 bg-background p-5 text-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <ChannelIcon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        {c.label}
                      </span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* Ecommerce metrics */}
      {industry.ecommerceMetrics && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Commerce KPIs"
                title="Outcomes we engineer for."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3">
              {industry.ecommerceMetrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <div className="bg-background p-6">
                    <p className="font-mono text-3xl text-foreground md:text-4xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-sm text-foreground">{m.label}</p>
                    {m.trend && (
                      <p className="text-xs text-muted-foreground">{m.trend}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Sub-industries */}
      {industry.subIndustries && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Areas we serve"
                title={industry.subIndustries.heading}
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {industry.subIndustries.items.map((item, i) => (
                <Reveal key={item.title} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="flex h-full flex-col gap-2 bg-background p-6">
                    <span className="step-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-base font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Sections (generic content blocks) */}
      {industry.sections?.map((section, idx) => (
        <Section
          key={idx}
          className={cn(
            "border-b border-hairline",
            idx % 2 === 1 && "bg-paper"
          )}
        >
          <Container size="narrow">
            <Reveal>
              {section.label && <p className="micro-label mb-3">{section.label}</p>}
              <h2 className="display text-2xl text-foreground md:text-3xl lg:text-4xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </Container>
        </Section>
      ))}

      {/* FAQ */}
      {industry.faq && (
        <Section className="border-b border-hairline bg-paper">
          <Container size="narrow">
            <Reveal>
              <SectionHeading
                eyebrow={industry.faq.label ?? "FAQ"}
                title={industry.faq.heading}
              />
            </Reveal>
            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {industry.faq.items.map((item) => (
                <li key={item.q} className="py-6">
                  <p className="font-display text-base font-semibold text-foreground">
                    {item.q}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* CTA */}
      {industry.cta && (
        <Section className="border-b border-hairline bg-brand text-brand-foreground">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="micro-label is-centered mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
                  Next step
                </p>
                <h2 className="display text-2xl md:text-3xl">
                  {industry.cta.heading ?? "Ready to start?"}
                </h2>
                {industry.cta.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 text-sm leading-relaxed opacity-90 md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                {industry.cta.button ?? "Talk to our team"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* Other industries */}
      <Section>
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between">
              <p className="micro-label">Other industries</p>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-sm text-foreground hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All industries
              </Link>
            </div>
          </Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3">
            {others.map((o, i) => {
              const OtherIcon = o.icon;
              return (
                <li key={o.slug}>
                  <Reveal delay={i * 0.05}>
                    <Link
                      href={`/industries/${o.slug}`}
                      className="group flex h-full flex-col gap-2 bg-background p-6 transition-colors hover:bg-paper-soft"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <OtherIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {o.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {o.tagline}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-brand">
                        Read more
                        <ArrowRight className="h-3 w-3 transition-all group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {!industry.cta && (
        <CTAStrip
          heading={`Ready to scope your ${industry.title.toLowerCase()} project?`}
          body="Book a free 30-minute consultation. We'll review your situation, share a written recommendation and propose a small first milestone."
          buttonLabel="Book a consultation"
          href="/appointment"
        />
      )}
    </>
  );
}

// Inline cn to avoid circular import in server component
function cn(...args: Array<string | false | undefined | null>) {
  return args.filter(Boolean).join(" ");
}
