import type { LucideIcon } from "lucide-react";
import {
  Code2,
  BrainCircuit,
  Globe,
  Smartphone,
  Cloud,
  BarChart3,
  ShieldCheck,
  ShoppingCart,
  Network,
  LifeBuoy,
  ArrowRight,
  Workflow,
  FileText,
  Bot,
  Headset,
  Cpu,
  Activity,
  LayoutGrid,
  Users,
  Truck,
  Boxes,
  Settings,
  Sparkles,
  Database,
  Server,
  Package,
  Handshake,
  Network as NetworkIcon,
} from "lucide-react";

export type ServiceV2 = {
  slug: string;
  icon: LucideIcon;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  overviewHeading: string;
  overviewParas: string[];
  capabilities: string[];
  heroImage: string;
  revenueEngine: "Custom Software" | "AI & Automation" | "Dedicated Teams" | "Managed Services";
  /** HCL-tech-style "Powering the future of X" block on service pages:
   *  intro (eyebrow + title + lead paragraph) + a grid of capability
   *  tiles (icon + title + desc) + an optional closing tagline. */
  capabilitiesTiles?: {
    intro?: {
      eyebrow?: string;
      title: string;
      desc?: string;
    };
    tiles: {
      icon?: LucideIcon;
      title: string;
      desc: string;
    }[];
    closingQuote?: string;
  };
  /** Big italicised quote rendered between the overview prose and the
   *  capabilities tiles grid. Optional. */
  overviewQuote?: string;
};

