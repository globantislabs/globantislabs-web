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

/**
 * Tech logo image path helper.
 * The original WordPress site uses these PNG logos from
 * wp-content/uploads/2024/10/ (we copied them to /public/images/wp/2024-10/).
 */
const techImg = (filename: string) =>
  `/images/wp/2024-10/${filename}.png`;

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  techs: { name: string; img: string }[];
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Our web development services focus on performance, reliability, and user experience. We create modern web applications that are responsive, secure, and built to scale globally.",
    techs: [
      { name: "React", img: techImg("tek_02") },
      { name: "Angular", img: techImg("tek_03") },
      { name: "Node", img: techImg("tek_001") },
      { name: "Next", img: techImg("tek_01") },
    ],
  },
  {
    icon: ServerCog,
    title: "DevOps Services",
    desc: "We deliver end-to-end DevOps services that help organizations accelerate software delivery, improve reliability, and scale infrastructure globally.",
    techs: [
      { name: "GitLab", img: techImg("gitlab") },
      { name: "Juju", img: techImg("juju") },
      { name: "Git", img: techImg("git") },
      { name: "Puppet", img: techImg("puppet") },
    ],
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "We provide reliable global support services to ensure your software operates smoothly, securely, and efficiently at all times.",
    techs: [
      { name: "GitLab", img: techImg("gitlab") },
      { name: "Juju", img: techImg("juju") },
      { name: "Git", img: techImg("git") },
      { name: "Puppet", img: techImg("puppet") },
    ],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "We design intuitive and engaging digital experiences that align with global user expectations and business objectives.",
    techs: [
      { name: "Hotjar", img: techImg("hotjar") },
      { name: "Figma", img: techImg("figma") },
      { name: "Sketch", img: techImg("sketch") },
      { name: "Azure", img: techImg("azure") },
    ],
  },
  {
    icon: Boxes,
    title: "CMS Development",
    desc: "Our ERP and CRM solutions empower organizations to streamline operations, improve customer relationships, and drive data-driven growth.",
    techs: [
      { name: "Juju", img: techImg("juju") },
      { name: "Docker", img: techImg("tek_10") },
      { name: "InfluxDB", img: techImg("influxdb") },
      { name: "React", img: techImg("tek_02") },
    ],
  },
  {
    icon: ShieldCheck,
    title: "IT Support and Services",
    desc: "We provide reliable, scalable, and proactive IT support services to ensure your business operations run smoothly, securely, and without interruption.",
    techs: [
      { name: "Juju", img: techImg("juju") },
      { name: "Docker", img: techImg("tek_10") },
      { name: "InfluxDB", img: techImg("influxdb") },
      { name: "React", img: techImg("tek_02") },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "We help organizations harness AI and Machine Learning to automate operations, enhance decision-making, and unlock new business opportunities.",
    techs: [
      { name: "Keras", img: techImg("keras") },
      { name: "Plotly", img: techImg("plotly") },
      { name: "Grafana", img: techImg("grafana") },
      { name: "InfluxDB", img: techImg("influxdb") },
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "We develop high-performance mobile applications that deliver consistent user experiences across Android and iOS devices worldwide.",
    techs: [
      { name: "Swift", img: techImg("tek_04") },
      { name: "Kotlin", img: techImg("tek_06") },
      { name: "Flutter", img: techImg("tek_05") },
      { name: "React Native", img: techImg("tek_07") },
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "We build enterprise-grade, custom software solutions designed to meet unique business requirements.",
    techs: [
      { name: "Java", img: techImg("tek_04") },
      { name: "Python", img: techImg("tek_06") },
      { name: "Go", img: techImg("tek_05") },
      { name: "C#", img: techImg("tek_07") },
    ],
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
