import { PageBanner } from "@/components/site/page-banner";
import { Reveal, SectionHeading, CTABand } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { workProcessSteps } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Work Process | Globantis Labs",
  description:
    "Our seven-step work process — from discovery and planning to deployment and continuous improvement.",
  path: "/work-process",
  keywords: [
    "software development process",
    "development lifecycle",
    "agile project delivery",
    "discovery to deployment",
    "transparent development process",
  ],
});

export default function WorkProcessPage() {
  const lastStep = workProcessSteps.length - 1;

  return (
    <>
      <PageBanner
        title="How We Work"
        label="[ Work Process ]"
        crumbs={[{ label: "Work Process" }]}
      />

      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Work Process ]"
              title="The Work Process of Our Technology Firm"
              lead="At Globantis Labs, our work process is designed to ensure transparency, efficiency, and consistent delivery for our global clients."
            />
          </Reveal>

          {/* Process steps — card grid, final step spans full width */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {workProcessSteps.map((step, i) => {
              const isLast = i === lastStep;
              return (
                <Reveal
                  key={step.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className={`h-full ${isLast ? "lg:col-span-2" : ""}`}
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-flame/12 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {isLast ? (
                      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-none bg-brand text-lg font-bold text-white shadow-glow-flame transition-colors duration-300 group-hover:bg-brand-dark">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="text-display-md font-bold text-ink">{step.title}</h3>
                          <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-body">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="relative flex size-14 items-center justify-center rounded-none bg-ink text-lg font-bold text-white transition-colors duration-300 group-hover:bg-brand">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="relative mt-5 text-display-md font-bold text-ink">
                          {step.title}
                        </h3>
                        <p className="relative mt-2.5 text-sm leading-relaxed text-body">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Predictable, transparent, on-time."
        desc="Every step is documented, every milestone is shared, and every delivery is reviewed with you — so there are no surprises, only outcomes."
        ctaHref="/contact"
        ctaLabel="Get in touch"
        tone="ink"
        className="bg-shade"
      />
    </>
  );
}
