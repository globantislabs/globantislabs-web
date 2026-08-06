"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Github,
  Send,
} from "lucide-react";
import { Logo } from "./logo";
import {
  company,
  footerCompany,
  footerIndustries,
  services,
} from "@/lib/site-data";

const servicesLinks = services.slice(0, 6).map((s) => ({
  label: s.title,
  href: "#services",
}));

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-auto overflow-hidden bg-ink text-white"
    >
      {/* CTA banner */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto flex max-w-[1310px] flex-col items-start gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Have Any Projects In Your Mind ?
            </h2>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              AI, automation, and emerging technologies are converging to
              transform how organizations operate, compete, and scale.
            </p>
          </div>
          <Link
            href="#consultation"
            className="inline-flex h-12 items-center gap-2 rounded-[5px] bg-brand px-6 text-sm font-medium text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/50"
          >
            Let&apos;s Discuss Your Project
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1310px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Provide world-wide survival strategies to ensure proactive
              domination — fueling digital transformation with expert solutions.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-brand-light"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="size-4 text-brand-light" />
                </span>
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-brand-light"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="size-4 text-brand-light" />
                </span>
                {company.email}
              </a>
              <p className="flex items-start gap-3 text-white/70">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="size-4 text-brand-light" />
                </span>
                <span className="leading-relaxed">
                  {company.canadaAddress}
                  <br />
                  <span className="text-white/45">{company.usaAddress}</span>
                </span>
              </p>
            </div>
          </div>

          {/* Company */}
          <FooterCol title="Company" links={footerCompany} />
          {/* Services */}
          <FooterCol title="Services" links={servicesLinks} />
          {/* Industries */}
          <FooterCol title="Industries" links={footerIndustries} />
        </div>

        {/* Newsletter + socials */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white">
              Subscribe Newsletter
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 focus-within:border-brand/50"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-9 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand px-4 text-xs font-medium text-white transition-colors hover:bg-brand-dark"
              >
                <Send className="size-3.5" />
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <span className="text-xs font-medium text-white/50">
              Social Share:
            </span>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-brand/50 hover:bg-brand hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1310px] flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row">
          <p>
            Copyright © {company.founded}. Designed by{" "}
            <span className="font-semibold text-white/70">Globantis Labs</span>.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-brand-light"
            >
              <span className="h-px w-0 bg-brand-light transition-all duration-300 group-hover:w-3" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
