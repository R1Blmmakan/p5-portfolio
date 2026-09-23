import { AboutItem, DialogueItem, ChronicleChapter } from "../types/portfolio";

export const CHRONICLES: ChronicleChapter[] = [
  {
    numeral: "I",
    tag: "ORIGIN & IDENTITY",
    title: "THE AWAKENING",
    subtitle: "Vocational Software Engineering at Metland School",
    affinity: "LEADER // CREATIVE",
    accent: "#e2b357",
    content: [
      "I began programming at age 14, driven by a deep fascination with how digital interfaces can evoke raw emotion. Rather than viewing code as cold technical instructions, I treat it as digital architecture and kinetic art.",
      "Currently pursuing Software Engineering (Rekayasa Perangkat Lunak) at Metland Vocational School. Balancing academic coursework with aggressive self-taught exploration into modern web engines, design systems, and resilient asynchronous architectures."
    ],
    specs: [
      { label: "AGE & FOCUS", value: "16 Years Old • Full-Stack Creative Engineering" },
      { label: "INSTITUTION", value: "SMK Rekayasa Perangkat Lunak (Metland)" },
      { label: "STATUS", value: "Ready for Industrial Apprenticeship & Production Roles" }
    ],
    tags: ["VOCATIONAL PRODIGY", "SELF-TAUGHT DISCIPLINE", "CREATIVE CODING"]
  },
  {
    numeral: "II",
    tag: "FRONTEND SORCERY",
    title: "FRONTEND ALCHEMY",
    subtitle: "High-Frequency Reactive Systems & Mathematical CSS",
    affinity: "MASTERY // 60FPS",
    accent: "#38bdf8",
    content: [
      "Mastery over React 19, TypeScript, and modern component lifecycle orchestration. Specialized in pushing web rendering boundaries using custom CSS polygon matrices, Framer Motion springs, and GPU compositing.",
      "I prioritize sub-millisecond responsiveness: every transition, slant cut, and modal is engineered with will-change GPU layers, lazy-loaded chunk splitting, and zero-latency route prefetching."
    ],
    specs: [
      { label: "CORE ENGINE", value: "React 19, TypeScript, Next.js, Vite" },
      { label: "MOTION & UI", value: "Vanilla CSS Polygons, Framer Motion, WebGL Shaders" },
      { label: "PERFORMANCE", value: "0ms Prefetching, 60/120 FPS GPU Compositing, WebP" }
    ],
    tags: ["REACT 19", "TYPESCRIPT", "GPU ANIMATION", "SHADERS"]
  },
  {
    numeral: "III",
    tag: "SYSTEMS & BACKEND",
    title: "BACKEND ARCHITECTURE",
    subtitle: "Resilient APIs, Data Relational Modeling & Security",
    affinity: "ENGINEERING // RESILIENCE",
    accent: "#f43f5e",
    content: [
      "A great visual experience is only as powerful as the infrastructure behind it. I architect robust backend services with Node.js and Express, following clean layered design (Controllers, Services, Repositories).",
      "Proficient in PostgreSQL database modeling, secure JWT authentication with refresh token rotation, rate-limiting, and error-handling traps that keep production endpoints stable."
    ],
    specs: [
      { label: "SERVER STACK", value: "Node.js, Express REST APIs, Docker, Clean Architecture" },
      { label: "DATABASE", value: "PostgreSQL, Relational Modeling, Query Indexing" },
      { label: "SECURITY", value: "JWT Auth Rotation, Helmet, CORS, Input Sanitization" }
    ],
    tags: ["NODE.JS", "EXPRESS", "POSTGRESQL", "REST APIS", "DOCKER"]
  },
  {
    numeral: "IV",
    tag: "HONORS & VALIDATION",
    title: "BATTLE RECORD",
    subtitle: "National Competition Victory & Verified Badges",
    affinity: "CHAMPION // ACCREDITED",
    accent: "#eab308",
    content: [
      "Earned 1st Place Champion in the National Vocational Web Craft & UI/UX Championship, recognized by the Vocational Skills Council for outstanding interface design, accessible markup, and rapid prototyping under pressure.",
      "Backed by industry credentials including BNSP Certified Junior Software Engineer (Web) and advanced certifications in modern web architecture."
    ],
    specs: [
      { label: "NATIONAL TITLE", value: "1st Winner: National Web Craft & UI/UX Championship (2024)" },
      { label: "CERTIFICATION", value: "BNSP Junior Software Engineer (Web Competency)" },
      { label: "LIVE SHOWCASE", value: "Multiple full-stack and creative projects active in production" }
    ],
    tags: ["1ST WINNER", "BNSP CERTIFIED", "VERIFIED COMPETENCE"]
  },
  {
    numeral: "V",
    tag: "THE CONTRACT",
    title: "MISSION & WORK ETHIC",
    subtitle: "Philosophy, Apprenticeship Ambition & Target Guilds",
    affinity: "DEDICATION // FUTURE",
    accent: "#22d3ee",
    content: [
      "My objective is straightforward: join a forward-thinking engineering team, design-driven tech startup, or creative agency where I can build impactful products and level up alongside senior engineers.",
      "I bring uncompromising work ethic, quick adaptability to unfamiliar stacks, and a genuine obsession with crafting software that people remember."
    ],
    specs: [
      { label: "AVAILABILITY", value: "Open for 2026 Industrial Apprenticeship, Junior Role & Contracts" },
      { label: "LOCATION", value: "Jakarta, Indonesia (On-site / Hybrid / Remote)" },
      { label: "CORE MOTTO", value: "\"Code with algebraic precision, design with absolute rebellion.\"" }
    ],
    tags: ["OPEN TO HIRE", "APPRENTICESHIP 2026", "HIGH WORK ETHIC"]
  }
];