export const servicesV2: ServiceV2[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Software Engineered Around Your Business",
    desc: "We design and develop custom software solutions that align technology with your unique business processes, customer requirements and growth objectives.",
    overviewHeading: "Software Engineered Around Your Business",
    overviewParas: [
      "We design and develop custom software solutions that align technology with your unique business processes, customer requirements and growth objectives.",
      "From business applications and SaaS platforms to enterprise systems and complex digital products, we build secure, scalable and maintainable software using modern engineering practices.",
    ],
    capabilities: [
      "Custom Enterprise Applications",
      "SaaS Product Development",
      "Business Management Systems",
      "Workflow & Process Automation",
      "CRM & ERP Solutions",
      "API Development",
      "Microservices Architecture",
      "Legacy Application Modernization",
      "Software Re-engineering",
      "Application Maintenance & Enhancement",
    ],
    heroImage: "/images/about.jpg",
    revenueEngine: "Custom Software",
  },
  {
    slug: "ai-automation",
    icon: BrainCircuit,
    number: "02",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    tagline: "Automate Processes. Augment Intelligence. Accelerate Growth.",
    desc: "AI is transforming automation from rule-based task execution into intelligent, adaptive business operations. We help enterprises identify high-value automation opportunities and transform them into scalable, AI-powered solutions that improve productivity, reduce operational complexity, and accelerate business outcomes.",
    overviewHeading: "AI-Powered Automation for Smarter Operations",
    overviewParas: [
      "AI is transforming automation from rule-based task execution into intelligent, adaptive business operations. Organizations can now combine artificial intelligence, machine learning, Generative AI, and intelligent agents to automate complex workflows, improve decision-making, and create more responsive customer and employee experiences.",
      "We help enterprises identify high-value automation opportunities and transform them into scalable, AI-powered solutions that improve productivity, reduce operational complexity, and accelerate business outcomes.",
    ],
    capabilities: [
      "Generative AI Solutions",
      "AI Agents",
      "Intelligent Automation",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI-Powered Applications",
      "Enterprise Knowledge Systems",
      "Document Intelligence",
      "Predictive Analytics",
      "AI Integration",
      "AI Workflow Automation",
    ],
    capabilitiesTiles: {
      intro: {
        eyebrow: "Our AI Automation Capabilities",
        title: "From Automation to Autonomous Operations",
        desc: "We help organizations move beyond traditional automation toward intelligent, connected, and adaptive operations — where AI works alongside people to simplify complexity, accelerate execution, and continuously improve business performance.",
      },
      tiles: [
        { icon: Workflow, title: "Intelligent Process Automation", desc: "Automate repetitive and complex workflows using AI-driven decision-making and intelligent orchestration." },
        { icon: FileText, title: "AI-Powered Document Processing", desc: "Extract, classify, validate, and process information from documents with intelligent automation." },
        { icon: Sparkles, title: "Generative AI Automation", desc: "Leverage GenAI to automate content creation, knowledge processing, summarization, and business workflows." },
        { icon: Bot, title: "Agentic AI", desc: "Deploy intelligent AI agents capable of understanding objectives, reasoning through tasks, and executing multi-step workflows." },
        { icon: Headset, title: "Customer Service Automation", desc: "Enhance customer support with AI-powered virtual assistants, conversational AI, intelligent routing, and automated responses." },
        { icon: Network, title: "Business Workflow Automation", desc: "Connect applications, systems, data, and people to streamline end-to-end enterprise processes." },
        { icon: Cpu, title: "Intelligent Decision Support", desc: "Combine AI, analytics, and real-time data to provide actionable insights and support faster business decisions." },
        { icon: Activity, title: "AI-Driven Operations", desc: "Continuously monitor processes, identify inefficiencies, predict issues, and optimize operations with intelligent automation." },
      ],
      closingQuote: "Transform Workflows. Empower People. Accelerate Business.",
    },
    overviewQuote: "From AI Potential to Business Impact.",
    heroImage: "/images/hero-bg.jpg",
    revenueEngine: "AI & Automation",
  },
  {
    slug: "enterprise-web-solutions",
    icon: Globe,
    number: "03",
    title: "Enterprise Web Solutions",
    shortTitle: "Web Solutions",
    tagline: "Collaborating for Business Excellence",
    desc: "Enterprise applications are the foundation of modern organizations, enabling businesses to operate efficiently, innovate at scale, and respond to evolving market demands. Achieving meaningful digital transformation requires more than technology alone—it demands a strategic, holistic approach supported by a strong ecosystem of trusted partners.",
    overviewHeading: "Collaborating for Business Excellence",
    overviewParas: [
      "Enterprise applications are the foundation of modern organizations, enabling businesses to operate efficiently, innovate at scale, and respond to evolving market demands. Achieving meaningful digital transformation requires more than technology alone—it demands a strategic, holistic approach supported by a strong ecosystem of trusted partners.",
      "By bringing together industry expertise, intelligent solutions, and complementary capabilities, organizations can accelerate transformation, optimize business processes, and unlock sustainable value across the enterprise.",
    ],
    capabilities: [
      "Enterprise Web Applications",
      "Corporate Websites",
      "SaaS Platforms",
      "Customer Portals",
      "B2B Platforms",
      "B2C Platforms",
      "Progressive Web Applications",
      "Headless Architecture",
      "API-Driven Applications",
      "CMS Development",
      "Web Application Modernization",
    ],
    capabilitiesTiles: {
      intro: {
        eyebrow: "Our Web Solutions",
        title: "Engineered for Scale, Built for the Enterprise",
        desc: "From corporate digital presence and enterprise portals to complex SaaS platforms, our teams engineer web solutions designed for performance, security, and scalability.",
      },
      tiles: [
        { icon: Globe, title: "Enterprise Web Applications", desc: "Mission-critical applications engineered for performance, security, and scale across the enterprise." },
        { icon: LayoutGrid, title: "Corporate Websites", desc: "Brand-led, content-rich corporate websites with modern CMS, SEO, and editorial workflows." },
        { icon: Cloud, title: "SaaS Platforms", desc: "Multi-tenant SaaS platforms built for fast onboarding, predictable billing, and elastic scale." },
        { icon: Users, title: "Customer Portals", desc: "Self-service portals that unify account, billing, support, and engagement in one experience." },
        { icon: Network, title: "B2B Platforms", desc: "B2B commerce, partner, and dealer platforms with quoting, ordering, and account hierarchies." },
        { icon: ShoppingCart, title: "B2C Platforms", desc: "B2C commerce and engagement platforms optimised for conversion and customer lifetime value." },
        { icon: Smartphone, title: "Progressive Web Applications", desc: "Installable, offline-capable PWAs that deliver app-grade UX without the app store." },
        { icon: Server, title: "Headless Architecture", desc: "Headless CMS + composable APIs for omnichannel content delivery at velocity." },
        { icon: Workflow, title: "API-Driven Applications", desc: "API-first engineering for integration-heavy environments and partner ecosystems." },
        { icon: FileText, title: "CMS Development", desc: "Editor-friendly CMS implementations that let marketing ship without engineering." },
        { icon: Code2, title: "Web Application Modernization", desc: "Replatform legacy web estates to modern stacks without business disruption." },
      ],
      closingQuote: "Build Digital Experiences That Move the Enterprise.",
    },
    overviewQuote: "From Enterprise Apps to Intelligent Ecosystems.",
    heroImage: "/images/hm2-about.jpg",
    revenueEngine: "Custom Software",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    number: "04",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Mobile Experiences That Connect Businesses With Customers",
    desc: "We build intuitive and reliable mobile applications that help organizations engage customers, empower employees and create new digital business models.",
    overviewHeading: "Mobile Experiences That Connect Businesses With Customers",
    overviewParas: [
      "We build intuitive and reliable mobile applications that help organizations engage customers, empower employees and create new digital business models.",
      "Our mobile engineering capabilities cover the complete product lifecycle—from experience design and development to deployment, monitoring and continuous enhancement.",
    ],
    capabilities: [
      "iOS Application Development",
      "Android Application Development",
      "Cross-Platform Applications",
      "Flutter Development",
      "React Native Development",
      "Enterprise Mobility",
      "Customer Applications",
      "Employee Applications",
      "Mobile Commerce",
      "Mobile API Integration",
      "Application Maintenance",
    ],
    heroImage: "/images/vr-girl.jpg",
    revenueEngine: "Custom Software",
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    number: "05",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Build Faster. Scale Smarter. Operate With Confidence.",
    desc: "We help organizations adopt cloud-native technologies, modernize infrastructure and establish engineering practices that improve scalability, reliability and delivery speed.",
    overviewHeading: "Build Faster. Scale Smarter. Operate With Confidence.",
    overviewParas: [
      "We help organizations adopt cloud-native technologies, modernize infrastructure and establish engineering practices that improve scalability, reliability and delivery speed.",
      "Our cloud and DevOps teams design and implement infrastructure that supports modern applications and evolving business demands.",
    ],
    capabilities: [
      "Cloud Strategy & Architecture",
      "AWS Solutions",
      "Microsoft Azure",
      "Google Cloud",
      "Cloud Migration",
      "Cloud Modernization",
      "Kubernetes",
      "Docker",
      "CI/CD Automation",
      "Infrastructure as Code",
      "Cloud Monitoring",
      "Performance Optimization",
      "Backup & Disaster Recovery",
    ],
    heroImage: "/images/hero-bg-2.jpg",
    revenueEngine: "Managed Services",
  },
  {
    slug: "data-analytics",
    icon: BarChart3,
    number: "06",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    tagline: "Turn Data Into Business Intelligence",
    desc: "We build modern data platforms and analytics solutions that help organizations consolidate information, uncover insights and make data-driven decisions.",
    overviewHeading: "Turn Data Into Business Intelligence",
    overviewParas: [
      "Data becomes valuable when organizations can trust it, understand it and act on it.",
      "We build modern data platforms and analytics solutions that help organizations consolidate information, uncover insights and make data-driven decisions.",
    ],
    capabilities: [
      "Data Engineering",
      "Data Warehousing",
      "ETL / ELT",
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Machine Learning",
      "Real-Time Analytics",
      "Data Migration",
      "Data Integration",
      "Reporting & Dashboards",
      "Data Platform Modernization",
    ],
    heroImage: "/images/hm2-about-2.jpg",
    revenueEngine: "AI & Automation",
  },
  {
    slug: "cybersecurity",
    icon: ShieldCheck,
    number: "07",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    tagline: "Security Engineered Into Every Layer",
    desc: "We help businesses strengthen application, infrastructure and data security through security-focused engineering and risk management practices.",
    overviewHeading: "Security Engineered Into Every Layer",
    overviewParas: [
      "Digital transformation increases opportunity—and expands the technology landscape that organizations need to protect.",
      "We help businesses strengthen application, infrastructure and data security through security-focused engineering and risk management practices.",
    ],
    capabilities: [
      "Application Security",
      "API Security",
      "Cloud Security",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Identity & Access Management",
      "Security Monitoring",
      "Secure Software Development",
      "Data Protection",
      "Security Assessment",
      "Security Architecture",
      "Risk & Compliance Support",
    ],
    heroImage: "/images/about-2.jpg",
    revenueEngine: "Managed Services",
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    number: "08",
    title: "E-Commerce",
    shortTitle: "E-Commerce",
    tagline: "Digital Commerce Built for Growth",
    desc: "We engineer commerce experiences that connect customers, products, payments and business operations through secure and scalable digital platforms.",
    overviewHeading: "Digital Commerce Built for Growth",
    overviewParas: [
      "We engineer commerce experiences that connect customers, products, payments and business operations through secure and scalable digital platforms.",
      "From B2B commerce to consumer marketplaces, we create technology solutions that support evolving customer expectations and complex business workflows.",
    ],
    capabilities: [
      "B2B E-Commerce",
      "B2C E-Commerce",
      "Multi-Vendor Marketplaces",
      "Custom Commerce Platforms",
      "Shopify Development",
      "WooCommerce",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Management",
      "Subscription Commerce",
      "CRM & ERP Integration",
      "E-Commerce Modernization",
    ],
    heroImage: "/images/vrhm2.jpg",
    revenueEngine: "Custom Software",
  },
  {
    slug: "enterprise-integration",
    icon: Network,
    number: "09",
    title: "Enterprise Integration",
    shortTitle: "Integration",
    tagline: "Connecting Technology. Simplifying Operations.",
    desc: "We help organizations connect systems through secure APIs, integration platforms and modern architectures—creating seamless information flow across the enterprise.",
    overviewHeading: "Connecting Technology. Simplifying Operations.",
    overviewParas: [
      "Businesses rely on an increasingly complex ecosystem of applications, platforms and data sources.",
      "We help organizations connect these systems through secure APIs, integration platforms and modern architectures—creating seamless information flow across the enterprise.",
    ],
    capabilities: [
      "API Development & Integration",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Enterprise Application Integration",
      "CRM Integration",
      "ERP Integration",
      "Payment Integration",
      "Third-Party Integrations",
      "Legacy System Integration",
      "Data Integration",
      "Integration Architecture",
    ],
    heroImage: "/images/office.jpg",
    revenueEngine: "Custom Software",
  },
  {
    slug: "managed-services",
    icon: LifeBuoy,
    number: "10",
    title: "Managed Services",
    shortTitle: "Managed Services",
    tagline: "Technology That Continues to Perform",
    desc: "Our managed services help organizations maintain, monitor, secure and continuously improve their applications and infrastructure while allowing internal teams to focus on strategic business priorities.",
    overviewHeading: "Technology That Continues to Perform",
    overviewParas: [
      "Technology doesn't end at deployment.",
      "Our managed services help organizations maintain, monitor, secure and continuously improve their applications and infrastructure while allowing internal teams to focus on strategic business priorities.",
    ],
    capabilities: [
      "Application Maintenance",
      "Technical Support",
      "Cloud Management",
      "Application Monitoring",
      "Performance Optimization",
      "Security Updates",
      "Infrastructure Management",
      "DevOps Support",
      "Quality Assurance",
      "Dedicated Engineering Teams",
      "SLA-Based Support",
      "Continuous Product Development",
    ],
    heroImage: "/images/hero-asset.png",
    revenueEngine: "Managed Services",
  },
];

