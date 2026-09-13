# 🎭 Persona 5 Portfolio (P5 Portfolio)

> An immersive, JRPG-inspired developer portfolio inspired by the bold visual aesthetics of **Persona 5** and **Persona 3 Reload**. Built with **React 19**, **TypeScript**, **Framer Motion**, and pure modern **CSS**.

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-FF007F?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🌟 Overview

Most portfolio websites follow the same standard layout: a top navigation bar, a hero banner, and a grid of cards. 

**This portfolio is designed to feel like a video game.**

Inspired by the stylish menus, snappy transitions, and high-contrast typography of ATLUS's *Persona* franchise, this website transforms a typical developer resume into an interactive experience. Visitors can navigate using their **keyboard**, **mouse**, or **touch gestures**, just like browsing an in-game status menu.

---

## ✨ Key Features

### 1. 🎮 Gamepad & Keyboard Navigation
You don't need a mouse to explore. The entire application responds to intuitive keyboard keys (Arrow keys, Enter, Escape, Q/E, and Backspace) and mobile swipe gestures.

### 2. ⚡ The Phantom Menu (Home Screen)
- Skewed, dynamic angle layout replicated with pure CSS clip-paths.
- Smooth mouse hover animations and reactive sound/motion cues.
- Background looping game reel with high-performance overlay masks.
- Route pre-fetching so every sub-page loads instantly without delay.

### 3. 👤 Character Profile & Bio (`/about`)
- JRPG party-member style cards highlighting bio, roles, and specialties.
- Interactive tab switching with smooth character portraits (`.webp` optimized).
- Responsive swipe gestures for touch devices.

### 4. 📜 Persona Status & Resume (`/resume`)
- Divided into categories: **Education**, **Skills**, **Certificates**, and **Experiences**.
- **Interactive Certificate Dossier**: Click on any listed certificate to open an in-game inspection modal complete with issuer, year, and verification badge.
- **One-Click CV Download**: Direct button to download the latest PDF resume (`/Fikri_Resume_2026.pdf`).

### 5. 🃏 Arcana Projects Showcase (`/projects`)
- Projects categorized by **Tarot Arcana** (The Fool, The Magician, The Emperor, The Chariot).
- Tech stack affinity chips with customized glowing color schemes.
- Direct links to **Live Demos** and **GitHub source code**.
- Keyboard and touch swipe support to switch projects fluidly.

### 6. 🌐 Socials & Guild Network (`/socials`)
- Persona-style contact hub (Email, GitHub, Instagram, TikTok).
- **One-Click Email Copy**: Clicking the email automatically copies `fikripricahyadi10@gmail.com` to the clipboard and displays a game-styled toast notification.
- Dual-column keyboard navigation (switch between social profiles and external links).

### 7. 🎬 Dynamic Persona Page Transitions
- Custom multi-layered color wipe transitions (Persona Blue `#040a1f`, Crimson `#c4001a`, Cyan `#00e1ff`, and White).
- Dynamic skew angles and panel animations powered by **Framer Motion**.

### 8. 📱 Mobile & Landscape Adaptation
- Responsive layout adapting to small screens.
- **Landscape Advisory Banner**: Automatically detects mobile portrait orientation and gently advises users to rotate for the full widescreen JRPG console experience.

---

## 🕹️ Controls Cheat Sheet

The portfolio can be fully controlled with either keyboard or mouse/touch:

| Section | Keys | Action |
| :--- | :--- | :--- |
| **Global / Any Screen** | <kbd>Esc</kbd> / <kbd>Backspace</kbd> | Return to Main Menu |
| **Main Menu** | <kbd>↑</kbd> / <kbd>↓</kbd> | Select Menu Item |
| **Main Menu** | <kbd>Enter</kbd> | Confirm / Open Page |
| **About Me** | <kbd>←</kbd> / <kbd>→</kbd> or <kbd>Q</kbd> / <kbd>E</kbd> | Switch Character Tabs |
| **Projects** | <kbd>←</kbd> / <kbd>→</kbd> or <kbd>A</kbd> / <kbd>D</kbd> | Previous / Next Project |
| **Projects** | <kbd>Enter</kbd> | Open Live Project Demo |
| **Resume Screen** | <kbd>↑</kbd> / <kbd>↓</kbd> | Switch Categories (Education, Skills, etc.) |
| **Resume Screen** | <kbd>Enter</kbd> | Inspect Certificate / Close Dossier |
| **Socials Screen** | <kbd>↑</kbd> / <kbd>↓</kbd> | Navigate Social Platforms |
| **Socials Screen** | <kbd>→</kbd> / <kbd>←</kbd> | Switch Focus (Platforms ↔ Action Links) |
| **Mobile (Touch)** | **Swipe Left / Right** | Cycle Projects / Tabs / Categories |

---

## 🛠️ Technology Stack

| Technology | Purpose | Why It Was Chosen |
| :--- | :--- | :--- |
| **React 19** | Core UI Framework | Modern React component architecture with Suspense and concurrent rendering. |
| **TypeScript** | Type Safety | Strict typing across project data, navigation props, and component state. |
| **Vite** | Build Tool & Dev Server | Lightning fast Hot Module Replacement (HMR) and optimized build bundles. |
| **Framer Motion** | UI Animations | Fluid, GPU-accelerated page transitions and staggered entry animations. |
| **React Router v7** | Single-Page Routing | Declarative routing with smooth path transitions and navigation handlers. |
| **Vanilla CSS** | Styling System | Custom skew matrices, dynamic polygon `clip-path`, and responsive flex/grid layouts without Tailwind bloat. |
| **Oxlint** | Linter | Ultra-fast JavaScript & TypeScript linting for clean code consistency. |

