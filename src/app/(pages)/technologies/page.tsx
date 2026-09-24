import Image from "next/image";
import { PageBanner } from "@/components/site/page-banner";
import { CTABand, Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { technologiesGrid } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Technologies | Globantis Labs",
  description:
    "The technologies, frameworks, and platforms we use to build modern, scalable, and secure digital solutions.",
  path: "/technologies",
  keywords: [
    "technology stack",
    "React Angular Vue development",
    "AWS Azure cloud platforms",
    "AI machine learning tools",
    "DevOps toolchain",
  ],
});

export default function TechnologiesPage() {
  return (
    <>
      <PageBanner
        title="Technologies"
        label="[ Our technologies ]"
        crumbs={[{ label: "Technologies" }]}
      />

      <section className="relative overflow-hidden bg-white py-section-md">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-pattern-dark"
        />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              label="[ Technologies ]"
              title="What Technologies We Use"
              lead="We choose the right tool for the job — from proven enterprise frameworks to emerging platforms. Here are some of the technologies our teams work with every day."
            />
          </Reveal>

          {/* Varied tile wall — cream accent tiles punctuate the white logo wall */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {technologiesGrid.map((t, i) => {
              const isAccent = i % 5 === 0;
              return (
                <Reveal
                  key={t.name}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div
                    className={`group card-lift relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border p-8 hover:border-flame/40 hover:shadow-lift ${
                      isAccent ? "border-flame/25 bg-cream" : "border-line bg-white"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex h-16 w-full items-center justify-center">
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={120}
                        height={80}
                        className={`max-h-16 w-auto object-contain transition-all duration-300 ease-out-expo group-hover:scale-110 group-hover:opacity-100 ${
                          isAccent
                            ? "opacity-100"
                            : "opacity-70 grayscale group-hover:grayscale-0"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-sm font-semibold ${
                        isAccent ? "text-brand" : "text-ink"
                      }`}
                    >
                      {t.name}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        className="bg-shade"
        title={"Let's build the future together."}
        desc="Reach out and discover how Globantis Labs can engineer your next big thing."
        ctaHref="/contact"
        ctaLabel="Get in touch"
      />
    </>
  );
}
