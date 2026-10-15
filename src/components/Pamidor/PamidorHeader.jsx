import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, ArrowUpRight } from "lucide-react";

export default function PamidorHeader() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for header backdrop blur & border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exact 5 Navigation Links: About, Skills, Projects, Services, Experience
  const navLinks = [
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Services", to: "/services" },
    { label: "Experience", to: "/experience" },
  ];

  const isCurrentPage = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  // Connect "Let's Talk" to the Contact section on home or navigate to contact page
  const handleContactClick = (e) => {
    const contactElem = document.getElementById("contact");
    if (contactElem && location.pathname === "/") {
      e.preventDefault();
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll smoothly to top on brand click
  const handleBrandClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/92 dark:bg-[#0A0A0A]/92 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-rule shadow-sm"
          : "bg-transparent py-3 sm:py-5 lg:py-6"
      }`}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side — Personal Brand Wordmark */}
        <Link
          to="/"
          onClick={handleBrandClick}
          className="group font-sans text-base sm:text-lg md:text-xl font-semibold tracking-tight text-ink hover:text-accent transition-colors duration-200 select-none shrink-0"
          aria-label="Levin Joeshwa - Back to top"
        >
          <span>Levin Joeshwa</span>
        </Link>

        {/* Center — Desktop / Tablet Rounded Navigation Container */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-rule backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
        >
          {navLinks.map((item) => {
            const active = isCurrentPage(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-1 text-xs lg:text-sm font-sans font-medium transition-colors duration-200 relative rounded-full ${
                  active
                    ? "text-accent font-semibold"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-accent dark:hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side — [Let's Talk ↗] & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* [Let's Talk ↗] Button — Connected to Contact Section */}
          <Link
            to="/contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-sans font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-200 shadow-sm group active:scale-95"
            aria-label="Contact Levin Joeshwa"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Dark / Light Theme Toggle Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-rule text-neutral-700 dark:text-neutral-300 hover:border-accent hover:text-accent transition-colors duration-200 active:scale-95"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 hover:text-accent transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Container — Clean, Centered, No Horizontal Overflow */}
      <div className="md:hidden w-full px-4 pt-2 pb-0.5">
        <nav
          aria-label="Mobile Navigation"
          className="mx-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 max-w-sm px-2.5 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-rule/70 backdrop-blur-sm overflow-x-auto no-scrollbar"
        >
          {navLinks.map((item) => {
            const active = isCurrentPage(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`px-2 py-1 text-[11px] sm:text-xs font-sans whitespace-nowrap rounded-full transition-colors duration-200 ${
                  active
                    ? "text-accent font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
