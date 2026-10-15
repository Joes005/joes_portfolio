import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, FileText, Mail 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Common/SocialIcons";
import HwText from "./HwText";

export default function PamidorHero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 14;
    const y = ((clientY - top) / height - 0.5) * 14;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const coreExpertise = [
    "Full-Stack Development",
    "Backend Engineering",
    "AI Applications"
  ];

  const technologies = [
    "React",
    "Laravel",
    "Node.js",
    "Python",
    "FastAPI",
    "MySQL"
  ];

  const marqueeItems = [
    "LEVIN JOESHWA — FULL STACK DEVELOPER",
    "MODERN WEB APPLICATIONS",
    "SCALABLE BACKEND SYSTEMS",
    "AI-POWERED BUSINESS SOLUTIONS",
    "REACT 19 & TAILWIND CSS",
    "JAVA & SPRING BOOT",
    "PYTHON FASTAPI & MACHINE LEARNING",
    "MYSQL 8.0 & ACID INTEGRITY",
    "HIGH-THROUGHPUT SYSTEM ARCHITECTURE"
  ];

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100svh] bg-canvas flex flex-col justify-between pt-28 pb-0 lg:pt-32 overflow-hidden border-b border-rule"
    >
      {/* Main Hero Container */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100svh-14rem)]">
          {/* Left Column: Exactly matches the user requirements & Pamidor aesthetic */}
          <div className="lg:col-span-7 z-20 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5 font-space text-xs font-bold tracking-widest uppercase text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>FULL-STACK DEVELOPMENT · BACKEND ENGINEERING · AI SOLUTIONS</span>
            </div>

            {/* Giant Name Headline */}
            <div className="select-none">
              <h1 className="font-funnel font-black text-ink tracking-tight text-[3.8rem] sm:text-[5.2rem] lg:text-[6.5rem] leading-[0.88]">
                <span className="block text-ink">
                  <HwText text="Levin" flashColor="#D12424" />
                </span>
                <span className="block mt-1 sm:mt-1.5 text-ink">
                  <HwText text="Joeshwa" flashColor="#D12424" />
                </span>
              </h1>
            </div>

            {/* Subheading and Description */}
            <div className="space-y-3 text-ink max-w-xl pt-1">
              <h2 className="font-funnel text-xl sm:text-2xl font-bold text-ink leading-tight">
                I Build Digital Products That Solve Real Problems.
              </h2>
              <p className="font-serif italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                I design and develop modern web applications, reliable backend systems, and AI-powered solutions that help businesses turn complex requirements into practical digital products.
              </p>
            </div>

            {/* Two Rows of Bordered Technical Badges: Group 1 (Core Expertise) & Group 2 (Technologies) */}
            <div className="pt-1 space-y-2.5">
              {/* Group 1 — Core Expertise */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {coreExpertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[6px] text-xs sm:text-[13px] font-medium text-ink border border-rule bg-black/[0.02] dark:bg-white/[0.04] hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    <HwText text={item} flashColor="#D12424" />
                  </span>
                ))}
              </div>

              {/* Group 2 — Technologies */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[6px] text-xs sm:text-[13px] font-medium text-ink border border-rule bg-black/[0.02] dark:bg-white/[0.04] hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    <HwText text={item} flashColor="#D12424" />
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: [Explore My Work] [Let's Work Together] [Resume] */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4 font-space text-xs font-bold uppercase tracking-wider">
              {/* Primary CTA — Explore My Work (Scrolls to Projects section) */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("projects") || document.getElementById("work");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-200 shadow-md font-space text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 shrink-0"
                aria-label="Explore My Work - Scroll to Projects Section"
              >
                <HwText text="EXPLORE MY WORK" baseColor="currentColor" flashColor="#FFFFFF" />
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA — Let's Work Together (Scrolls to Contact section) */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule text-ink hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 shrink-0"
                aria-label="Let's Work Together - Scroll to Contact Section"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Resume Button */}
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-rule text-ink hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 shrink-0"
                aria-label="View Resume & Credentials"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>RESUME</span>
              </Link>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="pt-2 flex items-center gap-6 font-space text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="mailto:levinjoeshwa.dev@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>LEVINJOESHWA.DEV@GMAIL.COM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Silhouette Portrait with Clean Frame and Parallax */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end w-full">
            <motion.div
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] aspect-[4/5] overflow-hidden rounded-2xl select-none border border-rule/60 bg-black/[0.02] dark:bg-white/[0.02]"
              animate={{
                x: mouseOffset.x,
                y: mouseOffset.y,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.8 }}
            >
              {/* Silhouette Hero Portrait Photo */}
              <img
                src="/images/hero-portrait.webp"
                alt="Levin Joeshwa - Full Stack Developer"
                width={1232}
                height={1415}
                className="w-full h-full object-cover object-top block"
                loading="eager"
              />

              {/* Status Badge floating on image */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-canvas/92 dark:bg-[#0A0A0A]/92 backdrop-blur-md border border-rule flex items-center justify-between font-space text-xs select-none shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-bold text-ink whitespace-nowrap">OPEN FOR OPPORTUNITIES</span>
                </div>
                <span className="text-neutral-500 text-[11px] whitespace-nowrap ml-2">TAMIL NADU, INDIA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Smooth Horizontal Running Marquee Ticker */}
      <div className="w-full overflow-hidden border-t border-rule bg-black/[0.02] dark:bg-white/[0.02] py-3.5 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 mx-5 font-space text-xs font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-accent transition-colors cursor-default"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
