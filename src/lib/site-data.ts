import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  Globe2,
  PenTool,
  BrainCircuit,
  ServerCog,
  Boxes,
  LifeBuoy,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Scale,
  Rocket,
  Cpu,
  Lock,
  Landmark,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingCart,
  Workflow,
  Video,
  Dna,
  CalendarCheck,
  Microscope,
  PackageCheck,
  Warehouse,
  MapPin,
  LineChart,
  Cloud,
  Wifi,
  Link2,
  Network,
  Users,
  ShoppingBag,
  Share2,
  CreditCard,
  Mic,
  Bot,
  MonitorCheck,
  RefreshCw,
  Zap,
  Laptop,
  BarChart3,
  AppWindow,
  Mail,
  FileText,
  Briefcase,
  Watch,
} from "lucide-react";

export const company = {
  name: "Globantis Labs",
  tagline: "Transforming Ideas Into IT Solutions",
  phone: "(+009) 155-69566",
  phoneHref: "tel:+00915569566",
  email: "sales@globantislabs.com",
  emailHref: "mailto:sales@globantislabs.com",
  careersEmail: "careers@globantislabs.com",
  usaAddress: "374 William S Canning Blvd, Fall River MA Road 2721, USA",
  canadaAddress: "3992 Rue de la Seine Laval, Québec H7W 2S3, Canada",
  indiaAddress: "RMZ Millenia Business Park, Perungudi, Chennai, India",
  founded: "2026",
  offices: [
    {
      city: "Fall River, MA",
      country: "United States",
      address: "374 William S Canning Blvd, Fall River, MA 02721, USA",
      tz: "US Eastern (UTC−5)",
      image: "/images/wp/2026-01/pexels-sevenstormphotography-443383.jpg",
      role: "Headquarters · Client engagement · Product",
    },
    {
      city: "Laval, Québec",
      country: "Canada",
      address: "3992 Rue de la Seine, Laval, QC H7W 2S3, Canada",
      tz: "Canada Eastern (UTC−5)",
      image: "/images/wp/2026-01/2149595827.jpg",
      role: "Delivery · Cloud & DevOps · AI research",
    },
    {
      city: "Chennai",
      country: "India",
      address: "RMZ Millenia Business Park, Perungudi, Chennai, India",
      tz: "India Standard (UTC+5:30)",
      image: "/images/wp/2026-01/about-office-e1767452844756.jpg",
      role: "Engineering hub · 24/5 follow-the-sun",
    },
  ],
};

export type NavChild = {
  label: string;
  desc?: string;
  href: string;
  icon?: LucideIcon;
  image?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** Footer CTA inside the dropdown — navy ink strip */
  footerCta?: { label: string; button: string; href: string };
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", desc: "Our story, leadership and offices", href: "/about", icon: Globe2, image: "/images/wp/2025-01/about.jpg" },
      { label: "Why Choose Us", desc: "Six engineering disciplines we don't compromise", href: "/why-choose-us", icon: ShieldCheck, image: "/images/wp/2025-01/why_choose01.jpg" },
      { label: "Work Process", desc: "Seven-stage delivery loop with deliverables", href: "/work-process", icon: Workflow, image: "/images/wp/2025-02/about_mna00n.jpg" },
      { label: "Technologies", desc: "Our engineering stack, in the open", href: "/technologies", icon: Code2, image: "/images/wp/2025-02/technology1.png" },
      { label: "Careers", desc: "Open roles, hiring process, culture", href: "/careers", icon: Users, image: "/images/wp/2026-01/about-office-e1767452844756.jpg" },
      { label: "Appointment", desc: "Book a free 30-minute call", href: "/appointment", icon: CalendarCheck, image: "/images/wp/2025-02/vrhm2.jpg" },
      { label: "Contact Us", desc: "A senior engineer replies in 1 business day", href: "/contact", icon: Mail, image: "/images/wp/2025-02/contact-zman.png" },
    ],
    footerCta: {
      label: "Not sure where to start?",
      button: "Book consultation",
      href: "/contact",
    },
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", desc: "Enterprise-grade custom software", href: "/services/software-development", icon: Code2, image: "/images/wp/2024-09/ser_details.jpg" },
      { label: "Web Development", desc: "Modern web apps at global scale", href: "/services/web-development", icon: Globe, image: "/images/wp/2025-01/blog_new_02.jpg" },
      { label: "UI/UX Design", desc: "Research-led product design", href: "/services/ui-ux-design", icon: PenTool, image: "/images/wp/2025-01/blog_new_03.jpg" },
      { label: "Artificial Intelligence", desc: "ML, agents, RPA in production", href: "/services/artificial-intelligence", icon: BrainCircuit, image: "/images/wp/2025-01/blog_new_05.jpg" },
      { label: "CMS Development", desc: "ERP, CRM and content systems", href: "/services/cms-development", icon: Boxes, image: "/images/wp/2025-01/blog_new_02.jpg" },
      { label: "DevOps Services", desc: "CI/CD, IaC, observability", href: "/services/devops-services", icon: ServerCog, image: "/images/wp/2025-01/project_new_02.jpg" },
      { label: "IT Support", desc: "Maintenance and 24/5 operations", href: "/services/it-support-services", icon: LifeBuoy, image: "/images/wp/2025-01/project_new_06.jpg" },
    ],
    footerCta: {
      label: "Not sure where to start?",
      button: "Book consultation",
      href: "/contact",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Financial Services", desc: "Banking, capital markets, fintech", href: "/industries/financial-services", icon: Landmark, image: "/images/wp/2025-01/blog_new_02.jpg" },
      { label: "Healthcare", desc: "Patient-centric care, AI diagnostics", href: "/industries/healthcare", icon: HeartPulse, image: "/images/wp/2025-02/about_o01.jpg" },
      { label: "Education", desc: "Scalable, accessible learning", href: "/industries/education", icon: GraduationCap, image: "/images/wp/2025-04/testimonials.jpg" },
      { label: "Automation", desc: "Intelligent process automation", href: "/industries/automation", icon: Workflow, image: "/images/wp/2025-02/why-choose-24.jpg" },
      { label: "Logistics", desc: "End-to-end supply chain", href: "/industries/logistics", icon: Truck, image: "/images/wp/2025-01/why_choose01.jpg" },
      { label: "Cybersecurity", desc: "Defense-in-depth from edge to human", href: "/industries/cybersecurity", icon: ShieldCheck, image: "/images/wp/2025-02/faq00.jpg" },
      { label: "E-commerce & Retail", desc: "Omnichannel commerce that converts", href: "/industries/ecommerce", icon: ShoppingCart, image: "/images/wp/2025-02/concept.png" },
    ],
    footerCta: {
      label: "Not sure where to start?",
      button: "Book consultation",
      href: "/contact",
    },
  },
  {
    label: "Product",
    href: "/#products",
    children: [
      { label: "Photolabs", desc: "AI-powered photo editing studio", href: "/#products", icon: Sparkles, image: "/images/wp/2025-02/vr-girl.jpg" },
      { label: "TranscriptHQ", desc: "Enterprise transcription & QA", href: "/#products", icon: BrainCircuit, image: "/images/wp/2025-02/technology1.png" },
      { label: "Try Before", desc: "Pre-purchase product experience", href: "/#products", icon: ShoppingCart, image: "/images/wp/2025-02/start-up.png" },
    ],
    footerCta: {
      label: "Want to see these in action?",
      button: "Book a demo",
      href: "/contact",
    },
  },
  { label: "Contact", href: "/contact" },
];

export const heroHighlights = [
  {
    title: "AI & Automation",
    desc: "AI and automation convert complex, repetitive work into intelligent, scalable workflows.",
  },
  {
    title: "Emerging Technologies",
    desc: "Emerging technologies are frontier innovations advancing how businesses operate globally.",
  },
];

export const aboutTabs = [
  {
    key: "mission",
    label: "Our Mission",
    body: "Our mission is to empower businesses worldwide through innovative, scalable, and secure digital solutions. We strive to transform ideas into impactful technology by combining global expertise, advanced engineering, and a customer-centric approach that delivers measurable business value.",
  },
  {
    key: "vision",
    label: "Our Vision",
    body: "Our vision is to become a globally trusted technology partner, driving digital transformation across industries. We aim to shape the future through innovation, intelligence, and sustainability—enabling organizations to grow, adapt, and succeed in an ever-evolving digital world.",
  },
  {
    key: "history",
    label: "Our History",
    body: "Globantis was founded with a clear purpose: to deliver world-class software solutions that bridge technology and business needs across global markets. What began as a focused technology initiative has grown into a globally operating software company serving clients across diverse industries and geographies. From custom software development to AI, cloud, DevOps, and enterprise solutions, Globantis has continuously evolved by embracing innovation, adopting global best practices, and building strong partnerships. Today, Globantis stands as a trusted global technology partner, delivering scalable solutions and helping organizations achieve sustainable growth worldwide.",
  },
];

export const aboutPills = [
  "Innovative Solutions",
  "Secure Transactions",
  "User-Friendly Interface",
  "Real-Time Analytics",
];

/**
 * Tech logo image path helper.
 * The original WordPress site uses these PNG logos from
 * wp-content/uploads/2024/10/ (we copied them to /public/images/wp/2024-10/).
 */
