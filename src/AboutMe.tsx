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
  const [activeDialogueId, setActiveDialogueId] = useState<string>(DIALOGUES[0].id);
  const [activeChronicleIdx, setActiveChronicleIdx] = useState<number>(0);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  // Mobile fallback state
  const [mobileActive, setMobileActive] = useState<number>(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        onBack?.();
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
  }, [viewMode, activeDialogueId, activeChronicleIdx, onBack]);

  const activeDialogue = DIALOGUES.find((d) => d.id === activeDialogueId) ?? DIALOGUES[0];
  const activeChronicle = CHRONICLES[activeChronicleIdx] ?? CHRONICLES[0];
  const currentMobileItem = ABOUT_ITEMS[mobileActive] ?? ABOUT_ITEMS[0];

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -18;
    const tiltY = (x - 0.5) * 18;
    setCardTilt({ x: tiltX, y: tiltY, glareX: x * 100, glareY: y * 100 });
  };

  const handleMouseLeaveCard = () => {
    setCardTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div className="sc-container">
      <video
        className="sc-video"
        src="/newBg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      />
      <VideoOverlay darkness={0.35} />

      <button
        className="sc-back-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC)"
      >
        ◄ BACK TO MENU
      </button>

      {/* ========================================================= */}
      {/* DESKTOP VIEW: CONFIDANT SOCIAL LINK // INTERACTIVE HUB     */}
      {/* ========================================================= */}
      <div className={`confidant-desktop-view ${mounted ? "mounted" : ""}`}>
        {/* Top Header Strip */}
        <div className="confidant-top-header">
          <div className="confidant-header-left">
            <span className="confidant-tag-pulse">●</span>
            <span className="confidant-header-title">
              CONFIDANT INTERFACE // ARCANA 0: THE ARCHITECT
            </span>
          </div>

          <div className="confidant-header-right">
            <span className="confidant-affinity-stamp">AFFINITY: MASTERED</span>
            <span className="confidant-status-stamp">STATUS: PRODUCTION READY</span>
          </div>
        </div>

        {/* Main Grid: Tarot Card Left vs Confidant Hub Right */}
        <div className="confidant-main-grid">
          {/* LEFT: 3D FLOATING TAROT ARCANA CARD */}
          <div className="confidant-card-column">
            <div
              className="tarot-card-wrapper"
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              }}
            >
              {/* Holographic Sheen Layer */}
              <div
                className="tarot-card-glare"
                style={{
                  background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 215, 0, 0.15) 45%, transparent 75%)`,
                }}
              />

              <div className="tarot-card-inner">
                {/* Tarot Header */}
                <div className="tarot-card-top">
                  <span className="tarot-numeral">0</span>
                  <span className="tarot-arcana-name">THE ARCHITECT</span>
                  <span className="tarot-numeral">0</span>
                </div>

                {/* Tarot Frame & Portrait */}
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

                {/* Tarot Card Details */}
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

          {/* RIGHT: CONFIDANT HUB (INTERVIEW VS CHRONICLES) */}
          <div className="confidant-content-column">
            {/* Primary Mode Switcher Tabs */}
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

            {/* MODE A: DIRECT INTERVIEW (JRPG DIALOGUE SYSTEM) */}
            {viewMode === "interview" && (
              <div className="confidant-interview-container">
                {/* Prompt Selector Questions */}
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

                {/* Persona 5 JRPG Dialogue Box */}
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
                    <span>TOPIC: {activeDialogue.topic}</span>
                    <span className="dialogue-prompt-indicator">▼ PRESS ANY OPTION TO ASK MORE</span>
                  </div>
                </div>
              </div>
            )}

            {/* MODE B: CONFIDANT CHRONICLES (DEEP TIMELINE PILLARS) */}
            {viewMode === "chronicles" && (
              <div className="confidant-chronicles-container">
                {/* 5 Chapters Selector Strip */}
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

                {/* Active Chapter Details Sheet */}
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

                  <h2 className="chronicle-title" style={{ color: activeChronicle.accent }}>
                    {activeChronicle.title}
                  </h2>
                  <div className="chronicle-subtitle">
                    {activeChronicle.subtitle}
                  </div>

                  {/* Body Paragraphs */}
                  <div className="chronicle-paragraphs">
                    {activeChronicle.content.map((p, i) => (
                      <p key={i} className="chronicle-p">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Highlights / Specs */}
                  <div className="chronicle-specs-row">
                    {activeChronicle.specs.map((s, i) => (
                      <div key={i} className="chronicle-spec-card">
                        <span className="spec-label">{s.label}</span>
                        <span className="spec-val">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
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

      {/* ========================================================= */}
      {/* MOBILE PRESERVED LAYOUT (Touch & Small Screens <= 900px)   */}
      {/* ========================================================= */}
      <div className="dossier-mobile-view">
        <div key={`nav-${mobileActive}`} className="sc-right-nav">
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

      {/* Footer Navigation Hints */}
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
          onClick={() => onBack?.()}
        >
          <span className="sc-footer-key">ESC</span>
          <span>BACK TO MENU</span>
        </div>
      </div>
    </div>
  );
}
