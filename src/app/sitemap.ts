import type { MetadataRoute } from "next";
import { services, industries } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globantislabs.com";
  const staticRoutes = [
    "",
    "/about",
    "/why-choose-us",
    "/work-process",
    "/technologies",
    "/careers",
    "/appointment",
    "/contact",
    "/services",
    "/industries",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r === "" ? "/" : r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
