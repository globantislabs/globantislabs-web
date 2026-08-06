import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Globantis Labs logo.
 *
 * variant="light" → for LIGHT backgrounds (header on white) — uses the
 *   original `Asset-134x-Photoroom1-scaled.png` orange-navy wordmark from
 *   wp-content/uploads/2025/02/.
 *
 * variant="dark"  → for DARK backgrounds (footer on navy) — uses the original
 *   `Logo-F1-Backup-Recovered-e1767885722960.png` (white version) from
 *   wp-content/uploads/2024/09/.
 *
 * `unoptimized` avoids dev-time sharp optimizer hangs on these RGBA PNGs.
 */
export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const src =
    variant === "dark"
      ? "/images/wp/2024-09/Logo-F1-Backup-Recovered-e1767885722960.png"
      : "/images/wp/2025-02/Asset-134x-Photoroom1-scaled.png";

  return (
    <Image
      src={src}
      alt="Globantis Labs"
      width={176}
      height={45}
      priority
      unoptimized
      className={cn("h-9 w-auto object-contain", className)}
    />
  );
}