---

## 📂 Project Structure

Here is a simple breakdown of how the repository is organized:

```text
p5-portfolio/
├── public/                       # Static public assets
│   ├── bg.mp4                    # Looping background video for main menu
│   ├── stats.mp4                 # Background video for resume & about screens
│   ├── main3.webm                # Background video for socials
│   ├── char1.webp - char3.webp   # Character portraits and artwork
│   ├── Persona5main.ttf          # Persona 5 game font
│   └── Fikri_Resume_2026.pdf     # Downloadable resume PDF
│
├── src/
│   ├── data/                     # 📦 Easy-to-edit portfolio data files
│   │   ├── about.ts              # Bio, titles, and skill highlights
│   │   ├── projects.ts           # Project items, arcana, links, and tags
│   │   ├── resume.ts             # Education, skills, and certificate credentials
│   │   └── socials.ts            # Contact channels, handles, and URLs
│   │
│   ├── types/                    # 🏷️ TypeScript definitions
│   │   └── portfolio.ts          # Interfaces for projects, resume, and data models
│   │
│   ├── AboutMe.tsx & .css        # Character profile & bio screen
│   ├── LandscapeHint.tsx & .css  # Mobile portrait rotation advisory
│   ├── Menu.tsx & .css           # Skewed interactive home menu
│   ├── PageTransition.tsx & .css # Framer Motion multi-layer page transitions
│   ├── ProjectsPage.tsx & .css   # Tarot-themed projects showcase
│   ├── ResumePage.tsx & .css     # Persona stats screen with dossier inspector
│   ├── Socials.tsx & .css        # Contact screen with click-to-copy email
│   ├── VideoOverlay.tsx & .css   # Reusable video darkening/gradient filter
│   ├── App.tsx                   # Main router and route definitions
│   └── main.tsx                  # React DOM entrypoint
│
├── index.html                    # HTML entry point, SEO meta tags, and font preloads
├── package.json                  # Dependencies and execution scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.js                # Vite build and plugin configurations
```

---

## 🚀 Getting Started

Follow these simple steps to run the portfolio on your local machine:

### 1. Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/R1Blmmakan/p5-portfolio.git
cd p5-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

After running the command, open your browser and visit:
```text
http://localhost:5173
```

---

## 💻 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `localhost:5173` with instant hot-reload. |
| `npm run build` | Compiles TypeScript and creates an optimized production bundle in `/dist`. |
| `npm run preview` | Locally serves the production build from `/dist` to test before deploying. |
| `npm run lint` | Runs **Oxlint** to quickly check for any syntax or styling mistakes. |

---

## ✏️ Customization Guide

You can easily customize this portfolio with your own details without touching the UI code! All content is cleanly separated into the `src/data/` folder:

### 1. Update Projects
Open [`src/data/projects.ts`](src/data/projects.ts). You can change titles, descriptions, demo links, GitHub links, arcana names, and tech badges:
```typescript
{
  id: "p1",
  arcana: "THE FOOL",
  arcanaNum: "0",
  title: "MY NEW PROJECT",
  category: "FULL-STACK APP",
  status: "ACTIVE",
  demoUrl: "https://your-demo.vercel.app",
  githubUrl: "https://github.com/your-username/repo",
  image: "/mainm.webp",
  desc: "A brief summary of what your project does.",
  highlights: ["Feature one", "Feature two"],
  techs: [
    { name: "REACT", color: "#00e1ff", bg: "rgba(0,225,255,0.15)" },
  ],
}
```

### 2. Update About & Bio
Open [`src/data/about.ts`](src/data/about.ts) to edit your bio text, role title, and skills summary.

### 3. Update Resume & Certificates
Open [`src/data/resume.ts`](src/data/resume.ts) to adjust your education history, skill levels, and verifiable certificate awards. Put your updated PDF file in `/public/Fikri_Resume_2026.pdf` (or rename the reference in [`src/ResumePage.tsx`](src/ResumePage.tsx)).

### 4. Update Socials & Email
Open [`src/data/socials.ts`](src/data/socials.ts) to update your email address, GitHub handle, and social links.

---

## 🚢 Deployment

This project is configured to deploy effortlessly on any static hosting platform:

### Deploy to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `p5-portfolio` repository.
4. Keep default settings (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

> **Note for Client-Side Routing:** If you are deploying on Vercel, ensure a `vercel.json` or rewrite rule redirects all routes `/*` to `/index.html` so direct navigation to `/about` or `/projects` works smoothly.

---

## 🎨 Design & Attribution

- **Aesthetic Inspiration**: UI/UX design inspired by the iconic art styles of **Persona 5** and **Persona 3 Reload** by **ATLUS / SEGA**.
- **Font**: *Persona 5 Menu Font* and *Space Grotesk* from Google Fonts.
- **Media**: Character cutouts and background sequences are properties of ATLUS, used for personal, non-commercial portfolio presentation.

---

## 📬 Contact & Author

- **Author**: Fikri
- **GitHub**: [@R1Blmmakan](https://github.com/R1Blmmakan)
- **Email**: fikripricahyadi10@gmail.com
- **Live Portfolio**: [fikri-portfolio.vercel.app](https://fikri-portfolio.vercel.app)

---

⭐ *If you enjoyed this project or found it inspiring, feel free to give it a star on GitHub!*
