import { motion } from "framer-motion";

interface MenuItemProps {
  label: string;
  isActive: boolean;
  rotation?: number;
  xOffset?: number;
  onClick?: () => void;
  onHover?: () => void;
}

export default function MenuItem({
  label,
  isActive,
  rotation = 0,
  xOffset = 0,
  onClick,
  onHover,
}: MenuItemProps) {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onHover}
      animate={{
        scale: isActive ? 1.15 : 0.96,
        x: isActive ? xOffset - 35 : xOffset,
        rotate: rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 24,
      }}
      style={{
        cursor: "pointer",
        position: "relative",
        display: "inline-block",
        transformOrigin: "right center",
        margin: "8px 0",
      }}
    >
      {isActive && (
        <motion.div
          layoutId="p3-slash"
          style={{
            position: "absolute",
            inset: "-6px -28px",
            backgroundColor: "var(--p3-red)",
            clipPath: "polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%)",
            boxShadow: "3px 3px 0px #020914",
            zIndex: 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "3.3rem",
          fontWeight: 900,
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontStyle: "italic",
          color: isActive ? "var(--p3-white)" : "var(--p3-cyan)",
          textShadow: isActive
            ? "3px 3px 0px #020b18"
            : "0 0 12px rgba(0, 225, 255, 0.4)",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}
