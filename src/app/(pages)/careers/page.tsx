import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { jobOpenings, careersBenefits, company } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Careers"
        title="Engineering, on purpose."
        description="Globantis Labs hires senior engineers, designers and delivery leads who treat software as a craft. We're a small, deliberate firm — and we publish exactly what we work on, how we pay and how we promote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Benefits */}
      <Section className="border-b border-hairline">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why engineers join"
              title="Built for engineers, not headcount."
              description="We hire slowly, promote from within and ship work that matters. If any of the four below matters to you, you'll probably like it here."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {careersBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col gap-2 bg-background p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-display text-base font-semibold text-foreground">
                      {b.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Open roles */}
      <Section className="border-b border-hairline bg-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Open roles"
              title="Currently hiring."
              description="If a role fits, apply. If it doesn't, send a note anyway — we keep an internal pipeline of senior engineers we'd hire when the right engagement lands."
            />
          </Reveal>

          <ul className="mt-12 divide-y divide-hairline rounded-md border border-hairline bg-background">
            {jobOpenings.map((job) => (
              <Reveal key={job.id}>
                <li className="grid grid-cols-1 gap-4 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                  <span className="font-mono text-sm text-brand">{job.id}</span>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {job.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {job.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>Apply by {job.deadline}</span>
                    </div>
                  </div>
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brand shrink-0"
                  >
                    Apply
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 rounded-md border border-hairline bg-background p-6">
            <p className="micro-label mb-2">Don't see your role?</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We're always interested in senior engineers and designers who
              care about craft. Email{" "}
              <a
                href={`mailto:${company.careersEmail}`}
                className="font-medium text-foreground hover:text-brand"
              >
                {company.careersEmail}
              </a>{" "}
              with a short note and a link to your work.
            </p>
          </div>
        </Container>
      </Section>

      <CTAStrip
        heading="Want to know more before applying?"
        body="Read how we run projects, scan the technology we use, and meet the team through the work we ship."
        buttonLabel="See the work process"
        href="/work-process"
      />
    </PageShell>
  );
}
