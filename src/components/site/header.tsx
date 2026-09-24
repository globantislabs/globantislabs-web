"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
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
import { ThemeToggle } from "./theme-toggle";
import { MegaMenu } from "./mega-menu";
import { navItems, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mega-menu on click outside (touch / click-away)
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      // Close if click happens outside the nav area
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMenu]);

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
          <nav
            ref={navRef}
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  // HOVER trigger — opens on enter, closes on leave (desktop)
                  onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                  onMouseLeave={() => hasChildren && setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={hasChildren}
                    aria-expanded={isOpen}
                    // CLICK trigger — toggles for keyboard/touch (hover handles desktop)
                    onClick={(e) => {
                      if (hasChildren) {
                        e.preventDefault();
                        setOpenMenu(isOpen ? null : item.label);
                      }
                    }}
                    className="relative inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium text-ink/80 transition-colors after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-flame after:to-flame-soft after:transition-transform after:duration-300 after:ease-out-expo hover:text-brand hover:after:scale-x-100"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* UNIFIED mega menu — same design for About / Services / Industries / Product */}
                  {hasChildren && (
                    <MegaMenu
                      item={item}
                      open={isOpen}
                      onOpenChange={(o) => setOpenMenu(o ? item.label : null)}
                    />
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