const techImg = (filename: string) =>
  `/images/wp/2024-10/${filename}.png`;

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  desc: string;
  tagline?: string;
  techs: { name: string; img: string }[];
  banner: {
    label?: string;
    image?: string;
  };
  overview?: {
    heading: string;
    paragraphs: string[];
  };
  stats?: { value: string; label: string }[];
  processSteps?: {
    label?: string;
    heading: string;
    intro?: string;
    steps: { phase: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  };
  useCases?: {
    label?: string;
    heading: string;
    intro?: string;
    items: { title: string; desc: string; icon?: LucideIcon }[];
  };
  deliverables?: string[];
  benefits?: {
    label?: string;
    heading: string;
    intro?: string;
    features?: { title: string; desc: string }[];
    bullets?: string[];
    closing?: string;
    images?: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
  subServices?: {
    label?: string;
    heading: string;
    intro?: string;
    items: { title: string; desc: string }[];
  };
  faq?: {
    label?: string;
    heading: string;
    image?: string;
    items: { q: string; a: string; image?: string }[];
  };
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortTitle: "Web Development",
    desc: "Our web development services focus on performance, reliability, and user experience. We create modern web applications that are responsive, secure, and built to scale globally.",
    techs: [
      { name: "React", img: techImg("tek_02") },
      { name: "Angular", img: techImg("tek_03") },
      { name: "Node", img: techImg("tek_001") },
      { name: "Next", img: techImg("tek_01") },
    ],
    banner: {
      label: "Web Development",
      image: "/images/wp/2024-09/ser_details.jpg",
    },
    overview: {
      heading: "Business Intelligence Innovative Digital Solutions and Expert Technology Consulting.",
      paragraphs: [
        "At Globantis Labs, we create dynamic, responsive, and high-performance web applications that empower businesses to succeed in the digital world. Our solutions are designed for scalability, security, and seamless user experience, helping global clients enhance engagement and achieve measurable results.",
        "We treat every web property like a product — instrumented from day one with analytics, performance budgets and observability. Whether it's a high-traffic marketing site, a multi-tenant SaaS dashboard, or a complex internal tool, our engineering teams ship code that's tested, reviewed and ready for production.",
      ],
    },
    stats: [
      { value: "0.8s", label: "Average LCP" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "85+", label: "Lighthouse score" },
      { value: "WCAG 2.2", label: "Accessibility AA" },
    ],
    processSteps: {
      label: "Delivery process",
      heading: "From sprint zero to production — every Friday.",
      intro: "Our web engagements run on two-week sprints with weekly client reviews. Every phase below produces a tangible artifact you can see, click and review.",
      steps: [
        { phase: "01", title: "Discovery & audit", duration: "1 week", desc: "Stakeholder interviews, current-state audit, analytics review, competitor benchmark and a written technical recommendation.", deliverables: ["Stakeholder interview notes", "Current-state audit report", "Technical recommendation doc"] },
        { phase: "02", title: "Design & prototype", duration: "2–4 weeks", desc: "Wireframes, clickable Figma prototype, design system tokens and a QA checklist before any production code is written.", deliverables: ["Wireframes", "Figma prototype", "Design system tokens", "QA checklist"] },
        { phase: "03", title: "Build sprint zero", duration: "1 week", desc: "Repo scaffolding, CI/CD pipeline, observability stack, staging environment and a hello-world deploy before feature work begins.", deliverables: ["Git repo + branch strategy", "CI/CD pipeline", "Staging URL", "Observability dashboard"] },
        { phase: "04", title: "Feature sprints", duration: "2-week cycles", desc: "Feature development in two-week sprints. Every Friday we demo what shipped, what's next, and what's blocked.", deliverables: ["Working software", "Sprint demo recording", "Burndown chart", "Release notes"] },
        { phase: "05", title: "Launch & handover", duration: "1 week", desc: "Production deploy, runbook, knowledge transfer to your team and a 30-day hyper-care window where we hold the pager.", deliverables: ["Production deploy", "Runbook", "Knowledge-transfer session", "30-day hyper-care"] },
      ],
    },
    useCases: {
      label: "What we build",
      heading: "Five web products we ship repeatedly.",
      intro: "We've shipped these patterns enough times that the architecture is a known quantity — the engagement becomes about your business logic, not plumbing.",
      items: [
        { title: "Marketing sites & landing pages", desc: "High-conversion, SEO-tuned, CMS-backed marketing sites with sub-second LCP and analytics baked in.", icon: Globe },
        { title: "SaaS dashboards", desc: "Multi-tenant, role-aware admin dashboards with realtime data, RBAC and audit trails.", icon: BarChart3 },
        { title: "E-commerce storefronts", desc: "Headless commerce with checkout, payments, inventory sync and A/B testing built in.", icon: ShoppingCart },
        { title: "Internal tools & admin", desc: "Operations tools, customer-support consoles and back-office apps that replace spreadsheets.", icon: AppWindow },
        { title: "Public-facing portals", desc: "Customer portals, partner portals and self-service flows with strong auth and identity.", icon: Users },
        { title: "Documentation & content sites", desc: "Docs portals, blogs, knowledge bases — versioned, searchable and fast.", icon: FileText },
      ],
    },
    deliverables: ["Production-ready source code in your git", "CI/CD pipeline (GitLab / GitHub Actions)", "Staging + production environments", "Observability dashboard (Grafana)", "Runbook + on-call rotation", "30-day hyper-care", "Architecture decision records"],
    testimonial: {
      quote: "They shipped our SaaS dashboard in 12 weeks. Sub-second LCP, 99.99% uptime, and our support load dropped 40% overnight.",
      author: "VP of Product",
      role: "Healthcare SaaS",
      company: "Confidential client",
    },
    benefits: {
      label: "Benefits To Services",
      heading: "Expert Web Development Solutions for Modern Businesses",
      intro:
        "We specialize in creating innovative, scalable, and user-centric web solutions tailored to your business needs. From responsive websites to complex web applications, our expert developers leverage the latest technologies and best practices to deliver high-performance digital products that drive results.",
      features: [
        {
          title: "Industry Experience",
          desc: "Our experienced team brings years of web development expertise across diverse industries, ensuring robust and scalable solutions tailored to your unique requirements.",
        },
        {
          title: "24/7 Customer Support",
          desc: "Round-the-clock technical support to address any issues, resolve bugs quickly, and keep your web applications running smoothly without interruptions.",
        },
        {
          title: "Trust & Reliability",
          desc: "We build web applications with cutting-edge security measures, reliable infrastructure, and rigorous testing protocols to ensure your business can depend on us.",
        },
      ],
      images: ["/images/wp/2025-01/blog_new_05.jpg"],
    },
  },
  {
    slug: "devops-services",
    icon: ServerCog,
    title: "DevOps Services",
    shortTitle: "DevOps Services",
    desc: "We deliver end-to-end DevOps services that help organizations accelerate software delivery, improve reliability, and scale infrastructure globally.",
    techs: [
      { name: "GitLab", img: techImg("gitlab") },
      { name: "Juju", img: techImg("juju") },
      { name: "Git", img: techImg("git") },
      { name: "Puppet", img: techImg("puppet") },
    ],
    banner: {
      label: "DevOps Services",
    },
    overview: {
      heading: "Service Overview",
      paragraphs: [
        "Comprehensive DevOps transformation services encompassing continuous integration and deployment, infrastructure automation, containerization, and enterprise-grade monitoring solutions. We enable organizations to accelerate software delivery cycles, improve system reliability, and achieve operational excellence through automated workflows and intelligent infrastructure management.",
        "Every DevOps engagement starts with a maturity assessment — we don't ship a CI/CD pipeline and walk away. We measure your current deployment frequency, lead time, change-failure rate and recovery time, then ship improvements that move the needle on those four metrics over 90 days.",
      ],
    },
    stats: [
      { value: "30+", label: "Deploys / day" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "<5min", label: "Mean time to recover" },
      { value: "DORA", label: "Elite-tier metrics" },
    ],
    processSteps: {
      label: "Engagement phases",
      heading: "Five phases to DevOps maturity.",
      intro: "We follow the DORA framework. Every phase moves at least one of the four key metrics — deploy frequency, lead time, change-failure rate, recovery time.",
      steps: [
        { phase: "01", title: "Maturity assessment", duration: "1 week", desc: "We measure your current DORA metrics, audit your pipeline, scan infra for drift, and produce a 90-day improvement plan with priorities.", deliverables: ["DORA baseline report", "Pipeline audit", "Infra drift scan", "90-day roadmap"] },
        { phase: "02", title: "Pipeline foundation", duration: "2 weeks", desc: "CI/CD pipeline with automated tests, security scans, artifact registry and one-click rollbacks. Trunk-based or git-flow — your call.", deliverables: ["CI/CD pipeline", "Test automation suite", "Security scanning", "Rollback playbook"] },
        { phase: "03", title: "Infrastructure as Code", duration: "2–3 weeks", desc: "Terraform modules for every environment, drift detection, policy-as-code and a self-service portal for devs to spin up infra.", deliverables: ["Terraform modules", "Environment parity", "Policy-as-code", "Self-service portal"] },
        { phase: "04", title: "Observability stack", duration: "1–2 weeks", desc: "Metrics, logs, traces — unified in Grafana or Datadog. SLOs defined per service with alerting wired to your on-call.", deliverables: ["Grafana / Datadog dashboards", "SLO definitions", "Alert runbook", "On-call rotation"] },
        { phase: "05", title: "Continuous improvement", duration: "Ongoing", desc: "Quarterly DORA re-measurement, chaos engineering days, game-days, and incident retrospectives that close the loop.", deliverables: ["Quarterly DORA report", "Chaos test results", "Retro action items", "Updated roadmap"] },
      ],
    },
    useCases: {
      label: "Where we apply it",
      heading: "Six DevOps patterns we ship repeatedly.",
      intro: "These are the engagements that land most often. Each one is a known quantity — we've shipped it enough times to know the failure modes in advance.",
      items: [
        { title: "CI/CD greenfield", desc: "Net-new pipeline for a new product or repo — GitLab / GitHub Actions / Jenkins, your call.", icon: RefreshCw },
        { title: "Kubernetes migration", desc: "Lift workloads from VMs / bare metal onto managed K8s, with autoscaling and ingress.", icon: Boxes },
        { title: "Observability uplift", desc: "Replace ad-hoc monitoring with metrics + logs + traces in a unified pane.", icon: BarChart3 },
        { title: "Multi-region failover", desc: "Active-active or active-passive multi-region setup with DNS-level failover.", icon: Globe2 },
        { title: "Cost optimization", desc: "Right-size instances, kill zombie resources, switch to spot/preemptible where possible.", icon: Cpu },
        { title: "Compliance automation", desc: "SOC2 / ISO / HIPAA control automation with continuous evidence collection.", icon: ShieldCheck },
      ],
    },
    deliverables: ["Production CI/CD pipeline", "Terraform module library", "Observability dashboards", "SLO definitions", "On-call runbook", "DORA baseline + 90-day report", "Knowledge-transfer session"],
    testimonial: {
      quote: "They cut our deploy frequency from weekly to daily in 6 weeks. Lead time went from 4 days to 90 minutes.",
      author: "Director of Engineering",
      role: "Fintech",
      company: "Confidential client",
    },
    subServices: {
      label: "Our services",
      heading: "Complete DevOps Solutions & CI/CD Pipeline Automation",
      intro:
        "Streamline software delivery with automated CI/CD pipelines, infrastructure management, and continuous monitoring. Our DevOps expertise accelerates time-to-market while maintaining stability and reliability.",
      items: [
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Manage infrastructure through code version control for consistency, reproducibility, and efficient provisioning across environments.",
        },
        {
          title: "CI/CD Pipeline Automation",
          desc: "Automate code integration, testing, and deployment with robust CI/CD pipelines for faster releases and reduced errors.",
        },
        {
          title: "Monitoring & Observability",
          desc: "Real-time insights into application and infrastructure health with comprehensive monitoring, logging, and alerting to enable rapid issue detection and resolution.",
        },
        {
          title: "IT Consulting & Strategy",
          desc: "Strategic guidance on cloud adoption, toolchain selection, and DevOps maturity assessment to align your engineering practices with long-term business objectives.",
        },
        {
          title: "Data & Analytics Services",
          desc: "Build reliable data pipelines, warehouses, and analytics dashboards that turn operational telemetry into actionable insight for smarter, faster decisions.",
        },
      ],
    },
  },
  {
    slug: "it-support-services",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    shortTitle: "IT Support",
    desc: "We provide reliable global support services to ensure your software operates smoothly, securely, and efficiently at all times.",
    techs: [
      { name: "GitLab", img: techImg("gitlab") },
      { name: "Juju", img: techImg("juju") },
      { name: "Git", img: techImg("git") },
      { name: "Puppet", img: techImg("puppet") },
    ],
    banner: {
      label: "Core Features",
    },
    overview: {
      heading: "Transforming IT Support with Expertise and Innovation",
      paragraphs: [
        "In today's rapidly evolving digital landscape, organizations face numerous challenges, from maintaining system uptime to managing complex infrastructure and ensuring security. Our IT support services provide round-the-clock reliability so your business never stops.",
        "We don't just hold the pager — we own the SLA. Every engagement starts with an on-call playbook, an observability dashboard and a quarterly business review where we report against the metrics that matter to your team: uptime, MTTR, security posture and customer-reported issues.",
      ],
    },
    stats: [
      { value: "99.95%", label: "SLA uptime target" },
      { value: "<15min", label: "P1 ack time" },
      { value: "<2h", label: "MTTR (P1)" },
      { value: "24/5", label: "Follow-the-sun coverage" },
    ],
    processSteps: {
      label: "Operations process",
      heading: "How we run production for you.",
      intro: "Our support engagements run on documented playbooks, not heroics. Every step below is auditable inside the on-call dashboard.",
      steps: [
        { phase: "01", title: "Onboarding & runbook", duration: "1 week", desc: "We shadow your team for a week, document the runbook, set up alerting, and own the on-call rotation end-to-end.", deliverables: ["Runbook v1", "Alert routing", "On-call schedule", "Escalation tree"] },
        { phase: "02", title: "Steady-state operations", duration: "Ongoing", desc: "24/5 coverage of your production stack. Every alert triaged, every incident documented, every retro action item tracked to closure.", deliverables: ["24/5 on-call", "Incident reports", "Retro action items", "Monthly SLA report"] },
        { phase: "03", title: "Patch & vulnerability", duration: "Weekly", desc: "Weekly patch window, dependency CVE scanning, and a security dashboard showing every vulnerability and its SLA.", deliverables: ["Patch schedule", "CVE dashboard", "Vulnerability SLA report"] },
        { phase: "04", title: "Quarterly business review", duration: "Quarterly", desc: "Every 90 days we sit with your leadership team to review uptime, MTTR, security posture and customer-reported issues against targets.", deliverables: ["QBR deck", "Metric trends", "Roadmap recommendations"] },
        { phase: "05", title: "Continuous improvement", duration: "Ongoing", desc: "We close the loop — every incident produces a documented fix, every recurring alert produces an automation, every manual runbook step produces a script.", deliverables: ["Auto-remediation scripts", "Alert-noise reduction", "Updated runbooks"] },
      ],
    },
    useCases: {
      label: "What we operate",
      heading: "Five support engagements we run repeatedly.",
      intro: "These are the patterns we run day-in, day-out. Every one ships with a documented SLA and a quarterly business review.",
      items: [
        { title: "Application L2/L3 support", desc: "Production application support — bug triage, hotfixes, release management, customer-facing comms.", icon: LifeBuoy },
        { title: "Infrastructure operations", desc: "Cloud infra, databases, networking — patching, scaling, cost optimization and on-call.", icon: ServerCog },
        { title: "Security operations", desc: "SIEM monitoring, threat hunting, vulnerability management, incident response.", icon: ShieldCheck },
        { title: "Data platform ops", desc: "Pipeline health, warehouse performance, data quality monitoring and SLA on freshness.", icon: BarChart3 },
        { title: "End-user IT support", desc: "Employee onboarding, device management, internal helpdesk with documented SLAs.", icon: Users },
        { title: "Compliance & audit", desc: "Evidence collection for SOC2/ISO/HIPAA — automated, continuous, audit-ready.", icon: FileText },
      ],
    },
    deliverables: ["24/5 on-call rotation", "Runbook (living document)", "Alert routing + escalation tree", "Monthly SLA report", "Quarterly business review", "Auto-remediation scripts", "Patch schedule + CVE dashboard"],
    testimonial: {
      quote: "They've held our pager for 18 months. Uptime 99.97%, MTTR down from 6h to 90min, and we sleep through the night.",
      author: "CTO",
      role: "B2B SaaS",
      company: "Confidential client",
    },
    benefits: {
      heading: "Comprehensive IT Support & Maintenance",
      features: [
        {
          title: "24/7 Technical Support",
          desc: "Round-the-clock technical support to address IT issues, resolve system problems, and ensure minimal downtime for your critical business operations.",
        },
        {
          title: "Proactive System Monitoring",
          desc: "We continuously monitor systems to detect issues early, resolve them proactively, and keep your operations running smoothly without interruption.",
        },
        {
          title: "Security & Compliance",
          desc: "Leverage the latest in security technology with proactive monitoring, patching, and compliance management to protect your business around the clock.",
        },
      ],
    },
  },
  {
    slug: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    desc: "We design intuitive and engaging digital experiences that align with global user expectations and business objectives.",
    techs: [
      { name: "Hotjar", img: techImg("hotjar") },
      { name: "Figma", img: techImg("figma") },
      { name: "Sketch", img: techImg("sketch") },
      { name: "Azure", img: techImg("azure") },
    ],
    banner: {
      label: "Overview",
      image: "/images/wp/2025-02/about_o01.jpg",
    },
    overview: {
      heading: "At Globantis Labs, we craft digital experiences that are intuitive, engaging, and user-centric.",
      paragraphs: [
        "We begin by understanding your users, their behavior, and pain points. Through surveys, interviews, and analytics, we create detailed user personas to guide the design process.",
        "We translate concepts into interactive wireframes and prototypes to visualize workflows, test ideas, and gather early feedback. Our team designs modern, visually appealing interfaces with clear navigation and consistent branding. We conduct usability testing to validate design effectiveness and create designs that work seamlessly across devices and screen sizes.",
      ],
    },
    stats: [
      { value: "+38%", label: "Avg conversion uplift" },
      { value: "85+", label: "Lighthouse a11y" },
      { value: "<3", label: "Taps to action" },
      { value: "5-day", label: "Design sprint" },
    ],
    processSteps: {
      label: "Design process",
      heading: "From research to handoff in five phases.",
      intro: "Our design process is research-led and ship-ready. Every phase produces a documented artifact your team can review and reuse.",
      steps: [
        { phase: "01", title: "Discovery & research", duration: "1 week", desc: "Stakeholder interviews, user interviews, analytics review, competitive scan and a written research summary.", deliverables: ["Research plan", "User personas", "Journey map", "Research summary"] },
        { phase: "02", title: "Design sprint", duration: "5 days", desc: "A Google-Variant design sprint: map, sketch, decide, prototype, test. We ship a clickable prototype in one week.", deliverables: ["Sprint agenda", "Sketches", "Clickable prototype", "User test results"] },
        { phase: "03", title: "High-fidelity design", duration: "2–4 weeks", desc: "Pixel-perfect Figma files with components, variants, auto-layout and a design-system token doc.", deliverables: ["Figma source files", "Design system", "Token doc", "Asset library"] },
        { phase: "04", title: "Prototype & test", duration: "1 week", desc: "Usability tests with 5–8 participants. We synthesize findings into a prioritized fix list.", deliverables: ["Test plan", "Session recordings", "Findings report", "Prioritized fixes"] },
        { phase: "05", title: "Dev handoff", duration: "1–2 days", desc: "Hand-off session with engineering. Spec doc, redline annotations, edge-case states and an open Q&A channel.", deliverables: ["Hand-off doc", "Redline annotations", "Edge-case states", "Q&A log"] },
      ],
    },
    useCases: {
      label: "What we design",
      heading: "Six design engagements we ship repeatedly.",
      intro: "These are the design patterns we know cold. The engagement becomes about your brand and content, not the layout system.",
      items: [
        { title: "Marketing site redesign", desc: "Conversion-led, SEO-tuned, CMS-backed marketing sites with a design system.", icon: Globe },
        { title: "SaaS product UX", desc: "Onboarding flows, dashboards, settings, role-based experiences for B2B SaaS.", icon: AppWindow },
        { title: "Mobile app design", desc: "iOS/Android design with native patterns, accessibility, and offline states.", icon: Smartphone },
        { title: "Design systems", desc: "Component libraries, tokens, documentation sites and contribution workflows.", icon: Boxes },
        { title: "Design ops", desc: "Figma workspace setup, plugin stack, design linting, and contributor onboarding.", icon: Cpu },
        { title: "Brand & visual identity", desc: "Logo systems, color, typography, voice and a brand guidelines doc.", icon: Sparkles },
      ],
    },
    deliverables: ["Figma source files", "Design system + tokens", "Clickable prototype", "Usability test report", "Dev hand-off doc", "Asset library", "QA checklist"],
    testimonial: {
      quote: "The design sprint alone saved us 6 weeks. We tested the prototype with 8 users and killed two bad features before writing any code.",
      author: "Head of Product",
      role: "Fintech",
      company: "Confidential client",
    },
  },
  {
    slug: "cms-development",
    icon: Boxes,
    title: "CMS Development",
    shortTitle: "CMS Development",
    desc: "Our ERP and CRM solutions empower organizations to streamline operations, improve customer relationships, and drive data-driven growth.",
    techs: [
      { name: "Juju", img: techImg("juju") },
      { name: "Docker", img: techImg("tek_10") },
      { name: "InfluxDB", img: techImg("influxdb") },
      { name: "React", img: techImg("tek_02") },
    ],
    banner: {
      label: "About Services",
      image: "/images/wp/2025-01/blog_new_03.jpg",
    },
    overview: {
      heading: "ERP/CRM & CMS Solutions - Integrated Enterprise Management and Content Delivery Systems",
      paragraphs: [
        "Comprehensive ERP, CRM, and CMS solutions that empower enterprises to streamline operations, enhance customer relationships, and deliver exceptional content experiences. Our integrated platform brings together enterprise resource planning, customer relationship management, and content management capabilities into one unified system for maximum efficiency and scalability.",
        "We don't ship a one-size-fits-all platform. Every CMS/ERP engagement starts with a workflow discovery — we map your actual operating processes, then configure the platform (or build a custom one) to fit. Code ownership is always yours.",
      ],
    },
    stats: [
      { value: "-40%", label: "Operational cost reduction" },
      { value: "3x", label: "Faster reporting" },
      { value: "100%", label: "Audit trail coverage" },
      { value: "365/24/7", label: "System availability" },
    ],
    processSteps: {
      label: "Implementation process",
      heading: "Five phases to a unified platform.",
      intro: "Our CMS/ERP engagements follow a documented implementation methodology. Every phase produces a deliverable your ops team can review.",
      steps: [
        { phase: "01", title: "Workflow discovery", duration: "1–2 weeks", desc: "We shadow your ops team, document every workflow, and produce a process map with bottlenecks highlighted.", deliverables: ["Process map", "Bottleneck report", "Requirements doc"] },
        { phase: "02", title: "Platform fit analysis", duration: "1 week", desc: "We evaluate build-vs-buy for each module: off-the-shelf vs configured vs custom. You get a written recommendation with TCO.", deliverables: ["Build-vs-buy matrix", "TCO comparison", "Recommendation"] },
        { phase: "03", title: "Configuration & build", duration: "4–12 weeks", desc: "We configure the platform (or build custom modules), migrate data, and integrate with your stack. Weekly demos.", deliverables: ["Configured platform", "Data migration", "Integrations", "Weekly demos"] },
        { phase: "04", title: "User training", duration: "1 week", desc: "Role-based training sessions, recorded videos, a self-service knowledge base and a power-user program.", deliverables: ["Training sessions", "Video library", "Knowledge base", "Power-user program"] },
        { phase: "05", title: "Go-live & hyper-care", duration: "30 days", desc: "Production go-live, 30-day hyper-care with daily check-ins, then transition to steady-state operations.", deliverables: ["Go-live runbook", "30-day hyper-care", "Quarterly roadmap"] },
      ],
    },
    useCases: {
      label: "What we build",
      heading: "Six enterprise platform patterns we ship.",
      intro: "These are the platform engagements we know cold. Every one ships with code ownership transferred to your team.",
      items: [
        { title: "Headless CMS", desc: "Contentful / Sanity / Strapi / custom — headless CMS with a design system and preview.", icon: Boxes },
        { title: "Custom CRM", desc: "Custom CRM built around your sales process, with pipeline, automation and reporting.", icon: Users },
        { title: "ERP modules", desc: "Inventory, orders, billing, HR, finance — built or configured to your operating model.", icon: BarChart3 },
        { title: "Workflow automation", desc: "Approval flows, document routing, notifications — automated and audit-logged.", icon: Workflow },
        { title: "Reporting & BI", desc: "Real-time dashboards, scheduled reports, exports — built on your data warehouse.", icon: LineChart },
        { title: "Integration layer", desc: "API gateway, ETL, webhooks — connect your stack into one platform.", icon: Network },
      ],
    },
    deliverables: ["Configured/custom platform", "Source code in your git", "Data migration scripts", "Integration layer", "Training materials", "Knowledge base", "30-day hyper-care"],
    testimonial: {
      quote: "We replaced a $2M/yr SaaS contract with a custom CRM Globantis built in 14 weeks. Payback in 11 months.",
      author: "VP Operations",
      role: "B2B logistics",
      company: "Confidential client",
    },
    benefits: {
      label: "Why Choose Services",
      heading: "Why Choose Our ERP/CRM & CMS Solutions",
      features: [
        {
          title: "Integrated Platform",
          desc: "Unified ERP, CRM, and CMS platform eliminating silos and enabling seamless data flow across your entire enterprise.",
        },
        {
          title: "Enterprise Scalability",
          desc: "Grow your business with a platform that scales from small operations to large enterprises without compromise.",
        },
        {
          title: "Channel Integration",
          desc: "Connect all your business channels through one unified ERP, CRM, and CMS platform for consistent customer experiences.",
        },
        {
          title: "Skilled Workforce",
          desc: "Our team is composed of highly qualified professionals with deep expertise across enterprise platforms and integrations.",
        },
      ],
    },
  },
  {
    slug: "it-support",
    icon: ShieldCheck,
    title: "IT Support and Services",
    shortTitle: "IT Support",
    desc: "We provide reliable, scalable, and proactive IT support services to ensure your business operations run smoothly, securely, and without interruption.",
    techs: [
      { name: "Juju", img: techImg("juju") },
      { name: "Docker", img: techImg("tek_10") },
      { name: "InfluxDB", img: techImg("influxdb") },
      { name: "React", img: techImg("tek_02") },
    ],
    banner: {
      label: "Core Features",
    },
  },
  {
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    shortTitle: "AI",
    desc: "We help organizations harness AI and Machine Learning to automate operations, enhance decision-making, and unlock new business opportunities.",
    techs: [
      { name: "Keras", img: techImg("keras") },
      { name: "Plotly", img: techImg("plotly") },
      { name: "Grafana", img: techImg("grafana") },
      { name: "InfluxDB", img: techImg("influxdb") },
    ],
    banner: {
      label: "Services",
    },
    overview: {
      heading: "AI-driven Services That Adopted Across Different Industries",
      paragraphs: [
        "From AI-powered customer support to predictive analytics and intelligent automation, our AI services are deployed across financial services, healthcare, retail and logistics. We design, train and operate models that compound value — and ship them with the observability and governance that production systems require.",
        "Every AI engagement starts with a feasibility study: data audit, business-value mapping, build-vs-buy on models, and a written ROI projection. We ship to production only when the model earns its keep — and we operate it like any other production system, with versioning, monitoring and rollback.",
      ],
    },
    stats: [
      { value: "30+", label: "Production ML systems" },
      { value: "92%", label: "Avg model precision" },
      { value: "<200ms", label: "Inference latency" },
      { value: "MLOps", label: "CI/CD for models" },
    ],
    processSteps: {
      label: "AI delivery process",
      heading: "From feasibility to production model — five phases.",
      intro: "We follow an MLOps discipline. Models are versioned, monitored and rolled back like any other production artifact.",
      steps: [
        { phase: "01", title: "Feasibility & data audit", duration: "1–2 weeks", desc: "We audit your data, map business value, evaluate build-vs-buy on models, and produce a written ROI projection.", deliverables: ["Data audit", "ROI projection", "Build-vs-buy matrix", "Feasibility report"] },
        { phase: "02", title: "Pilot & proof", duration: "2–4 weeks", desc: "We train a baseline model on real data, evaluate precision/recall, and ship a working pilot you can poke at.", deliverables: ["Baseline model", "Evaluation report", "Pilot UI", "Pilot demo"] },
        { phase: "03", title: "Production build", duration: "4–8 weeks", desc: "Production model + inference API + monitoring + drift detection + rollback. Models versioned like code.", deliverables: ["Model artifact", "Inference API", "Drift dashboard", "Rollback playbook"] },
        { phase: "04", title: "Operations & monitoring", duration: "Ongoing", desc: "24/5 monitoring of model health, drift, latency, precision. Quarterly model retraining cadence.", deliverables: ["Model SLOs", "Drift alerts", "Quarterly retraining", "Quarterly model report"] },
        { phase: "05", title: "Continuous improvement", duration: "Ongoing", desc: "A/B tests against the production model, new feature engineering, periodic re-evaluation of build-vs-buy.", deliverables: ["A/B test results", "Feature engineering", "Updated model", "Updated roadmap"] },
      ],
    },
    useCases: {
      label: "What we ship",
      heading: "Six AI patterns we ship repeatedly.",
      intro: "These are the AI engagements we know cold. Every one ships with MLOps — versioning, monitoring, rollback.",
      items: [
        { title: "AI customer support", desc: "Chatbots and assistants that handle L1 tickets end-to-end, with human handoff.", icon: Bot },
        { title: "Predictive analytics", desc: "Forecast demand, churn, risk — production models with feature stores and retraining.", icon: BarChart3 },
        { title: "Computer vision", desc: "Defect detection, OCR, medical imaging — models deployed at edge or cloud.", icon: Microscope },
        { title: "NLP & document AI", desc: "Document classification, extraction, summarization — RAG pipelines with audit logs.", icon: FileText },
        { title: "Fraud detection", desc: "Real-time scoring of transactions with explainability for compliance.", icon: ShieldCheck },
        { title: "RPA & automation", desc: "Bots that handle repetitive workflows across legacy + SaaS systems.", icon: Bot },
      ],
    },
    deliverables: ["Production model artifact", "Inference API", "Feature store", "Drift monitoring", "MLOps pipeline", "Model SLOs", "Quarterly retraining cadence"],
    testimonial: {
      quote: "They shipped our fraud-detection model in 10 weeks. Precision 94%, false-positive rate cut by 60%, ROI in 5 months.",
      author: "Head of Risk",
      role: "Fintech",
      company: "Confidential client",
    },
    subServices: {
      label: "Our services",
      heading: "AI-Powered Solutions for Every Industry",
      items: [
        {
          title: "AI-Powered Customer Support",
          desc: "Transform customer service with AI-powered chatbots and intelligent automation. Enhance support quality, reduce response times, and deliver 24/7 customer assistance.",
        },
        {
          title: "AI Solutions for Healthcare",
          desc: "Leverage AI technology to optimize patient care, improve diagnostic accuracy, and streamline healthcare operations with machine learning-driven insights.",
        },
        {
          title: "Predictive Analytics & Forecasting",
          desc: "Harness machine learning algorithms to identify trends and forecast future outcomes. Enable data-informed decision-making and strategic business planning.",
        },
        {
          title: "Fraud Detection & Cybersecurity",
          desc: "Protect your business with AI-driven fraud detection and real-time threat monitoring. Utilize advanced algorithms to identify suspicious patterns and prevent security breaches.",
        },
        {
          title: "Intelligent Automation & RPA",
          desc: "Automate repetitive tasks with robotic process automation and AI-driven workflows. Increase operational efficiency, reduce costs, and free up resources for strategic initiatives.",
        },
        {
          title: "Financial Planning & Investment",
          desc: "Optimize financial strategies with AI-powered investment insights and predictive market analysis. Make smarter decisions with algorithmic portfolio management and risk assessment.",
        },
      ],
    },
    benefits: {
      heading: "Key Benefits of AI Technology",
      intro:
        "Discover how artificial intelligence and machine learning technologies are revolutionizing business productivity, reducing operational costs, and driving innovation across every industry sector.",
      features: [
        {
          title: "Increased Efficiency & Productivity",
          desc: "Automate repetitive tasks and free your teams to focus on high-value strategic work, dramatically improving throughput.",
        },
        {
          title: "Smarter Decision-Making",
          desc: "Turn vast volumes of data into actionable, real-time insight with predictive models and AI-driven analytics.",
        },
        {
          title: "Reduced Operational Costs",
          desc: "Optimize resource allocation, minimize manual effort, and lower costs through intelligent automation at scale.",
        },
        {
          title: "Enhanced Customer Experience",
          desc: "Deliver personalized, context-aware experiences with AI recommendation engines and conversational interfaces.",
        },
        {
          title: "Continuous Innovation",
          desc: "Stay ahead of the market with AI that learns and adapts, unlocking new products, services, and revenue streams.",
        },
      ],
    },
  },
  {
    slug: "app-development",
    icon: Smartphone,
    title: "App Development",
    shortTitle: "App Development",
    desc: "We develop high-performance mobile applications that deliver consistent user experiences across Android and iOS devices worldwide.",
    techs: [
      { name: "Swift", img: techImg("tek_04") },
      { name: "Kotlin", img: techImg("tek_06") },
      { name: "Flutter", img: techImg("tek_05") },
      { name: "React Native", img: techImg("tek_07") },
    ],
    banner: {
      label: "Mobile Apps",
    },
    overview: {
      heading: "Cross-Platform Mobile Apps Built for Performance",
      paragraphs: [
        "We engineer native and cross-platform mobile applications that deliver consistent, high-performance experiences across iOS and Android. From concept to launch, our apps are designed for speed, security, and scalability.",
        "Every mobile engagement ships with a documented release process: CI/CD to TestFlight + Play Store internal, automated screenshots, beta channels, staged rollout, and instant rollback. We treat mobile like production software — because it is.",
      ],
    },
    stats: [
      { value: "<1.5s", label: "Cold-start time" },
      { value: "60fps", label: "Animation target" },
      { value: "4.8★", label: "Avg store rating" },
      { value: "99.5%", label: "Crash-free sessions" },
    ],
    processSteps: {
      label: "Mobile delivery process",
      heading: "Five phases from concept to App Store.",
      intro: "Our mobile engagements follow an MLOps-like discipline. Every release is versioned, tested, staged and rollback-ready.",
      steps: [
        { phase: "01", title: "Discovery & UX", duration: "1–2 weeks", desc: "User research, wireframes, clickable prototype, platform guidelines audit.", deliverables: ["User research", "Wireframes", "Clickable prototype", "Platform audit"] },
        { phase: "02", title: "Build sprint zero", duration: "1 week", desc: "Repo scaffolding, CI/CD to TestFlight + Play Internal, observability, beta channel.", deliverables: ["Git repo", "CI/CD pipeline", "Beta channel", "Observability SDK"] },
        { phase: "03", title: "Feature sprints", duration: "2-week cycles", desc: "Feature development with weekly TestFlight builds. Every Friday demo what shipped.", deliverables: ["Weekly TestFlight", "Sprint demo", "Burndown", "Release notes"] },
        { phase: "04", title: "Beta & polish", duration: "2 weeks", desc: "Closed beta with 50–200 users, crash reporting, performance budgets, store assets.", deliverables: ["Beta program", "Crash report", "Store assets", "Performance report"] },
        { phase: "05", title: "Launch & operate", duration: "1 week + ongoing", desc: "Staged rollout (1% → 10% → 50% → 100%), instant rollback, monthly ops review.", deliverables: ["Staged rollout", "Rollback playbook", "Monthly ops report"] },
      ],
    },
    useCases: {
      label: "What we build",
      heading: "Six mobile patterns we ship repeatedly.",
      intro: "These are the mobile engagements we know cold. Every one ships with CI/CD, staged rollout, and instant rollback.",
      items: [
        { title: "Consumer iOS / Android", desc: "Native Swift / Kotlin apps for consumer audiences with strong brand presence.", icon: Smartphone },
        { title: "Cross-platform (React Native / Flutter)", desc: "One codebase, both platforms — for when speed-to-market beats pure native.", icon: AppWindow },
        { title: "Enterprise mobile", desc: "Internal apps for field teams, sales, operations — with offline-first and MDM.", icon: Briefcase },
        { title: "Wearable & watchOS", desc: "Companion apps for Apple Watch, Wear OS — sensor data, notifications, complications.", icon: Watch },
        { title: "Mobile commerce", desc: "Shopping apps with checkout, payments, push, deep-linking and AR try-on.", icon: ShoppingCart },
        { title: "IoT companion apps", desc: "Apps that pair with hardware over BLE / Wi-Fi — onboarding, control, OTA updates.", icon: Cpu },
      ],
    },
    deliverables: ["Production app in App Store + Play Store", "Source code in your git", "CI/CD to TestFlight + Play Internal", "Crash + analytics SDK", "Staged rollout playbook", "Instant rollback capability", "Monthly ops report"],
    testimonial: {
      quote: "They shipped our cross-platform app in 16 weeks. 4.8★ on both stores, 99.6% crash-free, instant rollback saved us twice.",
      author: "VP Mobile",
      role: "Retail",
      company: "Confidential client",
    },
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Custom Software Development",
    shortTitle: "Software Dev",
    desc: "We build enterprise-grade, custom software solutions designed to meet unique business requirements.",
    techs: [
      { name: "Java", img: techImg("tek_04") },
      { name: "Python", img: techImg("tek_06") },
      { name: "Go", img: techImg("tek_05") },
      { name: "C#", img: techImg("tek_07") },
    ],
    banner: {
      label: "Software Development",
      image: "/images/wp/2024-09/ser_details.jpg",
    },
    overview: {
      heading: "Service Overview",
      paragraphs: [
        "At Globantis Labs, we specialize in delivering end-to-end software development services that transform ideas into high-quality digital solutions. Our expertise spans custom software, web and mobile applications, cloud-based systems, enterprise solutions, and AI-driven platforms, ensuring that every product is designed to meet the unique needs of our global clients.",
        "We follow agile methodologies and best industry practices to deliver projects efficiently while maintaining flexibility to adapt to changing requirements. Our development process emphasizes scalability, security, and performance, enabling businesses to grow without technical constraints.",
        "Every custom software engagement starts with an architecture review — we don't write a line of production code until we've documented the trade-offs, the alternatives, and the failure modes. You get the architecture decision records (ADRs) in writing, signed off, before the first commit.",
      ],
    },
    stats: [
      { value: "250+", label: "Projects delivered" },
      { value: "12+", label: "Countries served" },
      { value: "92%", label: "On-time delivery" },
      { value: "100%", label: "Code ownership transfer" },
    ],
    processSteps: {
      label: "Delivery process",
      heading: "Five phases from architecture to handover.",
      intro: "Our custom software engagements follow a documented delivery methodology. Every phase produces a tangible artifact your team can review.",
      steps: [
        { phase: "01", title: "Architecture review", duration: "1–2 weeks", desc: "We document the architecture, alternatives, failure modes, and ADRs. You sign off before code is written.", deliverables: ["Architecture diagram", "ADR docs", "Risk register", "Tech stack recommendation"] },
        { phase: "02", title: "Sprint zero", duration: "1 week", desc: "Repo scaffolding, CI/CD pipeline, observability, staging environment, hello-world deploy.", deliverables: ["Git repo", "CI/CD pipeline", "Staging URL", "Observability stack"] },
        { phase: "03", title: "Feature sprints", duration: "2-week cycles", desc: "Feature development in two-week sprints. Every Friday demo, every sprint review with your team.", deliverables: ["Working software", "Sprint demos", "Burndown", "Release notes"] },
        { phase: "04", title: "Hardening & UAT", duration: "2 weeks", desc: "Performance testing, security scan, UAT with your team, bug bash, and a documented go/no-go decision.", deliverables: ["Perf test report", "Security scan", "UAT sign-off", "Go/no-go decision"] },
        { phase: "05", title: "Launch & handover", duration: "1 week + 30 days", desc: "Production deploy, runbook, knowledge transfer to your team, 30-day hyper-care with daily check-ins.", deliverables: ["Production deploy", "Runbook", "KT session", "30-day hyper-care"] },
      ],
    },
    useCases: {
      label: "What we build",
      heading: "Six custom software patterns we ship.",
      intro: "These are the engagements we know cold. Every one ships with ADRs, code ownership transferred, and a 30-day hyper-care window.",
      items: [
        { title: "Greenfield product", desc: "0→1 product engineering — from idea to production in 12–24 weeks.", icon: Rocket },
        { title: "Legacy modernization", desc: "Replace aging systems with modern, cloud-native architectures — feature parity, no disruption.", icon: RefreshCw },
        { title: "Enterprise platforms", desc: "Multi-tenant B2B platforms with RBAC, audit, compliance — built to scale to 10M+ users.", icon: AppWindow },
        { title: "API & integration layer", desc: "API gateways, ETL, webhooks, event streams — connect your stack into one platform.", icon: Network },
        { title: "Real-time systems", desc: "Chat, collaboration, dashboards — WebSockets, event sourcing, live updates at scale.", icon: Zap },
        { title: "Compliance-heavy systems", desc: "Healthcare (HIPAA), fintech (SOC2), public sector — built with audit trails from day one.", icon: ShieldCheck },
      ],
    },
    deliverables: ["Source code in your git", "ADRs (architecture decision records)", "CI/CD pipeline", "Staging + production environments", "Runbook + on-call rotation", "30-day hyper-care", "Knowledge-transfer session"],
    testimonial: {
      quote: "They shipped our enterprise platform in 18 weeks. 92% on-time, 100% code ownership transferred. The ADRs alone were worth the engagement.",
      author: "VP Engineering",
      role: "B2B SaaS",
      company: "Confidential client",
    },
    benefits: {
      label: "Benefits",
      heading: "Benefits Our Services",
      intro:
        "Partnering with Globantis Labs means gaining a reliable technology partner who understands international business standards, compliance requirements, and global market dynamics. We not only deliver software solutions but also provide ongoing support, enhancements, and strategic guidance to help clients stay ahead in an ever-evolving digital landscape.",
      bullets: [
        "Big Data Consulting",
        "Managed IT Services",
        "Best Value Solutions",
        "Digital Transformation",
        "Digital Innovation",
        "Cutting-Edge IT",
      ],
      closing:
        "From conceptualization and prototyping to development, testing, and deployment, we ensure each stage is handled with precision, transparency, and collaboration. Our teams focus on creating intuitive user experiences, robust architectures, and maintainable code that supports long-term business objectives.",
      images: [
        "/images/wp/2025-01/project_new_05.jpg",
        "/images/wp/2025-01/project_new_02.jpg",
        "/images/wp/2025-01/project_new_06.jpg",
      ],
    },
  },
];

