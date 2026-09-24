import Link from "next/link";
import { LogoMark } from "./logo";
import {
  company,
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/lib/site-data";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-hairline py-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="micro-label mb-3">Let's build together</p>
            <h2 className="display text-2xl text-foreground md:text-3xl">
              Engineering your next software system.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {company.description}
            </p>
          </div>
          <Link href="/contact" className="btn-brand">
            Start a project
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <LogoMark size={28} />
              <span className="font-display text-base font-semibold text-foreground">
                {company.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink href={company.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={company.social.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={company.social.x} label="X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Company" links={footerCompanyLinks} />
          <FooterColumn title="Services" links={footerServiceLinks} />
          <FooterColumn title="Industries" links={footerIndustryLinks} />
        </div>

        {/* Offices */}
        <div className="grid grid-cols-1 gap-6 border-t border-hairline py-8 sm:grid-cols-3">
          {company.offices.map((office) => (
            <div key={office.city}>
              <div className="micro-label">{office.country}</div>
              <p className="mt-2 text-sm font-medium text-foreground">
                {office.city}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-hairline py-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={company.emailHref}
              className="inline-flex items-center gap-2 text-foreground hover:text-brand"
            >
              <Mail className="h-4 w-4 text-brand" />
              {company.email}
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 text-foreground hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" />
              {company.phone}
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" />
              US · CA · IN
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="micro-label mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}
