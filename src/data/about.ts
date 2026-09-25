export interface EvidenceTag {
  label: string;
  value: string;
  accent?: "gold" | "red" | "default";
}

export interface SkillStamp {
  name: string;
  highlight?: boolean;
}

export interface SkillColumn {
  heading: string;
  skills: SkillStamp[];
}

export interface AchievementClipping {
  badge: string;
  headline: string;
  description: string;
  type: "gold" | "red";
}

export interface SpecPill {
  label: string;
  value: string;
  highlight?: "gold" | "white" | "red";
}

export interface AboutData {
  topbarText: string;
  identity: {
    portraitImg: string;
    portraitAlt: string;
    verifiedStatus: string;
    fullName: string;
    roleTitle: string;
    evidenceTags: EvidenceTag[];
    recruitmentStatus: {
      header: string;
      label: string;
      highlight: string;
    };
    locationCoords: string;
    resumePdfUrl: string;
  };
  act01: {
    komaNum: string;
    title: string;
    philosophyQuote: string;
    narrative: string;
  };
  act02: {
    komaNum: string;
    title: string;
    columns: SkillColumn[];
  };
  act03: {
    komaNum: string;
    title: string;
    clippings: AchievementClipping[];
    verifyResumeLabel: string;
  };
  act04: {
    komaNum: string;
    title: string;
    narrative: string;
    specs: SpecPill[];
  };
  footerCoords: {
    text: string;
    status: string;
  };
}

export const ABOUT_DATA: AboutData = {
  topbarText: "FIKRI • SOFTWARE ENGINEER",
  identity: {
    portraitImg: "/mainm.webp",
    portraitAlt: "Fikri Portrait",
    verifiedStatus: "VERIFIED CANDIDATE",
    fullName: "R. WAN FIKRI P",
    roleTitle: "FULL-STACK SOFTWARE ENGINEER",
    evidenceTags: [
      { label: "[EXPERIENCE]", value: "5 YEARS CODING EXP" },
      { label: "[EDUCATION]", value: "SMK METLAND (PPLG)" },
      { label: "[CERTIFICATION]", value: "LKS ", accent: "gold" },
      {
        label: "[ACHIEVEMENT]",
        value: "1ST NATIONAL WEB CRAFT",
        accent: "red",
      },
    ],
    recruitmentStatus: {
      header: "STATUS & RECRUITMENT AVAILABILITY",
      label: "RECRUITMENT STATUS:",
      highlight: "OPEN FOR On-The-Job Training as of 2027",
    },
    locationCoords: "JONGGOL, ID • HYBRID / REMOTE",
    resumePdfUrl: "/Resume.pdf",
  },
  act01: {
    komaNum: "ACT 01",
    title: "PROFESSIONAL BACKGROUND & PHILOSOPHY",
    philosophyQuote:
      "ARCHITECTING ROBUST SYSTEMS, CLEAN INTERFACES, AND PRODUCTION-READY LOGIC.",
    narrative:
      "Vocational Software Engineering student focused on building resilient full-stack architectures and high-performance applications. Experienced in developing responsive, modular interfaces paired with structured backend services, efficient database schemas, and dependable API pipelines. Driven by clean architecture, type safety, and engineering discipline built to withstand real-world production demands.",
  },
  act02: {
    komaNum: "ACT 02",
    title: "TECHNICAL SKILLS & CORE STACK",
    columns: [
      {
        heading: "⚔ FRONTEND & UI DEVELOPMENT",
        skills: [
          { name: "React", highlight: true },
          { name: "PHP/Laravel" },
          { name: "TypeScript" },
          { name: "Next.js" },
          { name: "Vite" },
          { name: "Modern CSS" },
          { name: "Framer Motion" },
          { name: "Windows Forms" },
          
        ],
      },
      {
        heading: "⚡ BACKEND & DATABASE",
        skills: [
          { name: "Node.js" },
          { name: "Express REST" },
          { name: "PostgreSQL", highlight: true },
          { name: "SQL Server" },
          { name: ".NET" },
          { name: "Clean Arch" },
          { name: "JWT Auth" },
          { name: "Docker" },
        ],
      },
    ],
  },
  act03: {
    komaNum: "ACT 03",
    title: "CERTIFICATIONS & ACHIEVEMENTS",
    clippings: [
      {
        badge: "★ 5TH PLACE",
        headline: "LOMBA KOMPETENSI SISWA TINGKAT KABUPATEN (2026)",
        description:
          "Ranked #5 regencywide by Vocational Skills Council for robust desktop programming app using .NET with Windows Form and SQL Server as backend.",
        type: "gold",
      },
      {
        badge: "✦ GOV CERTIFIED",
        headline: "BNSP Certified Junior Software Engineer",
        description:
          "Official national certification validating industry competence in software architecture, database relational design, and production web deployment.",
        type: "red",
      },
    ],
    verifyResumeLabel: "VERIFY CREDENTIALS & LICENSES IN RESUME",
  },
  act04: {
    komaNum: "ACT 04",
    title: "CAREER OBJECTIVE & AVAILABILITY",
    narrative:
      "Actively seeking an industrial apprenticeship or junior software engineer role. Ready to contribute production-grade code to engineering teams with solid TypeScript and React foundations, reliable backend knowledge, eager adaptability, and high professional work ethic.",
    specs: [
      { label: "STATUS", value: "OPEN FOR 2027 OJT", highlight: "gold" },
      { label: "LOCATION", value: "JONGGOL, ID • HYBRID / REMOTE" },
      { label: "ROLE FOCUS", value: "FULL-STACK / FRONTEND ENGINEER" },
    ],
  },
  footerCoords: {
    text: "PORTFOLIO PROFILE // FIKRI • JONGGOL, ID",
    status: "AVAILABLE 2026 / 2027",
  },
};
