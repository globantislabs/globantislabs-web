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
  Layers,
  ShieldCheck,
  Sparkles,
  Scale,
  Rocket,
  Cpu,
} from "lucide-react";

export const company = {
  name: "Globantis Labs",
  tagline: "Transforming Ideas Into IT Solutions",
  phone: "(+009) 155-69566",
  phoneHref: "tel:+00915569566",
  email: "[email protected]",
  emailHref: "mailto:[email protected]",
  usaAddress: "374 William S Canning Blvd, Fall River MA Road 2721, USA",
  canadaAddress: "3992 Rue de la Seine Laval, Québec H7W 2S3, Canada",
  founded: "2026",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; desc?: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "About Globantis",
    href: "#about",
    children: [
      { label: "About Us", desc: "About Globantis", href: "#about" },
      { label: "Career", desc: "Join Our Team", href: "#about" },
      { label: "Appointment", desc: "Free Appointment", href: "#consultation" },
      { label: "Why Choose Us", desc: "Quality & Continuity", href: "#why" },
      { label: "Technology", desc: "Latest Technology", href: "#services" },
      { label: "Work Process", desc: "Explore Process", href: "#why" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Software Development", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Artificial Intelligence", href: "#services" },
      { label: "ERP/CRM & CMS Development", href: "#services" },
      { label: "DevOps Services", href: "#services" },
      { label: "IT Support Services", href: "#services" },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    children: [
      { label: "Financial Services", href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Education", href: "#industries" },
      { label: "Automation", href: "#industries" },
      { label: "Logistics", href: "#industries" },
      { label: "Cybersecurity", href: "#industries" },
      { label: "E-commerce & Retail", href: "#industries" },
    ],
  },
  {
    label: "Product",
    href: "#products",
    children: [
      { label: "Photolabs", href: "#products" },
      { label: "TranscriptHQ", href: "#products" },
      { label: "Try Before", href: "#products" },
    ],
  },
  { label: "Contact", href: "#contact" },
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

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  techs: string[];
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Our web development services focus on performance, reliability, and user experience. We create modern web applications that are responsive, secure, and built to scale globally.",
    techs: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: ServerCog,
    title: "DevOps Services",
    desc: "We deliver end-to-end DevOps services that help organizations accelerate software delivery, improve reliability, and scale infrastructure globally.",
    techs: ["Docker", "Kubernetes", "AWS", "GitLab CI"],
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "We provide reliable global support services to ensure your software operates smoothly, securely, and efficiently at all times.",
    techs: ["24/7 Monitoring", "SLA", "Incident Response"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "We design intuitive and engaging digital experiences that align with global user expectations and business objectives.",
    techs: ["Figma", "Design Systems", "Prototyping", "Research"],
  },
  {
    icon: Boxes,
    title: "CMS Development",
    desc: "Our ERP and CRM solutions empower organizations to streamline operations, improve customer relationships, and drive data-driven growth.",
    techs: ["ERP", "CRM", "Headless CMS", "Workflows"],
  },
  {
    icon: ShieldCheck,
    title: "IT Support and Services",
    desc: "We provide reliable, scalable, and proactive IT support services to ensure your business operations run smoothly, securely, and without interruption.",
    techs: ["Helpdesk", "Infrastructure", "Security", "Cloud"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "We help organizations harness AI and Machine Learning to automate operations, enhance decision-making, and unlock new business opportunities.",
    techs: ["ML", "LLMs", "Computer Vision", "NLP"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "We develop high-performance mobile applications that deliver consistent user experiences across Android and iOS devices worldwide.",
    techs: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "We build enterprise-grade, custom software solutions designed to meet unique business requirements.",
    techs: ["Cloud", "Microservices", "APIs", "Enterprise"],
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
    icon: ShieldCheck,
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
  { label: "About", href: "#about" },
  { label: "Work Process", href: "#why" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#about" },
];

export const footerIndustries = [
  { label: "Automation", href: "#industries" },
  { label: "Education", href: "#industries" },
  { label: "Financial Services", href: "#industries" },
  { label: "Healthcare", href: "#industries" },
  { label: "Logistics", href: "#industries" },
];

export { Sparkles };