export type WhyFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const whyFeatures: WhyFeature[] = [
  {
    icon: Cpu,
    title: "Expertise & Specialization",
    desc: "We bring deep technical expertise and industry-focused specialization to deliver innovative digital solutions at a global scale.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    desc: "We leverage cutting-edge technologies to build intelligent, scalable, and future-ready digital solutions.",
  },
  {
    icon: Lock,
    title: "Security & Risk Management",
    desc: "Security and risk management are integral to everything we build. We adopt a proactive, security-first approach to protect digital assets, ensure data privacy, and mitigate risks across the entire technology lifecycle—enabling our global clients to operate with confidence.",
  },
  {
    icon: Scale,
    title: "Scalability & Flexibility",
    desc: "We design software solutions that grow with your business. Our scalable and flexible architectures ensure that applications adapt seamlessly to changing demands, enabling organizations to expand, innovate, and respond quickly in dynamic global markets.",
  },
];

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "30+", label: "Tech Experts" },
];

export const techLogos = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "Python",
  "TensorFlow",
  "Figma",
  "GitLab",
  "Azure",
];

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Work Process", href: "/work-process" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export const footerIndustries = [
  { label: "Automation", href: "/industries/automation" },
  { label: "Education", href: "/industries/education" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Logistics", href: "/industries/logistics" },
];

