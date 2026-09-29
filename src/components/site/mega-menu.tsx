"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Box-Grid Mega Menu — full-width hairline panel.
 *
 * Structure:
 * ① Panel body: 2-col hairline tile grid (left) + navy featured column (right)
 * ② Footer strip: note + view-all link
 *
 * The panel hangs off a `static` <li> in the Header, so `absolute inset-x-0`
 * makes it span the full viewport width.
 *
 * Motion: opacity + translateY, 200ms ease-out. Closed = invisible + pointer-events-none.
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

  // Build tiles from children
  const tiles = children.map((c) => ({
    label: c.label,
    desc: c.desc,
    href: c.href,
    icon: c.icon,
  }));

  // Featured column — use the first child's image if available
  const featured = children[0];
  const featuredImage = (featured as { image?: string })?.image ?? "/images/wp/2025-01/blog_new_02.jpg";

  // Footer note + view-all link
  const footerNote = item.footerCta?.label ?? `Explore ${item.label.toLowerCase()}`;
  const viewAllHref = item.href;
  const viewAllLabel = `View all ${item.label.toLowerCase()}`;

  return (
    <div
      aria-label={`${item.label} menu`}
      className={cn(
        "absolute inset-x-0 top-full z-50",
        "transition-[opacity,transform] duration-200 ease-out",
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none -translate-y-1.5 opacity-0"
      )}
    >
      <div className="border-b border-line bg-white shadow-[0_28px_56px_-24px_rgba(15,23,42,0.22)]">
        <div className="mx-auto grid w-full max-w-7xl gap-px bg-line lg:grid-cols-[1fr_18rem]">

          {/* Left: 2-col hairline tile grid */}
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {tiles.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <Link
                  key={tile.href + i}
                  href={tile.href}
                  onClick={() => onOpenChange(false)}
                  className="group/item flex items-start gap-3 bg-white px-5 py-4 transition-colors hover:bg-cream/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  {Icon && (
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-line bg-shade text-brand transition-colors duration-200 group-hover/item:border-brand/30 group-hover/item:bg-cream group-hover/item:text-brand"
                    >
                      <Icon className="size-4.5" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate font-display text-sm font-semibold text-ink">
                        {tile.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 -translate-x-1 text-brand opacity-0 transition-[opacity,transform] duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      />
                    </span>
                    {tile.desc && (
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-body">
                        {tile.desc}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right: navy featured column */}
          <aside className="flex flex-col bg-ink text-white">
            <div className="relative h-32 w-full overflow-hidden border-b border-white/10">
              <Image
                src={featuredImage}
                alt={item.label}
                fill
                sizes="288px"
                className="object-cover opacity-90"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
              />
              <span className="font-mono absolute bottom-2.5 left-4 text-[10px] font-medium text-white/85">
                {item.label}
              </span>
            </div>
            <div className="flex flex-1 flex-col px-5 py-4">
              <p className="font-display text-sm font-bold leading-snug text-white">
                {item.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                {tiles[0]?.desc ?? `Explore our ${item.label.toLowerCase()} offerings.`}
              </p>
              <Link
                href={viewAllHref}
                onClick={() => onOpenChange(false)}
                className="group/cta mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-brand-light"
              >
                Explore all
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                />
              </Link>
            </div>
          </aside>
        </div>

        {/* Footer strip */}
        {item.footerCta && (
          <div className="border-t border-line bg-shade/60">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-2.5">
              <p className="font-mono text-[10px] font-medium text-ink/50">
                {footerNote}
              </p>
              <Link
                href={item.footerCta.href}
                onClick={() => onOpenChange(false)}
                className="group/all inline-flex items-center gap-1.5 font-display text-xs font-bold text-ink transition-colors hover:text-brand"
              >
                {item.footerCta.button}
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
