import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageBanner } from "@/components/site/page-banner";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Globantis Labs",
  description:
    "Get in touch with Globantis Labs. Available office branches in Canada and India, and a team ready to help with your next IT project.",
  path: "/contact",
  keywords: [
    "contact Globantis Labs",
    "IT company office locations",
    "software development Canada",
    "IT services India",
    "get in touch",
  ],
});

const offices = [
  {
    country: "Canada",
    address: company.canadaAddress,
    image: "/images/wp/2024-10/usa.jpg",
    alt: "Canada office",
  },
  {
    country: "India",
    address: company.indiaAddress,
    image: "/images/wp/2026-01/RMZ-Millenia-Campus-4A_9726_20170916_001.avif",
    alt: "India office",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        label="[ Contact ]"
        crumbs={[{ label: "Contact" }]}
      />

      {/* Office branches */}
      <section className="bg-white py-section-md">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              label="[ Locations ]"
              title="Available Office Branches"
              lead="We work with clients across the USA, Canada, India, and the UAE. Reach the team closest to you or send us a message below."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {offices.map((o, i) => (
              <Reveal
                key={o.country}
                delay={Math.min(i * 0.07, 0.35)}
                className="h-full"
              >
                <div className="group card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white hover:border-flame/40 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                      <MapPin className="size-4 text-brand-light" aria-hidden />
                      <span className="text-lg font-bold">{o.country}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start p-6">
                    <p className="text-sm leading-relaxed text-body">{o.address}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-6">
            <Reveal delay={0.07} className="h-full">
              <a
                href={company.emailHref}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-shade p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-flame/40 hover:bg-white hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand transition-colors duration-300 ease-out-expo group-hover:bg-brand group-hover:text-white">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                    Email
                  </p>
                  <p className="truncate text-sm font-medium text-ink">{company.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-shade p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-cream text-brand">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                    Hours
                  </p>
                  <p className="text-sm font-medium text-ink">24/7 Global Support</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-shade py-section-md">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
              {/* Offset flame frame — editorial depth */}
              <span
                aria-hidden
                className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-flame/40"
              />
              <Image
                src="/images/wp/2025-02/contact-zman.png"
                alt="Contact Globantis Labs"
                width={720}
                height={720}
                className="relative w-full rounded-2xl object-cover shadow-float"
              />
            </Reveal>
            <Reveal delay={0.07}>
              <SectionHeading
                label="[ Any Query ]"
                title="Let's Contact With Us"
                lead="Send us a message and our team will get back to you within one business day. Fields marked with * are required."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
