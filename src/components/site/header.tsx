"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { navItems, company, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="mx-auto container-site flex h-9 items-center justify-between px-6 text-xs">
          <p className="max-w-xl truncate">
            When we go to the office every day, we carry on a time-honored
            tradition of getting to know our clients on a first-name basis.
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand-light" />
              {company.canadaAddress}
            </span>
            <a
              href={company.emailHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 text-brand-light" />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-white"
        )}
      >
        <div className="mx-auto container-site flex h-20 items-center justify-between gap-6 px-6 py-3">
          <Link href="/" aria-label="Globantis Labs home" className="shrink-0">
            <Logo variant="light" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isServices = item.label === "Services";
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="relative inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium text-ink/80 transition-colors after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-flame after:to-flame-soft after:transition-transform after:duration-300 after:ease-out-expo hover:text-brand hover:after:scale-x-100"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {isServices ? (
                    /* ===== Services mega menu ===== */
                    openMenu === item.label ? (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                        <div className="w-[860px] overflow-hidden rounded-2xl border border-line bg-white shadow-float">
                          {/* Header strip */}
                          <div className="flex items-center justify-between gap-6 border-b border-line bg-shade px-6 py-4">
                            <div>
                              <span className="section-label !mb-1">
                                [ Our Services ]
                              </span>
                              <p className="text-xs leading-relaxed text-body">
                                End-to-end engineering — from custom software to
                                AI, cloud &amp; DevOps.
                              </p>
                            </div>
                            <Link
                              href="/services"
                              onClick={() => setOpenMenu(null)}
                              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-all hover:border-brand hover:text-brand"
                            >
                              View all services
                              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>

                          {/* Services grid — 3 columns × 3 rows */}
                          <div className="grid grid-cols-3 gap-1 p-3">
                            {services.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setOpenMenu(null)}
                                  className="group relative flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-brand/5"
                                >
                                  <span className="absolute inset-x-3 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-light transition-transform duration-300 group-hover:scale-x-100" />
                                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                                    <Icon className="size-5" />
                                  </span>
                                  <div>
                                    <h4 className="text-sm font-bold leading-snug text-ink">
                                      {s.shortTitle}
                                    </h4>
                                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-body">
                                      {s.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Bottom CTA strip */}
                          <div className="ink-gradient flex items-center justify-between gap-4 px-6 py-4 text-white">
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                                <Sparkles className="size-4 text-brand-light" />
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-bold">
                                  Not sure where to start?
                                </p>
                                <p className="truncate text-xs text-white/60">
                                  Book a free consultation — we&apos;ll map the
                                  right path for you.
                                </p>
                              </div>
                            </div>
                            <Button
                              asChild
                              className="btn-lift h-9 shrink-0 rounded-full bg-brand px-4 text-xs font-semibold text-white shadow-lg shadow-brand/20 hover:bg-brand-dark"
                            >
                              <Link
                                href="/contact"
                                onClick={() => setOpenMenu(null)}
                              >
                                Book consultation
                                <ArrowRight className="size-3.5" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : null
                  ) : (
                    /* ===== Standard dropdown (About / Industries / Product) ===== */
                    item.children && openMenu === item.label ? (
                      <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                        <div className="overflow-hidden rounded-xl border border-line bg-white p-2 shadow-xl shadow-ink/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 transition-colors hover:bg-brand/5"
                              onClick={() => setOpenMenu(null)}
                            >
                              <span className="block text-sm font-medium text-ink">
                                {child.label}
                              </span>
                              {child.desc && (
                                <span className="block text-xs text-body">
                                  {child.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="btn-lift hidden h-11 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark lg:inline-flex"
            >
              <Link href="#consultation">
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            {/* Mobile theme toggle + menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                  >
                    <Menu className="size-6 text-ink" />
                  </Button>
                </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] max-w-sm overflow-y-auto bg-white p-0 slim-scroll"
              >
                <SheetHeader className="border-b border-line px-6 py-5 text-left">
                  <SheetTitle className="text-left">
                    <Logo variant="light" />
                  </SheetTitle>
                </SheetHeader>
                <div className="px-4 py-4">
                  <Accordion type="multiple" className="w-full">
                    {navItems.map((item) => (
                      <div key={item.label}>
                        {item.children ? (
                          <AccordionItem
                            value={item.label}
                            className="border-b-0"
                          >
                            <AccordionTrigger className="px-2 py-3 text-base font-medium text-ink hover:no-underline">
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent className="pb-2">
                              <div className="flex flex-col gap-0.5 pl-2">
                                <Link
                                  href={item.href}
                                  className="rounded-md px-3 py-2 text-sm font-medium text-brand"
                                  onClick={() => setOpen(false)}
                                >
                                  Overview
                                </Link>
                                {item.children.map((c) => (
                                  <Link
                                    key={c.label}
                                    href={c.href}
                                    className="rounded-md px-3 py-2 text-sm text-body hover:bg-brand/5 hover:text-brand"
                                    onClick={() => setOpen(false)}
                                  >
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <Link
                            href={item.href}
                            className="block rounded-md px-2 py-3 text-base font-medium text-ink hover:text-brand"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </Accordion>

                  <div className="mt-4 space-y-3 border-t border-line pt-4">
                    <Button
                      asChild
                      className="btn-lift h-11 w-full rounded-full bg-brand text-sm font-semibold text-white shadow-glow-flame"
                    >
                      <Link href="#consultation" onClick={() => setOpen(false)}>
                        Let&apos;s Talk
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <div className="space-y-2 px-1 text-sm text-body">
                      <a
                        href={company.emailHref}
                        className="flex items-center gap-2"
                      >
                        <Mail className="size-4 text-brand" />
                        {company.email}
                      </a>
                      <p className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                        {company.canadaAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
