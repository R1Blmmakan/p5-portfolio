import { useState, useEffect } from "react";
import "./AboutMe.css";
import VideoOverlay from "./VideoOverlay";

interface AboutMeProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export default function AboutMe({ onBack, onNavigate }: AboutMeProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        onBack?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  return (
    <div className={`p5-manga-stage ${mounted ? "mounted" : ""}`}>
      <video
        className="p5-manga-video"
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
        gradient="radial-gradient(ellipse at 50% 50%, rgba(5, 7, 14, 0.45) 0%, rgba(5, 7, 14, 0.78) 70%, rgba(2, 4, 8, 0.94) 100%)"
      />

      <div className="p5-manga-screentone-bg" aria-hidden="true" />

      <header className="p5-manga-topbar">
        <div className="p5-manga-tape-strip">
          <span className="p5-tape-hazard" />
          <span className="p5-tape-text">CANDIDATE DOSSIER // FIKRI • SOFTWARE ENGINEER</span>
        </div>
        <button
          type="button"
          className="p5-manga-close-btn"
          onClick={() => onBack?.()}
          title="Return to Menu (ESC)"
        >
          <span>◄ RETURN [ESC]</span>
        </button>
      </header>

      <main className="p5-manga-spread">
        <aside className="p5-manga-panel p5-panel-identity">
          <div className="p5-panel-tape-pin" />

          <div className="p5-comic-frame">
            <img
              src="/mainm.webp"
              alt="Fikri Portrait"
              className="p5-comic-img"
            />
            <div className="p5-comic-halftone-overlay" />
            <div className="p5-comic-status-banner">VERIFIED CANDIDATE</div>
          </div>

          <div className="p5-comic-nameplate">
            <div className="p5-nameplate-slash" />
            <h1 className="p5-comic-name">FIKRI</h1>
            <div className="p5-comic-role">FULL-STACK SOFTWARE ENGINEER</div>
          </div>

          <div className="p5-comic-evidence-deck">
            <div className="p5-evidence-tag">
              <span className="p5-evidence-label">[EXPERIENCE]</span>
              <span className="p5-evidence-val">2+ YEARS CODING EXP</span>
            </div>
            <div className="p5-evidence-tag">
              <span className="p5-evidence-label">[EDUCATION]</span>
              <span className="p5-evidence-val">SMK METLAND (RPL)</span>
            </div>
            <div className="p5-evidence-tag accent-gold">
              <span className="p5-evidence-label">[CERTIFICATION]</span>
              <span className="p5-evidence-val">BNSP JUNIOR SE</span>
            </div>
            <div className="p5-evidence-tag accent-red">
              <span className="p5-evidence-label">[ACHIEVEMENT]</span>
              <span className="p5-evidence-val">1ST NATIONAL WEB CRAFT</span>
            </div>
          </div>

          <div className="p5-identity-telemetry">
            <div className="p5-telemetry-header">
              <span className="p5-telemetry-dot" />
              <span>STATUS & RECRUITMENT AVAILABILITY</span>
            </div>
            <div className="p5-telemetry-status">
              <span className="p5-telemetry-label">RECRUITMENT STATUS:</span>
              <span className="p5-telemetry-highlight">OPEN FOR 2026 APPRENTICESHIP</span>
            </div>
            <div className="p5-telemetry-footer">
              <span className="p5-telemetry-coords">JAKARTA, ID • HYBRID / REMOTE</span>
              {onNavigate && (
                <button
                  type="button"
                  className="p5-telemetry-action-btn"
                  onClick={() => onNavigate("socials")}
                >
                  CONTACT ME ►
                </button>
              )}
            </div>
          </div>
        </aside>

        <section className="p5-manga-storyboard">
          <article className="p5-manga-panel p5-panel-origin">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 01</span>
              <h2 className="p5-koma-title">PROFESSIONAL BACKGROUND & PHILOSOPHY</h2>
            </div>

            <div className="p5-comic-speech-spike">
              <div className="p5-speech-text">
                "ENGINEERING CLEAN ARCHITECTURES, INTUITIVE EXPERIENCES, AND SCALABLE WEB SYSTEMS."
              </div>
            </div>

            <p className="p5-koma-body">
              Vocational Software Engineering student at SMK Metland with over 2 years of hands-on experience
              building modern, responsive web applications. I focus on creating high-performance frontend interfaces
              with React, TypeScript, and modern CSS, paired with robust backend services in Node.js and PostgreSQL.
              Committed to clean code, accessibility standards, and intuitive design.
            </p>
          </article>

          <article className="p5-manga-panel p5-panel-arsenal">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 02</span>
              <h2 className="p5-koma-title">TECHNICAL SKILLS & CORE STACK</h2>
            </div>

            <div className="p5-comic-grid-split">
              <div className="p5-comic-stack-col">
                <span className="p5-stack-heading">⚔ FRONTEND & UI DEVELOPMENT</span>
                <div className="p5-comic-stamp-cloud">
                  <span className="p5-comic-stamp">React 19</span>
                  <span className="p5-comic-stamp">TypeScript</span>
                  <span className="p5-comic-stamp">Next.js</span>
                  <span className="p5-comic-stamp">Vite</span>
                  <span className="p5-comic-stamp highlight">Modern CSS</span>
                  <span className="p5-comic-stamp">Framer Motion</span>
                </div>
              </div>

              <div className="p5-comic-stack-col">
                <span className="p5-stack-heading">⚡ BACKEND & DATABASE</span>
                <div className="p5-comic-stamp-cloud">
                  <span className="p5-comic-stamp">Node.js</span>
                  <span className="p5-comic-stamp">Express REST</span>
                  <span className="p5-comic-stamp highlight">PostgreSQL</span>
                  <span className="p5-comic-stamp">Clean Arch</span>
                  <span className="p5-comic-stamp">JWT Auth</span>
                  <span className="p5-comic-stamp">Docker</span>
                </div>
              </div>
            </div>
          </article>

          <article className="p5-manga-panel p5-panel-records">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 03</span>
              <h2 className="p5-koma-title">CERTIFICATIONS & ACHIEVEMENTS</h2>
            </div>

            <div className="p5-comic-record-grid">
              <div className="p5-comic-clipping gold">
                <div className="p5-clipping-badge">★ 1ST PLACE CHAMPION</div>
                <h3 className="p5-clipping-headline">National Web Craft & UI/UX Championship (2024)</h3>
                <p className="p5-clipping-desc">
                  Ranked #1 nationwide by Vocational Skills Council for high-pressure rapid interface prototyping, accessible markup, and elite aesthetic execution.
                </p>
              </div>

              <div className="p5-comic-clipping red">
                <div className="p5-clipping-badge">✦ GOV CERTIFIED</div>
                <h3 className="p5-clipping-headline">BNSP Certified Junior Software Engineer</h3>
                <p className="p5-clipping-desc">
                  Official national certification validating industry competence in software architecture, database relational design, and production web deployment.
                </p>
              </div>
            </div>
          </article>

          <article className="p5-manga-panel p5-panel-contract">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 04</span>
              <h2 className="p5-koma-title">CAREER OBJECTIVE & 2026 AVAILABILITY</h2>
            </div>

            <div className="p5-comic-contract-grid">
              <div className="p5-comic-contract-body">
                <p className="p5-koma-body">
                  Actively seeking an industrial apprenticeship or junior software engineer role for 2026.
                  Ready to contribute production-grade code to engineering teams with solid TypeScript and React foundations,
                  reliable backend knowledge, eager adaptability, and high professional work ethic.
                </p>
              </div>

              <div className="p5-comic-contract-specs">
                <div className="p5-spec-pill">
                  <span className="p5-spec-label">STATUS</span>
                  <span className="p5-spec-val highlight-gold">OPEN FOR 2026 APPRENTICESHIP</span>
                </div>
                <div className="p5-spec-pill">
                  <span className="p5-spec-label">LOCATION</span>
                  <span className="p5-spec-val">JAKARTA, ID • HYBRID / REMOTE</span>
                </div>
                <div className="p5-spec-pill">
                  <span className="p5-spec-label">ROLE FOCUS</span>
                  <span className="p5-spec-val highlight-cyan">FULL-STACK / FRONTEND ENGINEER</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="p5-manga-footer">
        <div className="p5-manga-footer-tag">
          <span className="p5-key-btn">ESC</span>
          <span>RETURN TO HOME</span>
        </div>
        <div className="p5-manga-footer-coords">
          <span>PORTFOLIO PROFILE // FIKRI • JAKARTA, ID</span>
          <span className="p5-dot">•</span>
          <span>AVAILABLE 2026</span>
        </div>
      </footer>
    </div>
  );
}
