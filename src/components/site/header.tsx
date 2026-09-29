"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [prevPath, setPrevPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close panels on route change (render-phase adjust pattern)
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setMobileExpanded(null);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside closes the mega-menu
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMenu]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Open immediately, close with delay (300ms) so user can move mouse to panel
  function openMenuPanel(label: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  }
  function closeMenuPanel() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

      {/* Main nav bar */}
      <div
        className={cn(
          "border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-line bg-white shadow-[0_1px_12px_rgba(15,23,42,0.06)]"
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
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
          >
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className="static"
                    onMouseEnter={() => hasChildren && openMenuPanel(item.label)}
                    onMouseLeave={() => hasChildren && closeMenuPanel()}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={hasChildren ? "true" : undefined}
                      aria-expanded={hasChildren ? isOpen : undefined}
                      onFocus={() => hasChildren && setOpenMenu(item.label)}
                      onBlur={(e) => {
                        if (hasChildren) {
                          const related = e.relatedTarget as Node | null;
                          if (related && !e.currentTarget.parentElement?.contains(related)) {
                            setOpenMenu(null);
                          }
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape" && hasChildren) setOpenMenu(null);
                      }}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition-colors",
                        isActive(item.href)
                          ? "text-brand"
                          : "text-ink/80 hover:text-brand"
                      )}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Full-width mega menu panel */}
                    {hasChildren && (
                      <MegaMenu
                        item={item}
                        open={isOpen}
                        onOpenChange={(o) => setOpenMenu(o ? item.label : null)}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="btn-lift hidden h-11 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame hover:bg-brand-dark lg:inline-flex"
            >
              <Link href="/contact">
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu — accordion */}
      {open && (
        <div
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <nav className="px-4 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-line/70 last:border-0">
                  {item.children ? (
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-3 text-base font-medium text-ink"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        aria-expanded={mobileExpanded === item.label}
                        aria-label={`Expand ${item.label} sub-pages`}
                        className="inline-flex size-9 items-center justify-center border border-line text-ink"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-300",
                            mobileExpanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && mobileExpanded === item.label && (
                    <ul className="border-l border-line pl-2 pb-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-ink/70 hover:text-brand"
                          >
                            {c.label}
                            {c.desc && (
                              <span className="block text-xs text-body">
                                {c.desc}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="btn-lift mt-4 h-11 w-full rounded-full bg-brand text-sm font-semibold text-white shadow-glow-flame"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <div className="mt-4 space-y-2 px-1 text-sm text-body">
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
          </nav>
        </div>
      )}
    </header>
  );
}
