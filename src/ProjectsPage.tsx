import { useState, useEffect } from "react";
import "./ProjectsPage.css";
import VideoOverlay from "./VideoOverlay";
import { PROJECTS } from "./data/projects";

interface ProjectsPageProps {
  onBack?: () => void;
}

export default function ProjectsPage({ onBack }: ProjectsPageProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [confirmedIdx, setConfirmedIdx] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "arrowright" || key === "arrowdown" || key === "d" || key === "s") {
        setActiveIdx((prev) => (prev + 1) % PROJECTS.length);
      } else if (key === "arrowleft" || key === "arrowup" || key === "a" || key === "w") {
        setActiveIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
      } else if (key === "enter" || key === " ") {
        setConfirmedIdx(activeIdx);
        setTimeout(() => {
          setConfirmedIdx(null);
          const current = PROJECTS[activeIdx];
          if (current?.demoUrl) {
            window.open(current.demoUrl, "_blank");
          }
        }, 220);
      } else if (key === "g") {
        const current = PROJECTS[activeIdx];
        if (current?.githubUrl) {
          window.open(current.githubUrl, "_blank");
        }
      } else if (key === "escape" || key === "backspace") {
        onBack?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, onBack]);

  const current = PROJECTS[activeIdx] || PROJECTS[0];

  return (
    <div className={`p5-deck-stage ${mounted ? "mounted" : ""}`}>
      <video
        className="p5-deck-bg-video"
        poster="/newBg_poster.webp"
        src="/newBg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      />
      <VideoOverlay
        gradient="radial-gradient(ellipse at 75% 50%, rgba(230, 0, 18, 0.2) 0%, transparent 65%), linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%)"
      />

      <div className="p5-deck-screentone" aria-hidden="true" />

      <button
        className="p5-deck-close-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC / Backspace)"
      >
        <span className="p5-btn-circle">○</span>
        <span>CLOSE [ESC]</span>
      </button>

      <div className="p5-deck-arena">
        <div className="p5-deck-hero-wrapper" key={`hero-card-${current.id}`}>
          <div className="p5-deck-hero-card">
            <div className="p5-deck-stamp-bar">
              <div className="p5-deck-red-stamp">
                <span className="p5-stamp-star">★</span>
                <span>TAKE YOUR HEART // PHANTOM CALLING CARD</span>
              </div>
              <div className="p5-deck-arcana-tag">
                <span>{current.arcana} // NO. {current.arcanaNum}</span>
              </div>
            </div>

            <h1 className="p5-deck-card-title">{current.title}</h1>
            <div className="p5-deck-card-category">{current.category}</div>

            <div className="p5-deck-preview-box">
              <img
                src={current.image}
                alt={current.title}
                className="p5-deck-preview-img"
              />
              <div className="p5-deck-preview-scanlines" />
              <div className="p5-deck-preview-badge">TARGET DOSSIER // {current.status}</div>
            </div>

            <p className="p5-deck-card-desc">{current.desc}</p>

            <div className="p5-deck-tech-row">
              {current.techs.map((tech) => (
                <span
                  key={tech.name}
                  className="p5-deck-tech-stamp"
                  style={{ "--tech-color": tech.color } as React.CSSProperties}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="p5-deck-action-row">
              <a
                href={current.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p5-deck-btn p5-deck-btn-white"
              >
                <span>⚔ LAUNCH DEMO [ENTER]</span>
              </a>
              <a
                href={current.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p5-deck-btn p5-deck-btn-black"
              >
                <span>⚡ SOURCE CODE [G]</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p5-deck-stack-column">
          <div className="p5-deck-stack-header">
            <span>INFILTRATION TARGETS ({activeIdx + 1} / {PROJECTS.length})</span>
          </div>

          <div className="p5-deck-card-stack" role="tablist" aria-label="Calling Cards Deck">
            {PROJECTS.map((proj, idx) => {
              const isActive = activeIdx === idx;
              const isConfirmed = confirmedIdx === idx;
              const cardTilt = [-3, 1, -2, 2][idx % 4];

              return (
                <div
                  key={proj.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`p5-deck-mini-card${isActive ? " active" : ""}${
                    isConfirmed ? " confirmed" : ""
                  }`}
                  style={{
                    "--card-tilt": `${cardTilt}deg`,
                  } as React.CSSProperties}
                  onClick={() => {
                    setActiveIdx(idx);
                    setConfirmedIdx(idx);
                    setTimeout(() => setConfirmedIdx(null), 220);
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div className="p5-mini-card-inner">
                    <div className="p5-mini-header">
                      <span className="p5-mini-arcana">ARCANA {proj.arcanaNum}</span>
                      <span className="p5-mini-tag">★ TARGET 0{idx + 1}</span>
                    </div>
                    <div className="p5-mini-title">{proj.title}</div>
                    <div className="p5-mini-footer">
                      <span className="p5-mini-status">{proj.status}</span>
                      {isActive && <span className="p5-mini-selected-badge">ACTIVE</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p5-deck-footer">
        <div className="p5-footer-item">
          <span className="p5-footer-key">↑↓ / ←→</span>
          <span className="p5-footer-desc">FLIP CARD</span>
        </div>
        <div className="p5-footer-item">
          <span className="p5-footer-glyph">✕</span>
          <span className="p5-footer-desc">LAUNCH [ENTER]</span>
        </div>
        <div className="p5-footer-item">
          <span className="p5-footer-glyph">□</span>
          <span className="p5-footer-desc">SOURCE [G]</span>
        </div>
        <div
          className="p5-footer-item p5-footer-clickable"
          onClick={() => onBack?.()}
        >
          <span className="p5-footer-glyph">○</span>
          <span className="p5-footer-desc">BACK [ESC]</span>
        </div>
      </div>
    </div>
  );
}
