import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import "./PageTransition.css";

interface Block {
  color: string;
  delay: number;
}

const defaultBlocks: Block[] = [
  { color: "#040a1f", delay: 0 },
  { color: "#c4001a", delay: 0.04 },
  { color: "#00e1ff", delay: 0.08 },
  { color: "#ffffff", delay: 0.12 },
];

function DefaultTransition() {
  return (
    <>
      {defaultBlocks.map((block, i) => (
        <motion.div
          key={i}
          className="p5-transition-overlay-item"
          style={{
            inset: 0,
            background: block.color,
            zIndex: 9999 - i,
            originX: 0,
          }}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            transitionEnd: { display: "none" },
          }}
          transition={{
            duration: 0.48,
            delay: block.delay,
            times: [0, 0.38, 0.62, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </>
  );
}

interface Panel {
  color: string;
  top: string;
  left: string;
  width: string;
  delay: number;
}

const aboutPanels: Panel[] = [
  { color: "#040a1f", top: "-14vh", left: "-20vw", width: "140vw", delay: 0 },
  { color: "#c4001a", top: "18vh", left: "-12vw", width: "140vw", delay: 0.04 },
  { color: "#00e1ff", top: "48vh", left: "-16vw", width: "140vw", delay: 0.08 },
  { color: "#ffffff", top: "72vh", left: "-10vw", width: "140vw", delay: 0.12 },
];

function AboutTransition() {
  return (
    <>
      {aboutPanels.map((panel, i) => (
        <motion.div
          key={i}
          className="p5-transition-overlay-item"
          style={{
            top: panel.top,
            left: panel.left,
            width: panel.width,
            height: "28vh",
            background: panel.color,
            zIndex: 9999 - i,
            clipPath: "polygon(0 0, 100% 0, calc(100% - 130px) 100%, 0 100%)",
            transform: "rotate(-20deg)",
            transformOrigin: "left center",
            boxShadow: panel.color === "#ffffff" ? "12px 0 0 #c4001a" : "none",
          }}
          initial={{ x: "-120vw", opacity: 1 }}
          animate={{
            x: ["-120vw", "0vw", "0vw", "130vw"],
            opacity: [1, 1, 1, 0],
            transitionEnd: { display: "none" },
          }}
          transition={{
            duration: 0.55,
            delay: panel.delay,
            times: [0, 0.38, 0.62, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </>
  );
}

interface Card {
  top: string;
  color: string;
  delay: number;
}

const resumeCards: Card[] = [
  { top: "12vh", color: "#0d1547", delay: 0 },
  { top: "29vh", color: "#00e1ff", delay: 0.04 },
  { top: "46vh", color: "#ffffff", delay: 0.08 },
  { top: "63vh", color: "#c4001a", delay: 0.12 },
];

function ResumeTransition() {
  return (
    <>
      {resumeCards.map((card, i) => (
        <motion.div
          key={i}
          className="p5-transition-overlay-item"
          style={{
            left: 0,
            top: card.top,
            width: "100vw",
            height: "15vh",
            background: card.color,
            zIndex: 9999 - i,
            clipPath: "polygon(0 0, 97% 0, 100% 100%, 3% 100%)",
            boxShadow: card.color === "#ffffff" ? "12px 0 0 #c4001a" : "0 8px 0 rgba(0,0,0,0.4)",
          }}
          initial={{ x: "-120vw", opacity: 1 }}
          animate={{
            x: ["-120vw", "0vw", "0vw", "130vw"],
            opacity: [1, 1, 1, 0],
            transitionEnd: { display: "none" },
          }}
          transition={{
            duration: 0.56,
            delay: card.delay,
            times: [0, 0.4, 0.6, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </>
  );
}

interface Stripe {
  color: string;
  left: string;
  width: string;
  delay: number;
}

const socialsStripes: Stripe[] = [
  { color: "#040a1f", left: "68vw", width: "26vw", delay: 0 },
  { color: "#c4001a", left: "78vw", width: "16vw", delay: 0.04 },
  { color: "#00e1ff", left: "86vw", width: "10vw", delay: 0.08 },
];

function SocialsTransition() {
  return (
    <>
      {socialsStripes.map((stripe, i) => (
        <motion.div
          key={i}
          className="p5-transition-overlay-item"
          style={{
            top: "-20vh",
            left: stripe.left,
            width: stripe.width,
            height: "140vh",
            background: stripe.color,
            zIndex: 9999 - i,
            transform: "skewX(-16deg)",
            transformOrigin: "top",
          }}
          initial={{ y: "-130vh", opacity: 1 }}
          animate={{
            y: ["-130vh", "0vh", "0vh", "130vh"],
            opacity: [1, 1, 1, 0],
            transitionEnd: { display: "none" },
          }}
          transition={{
            duration: 0.55,
            delay: stripe.delay,
            times: [0, 0.4, 0.6, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </>
  );
}

export type TransitionVariant = "default" | "about" | "resume" | "socials" | "projects" | "sideproj";

function TransitionOverlay({ variant }: { variant: TransitionVariant }) {
  if (variant === "about") return <AboutTransition />;
  if (variant === "resume") return <ResumeTransition />;
  if (variant === "socials") return <SocialsTransition />;
  if (variant === "projects" || variant === "sideproj") return <ResumeTransition />;
  return <DefaultTransition />;
}

interface PageTransitionProps {
  children: ReactNode;
  variant?: TransitionVariant;
}

export default function PageTransition({ children, variant = "default" }: PageTransitionProps) {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="p5-transition-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.16 }}
    >
      {showOverlay && <TransitionOverlay variant={variant} />}
      {children}
    </motion.div>
  );
}
