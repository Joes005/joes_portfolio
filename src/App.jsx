import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import { ThemeProvider } from "./context/ThemeContext";
import PamidorHeader from "./components/Pamidor/PamidorHeader";
import PamidorFooter from "./components/Pamidor/PamidorFooter";
import PamidorCursor from "./components/Pamidor/PamidorCursor";
import ScrollToTop from "./components/Common/ScrollToTop";

// 8 Dedicated Multipage Routes in exact order
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import ServicesPage from "./pages/Services/ServicesPage";
import ResumePage from "./pages/Resume/ResumePage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFound from "./pages/NotFound/NotFound";

function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-canvas text-ink relative flex flex-col justify-between transition-colors duration-300">
          <SmoothScroll />
          <ScrollToTop />
          <PamidorCursor />

          {/* Header Navigation with 8 Pages in Order */}
          <PamidorHeader />

          {/* Main Content Area */}
          <div className="flex-grow">
            <Routes>
              {/* 1. 🏠 Home — Landing Page */}
              <Route path="/" element={<Home />} />

              {/* 2. 👨💻 About Me */}
              <Route path="/about" element={<AboutPage />} />

              {/* 3. 🛠️ Skills & Technologies */}
              <Route path="/skills" element={<SkillsPage />} />

              {/* 4. 🚀 Projects & Project Details */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/work" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />

              {/* 5. 💼 Experience */}
              <Route path="/experience" element={<ExperiencePage />} />

              {/* 6. 💡 Services */}
              <Route path="/services" element={<ServicesPage />} />

              {/* 7. 📄 Resume */}
              <Route path="/resume" element={<ResumePage />} />

              {/* 8. 📬 Contact */}
              <Route path="/contact" element={<ContactPage />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Studio Footer with 8 Pages Directory */}
          <PamidorFooter />
        </div>
      </Router>
    </ThemeProvider>
  );
}
