import { useState, useEffect } from "react";
import "./AboutMe.css";
import VideoOverlay from "./VideoOverlay";
import { ABOUT_DATA } from "./data/about";

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

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = ABOUT_DATA.identity.resumePdfUrl;
    link.download = ABOUT_DATA.identity.resumePdfUrl.replace(/^\//, "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <span className="p5-tape-text">{ABOUT_DATA.topbarText}</span>
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
              src={ABOUT_DATA.identity.portraitImg}
              alt={ABOUT_DATA.identity.portraitAlt}
              className="p5-comic-img"
            />
            <div className="p5-comic-halftone-overlay" />
            <div className="p5-comic-status-banner">{ABOUT_DATA.identity.verifiedStatus}</div>
          </div>

          <div className="p5-comic-nameplate">
            <div className="p5-nameplate-slash" />
            <h1 className="p5-comic-name">{ABOUT_DATA.identity.fullName}</h1>
            <div className="p5-comic-role">{ABOUT_DATA.identity.roleTitle}</div>
          </div>

          <div className="p5-comic-evidence-deck">
            {ABOUT_DATA.identity.evidenceTags.map((tag) => (
              <div
                key={tag.label}
                className={`p5-evidence-tag ${tag.accent === "gold" ? "accent-gold" : tag.accent === "red" ? "accent-red" : ""}`}
              >
                <span className="p5-evidence-label">{tag.label}</span>
                <span className="p5-evidence-val">{tag.value}</span>
              </div>
            ))}
          </div>

          <div className="p5-identity-telemetry">
            <div className="p5-telemetry-header">
              <span className="p5-telemetry-dot" />
              <span>{ABOUT_DATA.identity.recruitmentStatus.header}</span>
            </div>
            <div className="p5-telemetry-status">
              <span className="p5-telemetry-label">{ABOUT_DATA.identity.recruitmentStatus.label}</span>
              <span className="p5-telemetry-highlight">
                {ABOUT_DATA.identity.recruitmentStatus.highlight}
              </span>
            </div>
            <div className="p5-telemetry-footer">
              <span className="p5-telemetry-coords">{ABOUT_DATA.identity.locationCoords}</span>
              <div className="p5-telemetry-actions">
                <button
                  type="button"
                  className="p5-telemetry-action-btn p5-btn-cv"
                  onClick={handleDownloadCV}
                  title="Download Official CV (PDF)"
                >
                  CV (PDF) ⤓
                </button>
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
          </div>
        </aside>

        <section className="p5-manga-storyboard">
          <article className="p5-manga-panel p5-panel-origin">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">{ABOUT_DATA.act01.komaNum}</span>
              <h2 className="p5-koma-title">{ABOUT_DATA.act01.title}</h2>
            </div>

            <div className="p5-comic-speech-spike">
              <div className="p5-speech-text">
                "{ABOUT_DATA.act01.philosophyQuote}"
              </div>
            </div>

            <p className="p5-koma-body">{ABOUT_DATA.act01.narrative}</p>
          </article>

          <article className="p5-manga-panel p5-panel-arsenal">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">{ABOUT_DATA.act02.komaNum}</span>
              <h2 className="p5-koma-title">{ABOUT_DATA.act02.title}</h2>
            </div>

            <div className="p5-comic-grid-split">
              {ABOUT_DATA.act02.columns.map((col) => (
                <div key={col.heading} className="p5-comic-stack-col">
                  <span className="p5-stack-heading">{col.heading}</span>
                  <div className="p5-comic-stamp-cloud">
                    {col.skills.map((sk) => (
                      <span
                        key={sk.name}
                        className={`p5-comic-stamp ${sk.highlight ? "highlight" : ""}`}
                      >
                        {sk.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="p5-manga-panel p5-panel-records">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">{ABOUT_DATA.act03.komaNum}</span>
              <h2 className="p5-koma-title">{ABOUT_DATA.act03.title}</h2>
            </div>

            <div className="p5-comic-record-grid">
              {ABOUT_DATA.act03.clippings.map((clip) => (
                <div key={clip.headline} className={`p5-comic-clipping ${clip.type}`}>
                  <div className="p5-clipping-badge">{clip.badge}</div>
                  <h3 className="p5-clipping-headline">{clip.headline}</h3>
                  <p className="p5-clipping-desc">{clip.description}</p>
                </div>
              ))}
            </div>

            {onNavigate && (
              <div className="p5-record-action-row">
                <button
                  type="button"
                  className="p5-verify-resume-btn"
                  onClick={() => onNavigate("resume")}
                  title="Verify all credentials and licenses in Resume"
                >
                  <span className="p5-verify-icon">🔍</span>
                  <span>{ABOUT_DATA.act03.verifyResumeLabel}</span>
                  <span className="p5-verify-arrow">►</span>
                </button>
              </div>
            )}
          </article>

          <article className="p5-manga-panel p5-panel-contract">
            <div className="p5-panel-comic-header">
              <span className="p5-koma-num">{ABOUT_DATA.act04.komaNum}</span>
              <h2 className="p5-koma-title">{ABOUT_DATA.act04.title}</h2>
            </div>

            <div className="p5-comic-contract-grid">
              <div className="p5-comic-contract-body">
                <p className="p5-koma-body">{ABOUT_DATA.act04.narrative}</p>
              </div>

              <div className="p5-comic-contract-specs">
                {ABOUT_DATA.act04.specs.map((spec) => (
                  <div key={spec.label} className="p5-spec-pill">
                    <span className="p5-spec-label">{spec.label}</span>
                    <span
                      className={`p5-spec-val ${spec.highlight === "gold" ? "highlight-gold" : ""}`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
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
          <span>{ABOUT_DATA.footerCoords.text}</span>
          <span className="p5-dot">•</span>
          <span>{ABOUT_DATA.footerCoords.status}</span>
        </div>
      </footer>
    </div>
  );
}
