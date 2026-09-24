import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries | Globantis Labs",
  description:
    "From financial services and healthcare to education, logistics, cybersecurity, e-commerce and automation — Globantis Labs serves global industries with tailored IT solutions.",
  path: "/industries",
  keywords: [
    "industries we serve",
    "financial services IT solutions",
    "healthcare technology solutions",
    "logistics software development",
    "cybersecurity services",
    "e-commerce development company",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        label="Industries"
        image="/images/wp/2025-01/blog_new_03.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Industries we serve ]"
              title={
                <>
                  Tailored IT solutions for{" "}
                  <span className="text-flame">every industry</span> we serve.
                </>
              }
              lead="We work with clients across diverse verticals — understanding the regulatory, operational, and customer expectations unique to each. Explore the industries where we deliver measurable impact."
            />
          </Reveal>

          {/*
            Featured grid — first industry spans 2 cols on lg and gets a bigger
            visual treatment. All cards use the signature light card style:
            white card + border-line + 3px flame top bar on hover + cream icon
            tile + sharp number badge.
          */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const heroImg =
                ind.bannerImage ||
                ind.subIndustries?.items[0]?.image ||
                "/images/wp/2025-01/page-banner.jpg";
              const isFeatured = i === 0;
              return (
                <Reveal
                  key={ind.slug}
                  delay={Math.min(i * 0.07, 0.35)}
                  className={
                    isFeatured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : undefined
                  }
                >
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft hover:border-flame/40 hover:shadow-lift"
                  >
                    {/* Signature hover accent — 3px flame top bar */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />

                    {/* Image header */}
                    <div
                      className={`relative overflow-hidden ${
                        isFeatured ? "h-72 lg:h-[420px]" : "h-48"
                      }`}
                    >
                      <Image
                        src={heroImg}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />

                      {/* Sharp number badge — top-left */}
                      <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-none bg-white/95 text-lg font-bold text-ink shadow-soft backdrop-blur transition-all duration-500 ease-out-expo group-hover:bg-brand group-hover:text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Icon + title — bottom-left */}
                      <div className="absolute inset-x-5 bottom-5 flex items-end gap-3">
                        {Icon && (
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur transition-all duration-500 ease-out-expo group-hover:border-white/40 group-hover:bg-white/20">
                            <Icon className="size-5" />
                          </span>
                        )}
                        <h3
                          className={`font-bold leading-tight text-white ${
                            isFeatured ? "text-display-md" : "text-display-sm"
                          }`}
                        >
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6">
                      {ind.tagline && (
                        <p
                          className={`font-semibold text-ink ${
                            isFeatured ? "text-base lg:text-lg" : "text-sm"
                          }`}
                        >
                          {ind.tagline}
                        </p>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {ind.intro ??
                          ind.heroHeading ??
                          ind.sections?.[0]?.paragraphs?.[0] ??
                          "Learn how we help organizations in this industry modernize, scale, and secure their digital operations."}
                      </p>

                      {/* Focus area tags */}
                      {ind.focusAreas && ind.focusAreas.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {ind.focusAreas.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-line bg-shade px-3 py-1 text-xs font-medium text-ink/70 transition-colors duration-300 group-hover:border-flame/30 group-hover:bg-cream group-hover:text-brand"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Flexible spacer — pins the CTA to the card bottom so
                          cards in the same row share one aligned baseline */}
                      <span aria-hidden className="mt-auto" />

                      {/* CTA — bottom */}
                      <span className="mt-6 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                        Explore industry
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
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
    </>
  );
}
