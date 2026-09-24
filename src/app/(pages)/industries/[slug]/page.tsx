import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { IndustryShowcase } from "@/components/site/industry-showcase";
import { OG_IMAGE, SITE_NAME } from "@/lib/seo";
import { industries } from "@/lib/site-data";

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
    ind.title;
  return {
    title,
    description,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title,
      description,
      url: `/industries/${slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  // --- Section rhythm -------------------------------------------------
  // The showcase sits on bg-shade (or dark ink), narratives then flip
  // white → shade, and every following section keeps alternating so two
  // adjacent sections never share the same background.
  let rhythmCursor = ind.sections?.length ?? 0;
  const showSubsGrid = !!ind.subIndustries && !ind.showcaseCoversSubIndustries;
  const subsBg = showSubsGrid
    ? rhythmCursor % 2 === 0
      ? "bg-white"
      : "bg-shade"
    : "";
  if (showSubsGrid) rhythmCursor += 1;
  const faqBg = ind.faq
    ? rhythmCursor % 2 === 0
      ? "bg-white"
      : "bg-shade"
    : "";
  if (ind.faq) rhythmCursor += 1;
  const exploreBg = rhythmCursor % 2 === 0 ? "bg-white" : "bg-shade";

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

      <div className="bg-white">
        {/* Hero heading */}
        {ind.heroHeading && (
          <section className="py-section-md">
            <div className="container-site">
              <Reveal className="max-w-4xl">
                <SectionHeading
                  title={ind.heroHeading}
                  lead={ind.intro}
                  className="max-w-4xl"
                />
              </Reveal>

              {ind.cta && (
                <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    {ind.cta.paragraphs?.map((p, i) => (
                      <p key={i} className="mt-4 text-[15px] leading-relaxed text-body">
                        {p}
                      </p>
                    ))}
                    {ind.cta.button && (
                      <Link
                        href="/contact"
                        className="btn-lift mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark"
                      >
                        {ind.cta.button}
                        <ArrowRight aria-hidden className="size-4" />
                      </Link>
                    )}
                  </div>
                  {ind.cta.image && (
                    <div className="relative">
                      {/* Editorial offset frame — flame thread behind the image */}
                      <span
                        aria-hidden
                        className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-flame/50"
                      />
                      <div className="relative overflow-hidden rounded-2xl shadow-float">
                        <Image
                          src={ind.cta.image}
                          alt={ind.title}
                          width={560}
                          height={360}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* Per-industry unique showcase — differentiates each industry */}
        <IndustryShowcase slug={ind.slug} />

        {/* Narrative sections */}
        {ind.sections?.map((sec, i) => (
          <section
            key={i}
            className={i % 2 === 0 ? "bg-white py-section-md" : "bg-shade py-section-md"}
          >
            <div className="container-site">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <SectionHeading
                    label={sec.label ? `[ ${sec.label} ]` : undefined}
                    title={sec.heading}
                  />
                  <div className="mt-5 space-y-4">
                    {sec.paragraphs?.map((p, j) => (
                      <p key={j} className="text-[15px] leading-relaxed text-body">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
                {sec.image && (
                  <Reveal className={i % 2 === 1 ? "lg:order-1" : undefined}>
                    <div className="overflow-hidden rounded-2xl shadow-float">
                      <Image
                        src={sec.image}
                        alt={sec.heading}
                        width={720}
                        height={560}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Sub-industries / services */}
        {ind.subIndustries && showSubsGrid && (
          <section className={`${subsBg} py-section-md`}>
            <div className="container-site">
              <Reveal>
                <SectionHeading
                  label="[ Services ]"
                  title={ind.subIndustries.heading}
                />
              </Reveal>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {ind.subIndustries.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      {item.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-base font-bold leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-body">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {ind.faq && (
          <section className={`${faqBg} py-section-md`}>
            <div className="container-site">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
                <div className="lg:sticky lg:top-32">
                  <Reveal>
                    <SectionHeading
                      label={ind.faq.label ? `[ ${ind.faq.label} ]` : undefined}
                      title={ind.faq.heading}
                    />
                    {ind.faq.image && (
                      <div className="mt-6 overflow-hidden rounded-2xl shadow-float">
                        <Image
                          src={ind.faq.image}
                          alt={ind.faq.heading}
                          width={560}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </Reveal>
                </div>
                <Reveal className="space-y-3">
                  {ind.faq.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-flame/40 hover:shadow-soft [&_summary]:cursor-pointer"
                    >
                      <summary className="flex min-h-[44px] items-start gap-4 text-base font-bold text-ink marker:content-none">
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
                          className="ml-auto size-4 shrink-0 text-brand transition-transform duration-300 ease-out-expo group-open:rotate-90"
                        />
                      </summary>
                      <p className="mt-3 pl-14 text-sm leading-relaxed text-body">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* Other industries */}
        <section className={`${exploreBg} py-section-md`}>
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
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries
                .filter((i) => i.slug !== ind.slug)
                .slice(0, 4)
                .map((i, idx) => {
                  const Icon = i.icon;
                  const index = industries.findIndex((x) => x.slug === i.slug);
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
                          <span
                            aria-hidden
                            className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-3xl font-bold leading-none text-transparent transition-all duration-500 ease-out-expo group-hover:from-flame group-hover:to-flame-soft"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
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
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                          Explore
                          <ArrowRight
                            aria-hidden
                            className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                          />
                        </span>
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
