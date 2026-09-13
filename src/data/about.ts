import { AboutItem } from "../types/portfolio";

export const ABOUT_ITEMS: AboutItem[] = [
  {
    id: "profile",
    tag: "01",
    label: "PROFILE & BIO",
    shortLabel: "BIO",
    role: { text: "LEADER", color: "#e8c100", border: "rgba(232,193,0,0.6)", accent: "#ffea00" },
    portrait: "/mainm.webp",
    reveal: {
      title: "FIKRI / FULL-STACK DEVELOPER",
      desc: "A passionate 16 years old software engineer.",
      sub: "SPECIALTY: MODERN REACT & UI/UX ARCHITECTURE",
    },
  },
  {
    id: "skills",
    tag: "02",
    label: "TECH ARSENAL",
    shortLabel: "SKILLS",
    role: { text: "SKILLS", color: "#00e1ff", border: "rgba(0,225,255,0.6)", accent: "#3ce2ff" },
    portrait: "/mainm2.webp",
    reveal: {
      title: "ARSENAL: FRONTEND & BACKEND",
      desc: "Core proficiency across React.js, TypeScript, Next.js, Node.js, Express REST APIs, PostgreSQL, TailwindCSS / Custom CSS, and state management architectures.",
      sub: "CORE STACK: REACT • TYPESCRIPT • NODE • SQL",
    },
  },
  {
    id: "experience",
    tag: "03",
    label: "QUESTS & STATUS",
    shortLabel: "QUESTS",
    role: { text: "STATUS", color: "#ff2a7a", border: "rgba(255,42,122,0.6)", accent: "#ff2a7a" },
    portrait: "/mainf.webp",
    reveal: {
      title: "EXPERIENCE & GUILD LOG",
      desc: "Software Engineering student at Metland School. Successfully architected interactive web platforms, creative frontend experiments, and production-ready APIs.",
      sub: "STATUS: AVAILABLE FOR APPRENTICESHIP & ROLES",
    },
  },
];
