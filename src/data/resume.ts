import { ResumeItem } from "../types/portfolio";

export const RESUME_ITEMS: ResumeItem[] = [
  {
    id: "i",
    badge: "I",
    code: "01 // ACADEMICS",
    title: "EDUCATION",
    subtitle: "VOCATIONAL SOFTWARE ENGINEERING & FOUNDATIONS",
    charImg: "/char1.webp",
    details: {
      topIndex: "01",
      topTitle: "EDUCATION DOSSIER",
      topProgress: "2/2 TRACKS",
      rows: [
        {
          index: "01",
          title: "SMK Metland (Rekayasa Perangkat Lunak)",
          subtitle: "Vocational Software Engineering Major",
          organization: "SMK Metland Cibitung",
          period: "2023 - Sekarang (Kelulusan 2026)",
          badge: "AKREDITASI A",
          badgeType: "gold",
          description: "Pendidikan vokasi kejuruan berfokus pada rekayasa perangkat lunak modern, algoritma struktur data, perancangan database relasional, dan arsitektur web enterprise.",
          bullets: [
            "Terpilih sebagai perwakilan sekolah dalam kompetisi kejuruan Web Craft & UI/UX tingkat Nasional.",
            "Memimpin tim pengembang capstone project internal sekolah berbasis React dan Node.js.",
            "Meraih performa akademik konsisten dalam rekayasa perangkat lunak dan arsitektur data."
          ],
          tags: ["Rekayasa Perangkat Lunak", "Web Enterprise", "PostgreSQL", "React", "Clean Architecture"],
          status: "In Progress",
          statusClass: "in-progress"
        },
        {
          index: "02",
          title: "Vocational Capstone & Production Track",
          subtitle: "Full-Cycle Application Delivery & Quality Assurance",
          organization: "SMK Metland Software Lab",
          period: "2024 - 2025",
          badge: "PRODUCTION READY",
          badgeType: "red",
          description: "Implementasi siklus pengembangan perangkat lunak terintegrasi dari tahap UI/UX prototyping hingga integrasi REST API dan deployment.",
          bullets: [
            "Menerapkan Git workflow standar industri, pull request reviews, dan arsitektur single-page application.",
            "Merancang REST API terproteksi otentikasi JWT dan sistem otorisasi berbasis peran (RBAC)."
          ],
          tags: ["Git Workflow", "REST APIs", "JWT Security", "Agile Sprints"],
          status: "Active",
          statusClass: "complete"
        }
      ],
      bottomTitle: "ACADEMIC SUMMARY",
      bullets: [
        "Fokus mendalam pada software engineering dengan spesialisasi frontend interaktif dan arsitektur backend resilient.",
        "Pengalaman langsung dalam component-driven development, state orchestration, dan database relationship modeling.",
        "Siap diterjunkan untuk program magang industri (industrial apprenticeship) tahun 2026."
      ]
    }
  },
  {
    id: "ii",
    badge: "II",
    code: "02 // ARSENAL",
    title: "SKILLS",
    subtitle: "FULL-STACK CAPABILITIES & SYSTEM CRAFT",
    charImg: "/char2.webp",
    details: {
      topIndex: "02",
      topTitle: "TECH ARSENAL",
      topProgress: "3 DOMAINS",
      rows: [
        {
          index: "01",
          title: "Frontend Architecture & Creative UI",
          subtitle: "High-Frequency Reactive Interfaces & Motion",
          organization: "Core Specialty",
          period: "3+ Years Exploration",
          badge: "CORE DOMAIN",
          badgeType: "red",
          description: "Membangun SPA berskala tinggi dengan fokus pada responsivitas sub-milidetik, transisi kinetik, dan efisiensi alokasi memori GPU.",
          bullets: [
            "Penguasaan React 19, TypeScript, dynamic routes, custom hooks, dan state orchestration.",
            "Spesialisasi animasi GPU 60-120 FPS: Vanilla CSS Polygons, mathematical easing, dan Framer Motion.",
            "Optimasi performa frontend: lazy chunk splitting, 0ms route prefetching, dan WebP pipeline."
          ],
          tags: ["React 19", "TypeScript", "Next.js", "Vite", "Framer Motion", "Vanilla CSS"],
          status: "Advanced",
          statusClass: "mastered"
        },
        {
          index: "02",
          title: "Backend Engineering & API Design",
          subtitle: "Resilient Microservices & Structured Data",
          organization: "Server Architecture",
          period: "Production Grade",
          badge: "TESTED",
          badgeType: "gold",
          description: "Perancangan REST API terstruktur dengan prinsip clean layered architecture (Controllers, Services, Repositories).",
          bullets: [
            "Node.js & Express RESTful APIs dengan centralized error handling dan validation pipelines.",
            "PostgreSQL modeling: indexing, relasi foreign key, transaksi ACID, dan sanitasi input.",
            "Keamanan endpoint: JWT token rotation, rate-limiting, CORS policy, dan Helmet headers."
          ],
          tags: ["Node.js", "Express", "PostgreSQL", "REST APIs", "JWT Rotation", "Docker"],
          status: "Proficient",
          statusClass: "in-progress"
        },
        {
          index: "03",
          title: "Developer Tooling & Engineering Standards",
          subtitle: "Collaboration, QA & System Discipline",
          organization: "Workflow Standards",
          period: "Standard Practice",
          badge: "PROFICIENT",
          badgeType: "dark",
          description: "Disiplin alur kerja modern untuk memastikan kode bersih, teruji, dan mudah dipelihara dalam kolaborasi tim.",
          bullets: [
            "Git & GitHub: semantic commit history, interactive rebase, dan pull request code reviews.",
            "Code Quality: ESLint strict configuration, Prettier formatting, dan browser performance profiling."
          ],
          tags: ["Git", "GitHub", "Postman", "Linux / WSL", "ESLint", "Vite Bundler"],
          status: "Proficient",
          statusClass: "complete"
        }
      ],
      bottomTitle: "ARSENAL METHODOLOGY",
      bullets: [
        "Menolak ketergantungan buta pada library UI generik; membangun design system kustom dari nol dengan kontrol penuh.",
        "Selalu memprioritaskan arsitektur data yang terstruktur sebelum menulis baris antarmuka.",
        "Komitmen pada clean code, modularitas komponen, dan performa tinggi."
      ]
    }
  },
  {
    id: "iii",
    badge: "III",
    code: "03 // CREDENTIALS",
    title: "CERTIFICATES",
    subtitle: "VERIFIED HONORS & COMPETENCY ACCREDITATIONS",
    charImg: "/char3.webp",
    details: {
      topIndex: "03",
      topTitle: "CREDENTIAL ARCHIVE",
      topProgress: "4 VERIFIED",
      rows: [
        {
          index: "01",
          title: "Juara 1: National Web Craft & UI/UX Championship",
          subtitle: "Kejuaraan Tingkat Nasional SMK/Kejuruan",
          organization: "Vocational Skills Council",
          period: "2024",
          badge: "1ST WINNER // GOLD",
          badgeType: "gold",
          issuer: "Vocational Skills Council",
          year: "2024",
          credentialId: "VSC-NAT-2024-001",
          description: "Meraih Juara 1 dalam kejuaraan nasional perancangan antarmuka web interaktif dan rapid prototyping berkecepatan tinggi.",
          bullets: [
            "Tantangan live coding 6 jam: perancangan antarmuka Figma, slicing responsif pixel-perfect, dan dynamic state management.",
            "Skor tertinggi dalam kategori estetika visual, zero console errors, dan rendering performance 60 FPS."
          ],
          tags: ["UI/UX Design", "Responsive Slicing", "State Management", "National Honor"],
          status: "1st Winner",
          statusClass: "mastered"
        },
        {
          index: "02",
          title: "BNSP: Junior Software Engineer (Web Competency)",
          subtitle: "Sertifikasi Profesi Standar Nasional",
          organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
          period: "2025",
          badge: "LICENSED",
          badgeType: "gold",
          issuer: "Badan Nasional Sertifikasi Profesi",
          year: "2025",
          credentialId: "BNSP-JSE-7718-2025",
          description: "Sertifikasi resmi kompetensi keahlian Junior Web Developer sesuai Standar Kompetensi Kerja Nasional Indonesia (SKKNI).",
          bullets: [
            "Lulus asesmen pemrograman web terstruktur, implementasi antarmuka pengguna, dan basis data relasional.",
            "Verifikasi praktik clean coding, dokumentasi teknis, dan standar keamanan aplikasi web."
          ],
          tags: ["BNSP SKKNI", "Web Competency", "Official Certification", "Junior Engineer"],
          status: "Certified",
          statusClass: "mastered"
        },
        {
          index: "03",
          title: "Dicoding: Full-Stack Web Developer (React & Node)",
          subtitle: "Kurikulum Industri Terakreditasi",
          organization: "Dicoding Indonesia (Google Partner)",
          period: "2024",
          badge: "GRADUATE",
          badgeType: "red",
          issuer: "Dicoding Indonesia",
          year: "2024",
          credentialId: "DCD-FSW-9921-2024",
          description: "Kelulusan program intensif spesialisasi React SPA dan arsitektur backend Node.js REST API.",
          bullets: [
            "Penyelesaian capstone project full-stack dengan automated unit testing dan integrasi database cloud."
          ],
          tags: ["React.js", "Node.js", "RESTful API", "Unit Testing", "CI/CD"],
          status: "Verified",
          statusClass: "featured"
        },
        {
          index: "04",
          title: "freeCodeCamp: JavaScript Algorithms & Data Structures",
          subtitle: "300 Jam Akreditasi Algoritma & Struktur Data",
          organization: "freeCodeCamp.org",
          period: "2023",
          badge: "ACCREDITED",
          badgeType: "dark",
          issuer: "freeCodeCamp",
          year: "2023",
          credentialId: "FCC-JS-ALGO-2023",
          description: "Penyelesaian 300 jam kurikulum intensif algoritma rekursif, OOP, manipulasi data kompleks, dan functional programming.",
          bullets: [
            "Validasi foundational problem-solving dan penulisan algoritma efisien tanpa library eksternal."
          ],
          tags: ["JavaScript", "Data Structures", "Algorithms", "Functional Programming"],
          status: "Certified",
          statusClass: "complete"
        }
      ],
      bottomTitle: "CREDENTIAL INTEGRITY",
      bullets: [
        "Seluruh sertifikat dan piagam penghargaan telah divalidasi oleh dewan juri dan badan sertifikasi resmi.",
        "Klik pada salah satu baris sertifikat untuk membuka dossier verifikasi kredensial terperinci.",
        "Kompetensi mencakup pemecahan masalah algoritmik, slicing presisi, dan arsitektur sistem."
      ]
    }
  },
  {
    id: "iv",
    badge: "IV",
    code: "04 // RECORD",
    title: "EXPERIENCES",
    subtitle: "PROJECTS, LEADERSHIP & INDUSTRY READINESS",
    charImg: "/mainm.webp",
    details: {
      topIndex: "04",
      topTitle: "TRACK RECORD",
      topProgress: "3 INITIATIVES",
      rows: [
        {
          index: "01",
          title: "Lead Architect: Persona 5 Portfolio Platform",
          subtitle: "Interactive Gaming-Inspired Web Engine",
          organization: "Independent Project",
          period: "2024 - Sekarang",
          badge: "FEATURED",
          badgeType: "red",
          description: "Merancang dan membangun web portfolio interaktif berskala produksi bertema Persona 5 dengan visual kinetik.",
          bullets: [
            "Membangun arsitektur komponen React 19 dan TypeScript modular dengan zero UI component library.",
            "Optimalisasi animasi kinetik GPU compositing stabil 60-120 FPS dan interaksi audio-visual responsif.",
            "Dukungan navigasi lengkap: keyboard navigation (Arrow/ESC), touch swipe, dan mouse perspective tilt."
          ],
          tags: ["React 19", "TypeScript", "GPU Compositing", "Interactive Audio/Video", "Framer Motion"],
          status: "Active",
          statusClass: "complete"
        },
        {
          index: "02",
          title: "Lead Programmer: Vocational Capstone Project",
          subtitle: "School Management & Administrative Platform",
          organization: "SMK Metland Team Project",
          period: "2024",
          badge: "TEAM LEAD",
          badgeType: "gold",
          description: "Memimpin tim rekayasa perangkat lunak dalam perancangan dan deployment aplikasi manajemen internal.",
          bullets: [
            "Mendesain skema database relasional PostgreSQL dan mengimplementasikan 15+ REST endpoint Express terproteksi.",
            "Melakukan review pull request rekan tim dan memastikan standar penulisin kode tetap seragam dan bersih."
          ],
          tags: ["Team Lead", "PostgreSQL", "Express REST API", "Git Review", "Full-Stack"],
          status: "Delivered",
          statusClass: "complete"
        },
        {
          index: "03",
          title: "Industrial Apprenticeship Candidate (2026)",
          subtitle: "Target: Software Engineering / Full-Stack Web Track",
          organization: "Industry Deployment Ready",
          period: "2026: Siap Bergabung",
          badge: "OPEN TO HIRE",
          badgeType: "gold",
          description: "Siap bergabung dalam program magang industri untuk berkontribusi langsung pada codebase produksi nyata.",
          bullets: [
            "Kemampuan adaptasi cepat terhadap tech stack dan standar rekayasa baru dalam waktu singkat.",
            "Etos kerja tinggi, proaktif dalam pemecahan masalah, dan menerima umpan balik untuk peningkatan berkelanjutan."
          ],
          tags: ["Apprenticeship 2026", "Junior Developer", "Jakarta / Remote / Hybrid", "Fast Learner"],
          status: "Ready",
          statusClass: "ready"
        }
      ],
      bottomTitle: "CAREER OBJECTIVES",
      bullets: [
        "Mencari lingkungan tim engineering yang menuntut standar tinggi dalam arsitektur kode dan kualitas produk.",
        "Berdedikasi untuk terus meningkatkan level keterampilan teknis dan menghasilkan solusi software yang berdampak nyata.",
        "Terbuka untuk diskusi teknis, kolaborasi proyek, dan peluang internship industri 2026."
      ]
    }
  }
];

export const RESUME_TELEMETRY = [
  { key: "[CANDIDATE]", val: "R. WAN FIKRI P // FULL-STACK", accent: "" },
  { key: "[ACCREDITATION]", val: "BNSP JUNIOR SE • 5TH LKS", accent: "gold" },
  { key: "[AVAILABILITY]", val: "OPEN FOR OJT AS OF 2027", accent: "red" }
];

