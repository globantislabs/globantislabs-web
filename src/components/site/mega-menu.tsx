"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs — MegaMenu
 *
 * Spec (per user request):
 * - Style family: Mega menu
 * - Scale: Medium (~520px wide)
 * - Per-item content: icon tile + 1-line description + right-side preview
 *   image that updates as you hover each item (Apple-style)
 * - Header strip: none — straight into the link list
 * - Footer strip: navy ink gradient with "Not sure where to start?" + orange
 *   Book consultation button
 * - Animation: slide reveal — opens like a blind, 280ms ease-out-expo
 * - Trigger: both hover AND click (hover for desktop, click for keyboard/touch)
 * - Card: pure white, hairline border, soft shadow
 */
type MegaMenuProps = {
  item: NavItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MegaMenu({ item, open, onOpenChange }: MegaMenuProps) {
  // Active child drives the right-side preview image
  const children = item.children ?? [];
  const [activeIdx, setActiveIdx] = React.useState<number>(0);

  // Reset to first item when dropdown reopens
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // Slide reveal — like a blind opening from the top
          initial={{ opacity: 0, y: -12, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
        >
          <div
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-float"
            // Click outside closes
            onClick={(e) => e.stopPropagation()}
          >
            {/* Link list + preview image — 2-column split */}
            <div className="grid grid-cols-[1fr_15rem]">
              {/* Left — link list */}
              <ul className="divide-y divide-line">
                {children.map((child, i) => {
                  const Icon = child.icon;
                  const isActive = i === activeIdx;
                  return (
                    <li key={child.href + i}>
                      <Link
                        href={child.href}
                        onClick={() => onOpenChange(false)}
                        onMouseEnter={() => setActiveIdx(i)}
                        onFocus={() => setActiveIdx(i)}
                        className={cn(
                          "group flex items-start gap-3 px-4 py-3 transition-colors",
                          isActive ? "bg-cream" : "hover:bg-cream/60"
                        )}
                      >
                        {/* Icon tile — cream bg, orange icon, fills on hover */}
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                            isActive
                              ? "border-brand bg-brand text-white shadow-sm"
                              : "border-brand/20 bg-cream text-brand group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                          )}
                        >
                          {Icon && <Icon className="size-4.5" />}
                        </span>

                        {/* Label + description */}
                        <span className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-sm font-bold leading-tight text-ink">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="text-xs leading-snug text-body line-clamp-1">
                              {child.desc}
                            </span>
                          )}
                        </span>

                        {/* Subtle → on the right — animates on hover */}
                        <ArrowRight
                          aria-hidden
                          className={cn(
                            "ml-auto size-4 shrink-0 self-center transition-all duration-300",
                            isActive
                              ? "translate-x-0 text-brand opacity-100"
                              : "-translate-x-1 text-ink/0 opacity-0 group-hover:translate-x-0 group-hover:text-brand group-hover:opacity-100"
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Right — preview image (Apple-style) */}
              <div className="relative hidden bg-shade sm:block">
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
                        sizes="240px"
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
                    {/* Active label overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="rule-flame" />
                      <p className="mt-2 text-sm font-bold leading-snug text-white">
                        {active.label}
                      </p>
                      {active.desc && (
                        <p className="mt-0.5 text-[11px] leading-snug text-white/70 line-clamp-2">
                          {active.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer — navy ink CTA strip */}
            {item.footerCta && (
              <div className="ink-gradient flex items-center justify-between gap-4 px-5 py-4 text-white">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Sparkles className="size-4 text-brand-light" aria-hidden />
                  </span>
                  <p className="truncate text-sm font-bold">
                    {item.footerCta.label}
                  </p>
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
