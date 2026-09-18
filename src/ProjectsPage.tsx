import { useState, useEffect } from "react";
import "./ProjectsPage.css";
import VideoOverlay from "./VideoOverlay";

import { PROJECTS } from "./data/projects";


interface ProjectsPageProps {
  onBack?: () => void;
}

export default function ProjectsPage({ onBack }: ProjectsPageProps) {
  const [active, setActive] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "ArrowDown" || key === "ArrowRight" || key.toLowerCase() === "e" || key.toLowerCase() === "d") {
        setActive((i) => (i + 1) % PROJECTS.length);
      } else if (key === "ArrowUp" || key.toLowerCase() === "q" || key.toLowerCase() === "a") {
        setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
      } else if (key === "Enter") {
        window.open(PROJECTS[active].demoUrl, "_blank");
      } else if (key === "Escape" || key === "Backspace") {
        onBack?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onBack]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      setActive((i) => (i + 1) % PROJECTS.length);
    } else if (diff < -45) {
      setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
    }
    setTouchStartX(null);
  };

  const current = PROJECTS[active];

  return (
    <div
      className="pj-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video className="pj-video-bg" poster="/bg_poster.webp" src="/bg.mp4" autoPlay loop muted playsInline preload="metadata" disablePictureInPicture />
      <VideoOverlay darkness={0.42} />

      <button
        className="pj-back-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC / ←)"
      >
        ◄ BACK TO MENU
      </button>

      {/* Header Watermark */}
      <div className={`pj-header-tag${mounted ? " mounted" : ""}`}>
        <span className="pj-header-title">PROJECTS</span>
        <span className="pj-header-sub">// PERSONA COMPENDIUM & DEPLOYMENTS</span>
      </div>

      {/* Main Layout Container */}
      <div className="pj-layout">
        {/* Left Side: Arcana Project List */}
        <div className="pj-list">
          {PROJECTS.map((proj, idx) => {
            const isActive = active === idx;
            return (
              <div
                key={proj.id}
                className={`pj-card-item${isActive ? " active" : ""}${mounted ? " mounted" : ""}`}
                style={{ transitionDelay: `${idx * 60}ms` }}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
              >
                <div className="pj-card-accent" />
                <div className="pj-card-inner">
                  <div className="pj-arcana-badge">
                    <span className="pj-arcana-num">{proj.arcanaNum}</span>
                    <span className="pj-arcana-name">{proj.arcana}</span>
                  </div>
                  <div className="pj-card-body">
                    <div className="pj-card-title">{proj.title}</div>
                    <div className="pj-card-cat">{proj.category}</div>
                  </div>
                  <div className="pj-card-status">{proj.status}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Velvet Room Project Showcase Panel */}
        <div key={`showcase-${current.id}`} className="pj-showcase-panel">
          {current.image && (
            <img className="pj-showcase-art" src={current.image} alt="" aria-hidden="true" />
          )}
          {/* Top Info Bar */}
          <div className="pj-showcase-top">
            <div className="pj-showcase-arcana">
              <span className="pj-showcase-arcana-badge">{current.arcanaNum}</span>
              <span>{current.arcana} ARCANA</span>
            </div>
            <div className="pj-showcase-status">{current.status}</div>
          </div>

          <h2 className="pj-showcase-title">{current.title}</h2>
          <p className="pj-showcase-desc">{current.desc}</p>

          {/* Tech Affinity Row */}
          <div className="pj-tech-section">
            <div className="pj-section-label">AFFINITY / TECH STACK</div>
            <div className="pj-tech-grid">
              {current.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="pj-tech-pill"
                  style={{
                    borderColor: tech.color,
                    color: tech.color,
                    background: tech.bg,
                  }}
                >
                  <span className="pj-tech-dot" style={{ background: tech.color }} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="pj-highlights-section">
            <div className="pj-section-label">SPECIFICATIONS & HIGHLIGHTS</div>
            <ul className="pj-highlights-list">
              {current.highlights.map((item, i) => (
                <li key={i} className="pj-highlight-item">
                  <span className="pj-highlight-marker">►</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pj-actions">
            <a
              href={current.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-btn pj-btn-glow"
            >
              <span>⚔️ SUMMON / LIVE DEMO</span>
            </a>
            <a
              href={current.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-btn pj-btn-outline"
            >
              <span>📜 VIEW SOURCE (GITHUB)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Controls Guide */}
      <div className={`pj-footer${mounted ? " mounted" : ""}`}>
        <div className="pj-footer-row">
          <span className="pj-footer-key">↑↓</span>
          <span>SELECT PROJECT</span>
        </div>
        <div className="pj-footer-row">
          <span className="pj-footer-key">↵</span>
          <span>LAUNCH DEMO</span>
        </div>
        <div
          className="pj-footer-row pj-footer-clickable"
          onClick={() => onBack?.()}
        >
          <span className="pj-footer-key">ESC / ←</span>
          <span>BACK TO MENU</span>
        </div>
      </div>
    </div>
  );
}
