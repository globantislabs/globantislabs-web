import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Services | Globantis Labs",
  description:
    "Explore our full range of IT services — custom software, web, mobile, UI/UX, AI, DevOps, CMS and IT support.",
  path: "/services",
  keywords: [
    "IT services",
    "custom software development",
    "web development services",
    "mobile app development",
    "DevOps consulting",
    "AI and machine learning solutions",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        label="[ Services ]"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-shade py-section-lg">
        <div className="container-site">
          {/* Asymmetric editorial header — headline left, lead offset right */}
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <SectionHeading
                label="[ What we do ]"
                title={
                  <>
                    Years of Delivering{" "}
                    <span className="text-flame">Custom IT Solutions</span>{" "}
                    Services.
                  </>
                }
              />
              <p className="max-w-md shrink-0 text-[17px] leading-relaxed text-body lg:pb-2">
                From custom software to AI, cloud and DevOps — we engineer
                scalable, secure solutions that move global businesses forward.
                Explore each capability below to see how we deliver.
              </p>
            </div>
          </Reveal>

          {/* Services grid — 9 cards, clean 3-col rhythm, equal-height rows */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  key={s.slug}
                  className="h-full"
                  delay={Math.min(i * 0.07, 0.35)}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift lg:p-8"
                  >
                    {/* soft cream glow in top-right corner — appears on hover */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-flame/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    {/* top accent bar — slides in on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />

                    {/* Header row: icon brick + stylized number */}
                    <div className="relative flex items-start justify-between">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-6" aria-hidden />
                      </div>
                      <span
                        aria-hidden
                        className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-5xl font-bold leading-none text-transparent transition-[background-image] duration-500 group-hover:from-flame group-hover:to-flame-soft"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title + description */}
                    <h3 className="relative mt-6 text-display-md font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-body">
                      {s.desc}
                    </p>

                    {/* Tech logos — clean row, full color */}
                    <div className="relative mt-7">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                        {s.techs.map((t) => (
                          <Image
                            key={t.name}
                            src={t.img}
                            alt={t.name}
                            width={75}
                            height={50}
                            className="h-7 w-auto object-contain opacity-70 transition-transform duration-300 ease-out-quart hover:scale-110 hover:opacity-100 sm:h-8 lg:h-9"
                            title={t.name}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Learn more — pinned to the card bottom so every card in a row aligns */}
                    <div className="relative mt-auto border-t border-line pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-flame">
                        Learn more
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-1"
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
