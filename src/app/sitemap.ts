import type { MetadataRoute } from "next";
import { services, industries } from "@/lib/site-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/about`, priority: 0.9 },
    { url: `${SITE_URL}/services`, priority: 0.9 },
    { url: `${SITE_URL}/industries`, priority: 0.9 },
    { url: `${SITE_URL}/why-choose-us`, priority: 0.7 },
    { url: `${SITE_URL}/work-process`, priority: 0.7 },
    { url: `${SITE_URL}/technologies`, priority: 0.7 },
    { url: `${SITE_URL}/careers`, priority: 0.6 },
    { url: `${SITE_URL}/appointment`, priority: 0.8 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
  ].map((entry) => ({ ...entry, lastModified, changeFrequency: "monthly" }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
