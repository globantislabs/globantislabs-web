import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  // The original PNG logo (orange "Globantis" wordmark + navy "o" mark).
  // On light backgrounds it shows as-is; on dark backgrounds we invert it.
  // `unoptimized` avoids dev-time sharp optimizer hangs on this RGBA PNG.
  return (
    <Image
      src="/images/logo.png"
      alt="Globantis Labs"
      width={176}
      height={45}
      priority
      unoptimized
      className={cn(
        "h-9 w-auto object-contain",
        variant === "dark" && "[filter:invert(1)_brightness(2)]"
      )}
    />
  );
}