// ===== Industries data =====

export type Industry = {
  slug: string;
  title: string;
  label?: string;
  bannerImage?: string;
  heroHeading?: string;
  intro?: string;
  /** Lucide icon used on the industries landing cards + the "other industries" footer strip */
  icon?: LucideIcon;
  /** Short marketing tagline for the landing card */
  tagline?: string;
  /** 3 mini "focus area" tags rendered on the landing card */
  focusAreas?: string[];
  /** Stats counter row — financial-services showcase */
  stats?: { value: string; label: string }[];
  /** Care pillars grid — healthcare showcase */
  pillars?: { icon: LucideIcon; title: string; desc: string }[];
  /** Patient journey horizontal strip — healthcare showcase */
  journey?: { icon: LucideIcon; title: string; desc: string }[];
  /** Numbered learning pathway steps (01→05) — education showcase */
  pathway?: { title: string; desc: string }[];
  /** Platform features 3-column grid — education showcase */
  platformFeatures?: { icon: LucideIcon; title: string; desc: string }[];
  /** Horizontal supply-chain flow nodes — logistics showcase */
  flow?: { icon: LucideIcon; label: string; desc: string }[];
  /** Tech-enabler chips strip — logistics showcase */
  techEnablers?: { icon: LucideIcon; name: string; desc: string }[];
  /** Security layers stack — cybersecurity showcase */
  layers?: {
    icon: LucideIcon;
    title: string;
    desc: string;
    coverage: number;
  }[];
  /** Omnichannel chips — ecommerce showcase */
  channels?: { icon: LucideIcon; label: string }[];
  /** Commerce KPI strip — ecommerce showcase */
  ecommerceMetrics?: { value: string; label: string; trend?: string }[];
  /** Workflow diagram steps — automation showcase */
  workflow?: { icon: LucideIcon; label: string; desc: string }[];
  sections?: {
    label?: string;
    heading: string;
    paragraphs?: string[];
    image?: string;
  }[];
  subIndustries?: {
    heading: string;
    image?: string;
    items: { title: string; desc: string; image?: string }[];
  };
  /** True when the unique showcase module already renders every
   *  subIndustries item (e.g. financial-services tabs) — the generic
   *  grid on the detail page is skipped to avoid duplicate content. */
  showcaseCoversSubIndustries?: boolean;
  faq?: {
    label?: string;
    heading: string;
    image?: string;
    items: { q: string; a: string; image?: string }[];
  };
  cta?: {
    label?: string;
    heading?: string;
    paragraphs?: string[];
    button?: string;
    image?: string;
  };
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    label: "Financial Services",
    icon: Landmark,
    tagline: "Banking, capital markets & fintech — modernized end-to-end.",
    focusAreas: ["Banking", "Capital Markets", "Fintech"],
    heroHeading: "Shaping the Next Era of Financial Services with AI at the Core",
    intro:
      "In financial services, transformation is no longer a choice—it is a continuous necessity. Institutions face rising customer expectations, evolving risk landscapes, regulatory complexity, and the urgent need to modernize legacy systems.",
    stats: [
      { value: "$12T+", label: "Assets processed annually" },
      { value: "40%", label: "Operational cost reduction" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "12+", label: "Countries served" },
    ],
    // The financial showcase renders all three subIndustries as tabs,
    // so the generic "Areas We Serve" grid would duplicate them.
    showcaseCoversSubIndustries: true,
    subIndustries: {
      heading: "Areas We Serve",
      items: [
        {
          title: "Insurance",
          desc: "Embrace the future of insurance by protecting what matters most to your customers through our technology, expertise, and ecosystem.",
          image: "/images/wp/2024-09/ser_details.jpg",
        },
        {
          title: "Capital Market",
          desc: "Cultivate sustainable, long-term growth and resilience with a comprehensive suite of digital tools and technologies.",
          image: "/images/wp/2025-01/blog_new_03.jpg",
        },
        {
          title: "Fintech",
          desc: "Combine the strengths of traditional and neo banking to deliver innovative experiences while achieving significant cost efficiencies.",
          image: "/images/wp/2025-01/blog_new_05.jpg",
        },
      ],
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    tagline: "Patient-centric care, empowered by AI, data & genomics.",
    focusAreas: ["Telemedicine", "AI Diagnostics", "Genomics"],
    bannerImage: "/images/wp/2025-02/about_o01.jpg",
    pillars: [
      {
        icon: Video,
        title: "Telemedicine",
        desc: "Secure, HIPAA-ready virtual care platforms that extend clinician reach and put patients at the center of every encounter.",
      },
      {
        icon: BrainCircuit,
        title: "AI Diagnostics",
        desc: "Machine-learning models that flag anomalies in imaging, labs and vitals earlier — augmenting clinician accuracy and speed.",
      },
      {
        icon: Dna,
        title: "Genomics",
        desc: "Bioinformatics pipelines & personalized medicine platforms that translate genomic data into targeted, evidence-based therapies.",
      },
      {
        icon: ShieldCheck,
        title: "Data Security",
        desc: "Zero-trust architecture for PHI — encryption, identity governance and audit trails that keep sensitive records safe.",
      },
    ],
    journey: [
      {
        icon: CalendarCheck,
        title: "Schedule",
        desc: "Smart appointment matching across providers, time zones and modalities.",
      },
      {
        icon: Video,
        title: "Consult",
        desc: "HD virtual visits with collaborative notes and device integration.",
      },
      {
        icon: Microscope,
        title: "Diagnose",
        desc: "AI-assisted review of imaging, labs and patient history.",
      },
      {
        icon: HeartPulse,
        title: "Recover",
        desc: "Remote monitoring and follow-ups that close the care loop.",
      },
    ],
    sections: [
      {
        heading: "Technology Driving the Future of Patient Care",
        paragraphs: [
          "Personalized healthcare, innovative care delivery models, rising cost pressures, and evolving regulatory requirements are reshaping the healthcare landscape. In this dynamic environment, technology is playing a critical role in advancing patient outcomes and operational efficiency.",
          "From telemedicine to AI-powered diagnostics, technological innovation is redefining how care is delivered and how diseases are detected. Breakthroughs in genomic research are unlocking the potential of personalized medicine, while advances in biotechnology are enabling the development of next-generation therapies.",
          "Despite this progress, challenges around affordability, accessibility, and data security remain at the forefront.",
          "We help healthcare organizations modernize their digital ecosystems, integrate fragmented systems, and align processes, technology, and people—empowering them to deliver smarter, safer, and more patient-centric care.",
        ],
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    tagline: "Scalable, accessible, personalized learning pathways.",
    focusAreas: ["Virtual Classrooms", "AI Learning", "Cloud LMS"],
    pathway: [
      {
        title: "Learner Onboarding",
        desc: "Adaptive profiles, skill diagnostics and goal-setting that tailor the journey to each learner from day one.",
      },
      {
        title: "Personalized Learning",
        desc: "AI-curated content paths adjust pace, modality and difficulty in real time based on engagement signals.",
      },
      {
        title: "Live & Async Delivery",
        desc: "Virtual classrooms, breakout rooms and async micro-lessons unified into a single collaboration surface.",
      },
      {
        title: "Continuous Assessment",
        desc: "Formative analytics, proctored exams and competency maps that make mastery visible and measurable.",
      },
      {
        title: "Outcome & Career Path",
        desc: "Credentialing, employer pathways and alumni networks that connect learning to lifelong opportunity.",
      },
    ],
    platformFeatures: [
      {
        icon: Laptop,
        title: "Cloud-Native LMS",
        desc: "Multi-tenant, scalable learning management built on cloud infrastructure — resilient across regions and devices.",
      },
      {
        icon: BarChart3,
        title: "Learning Analytics",
        desc: "Real-time engagement, dropout risk and mastery dashboards that turn learning data into action.",
      },
      {
        icon: ShieldCheck,
        title: "Student Data Privacy",
        desc: "FERPA / GDPR-aligned controls, SSO and encryption that protect minors, families and institutions.",
      },
    ],
    sections: [
      {
        heading: "Transforming Education Through Technology",
        paragraphs: [
          "The education sector is evolving rapidly, driven by digital learning, changing student expectations, and the need for scalable, accessible education models. Institutions are balancing innovation with affordability, data privacy, and regulatory compliance—all while striving to deliver meaningful learning experiences.",
        ],
        image: "/images/wp/2025-04/testimonials.jpg",
      },
      {
        label: "Approach",
        heading: "Future-Ready, Inclusive & Secure Digital Campuses",
        paragraphs: [
          "Technology is reshaping education through virtual classrooms, AI-powered learning platforms, learning analytics, and personalized education pathways. Cloud-based systems and digital collaboration tools are enabling institutions to expand access, improve engagement, and enhance academic outcomes. Despite these advancements, challenges such as digital inequality, system integration, cybersecurity risks, and data protection continue to impact educational environments. We help educational institutions modernize their digital infrastructure, integrate learning systems, secure sensitive data, and align technology with educators and learners—empowering smarter, more inclusive, and future-ready education.",
        ],
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    tagline: "End-to-end supply chain visibility, velocity & resilience.",
    focusAreas: ["Supply Chain", "5G & Cloud", "Blockchain"],
    flow: [
      {
        icon: PackageCheck,
        label: "Source",
        desc: "Supplier onboarding, contracts, ESG screening & demand-sensing that start the chain right.",
      },
      {
        icon: Truck,
        label: "Move",
        desc: "Fleet telematics, route optimization and carrier collaboration across modes and borders.",
      },
      {
        icon: Warehouse,
        label: "Store",
        desc: "Smart warehouses with WMS, slotting AI and robotics for accurate, low-latency fulfillment.",
      },
      {
        icon: MapPin,
        label: "Deliver",
        desc: "Last-mile orchestration with real-time ETA, proof-of-delivery and customer self-service.",
      },
      {
        icon: LineChart,
        label: "Optimize",
        desc: "Continuous tuning via digital twin simulations, KPI dashboards and GenAI co-pilots.",
      },
    ],
    techEnablers: [
      { icon: Cloud, name: "Cloud", desc: "Elastic control towers" },
      { icon: Wifi, name: "5G", desc: "Real-time telematics" },
      { icon: Sparkles, name: "GenAI", desc: "Conversational planning" },
      { icon: Link2, name: "Blockchain", desc: "Provenance & trust" },
    ],
    sections: [
      {
        heading: "IT Solution for Travel, Transportation, Logistics and Hospitality",
        paragraphs: [
          "AI-powered engagement, hyper-personalized and connected experiences, and increasing supply chain pressures are redefining the travel, transportation, logistics, and hospitality industries.",
        ],
        image: "/images/wp/2025-01/why_choose01.jpg",
      },
      {
        label: "Overview",
        heading: "Making digital work for real people",
        paragraphs: [
          "Modern travel and logistics technologies are transforming business outcomes. From hospitality IT solutions that elevate guest experiences to end-to-end logistics management platforms that improve efficiency and reliability, the industry is evolving rapidly. Our deep travel and logistics expertise—combined with advanced technology capabilities—helps organizations optimize operations while driving sustainable digital transformation.",
          "At the same time, technology is accelerating supply chain velocity. Advanced transportation solutions are helping organizations reduce costs by enabling real-time visibility and seamless information sharing between trading partners and service providers. Now is the time to rethink traditional frameworks, processes, and systems. Targeted investments in cloud platforms, 5G connectivity, Generative AI, and blockchain enable organizations to deliver the seamless, personalized experiences today's customers expect.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    label: "Cybersecurity",
    icon: ShieldCheck,
    tagline: "Defense-in-depth — from network edge to human firewall.",
    focusAreas: ["Network", "Application", "Data", "Human"],
    bannerImage: "/images/wp/2025-02/about_mna00n.jpg",
    layers: [
      {
        icon: Network,
        title: "Network Security",
        desc: "Zero-trust segmentation, next-gen firewalls, SASE and continuous east-west traffic monitoring.",
        coverage: 98,
      },
      {
        icon: AppWindow,
        title: "Application Security",
        desc: "Shift-left SAST/DAST, SCA, RASP and runtime API protection across the SDLC.",
        coverage: 95,
      },
      {
        icon: Lock,
        title: "Data Protection",
        desc: "Encryption everywhere, tokenization, DLP and immutable backup for resilience & compliance.",
        coverage: 99,
      },
      {
        icon: Users,
        title: "Human Firewall",
        desc: "Phishing simulations, security awareness training and behavioral analytics for every employee.",
        coverage: 92,
      },
    ],
    sections: [
      {
        heading: "Comprehensive Cybersecurity Solutions for Modern Enterprises",
        paragraphs: [
          "In an era of increasing cyber threats and digital transformation, Globantis delivers advanced cybersecurity solutions that protect businesses from complex and evolving risks. Our security-first approach ensures confidentiality, integrity, and availability of critical systems while enabling organizations to scale securely.",
        ],
      },
    ],
    faq: {
      label: "What We Secure",
      heading: "What We Secure",
      image: "/images/wp/2025-02/faq00.jpg",
      items: [
        {
          q: "What Cybersecurity Solutions Do You Offer?",
          a: "We provide comprehensive cybersecurity solutions including threat assessment, penetration testing, security infrastructure design, incident response planning, and employee security awareness training. Our team of certified security experts ensures your organization is protected against evolving cyber threats.",
          image: "/images/wp/2025-02/technology1.png",
        },
        {
          q: "How Do You Identify Weaknesses in Our Network?",
          a: "Our certified ethical hackers conduct rigorous penetration testing to simulate real-world cyberattacks. We perform deep-layer scans of your applications and infrastructure to uncover hidden vulnerabilities, providing you with a prioritized remediation roadmap to close security gaps before they are exploited.",
          image: "/images/wp/2025-02/concept.png",
        },
        {
          q: "Can You Help Us Meet Regulatory Standards (ISO, SOC2, GDPR)?",
          a: "Yes. We streamline the path to compliance by conducting thorough gap analyses and implementing the necessary technical and administrative controls. Our team ensures your organization meets industry-specific standards, reducing legal liability and building trust with your global clients.",
          image: "/images/wp/2025-02/start-up.png",
        },
        {
          q: "How Do You Protect Against Human-Error and Phishing?",
          a: "We transform your employees into your strongest line of defense. Our program includes simulated phishing campaigns, interactive security training modules, and ongoing behavioral analysis to ensure your team can recognize and report sophisticated social engineering attacks.",
          image: "/images/wp/2025-02/technology.png",
        },
      ],
    },
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Retail",
    label: "E-commerce & Retail",
    icon: ShoppingCart,
    tagline: "Omnichannel commerce that converts on every touchpoint.",
    focusAreas: ["Omnichannel", "Personalization", "Payments"],
    heroHeading: "Trustworthy, Scalable, & Optimized E-commerce & Retail Development.",
    channels: [
      { icon: Globe, label: "Web" },
      { icon: Smartphone, label: "Mobile App" },
      { icon: ShoppingBag, label: "Marketplaces" },
      { icon: Share2, label: "Social" },
      { icon: CreditCard, label: "POS" },
      { icon: Mic, label: "Voice" },
    ],
    ecommerceMetrics: [
      { value: "+38%", label: "Conversion Uplift", trend: "vs. baseline" },
      { value: "0.8s", label: "Page Speed (LCP)" },
      { value: "-27%", label: "Cart Abandonment" },
    ],
    cta: {
      paragraphs: [
        "Increased automation, experience-driven engagement, and data-powered decision-making are redefining modern retail. As customer expectations continue to rise, retailers must deliver seamless, personalized experiences across every touchpoint.",
        "To succeed in this evolving landscape, you need a retail solutions partner who can guide you through emerging digital technologies and help maximize return on investment by adopting the right platforms at the right time.",
      ],
      button: "Let's Talk Project",
      image: "/images/wp/2024-10/web.gif",
    },
    sections: [
      {
        label: "Digital Commerce",
        heading: "Powering the future of Digital Commerce",
        paragraphs: [
          "E-commerce continues to evolve at speed, driven by changing customer behaviors, rising expectations for seamless experiences, and increasing competition across digital marketplaces. To succeed, businesses must deliver fast, secure, and personalized commerce experiences at scale.",
          "Technology is at the heart of this transformation. From AI-driven personalization and data-led decision-making to automation, cloud platforms, and secure digital payments, modern e-commerce ecosystems demand agility and resilience.",
        ],
      },
    ],
  },
  {
    slug: "automation",
    title: "Automation",
    label: "Overview",
    icon: Workflow,
    tagline: "Eliminate manual effort & optimize operations intelligently.",
    focusAreas: ["Intelligent", "Process", "RPA"],
    heroHeading:
      "Automation solutions designed to eliminate manual effort and optimize business operations.",
    workflow: [
      {
        icon: Zap,
        label: "Trigger",
        desc: "Event, schedule or API signal kicks off the workflow.",
      },
      {
        icon: BrainCircuit,
        label: "AI Decision",
        desc: "Models classify intent, score risk & route the request.",
      },
      {
        icon: Bot,
        label: "Bot Action",
        desc: "RPA bots execute tasks across legacy & SaaS systems.",
      },
      {
        icon: MonitorCheck,
        label: "Monitor",
        desc: "Live observability, alerts & exception handling.",
      },
      {
        icon: RefreshCw,
        label: "Optimize",
        desc: "Loop telemetry back into the model for continuous tuning.",
      },
    ],
    subIndustries: {
      heading: "Our Automation Services",
      items: [
        {
          title: "Intelligent Automation Powering the Future of Business",
          desc: "Automation is no longer about task efficiency alone—it is about building intelligent, adaptive, and scalable enterprises. Organizations today are leveraging automation to simplify complexity, accelerate innovation, and respond faster to changing market demands.",
          image: "/images/wp/2025-04/services_01.jpg",
        },
        {
          title: "Intelligent Automation",
          desc: "By combining AI, machine learning, and automation, we build smart systems that can analyze data, make decisions, and adapt over time. This enables predictive insights, automated decision-making, and enhanced operational intelligence.",
          image: "/images/wp/2025-04/services_04.jpg",
        },
        {
          title: "Process Automation",
          desc: "We automate end-to-end business processes to improve speed, consistency, and productivity. From data entry and reporting to approval workflows, our solutions minimize human intervention and reduce errors.",
          image: "/images/wp/2025-04/services_02.jpg",
        },
        {
          title: "Robotic Process Automation (RPA)",
          desc: "Our RPA solutions use software bots to handle repetitive, rule-based tasks across applications—such as billing, payroll processing, invoice handling, and customer onboarding—without disrupting existing systems.",
          image: "/images/wp/2025-04/services_05.jpg",
        },
      ],
    },
  },
];

// ===== Values tag widget (shared on About, Web Dev, CMS pages) =====
export const valueTags = [
  "Best Value Solutions",
  "Trusted IT Partner",
  "Driving IT Excellence",
  "Digital Transformation",
  "Digital Innovation",
  "Cutting-Edge IT",
];

// ===== About page values (Living Our Values) =====
export const aboutValues = [
  {
    title: "Industry Experience",
    desc: "We build trust through ethical conduct, transparency, and a steadfast commitment to our clients and partners.",
  },
  {
    title: "Inclusion",
    desc: "We foster an inclusive culture where diverse perspectives are valued, and everyone is empowered with equal opportunities to succeed and grow.",
  },
  {
    title: "Value Creation",
    desc: "We are deeply committed to delivering measurable value for our clients by building secure, high-impact solutions and consistently exceeding expectations.",
  },
  {
    title: "Trust & Reliability",
    desc: "We build trust through transparency, consistent delivery, and accountability. Our clients rely on us for secure, stable, and dependable solutions. Every commitment we make is honored with precision and integrity.",
  },
];

// ===== About page — Company journey timeline =====
export const companyTimeline = [
  {
    year: "2010",
    title: "The Founding Idea",
    desc: "A small group of engineers started Globantis with a single belief: software should be engineered, not assembled. The first engagements were custom software projects for early US clients.",
  },
  {
    year: "2014",
    title: "First Canada Office",
    desc: "Opened our Laval, Québec delivery centre to serve North American clients across both US Eastern and Canadian Eastern time zones with follow-the-sun coverage.",
  },
  {
    year: "2018",
    title: "India Engineering Hub",
    desc: "Established the Chennai engineering hub at RMZ Millenia — scaling to 30+ senior engineers and 24/5 delivery capability across the India Standard Time business window.",
  },
  {
    year: "2021",
    title: "AI Practice Launched",
    desc: "Spun up a dedicated AI/ML practice — shipping our first production ML pipelines in healthcare diagnostics and financial fraud detection. Began investing in MLOps tooling.",
  },
  {
    year: "2023",
    title: "Cloud & DevOps Maturity",
    desc: "Hit 99.99% platform uptime across the year. Standardised on Infrastructure-as-Code (Terraform), GitLab CI/CD, and full observability (Grafana + Prometheus + OpenTelemetry).",
  },
  {
    year: "2026",
    title: "250+ Projects Delivered",
    desc: "Crossed 250 production projects delivered and 40+ enterprise clients across financial services, healthcare, education, logistics and e-commerce. Today we stand as a trusted global technology partner.",
  },
];

// ===== About page — Leadership team =====
export const leadershipTeam = [
  {
    name: "Arjun Mehta",
    role: "Founder & Chief Executive",
    bio: "Two decades shipping production software across financial services and healthcare. Arjun founded Globantis on the belief that engineering rigour should not be optional.",
    initials: "AM",
  },
  {
    name: "Sofia Renaud",
    role: "VP, Engineering",
    bio: "Leads our engineering practice across the US, Canada and India hubs. Sofia owns the architecture review board and the senior engineering hiring bar.",
    initials: "SR",
  },
  {
    name: "Vikram Iyer",
    role: "Head of AI & Data",
    bio: "Built and scaled the AI practice from a single PoC to 30+ production ML systems. Vikram's teams ship models with the same release discipline as application code.",
    initials: "VI",
  },
  {
    name: "Daniel Carter",
    role: "VP, Delivery & Client Success",
    bio: "Owns the delivery operating model — sprint cadence, client-facing status, and the post-launch SLA. Every Globantis engagement runs through Daniel's playbook.",
    initials: "DC",
  },
];

// ===== About page — Certifications & standards =====
export const certifications = [
  {
    code: "SOC 2 Type II",
    desc: "Annual third-party audit of our security, availability and confidentiality controls.",
  },
  {
    code: "ISO 27001",
    desc: "Certified information security management system across all delivery centres.",
  },
  {
    code: "GDPR",
    desc: "EU personal-data handling standards embedded into every product we ship.",
  },
  {
    code: "HIPAA",
    desc: "PHI handling, encryption, and audit trail patterns for healthcare engagements.",
  },
];

// ===== About page — Office locations =====
export const officeLocations = [
  {
    city: "Fall River, MA",
    country: "United States",
    address: "374 William S Canning Blvd, Fall River, MA 02721, USA",
    tz: "US Eastern (UTC−5)",
    image: "/images/wp/2026-01/pexels-sevenstormphotography-443383.jpg",
    role: "Headquarters · Client engagement · Product",
  },
  {
    city: "Laval, Québec",
    country: "Canada",
    address: "3992 Rue de la Seine, Laval, QC H7W 2S3, Canada",
    tz: "Canada Eastern (UTC−5)",
    image: "/images/wp/2026-01/2149595827.jpg",
    role: "Delivery · Cloud & DevOps · AI research",
  },
  {
    city: "Chennai",
    country: "India",
    address: "RMZ Millenia Business Park, Perungudi, Chennai, India",
    tz: "India Standard (UTC+5:30)",
    image: "/images/wp/2026-01/about-office-e1767452844756.jpg",
    role: "Engineering hub · 24/5 follow-the-sun",
  },
];

// ===== Why Choose Us page data =====
export const whyChooseTop = [
  {
    title: "Trusted & Reliable",
    desc: "We build long-term partnerships through transparency, accountability, and consistent delivery—earning trust at every stage of engagement.",
  },
  {
    title: "24/7 Customer Support",
    desc: "We continuously monitor systems to ensure performance and security. Issues are identified and resolved proactively to keep operations running smoothly.",
  },
  {
    title: "Global Client Experience",
    desc: "We work with clients across the USA, Canada, and the UAE, understanding international business expectations, compliance needs, and delivery standards.",
  },
];

export const whyChooseGrid = [
  {
    title: "Skilled & Agile Teams",
    desc: "Our experienced engineers and consultants follow agile methodologies to deliver flexible, high-quality solutions with faster time-to-market.",
  },
  {
    title: "Latest Technology",
    desc: "We use modern, cutting-edge technologies to build secure and future-ready solutions. Our focus on innovation ensures high performance, scalability, and long-term value.",
  },
  {
    title: "Secure & Scalable Solutions",
    desc: "Security, performance, and scalability are built into everything we deliver, ensuring solutions grow with your business.",
  },
  {
    title: "Cost-Effectiveness",
    desc: "We deliver high-quality, secure solutions at optimized costs. Our efficient processes and transparent pricing ensure maximum value and ROI.",
  },
  {
    title: "Clear Communication & On-Time Delivery",
    desc: "We maintain open communication, predictable timelines, and proactive reporting across time zones.",
  },
  {
    title: "Enhanced Security",
    desc: "Security is embedded into every solution we build at Globantis Labs. We follow global security standards and best practices to protect data, systems, and applications. Our proactive approach ensures reliability, compliance, and peace of mind for our clients.",
  },
];

// ===== Work Process steps =====
export const workProcessSteps = [
  {
    title: "Discovery & Requirement Analysis",
    desc: "We begin by understanding your business objectives, technical requirements, and market challenges. Through detailed discussions and analysis, we define a clear project scope aligned with your goals.",
  },
  {
    title: "Planning & Strategy",
    desc: "Our team creates a well-defined project roadmap, architecture, and delivery plan. Timelines, milestones, and risk factors are identified to ensure predictable and efficient execution.",
  },
  {
    title: "Design & Prototyping",
    desc: "We design intuitive user experiences and robust system architectures. Prototypes and design mockups are shared early to gather feedback and ensure alignment before development begins.",
  },
  {
    title: "Development & Implementation",
    desc: "Using agile methodologies, our engineers build secure, scalable, and high-performance solutions. Regular updates and sprint reviews keep clients informed throughout the development lifecycle.",
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Every solution undergoes rigorous testing for functionality, performance, security, and compliance. We ensure the final product meets international quality standards.",
  },
  {
    title: "Deployment & Launch",
    desc: "We manage seamless deployment with minimal disruption, including infrastructure setup, data migration, and production rollout—ensuring a smooth go-live for your team and users.",
  },
  {
    title: "Support & Continuous Improvement",
    desc: "Post-launch, we provide ongoing support, maintenance, and enhancements to ensure long-term reliability and continuous improvement.",
  },
];

// ===== Technologies page — full tech logo grid =====
export const technologiesGrid = [
  { name: "React", img: "/images/wp/2024-10/React.png" },
  { name: "Angular", img: "/images/wp/2024-10/angular.png" },
  { name: "Vue", img: "/images/wp/2024-10/vue.png" },
  { name: "WordPress", img: "/images/wp/2024-10/wordpress.png" },
  { name: "Webflow", img: "/images/wp/2024-10/webflow.png" },
  { name: "Laravel", img: "/images/wp/2024-10/laravel.png" },
  { name: "Node.js", img: "/images/wp/2024-09/1.png" },
  { name: "Docker", img: "/images/wp/2024-09/2.png" },
  { name: "Kubernetes", img: "/images/wp/2024-09/3-1.png" },
  { name: "AWS", img: "/images/wp/2024-09/5.png" },
  { name: "Jenkins", img: "/images/wp/2024-09/6.png" },
  { name: "GitLab", img: "/images/wp/2024-09/8.png" },
  { name: "Python", img: "/images/wp/2024-09/9.png" },
  { name: "TensorFlow", img: "/images/wp/2024-09/12.png" },
  { name: "Figma", img: "/images/wp/2024-09/13.png" },
  { name: "Azure", img: "/images/wp/2024-09/14.png" },
  { name: "GraphQL", img: "/images/wp/2024-09/19.png" },
  { name: "MongoDB", img: "/images/wp/2024-09/22.png" },
  { name: "PostgreSQL", img: "/images/wp/2024-09/23.png" },
  { name: "Redis", img: "/images/wp/2024-09/24.png" },
  { name: "Kafka", img: "/images/wp/2024-09/25.png" },
  { name: "Terraform", img: "/images/wp/2024-09/26.png" },
  { name: "Elasticsearch", img: "/images/wp/2024-09/29.png" },
  { name: "Puppet", img: "/images/wp/2024-09/34.png" },
];

// ===== Job openings (Careers page) =====
export const jobOpenings = [
  {
    id: "01",
    title: "AI / Software Developer Intern",
    meta: "Last Date: April 4, 2026  |  Remote / Chennai / Hybrid",
    desc: "We are looking for an AI / Software Developer Intern who is passionate about building intelligent systems. This role offers hands-on experience in developing and deploying AI models along with software development.",
    href: "https://careers.globantislabs.com/",
  },
  {
    id: "02",
    title: "Senior Full-Stack Engineer",
    meta: "Full-time  |  Remote / Laval / Hybrid",
    desc: "Own end-to-end features across React, Node.js, TypeScript and Postgres on a healthcare SaaS platform shipping to 12+ countries. You'll work directly with the client engineering team and own production releases.",
    href: "https://careers.globantislabs.com/",
  },
  {
    id: "03",
    title: "DevOps / Platform Engineer",
    meta: "Full-time  |  Chennai / Hybrid",
    desc: "Operate our internal platform — Kubernetes, Terraform, GitLab CI/CD, Grafana. Ship the developer tooling that 30+ engineers use every day, and keep our 99.99% uptime SLA intact.",
    href: "https://careers.globantislabs.com/",
  },
  {
    id: "04",
    title: "UI/UX Designer",
    meta: "Full-time  |  Remote / Laval",
    desc: "Lead discovery sprints, design systems and high-fidelity prototypes for fintech and healthcare clients. You'll own research, Figma libraries and the design QA bar across the engagement.",
    href: "https://careers.globantislabs.com/",
  },
];

// ===== Careers — hiring process steps =====
export const hiringProcess = [
  {
    step: "01",
    title: "Application review",
    desc: "A senior engineer — not a recruiter — reads your application within 5 business days. We share notes and a decision.",
  },
  {
    step: "02",
    title: "Intro call (30 min)",
    desc: "30 minutes with the hiring manager. We talk through your experience, the role and the team. No live coding yet.",
  },
  {
    step: "03",
    title: "Practical session (90 min)",
    desc: "A real-world exercise drawn from a past engagement. We review code, design decisions and trade-offs together.",
  },
  {
    step: "04",
    title: "Team & culture (60 min)",
    desc: "Meet 2–3 future teammates. We discuss how we work, how we resolve disagreements and what good engineering looks like.",
  },
  {
    step: "05",
    title: "Offer & onboarding",
    desc: "Offer within 7 days of the final round. Onboarding includes a senior mentor, a 30-day plan and your first production deploy.",
  },
];

// ===== Careers — culture pillars =====
export const culturePillars = [
  {
    icon: ShieldCheck,
    title: "Security-first by default",
    desc: "Threat modelling, secure code review and dependency hygiene are part of every PR — not a separate security audit phase.",
  },
  {
    icon: Users,
    title: "Mentorship, not micromanagement",
    desc: "Every engineer gets a senior mentor. You set your weekly direction with your lead, not the other way around.",
  },
  {
    icon: Rocket,
    title: "Ship to production",
    desc: "No six-month release cycles. Engineers here deploy to production in their first week — through guarded feature flags and thorough observability.",
  },
  {
    icon: Sparkles,
    title: "Curiosity budget",
    desc: "10% of every sprint is reserved for learning, side projects and contributing to open-source tools we use.",
  },
];

// ===== Appointment — slots + topics =====
export const appointmentSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
];

export const consultationTopics = [
  "Software Architecture Review",
  "AI / ML Strategy",
  "Cloud Migration & DevOps",
  "UI/UX Design Sprint",
  "Cybersecurity Assessment",
  "Other",
];

// ===== Appointment — FAQ =====
export const appointmentFAQ = [
  {
    q: "Is the consultation really free?",
    a: "Yes — completely free, no commitment. We run this call because we enjoy talking to engineers and product leaders about hard problems. Whether or not we work together, you'll leave with a written technical recommendation.",
  },
  {
    q: "Who takes the call?",
    a: "A senior engineer — usually a VP of Engineering or a Practice Lead. Not a salesperson. We want you to ask hard technical questions and get straight answers.",
  },
  {
    q: "What should I bring?",
    a: "A short description of what you're building, the team you have, and any timing constraints. Architecture diagrams or a Notion doc are welcome but not required.",
  },
  {
    q: "What happens after the call?",
    a: "Within 24 hours, you'll get a short written summary: what we heard, what we'd recommend, and (if it's a fit) a small first milestone proposal. No follow-up spam.",
  },
  {
    q: "What if I'm not ready to start a project?",
    a: "That's fine. The call is for you. We'll share the recommendation and stay available if you want to revisit later — weeks or months down the line.",
  },
  {
    q: "Do you sign NDAs before the call?",
    a: "We can — just ask. We're also comfortable speaking at a high level first if you'd rather not share specifics before an NDA is in place.",
  },
];

// ===== Contact — response SLA + channels =====
export const contactResponseSLA = [
  { label: "First reply", value: "1 business day", desc: "A senior engineer reads every inbound enquiry and replies within one business day — never an auto-responder." },
  { label: "Discovery call", value: "Within 5 days", desc: "If your enquiry looks like a fit, we'll book a 30-minute discovery call within the same week." },
  { label: "Proposal", value: "5–7 days", desc: "After discovery, we ship a written proposal with scope, milestones, team and pricing — usually within a week." },
];

// ===== Contact — FAQ =====
export const contactFAQ = [
  {
    q: "What information should I include in my enquiry?",
    a: "Tell us what you're building, the team you have today, the timeline you're working against, and any compliance or security requirements. The more concrete, the faster we can give you a useful answer.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We've shipped MVPs for seed-stage founders and 18-month transformation programs for Fortune 500s. The engagement model scales to your stage.",
  },
  {
    q: "Can you work in our time zone?",
    a: "Yes. Our three offices (US, Canada, India) give us follow-the-sun coverage. Most clients get at least 4 hours of overlap with their team every business day.",
  },
  {
    q: "What's your minimum engagement?",
    a: "For project work, our smallest engagement is typically a 4–6 week architecture review or a design sprint. We also offer monthly retained engineering for ongoing work.",
  },
  {
    q: "Do you sign NDAs and MSAs?",
    a: "Yes. We have a standard mutual NDA we can sign before our first call, and a master services agreement template ready to review with your legal team.",
  },
];

// ===== Technologies — categories =====
export const technologyCategories = [
  {
    name: "Frontend",
    desc: "Production-grade web and mobile interfaces with strict accessibility, performance budgets and design-system discipline.",
    items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Figma"],
  },
  {
    name: "Backend & Languages",
    desc: "Service-oriented architectures, event-driven systems and polyglot persistence — engineered for scale and auditability.",
    items: ["Node.js", "Python", "Go", "Java", "Laravel", "GraphQL"],
  },
  {
    name: "Data & Storage",
    desc: "OLTP, OLAP, streaming and search — chosen to fit the workload, not the trend. We model data for the questions you'll ask next.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Elasticsearch", "InfluxDB"],
  },
  {
    name: "Cloud & DevOps",
    desc: "Infrastructure-as-Code, automated CI/CD and full observability. Every change ships through a pipeline — never a console click.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitLab", "Jenkins", "Puppet", "Grafana"],
  },
  {
    name: "AI & ML",
    desc: "Models shipped with the same release discipline as application code — versioned, monitored and rolled back when needed.",
    items: ["TensorFlow", "PyTorch", "Keras", "Plotly"],
  },
];

// ===== Work process — detailed phases with deliverables =====
export const workProcessPhases = [
  {
    phase: "01",
    title: "Discovery & Requirement Analysis",
    duration: "1–2 weeks",
    desc: "We begin by understanding your business objectives, technical requirements and market challenges. Through detailed discussions and analysis, we define a clear project scope aligned with your goals.",
    deliverables: ["Stakeholder interviews", "Technical requirements doc", "Risk register", "Project charter"],
  },
  {
    phase: "02",
    title: "Planning & Strategy",
    duration: "1 week",
    desc: "Our team creates a well-defined project roadmap, architecture and delivery plan. Timelines, milestones and risk factors are identified to ensure predictable and efficient execution.",
    deliverables: ["Architecture diagram", "Sprint roadmap", "Team plan", "Communication protocol"],
  },
  {
    phase: "03",
    title: "Design & Prototyping",
    duration: "2–4 weeks",
    desc: "We design intuitive user experiences and robust system architectures. Prototypes and design mockups are shared early to gather feedback and ensure alignment before development begins.",
    deliverables: ["Wireframes", "Clickable prototype", "Design system", "Design QA checklist"],
  },
  {
    phase: "04",
    title: "Development & Implementation",
    duration: "Sprint cycles",
    desc: "Using agile methodologies, our engineers build secure, scalable and high-performance solutions. Regular updates and sprint reviews keep clients informed throughout the development lifecycle.",
    deliverables: ["Working software", "Sprint reviews", "Burndown reports", "Release notes"],
  },
  {
    phase: "05",
    title: "Testing & Quality Assurance",
    duration: "Continuous",
    desc: "Every solution undergoes rigorous testing for functionality, performance, security and compliance. We ensure the final product meets international quality standards.",
    deliverables: ["Test plans", "Automation suite", "Security scan report", "Compliance checklist"],
  },
  {
    phase: "06",
    title: "Deployment & Launch",
    duration: "1 week",
    desc: "We manage seamless deployment with minimal disruption, including infrastructure setup, data migration and production rollout — ensuring a smooth go-live for your team and users.",
    deliverables: ["Runbook", "Deployment scripts", "Rollback plan", "Launch comms"],
  },
  {
    phase: "07",
    title: "Support & Continuous Improvement",
    duration: "Ongoing",
    desc: "Post-launch, we provide ongoing support, maintenance and enhancements to ensure long-term reliability and continuous improvement.",
    deliverables: ["SLA dashboard", "Monthly review", "Backlog grooming", "Quarterly roadmap"],
  },
];

// ===== Why Choose Us — comparison table =====
export const whyChooseComparison = [
  { label: "Senior engineers on every engagement", us: true, them: false },
  { label: "Security-first by default (SOC2 / ISO 27001)", us: true, them: false },
  { label: "Fixed-scope sprints with documented deliverables", us: true, them: true },
  { label: "24/5 follow-the-sun coverage across 3 offices", us: true, them: false },
  { label: "Written technical recommendation in 24 hours", us: true, them: false },
  { label: "Quarterly business review with the leadership team", us: true, them: false },
  { label: "Production-grade observability from day one", us: true, them: false },
  { label: "Code ownership transferred to your team", us: true, them: false },
];

// ===== Why Choose Us — FAQ =====
export const whyChooseFAQ = [
  {
    q: "How do you price engagements?",
    a: "Two models: fixed-scope for well-defined projects (paid per milestone) and monthly retained for ongoing engineering work. We share pricing ranges in our first call — never a 'let's hop on a call' email chain.",
  },
  {
    q: "What happens if the scope changes mid-engagement?",
    a: "We treat scope changes as engineering decisions: we assess impact, write a short change request, and get your written approval before any work begins. No silent scope creep, no surprise invoices.",
  },
  {
    q: "Do you transfer code ownership to us?",
    a: "Yes — always. You own all source code, infrastructure and documentation we produce on your engagement. We hand over repos, CI/CD access and architecture diagrams at the closeout.",
  },
  {
    q: "Can you scale the team up or down quickly?",
    a: "Yes — within 2 weeks we can add or reduce 1–2 engineers. Larger team changes need 4–6 weeks because we don't hire fresh bodies for client work; we add engineers who already understand our culture.",
  },
];

export { Sparkles };
