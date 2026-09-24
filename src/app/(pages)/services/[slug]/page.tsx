import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Quote,
  Sparkles,
  PackageCheck,
} from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} | Globantis Labs`,
    description: service.desc,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const serviceNo = services.findIndex((s) => s.slug === service.slug) + 1;

  // Other services for the "explore more" strip
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title={service.title}
        label={service.banner?.label ? `[ ${service.banner.label} ]` : undefined}
        image={service.banner?.image}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* ============ 1. Overview + sticky rail ============ */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            {/* Sticky service rail */}
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-line bg-shade shadow-soft">
                  {/* Branded header strip */}
                  <div className="relative overflow-hidden bg-brand-gradient p-6 text-white">
                    <svg
                      aria-hidden
                      viewBox="0 0 30 30"
                      className="pointer-events-none absolute -right-4 -top-4 size-20 opacity-20"
                    >
                      <polygon
                        points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="flex items-start justify-between">
                      <span className="flex size-14 items-center justify-center rounded-xl bg-white/15">
                        <Icon className="size-7" />
                      </span>
                      <span className="font-mono text-4xl font-bold leading-none text-white/30">
                        {String(serviceNo).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 text-display-sm font-bold">
                      {service.title}
                    </h2>
                    {service.tagline && (
                      <p className="mt-1 text-sm opacity-85">{service.tagline}</p>
                    )}
                  </div>

                  {/* Body — description + tech stack + CTA */}
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-body">
                      {service.desc}
                    </p>
                    <div aria-hidden className="rule-flame mt-5" />

                    {/* Tech stack */}
                    <div className="mt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/45">
                        Technologies
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        {service.techs.map((t) => (
                          <div
                            key={t.name}
                            className="flex h-12 items-center justify-center rounded-xl border border-line bg-white px-3"
                          >
                            <Image
                              src={t.img}
                              alt={t.name}
                              width={60}
                              height={40}
                              className="h-6 w-auto object-contain"
                              title={t.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="btn-lift mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                    >
                      Discuss your project
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Long-form content */}
            <div>
              {service.overview && (
                <Reveal>
                  <SectionHeading
                label={service.banner?.label ? `[ ${service.banner.label} ]` : "[ Overview ]"}
                title={service.overview.heading}
              />
                  {service.overview.paragraphs.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {service.overview.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-[17px] leading-relaxed text-body"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </Reveal>
              )}

              {/* Deliverables chips — quick visual summary */}
              {service.deliverables && (
                <Reveal delay={0.07} className="mt-10">
                  <div className="rounded-2xl border border-line bg-shade p-6">
                    <div className="flex items-center gap-2">
                      <PackageCheck className="size-5 text-brand" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                        What you'll walk away with
                      </p>
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-ink"
                        >
                          <CheckCircle2
                            className="size-4 shrink-0 text-brand"
                            aria-hidden
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. Stats band — service KPIs ============ */}
      {service.stats && (
        <section className="relative overflow-hidden bg-ink py-section-sm text-white">
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
          <div
            aria-hidden
            className="absolute -right-32 top-0 size-80 rounded-full bg-flame/15 blur-[120px]"
          />
          <div className="container-site relative">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="section-label !text-brand-light">[ By the numbers ]</span>
                <h2 className="mt-3 text-display-md font-bold text-white">
                  Outcomes we ship on this engagement.
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:grid-cols-4">
              {service.stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={Math.min(i * 0.08, 0.32)}
                  className="h-full"
                >
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
      )}

      {/* ============ 3. Process timeline — five phases with deliverables ============ */}
      {service.processSteps && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={service.processSteps.label ? `[ ${service.processSteps.label} ]` : "[ Delivery process ]"}
                title={service.processSteps.heading}
                lead={service.processSteps.intro}
                align="center"
              />
            </Reveal>

            <ol className="mt-16 space-y-6">
              {service.processSteps.steps.map((step, i) => {
                const isLast = i === service.processSteps!.steps.length - 1;
                return (
                  <Reveal
                    key={step.phase}
                    delay={Math.min(i * 0.05, 0.25)}
                  >
                    <li className="group grid gap-6 rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift md:grid-cols-[5rem_1fr_15rem] md:items-start md:gap-8 md:p-8">
                      {/* Number + icon */}
                      <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-3">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-brand/30">
                          <span className="font-mono text-lg font-bold">
                            {step.phase}
                          </span>
                        </div>
                        <Clock className="size-5 text-ink/30" aria-hidden />
                      </div>

                      {/* Body */}
                      <div>
                        <div className="flex flex-wrap items-baseline gap-3">
                          <h3 className="text-display-sm font-bold text-ink">
                            {step.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-brand">
                            <Clock className="size-3" aria-hidden />
                            {step.duration}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-body md:text-[15px]">
                          {step.desc}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="md:border-l md:border-line md:pl-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                          Deliverables
                        </p>
                        <ul className="mt-2 space-y-2">
                          {step.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-sm text-ink/80"
                            >
                              <CheckCircle2
                                className="mt-0.5 size-3.5 shrink-0 text-brand"
                                aria-hidden
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ============ 4. Use cases / What we ship ============ */}
      {service.useCases && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={service.useCases.label ? `[ ${service.useCases.label} ]` : "[ What we ship ]"}
                title={service.useCases.heading}
                lead={service.useCases.intro}
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.useCases.items.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    delay={Math.min(i * 0.05, 0.25)}
                    className="h-full"
                  >
                    <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                      />
                      <div className="flex items-center justify-between">
                        {ItemIcon && (
                          <span className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                            <ItemIcon className="size-6" />
                          </span>
                        )}
                        <span className="font-mono text-3xl font-bold text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-display-sm font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============ 5. Testimonial ============ */}
      {service.testimonial && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-white p-8 text-center shadow-float md:p-12">
                <Quote
                  aria-hidden
                  className="mx-auto size-12 text-flame"
                />
                <p className="mt-6 text-display-md font-bold leading-snug text-ink">
                  &ldquo;{service.testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex flex-col items-center gap-1">
                  <p className="font-bold text-ink">
                    {service.testimonial.author}
                  </p>
                  <p className="text-sm text-body">
                    {service.testimonial.role}
                    {service.testimonial.company
                      ? ` · ${service.testimonial.company}`
                      : ""}
                  </p>
                </div>
                <div
                  aria-hidden
                  className="absolute -left-12 -top-12 size-32 rounded-full bg-flame/10 blur-3xl"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-12 -right-12 size-32 rounded-full bg-flame/10 blur-3xl"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ 6. Benefits (existing — preserved) ============ */}
      {service.benefits && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={service.benefits.label ? `[ ${service.benefits.label} ]` : "[ Benefits ]"}
                title={service.benefits.heading}
                lead={service.benefits.intro}
              />
            </Reveal>

            {service.benefits.bullets && (
              <Reveal delay={0.07} className="mt-10">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.benefits.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-3 rounded-xl border border-line bg-shade px-4 py-3.5 text-sm font-medium text-ink"
                    >
                      <CheckCircle2
                        className="size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {b}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {service.benefits.features && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.benefits.features.map((f, i) => (
                  <Reveal
                    key={f.title}
                    delay={Math.min(i * 0.05, 0.25)}
                    className="h-full"
                  >
                    <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-shade p-6 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      <span className="font-mono text-3xl font-bold text-ink/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-3 text-display-sm font-bold text-ink">
                        {f.title}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-body">
                        {f.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {service.benefits.closing && (
              <Reveal className="mt-10">
                <p className="max-w-3xl text-[17px] leading-relaxed text-body">
                  {service.benefits.closing}
                </p>
              </Reveal>
            )}

            {service.benefits.images && service.benefits.images.length > 0 && (
              <Reveal className="mt-10">
                {service.benefits.images.length === 1 ? (
                  <div className="relative max-w-xl">
                    <div
                      aria-hidden
                      className="absolute -bottom-4 -right-4 size-full rounded-2xl bg-cream"
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-line shadow-float">
                      <Image
                        src={service.benefits.images[0]}
                        alt="Project showcase"
                        width={640}
                        height={427}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {service.benefits.images.map((img) => (
                      <div
                        key={img}
                        className="group/img overflow-hidden rounded-2xl border border-line bg-shade shadow-soft"
                      >
                        <Image
                          src={img}
                          alt="Project showcase"
                          width={300}
                          height={200}
                          className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-700 ease-out-expo group-hover/img:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ============ 7. Sub-services ============ */}
      {service.subServices && (
        <section className="bg-shade py-section-md">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                label={service.subServices.label ? `[ ${service.subServices.label} ]` : "[ What we deliver ]"}
                title={service.subServices.heading}
                lead={service.subServices.intro}
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {service.subServices.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div className="card-lift group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <span className="font-mono text-4xl font-bold text-ink/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-display-sm font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ 8. FAQ ============ */}
      {service.faq && (
        <section className="bg-white py-section-md">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  {service.faq.label && (
                    <span className="section-label">[ {service.faq.label} ]</span>
                  )}
                  <h2 className="text-display-lg font-bold text-ink">
                    {service.faq.heading}
                  </h2>
                  {service.faq.image && (
                    <div className="relative mt-8 max-w-md">
                      <div
                        aria-hidden
                        className="absolute -inset-3 rounded-3xl border border-flame/25"
                      />
                      <div className="relative overflow-hidden rounded-2xl shadow-float">
                        <Image
                          src={service.faq.image}
                          alt={service.faq.heading}
                          width={560}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>

              <div className="space-y-3">
                {service.faq.items.map((item, i) => (
                  <Reveal key={i} delay={Math.min(i * 0.07, 0.35)}>
                    <details className="group card-lift rounded-2xl border border-line bg-shade p-5 transition-colors duration-300 hover:border-flame/40 open:border-flame/40 open:bg-white open:shadow-lift [&_summary]:cursor-pointer">
                      <summary className="flex min-h-11 list-none items-center gap-4 text-base font-bold text-ink marker:content-none">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt=""
                            width={40}
                            height={40}
                            className="size-10 shrink-0 object-contain"
                          />
                        )}
                        {item.q}
                        <ChevronRight
                          aria-hidden
                          className="ml-auto size-4 shrink-0 text-brand transition-transform duration-300 ease-out-quart group-open:rotate-90"
                        />
                      </summary>
                      <p
                        className={`mt-3 text-sm leading-relaxed text-body ${
                          item.image ? "pl-14" : ""
                        }`}
                      >
                        {item.a}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ 9. Explore more services ============ */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              size="md"
              label="[ Keep exploring ]"
              title="Other services from Globantis Labs."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {others.map((s, i) => {
              const OtherIcon = s.icon;
              return (
                <Reveal
                  key={s.slug}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group card-lift relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <OtherIcon className="size-5" aria-hidden />
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-5 text-body transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </div>
                    <h4 className="text-base font-bold text-ink">{s.title}</h4>
                    <p className="text-sm leading-relaxed text-body line-clamp-2">
                      {s.desc}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 10. CTA ============ */}
      <CTABand
        label="[ Let's build ]"
        title={`Ready to scope your ${service.shortTitle.toLowerCase()} project?`}
        desc="Book a free 30-minute consultation. We'll review your situation, share a written recommendation, and propose a small first milestone."
        ctaHref="/appointment"
        ctaLabel="Book a consultation"
        tone="ink"
      />
    </>
  );
}
