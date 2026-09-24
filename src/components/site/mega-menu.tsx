"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs — MegaMenu (v3 — no hover image)
 *
 * Spec evolution:
 * - v1: Apple-style left list + right preview image
 * - v2: 3-col grid + right featured card (image updates on hover)
 * - v3 (this): full-width link grid only — NO hover image
 *
 * Final spec:
 * - Width: ~960px centered under the trigger
 * - Layout: full-width multi-column link grid (3 cols for many, 2 for medium, 1 for few)
 * - Per-item: icon tile + title + 1-line description
 * - Footer: ORANGE brand gradient strip with CTA button
 * - Animation: slide reveal — blind opening, 280ms ease-out-expo
 * - Trigger: both hover AND click (existing header behavior)
 * - Card: pure white, hairline border, soft shadow
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

  // Pick grid columns based on child count
  const gridCols =
    children.length <= 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : children.length <= 6
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // Slide reveal — like a blind opening from the top
          initial={{ opacity: 0, y: -16, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
        >
          <div
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-float"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full-width link grid — NO right preview panel */}
            <div className={cn("grid gap-px bg-line p-2", gridCols)}>
              {children.map((child, i) => {
                const Icon = child.icon;
                return (
                  <Link
                    key={child.href + i}
                    href={child.href}
                    onClick={() => onOpenChange(false)}
                    className="group relative flex items-start gap-3 bg-white p-4 transition-colors hover:bg-cream"
                  >
                    {/* Hover flame top-bar (signature) */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                    {/* Icon tile */}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-cream text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    {/* Title + description */}
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="text-sm font-bold leading-tight text-ink">
                        {child.label}
                      </span>
                      {child.desc && (
                        <span className="text-xs leading-snug text-body line-clamp-2">
                          {child.desc}
                        </span>
                      )}
                    </span>
                    {/* Subtle arrow that appears on hover */}
                    <ArrowRight
                      aria-hidden
                      className="ml-auto size-4 shrink-0 self-center text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                    />
                  </Link>
                );
              })}
            </div>

            {/* Footer — ORANGE brand gradient CTA strip */}
            {item.footerCta && (
              <div className="brand-gradient flex items-center justify-between gap-4 px-6 py-4 text-white">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Sparkles className="size-4 text-white" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">
                      {item.footerCta.label}
                    </p>
                    <p className="truncate text-xs text-white/70">
                      A senior engineer replies in 1 business day.
                    </p>
                  </div>
                </div>
                <Link
                  href={item.footerCta.href}
                  onClick={() => onOpenChange(false)}
                  className="btn-lift inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-bold text-brand shadow-lg shadow-ink/10 hover:bg-shade"
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
