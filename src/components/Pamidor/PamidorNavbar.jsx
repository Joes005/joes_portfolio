import React, { useState, useEffect } from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function PamidorNavbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/92 dark:bg-[#0A0A0A]/92 backdrop-blur-md py-3.5 border-b border-rule shadow-sm"
          : "bg-transparent py-4 sm:py-5 lg:py-6"
      }`}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side — Personal Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-sans text-base sm:text-lg md:text-xl font-semibold tracking-tight text-ink select-none hover:text-accent transition-colors"
          aria-label="Levin Joeshwa"
        >
          <span>Levin Joeshwa</span>
        </a>

        {/* Center Navigation Links: About, Skills, Projects, Services, Experience */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-rule backdrop-blur-sm">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-xs sm:text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Side — [Let's Talk ↗] & Dark/Light Theme Switcher ONLY */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-sans font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-sm group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-rule text-neutral-700 dark:text-neutral-300 hover:border-accent hover:text-accent transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 hover:text-accent transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <nav className="flex md:hidden items-center justify-center gap-3 pt-2.5 pb-1 px-4 overflow-x-auto no-scrollbar font-sans text-xs">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-2 py-0.5 whitespace-nowrap font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
