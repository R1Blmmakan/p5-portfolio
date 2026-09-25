import { useState, useEffect } from "react";
import "./LandscapeHint.css";

export default function LandscapeHint() {
  const [isPortraitMobile, setIsPortraitMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 820;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsPortraitMobile(isMobile && isPortrait);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!isPortraitMobile || dismissed) return null;

  return (
    <div className="p5-landscape-hint" role="status">
      <div className="p5-landscape-hint-badge">INFO</div>
      <div className="p5-landscape-hint-content">
        <span className="p5-hint-icon">📱 ↷</span>
        <span className="p5-hint-text">
          ROTATE TO <strong>LANDSCAPE</strong> FOR THE OPTIMAL INTERACTIVE EXPERIENCE
        </span>
      </div>
      <button
        className="p5-landscape-hint-close"
        onClick={() => setDismissed(true)}
        title="Dismiss advisory"
        aria-label="Dismiss advisory"
      >
        ✕
      </button>
    </div>
  );
}
