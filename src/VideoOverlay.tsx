import React from "react";
import "./VideoOverlay.css";

export interface VideoOverlayProps {
  /**
   * Tingkat kegelapan (0 = transparan, 1 = hitam pekat).
   * Contoh: 0.35 (agak gelap), 0.5 (sedang). Default: 0.4 (40%)
   */
  darkness?: number;

  /**
   * Warna overlay dalam format RGB triplet.
   * Default: "0, 0, 0" (hitam). Bisa diubah misal "10, 15, 30" untuk navy.
   */
  color?: string;

  /**
   * Custom gradasi jika ingin menggelapkan sisi tertentu saja.
   * Contoh: "linear-gradient(to right, transparent 45%, rgba(0, 0, 0, 0.6) 100%)"
   */
  gradient?: string;

  /**
   * Layer tumpukan (z-index).
   * Default: 1 (berada tepat di atas video z-index: 0 dan di bawah teks/menu).
   */
  zIndex?: number;

  /**
   * Kelas CSS tambahan jika diperlukan.
   */
  className?: string;

  /**
   * Custom inline style jika ingin menambahkan style lain.
   */
  style?: React.CSSProperties;

  children?: React.ReactNode;
}

/**
 * Komponen overlay reusable untuk menggelapkan video background.
 * Mendukung warna solid gelap maupun efek gradient.
 */
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
