"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = { key: string; label: string; body: string };

export function WhoWeAreTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = React.useState(tabs[0]?.key ?? "");

  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div className="rounded-md border border-hairline bg-paper">
      <div
        role="tablist"
        aria-label="Mission, Vision, History"
        className="flex border-b border-hairline"
      >
        {tabs.map((t) => {
          const isActive = t.key === current.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.key)}
              className={cn(
                "relative px-5 py-4 text-sm font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="who-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={current.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-sm leading-relaxed text-foreground md:text-base"
          >
            {current.body}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
