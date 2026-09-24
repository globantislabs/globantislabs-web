"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { navItems, type NavItem, type NavChild } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors",
        scrolled
          ? "border-hairline bg-background/85"
          : "border-transparent bg-background/70"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isActive={isActive}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn-brand">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-hairline bg-background lg:hidden"
          >
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopNavItem({
  item,
  isActive,
  openMenu,
  setOpenMenu,
}: {
  item: NavItem;
  isActive: (href: string) => boolean;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
}) {
  const hasChildren = !!item.children?.length;
  const id = item.label;
  const isOpen = openMenu === id;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive(item.href)
            ? "text-brand"
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive(item.href)
            ? "text-brand"
            : "text-foreground/80 hover:text-foreground"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setOpenMenu(isOpen ? null : id)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-1 w-[26rem] origin-top-left"
          >
            <div className="overflow-hidden rounded-md border border-hairline bg-popover shadow-lg">
              <ul className="grid grid-cols-1 gap-0 p-1">
                {item.children!.map((child) => (
                  <DesktopNavChild
                    key={child.href}
                    child={child}
                    isActive={isActive}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopNavChild({
  child,
  isActive,
}: {
  child: NavChild;
  isActive: (href: string) => boolean;
}) {
  return (
    <li>
      <Link
        href={child.href}
        className={cn(
          "group flex flex-col gap-0.5 rounded-sm px-3 py-2.5 transition-colors",
          isActive(child.href) ? "bg-paper-soft" : "hover:bg-paper-soft"
        )}
      >
        <span
          className={cn(
            "text-sm font-medium",
            isActive(child.href) ? "text-brand" : "text-foreground"
          )}
        >
          {child.label}
        </span>
        {child.desc && (
          <span className="text-xs text-muted-foreground">{child.desc}</span>
        )}
      </Link>
    </li>
  );
}

function MobileNav() {
  return (
    <nav className="px-4 py-4" aria-label="Mobile">
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-paper-soft"
            >
              {item.label}
            </Link>
            {item.children && (
              <ul className="ml-3 mt-1 space-y-0.5 border-l border-hairline pl-3">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="pt-2">
          <Link href="/contact" className="btn-brand w-full justify-center">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
