import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { services, type Service } from "@/lib/site-data";
import { db } from "@/lib/db";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  // Increment view counter (best-effort)
  try {
    await db.serviceView.upsert({
      where: { slug: service.slug },
      create: { slug: service.slug, views: 1 },
      update: { views: { increment: 1 } },
    });
  } catch {
    // DB optional in dev
  }

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <ServiceDetail service={service} others={others} />
    </PageShell>
  );
}

function ServiceDetail({
  service,
  others,
}: {
  service: Service;
  others: Service[];
}) {
  const Icon = service.icon;
  return (
    <>
      <PageBanner
        eyebrow={service.banner.label ?? "Service"}
        title={service.title}
        description={service.desc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Overview */}
      <Section className="border-b border-hairline">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="overflow-hidden rounded-md border border-hairline bg-paper">
                  {/* Branded header strip */}
                  <div className="relative overflow-hidden bg-brand text-brand-foreground p-6">
                    <svg
                      aria-hidden
                      viewBox="0 0 30 30"
                      className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 opacity-20"
                    >
                      <polygon
                        points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="relative mt-4 font-display text-base font-semibold">
                      {service.title}
                    </p>
                    <p className="relative mt-2 text-sm leading-relaxed opacity-85">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="p-6">
                    <div>
                      <p className="micro-label mb-2">Tech stack</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {service.techs.map((t) => (
                          <li
                            key={t}
                            className="rounded border border-hairline bg-background px-2 py-0.5 font-mono text-[10px] text-foreground"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link href="/contact" className="btn-brand w-full justify-center">
                        Start a project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Overview"
                  title={service.overview.heading}
                />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {service.overview.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      {service.benefits && (
        <Section className="border-b border-hairline bg-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow={service.benefits.label ?? "Benefits"}
                title={service.benefits.heading}
                description={service.benefits.intro}
              />
            </Reveal>

            {service.benefits.features && (
              <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
                {service.benefits.features.map((f, i) => (
                  <Reveal key={f.title} delay={Math.min(i * 0.05, 0.2)}>
                    <div className="flex h-full flex-col gap-2 bg-background p-6">
                      <span className="step-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-display text-base font-semibold text-foreground">
                        {f.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {f.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {service.benefits.bullets && (
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.benefits.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 rounded-md border border-hairline bg-background px-4 py-3"
                  >
                    <Check className="h-4 w-4 text-brand" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {service.benefits.closing && (
              <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.benefits.closing}
              </p>
            )}
          </Container>
        </Section>
      )}

      {/* Sub-services */}
      {service.subServices && (
        <Section className="border-b border-hairline">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow={service.subServices.label ?? "What we deliver"}
                title={service.subServices.heading}
                description={service.subServices.intro}
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2">
              {service.subServices.items.map((item, i) => (
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

      {/* FAQ */}
      {service.faq && (
        <Section className="border-b border-hairline bg-paper">
          <Container size="narrow">
            <Reveal>
              <SectionHeading
                eyebrow={service.faq.label ?? "FAQ"}
                title={service.faq.heading}
              />
            </Reveal>
            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {service.faq.items.map((item) => (
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

      {/* Other services */}
      <Section className="border-b border-hairline">
        <Container>
          <Reveal>
            <div className="flex items-baseline justify-between">
              <p className="micro-label">Other services</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm text-foreground hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All services
              </Link>
            </div>
          </Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3">
            {others.map((s, i) => {
              const OtherIcon = s.icon;
              return (
                <li key={s.slug}>
                  <Reveal delay={i * 0.05}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col gap-2 bg-background p-6 transition-colors hover:bg-paper-soft"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <OtherIcon className="h-5 w-5" />
                      </span>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {s.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.tagline}
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

      <CTAStrip
        heading={`Ready to scope your ${service.shortTitle.toLowerCase()} project?`}
        body="Book a free 30-minute consultation. We'll review your situation, share a written recommendation and propose a small first milestone."
        buttonLabel="Book a consultation"
        href="/appointment"
      />
    </>
  );
}
