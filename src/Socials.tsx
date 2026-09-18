import { useState, useEffect } from "react";
import "./Socials.css";
import { SOCIAL_ITEMS as ITEMS } from "./data/socials";
import { SocialItem } from "./types/portfolio";

const char1 = "/char1.webp";
const char2 = "/char2.webp";
const char3 = "/char3.webp";
const bgVideo = "/main3.mp4";
const newsign = "/newsign.webp";

const CHARS = [char1, char2, char3, char1];

interface RoleItem {
  text: string;
  color: string;
  bg: string;
  border: string;
}

const ROLES: RoleItem[] = [
  { text: "CONTACT", color: "#ffea00", bg: "rgba(255, 234, 0, 0.12)", border: "rgba(255, 234, 0, 0.5)" },
  { text: "LEADER", color: "#e8c100", bg: "rgba(232, 193, 0, 0.12)", border: "rgba(232, 193, 0, 0.5)" },
  { text: "PARTY",  color: "#4a8fff", bg: "rgba(74, 143, 255, 0.12)", border: "rgba(74, 143, 255, 0.5)" },
  { text: "PARTY",  color: "#4a8fff", bg: "rgba(74, 143, 255, 0.12)", border: "rgba(74, 143, 255, 0.5)" },
];

interface SocialsProps {
  onBack?: () => void;
}

