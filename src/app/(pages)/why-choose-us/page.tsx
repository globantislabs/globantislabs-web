import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { whyChooseTop, whyChooseGrid } from "@/lib/site-data";

export default function WhyChooseUsPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Why choose us"
        title="Reliability you can audit."
        description="We earn trust the long way — through transparent reporting, predictable delivery and a security-first engineering culture. Here is what that looks like in practice."
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
      />

      {/* Top three reasons */}
      <Section className="border-b border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Three reasons clients stay"
              title="Trust, support and global experience."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-3">
            {whyChooseTop.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-2 bg-background p-8">
                  <span className="step-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {r.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full grid */}
      <Section className="border-b border-hairline bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The full picture"
              title="Six engineering disciplines we don't compromise on."
              description="From how we hire to how we ship, every discipline below is observable inside our delivery dashboard — clients see the same numbers we do."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseGrid.map((g, i) => (
              <Reveal key={g.title} delay={Math.min(i * 0.05, 0.2)}>
                <div className="flex h-full flex-col gap-2 bg-background p-6">
                  <span className="step-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-base font-semibold text-foreground">
                    {g.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {g.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTAStrip
        heading="See the work process behind these promises."
        body="Every promise above maps to a concrete stage in our delivery process. Read how we operate — then judge us against it."
        buttonLabel="Read the work process"
        href="/work-process"
      />
    </PageShell>
  );
}
