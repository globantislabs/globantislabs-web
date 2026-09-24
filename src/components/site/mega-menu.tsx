"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs — MegaMenu (v4 — full redesign)
 *
 * NEW PALETTE & LAYOUT (per user request: "don't stuck with orange and blue"):
 * - Panel: deep forest green (#0F3D3E) — drops as a dark editorial moment
 * - Text: warm cream (#F5F2EC) for titles, soft cream/70 for descriptions
 * - Accent: burnished copper (#B8702D) for numbered markers + hover + arrow
 * - Layout: single full-width list, one item per row, hairline rules between
 * - Per row: mono numbered marker (01) + bold title + 1-line description
 * - No footer CTA — clean end
 * - Animation: staggered fade + slide-down, 200ms ease-out, 30ms per row
 * - Hover: row bg lightens to forest-tint-2, marker brightens to copper,
 *   arrow slides in from the right
 *
 * Trigger: both hover (desktop) AND click (keyboard/touch).
 */
type MegaMenuProps = {
  item: NavItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// Local palette — scoped to this component only
const forest = "#0F3D3E";
const forestSoft = "#154545";
const cream = "#F5F2EC";
const copper = "#B8702D";
const copperSoft = "#D49070";

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // Subtle fade + slide-down, 200ms ease-out
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5"
          style={{ minWidth: "min(560px, 92vw)" }}
        >
          <div
            className="overflow-hidden rounded-xl border shadow-2xl"
            style={{
              backgroundColor: forest,
              borderColor: "rgba(245, 242, 236, 0.10)",
              boxShadow:
                "0 20px 50px -10px rgba(15, 61, 62, 0.45), 0 8px 16px -4px rgba(0,0,0,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top eyebrow strip — section name + count */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                borderBottom: "1px solid rgba(245, 242, 236, 0.08)",
              }}
            >
              <span
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: copperSoft }}
              >
                {item.label}
              </span>
              <span
                className="font-mono text-[10px] tracking-wider"
                style={{ color: "rgba(245, 242, 236, 0.40)" }}
              >
                {String(children.length).padStart(2, "0")} entries
              </span>
            </div>

            {/* Single-column list — one item per row, hairline rules */}
            <ul>
              {children.map((child, i) => (
                <motion.li
                  key={child.href + i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: 0.04 + i * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={child.href}
                    onClick={() => onOpenChange(false)}
                    className="group relative block px-5 py-3.5 transition-colors duration-200"
                    style={{
                      backgroundColor: "transparent",
                      borderTop:
                        i === 0
                          ? "none"
                          : "1px solid rgba(245, 242, 236, 0.07)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = forestSoft;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div className="flex items-baseline gap-4">
                      {/* Numbered marker — mono, copper */}
                      <span
                        className="font-mono text-xs font-semibold tabular-nums transition-colors duration-200 group-hover:text-[color:var(--copper-bright)]"
                        style={{ color: copperSoft, minWidth: "1.75rem" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Title + description */}
                      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span
                          className="text-sm font-bold leading-tight transition-colors duration-200 group-hover:text-white"
                          style={{ color: cream }}
                        >
                          {child.label}
                        </span>
                        {child.desc && (
                          <span
                            className="line-clamp-1 text-xs leading-snug"
                            style={{ color: "rgba(245, 242, 236, 0.55)" }}
                          >
                            {child.desc}
                          </span>
                        )}
                      </div>

                      {/* Arrow — slides in from right on hover */}
                      <ArrowRight
                        aria-hidden
                        className="size-4 shrink-0 self-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        style={{ color: copperSoft }}
                      />
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* NO footer CTA — clean end. Bottom hairline only. */}
            <div
              aria-hidden
              style={{
                height: "1px",
                backgroundColor: "rgba(245, 242, 236, 0.10)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Expose palette to consumers if needed
export const megaMenuPalette = { forest, forestSoft, cream, copper, copperSoft };
