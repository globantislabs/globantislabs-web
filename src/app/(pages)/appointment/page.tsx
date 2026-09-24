import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Book an Appointment | Globantis Labs",
  description:
    "Book a free consultation with Globantis Labs. Tell us about your project and we'll get back to you within one business day.",
  path: "/appointment",
  keywords: [
    "book an appointment",
    "free IT consultation",
    "schedule a meeting",
    "project consultation",
    "software development quote",
  ],
});

export default function AppointmentPage() {
  return (
    <>
      <PageBanner
        title="Appointment"
        label="[ Appointment ]"
        image="/images/wp/2025-01/call.jpg"
        crumbs={[{ label: "Appointment" }]}
      />

      <section className="bg-white py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                label="[ Appointment ]"
                title="Make An Appointment"
                lead="Tell us about your project, your goals, and your timeline. We'll match you with the right specialist and schedule a free consultation at a time that works for you."
              />

              <div className="mt-8 space-y-4">
                <a
                  href={company.phoneHref}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-shade p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-flame/40 hover:bg-white hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-300 ease-out-expo group-hover:bg-brand group-hover:text-white">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                      Call us
                    </p>
                    <p className="truncate text-sm font-medium text-ink">{company.phone}</p>
                  </div>
                </a>
                <a
                  href={company.emailHref}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-shade p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-flame/40 hover:bg-white hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-300 ease-out-expo group-hover:bg-brand group-hover:text-white">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                      Email us
                    </p>
                    <p className="truncate text-sm font-medium text-ink">{company.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-line bg-shade p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                      Response time
                    </p>
                    <p className="text-sm font-medium text-ink">Within 1 business day</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-shade p-6 shadow-lift sm:p-8">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-flame to-brand"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-flame/10 blur-3xl"
                />
                <div className="relative">
                  <h3 className="text-display-sm font-bold text-ink">Request your slot</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Fill in the form and we&apos;ll reach out to confirm your appointment.
                  </p>
                  <div className="mt-6">
                    <ContactForm compact />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