export const DIALOGUES: DialogueItem[] = [
  {
    id: "identity",
    topic: "IDENTITY // WHO ARE YOU?",
    question: "Who are you and what fuels your engineering drive?",
    quote: "\"I don't just build websites; I build digital worlds you want to explore.\"",
    moodTag: "PHILOSOPHY",
    answer: "I'm Fikri, a 16-year-old software engineer and creative frontend architect from Metland Vocational School. What drives me is the intersection of high-octane visual storytelling and hardcore software engineering. I hate boring, cookie-cutter websites; I want every interface I build to feel tactile, razor-sharp, and unmistakably alive."
  },
  {
    id: "frontend-choice",
    topic: "TECH CRAFT // WHY CREATIVE UI?",
    question: "Why specialize in JRPG & game-inspired web architectures?",
    quote: "\"Gaming UI is the ultimate benchmark for zero-latency user feedback.\"",
    moodTag: "TECH ARSENAL",
    answer: "Games like Persona 5 and Persona 3 Reload mastered emotional design: every menu transition, audio cue, and button click triggers a dopamine hit. Bringing that arcade-grade kinetic feel to the web using modern web technologies (React 19, custom CSS polygon mathematics, and 60fps GPU compositing) proves that frontend engineering can be as thrilling as any console title."
  },
  {
    id: "differentiation",
    topic: "EDGE // WHAT SETS YOU APART?",
    question: "What differentiates you from other junior developers?",
    quote: "\"Most developers only write code. I engineer the entire sensory experience.\"",
    moodTag: "COMPETITIVE EDGE",
    answer: "Three things: 1) True Full-Stack capability: I build the backend APIs and SQL databases just as solidly as the frontend. 2) Obsession with performance: no multi-megabyte bundle bloat, everything is pre-fetched and hardware accelerated. 3) Design taste: I write vanilla CSS polygons and shaders by hand rather than relying on generic UI kits."
  },
  {
    id: "goals",
    topic: "MISSION // WHAT ARE YOUR GOALS?",
    question: "What are you seeking next in your developer journey?",
    quote: "\"Ready to contribute production-ready code to a high-caliber team.\"",
    moodTag: "CAREER OBJECTIVE",
    answer: "I'm actively seeking an industrial apprenticeship or junior frontend/full-stack position for 2026. I want to collaborate with engineers who hold high standards for code quality, architectural scalability, and product polish. If you need a hungry, disciplined developer who learns rapidly and relentlessly, let's talk!"
  }
];

export const ABOUT_ITEMS: AboutItem[] = [
  {
    id: "profile",
    tag: "01",
    label: "PROFILE & BIO",
    shortLabel: "BIO",
    role: { text: "LEADER", color: "#e8c100", border: "rgba(232,193,0,0.6)", accent: "#ffea00" },
    portrait: "/mainm.webp",
    reveal: {
      title: "FIKRI // FULL-STACK CREATIVE ARCHITECT",
      desc: "A passionate 16-year-old software engineer and creative frontend architect. Bridging the gap between robust system engineering and jaw-dropping JRPG gaming aesthetics.",
      sub: "ARCANA: THE ARCHITECT • STATUS: PRODUCTION READY",
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
      title: "ARSENAL: FRONTEND, BACKEND & GRAPHICS",
      desc: "Comprehensive engineering toolkit: High-performance React 19 single-page apps, strongly-typed TypeScript architectures, resilient Node.js / Express microservices, and custom GPU CSS shaders.",
      sub: "WEAPONS CACHE: REACT 19 • TYPESCRIPT • NODE • POSTGRESQL • GL SHADERS",
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
      title: "GUILD TIMELINE & BATTLE RECORD",
      desc: "Software Engineering track student at Metland Vocational School. Awarded 1st place in National Vocational Web Craft and proven architect of immersive game-inspired web platforms.",
      sub: "GUILD STATUS: MISSION-READY FOR 2026 APPRENTICESHIP & PRODUCTION ROLES",
    },
  },
];
