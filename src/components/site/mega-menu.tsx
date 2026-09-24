"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs — MegaMenu (v2)
 *
 * Spec (per user request, round 2):
 * - Scope: just the dropdown panel — header stays as-is
 * - Width: Wide (~960px) centered under the trigger
 * - Layout: 3-column link grid + right-side featured card
 * - Per-item: icon tile + title + 1-line description
 * - Footer: ORANGE brand gradient strip with CTA button (was navy)
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
  const [activeIdx, setActiveIdx] = React.useState<number>(0);

  React.useEffect(() => {
    if (open) setActiveIdx(0);
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!children.length) return null;

  const active = children[activeIdx] ?? children[0];

  // Pick grid columns based on child count
  const gridCols =
    children.length <= 3
      ? "lg:grid-cols-1"
      : children.length <= 6
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

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
            {/* Main body: link grid (left) + featured card (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem]">
              {/* Left — link grid */}
              <div className={cn("grid gap-px bg-line p-2", gridCols)}>
                {children.map((child, i) => {
                  const Icon = child.icon;
                  const isActive = i === activeIdx;
                  return (
                    <Link
                      key={child.href + i}
                      href={child.href}
                      onClick={() => onOpenChange(false)}
                      onMouseEnter={() => setActiveIdx(i)}
                      onFocus={() => setActiveIdx(i)}
                      className={cn(
                        "group relative flex items-start gap-3 bg-white p-3.5 transition-colors",
                        isActive ? "bg-cream" : "hover:bg-cream/60"
                      )}
                    >
                      {/* Hover flame top-bar (signature) */}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-flame to-flame-soft transition-transform duration-300 ease-out-expo",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                      {/* Icon tile */}
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                          isActive
                            ? "border-brand bg-brand text-white shadow-sm"
                            : "border-brand/20 bg-cream text-brand group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                        )}
                      >
                        {Icon && <Icon className="size-5" />}
                      </span>
                      {/* Title + description */}
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="text-sm font-bold leading-tight text-ink">
                          {child.label}
                        </span>
                        {child.desc && (
                          <span className="line-clamp-1 text-xs leading-snug text-body">
                            {child.desc}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Right — featured card with image + CTA */}
              <div className="relative hidden bg-shade lg:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.href + (active.image ?? "")}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {active.image ? (
                      <Image
                        src={active.image}
                        alt={active.label}
                        fill
                        className="object-cover"
                        sizes="288px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Sparkles className="size-8 text-brand/40" />
                      </div>
                    )}
                    {/* Gradient scrim for label legibility */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent"
                    />
                    {/* Active item overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="rule-flame" aria-hidden />
                      <p className="mt-2 text-base font-bold leading-snug text-white">
                        {active.label}
                      </p>
                      {active.desc && (
                        <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/75">
                          {active.desc}
                        </p>
                      )}
                      <Link
                        href={active.href}
                        onClick={() => onOpenChange(false)}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-light"
                      >
                        View page
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
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
