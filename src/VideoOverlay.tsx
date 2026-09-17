import React from "react";
import "./VideoOverlay.css";

export interface VideoOverlayProps {
  darkness?: number;
  color?: string;
  gradient?: string;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function VideoOverlay({
  darkness = 0.4,
  color = "0, 0, 0",
  gradient,
  zIndex = 1,
  className = "",
  style,
  children,
}: VideoOverlayProps) {
  return (
    <div
      className={`video-dark-overlay ${className}`.trim()}
      style={{
        background: gradient || `rgba(${color}, ${darkness})`,
        zIndex,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
