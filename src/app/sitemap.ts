import type { MetadataRoute } from "next";
import { services, industries } from "@/lib/site-data";
import { blogPosts, caseStudies } from "@/lib/content-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/about`, priority: 0.9 },
    { url: `${SITE_URL}/services`, priority: 0.9 },
    { url: `${SITE_URL}/industries`, priority: 0.9 },
    { url: `${SITE_URL}/case-studies`, priority: 0.9 },
    { url: `${SITE_URL}/blog`, priority: 0.8 },
    { url: `${SITE_URL}/why-choose-us`, priority: 0.7 },
    { url: `${SITE_URL}/work-process`, priority: 0.7 },
    { url: `${SITE_URL}/technologies`, priority: 0.7 },
    { url: `${SITE_URL}/careers`, priority: 0.6 },
    { url: `${SITE_URL}/appointment`, priority: 0.8 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
    { url: `${SITE_URL}/privacy`, priority: 0.3 },
    { url: `${SITE_URL}/terms`, priority: 0.3 },
  ].map((entry) => ({ ...entry, lastModified, changeFrequency: "monthly" as const }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];
}