export default function Socials({ onBack }: SocialsProps) {
  const [active, setActive] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeInfoBar, setActiveInfoBar] = useState<number>(0);
  const [focus, setFocus] = useState<"left" | "right">("left");
  const [toast, setToast] = useState<string | null>(null);

  const handleAction = (item: SocialItem, linkIndex?: number) => {
    if (item.isEmail) {
      navigator.clipboard.writeText("fikri.dev@gmail.com");
      setToast("✓ EMAIL COPIED: fikri.dev@gmail.com");
      setTimeout(() => setToast(null), 3000);
      if (linkIndex === 1) {
        window.location.href = "mailto:fikri.dev@gmail.com";
      }
    } else if (linkIndex !== undefined) {
      window.open("https://" + item.links[linkIndex], "_blank");
    } else {
      window.open(item.href, "_blank");
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (focus === "left") {
        if (e.key === "ArrowUp") setActive((i) => Math.max(0, i - 1));
        if (e.key === "ArrowDown") setActive((i) => Math.min(ITEMS.length - 1, i + 1));
        if (e.key === "ArrowRight") {
          setFocus("right");
          setActiveInfoBar(0);
        }
        if (e.key === "Enter") handleAction(ITEMS[active]);
        if (e.key === "Escape" || e.key === "Backspace" || e.key === "ArrowLeft") onBack?.();
      } else {
        const barCount = ITEMS[active].bars;
        if (e.key === "ArrowUp") setActiveInfoBar((i) => Math.max(0, i - 1));
        if (e.key === "ArrowDown") setActiveInfoBar((i) => Math.min(barCount - 1, i + 1));
        if (e.key === "ArrowLeft") setFocus("left");
        if (e.key === "Enter") handleAction(ITEMS[active], activeInfoBar);
        if (e.key === "Escape" || e.key === "Backspace") setFocus("left");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, focus, activeInfoBar, onBack]);

  return (
    <div className="socials-screen">
      <video className="socials-video" poster="/main3_poster.webp" src={bgVideo} autoPlay loop muted playsInline preload="metadata" disablePictureInPicture />
      <div className="socials-overlay" />

      {toast && (
        <div className="p5-social-toast">
          <div className="p5-social-toast-inner">
            <span className="p5-social-toast-accent">►►</span>
            <span>{toast}</span>
          </div>
        </div>
      )}

      <button
        className="socials-back-btn"
        onClick={() => onBack?.()}
        title="Return to Menu (ESC / ←)"
      >
        ◄ BACK TO MENU
      </button>

      <div className="socials-root" role="navigation">
        {ITEMS.map((item, i) => {
          const isActive = active === i;
          return (
            <div
              key={item.id}
              className={`socials-bar-outer${isActive ? " active" : ""}${mounted ? " mounted" : ""}`}
              onClick={() => {
                if (active === i) handleAction(item);
                else {
                  setActive(i);
                  setActiveInfoBar(0);
                }
              }}
              onMouseEnter={() => {
                setActive(i);
                setActiveInfoBar(0);
              }}
            >
              <div className="socials-bar-red" />
              <div className="socials-bar">
                <img className="socials-char" src={CHARS[i % CHARS.length]} alt="" />
                <div className="socials-bar-fill" />
                <div className="socials-bar-shade" />
                <div className="socials-bar-content">
                  <div className="socials-role">{ROLES[i % ROLES.length].text}</div>
                  <div className="socials-main">
                    <div className="socials-main-top">
                      <div className="socials-icon">{item.icon}</div>
                      <div className="socials-label">{item.label}</div>
                    </div>
                  </div>
                  <div className="socials-stats">
                    {item.stats.map((s) => (
                      <div className="socials-stat" key={s.tag}>
                        <div className="socials-stat-top">
                          <span className="socials-stat-tag" style={{ color: s.color, borderColor: s.color }}>
                            {s.tag}
                          </span>
                          <span className="socials-stat-num">{s.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {mounted && (
        <div className="socials-right-nav" key={`nav-${active}`}>
          <button
            className="socials-nav-arrow left"
            onClick={() => setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length)}
          >
            ◄
          </button>
          <button
            className="socials-nav-btn"
            onClick={() => setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length)}
          >
            LB
          </button>
          <span className="socials-nav-label">{ITEMS[active].label}</span>
          <button
            className="socials-nav-btn"
            onClick={() => setActive((i) => (i + 1) % ITEMS.length)}
          >
            RB
          </button>
          <button
            className="socials-nav-arrow right"
            onClick={() => setActive((i) => (i + 1) % ITEMS.length)}
          >
            ►
          </button>
        </div>
      )}

      {mounted && (
        <div className="socials-info-container">
          {Array.from({ length: ITEMS[active].bars }).map((_, i) => {
            const isBarSelected = focus === "right" && activeInfoBar === i;
            return (
              <div
                className={`socials-info-bar-wrap${isBarSelected ? " selected" : ""}`}
                key={`bar-${active}-${i}`}
                style={{ animationDelay: `${i * 45}ms` }}
                onClick={() => {
                  setFocus("right");
                  setActiveInfoBar(i);
                  handleAction(ITEMS[active], i);
                }}
                onMouseEnter={() => {
                  setFocus("right");
                  setActiveInfoBar(i);
                }}
              >
                {ITEMS[active].newBars.includes(i) && (
                  <img className="socials-info-bar-new" src={newsign} alt="" />
                )}
                <div className="socials-info-bar">
                  <img className="socials-info-bar-icon" src={ITEMS[active].barIcon} alt="" />
                  <span className="socials-info-bar-text">{ITEMS[active].links[i]}</span>
                  <span className="socials-info-bar-box">STATUS</span>
                  <span className="socials-info-bar-count">{ITEMS[active].counts[i]}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className={`socials-footer${mounted ? " mounted" : ""}`}>
        <div className="socials-footer-row">
          <span className="socials-footer-key">↑↓</span>
          <span>SELECT {focus === "left" ? "CHANNEL" : "ACTION"}</span>
        </div>
        <div className="socials-footer-row">
          <span className="socials-footer-key">← / →</span>
          <span>SWITCH FOCUS</span>
        </div>
        <div className="socials-footer-row">
          <span className="socials-footer-key">↵</span>
          <span>TRIGGER ACTION</span>
        </div>
        <div
          className="socials-footer-row socials-footer-clickable"
          onClick={() => onBack?.()}
        >
          <span className="socials-footer-key">ESC</span>
          <span>BACK TO MENU</span>
        </div>
      </div>
    </div>
  );
}