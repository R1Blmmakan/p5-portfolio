import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import PageTransition from "./PageTransition";
import "./App.css";

const AboutMe = lazy(() => import("./AboutMe"));
const ProjectsPage = lazy(() => import("./ProjectsPage"));
const ResumePage = lazy(() => import("./ResumePage"));
const Socials = lazy(() => import("./Socials"));

function PersonaLoader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        color: "#e60012",
        fontFamily: "'Anton', 'Space Grotesk', sans-serif",
        fontSize: "1.8rem",
        letterSpacing: "4px",
        fontStyle: "italic",
        zIndex: 99999,
        textShadow: "3px 3px 0px #000000",
      }}
    >
      <span>LOADING...</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main>
      <Suspense fallback={<PersonaLoader />}>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition key="menu" variant="default">
                <Menu onNavigate={(page) => navigate(`/${page}`)} />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition key="about" variant="about">
                <AboutMe onBack={() => navigate("/")} onNavigate={(page) => navigate(`/${page}`)} />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition key="projects" variant="sideproj">
                <ProjectsPage onBack={() => navigate("/")} />
              </PageTransition>
            }
          />
          <Route
            path="/sideproj"
            element={
              <PageTransition key="sideproj" variant="sideproj">
                <ProjectsPage onBack={() => navigate("/")} />
              </PageTransition>
            }
          />
          <Route
            path="/resume"
            element={
              <PageTransition key="resume" variant="resume">
                <ResumePage onBack={() => navigate("/")} src="/stage_bg.mp4" />
              </PageTransition>
            }
          />
          <Route
            path="/socials"
            element={
              <PageTransition key="socials" variant="socials">
                <Socials onBack={() => navigate("/")} />
              </PageTransition>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AnimatePresence>
      </Suspense>
    </main>
  );
}
