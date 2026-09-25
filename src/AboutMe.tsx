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
          <span className="p5-tape-text">CLASSIFIED DOSSIER // ARCHIVE VOL. 2026</span>
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
            <div className="p5-comic-status-banner">VERIFIED AGENT</div>
          </div>

          <div className="p5-comic-nameplate">
            <div className="p5-nameplate-slash" />
            <h1 className="p5-comic-name">FIKRI</h1>
            <div className="p5-comic-role">FULL-STACK CREATIVE ENGINEER</div>
          </div>

          <div className="p5-comic-evidence-deck">
            <div className="p5-evidence-tag">
              <span className="p5-evidence-label">[RECORD: EXP]</span>
              <span className="p5-evidence-val">2+ YEARS PRODUCTION</span>
            </div>
            <div className="p5-evidence-tag">
              <span className="p5-evidence-label">[RECORD: GUILD]</span>
              <span className="p5-evidence-val">SMK METLAND (RPL)</span>
            </div>
            <div className="p5-evidence-tag accent-gold">
              <span className="p5-evidence-label">[RECORD: LICENSE]</span>
              <span className="p5-evidence-val">BNSP CERTIFIED (WEB)</span>
            </div>
            <div className="p5-evidence-tag accent-red">
              <span className="p5-evidence-label">[RECORD: VICTORY]</span>
              <span className="p5-evidence-val">1ST NATIONAL WEB CRAFT</span>
            </div>
          </div>

          <div className="p5-identity-telemetry">
            <div className="p5-telemetry-header">
              <span className="p5-telemetry-dot" />
              <span>LIVE TRANSMISSION PIPELINE</span>
            </div>
            <div className="p5-telemetry-status">
              <span className="p5-telemetry-label">DEPLOYMENT STATUS:</span>
              <span className="p5-telemetry-highlight">OPEN FOR 2026 APPRENTICESHIP</span>
            </div>
            <div className="p5-telemetry-footer">
              <span className="p5-telemetry-coords">JAKARTA, ID • UTC+7</span>
              {onNavigate && (
                <button
                  type="button"
                  className="p5-telemetry-action-btn"
                  onClick={() => onNavigate("socials")}
                >
                  CONTACT ►
                </button>
              )}
            </div>
          </div>
        </aside>

        <section className="p5-manga-storyboard">
          <article className="p5-manga-panel p5-panel-origin">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 01</span>
              <h2 className="p5-koma-title">ORIGIN & PHILOSOPHY</h2>
            </div>

            <div className="p5-comic-speech-spike">
              <div className="p5-speech-text">
                "CODE WITH ALGEBRAIC PRECISION, DESIGN WITH ABSOLUTE REBELLION."
              </div>
            </div>

            <p className="p5-koma-body">
              Started programming at age 14, driven by the kinetic thrill of interactive interfaces.
              Balancing vocational Software Engineering at Metland with aggressive self-taught
              exploration. I engineer interfaces that reject cookie-cutter templates, combining
              sub-millisecond responsiveness, custom mathematical CSS polygon matrices, and
              60FPS hardware-accelerated GPU pipelines.
            </p>
          </article>

          <article className="p5-manga-panel p5-panel-arsenal">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 02</span>
              <h2 className="p5-koma-title">TECHNICAL ARSENAL // CORE STACK</h2>
            </div>

            <div className="p5-comic-grid-split">
              <div className="p5-comic-stack-col">
                <span className="p5-stack-heading">⚔ FRONTEND & MOTION</span>
                <div className="p5-comic-stamp-cloud">
                  <span className="p5-comic-stamp">React 19</span>
                  <span className="p5-comic-stamp">TypeScript</span>
                  <span className="p5-comic-stamp">Next.js</span>
                  <span className="p5-comic-stamp">Vite</span>
                  <span className="p5-comic-stamp highlight">CSS Polygons</span>
                  <span className="p5-comic-stamp">Framer Motion</span>
                </div>
              </div>

              <div className="p5-comic-stack-col">
                <span className="p5-stack-heading">⚡ BACKEND & SYSTEMS</span>
                <div className="p5-comic-stamp-cloud">
                  <span className="p5-comic-stamp">Node.js</span>
                  <span className="p5-comic-stamp">Express REST</span>
                  <span className="p5-comic-stamp highlight">PostgreSQL</span>
                  <span className="p5-comic-stamp">Clean Arch</span>
                  <span className="p5-comic-stamp">JWT Rotation</span>
                  <span className="p5-comic-stamp">Docker</span>
                </div>
              </div>
            </div>
          </article>

          <article className="p5-manga-panel p5-panel-records">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">ACT 03</span>
              <h2 className="p5-koma-title">BATTLE RECORD // ACCREDITATION</h2>
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
              <h2 className="p5-koma-title">THE CONTRACT // MISSION & GUILD OBJECTIVE</h2>
            </div>

            <div className="p5-comic-contract-grid">
              <div className="p5-comic-contract-body">
                <p className="p5-koma-body">
                  Targeting an industrial apprenticeship or junior full-stack engineering role for 2026.
                  Prepared to contribute production-grade code to a high-caliber team with algebraic precision,
                  resilient architecture, and uncompromising creative passion.
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
                  <span className="p5-spec-label">GUILD FOCUS</span>
                  <span className="p5-spec-val highlight-cyan">CREATIVE UI & FULL-STACK SYSTEMS</span>
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
          <span>CLASSIFIED ARCHIVE // FIKRI 2026</span>
          <span className="p5-dot">•</span>
          <span>JAKARTA, ID</span>
        </div>
      </footer>
    </div>
  );
}