export const revenueEngines = [
  {
    title: "Custom Software Projects",
    desc: "From concept to production — enterprise applications, SaaS platforms, web and mobile products engineered for scale.",
    icon: Code2,
  },
  {
    title: "AI & Automation Projects",
    desc: "Practical AI shipped to production — GenAI, ML models, intelligent automation and AI-powered applications.",
    icon: BrainCircuit,
  },
  {
    title: "Dedicated Development Teams",
    desc: "Senior engineering teams that work as an extension of your organization — transparent, accountable,交付-driven.",
    icon: Network,
  },
  {
    title: "Long-Term Managed Services",
    desc: "Ongoing maintenance, monitoring, security and continuous improvement — recurring revenue, recurring value.",
    icon: LifeBuoy,
  },
];

export type Solution = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  desc: string;
  overviewParas: string[];
  capabilities: string[];
  businessValue: { title: string; desc: string }[];
  heroImage: string;
};

export const solutions: Solution[] = [
  {
    slug: "crm-solutions",
    number: "01",
    title: "CRM Solutions",
    tagline: "Build Stronger Customer Relationships",
    desc: "Transform customer interactions into connected, intelligent and measurable experiences with CRM solutions designed around your business processes.",
    overviewParas: [
      "Transform customer interactions into connected, intelligent and measurable experiences with CRM solutions designed around your business processes.",
      "Our CRM solutions help organizations centralize customer information, streamline sales operations, automate workflows and provide teams with a complete view of the customer journey.",
    ],
    capabilities: [
      "Custom CRM Development", "Sales Pipeline Management", "Lead & Opportunity Management",
      "Customer Data Management", "Contact & Account Management", "Marketing Automation",
      "Customer Support Management", "Task & Workflow Automation", "Reporting & Analytics",
      "AI-Powered Customer Insights", "Third-Party Integrations", "Mobile CRM",
    ],
    businessValue: [
      { title: "Centralized Data", desc: "Bring customer information into one connected platform." },
      { title: "Process Automation", desc: "Reduce manual activities and improve operational efficiency." },
      { title: "Better Visibility", desc: "Give teams real-time insights into customer and sales activities." },
      { title: "Scalable Architecture", desc: "Adapt the CRM as your organization and customer base grow." },
    ],
    heroImage: "/images/wp/2025-01/blog_new_02.jpg",
  },
  {
    slug: "erp-solutions",
    number: "02",
    title: "ERP Solutions",
    tagline: "Connect Your Business. Control Your Operations.",
    desc: "We develop and integrate ERP solutions that help organizations manage operations, resources, financial processes and business information through a unified technology environment.",
    overviewParas: [
      "Enterprise Resource Planning solutions bring critical business functions together through a connected digital platform.",
      "We develop and integrate ERP solutions that help organizations manage operations, resources, financial processes and business information through a unified technology environment.",
    ],
    capabilities: [
      "Finance & Accounting", "Inventory Management", "Procurement",
      "Sales Management", "Purchase Management", "Human Resource Management",
      "Payroll Integration", "Manufacturing Management", "Supply Chain Management",
      "Asset Management", "Business Reporting", "ERP Integration", "Custom ERP Modules",
    ],
    businessValue: [
      { title: "Connected Operations", desc: "Bring departments and business processes together." },
      { title: "Real-Time Visibility", desc: "Access reliable operational information when you need it." },
      { title: "Process Efficiency", desc: "Automate repetitive business processes and reduce manual effort." },
      { title: "Better Decision-Making", desc: "Turn operational data into actionable business insights." },
    ],
    heroImage: "/images/wp/2025-01/blog_new_03.jpg",
  },
  {
    slug: "business-automation",
    number: "03",
    title: "Business Automation",
    tagline: "Turn Repetitive Processes Into Intelligent Workflows",
    desc: "Our business automation solutions combine workflow automation, APIs, cloud technologies and AI to help organizations streamline everyday operations.",
    overviewParas: [
      "Manual processes can slow organizations down, increase operational costs and create unnecessary complexity.",
      "Our business automation solutions combine workflow automation, APIs, cloud technologies and AI to help organizations streamline everyday operations.",
    ],
    capabilities: [
      "Workflow Automation", "Robotic Process Automation", "AI-Powered Automation",
      "Document Processing", "Approval Workflows", "Data Entry Automation",
      "Email & Notification Automation", "Invoice Processing", "Customer Service Automation",
      "Employee Workflow Automation", "API-Based Automation", "Intelligent Process Automation",
    ],
    businessValue: [
      { title: "Reduce Manual Work", desc: "Automate repetitive and time-consuming processes." },
      { title: "Improve Accuracy", desc: "Reduce errors associated with manual data handling." },
      { title: "Accelerate Operations", desc: "Move business processes from hours to minutes." },
      { title: "Increase Productivity", desc: "Allow employees to focus on higher-value activities." },
    ],
    heroImage: "/images/wp/2025-01/project_new_05.jpg",
  },
  {
    slug: "enterprise-applications",
    number: "05",
    title: "Enterprise Applications",
    tagline: "Digital Platforms Built for Complex Business Operations",
    desc: "We design and engineer enterprise applications that connect people, processes, data and technology across the organization.",
    overviewParas: [
      "Enterprise organizations require technology that can integrate with existing systems, support large user bases and evolve with changing business requirements.",
      "We design and engineer enterprise applications that connect people, processes, data and technology across the organization.",
    ],
    capabilities: [
      "Enterprise Web Applications", "Business Management Platforms", "Workflow Management Systems",
      "Operations Management", "Document Management", "Employee Management",
      "Supply Chain Applications", "Inventory Platforms", "Financial Applications",
      "Enterprise Dashboards", "API & System Integration", "Legacy Modernization", "Cloud-Native Applications",
    ],
    businessValue: [
      { title: "Enterprise Scalability", desc: "Build platforms capable of supporting growing organizations." },
      { title: "System Connectivity", desc: "Connect applications, data and business processes." },
      { title: "Operational Visibility", desc: "Create centralized views across departments and operations." },
      { title: "Modern Architecture", desc: "Modernize legacy environments with scalable technology." },
    ],
    heroImage: "/images/wp/2025-01/project_new_02.jpg",
  },
  {
    slug: "saas-solutions",
    number: "06",
    title: "SaaS Solutions",
    tagline: "From Product Vision to Scalable SaaS Platform",
    desc: "We help startups, product companies and enterprises build SaaS platforms from concept through development, deployment and continuous evolution.",
    overviewParas: [
      "Turn your software idea into a scalable cloud-based product designed for modern users and recurring business models.",
      "We help startups, product companies and enterprises build SaaS platforms from concept through development, deployment and continuous evolution.",
    ],
    capabilities: [
      "SaaS Product Development", "Multi-Tenant Architecture", "Subscription Management",
      "User & Role Management", "Billing Integration", "Payment Gateway Integration",
      "Admin Platforms", "Customer Dashboards", "API Development",
      "Cloud Deployment", "Data & Analytics", "Third-Party Integrations",
      "Product Modernization", "SaaS Maintenance & Scaling",
    ],
    businessValue: [
      { title: "Recurring Revenue", desc: "Build technology platforms around subscription-based business models." },
      { title: "Global Scalability", desc: "Design infrastructure capable of supporting users across markets." },
      { title: "Faster Product Evolution", desc: "Continuously improve your platform through iterative development." },
      { title: "Secure Multi-Tenant Architecture", desc: "Separate and protect customer environments while maintaining operational efficiency." },
    ],
    heroImage: "/images/wp/2025-01/blog_new_05.jpg",
  },
];
