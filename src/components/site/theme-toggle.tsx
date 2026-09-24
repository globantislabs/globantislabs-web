"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark" | "system";

const modes: { value: ThemeMode; label: string; icon: React.ElementType }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render a stable shell first
  if (!mounted) {
    return (
      <div
        className="inline-flex items-center gap-0.5 rounded-md border border-hairline p-0.5"
        aria-hidden
      >
        {modes.map((m) => (
          <button
            key={m.value}
            type="button"
            className="inline-flex h-7 w-7 items-center justify-center rounded text-muted-foreground"
            tabIndex={-1}
          >
            <m.icon className="h-3.5 w-3.5" />
          </button>
        ))}
      </div>
    );
  }

  const active = (theme ?? "system") as ThemeMode;

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-md border border-hairline bg-paper p-0.5"
      role="group"
      aria-label="Color theme"
    >
      {modes.map((m) => {
        const isActive = active === m.value;
        const Icon = m.icon;
        return (
          <button
            key={m.value}
            type="button"
            onClick={() => setTheme(m.value)}
            aria-pressed={isActive}
            aria-label={`${m.label} theme`}
            title={`${m.label} theme`}
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-brand text-brand-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-paper-soft"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
