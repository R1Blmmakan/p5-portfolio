import { ResumeItem } from "../types/portfolio";

export const RESUME_ITEMS: ResumeItem[] = [
  {
    id: "i",
    badge: "I",
    title: "EDUCATION",
    subtitle: "HIGH SCHOOL / VOCATIONAL SOFTWARE ENGINEERING",
    rank: 3,
    charImg: "/char1.webp",
    details: {
      topIndex: "01",
      topTitle: "EDUCATION LOG",
      topProgress: "4/4",
      rows: [
        { index: "01", title: "SMK Software Engineering (RPL)", status: "In Progress", statusClass: "in-progress" },
        { index: "02", title: "Modern Web Fundamentals & Architecture", status: "Complete", statusClass: "complete" },
        { index: "03", title: "Industrial Apprenticeship / OJT Track", status: "Ready", statusClass: "ready" },
        { index: "04", title: "Vocational Capstone Project Track", status: "Active", statusClass: "in-progress" },
      ],
      bottomTitle: "ACADEMIC SUMMARY",
      bullets: [
        "Focusing on Software Engineering (Rekayasa Perangkat Lunak) with strong web development core.",
        "Hands-on coursework covering responsive interfaces, component architectures, and data structures.",
        "Preparing portfolio-grade production applications for upcoming industrial internship and review.",
      ],
    },
  },
  {
    id: "ii",
    badge: "II",
    title: "SKILLS",
    subtitle: "Frontend / Backend / Problem-Solving",
    rank: 4,
    charImg: "/char2.webp",
    details: {
      topIndex: "02",
      topTitle: "TECH ARSENAL",
      topProgress: "MAX",
      rows: [
        { index: "01", title: "React.js & Modern TypeScript", status: "Mastered", statusClass: "mastered" },
        { index: "02", title: "Node.js & Express REST APIs", status: "Advanced", statusClass: "in-progress" },
        { index: "03", title: "PostgreSQL & Database Modeling", status: "Proficient", statusClass: "complete" },
        { index: "04", title: "CSS3 / Animation / Game UI", status: "Mastered", statusClass: "mastered" },
      ],
      bottomTitle: "ARSENAL SPECIALTY",
      bullets: [
        "Specialized in crafting dynamic, interactive web applications with bold gaming aesthetics.",
        "Strong understanding of state management, clean component hierarchy, and asynchronous workflows.",
        "Fluent with modern tooling including Vite, Git version control, ESLint, and responsive CSS paradigms.",
      ],
    },
  },
  {
    id: "iii",
    badge: "III",
    title: "CERTIFICATES",
    subtitle: "Verified Credentials & Competition Honors",
    rank: 5,
    charImg: "/char3.webp",
    details: {
      topIndex: "03",
      topTitle: "CREDENTIAL ARCHIVE",
      topProgress: "VERIFIED",
      rows: [
        { index: "01", title: "BNSP: Junior Software Engineer (Web)", status: "Certified", statusClass: "mastered", issuer: "Badan Nasional Sertifikasi Profesi", year: "2025" },
        { index: "02", title: "Dicoding: Full-Stack Web Development React & Node", status: "Verified", statusClass: "featured", issuer: "Dicoding Indonesia", year: "2024" },
        { index: "03", title: "National Web Craft & UI/UX Vocational Competition", status: "1st Winner", statusClass: "mastered", issuer: "Vocational Skills Council", year: "2024" },
        { index: "04", title: "freeCodeCamp: JavaScript Algorithms & Data Structures", status: "Certified", statusClass: "complete", issuer: "freeCodeCamp", year: "2023" },
      ],
      bottomTitle: "CREDENTIAL SUMMARY",
      bullets: [
        "Official software engineering certifications and verified competitive awards.",
        "Click any certificate row to inspect mock credential certificate dossier.",
        "Validated competence in responsive web design, asynchronous logic, and production deployment.",
      ],
    },
  },
  {
    id: "iv",
    badge: "IV",
    title: "EXPERIENCES",
    subtitle: "Journey & Industry Readiness",
    rank: 2,
    charImg: "/mainm.webp",
    details: {
      topIndex: "04",
      topTitle: "QUEST TIMELINE",
      topProgress: "OPEN",
      rows: [
        { index: "01", title: "SMK Software Engineering Student", status: "Ongoing", statusClass: "in-progress" },
        { index: "02", title: "Independent Full-Stack Developer", status: "Active", statusClass: "complete" },
        { index: "03", title: "Open Source & Web Experiments", status: "Active", statusClass: "featured" },
        { index: "04", title: "Industry Internship / Junior Role", status: "Ready", statusClass: "ready" },
      ],
      bottomTitle: "CAREER OBJECTIVES",
      bullets: [
        "Active seeker of real-world software engineering internship or apprentice opportunities.",
        "Enthusiastic team player keen on collaborating, receiving feedback, and solving complex web problems.",
        "Dedicated to continuous skill leveling and creating memorable digital web experiences.",
      ],
    },
  },
];
