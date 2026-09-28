# Persona 5 Manga Portfolio

Interactive developer portfolio for R. Wan Fikri Pricahyadi, styled after Persona 5 and manga dossier layouts. Live deployment at [r1fikri.dev](https://r1fikri.dev).

## Overview

This repository contains the source code for my personal portfolio. The interface adapts Persona 5 menu aesthetics and manga panels, using high-contrast black, red, and white color schemes, angular frames, screen-tone textures, and motion-driven navigation.

## Tech stack

- React 19 and TypeScript
- Vite 8
- Framer Motion 13
- React Router 7
- Vanilla CSS with scoped layout modules
- Oxlint for linting
- Cloudflare Pages with Wrangler

## Project structure

```text
p5-portfolio/
├── public/              # Fonts, video backgrounds, images, and PDF resume
├── src/
│   ├── data/            # Portfolio datasets (projects, resume, about, socials)
│   ├── types/           # TypeScript definitions
│   ├── AboutMe.tsx      # Developer background and technical skills
│   ├── ProjectsPage.tsx # Featured engineering projects
│   ├── ResumePage.tsx   # Experience timeline and qualifications
│   ├── Socials.tsx      # Contact links and communication channels
│   ├── Menu.tsx         # Persona-themed navigation screen
│   ├── PageTransition.tsx # Kinetic route transition handlers
│   ├── App.tsx          # Root routing and page-level code splitting
│   └── main.tsx         # Application entry point
├── wrangler.json        # Cloudflare Pages static site configuration
└── package.json
```

## Running locally

Requirements:
- Node.js 20 or newer
- npm 10 or newer

1. Clone the repository:
```bash
git clone https://github.com/R1Blmmakan/p5-portfolio.git
cd p5-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application runs at `http://localhost:5173`.

## Available scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Generates the production build in the `dist` directory.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs Oxlint static code checks.

## Deployment

The project is configured for Cloudflare Pages via `wrangler.json`. Production assets build into the `dist/` directory, which handles single-page routing:

```bash
npm run build
npx wrangler pages deploy dist
```

## License and usage

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

### Terms of use

You may clone and run this codebase locally for personal study, testing, and understanding how the animations and components work. You may not publish modified copies of this repository as your own portfolio, nor reuse personal records, custom branding, or private assets without prior permission.
