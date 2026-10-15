import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import HwText from "./HwText";

export default function PamidorFooter() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Me", to: "/about" },
    { label: "Skills & Technologies", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Services", to: "/services" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" }
  ];

  const techStacks = [
    "React 19 & Tailwind CSS",
    "Node.js & Express APIs",
    "Laravel (PHP) & REST",
    "Python FastAPI & SSE",
    "MySQL 8.0 InnoDB & Redis",
    "Autonomous AI Agents & RAG"
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Joes005" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "Direct Email", href: "mailto:levinjoeshwa.dev@gmail.com" }
  ];

  return (
    <footer
      id="studio-footer"
      data-cursor-invert="true"
      className="relative w-full bg-night text-canvas pt-20 pb-12 sm:pt-28 sm:pb-16 border-t border-white/[0.08]"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-16">
        {/* Top Commanding Email Callout */}
        <div className="pb-12 border-b border-[var(--night-hr)]">
          <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-4">
            (DIRECT CONTACT &amp; PRODUCTION INQUIRIES)
          </div>

          <Link
            to="/contact"
            className="group block font-funnel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white hover:text-accent transition-colors uppercase tracking-tight"
          >
            <div className="flex items-center justify-between">
              <HwText text="LEVINJOESHWA.DEV@GMAIL.COM" baseColor="#FFFFFF" flashColor="#D12424" />
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-accent transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 shrink-0" />
            </div>
          </Link>

          <p className="mt-4 font-serif italic text-lg sm:text-xl text-neutral-400 max-w-2xl font-light">
            Somewhere between clean architecture and raw speed. A real reply, usually the same day.
          </p>
        </div>

        {/* 4-Column Studio Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-space text-xs">
          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <span className="block font-bold uppercase tracking-widest text-neutral-400">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-neutral-300 hover:text-accent transition-colors block py-0.5"
                  >
                    <HwText text={item.label} baseColor="#D4D4D8" flashColor="#D12424" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Core Stacks */}
          <div className="space-y-4">
            <span className="block font-bold uppercase tracking-widest text-neutral-400">
              CORE STACKS
            </span>
            <ul className="space-y-2.5 text-neutral-300">
              {techStacks.map((stack) => (
                <li key={stack} className="py-0.5 text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{stack}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Networks & Socials */}
          <div className="space-y-4">
            <span className="block font-bold uppercase tracking-widest text-neutral-400">
              NETWORKS
            </span>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-accent transition-colors py-0.5"
                  >
                    <HwText text={s.label} baseColor="#D4D4D8" flashColor="#D12424" />
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Telemetry & Back-to-Top Button */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="block font-bold uppercase tracking-widest text-neutral-400">
                STUDIO TELEMETRY
              </span>
              <div className="space-y-1.5 text-neutral-400 text-[11px] leading-relaxed">
                <p>LOCATION: TAMIL NADU, INDIA</p>
                <p>TIMEZONE: IST (UTC +5:30)</p>
                <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE: {localTime || "15:35:00"} IST</span>
                </p>
                <p>STATUS: SELECT SPRINT BUILDS OPEN</p>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group inline-flex items-center gap-3 px-5 py-3 border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-night text-xs font-space font-bold uppercase tracking-wider"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="h-4 w-4 shrink-0 -rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-10 border-t border-[var(--night-hr)] font-space text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Levin Studio. All rights reserved.</p>
          <p className="text-center md:text-right">
            HIGH-THROUGHPUT SYSTEMS · SCALABLE ARCHITECTURES · ZERO LEDGER DRIFT
          </p>
        </div>
      </div>
    </footer>
  );
}
