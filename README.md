# 🎭 Persona 5 Manga Dossier // Portfolio Web

> A high-voltage, JRPG-inspired developer portfolio engineered with **React 19**, **TypeScript**, **Framer Motion**, and pure mathematical **CSS**. Built in the authentic visual style of **Persona 5** and **Persona 3 Reload**, structured as a classified manga dossier.

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-FF007F?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-blue?style=flat-square)](https://oxc.rs/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](#-license--proprietary-terms)

---

## 🌟 Concept & Design Philosophy

Generic developer portfolios rely on the same predictable blueprint: a neutral top navbar, centered hero text, and a quiet grid of cards.

**This portfolio is engineered like an interactive console game.**

Inspired by ATLUS's signature JRPG menus, high-contrast typography, and dynamic comic panel transitions, this application transforms technical credentials, competition records, and production projects into an interactive **Classified Manga Dossier**.

### Three Design Dials (from `DESIGN.md`)
- **ENERGY 3 (Bold)**: High-voltage rebellion, sharp comic frame angles, classified archive tape strips, and high-contrast color collisions. No washed-out neutrals.
- **RHYTHM 3 (Asymmetric)**: Varied manga panels, diagonal cut-outs, telemetry metadata tags, and narrative chapters.
- **MOTION 2 (Kinetic with Restraint)**: Hardware-accelerated entrance transitions and 60 FPS GPU hover states. Motion serves user interaction rather than endless idle loops.

### Color Tokens
- **Base Neutral**: `#000000` (Pitch Black), `#040508` (Dark Stage)
- **Primary Signal**: `#e60012` (Persona Crimson Red)
- **Structural White**: `#ffffff` (High-contrast manga borders and display headers)
- **Disciplined Accents**: `#ffea00` (Hazard Gold for credentials/honors), `#00e1ff` (Persona 3 Cyan for system telemetry)

---

## 🎮 Core Dossiers & Features

### 1. ⚡ The Phantom Menu (`/`)
- Dynamic skew angles rendered through custom CSS `clip-path` polygon mathematics.
- Looping video reel with radial darkening overlay masks to maintain 60 FPS performance.
- Sub-route prefetching ensuring zero-latency transitions when entering dossiers.
- Full keyboard and mobile touch support.

### 2. 📂 Classified Dossier // About Me (`/about`)
- **Chronicle Chapters**: Multi-act narrative covering Origin & Awakening, Frontend Alchemy, Systems Architecture, Battle Record, and Career Objective.
- **Dialogue Archive**: Developer interview transcripts detailing philosophy, technical choices, and competitive edge.
- **Manga Stage Layout**: Angled panels, halftone screentones, and caution hazard tape headers with rapid keyboard shortcuts (`ESC` / `Backspace`).

### 3. 🃏 Tarot Arcana Projects Vault (`/projects` & `/sideproj`)
- Projects categorized under Tarot Arcana (The Fool, The Magician, The Emperor, The Chariot).
- Tech stack affinity chips with customized glowing color schemes.
- Direct links to Live Production Demos and GitHub repositories.
- Fluid keyboard cycling (<kbd>←</kbd> / <kbd>→</kbd> or <kbd>A</kbd> / <kbd>D</kbd>) and touch swipe support.

### 4. 📜 Persona Status & Credentials (`/resume`)
- Categorized into **Education** (SMK Metland RPL), **Tech Arsenal**, **Certificates**, and **Battle Record**.
- **Interactive Certificate Modal**: Click on any listed credential to open an in-game dossier inspector complete with issuer verification, date, and badge.
- **Direct CV Download**: One-click download button for the latest verified PDF resume (`/Fikri_Resume_2026.pdf`).

### 5. 🌐 Guild Communications Network (`/socials`)
- Persona-style communications hub linking GitHub, Instagram, TikTok, and direct email.
- **One-Click Email Copy**: Clicking the email copies `fikripricahyadi10@gmail.com` to the clipboard with an in-game toast notification.

### 6. 🎬 Staggered Color Wipe Transitions
- Multi-layer color wipe sequence (Persona Blue `#040a1f`, Crimson `#c4001a`, Cyan `#00e1ff`, White) driven by **Framer Motion**.
- Skewed polygons and stage unmount/mount coordination without layout shift.

### 7. 📱 Mobile Adaptation & Landscape Advisory
- Reflowing responsive layout for phone and tablet viewports.
- **Landscape Advisory Banner**: Automatically detects mobile portrait orientation and advises rotating for the widescreen console experience.

---

## 🕹️ Input Controls

The entire portfolio can be operated via keyboard, mouse, or touch gestures:

| Context | Keys | Touch Gesture | Action |
| :--- | :--- | :--- | :--- |
| **Global** | <kbd>Esc</kbd> / <kbd>Backspace</kbd> | Tap Back Button | Return to Main Menu |
| **Main Menu** | <kbd>↑</kbd> / <kbd>↓</kbd> | Tap Menu Row | Navigate Menu Options |
| **Main Menu** | <kbd>Enter</kbd> | Tap Selected | Open Dossier Route |
| **About Dossier** | <kbd>Q</kbd> / <kbd>E</kbd> or <kbd>←</kbd> / <kbd>→</kbd> | Horizontal Swipe | Switch Dossier Sections |
| **Projects** | <kbd>A</kbd> / <kbd>D</kbd> or <kbd>←</kbd> / <kbd>→</kbd> | Horizontal Swipe | Cycle Projects |
| **Projects** | <kbd>Enter</kbd> | Tap Action Button | Launch Live Demo URL |
| **Resume Screen** | <kbd>↑</kbd> / <kbd>↓</kbd> | Tap Category | Change Resume Tab |
| **Resume Screen** | <kbd>Enter</kbd> | Tap Card | Inspect Certificate Modal |
| **Socials Screen** | <kbd>↑</kbd> / <kbd>↓</kbd> | Tap Platform | Select Channel |

---

## 🛠️ Technology Stack

| Technology | Role | Implementation Rationale |
| :--- | :--- | :--- |
| **React 19** | Core UI Engine | Component architecture utilizing concurrent rendering and route-level suspense boundaries. |
| **TypeScript 5.7** | Type System | Strict compile-time contracts across project datasets, navigation models, and props. |
| **Vite 8.2** | Build & Dev Tooling | Fast Hot Module Replacement (HMR) and optimized rollup production bundling. |
| **Framer Motion 13.2** | Animation Layer | Hardware-accelerated page transition coordination and spring kinematics. |
| **React Router v7** | Route Management | Single-page route handling with layout transitions. |
| **Vanilla CSS** | Design Tokens & Layout | Custom CSS `clip-path` polygons, matrix skews, and responsive grids without framework bloat. |
| **Oxlint** | Code Quality | High-speed JavaScript and TypeScript linting enforcing clean code consistency. |

---

## 📂 Repository Architecture

```text
p5-portfolio/
├── public/                       # Static public assets
│   ├── bg.mp4                    # Looping video reel for main menu
│   ├── newBg.mp4                 # Video background for dossier & resume
│   ├── main3.webm                # Background video for socials hub
│   ├── char1.webp - char3.webp   # Optimized character artwork
│   ├── Persona5main.ttf          # Persona 5 game display typeface
│   └── Fikri_Resume_2026.pdf     # Downloadable verified resume PDF
│
├── src/
│   ├── data/                     # Typed data models and content stores
│   │   ├── about.ts              # Chronicles, dialogue archive, and biography
│   │   ├── projects.ts           # Tarot Arcana project entries and links
│   │   ├── resume.ts             # Education, skills, and credential dossier
│   │   └── socials.ts            # Network channels and contact handles
│   │
│   ├── types/                    # TypeScript interfaces
│   │   └── portfolio.ts          # Contracts for projects, resume, and data models
│   │
│   ├── AboutMe.tsx & .css        # Classified dossier and dialogue interface
│   ├── LandscapeHint.tsx & .css  # Orientation advisory for mobile screens
│   ├── Menu.tsx & .css           # Skewed interactive home navigation
│   ├── PageTransition.tsx & .css # Framer Motion multi-tier color wipe transitions
│   ├── ProjectsPage.tsx & .css   # Tarot Arcana project showcase
│   ├── ResumePage.tsx & .css     # Persona status screen with certificate inspector
│   ├── Socials.tsx & .css        # Contact communications hub
│   ├── VideoOverlay.tsx & .css   # Reusable video darkening gradient layer
│   ├── App.tsx                   # Route definitions and suspense loader
│   └── main.tsx                  # React application entrypoint
│
├── index.html                    # HTML shell, typography preloads, and SEO tags
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.js                # Vite build configuration
```

---

## 🚀 Local Development

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/R1Blmmakan/p5-portfolio.git

# Enter the project directory
cd p5-portfolio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open your browser at `http://localhost:5173` to explore the portfolio.

---

## 💻 Available Scripts

| Script | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Compiles TypeScript and creates an optimized production bundle in `/dist`. |
| `npm run preview` | Locally serves the `/dist` production build for pre-deployment verification. |
| `npm run lint` | Runs **Oxlint** across all source files for fast syntax and hygiene checks. |

---

## 🚢 Production Deployment

To build the static distribution bundle:

```bash
npm run build
```

The resulting assets in `/dist` are ready for deployment to static hosting platforms such as Vercel, Netlify, or Cloudflare Pages.

> **Single-Page Application Routing**: Ensure your hosting provider is configured with a wildcard rewrite directing all traffic (`/*`) to `/index.html` to prevent 404 errors on direct URL access.

---

## 📜 License & Proprietary Terms

**Copyright © 2026 Fikri. All Rights Reserved.**

This repository and its codebase are published for portfolio demonstration, code inspection, and technical review purposes:

- **No Unauthorized Distribution**: You may not fork, clone, republish, or sell this repository as your own portfolio, template, or commercial product.
- **Original Code & Assets**: Custom visual layouts, CSS polygon matrices, Framer Motion choreography, and personal biography content are proprietary.
- **Fair Use Tribute**: Character artwork, logo emblems, and font references derived from *Persona 5* and *Persona 3 Reload* are the intellectual property of **ATLUS / SEGA**. They are utilized strictly for non-commercial, personal creative portfolio tribute.

---

## 📬 Contact & Author

- **Developer**: Fikri
- **Status**: Software Engineering Student at SMK Metland (Class of 2026)
- **Accreditation**: 1st Winner, National Vocational Web Craft & UI/UX Championship (2024) | BNSP Certified Junior Software Engineer
- **GitHub**: [@R1Blmmakan](https://github.com/R1Blmmakan)
- **Email**: [fikripricahyadi10@gmail.com](mailto:fikripricahyadi10@gmail.com)
- **Live Portfolio**: [fikri-portfolio.vercel.app](https://fikri-portfolio.vercel.app)
