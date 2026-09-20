import { useState, useEffect, useCallback } from "react";
import "./Menu.css";
import VideoOverlay from "./VideoOverlay";

export interface MangaMenuItem {
  id: string;
  num: string;
  label: string;
  subText: string;
  page: string;
}

const ITEMS: MangaMenuItem[] = [
  {
    id: "about",
    num: "01",
    label: "ABOUT ME",
    subText: "PROFILE & BACKGROUND",
    page: "about",
  },
  {
    id: "resume",
    num: "02",
    label: "RESUME",
    subText: "EXPERIENCE & SKILLS",
    page: "resume",
  },
  {
    id: "projects",
    num: "03",
    label: "PROJECTS",
    subText: "FEATURED WORKS & REPOSITORIES",
    page: "projects",
  },
  {
    id: "socials",
    num: "04",
    label: "SOCIALS",
    subText: "CONTACT & PLATFORMS",
    page: "socials",
  },
];

const prefetchRoute = (page: string) => {
  switch (page) {
    case "about":
      import("./AboutMe");
      break;
    case "resume":
      import("./ResumePage");
      break;
    case "projects":
      import("./ProjectsPage");
      break;
    case "socials":
      import("./Socials");
      break;
  }
};

interface MenuProps {
  onNavigate?: (page: string) => void;
}

export default function Menu({ onNavigate }: MenuProps) {
  const [active, setActive] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  const activate = useCallback((idx: number) => {
    setActive(idx);
    if (ITEMS[idx]) {
      prefetchRoute(ITEMS[idx].page);
    }
  }, []);

  useEffect(() => {
    prefetchRoute(ITEMS[0].page);
    const idleTimer = setTimeout(() => {
      ITEMS.forEach((it) => prefetchRoute(it.page));
    }, 1000);

    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      clearTimeout(t);
      clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "arrowleft" || key === "a" || key === "arrowup" || key === "w") {
        setActive((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
      } else if (key === "arrowright" || key === "d" || key === "arrowdown" || key === "s") {
        setActive((prev) => (prev + 1) % ITEMS.length);
      } else if (key === "enter" || key === " ") {
        if (onNavigate) {
          onNavigate(ITEMS[active].page);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onNavigate]);

  return (
    <div className="p5-battle-container">
      <video
        className="p5-battle-video"
        poster="/bg_poster.webp"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      />

      <VideoOverlay
        gradient="radial-gradient(ellipse at 75% 45%, transparent 35%, rgba(6, 8, 16, 0.85) 90%)"
      />

      <div className={`p5-battle-overlay ${mounted ? "mounted" : ""}`}>
        <div className="p5-header-dossier">
          <h1 className="p5-header-name">FIKRI // 2026</h1>
        </div>

        <nav className="p5-manga-deck" role="navigation" aria-label="Manga Slice Menu">
          {ITEMS.map((item, i) => {
            const isActive = active === i;

            return (
              <a
                key={item.id}
                href={`/${item.page}`}
                className={`p5-manga-slice ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate(item.page);
                  }
                }}
                onMouseEnter={() => activate(i)}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="p5-manga-halftone" />
                <div className="p5-manga-speedline" />

                <div className="p5-manga-collapsed-view">
                  <div className="p5-manga-num-badge">{item.num}</div>
                  <div className="p5-manga-vertical-title">{item.label}</div>
                </div>

                <div className="p5-manga-expanded-view">
                  <div className="p5-manga-top-badge">
                    <span className="p5-manga-num-tag">[{item.num}]</span>
                  </div>

                  <div className="p5-manga-center-hero">
                    <h2 className="p5-manga-hero-title">{item.label}</h2>
                    <div className="p5-manga-hero-sub">{item.subText}</div>
                  </div>
                </div>

                <div className="p5-manga-slash-accent" />
              </a>
            );
          })}
        </nav>

        <div className="p5-footer-controls">
          <div className="p5-control-pill">
            <span className="p5-key-badge">←→ / AD</span>
            <span className="p5-key-label">NAVIGATE</span>
          </div>
          <div className="p5-control-pill">
            <span className="p5-key-badge">ENTER / CLICK</span>
            <span className="p5-key-label">OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
