import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import {
  aboutTabs,
  aboutValues,
  valueTags,
  stats,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About Us | Globantis Labs",
  description:
    "Globantis Labs is a global software development company delivering high-quality, scalable, and secure digital solutions for clients across the USA, Canada, UAE, and other international markets.",
  path: "/about",
  keywords: [
    "about Globantis Labs",
    "global software development company",
    "custom software development",
    "IT consulting company",
    "digital transformation services",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        label="[ About company ]"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Intro */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ About company ]"
                title={
                  <>
                    Building The Future With{" "}
                    <span className="text-flame">Cutting-Edge IT Solutions</span>
                  </>
                }
                lead="Globantis Labs is a global software development company focused on delivering high-quality, scalable, and secure digital solutions for clients across the USA, Canada, UAE, and other international markets. Founded with a strong global vision, we help businesses leverage technology to drive growth, efficiency, and innovation in a competitive digital landscape."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                We specialize in custom software development, web and mobile
                applications, cloud-based systems, AI-driven solutions, and enterprise
                platforms tailored to meet international business standards. Our
                solutions are designed with a deep understanding of global compliance,
                performance expectations, security requirements, and cross-border
                scalability.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -right-5 -top-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2025-01/about.jpg"
                  alt="Globantis Labs team at work"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-xl border-4 border-white shadow-lift sm:block">
                <Image
                  src="/images/wp/2025-01/about-1.jpg"
                  alt="About Globantis"
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Stats — editorial band, sharp tiles + flame rules */}
          <div className="mt-14 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                <div className="h-full rounded-none border border-line bg-shade p-5 sm:p-6">
                  <div aria-hidden className="rule-flame" />
                  <div className="mt-4 text-3xl font-bold leading-none text-ink sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs leading-tight text-body sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Values tag row */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {valueTags.map((t, i) => (
              <Reveal key={t} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                <div className="flex h-full items-center gap-2 rounded-full border border-line bg-shade px-4 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-flame/40">
                  <CheckCircle2 aria-hidden className="size-4 shrink-0 text-brand" />
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / History tabs */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal className="relative">
              <div
                aria-hidden
                className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-2xl border border-line bg-cream lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/wp/2026-01/about-office-e1767452844756.jpg"
                  alt="Globantis Labs office"
                  width={720}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  label="[ Our Story ]"
                  title="Mission, Vision & History"
                  lead="We are committed to delivering measurable value for our clients by building secure, high-impact solutions and consistently exceeding expectations."
                />
              </Reveal>

              <div className="mt-8 space-y-3">
                {aboutTabs.map((tab, i) => (
                  <Reveal key={tab.key} delay={Math.min(i * 0.07, 0.35)}>
                    <details className="group card-lift rounded-2xl border border-line bg-white p-5 hover:border-flame/40 open:border-flame/40 open:shadow-lift [&_summary]:cursor-pointer">
                      <summary className="flex items-center justify-between text-base font-bold text-ink marker:content-none">
                        {tab.label}
                        <ArrowRight
                          aria-hidden
                          className="size-4 shrink-0 text-brand transition-transform duration-300 ease-out-expo group-open:rotate-45"
                        />
                      </summary>
                      <p className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-body">
                        {tab.body}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Our Values */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why Choose Us ]"
              title={
                <>
                  Globantis Labs – Your{" "}
                  <span className="text-flame">Global Technology Partner</span> for the Future.
                </>
              }
              lead="Living Our Values"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <Reveal key={v.title} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-lg font-bold text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-display-sm font-bold text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Image
              src="/images/wp/2025-01/why_choose01.jpg"
              alt="Why choose Globantis Labs"
              width={1200}
              height={500}
              className="w-full rounded-2xl object-cover shadow-float"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Let's build the future together."
        desc="Reach out and discover how Globantis Labs can engineer your next big thing."
        ctaHref="/contact"
        ctaLabel="Get in touch"
        tone="ink"
        className="bg-shade"
      />
    </>
  );
}
