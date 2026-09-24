import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading } from "@/components/site/primitives";
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
  const hasLongBody = Boolean(service.overview || service.benefits);
  const serviceNo = services.findIndex((s) => s.slug === service.slug) + 1;

  /* Alternate white/shade across whichever sections actually render,
     so every service gets a varied rhythm regardless of optional blocks. */
  let sectionIdx = 0;
  const nextTone = () => (sectionIdx++ % 2 === 0 ? "bg-white" : "bg-shade");
  const mainTone = nextTone(); // always renders
  const subTone = service.subServices ? nextTone() : undefined;
  const faqTone = service.faq ? nextTone() : undefined;
  const relatedTone = nextTone(); // always renders
  const faqCardTone = faqTone === "bg-white" ? "bg-shade" : "bg-white";

  return (
    <>
      <PageBanner
        title={service.title}
        label={service.banner?.label ? `[ ${service.banner.label} ]` : undefined}
        image={service.banner?.image}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <div className="bg-white">
        {/* Overview + benefits */}
        {!hasLongBody ? (
          /* Compact centered intro for services without a long-form overview */
          <section className={`${mainTone} py-section-md`}>
            <div className="container-site">
              <Reveal>
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl border border-brand/20 bg-cream text-brand">
                    <Icon className="size-8" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-display-lg font-bold text-ink">
                    {service.title}
                  </h2>
                  <div aria-hidden className="rule-flame mt-5" />
                  <p className="mt-5 text-[17px] leading-relaxed text-body">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {service.techs.map((t) => (
                      <div
                        key={t.name}
                        className="flex h-14 items-center justify-center rounded-xl border border-line bg-shade px-4"
                      >
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={75}
                          height={50}
                          className="h-7 w-auto object-contain"
                          title={t.name}
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-lift mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-brand-dark"
                  >
                    Discuss your project
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ) : (
          <section className={`${mainTone} py-section-md`}>
            <div className="container-site">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
                {/* Sticky service rail — editorial panel with oversized numeral */}
                <div className="lg:sticky lg:top-32">
                  <Reveal>
                    <div className="rounded-3xl border border-line bg-shade p-7 shadow-soft lg:p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex size-16 items-center justify-center rounded-2xl border border-brand/20 bg-cream text-brand">
                          <Icon className="size-8" aria-hidden />
                        </div>
                        <span
                          aria-hidden
                          className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-6xl font-bold leading-none text-transparent"
                        >
                          {String(serviceNo).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-6 text-display-md font-bold text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-body">
                        {service.desc}
                      </p>
                      <div aria-hidden className="rule-flame mt-6" />

                      <div className="mt-6 rounded-2xl border border-line bg-white p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/45">
                          Technologies
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {service.techs.map((t) => (
                            <div
                              key={t.name}
                              className="flex h-14 items-center justify-center rounded-xl border border-line bg-white px-4"
                            >
                              <Image
                                src={t.img}
                                alt={t.name}
                                width={75}
                                height={50}
                                className="h-7 w-auto object-contain"
                                title={t.name}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="btn-lift mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame transition-colors hover:bg-brand-dark"
                      >
                        Discuss your project
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Long-form content */}
                <div>
                  {service.overview && (
                    <>
                      <Reveal>
                        <h3 className="text-display-lg font-bold text-ink">
                          {service.overview.heading}
                        </h3>
                      </Reveal>
                      {service.overview.paragraphs.length > 0 && (
                        <Reveal delay={0.07}>
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
                        </Reveal>
                      )}
                    </>
                  )}

                  {service.benefits && (
                    <div className="mt-12 border-t border-line pt-12">
                      <Reveal>
                        {service.benefits.label && (
                          <span className="section-label">
                            [ {service.benefits.label} ]
                          </span>
                        )}
                        <h3 className="text-display-md font-bold text-ink">
                          {service.benefits.heading}
                        </h3>
                        {service.benefits.intro && (
                          <p className="mt-4 text-[17px] leading-relaxed text-body">
                            {service.benefits.intro}
                          </p>
                        )}
                      </Reveal>

                      {service.benefits.bullets && (
                        <Reveal delay={0.07} className="mt-7">
                          <div className="grid gap-3 sm:grid-cols-2">
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
                        <Reveal delay={0.14} className="mt-7">
                          <div className="grid gap-4 sm:grid-cols-2">
                            {service.benefits.features.map((f) => (
                              <div
                                key={f.title}
                                className="card-lift group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft hover:border-flame/40 hover:shadow-lift"
                              >
                                <span
                                  aria-hidden
                                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                                />
                                <h4 className="text-display-sm font-bold text-ink">
                                  {f.title}
                                </h4>
                                <p className="mt-2.5 text-sm leading-relaxed text-body">
                                  {f.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Reveal>
                      )}

                      {service.benefits.closing && (
                        <Reveal>
                          <p className="mt-7 text-[17px] leading-relaxed text-body">
                            {service.benefits.closing}
                          </p>
                        </Reveal>
                      )}

                      {service.benefits.images && (
                        <Reveal className="mt-10">
                          {service.benefits.images.length === 1 ? (
                            /* Editorial moment — offset flame frame for a lone showcase image */
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
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub-services */}
        {service.subServices && (
          <section className={`${subTone} py-section-md`}>
            <div className="container-site">
              <Reveal>
                <SectionHeading
                  label={
                    service.subServices.label
                      ? `[ ${service.subServices.label} ]`
                      : undefined
                  }
                  title={service.subServices.heading}
                  lead={service.subServices.intro}
                />
              </Reveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {service.subServices.items.map((item, i) => (
                  <Reveal
                    key={item.title}
                    className="h-full"
                    delay={Math.min(i * 0.07, 0.35)}
                  >
                    <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      <span
                        aria-hidden
                        className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-4xl font-bold leading-none text-transparent"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-display-sm font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-body">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {service.faq && (
          <section className={`${faqTone} py-section-md`}>
            <div className="container-site">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                <div className="lg:sticky lg:top-32">
                  <Reveal>
                    {service.faq.label && (
                      <span className="section-label">
                        [ {service.faq.label} ]
                      </span>
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
                      <details
                        className={`group rounded-2xl border border-line ${faqCardTone} p-5 transition-colors duration-300 hover:border-flame/40 [&_summary]:cursor-pointer`}
                      >
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

        {/* Related services */}
        <section className={`${relatedTone} py-section-md`}>
          <div className="container-site">
            <Reveal>
              <SectionHeading size="md" title="Explore more services" />
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal
                      key={s.slug}
                      className="h-full"
                      delay={Math.min(i * 0.07, 0.35)}
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        className="card-lift group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-line bg-white p-5 hover:border-flame/40 hover:shadow-lift"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                        />
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <span className="text-sm font-semibold text-ink">
                          {s.title}
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="ml-auto size-4 shrink-0 text-body transition-transform duration-300 ease-out-quart group-hover:translate-x-1 group-hover:text-brand"
                        />
                      </Link>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
