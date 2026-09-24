/**
 * Testimonials + client logos for the home page.
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  industry: "Financial Services" | "Healthcare" | "E-commerce" | "Logistics" | "SaaS" | "Education";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They shipped our fraud-detection model in 10 weeks. Precision 94%, false-positive rate cut by 60%, ROI in 5 months. The MLOps discipline is what made it stick.",
    author: "Head of Risk",
    role: "Series B Fintech",
    company: "Confidential client",
    initials: "HR",
    industry: "Financial Services",
  },
  {
    quote:
      "They hit a 16-week deadline that two other firms said was impossible. Compliance was treated as an engineering problem, not a separate workstream.",
    author: "CMIO",
    role: "Regional healthcare network",
    company: "Confidential client",
    initials: "CM",
    industry: "Healthcare",
  },
  {
    quote:
      "They shipped our headless rebuild in 14 weeks. 38% conversion uplift, 0.8s LCP, 4.8★ on Trustpilot. We've stopped firefighting Magento and started shipping features.",
    author: "VP E-commerce",
    role: "Series C D2C brand",
    company: "Confidential client",
    initials: "VE",
    industry: "E-commerce",
  },
  {
    quote:
      "We went from 62% ETA accuracy to 94% in 22 weeks. Customer service became proactive. The framework means new carriers take 2 weeks, not 8.",
    author: "VP Operations",
    role: "Top-20 US 3PL",
    company: "Confidential client",
    initials: "VO",
    industry: "Logistics",
  },
  {
    quote:
      "They shipped our MVP in 12 weeks. $2M ARR within 9 months. The ADRs alone were worth the engagement — we'd have made three bad architectural decisions without them.",
    author: "Founder & CEO",
    role: "Seed-stage SaaS",
    company: "Confidential client",
    initials: "FC",
    industry: "SaaS",
  },
  {
    quote:
      "We survived our first exam season post-launch without a single P1. Last year we had 14. The strangle-fig approach is what made it possible.",
    author: "CIO",
    role: "Education publisher",
    company: "Confidential client",
    initials: "CI",
    industry: "Education",
  },
];

/**
 * Client logos — represented as text wordmarks since most of our clients
 * are confidential. Wordmarks use the company industry as a stand-in.
 *
 * Replace these with actual logo image paths when clients consent to public
 * attribution.
 */
export const clientLogos: { label: string; note: string }[] = [
  { label: "Series B Fintech", note: "Confidential" },
  { label: "Regional Healthcare Network", note: "Confidential" },
  { label: "Series C D2C Brand", note: "Confidential" },
  { label: "Top-20 US 3PL", note: "Confidential" },
  { label: "Seed-stage SaaS", note: "Confidential" },
  { label: "Education Publisher", note: "Confidential" },
  { label: "Healthcare SaaS", note: "Confidential" },
  { label: "B2B Logistics", note: "Confidential" },
];
