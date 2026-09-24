import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries",
  description:
    "Domain expertise that ships — financial services, healthcare, education, automation, logistics, cybersecurity and e-commerce.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Industries"
        title="Domain expertise that ships."
        description="We don't write generic software. Our teams invest in the language, regulation and operations of the industries we serve — so the first commit already understands the field."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <Section className="border-b border-hairline">
        <Container>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">
                        {ind.title}
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {ind.tagline}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {ind.focusAreas.map((a) => (
                          <span
                            key={a}
                            className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden items-center gap-2 text-sm font-medium text-brand md:flex">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CTAStrip
        heading="Don't see your industry?"
        body="We work across many more — from manufacturing to media to public sector. Tell us what you operate and we'll match you with engineers who've shipped in the same field."
        buttonLabel="Start a project"
        href="/contact"
      />
    </PageShell>
  );
}
