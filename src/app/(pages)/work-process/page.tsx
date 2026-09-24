"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { workProcessSteps } from "@/lib/site-data";

/**
 * Work Process — a GENUINE sequence (01 → 07), so numbered markers
 * are appropriate here. This is one of the few pages where they appear.
 */
export default function WorkProcessPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Work process"
        title="Seven stages, one engineering loop."
        description="From discovery to continuous improvement — every stage produces a tangible artifact, a client-facing review, and a documented hand-off. No black boxes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Work Process" }]}
      />

      <Section className="border-b border-hairline">
        <Container size="narrow">
          <Reveal>
            <SectionHeading
              eyebrow="The delivery loop"
              title="How a Globantis engagement actually runs."
              description="Each step below is owned by a named lead, has a documented exit criterion, and is reviewed with you before we move on. If a stage feels rushed, that's a bug — not a feature."
            />
          </Reveal>

          <ol className="mt-14 space-y-0">
            {workProcessSteps.map((step, i) => {
              const isLast = i === workProcessSteps.length - 1;
              return (
                <Reveal key={step.title} delay={Math.min(i * 0.04, 0.2)}>
                  <li className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 md:grid-cols-[8rem_1fr] md:gap-8">
                    {/* Numbered marker + connector */}
                    <div className="relative flex flex-col items-start">
                      <span className="font-mono text-2xl text-brand md:text-3xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {!isLast && (
                        <span className="mt-2 hidden h-[calc(100%-2rem)] w-px bg-hairline md:block" />
                      )}
                    </div>

                    {/* Body */}
                    <div className="pb-4">
                      <p className="font-display text-lg font-semibold text-foreground md:text-xl">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      <CTAStrip
        heading="See it applied to a real engagement."
        body="We're happy to walk you through a recent delivery — what we shipped, what we cut, and what we'd do differently next time."
        buttonLabel="Start a project"
        href="/contact"
      />
    </PageShell>
  );
}
