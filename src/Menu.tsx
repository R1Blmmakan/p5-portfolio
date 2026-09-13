import { useState, useEffect } from "react";
import "./Menu.css";
import VideoOverlay from "./VideoOverlay";

export interface MenuItemData {
  id: string;
  label: string;
  page: string;
  fontSize: number;
  offsetX: number;
  offsetY: number;
  skew: number;
  skewY: number;
}

const ITEMS: MenuItemData[] = [
  { id: "about",    label: "ABOUT ME", page: "about",    fontSize: 78, offsetX: 0,  offsetY: 0, skew: -6,  skewY: 8  },
  { id: "resume",   label: "RESUME",   page: "resume",   fontSize: 68, offsetX: 16, offsetY: 0, skew: -10, skewY: -8 },
  { id: "projects", label: "PROJECTS", page: "projects", fontSize: 72, offsetX: 14, offsetY: 0, skew: -4,  skewY: 5  },
  { id: "socials",  label: "SOCIALS",  page: "socials",  fontSize: 74, offsetX: 12, offsetY: 0, skew: -3,  skewY: 4  },
];

type ClipFn = (w: number, h: number) => string;

const CLIP_SHAPES: ClipFn[] = [
  (w: number, h: number) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w: number, h: number) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w: number, h: number) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w: number, h: number) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w: number, h: number) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
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
  const [animKey, setAnimKey] = useState<number>(0);

  const activate = (idx: number) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
    if (ITEMS[idx]) {
      prefetchRoute(ITEMS[idx].page);
    }
  };

  useEffect(() => {
    // Immediately prefetch default route
    prefetchRoute(ITEMS[0].page);

    // Silently prefetch remaining routes during idle
    const idleTimer = setTimeout(() => {
      ITEMS.forEach((it) => prefetchRoute(it.page));
    }, 1000);

    const t = setTimeout(() => setMounted(true), 150);
    return () => {
      clearTimeout(t);
      clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") activate(Math.max(0, active - 1));
      if (e.key === "ArrowDown") activate(Math.min(ITEMS.length - 1, active + 1));
      if (e.key === "Enter") {
        if (onNavigate) {
          onNavigate(ITEMS[active].page);
        } else {
          alert(`Executed: ${ITEMS[active].label}`);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onNavigate]);

  return (
    <div className="p3-root-container">
      <video className="p3-video" src="/bg.mp4" autoPlay loop muted playsInline preload="metadata" disablePictureInPicture />
      <VideoOverlay gradient="linear-gradient(to right, transparent 0%, transparent 45%, rgba(4, 6, 15, 0.7) 100%)" />

      <div className="p3-overlay">
        <div className="p3-name-tag">
          <span>Fikri&apos;s</span>
          <span>persona</span>

          <div className="p3-info-badge">
            <p>ROLE: FULL-STACK WEB DEVELOPER</p>
            <p>STACK: REACT, TYPESCRIPT, NODE.JS, SQL</p>
          </div>
        </div>

        <nav className="p3-menu">
          {ITEMS.map((item, i) => {
            const isActive = active === i;
            const dist = Math.abs(i - active);
            const opacity = isActive ? 1 : Math.max(0.5, 1 - dist * 0.2);

            const estW = item.label.length * item.fontSize * 0.6 + 80;
            const estH = item.fontSize * 0.94;
            const clipFn = CLIP_SHAPES[i] ?? CLIP_SHAPES[0];

            return (
              <a
                key={item.id}
                href="#"
                className={`p3-row ${isActive ? "active" : ""} ${mounted ? "mounted" : ""}`}
                style={{
                  marginRight: item.offsetX,
                  marginTop: item.offsetY,
                  transitionDelay: mounted ? `${i * 80}ms` : "0ms",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate(item.page);
                  } else {
                    alert(`Executed: ${ITEMS[i].label}`);
                  }
                }}
                onMouseEnter={() => activate(i)}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="p3-glow" />
                <div
                  className="p3-skew-wrap"
                  style={{ transform: `skewX(${item.skew}deg) skewY(${item.skewY}deg)` }}
                >
                  <div
                    key={isActive ? `pop-${i}-${animKey}` : `idle-${i}`}
                    className={`p3-shadow-tri${isActive ? " pop" : ""}`}
                    style={{
                      width: estW,
                      height: estH,
                      clipPath: clipFn(estW, estH),
                    }}
                  />
                  <div
                    className="p3-highlight"
                    style={{
                      width: estW,
                      height: estH,
                      clipPath: clipFn(estW, estH),
                      transform: `translateY(-50%) scaleX(${isActive ? 1 : 0})`,
                    }}
                  />
                  <div className="p3-label-wrap" style={{ opacity }}>
                    <span className="p3-label-base p3-label-dark" style={{ fontSize: item.fontSize }}>
                      {item.label}
                    </span>
                    <span
                      className="p3-label-base p3-label-bright"
                      style={{
                        fontSize: item.fontSize,
                        clipPath: clipFn(estW, estH),
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </nav>

        <div className={`p3-hint ${mounted ? "mounted" : ""}`}>
          <div className="p3-hint-row">
            <span className="p3-hint-key">↑↓</span>
            <span>NAVIGATE</span>
          </div>
          <div className="p3-hint-row">
            <span className="p3-hint-key">↵</span>
            <span>CONFIRM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
