import { useEffect, useState } from "react";
import "./ResumePage.css";
import VideoOverlay from "./VideoOverlay";
import { DetailRow } from "./types/portfolio";
import { RESUME_ITEMS as ITEMS, RESUME_TELEMETRY } from "./data/resume";

interface ResumePageProps {
  onBack?: () => void;
  src?: string;
}

export default function ResumePage({ onBack, src = "/newBg.mp4" }: ResumePageProps) {
  const [active, setActive] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<DetailRow | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedCert) {
        if (e.key === "Escape" || e.key === "Backspace" || e.key === "Enter") {
          setSelectedCert(null);
        }
        return;
      }

      if (e.key === "ArrowUp") {
        setActive((i) => Math.max(0, i - 1));
      } else if (e.key === "ArrowDown") {
        setActive((i) => Math.min(ITEMS.length - 1, i + 1));
      } else if (e.key === "Escape" || e.key === "Backspace" || e.key === "ArrowLeft") {
        onBack?.();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedCert, onBack]);

  const currentItem = ITEMS[active];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      setActive((i) => (i + 1) % ITEMS.length);
    } else if (diff < -50) {
      setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length);
    }
    setTouchStartX(null);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Fikri_Resume_2026.pdf";
    link.download = "Fikri_Resume_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="resume-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video
        className="resume-video-bg"
        poster="/newBg_poster.webp"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      />

      <div className="resume-entry-mask" aria-hidden="true" />

      <VideoOverlay zIndex={6} darkness={0.4} />

      <div className="resume-overlay">
        <header className="resume-top-bar">
          <button
            type="button"
            className="resume-back-btn"
            onClick={() => onBack?.()}
            title="Return to Menu (ESC / ←)"
          >
            ◄ RETURN [ESC]
          </button>

          <div className="resume-top-hud">
            <span className="resume-hud-pill">OFFICIAL ARCHIVE</span>
            <span className="resume-hud-title">RESUME & CREDENTIALS // 2026</span>
          </div>

          <button
            type="button"
            className="resume-cv-btn"
            onClick={handleDownloadCV}
            title="Download Official CV (PDF)"
          >
            <span className="resume-cv-hazard" aria-hidden="true" />
            <span>DOWNLOAD CV (PDF)</span>
          </button>
        </header>

        <div className="resume-spread">
          <aside className="resume-nav-dock">
            <div className={`resume-list-tag${mounted ? " mounted" : ""}`}>
              <span>LIST</span>
            </div>

            <nav className="resume-stack" aria-label="Resume categories">
              {ITEMS.map((item, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={item.id}
                    className={`resume-card-wrap${isActive ? " active" : ""}${mounted ? " mounted" : ""}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActive(index);
                      }
                    }}
                  >
                    <div className="resume-card">
                      <div className="resume-badge">
                        <span className="resume-badge-text">{item.badge}</span>
                      </div>

                      <div className="resume-card-inner">
                        <span className="resume-title">{item.title}</span>
                        <span className="resume-code-badge">{item.code ?? `${item.badge} //`}</span>
                      </div>

                      <div className="resume-subtitle-bar">
                        <span className="resume-subtitle" title={item.subtitle}>
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="resume-dock-telemetry">
              {RESUME_TELEMETRY.map((item) => (
                <div
                  key={item.key}
                  className={`resume-telemetry-tag ${item.accent ? `highlight-${item.accent}` : ""}`}
                >
                  <span className="resume-telemetry-key">{item.key}</span>
                  <span className="resume-telemetry-val">{item.val}</span>
                </div>
              ))}
            </div>
          </aside>

          {currentItem && (
            <main key={`panel-${currentItem.id}`} className="resume-dossier-canvas">
              {currentItem.charImg && (
                <img
                  className="resume-detail-char-accent"
                  src={currentItem.charImg}
                  alt=""
                  aria-hidden="true"
                />
              )}

              <div className="resume-dossier-top-banner">
                <div className="resume-banner-slash-accent" />
                <div className="resume-banner-index">{currentItem.details.topIndex}</div>
                <div className="resume-banner-title-group">
                  <h1 className="resume-banner-title">{currentItem.details.topTitle}</h1>
                  <span className="resume-banner-subtitle">{currentItem.subtitle}</span>
                </div>
                <div className="resume-banner-progress">{currentItem.details.topProgress}</div>
              </div>

              <div className="resume-dossier-scroll-area">
                <div className="resume-dossier-list">
                  {currentItem.details.rows.map((row) => (
                    <article
                      className={`resume-dossier-card ${currentItem.id === "iii" ? "clickable-cert" : ""}`}
                      key={row.index}
                      onClick={() => {
                        if (currentItem.id === "iii") {
                          setSelectedCert(row);
                        }
                      }}
                      title={currentItem.id === "iii" ? "Click to inspect certificate dossier" : undefined}
                      tabIndex={currentItem.id === "iii" ? 0 : undefined}
                      onKeyDown={(e) => {
                        if (currentItem.id === "iii" && (e.key === "Enter" || e.key === " ")) {
                          setSelectedCert(row);
                        }
                      }}
                    >
                      <div className="resume-dossier-head">
                        <div className="resume-dossier-head-left">
                          <span className="resume-dossier-num">{row.index}</span>
                          <div className="resume-dossier-title-stack">
                            <h2 className="resume-dossier-title">{row.title}</h2>
                            {(row.subtitle || row.organization) && (
                              <div className="resume-dossier-sub">
                                {row.organization && (
                                  <span className="resume-dossier-org">{row.organization}</span>
                                )}
                                {row.organization && row.subtitle && (
                                  <span className="resume-dossier-sep">•</span>
                                )}
                                {row.subtitle && <span>{row.subtitle}</span>}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="resume-dossier-meta">
                          {row.period && (
                            <span className="resume-dossier-period">{row.period}</span>
                          )}
                          {row.badge && (
                            <span className={`resume-dossier-badge ${row.badgeType ?? "gold"}`}>
                              {row.badge}
                            </span>
                          )}
                          {currentItem.id === "iii" && (
                            <span className="resume-cert-hint">🔍 INSPECT DOSSIER</span>
                          )}
                        </div>
                      </div>

                      {row.description && (
                        <p className="resume-dossier-desc">{row.description}</p>
                      )}

                      {row.bullets && row.bullets.length > 0 && (
                        <ul className="resume-dossier-bullets">
                          {row.bullets.map((bullet, idx) => (
                            <li className="resume-dossier-bullet-item" key={idx}>
                              <span className="resume-dossier-bullet-icon" aria-hidden="true">▸</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {row.tags && row.tags.length > 0 && (
                        <div className="resume-dossier-chips" aria-label="Technical modules and tags">
                          {row.tags.map((tag, idx) => (
                            <span className="p5-tactical-chip" key={idx}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>

                {currentItem.details.bottomTitle && (
                  <div className="resume-detail-bottom">
                    <h3 className="resume-detail-bottom-title">{currentItem.details.bottomTitle}</h3>
                    {currentItem.details.bullets && (
                      <div className="resume-detail-bullets">
                        {currentItem.details.bullets.map((bullet, idx) => (
                          <div className="resume-detail-bullet" key={idx}>
                            <span className="resume-detail-bullet-icon" aria-hidden="true">★</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="resume-scroll-cue" aria-hidden="true">
                  <span>▼ DOSSIER LOGS EXTENSION</span>
                </div>
              </div>
            </main>
          )}
        </div>

        <footer className={`resume-footer${mounted ? " mounted" : ""}`}>
          <div className="resume-footer-row">
            <span className="resume-footer-key">↑↓</span>
            <span>SELECT CATEGORY</span>
          </div>
          <div
            className="resume-footer-row resume-footer-clickable"
            onClick={() => onBack?.()}
            role="button"
            tabIndex={0}
          >
            <span className="resume-footer-key">ESC / ←</span>
            <span>RETURN TO HOME</span>
          </div>
        </footer>
      </div>

      {selectedCert && (
        <div className="resume-cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="resume-cert-box" onClick={(e) => e.stopPropagation()}>
            <div className="resume-cert-header">
              <span className="resume-cert-badge">VERIFIED CREDENTIAL DOSSIER</span>
              <button
                className="resume-cert-close"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
            </div>

            <div className="resume-cert-content">
              <div className="resume-cert-stamp">VERIFIED</div>
              <h3 className="resume-cert-name">{selectedCert.title}</h3>
              <p className="resume-cert-issuer">
                ISSUED BY: <strong>{selectedCert.issuer ?? selectedCert.organization ?? "Accredited Board"}</strong>
              </p>
              <div className="resume-cert-meta">
                <span>YEAR: {selectedCert.year ?? selectedCert.period ?? "2024"}</span>
                <span>ID: {selectedCert.credentialId ?? "VERIFIED-CRED"}</span>
                <span>STATUS: {selectedCert.badge ?? "VERIFIED"}</span>
                <span>HOLDER: FIKRI</span>
              </div>
              {selectedCert.description && (
                <p className="resume-cert-desc">{selectedCert.description}</p>
              )}
              <div className="resume-cert-barcode">
                ||| | |||| | ||| || |||||| | |||| ||| |||| |
              </div>
            </div>

            <button
              className="resume-cert-ok-btn"
              onClick={() => setSelectedCert(null)}
            >
              CLOSE CREDENTIAL (ESC)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
