import Link from "next/link";
import { ArrowUpRight, Clock, Globe2, GraduationCap, HeartPulse, Laptop } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { CTABand, Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { jobOpenings } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Careers | Globantis Labs",
  description:
    "Join the Globantis Labs team. We're hiring passionate engineers, designers, and AI specialists who want to build impactful digital solutions.",
  path: "/careers",
  keywords: [
    "tech careers",
    "remote software jobs",
    "AI developer internship",
    "software engineer jobs Chennai",
    "join Globantis Labs",
  ],
});

const perks = [
  {
    title: "Remote-First",
    desc: "Work from anywhere. We hire across time zones and trust our teams to do their best work.",
  },
  {
    title: "Learning Budget",
    desc: "Annual stipend for courses, conferences, and certifications to keep your skills sharp.",
  },
  {
    title: "Global Clients",
    desc: "Ship software for international brands across the USA, Canada, UAE, and beyond.",
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive health cover, mental wellness support, and flexible PTO.",
  },
];

const perkIcons = [Laptop, GraduationCap, Globe2, HeartPulse];

export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="Join Our Team"
        label="[ Careers ]"
        crumbs={[{ label: "Careers" }]}
      />

      {/* Job openings */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Job Circular ]"
              title="Ready to Join Our Team"
              lead="We're always looking for talented, curious people who want to build meaningful technology. Explore our open roles below."
            />
          </Reveal>

          <div className="mt-14 space-y-4">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.id} delay={Math.min(i * 0.07, 0.35)} className="h-full">
                <Link
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group card-lift relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift sm:flex-row sm:items-center sm:gap-7 sm:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  {/* Editorial oversized numeral — sharp corners + flame rule */}
                  <div className="flex w-16 shrink-0 flex-col items-start gap-3 sm:w-20">
                    <span className="rounded-sm bg-cream px-3 py-1.5 text-display-md font-bold leading-none text-brand">
                      {job.id}
                    </span>
                    <span aria-hidden className="rule-flame" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-display-sm font-bold text-ink">{job.title}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-body">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-brand" />
                        {job.meta}
                      </span>
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
                      {job.desc}
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-flame">
                    <ArrowUpRight className="size-5" aria-hidden />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Why Globantis ]"
              title="Why build your career here?"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => {
              const Icon = perkIcons[i] ?? Laptop;
              return (
                <Reveal
                  key={p.title}
                  delay={Math.min(i * 0.07, 0.35)}
                  className="h-full"
                >
                  <div className="group card-lift relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 hover:border-flame/40 hover:shadow-lift">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                    />
                    <div className="flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-500 ease-out-expo group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title={"Don't see your role?"}
        desc="Send us your resume and tell us how you'd make an impact. We're always open to exceptional people."
        ctaHref="/contact"
        ctaLabel="Get in touch"
      />
    </>
  );
}
