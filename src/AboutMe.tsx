import { useState, useEffect } from "react";
import "./AboutMe.css";
import VideoOverlay from "./VideoOverlay";

import { ABOUT_ITEMS as ITEMS } from "./data/about";


interface AboutMeProps {
  onBack?: () => void;
}

export default function AboutMe({ onBack }: AboutMeProps) {
  const [active, setActive] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "ArrowRight" || key === "ArrowDown" || key.toLowerCase() === "e" || key.toLowerCase() === "d") {
        setActive((i) => (i + 1) % ITEMS.length);
      } else if (key === "ArrowLeft" || key === "ArrowUp" || key.toLowerCase() === "q" || key.toLowerCase() === "a") {
        setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length);
      } else if (key === "Escape" || key === "Backspace") {
        onBack?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  const currentItem = ITEMS[active];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      setActive((i) => (i + 1) % ITEMS.length);
    } else if (diff < -45) {
      setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length);
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="sc-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video className="sc-video" src="/stats.mp4" autoPlay loop muted playsInline preload="metadata" disablePictureInPicture />
      <VideoOverlay darkness={0.35} />

      <button
        className="sc-back-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC)"
      >
        ◄ BACK TO MENU
      </button>

      {/* Slanted Nav with LB / RB & Tab Indicator Pills */}
      <div key={`nav-${active}`} className="sc-right-nav">
        <button
          className="sc-nav-arrow left"
          onClick={() => setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length)}
          title="Previous (Q / ←)"
        >
          ◄
        </button>
        <button
          className="sc-nav-btn"
          onClick={() => setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length)}
          title="Q / Previous"
        >
          LB
        </button>

        <div className="sc-nav-pills">
          {ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className={`sc-nav-pill ${active === idx ? "active" : ""}`}
              style={{
                borderColor: active === idx ? item.role.accent : "rgba(255,255,255,0.2)",
                color: active === idx ? item.role.accent : "rgba(255,255,255,0.7)",
              }}
              onClick={() => setActive(idx)}
            >
              {item.tag}. {item.shortLabel}
            </button>
          ))}
        </div>

        <button
          className="sc-nav-btn"
          onClick={() => setActive((i) => (i + 1) % ITEMS.length)}
          title="E / Next"
        >
          RB
        </button>
        <button
          className="sc-nav-arrow right"
          onClick={() => setActive((i) => (i + 1) % ITEMS.length)}
          title="Next (E / →)"
        >
          ►
        </button>
      </div>

      {/* Main Cut-In Slash Reveal Panel */}
      <div key={`panel-${active}`} className="sc-reveal-panel">
        <div className="sc-reveal-upper-bar">
          <div className="sc-reveal-title" style={{ color: currentItem.role.accent }}>
            {currentItem.reveal.title}
          </div>
          <div className="sc-reveal-desc">{currentItem.reveal.desc}</div>
        </div>
        <div className="sc-reveal-lower-bar" style={{ color: currentItem.role.accent }}>
          {currentItem.reveal.sub}
        </div>
      </div>

      {/* Character Cut-in Portrait on Right */}
      <div key={`portrait-${active}`} className="sc-main-portrait-shell">
        <img className="sc-main-portrait" src={currentItem.portrait} alt="" />
      </div>

      {/* Footer Navigation Hints */}
      <div className={`sc-footer${mounted ? " mounted" : ""}`}>
        <div className="sc-footer-row">
          <span className="sc-footer-key">← / →</span>
          <span className="sc-footer-key">Q / E</span>
          <span>SWITCH SLIDE</span>
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
