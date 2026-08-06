"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
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
import { navItems, company } from "@/lib/site-data";
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
        <div className="mx-auto flex h-9 max-w-[1310px] items-center justify-between px-6 text-xs">
          <p className="max-w-xl truncate">
            When we go to the office every day, we carry on a time-honored
            tradition of getting to know our clients on a first-name basis.
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand-light" />
              {company.usaAddress}
            </span>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 text-brand-light" />
              {company.phone}
            </a>
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
            ? "border-line bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1310px] items-center justify-between px-6 py-3">
          <a href="#home" aria-label="Globantis Labs home" className="shrink-0">
            <Logo variant="light" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-brand"
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

                {item.children && openMenu === item.label && (
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
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden h-11 rounded-[5px] bg-brand px-5 text-sm font-medium text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 lg:inline-flex"
            >
              <Link href="#consultation">
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
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
                      className="h-11 w-full rounded-[5px] bg-brand text-sm font-medium text-white"
                    >
                      <Link href="#consultation" onClick={() => setOpen(false)}>
                        Let&apos;s Talk
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <div className="space-y-2 px-1 text-sm text-body">
                      <a
                        href={company.phoneHref}
                        className="flex items-center gap-2"
                      >
                        <Phone className="size-4 text-brand" />
                        {company.phone}
                      </a>
                      <a
                        href={company.emailHref}
                        className="flex items-center gap-2"
                      >
                        <Mail className="size-4 text-brand" />
                        {company.email}
                      </a>
                      <p className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                        {company.usaAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
