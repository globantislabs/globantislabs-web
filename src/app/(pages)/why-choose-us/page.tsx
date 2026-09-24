import { ShieldCheck, Headset, Globe2 } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { whyChooseTop, whyChooseGrid } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Why Choose Us | Globantis Labs",
  description:
    "Trusted & reliable, 24/7 customer support, global client experience. Six more reasons organizations partner with Globantis Labs.",
  path: "/why-choose-us",
  keywords: [
    "why choose Globantis Labs",
    "trusted IT partner",
    "24/7 customer support",
    "global software services",
    "reliable software development company",
  ],
});

const topIcons = [ShieldCheck, Headset, Globe2];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageBanner
        title="Why Choose Us"
        label="[ Why Choose Us ]"
        crumbs={[{ label: "Why Choose Us" }]}
      />

      {/* Top three differentiators */}
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
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {whyChooseTop.map((item, i) => {
              const Icon = topIcons[i] ?? ShieldCheck;
              return (
                <Reveal key={item.title} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-14 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <Icon aria-hidden className="size-6" />
                    </div>
                    <h3 className="mt-5 text-display-md font-bold text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-body">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Six more differentiators */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why Choose Us ]"
              title={
                <>
                  Years of Delivering{" "}
                  <span className="text-flame">Custom IT Solutions</span> Services.
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseGrid.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-flame/12 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="bg-gradient-to-br from-ink/15 to-ink/[0.04] bg-clip-text text-5xl font-bold leading-none text-transparent transition-all duration-500 group-hover:from-flame group-hover:to-flame-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-5 text-display-sm font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-body">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to work with a partner who delivers?"
        desc="Let's talk about your project and how we can help you ship it."
        ctaHref="/contact"
        ctaLabel="Get in touch"
        tone="ink"
        className="bg-white"
      />
    </>
  );
}
