"use client";

import { motion } from "framer-motion";
import { aboutValues, aboutTabs, company } from "@/lib/site-data";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading, Stat } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { WhoWeAreTabs } from "@/components/site/sections/who-we-are-tabs";

export default function AboutPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="About us"
        title="Engineering software with intent, globally."
        description="Globantis Labs is a global software engineering firm helping organizations design, build and operate secure, scalable digital systems. From custom software to AI, cloud and DevOps, we ship measurable value across every engagement."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission / Vision / History */}
      <Section className="border-b border-hairline">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Our compass"
                  title="Mission, vision and how we got here."
                  description="The principles that drive every engineering decision we make — and the path that brought us to where we are today."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <WhoWeAreTabs tabs={aboutTabs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="border-b border-hairline bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="By the numbers"
              title="A track record clients can rely on."
              description="Engineering outcomes, not vanity metrics. Every number below is auditable inside our delivery dashboard."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 border-y border-hairline py-10 md:grid-cols-4">
            {[
              { value: "15+", label: "Years of experience" },
              { value: "250+", label: "Projects delivered" },
              { value: "40+", label: "Global clients" },
              { value: "30+", label: "Tech experts" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <Stat value={s.value} label={s.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-b border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Living our values"
              title="What every Globantis engineer signs up for."
              description="Our values are not posters on a wall. They shape hiring, promotion and how we resolve the difficult trade-offs that every complex project surfaces."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-2 bg-background p-6">
                  <span className="step-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-base font-semibold text-foreground">
                    {v.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section className="border-b border-hairline bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Three delivery centres, one engineering culture."
              description="We deliver from the United States, Canada and India — following-the-sun coverage for time-sensitive projects and the local domain expertise each market demands."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-3">
            {company.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <div className="bg-background p-6">
                  <p className="micro-label mb-2">{o.country}</p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {o.city}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {o.address}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTAStrip
        heading="Want to see how we work?"
        body="Read our delivery process, scan the technologies we use, or just reach out — we'll walk you through a real engagement."
        buttonLabel="Read our work process"
        href="/work-process"
      />
    </PageShell>
  );
}
