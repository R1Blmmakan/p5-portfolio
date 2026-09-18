import { useState, useEffect } from "react";
import "./AboutMe.css";
import VideoOverlay from "./VideoOverlay";
import { ABOUT_ITEMS, CHRONICLES, DIALOGUES } from "./data/about";

interface AboutMeProps {
  onBack?: () => void;
}

export default function AboutMe({ onBack }: AboutMeProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"interview" | "chronicles">("interview");
  const [themeMode, setThemeMode] = useState<"phantom" | "dossier">("phantom");
  const [colorMode, setColorMode] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("p5_color_mode") as "dark" | "light") || "dark";
  });
  const [activeDialogueId, setActiveDialogueId] = useState<string>(DIALOGUES[0].id);
  const [activeChronicleIdx, setActiveChronicleIdx] = useState<number>(0);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [mobileActive, setMobileActive] = useState<number>(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleToggleColorMode = () => {
    setColorMode((m) => {
      const next = m === "dark" ? "light" : "dark";
      localStorage.setItem("p5_color_mode", next);
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        onBack?.();
        return;
      }

      if (e.key === "d" || e.key === "D") {
        setThemeMode((m) => (m === "phantom" ? "dossier" : "phantom"));
        return;
      }

      if (e.key === "l" || e.key === "L") {
        handleToggleColorMode();
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        setViewMode((m) => (m === "interview" ? "chronicles" : "interview"));
        return;
      }

      if (viewMode === "interview") {
        const currentIdx = DIALOGUES.findIndex((d) => d.id === activeDialogueId);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          const next = (currentIdx + 1) % DIALOGUES.length;
          setActiveDialogueId(DIALOGUES[next].id);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          const prev = (currentIdx - 1 + DIALOGUES.length) % DIALOGUES.length;
          setActiveDialogueId(DIALOGUES[prev].id);
        }
      } else {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          setActiveChronicleIdx((i) => (i + 1) % CHRONICLES.length);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          setActiveChronicleIdx((i) => (i - 1 + CHRONICLES.length) % CHRONICLES.length);
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewMode, themeMode, colorMode, activeDialogueId, activeChronicleIdx, onBack]);

  const activeDialogue = DIALOGUES.find((d) => d.id === activeDialogueId) ?? DIALOGUES[0];
  const activeChronicle = CHRONICLES[activeChronicleIdx] ?? CHRONICLES[0];
  const currentMobileItem = ABOUT_ITEMS[mobileActive] ?? ABOUT_ITEMS[0];

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -16;
    const tiltY = (x - 0.5) * 16;
    setCardTilt({ x: tiltX, y: tiltY, glareX: x * 100, glareY: y * 100 });
  };

  const handleMouseLeaveCard = () => {
    setCardTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div className={`sc-container ${colorMode === "light" ? "light-mode" : "dark-mode"}`}>
      <video
        className={`sc-video ${themeMode === "dossier" ? "dossier-video" : ""} ${colorMode === "light" ? "light-video" : ""}`}
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
        darkness={colorMode === "light" ? 0.12 : themeMode === "phantom" ? 0.38 : 0.85}
        gradient={
          colorMode === "light"
            ? "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.45) 0%, rgba(248, 250, 252, 0.72) 70%, rgba(241, 245, 249, 0.9) 100%)"
            : themeMode === "phantom"
            ? "radial-gradient(ellipse at 50% 50%, rgba(5, 7, 14, 0.25) 0%, rgba(5, 7, 14, 0.45) 60%, rgba(2, 4, 8, 0.7) 100%)"
            : "linear-gradient(180deg, rgba(8, 10, 18, 0.88) 0%, rgba(4, 6, 12, 0.94) 100%)"
        }
      />

      <button
        className="sc-back-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC)"
      >
        ◄ BACK TO MENU
      </button>

      <div className={`confidant-desktop-view ${mounted ? "mounted" : ""} ${themeMode === "dossier" ? "dossier-mode" : "phantom-mode"}`}>
        <div className="confidant-top-header">
          <div className="confidant-header-left">
            <span className="confidant-tag-pulse">●</span>
            <span className="confidant-header-title">
              {themeMode === "phantom"
                ? "CONFIDANT INTERFACE // ARCANA 0: THE ARCHITECT"
                : "ENGINEERING DOSSIER // CANDIDATE: FIKRI // PRODUCTION READY"}
            </span>
          </div>

          <div className="confidant-header-right">
            <button
              type="button"
              className={`ios-theme-pill ${colorMode === "light" ? "is-light" : "is-dark"}`}
              onClick={handleToggleColorMode}
              title="Toggle Light / Dark Mode [Key: L]"
              aria-label="Toggle Light or Dark Mode"
            >
              <span className="ios-pill-icon sun">☀️</span>
              <span className="ios-pill-icon moon">🌙</span>
              <span className="ios-pill-thumb">
                <span className="ios-pill-thumb-icon">{colorMode === "light" ? "☀️" : "🌙"}</span>
              </span>
            </button>

            <div
              className="confidant-theme-toggle"
              onClick={() => setThemeMode((m) => (m === "phantom" ? "dossier" : "phantom"))}
              title="Toggle View Mode [Key: D]"
            >
              <span className="theme-toggle-label">VIEW:</span>
              <button
                type="button"
                className={`theme-toggle-btn ${themeMode === "phantom" ? "active phantom" : ""}`}
              >
                ⚔️ PHANTOM
              </button>
              <button
                type="button"
                className={`theme-toggle-btn ${themeMode === "dossier" ? "active dossier" : ""}`}
              >
                📋 DOSSIER
              </button>
            </div>

            <span className="confidant-affinity-stamp">AFFINITY: MASTERED</span>
            <span className="confidant-status-stamp">STATUS: PRODUCTION READY</span>
          </div>
        </div>

        <div className="confidant-main-grid">
          <div className="confidant-card-column">
            <div
              className="tarot-card-wrapper"
              onMouseMove={themeMode === "phantom" ? handleMouseMoveCard : undefined}
              onMouseLeave={handleMouseLeaveCard}
              style={{
                transform:
                  themeMode === "phantom"
                    ? `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`
                    : "none",
              }}
            >
              <div
                className="tarot-card-glare"
                style={{
                  background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 215, 0, 0.18) 45%, transparent 75%)`,
                }}
              />

              <div className="tarot-card-inner">
                <div className="tarot-card-top">
                  <span className="tarot-numeral">0</span>
                  <span className="tarot-arcana-name">THE ARCHITECT</span>
                  <span className="tarot-numeral">0</span>
                </div>

                <div className="tarot-portrait-frame">
                  <img
                    src="/mainm.webp"
                    alt="Fikri Avatar"
                    className="tarot-portrait-img"
                  />
                  <div className="tarot-frame-corner tl" />
                  <div className="tarot-frame-corner tr" />
                  <div className="tarot-frame-corner bl" />
                  <div className="tarot-frame-corner br" />
                </div>

                <div className="tarot-gauge-row">
                  <div className="tarot-gauge-item">
                    <span className="tarot-gauge-label">LV.</span>
                    <span className="tarot-gauge-val">99</span>
                  </div>
                  <div className="tarot-gauge-bar-wrap">
                    <div className="tarot-gauge-bar-fill" />
                  </div>
                  <div className="tarot-gauge-item">
                    <span className="tarot-gauge-label">RANK</span>
                    <span className="tarot-gauge-val">MAX</span>
                  </div>
                </div>

                <div className="tarot-card-bottom">
                  <div className="tarot-confidant-name">FIKRI</div>
                  <div className="tarot-role-caption">FULL-STACK CREATIVE ENGINEER</div>
                  <div className="tarot-barcode">||| | ||||| || |||||| | ||||</div>
                  <div className="tarot-motto">
                    "CODE WITH ALGEBRAIC PRECISION, DESIGN WITH ABSOLUTE REBELLION."
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="confidant-content-column">
            <div className="confidant-mode-nav">
              <button
                className={`confidant-mode-tab ${viewMode === "interview" ? "active" : ""}`}
                onClick={() => setViewMode("interview")}
              >
                <span className="mode-tab-icon">💬</span>
                <span>DIRECT INTERVIEW</span>
              </button>
              <button
                className={`confidant-mode-tab ${viewMode === "chronicles" ? "active" : ""}`}
                onClick={() => setViewMode("chronicles")}
              >
                <span className="mode-tab-icon">📜</span>
                <span>CONFIDANT CHRONICLES</span>
              </button>
            </div>

            {viewMode === "interview" && (
              <div className="confidant-interview-container">
                <div className="interview-prompts-label">SELECT INQUIRY TOPIC:</div>
                <div className="interview-prompts-list">
                  {DIALOGUES.map((d) => {
                    const isSelected = d.id === activeDialogue.id;
                    return (
                      <button
                        key={d.id}
                        className={`interview-prompt-btn ${isSelected ? "selected" : ""}`}
                        onClick={() => setActiveDialogueId(d.id)}
                      >
                        <span className="prompt-bullet">►</span>
                        <span className="prompt-text">{d.question}</span>
                        <span className="prompt-mood-tag">{d.moodTag}</span>
                      </button>
                    );
                  })}
                </div>

                <div key={activeDialogue.id} className="p5-dialogue-box">
                  <div className="dialogue-nameplate">
                    <span className="nameplate-avatar-cut">P5</span>
                    <span className="nameplate-text">FIKRI</span>
                    <span className="nameplate-sub">// ARCHITECT RESPONSE</span>
                  </div>

                  <div className="dialogue-quote-badge">
                    {activeDialogue.quote}
                  </div>

                  <p className="dialogue-text">
                    {activeDialogue.answer}
                  </p>

                  <div className="dialogue-footer-hint">
                    <span className="dialogue-topic-tag">TOPIC: {activeDialogue.topic}</span>
                    <span className="dialogue-prompt-indicator">▼ PRESS ANY OPTION TO ASK MORE</span>
                  </div>
                </div>
              </div>
            )}

            {viewMode === "chronicles" && (
              <div className="confidant-chronicles-container">
                <div className="chronicle-chapters-strip">
                  {CHRONICLES.map((c, idx) => {
                    const isCurrent = idx === activeChronicleIdx;
                    return (
                      <button
                        key={c.numeral}
                        className={`chronicle-chapter-pill ${isCurrent ? "active" : ""}`}
                        style={{
                          borderColor: isCurrent ? c.accent : "rgba(255, 255, 255, 0.15)",
                        }}
                        onClick={() => setActiveChronicleIdx(idx)}
                      >
                        <span className="chapter-pill-num" style={{ color: c.accent }}>
                          {c.numeral}.
                        </span>
                        <span className="chapter-pill-title">{c.title}</span>
                      </button>
                    );
                  })}
                </div>

                <div key={activeChronicle.numeral} className="chronicle-detail-sheet">
                  <div className="chronicle-sheet-header">
                    <div className="chronicle-header-left">
                      <span
                        className="chronicle-roman-badge"
                        style={{ borderColor: activeChronicle.accent, color: activeChronicle.accent }}
                      >
                        CHAPTER {activeChronicle.numeral}
                      </span>
                      <span className="chronicle-affinity-text">
                        {activeChronicle.affinity}
                      </span>
                    </div>

                    <span className="chronicle-tag-badge">
                      {activeChronicle.tag}
                    </span>
                  </div>

                  <h2 className="chronicle-title">
                    <span className="chronicle-accent-bar" style={{ background: activeChronicle.accent }} />
                    <span>{activeChronicle.title}</span>
                  </h2>
                  <div className="chronicle-subtitle">
                    {activeChronicle.subtitle}
                  </div>

                  <div className="chronicle-paragraphs">
                    {activeChronicle.content.map((p, i) => (
                      <p key={i} className="chronicle-p">
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="chronicle-specs-row">
                    {activeChronicle.specs.map((s, i) => (
                      <div key={i} className="chronicle-spec-card">
                        <span className="spec-label">{s.label}</span>
                        <span className="spec-val">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="chronicle-tags-row">
                    {activeChronicle.tags.map((t) => (
                      <span key={t} className="chronicle-tag-chip" style={{ borderColor: activeChronicle.accent }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="dossier-mobile-view">
        <div key={`nav-${mobileActive}`} className="sc-right-nav">
          <button
            type="button"
            className={`ios-theme-pill mobile ${colorMode === "light" ? "is-light" : "is-dark"}`}
            onClick={handleToggleColorMode}
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Light or Dark Mode"
          >
            <span className="ios-pill-icon sun">☀️</span>
            <span className="ios-pill-icon moon">🌙</span>
            <span className="ios-pill-thumb">
              <span className="ios-pill-thumb-icon">{colorMode === "light" ? "☀️" : "🌙"}</span>
            </span>
          </button>

          <button
            className="sc-nav-arrow left"
            onClick={() => setMobileActive((i) => (i - 1 + ABOUT_ITEMS.length) % ABOUT_ITEMS.length)}
            title="Previous"
          >
            ◄
          </button>
          <button
            className="sc-nav-btn"
            onClick={() => setMobileActive((i) => (i - 1 + ABOUT_ITEMS.length) % ABOUT_ITEMS.length)}
          >
            LB
          </button>

          <div className="sc-nav-pills">
            {ABOUT_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                className={`sc-nav-pill ${mobileActive === idx ? "active" : ""}`}
                style={{
                  borderColor: mobileActive === idx ? item.role.accent : "rgba(255,255,255,0.2)",
                  color: mobileActive === idx ? item.role.accent : "rgba(255,255,255,0.7)",
                }}
                onClick={() => setMobileActive(idx)}
              >
                {item.tag}. {item.shortLabel}
              </button>
            ))}
          </div>

          <button
            className="sc-nav-btn"
            onClick={() => setMobileActive((i) => (i + 1) % ABOUT_ITEMS.length)}
          >
            RB
          </button>
          <button
            className="sc-nav-arrow right"
            onClick={() => setMobileActive((i) => (i + 1) % ABOUT_ITEMS.length)}
          >
            ►
          </button>
        </div>

        <div key={`panel-${mobileActive}`} className="sc-reveal-panel">
          <div className="sc-reveal-upper-bar">
            <div className="sc-reveal-title" style={{ color: currentMobileItem.role.accent }}>
              {currentMobileItem.reveal.title}
            </div>
            <div className="sc-reveal-desc">{currentMobileItem.reveal.desc}</div>
          </div>
          <div className="sc-reveal-lower-bar" style={{ color: currentMobileItem.role.accent }}>
            {currentMobileItem.reveal.sub}
          </div>
        </div>

        <div key={`portrait-${mobileActive}`} className="sc-main-portrait-shell">
          <img className="sc-main-portrait" src={currentMobileItem.portrait} alt="" />
        </div>
      </div>

      <div className={`sc-footer${mounted ? " mounted" : ""}`}>
        <div className="sc-footer-row">
          <span className="sc-footer-key">TAB</span>
          <span>SWITCH VIEW MODE</span>
        </div>
        <div className="sc-footer-row">
          <span className="sc-footer-key">↑ / ↓</span>
          <span>SELECT TOPIC</span>
        </div>
        <div
          className="sc-footer-row sc-footer-clickable"
          onClick={handleToggleColorMode}
          title="Toggle Light / Dark Mode (L)"
        >
          <span className="sc-footer-key">L</span>
          <span>{colorMode === "dark" ? "LIGHT MODE" : "DARK MODE"}</span>
        </div>
        <div
          className="sc-footer-row sc-footer-clickable"
          onClick={() => setThemeMode((m) => (m === "phantom" ? "dossier" : "phantom"))}
          title="Toggle View Mode (D)"
        >
          <span className="sc-footer-key">D</span>
          <span>TOGGLE {themeMode === "phantom" ? "DOSSIER" : "PHANTOM"}</span>
        </div>
        <div
          className="sc-footer-row sc-footer-clickable"
          onClick={() => onBack?.()}
        >
          <span className="sc-footer-key">ESC</span>
          <span>BACK TO MENU</span>
        </div>
      </div>
    </div>
  );
}
