import { useState, useEffect, useMemo } from "react";
import "./Socials.css";
import { SOCIAL_ITEMS as ITEMS } from "./data/socials";
import { SocialActionItem } from "./types/portfolio";
import VideoOverlay from "./VideoOverlay";

const jokerGlasses = "/joker_glasses.webp";
const bgVideo = "/newBg.mp4";

interface SocialsProps {
  onBack?: () => void;
}

export default function Socials({ onBack }: SocialsProps) {
  const [activeChannel, setActiveChannel] = useState<number>(0);
  const [activeAction, setActiveAction] = useState<number>(0);
  const [focus, setFocus] = useState<"channels" | "actions">("channels");
  const [mounted, setMounted] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const currentItem = ITEMS[activeChannel] || ITEMS[0];
  const actionItems: SocialActionItem[] = useMemo(() => currentItem.actionItems || [], [currentItem]);

  const executeAction = (action: SocialActionItem) => {
    if (action.type === "copy" && action.copyText) {
      navigator.clipboard.writeText(action.copyText);
      setToast(`✓ EMAIL COPIED: ${action.copyText}`);
      setTimeout(() => setToast(null), 3200);
    } else if (action.url) {
      if (action.url.startsWith("mailto:")) {
        window.location.href = action.url;
      } else {
        window.open(action.url, "_blank", "noopener,noreferrer");
      }
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        if (focus === "actions") {
          setFocus("channels");
        } else {
          onBack?.();
        }
        return;
      }

      if (focus === "channels") {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveChannel((i) => (i - 1 + ITEMS.length) % ITEMS.length);
          setActiveAction(0);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveChannel((i) => (i + 1) % ITEMS.length);
          setActiveAction(0);
        } else if (e.key === "ArrowLeft" || e.key === "Tab") {
          e.preventDefault();
          setFocus("actions");
          setActiveAction(0);
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (actionItems.length > 0) {
            executeAction(actionItems[0]);
          }
        }
      } else {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveAction((i) => (i - 1 + actionItems.length) % actionItems.length);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveAction((i) => (i + 1) % actionItems.length);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setFocus("channels");
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (actionItems[activeAction]) {
            executeAction(actionItems[activeAction]);
          }
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focus, activeChannel, activeAction, actionItems, onBack]);

  return (
    <div className={`p5-socials-stage ${mounted ? "mounted" : ""}`}>
      <video
        className="p5-socials-video"
        poster="/newBg_poster.webp"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      />

      <VideoOverlay
        gradient="radial-gradient(ellipse at 50% 50%, rgba(5, 7, 14, 0.45) 0%, rgba(5, 7, 14, 0.8) 70%, rgba(2, 4, 8, 0.95) 100%)"
      />

      <div className="p5-socials-screentone" aria-hidden="true" />
      <div className="p5-socials-vignette" aria-hidden="true" />

      {toast && (
        <div className="p5-socials-toast" role="status" aria-live="polite">
          <div className="p5-toast-inner">
            <span className="p5-toast-hazard">►►</span>
            <span className="p5-toast-title">NOTIFICATION</span>
            <span className="p5-toast-text">{toast}</span>
          </div>
        </div>
      )}

      <header className="p5-socials-topbar">
        <div className="p5-socials-hazard-tape">
          <span className="p5-tape-hazard-box" />
          <span className="p5-tape-title">CONTACT & NETWORKS // GET IN TOUCH</span>
          <span className="p5-tape-code">OPEN 2026</span>
        </div>

        <button
          type="button"
          className="p5-socials-close-btn"
          onClick={() => onBack?.()}
          title="Return to Menu (ESC)"
        >
          <span>◄ RETURN [ESC]</span>
        </button>
      </header>

      <main className="p5-areamap-arena">
        <div className="p5-areamap-frame">
          <div className="p5-areamap-jagged-border" aria-hidden="true" />

          <section
            className={`p5-areamap-dossier ${focus === "actions" ? "focused" : ""}`}
            aria-label="Contact Channel Details"
          >
            <div className="p5-dossier-topbar">
              <div className="p5-dossier-pulse-badge">
                <span className="p5-live-beacon" />
                <span>STATUS: ONLINE & RESPONSIVE</span>
              </div>
              <span className="p5-dossier-freq">LOCATION: JAKARTA, ID</span>
            </div>

            <div className="p5-dossier-category">
              <span className="p5-channel-num">{currentItem.channelNum || "CH-01"}</span>
              <span className="p5-category-name">{currentItem.categoryTitle || "CONTACT CHANNEL"}</span>
            </div>

            <div className="p5-dossier-headline-box">
              <div className="p5-headline-slash" />
              <h2 className="p5-dossier-title">{currentItem.label}</h2>
              <div className="p5-dossier-handle">{currentItem.handle}</div>
            </div>

            <p className="p5-dossier-desc">{currentItem.description}</p>

            <div className="p5-dossier-action-deck">
              <div className="p5-action-deck-header">
                <span>AVAILABLE ACTIONS // CLICK OR PRESS [ENTER]</span>
              </div>

              {actionItems.map((action, idx) => {
                const isSelected = focus === "actions" && activeAction === idx;
                return (
                  <button
                    key={action.id}
                    type="button"
                    className={`p5-action-slip ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      setFocus("actions");
                      setActiveAction(idx);
                      executeAction(action);
                    }}
                    onMouseEnter={() => {
                      setActiveAction(idx);
                    }}
                  >
                    <div className="p5-slip-tag">
                      <span className="p5-slip-marker">►</span>
                      <span className="p5-slip-label">{action.label}</span>
                    </div>

                    <div className="p5-slip-meta">
                      <span className="p5-slip-action-text">{action.actionText}</span>
                      <span className={`p5-slip-badge badge-${action.badgeColor || "gold"}`}>
                        {action.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p5-dossier-metrics">
              {currentItem.stats.map((st) => (
                <div key={st.tag} className="p5-metric-pill">
                  <span className="p5-metric-tag" style={{ color: st.color }}>
                    [{st.tag}]
                  </span>
                  <span className="p5-metric-val">{st.value}</span>
                </div>
              ))}
              <div className="p5-metric-pill accent-gold">
                <span className="p5-metric-tag">[TARGET]</span>
                <span className="p5-metric-val">2026 APPRENTICESHIP</span>
              </div>
            </div>
          </section>

          <nav
            className={`p5-areamap-chevrons ${focus === "channels" ? "focused" : ""}`}
            aria-label="Channel Selection"
          >
            <div className="p5-chevrons-headline">
              <span className="p5-headline-star">✦</span>
              <span>SELECT CHANNEL</span>
              <span className="p5-headline-star">✦</span>
            </div>

            <div className="p5-chevrons-list">
              {ITEMS.map((item, idx) => {
                const isActive = activeChannel === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`p5-chevron-banner ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setActiveChannel(idx);
                      setActiveAction(0);
                      setFocus("channels");
                    }}
                    onMouseEnter={() => {
                      setActiveChannel(idx);
                      setActiveAction(0);
                    }}
                  >
                    <div className="p5-chevron-inner">
                      <span className="p5-chevron-icon" aria-hidden="true">{item.icon}</span>
                      <span className="p5-chevron-label">{item.label}</span>
                      <span className="p5-chevron-tag">{item.channelNum || `0${idx + 1}`}</span>
                    </div>
                    <div className="p5-chevron-notch" />
                  </button>
                );
              })}
            </div>
          </nav>

          <aside className="p5-areamap-character" aria-hidden="true">
            <div className="p5-character-frame">
              <img
                src={jokerGlasses}
                alt="Joker Portrait"
                className="p5-character-img"
              />
              <div className="p5-character-halftone" />
            </div>

            <div className="p5-comic-speech-ribbon">
              <div className="p5-speech-ribbon-tail" />
              <p className="p5-speech-ribbon-text">
                How would you like to connect today?
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="p5-socials-footer">
        <div className="p5-hud-controls">
          <div className="p5-hud-item">
            <span className="p5-hud-key">▲▼</span>
            <span>SELECT CHANNEL</span>
          </div>
          <div className="p5-hud-item">
            <span className="p5-hud-key">◄►</span>
            <span>SWITCH FOCUS</span>
          </div>
          <div className="p5-hud-item">
            <span className="p5-hud-key">ENTER</span>
            <span>ENGAGE ACTION</span>
          </div>
          <button
            type="button"
            className="p5-hud-item clickable"
            onClick={() => onBack?.()}
          >
            <span className="p5-hud-key">ESC</span>
            <span>BACK TO MENU</span>
          </button>
        </div>

        <div className="p5-hud-meta">
          <span>PORTFOLIO CONTACT // FIKRI • JAKARTA, ID</span>
          <span className="p5-hud-dot">•</span>
          <span>AVAILABLE 2026</span>
        </div>
      </footer>
    </div>
  );
}