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
  Mail,
  Phone,
  MapPinned,
  Clock,
  Globe2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Company                                                                     */
/* -------------------------------------------------------------------------- */

export const company = {
  name: "Globantis Labs",
  shortName: "Globantis",
  tagline: "Transforming Ideas Into IT Solutions",
  description:
    "Globantis Labs is a global software engineering firm. We design, build and operate secure, scalable software — from web and mobile products to AI, cloud and DevOps platforms — for clients across the United States, Canada and India.",
  phone: "+1 (508) 555-6956",
  phoneHref: "tel:+15085556956",
  email: "sales@globantislabs.com",
  emailHref: "mailto:sales@globantislabs.com",
  careersEmail: "careers@globantislabs.com",
  offices: [
    {
      city: "Fall River, MA",
      country: "United States",
      address: "374 William S Canning Blvd, Fall River, MA 02721, USA",
      icon: MapPinned,
    },
    {
      city: "Laval, Québec",
      country: "Canada",
      address: "3992 Rue de la Seine, Laval, QC H7W 2S3, Canada",
      icon: MapPinned,
    },
    {
      city: "Chennai",
      country: "India",
      address: "RMZ Millenia Business Park, Perungudi, Chennai, India",
      icon: MapPinned,
    },
  ],
  founded: "2026",
  social: {
    linkedin: "https://www.linkedin.com/company/globantislabs",
    github: "https://github.com/globantislabs",
    x: "https://x.com/globantislabs",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export type NavChild = { label: string; desc?: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", desc: "Who Globantis is", href: "/about" },
      { label: "Why Choose Us", desc: "Quality and continuity", href: "/why-choose-us" },
      { label: "Work Process", desc: "How we deliver", href: "/work-process" },
      { label: "Technologies", desc: "Our engineering stack", href: "/technologies" },
      { label: "Careers", desc: "Join the team", href: "/careers" },
      { label: "Book Appointment", desc: "Free 30-minute call", href: "/appointment" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", desc: "Custom enterprise software", href: "/services/software-development" },
      { label: "Web Development", desc: "Modern web applications", href: "/services/web-development" },
      { label: "UI/UX Design", desc: "Research-led product design", href: "/services/ui-ux-design" },
      { label: "Artificial Intelligence", desc: "ML, automation, agents", href: "/services/artificial-intelligence" },
      { label: "CMS Development", desc: "ERP, CRM, content systems", href: "/services/cms-development" },
      { label: "DevOps Services", desc: "CI/CD, IaC, observability", href: "/services/devops-services" },
      { label: "IT Support", desc: "Maintenance and operations", href: "/services/it-support-services" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Financial Services", desc: "Banking, capital markets, fintech", href: "/industries/financial-services" },
      { label: "Healthcare", desc: "Patient-centric care", href: "/industries/healthcare" },
      { label: "Education", desc: "Scalable, accessible learning", href: "/industries/education" },
      { label: "Automation", desc: "Intelligent process automation", href: "/industries/automation" },
      { label: "Logistics", desc: "End-to-end supply chain", href: "/industries/logistics" },
      { label: "Cybersecurity", desc: "Defense-in-depth", href: "/industries/cybersecurity" },
      { label: "E-commerce & Retail", desc: "Omnichannel commerce", href: "/industries/ecommerce" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks: NavChild[] = [
  { label: "About", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Work Process", href: "/work-process" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavChild[] = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "DevOps Services", href: "/services/devops-services" },
  { label: "IT Support", href: "/services/it-support-services" },
];

export const footerIndustryLinks: NavChild[] = [
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Education", href: "/industries/education" },
  { label: "Automation", href: "/industries/automation" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Cybersecurity", href: "/industries/cybersecurity" },
  { label: "E-commerce", href: "/industries/ecommerce" },
];

/* -------------------------------------------------------------------------- */
/* Hero & home                                                                 */
/* -------------------------------------------------------------------------- */

export const heroStats = [
  { value: "15+", label: "Years engineering software" },
  { value: "250+", label: "Projects delivered globally" },
  { value: "40+", label: "Enterprise clients served" },
  { value: "3", label: "Delivery centres — US, CA, IN" },
];

export const heroHighlights = [
  {
    title: "AI & Automation",
    desc: "We convert complex, repetitive work into intelligent, scalable workflows — agents, RPA and ML pipelines that compound value over time.",
  },
  {
    title: "Emerging Technologies",
    desc: "We engineer at the frontier — edge, GenAI, blockchain and ambient computing — turning research-grade capability into production systems.",
  },
];

export const aboutTabs = [
  {
    key: "mission",
    label: "Mission",
    body: "Our mission is to empower businesses worldwide through innovative, scalable and secure digital solutions. We transform ideas into impactful technology by combining global expertise, advanced engineering and a customer-centric approach that delivers measurable business value.",
  },
  {
    key: "vision",
    label: "Vision",
    body: "Our vision is to become a globally trusted technology partner driving digital transformation across industries. We aim to shape the future through innovation, intelligence and sustainability — enabling organizations to grow, adapt and succeed in an ever-evolving digital world.",
  },
  {
    key: "history",
    label: "History",
    body: "Globantis was founded with a clear purpose: to deliver world-class software solutions that bridge technology and business needs across global markets. What began as a focused technology initiative has grown into a globally operating software company serving clients across diverse industries and geographies. From custom software development to AI, cloud, DevOps and enterprise solutions, Globantis has continuously evolved by embracing innovation, adopting global best practices and building strong partnerships. Today, Globantis stands as a trusted global technology partner — delivering scalable solutions and helping organizations achieve sustainable growth worldwide.",
  },
];

export const aboutValues = [
  {
    title: "Industry Experience",
    desc: "We build trust through ethical conduct, transparency and a steadfast commitment to our clients and partners across every engagement.",
  },
  {
    title: "Inclusion",
    desc: "We foster an inclusive culture where diverse perspectives are valued and everyone is empowered with equal opportunity to succeed and grow.",
  },
  {
    title: "Value Creation",
    desc: "We are deeply committed to delivering measurable value for our clients by building secure, high-impact solutions that consistently exceed expectations.",
  },
  {
    title: "Trust & Reliability",
    desc: "We earn trust through transparency, consistent delivery and accountability. Every commitment we make is honoured with precision and integrity.",
  },
];

export const valuePills = [
  "Best Value Solutions",
  "Trusted IT Partner",
  "Driving IT Excellence",
  "Digital Transformation",
  "Digital Innovation",
  "Cutting-Edge IT",
];

export const whyFeatures = [
  {
    icon: Cpu,
    title: "Expertise & Specialization",
    desc: "Deep technical expertise and industry-focused specialization to deliver innovative digital solutions at a global scale.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    desc: "We leverage modern engineering practices to build intelligent, scalable and future-ready digital systems.",
  },
  {
    icon: Lock,
    title: "Security & Risk Management",
    desc: "A proactive, security-first approach protects digital assets, ensures data privacy and mitigates risks across the entire technology lifecycle — enabling our clients to operate with confidence.",
  },
  {
    icon: Scale,
    title: "Scalability & Flexibility",
    desc: "Our architectures adapt seamlessly to changing demands, enabling organizations to expand, innovate and respond quickly in dynamic global markets.",
  },
];

export const homeStats = [
  { value: "15+", label: "Years of experience" },
  { value: "250+", label: "Projects delivered" },
  { value: "40+", label: "Global clients" },
  { value: "30+", label: "Tech experts" },
];

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export type SubService = { title: string; desc: string };
export type Feature = { title: string; desc: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  techs: string[];
  banner: { label?: string };
  overview: { heading: string; paragraphs: string[] };
  benefits?: {
    label?: string;
    heading: string;
    intro?: string;
    features?: Feature[];
    bullets?: string[];
    closing?: string;
  };
  subServices?: {
    label?: string;
    heading: string;
    intro?: string;
    items: SubService[];
  };
  faq?: { label?: string; heading: string; items: { q: string; a: string }[] };
};

export const services: Service[] = [
  {
    slug: "software-development",
    icon: Code2,
    title: "Custom Software Development",
    shortTitle: "Software Development",
    tagline: "Enterprise-grade software, engineered to your business.",
    desc: "We build enterprise-grade, custom software solutions designed to meet unique business requirements — scalable, secure and built for global operations.",
    techs: ["Java", "Python", "Go", "C#", "TypeScript"],
    banner: { label: "Software Development" },
    overview: {
      heading: "End-to-end software engineering, from concept to scale.",
      paragraphs: [
        "At Globantis Labs, we specialize in delivering end-to-end software development services that transform ideas into high-quality digital solutions. Our expertise spans custom software, web and mobile applications, cloud-based systems, enterprise solutions and AI-driven platforms — every product is designed to meet the unique needs of our global clients.",
        "We follow agile methodologies and industry best practices to deliver projects efficiently while maintaining flexibility to adapt to changing requirements. Our development process emphasizes scalability, security and performance, enabling businesses to grow without technical constraints.",
      ],
    },
    benefits: {
      label: "Why partner with us",
      heading: "A reliable technology partner for international standards",
      intro:
        "Partnering with Globantis Labs means gaining a technology partner who understands international business standards, compliance requirements and global market dynamics. We deliver software solutions and provide ongoing support, enhancements and strategic guidance to help clients stay ahead in an ever-evolving digital landscape.",
      bullets: [
        "Big Data Consulting",
        "Managed IT Services",
        "Best Value Solutions",
        "Digital Transformation",
        "Digital Innovation",
        "Cutting-Edge IT",
      ],
      closing:
        "From conceptualization and prototyping to development, testing and deployment, we ensure each stage is handled with precision, transparency and collaboration. Our teams focus on creating intuitive user experiences, robust architectures and maintainable code that supports long-term business objectives.",
    },
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortTitle: "Web Development",
    tagline: "Performance, reliability, scale.",
    desc: "Modern web applications that are responsive, secure and built to scale globally — engineered for performance and user experience.",
    techs: ["React", "Angular", "Node.js", "Next.js"],
    banner: { label: "Web Development" },
    overview: {
      heading: "Business intelligence, digital solutions and expert technology consulting.",
      paragraphs: [
        "At Globantis Labs, we create dynamic, responsive and high-performance web applications that empower businesses to succeed in the digital world. Our solutions are designed for scalability, security and seamless user experience — helping global clients enhance engagement and achieve measurable results.",
      ],
    },
    benefits: {
      label: "Benefits",
      heading: "Expert web development for modern businesses",
      intro:
        "We specialize in creating innovative, scalable and user-centric web solutions tailored to your business needs. From responsive websites to complex web applications, our developers leverage the latest technologies and best practices to deliver high-performance digital products that drive results.",
      features: [
        {
          title: "Industry Experience",
          desc: "Our experienced team brings years of web development expertise across diverse industries, ensuring robust and scalable solutions tailored to your unique requirements.",
        },
        {
          title: "24/7 Customer Support",
          desc: "Round-the-clock technical support to address any issues, resolve bugs quickly and keep your web applications running smoothly without interruptions.",
        },
        {
          title: "Trust & Reliability",
          desc: "We build web applications with cutting-edge security measures, reliable infrastructure and rigorous testing protocols to ensure your business can depend on us.",
        },
      ],
    },
  },
  {
    slug: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    tagline: "Intuitive experiences, grounded in research.",
    desc: "We design intuitive and engaging digital experiences that align with global user expectations and business objectives.",
    techs: ["Figma", "Hotjar", "Sketch", "Adobe XD"],
    banner: { label: "UI/UX Design" },
    overview: {
      heading: "Digital experiences that are intuitive, engaging and user-centric.",
      paragraphs: [
        "We begin by understanding your users, their behaviour and pain points. Through surveys, interviews and analytics, we create detailed user personas to guide the design process.",
        "We translate concepts into interactive wireframes and prototypes to visualize workflows, test ideas and gather early feedback. Our team designs modern, visually appealing interfaces with clear navigation and consistent branding. We conduct usability testing to validate design effectiveness and create designs that work seamlessly across devices and screen sizes.",
      ],
    },
  },
  {
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    shortTitle: "AI",
    tagline: "From research to production-grade AI.",
    desc: "We help organizations harness AI and Machine Learning to automate operations, enhance decision-making and unlock new business opportunities.",
    techs: ["TensorFlow", "PyTorch", "Keras", "Plotly", "Grafana"],
    banner: { label: "AI Services" },
    overview: {
      heading: "AI-driven services adopted across industries",
      paragraphs: [
        "From AI-powered customer support to predictive analytics and intelligent automation, our AI services are deployed across financial services, healthcare, retail and logistics. We design, train and operate models that compound value — and ship them with the observability and governance that production systems require.",
      ],
    },
    subServices: {
      label: "Our services",
      heading: "AI-powered solutions for every industry",
      intro:
        "Streamline operations with machine learning models, conversational agents and intelligent workflows. Our AI expertise accelerates time-to-value while maintaining stability, governance and reliability.",
      items: [
        {
          title: "AI-Powered Customer Support",
          desc: "Transform customer service with AI-powered chatbots and intelligent automation. Enhance support quality, reduce response times and deliver 24/7 customer assistance.",
        },
        {
          title: "AI Solutions for Healthcare",
          desc: "Leverage AI to optimize patient care, improve diagnostic accuracy and streamline healthcare operations with machine learning-driven insights.",
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
          desc: "Automate repetitive tasks with robotic process automation and AI-driven workflows. Increase operational efficiency, reduce costs and free up resources for strategic initiatives.",
        },
        {
          title: "Financial Planning & Investment",
          desc: "Optimize financial strategies with AI-powered investment insights and predictive market analysis. Make smarter decisions with algorithmic portfolio management and risk assessment.",
        },
      ],
    },
    benefits: {
      label: "Key benefits",
      heading: "Key benefits of AI technology",
      intro:
        "Discover how artificial intelligence and machine learning technologies are revolutionizing business productivity, reducing operational costs and driving innovation across every industry sector.",
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
          desc: "Optimize resource allocation, minimize manual effort and lower costs through intelligent automation at scale.",
        },
        {
          title: "Enhanced Customer Experience",
          desc: "Deliver personalized, context-aware experiences with AI recommendation engines and conversational interfaces.",
        },
        {
          title: "Continuous Innovation",
          desc: "Stay ahead of the market with AI that learns and adapts, unlocking new products, services and revenue streams.",
        },
      ],
    },
  },
  {
    slug: "cms-development",
    icon: Boxes,
    title: "CMS Development",
    shortTitle: "CMS Development",
    tagline: "ERP, CRM and content systems unified.",
    desc: "Our ERP and CRM solutions empower organizations to streamline operations, improve customer relationships and drive data-driven growth.",
    techs: ["Docker", "InfluxDB", "React", "PostgreSQL"],
    banner: { label: "CMS Development" },
    overview: {
      heading: "ERP, CRM & CMS — integrated enterprise management and content delivery.",
      paragraphs: [
        "Comprehensive ERP, CRM and CMS solutions that empower enterprises to streamline operations, enhance customer relationships and deliver exceptional content experiences. Our integrated platform brings together enterprise resource planning, customer relationship management and content management capabilities into one unified system for maximum efficiency and scalability.",
      ],
    },
    benefits: {
      label: "Why choose us",
      heading: "Why choose our ERP/CRM & CMS solutions",
      features: [
        {
          title: "Integrated Platform",
          desc: "Unified ERP, CRM and CMS platform eliminating silos and enabling seamless data flow across your entire enterprise.",
        },
        {
          title: "Enterprise Scalability",
          desc: "Grow your business with a platform that scales from small operations to large enterprises without compromise.",
        },
        {
          title: "Channel Integration",
          desc: "Connect all your business channels through one unified ERP, CRM and CMS platform for consistent customer experiences.",
        },
        {
          title: "Skilled Workforce",
          desc: "Our team is composed of highly qualified professionals with deep expertise across enterprise platforms and integrations.",
        },
      ],
    },
  },
  {
    slug: "devops-services",
    icon: ServerCog,
    title: "DevOps Services",
    shortTitle: "DevOps",
    tagline: "Ship faster, scale safer.",
    desc: "End-to-end DevOps services that help organizations accelerate software delivery, improve reliability and scale infrastructure globally.",
    techs: ["GitLab", "Kubernetes", "Terraform", "Docker"],
    banner: { label: "DevOps Services" },
    overview: {
      heading: "Service overview",
      paragraphs: [
        "Comprehensive DevOps transformation services encompassing continuous integration and deployment, infrastructure automation, containerization and enterprise-grade monitoring. We enable organizations to accelerate software delivery cycles, improve system reliability and achieve operational excellence through automated workflows and intelligent infrastructure management.",
      ],
    },
    subServices: {
      label: "Our services",
      heading: "Complete DevOps solutions & CI/CD pipeline automation",
      intro:
        "Streamline software delivery with automated CI/CD pipelines, infrastructure management and continuous monitoring. Our DevOps expertise accelerates time-to-market while maintaining stability and reliability.",
      items: [
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Manage infrastructure through code version control for consistency, reproducibility and efficient provisioning across environments.",
        },
        {
          title: "CI/CD Pipeline Automation",
          desc: "Automate code integration, testing and deployment with robust CI/CD pipelines for faster releases and reduced errors.",
        },
        {
          title: "Monitoring & Observability",
          desc: "Real-time insights into application and infrastructure health with comprehensive monitoring, logging and alerting to enable rapid issue detection and resolution.",
        },
        {
          title: "IT Consulting & Strategy",
          desc: "Strategic guidance on cloud adoption, toolchain selection and DevOps maturity assessment to align engineering practices with long-term business objectives.",
        },
        {
          title: "Data & Analytics Services",
          desc: "Build reliable data pipelines, warehouses and analytics dashboards that turn operational telemetry into actionable insight for smarter, faster decisions.",
        },
      ],
    },
  },
  {
    slug: "it-support-services",
    icon: LifeBuoy,
    title: "Maintenance & IT Support",
    shortTitle: "IT Support",
    tagline: "Reliable operations, around the clock.",
    desc: "Reliable, scalable and proactive IT support services to ensure your business operations run smoothly, securely and without interruption.",
    techs: ["GitLab", "Docker", "InfluxDB", "Grafana"],
    banner: { label: "IT Support" },
    overview: {
      heading: "Transforming IT support with expertise and innovation",
      paragraphs: [
        "In today's rapidly evolving digital landscape, organizations face numerous challenges — from maintaining system uptime to managing complex infrastructure and ensuring security. Our IT support services provide round-the-clock reliability so your business never stops.",
      ],
    },
    benefits: {
      label: "What we deliver",
      heading: "Comprehensive IT support & maintenance",
      features: [
        {
          title: "24/7 Technical Support",
          desc: "Round-the-clock technical support to address IT issues, resolve system problems and ensure minimal downtime for your critical business operations.",
        },
        {
          title: "Proactive System Monitoring",
          desc: "We continuously monitor systems to detect issues early, resolve them proactively and keep your operations running smoothly without interruption.",
        },
        {
          title: "Security & Compliance",
          desc: "Leverage the latest in security technology with proactive monitoring, patching and compliance management to protect your business around the clock.",
        },
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Industries                                                                  */
/* -------------------------------------------------------------------------- */

export type Industry = {
  slug: string;
  title: string;
  label?: string;
  icon: LucideIcon;
  tagline: string;
  focusAreas: string[];
  heroHeading?: string;
  intro?: string;
  stats?: { value: string; label: string }[];
  pillars?: { icon: LucideIcon; title: string; desc: string }[];
  journey?: { icon: LucideIcon; title: string; desc: string }[];
  pathway?: { title: string; desc: string }[];
  platformFeatures?: { icon: LucideIcon; title: string; desc: string }[];
  flow?: { icon: LucideIcon; label: string; desc: string }[];
  techEnablers?: { icon: LucideIcon; name: string; desc: string }[];
  layers?: { icon: LucideIcon; title: string; desc: string; coverage: number }[];
  channels?: { icon: LucideIcon; label: string }[];
  ecommerceMetrics?: { value: string; label: string; trend?: string }[];
  workflow?: { icon: LucideIcon; label: string; desc: string }[];
  sections?: {
    label?: string;
    heading: string;
    paragraphs?: string[];
  }[];
  subIndustries?: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  faq?: {
    label?: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  cta?: {
    heading?: string;
    paragraphs?: string[];
    button?: string;
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
    heroHeading: "Shaping the next era of financial services with AI at the core",
    intro:
      "In financial services, transformation is no longer a choice — it is a continuous necessity. Institutions face rising customer expectations, evolving risk landscapes, regulatory complexity and the urgent need to modernize legacy systems.",
    stats: [
      { value: "$12T+", label: "Assets processed annually" },
      { value: "40%", label: "Operational cost reduction" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "12+", label: "Countries served" },
    ],
    sections: [
      {
        heading: "Engineering the future of finance",
        paragraphs: [
          "We help financial institutions modernize core platforms, embed AI into decisioning and comply with shifting regulation — without disruption to daily operations. From neo-banking to capital markets infrastructure, our engineering teams build for resilience, auditability and scale.",
        ],
      },
    ],
    subIndustries: {
      heading: "Areas we serve",
      items: [
        {
          title: "Insurance",
          desc: "Embrace the future of insurance by protecting what matters most to your customers through our technology, expertise and ecosystem.",
        },
        {
          title: "Capital Markets",
          desc: "Cultivate sustainable, long-term growth and resilience with a comprehensive suite of digital tools and technologies.",
        },
        {
          title: "Fintech",
          desc: "Combine the strengths of traditional and neo banking to deliver innovative experiences while achieving significant cost efficiencies.",
        },
      ],
    },
    cta: {
      heading: "Ready to modernize your financial stack?",
      paragraphs: [
        "We help you define a roadmap, ship the first milestone in weeks and operate the platform with the security and uptime your regulators expect.",
      ],
      button: "Talk to our team",
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    tagline: "Patient-centric care, empowered by AI, data & genomics.",
    focusAreas: ["Telemedicine", "AI Diagnostics", "Genomics"],
    heroHeading: "Technology driving the future of patient care",
    intro:
      "Personalized healthcare, innovative care delivery models, rising cost pressures and evolving regulatory requirements are reshaping the healthcare landscape. In this dynamic environment, technology plays a critical role in advancing patient outcomes and operational efficiency.",
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
        heading: "Technology driving the future of patient care",
        paragraphs: [
          "From telemedicine to AI-powered diagnostics, technological innovation is redefining how care is delivered and how diseases are detected. Breakthroughs in genomic research are unlocking the potential of personalized medicine, while advances in biotechnology are enabling the development of next-generation therapies.",
          "Despite this progress, challenges around affordability, accessibility and data security remain at the forefront. We help healthcare organizations modernize their digital ecosystems, integrate fragmented systems and align processes, technology and people — empowering them to deliver smarter, safer and more patient-centric care.",
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
    heroHeading: "Transforming education through technology",
    intro:
      "The education sector is evolving rapidly, driven by digital learning, changing student expectations and the need for scalable, accessible education models. Institutions balance innovation with affordability, data privacy and regulatory compliance — all while striving to deliver meaningful learning experiences.",
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
        heading: "Future-ready, inclusive and secure digital campuses",
        paragraphs: [
          "Technology is reshaping education through virtual classrooms, AI-powered learning platforms, learning analytics and personalized education pathways. Cloud-based systems and digital collaboration tools are enabling institutions to expand access, improve engagement and enhance academic outcomes.",
          "Despite these advancements, challenges such as digital inequality, system integration, cybersecurity risks and data protection continue to impact educational environments. We help educational institutions modernize their digital infrastructure, integrate learning systems, secure sensitive data and align technology with educators and learners — empowering smarter, more inclusive and future-ready education.",
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
    heroHeading: "IT solutions for travel, transportation, logistics & hospitality",
    intro:
      "AI-powered engagement, hyper-personalized connected experiences and increasing supply chain pressures are redefining the travel, transportation, logistics and hospitality industries.",
    flow: [
      {
        icon: PackageCheck,
        label: "Source",
        desc: "Supplier onboarding, contracts, ESG screening and demand-sensing that start the chain right.",
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
        heading: "Making digital work for real people",
        paragraphs: [
          "Modern travel and logistics technologies are transforming business outcomes. From hospitality IT solutions that elevate guest experiences to end-to-end logistics management platforms that improve efficiency and reliability, the industry is evolving rapidly.",
          "At the same time, technology is accelerating supply chain velocity. Advanced transportation solutions help organizations reduce costs by enabling real-time visibility and seamless information sharing between trading partners and service providers. Targeted investments in cloud platforms, 5G connectivity, Generative AI and blockchain enable organizations to deliver the seamless, personalized experiences customers expect.",
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
    heroHeading: "Comprehensive cybersecurity for modern enterprises",
    intro:
      "In an era of increasing cyber threats and digital transformation, Globantis delivers advanced cybersecurity solutions that protect businesses from complex and evolving risks. Our security-first approach ensures confidentiality, integrity and availability of critical systems while enabling organizations to scale securely.",
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
    faq: {
      label: "What we secure",
      heading: "What we secure",
      items: [
        {
          q: "What cybersecurity solutions do you offer?",
          a: "We provide comprehensive cybersecurity solutions including threat assessment, penetration testing, security infrastructure design, incident response planning and employee security awareness training. Our team of certified security experts ensures your organization is protected against evolving cyber threats.",
        },
        {
          q: "How do you identify weaknesses in our network?",
          a: "Our certified ethical hackers conduct rigorous penetration testing to simulate real-world cyberattacks. We perform deep-layer scans of your applications and infrastructure to uncover hidden vulnerabilities, providing you with a prioritized remediation roadmap to close security gaps before they are exploited.",
        },
        {
          q: "Can you help us meet regulatory standards (ISO, SOC2, GDPR)?",
          a: "Yes. We streamline the path to compliance by conducting thorough gap analyses and implementing the necessary technical and administrative controls. Our team ensures your organization meets industry-specific standards, reducing legal liability and building trust with your global clients.",
        },
        {
          q: "How do you protect against human-error and phishing?",
          a: "We transform your employees into your strongest line of defense. Our program includes simulated phishing campaigns, interactive security training modules and ongoing behavioral analysis to ensure your team can recognize and report sophisticated social engineering attacks.",
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
    heroHeading: "Trustworthy, scalable and optimized e-commerce & retail development",
    intro:
      "Increased automation, experience-driven engagement and data-powered decision-making are redefining modern retail. As customer expectations continue to rise, retailers must deliver seamless, personalized experiences across every touchpoint.",
    channels: [
      { icon: Globe, label: "Web" },
      { icon: Smartphone, label: "Mobile App" },
      { icon: ShoppingBag, label: "Marketplaces" },
      { icon: Share2, label: "Social" },
      { icon: CreditCard, label: "POS" },
      { icon: Mic, label: "Voice" },
    ],
    ecommerceMetrics: [
      { value: "+38%", label: "Conversion uplift", trend: "vs. baseline" },
      { value: "0.8s", label: "Page speed (LCP)" },
      { value: "-27%", label: "Cart abandonment" },
    ],
    sections: [
      {
        label: "Digital Commerce",
        heading: "Powering the future of digital commerce",
        paragraphs: [
          "E-commerce continues to evolve at speed, driven by changing customer behaviours, rising expectations for seamless experiences and increasing competition across digital marketplaces. To succeed, businesses must deliver fast, secure and personalized commerce experiences at scale.",
          "Technology is at the heart of this transformation. From AI-driven personalization and data-led decision-making to automation, cloud platforms and secure digital payments, modern e-commerce ecosystems demand agility and resilience.",
        ],
      },
    ],
    cta: {
      heading: "Let's talk project",
      paragraphs: [
        "To succeed in this evolving landscape, you need a retail solutions partner who can guide you through emerging digital technologies and help maximize return on investment by adopting the right platforms at the right time.",
      ],
      button: "Let's talk project",
    },
  },
  {
    slug: "automation",
    title: "Automation",
    label: "Automation",
    icon: Workflow,
    tagline: "Eliminate manual effort and optimize operations intelligently.",
    focusAreas: ["Intelligent", "Process", "RPA"],
    heroHeading:
      "Automation solutions designed to eliminate manual effort and optimize business operations",
    intro:
      "Automation is no longer about task efficiency alone — it is about building intelligent, adaptive and scalable enterprises. Organizations today are leveraging automation to simplify complexity, accelerate innovation and respond faster to changing market demands.",
    workflow: [
      {
        icon: Zap,
        label: "Trigger",
        desc: "Event, schedule or API signal kicks off the workflow.",
      },
      {
        icon: BrainCircuit,
        label: "AI Decision",
        desc: "Models classify intent, score risk and route the request.",
      },
      {
        icon: Bot,
        label: "Bot Action",
        desc: "RPA bots execute tasks across legacy & SaaS systems.",
      },
      {
        icon: MonitorCheck,
        label: "Monitor",
        desc: "Live observability, alerts and exception handling.",
      },
      {
        icon: RefreshCw,
        label: "Optimize",
        desc: "Loop telemetry back into the model for continuous tuning.",
      },
    ],
    subIndustries: {
      heading: "Our automation services",
      items: [
        {
          title: "Intelligent automation powering the future of business",
          desc: "Automation is no longer about task efficiency alone — it is about building intelligent, adaptive and scalable enterprises. Organizations today are leveraging automation to simplify complexity, accelerate innovation and respond faster to changing market demands.",
        },
        {
          title: "Intelligent Automation",
          desc: "By combining AI, machine learning and automation, we build smart systems that can analyze data, make decisions and adapt over time. This enables predictive insights, automated decision-making and enhanced operational intelligence.",
        },
        {
          title: "Process Automation",
          desc: "We automate end-to-end business processes to improve speed, consistency and productivity. From data entry and reporting to approval workflows, our solutions minimize human intervention and reduce errors.",
        },
        {
          title: "Robotic Process Automation (RPA)",
          desc: "Our RPA solutions use software bots to handle repetitive, rule-based tasks across applications — such as billing, payroll processing, invoice handling and customer onboarding — without disrupting existing systems.",
        },
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Why choose us / work process / technologies / careers                       */
/* -------------------------------------------------------------------------- */

export const whyChooseTop = [
  {
    title: "Trusted & Reliable",
    desc: "We build long-term partnerships through transparency, accountability and consistent delivery — earning trust at every stage of engagement.",
  },
  {
    title: "24/7 Customer Support",
    desc: "We continuously monitor systems to ensure performance and security. Issues are identified and resolved proactively to keep operations running smoothly.",
  },
  {
    title: "Global Client Experience",
    desc: "We work with clients across the USA, Canada and India, understanding international business expectations, compliance needs and delivery standards.",
  },
];

export const whyChooseGrid = [
  {
    title: "Skilled & Agile Teams",
    desc: "Our experienced engineers and consultants follow agile methodologies to deliver flexible, high-quality solutions with faster time-to-market.",
  },
  {
    title: "Latest Technology",
    desc: "We use modern, cutting-edge technologies to build secure and future-ready solutions. Our focus on innovation ensures high performance, scalability and long-term value.",
  },
  {
    title: "Secure & Scalable Solutions",
    desc: "Security, performance and scalability are built into everything we deliver, ensuring solutions grow with your business.",
  },
  {
    title: "Cost-Effectiveness",
    desc: "We deliver high-quality, secure solutions at optimized costs. Our efficient processes and transparent pricing ensure maximum value and ROI.",
  },
  {
    title: "Clear Communication & On-Time Delivery",
    desc: "We maintain open communication, predictable timelines and proactive reporting across time zones.",
  },
  {
    title: "Enhanced Security",
    desc: "Security is embedded into every solution we build at Globantis Labs. We follow global security standards and best practices to protect data, systems and applications. Our proactive approach ensures reliability, compliance and peace of mind for our clients.",
  },
];

export const workProcessSteps = [
  {
    title: "Discovery & Requirement Analysis",
    desc: "We begin by understanding your business objectives, technical requirements and market challenges. Through detailed discussions and analysis, we define a clear project scope aligned with your goals.",
  },
  {
    title: "Planning & Strategy",
    desc: "Our team creates a well-defined project roadmap, architecture and delivery plan. Timelines, milestones and risk factors are identified to ensure predictable and efficient execution.",
  },
  {
    title: "Design & Prototyping",
    desc: "We design intuitive user experiences and robust system architectures. Prototypes and design mockups are shared early to gather feedback and ensure alignment before development begins.",
  },
  {
    title: "Development & Implementation",
    desc: "Using agile methodologies, our engineers build secure, scalable and high-performance solutions. Regular updates and sprint reviews keep clients informed throughout the development lifecycle.",
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Every solution undergoes rigorous testing for functionality, performance, security and compliance. We ensure the final product meets international quality standards.",
  },
  {
    title: "Deployment & Launch",
    desc: "We manage seamless deployment with minimal disruption, including infrastructure setup, data migration and production rollout — ensuring a smooth go-live for your team and users.",
  },
  {
    title: "Support & Continuous Improvement",
    desc: "Post-launch, we provide ongoing support, maintenance and enhancements to ensure long-term reliability and continuous improvement.",
  },
];

export const technologiesGrid = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Go", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "Laravel", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Kafka", category: "Streaming" },
  { name: "Elasticsearch", category: "Search" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "GitLab", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Puppet", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "Keras", category: "AI/ML" },
  { name: "Figma", category: "Design" },
  { name: "InfluxDB", category: "Database" },
  { name: "Grafana", category: "Observability" },
];

export const jobOpenings = [
  {
    id: "01",
    title: "AI / Software Developer Intern",
    type: "Internship",
    location: "Remote / Chennai / Hybrid",
    deadline: "April 4, 2026",
    desc: "We are looking for an AI / Software Developer Intern who is passionate about building intelligent systems. This role offers hands-on experience in developing and deploying AI models along with software development. You will work alongside senior engineers on production-grade systems and ship features that reach real users.",
    href: "https://careers.globantislabs.com/",
  },
];

export const careersBenefits = [
  {
    icon: Globe2,
    title: "Global Delivery",
    desc: "Work across our US, Canada and India offices on international enterprise projects.",
  },
  {
    icon: Cpu,
    title: "Modern Stack",
    desc: "TypeScript, React, Python, Go, Kubernetes, GenAI — work with the tools you actually want to use.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Culture",
    desc: "We treat security and reliability as engineering first principles — not afterthoughts.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    desc: "Mentorship, conference budget and a transparent promotion framework. Your trajectory is visible.",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact / appointment info                                                  */
/* -------------------------------------------------------------------------- */

export const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@globantislabs.com",
    href: "mailto:sales@globantislabs.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (508) 555-6956",
    href: "tel:+15085556956",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9:00–18:00 (ET)",
  },
];

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

export { Sparkles, BrainCircuit, Code2, ShieldCheck, Rocket, Cpu };
