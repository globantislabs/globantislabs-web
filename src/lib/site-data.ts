import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
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

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; desc?: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", desc: "About Globantis", href: "/about" },
      { label: "Why Choose Us", desc: "Quality & Continuity", href: "/why-choose-us" },
      { label: "Work Process", desc: "Explore Process", href: "/work-process" },
      { label: "Technologies", desc: "Latest Technology", href: "/technologies" },
      { label: "Careers", desc: "Join Our Team", href: "/careers" },
      { label: "Appointment", desc: "Free Appointment", href: "/appointment" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
      { label: "CMS Development", href: "/services/cms-development" },
      { label: "DevOps Services", href: "/services/devops-services" },
      { label: "IT Support Services", href: "/services/it-support-services" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Automation", href: "/industries/automation" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Cybersecurity", href: "/industries/cybersecurity" },
      { label: "E-commerce & Retail", href: "/industries/ecommerce" },
    ],
  },
  {
    label: "Product",
    href: "/#products",
    children: [
      { label: "Photolabs", href: "/#products" },
      { label: "TranscriptHQ", href: "/#products" },
      { label: "Try Before", href: "/#products" },
    ],
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
  techs: { name: string; img: string }[];
  banner: {
    label?: string;
    image?: string;
  };
  overview?: {
    heading: string;
    paragraphs: string[];
  };
  benefits?: {
    label?: string;
    heading: string;
    intro?: string;
    features?: { title: string; desc: string }[];
    bullets?: string[];
    closing?: string;
    images?: string[];
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
      ],
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
      ],
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
      ],
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
      ],
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
      paragraphs: [],
    },
    subServices: {
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
      ],
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
      ],
    },
    benefits: {
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
