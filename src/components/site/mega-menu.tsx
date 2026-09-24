"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs — MegaMenu (v5 — premium multi-column, reference-style)
 *
 * Built to match the common premium mega-menu pattern (Stripe / AWS / Endava):
 * - Wide panel ~880px, centered under the trigger
 * - Top section-header strip with eyebrow label + lead + "view all" link
 * - Multi-column grid of cards (3 cols for 7+ items, 2 for 4-6, 1 for ≤3)
 * - Each card: icon tile + bold title + 1-line description + chevron
 * - Signature flame top-bar on hover
 * - Bottom CTA strip (ink or brand gradient) with sparkle + Book Consultation
 *
 * Trigger: both hover (desktop) AND click (keyboard/touch).
 */
type MegaMenuProps = {
  item: NavItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MegaMenu({ item, open, onOpenChange }: MegaMenuProps) {
  const children = item.children ?? [];

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!children.length) return null;

  const gridCols =
    children.length <= 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : children.length <= 6
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  // Lead paragraph per top-level item
  const leadMap: Record<string, string> = {
    About: "Inside Globantis — story, leadership, hiring, delivery and contact.",
    Services: "End-to-end engineering — custom software to AI, cloud & DevOps.",
    Industries: "Domain expertise that ships across seven verticals.",
    Product: "In-house products built on the same engineering culture.",
  };
  const lead = leadMap[item.label] ?? "Browse the full set of pages below.";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
          style={{ width: "min(880px, 94vw)" }}
        >
          <div
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-float"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ============ Top section-header strip ============ */}
            <div className="flex items-center justify-between gap-6 border-b border-line bg-shade px-6 py-4">
              <div className="min-w-0">
                <span className="section-label !mb-1">
                  [ {item.label} ]
                </span>
                <p className="text-xs leading-relaxed text-body">
                  {lead}
                </p>
              </div>
              <Link
                href={item.href}
                onClick={() => onOpenChange(false)}
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-all hover:border-brand hover:text-brand"
              >
                View all
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ============ Multi-column card grid ============ */}
            <div className={cn("grid gap-1 p-3", gridCols)}>
              {children.map((child, i) => {
                const Icon = child.icon;
                return (
                  <motion.div
                    key={child.href + i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.04 + i * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={child.href}
                      onClick={() => onOpenChange(false)}
                      className="group relative flex h-full flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-brand/5"
                    >
                      {/* Hover flame top-bar (signature) */}
                      <span
                        aria-hidden
                        className="absolute inset-x-3 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                      />
                      {/* Header row: icon tile + faded number */}
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          {Icon && <Icon className="size-5" />}
                        </span>
                        <span className="font-mono text-3xl font-bold leading-none text-ink/10 transition-colors duration-300 group-hover:text-flame/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Title + description */}
                      <div>
                        <h4 className="text-sm font-bold leading-snug text-ink">
                          {child.label}
                        </h4>
                        {child.desc && (
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-body">
                            {child.desc}
                          </p>
                        )}
                      </div>
                      {/* Inline "Learn more" link with arrow */}
                      <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-semibold text-ink/50 transition-colors duration-200 group-hover:text-brand">
                        Learn more
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* ============ Bottom ink-gradient CTA strip ============ */}
            {item.footerCta && (
              <div className="ink-gradient flex items-center justify-between gap-4 px-6 py-4 text-white">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Sparkles className="size-4 text-brand-light" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">
                      {item.footerCta.label}
                    </p>
                    <p className="truncate text-xs text-white/60">
                      A senior engineer replies in 1 business day.
                    </p>
                  </div>
                </div>
                <Link
                  href={item.footerCta.href}
                  onClick={() => onOpenChange(false)}
                  className="btn-lift inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 text-xs font-semibold text-white shadow-lg shadow-brand/20 hover:bg-brand-dark"
                >
                  {item.footerCta.button}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
