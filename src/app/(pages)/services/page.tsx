import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner, CTAStrip } from "@/components/site/page-banner";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Software, web, AI, UI/UX, CMS, DevOps and IT support — seven services, one engineering culture.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Services"
        title="Seven services. One engineering culture."
        description="Each capability is staffed by senior engineers and shipped with the same rigor — code review, automated testing, security review and observability built in from day one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section className="border-b border-hairline">
        <Container>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
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
                        {s.title}
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {s.tagline}. {s.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {s.techs.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {t}
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
        heading="Not sure which service fits?"
        body="Most engagements span more than one. Book a free 30-minute call and we'll help you scope the right first milestone."
        buttonLabel="Book a consultation"
        href="/appointment"
      />
    </PageShell>
  );
}
