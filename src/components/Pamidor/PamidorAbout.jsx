import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileText, CheckCircle2, ShieldCheck, Zap, Database, Cpu } from "lucide-react";
import { GithubIcon } from "../Icons/SocialIcons";
import HwText from "./HwText";
import { skillsSection } from "../../portfolio";

export default function PamidorAbout() {
  const telemetryStats = [
    {
      value: "38ms",
      label: "P99 LATENCY",
      detail: "Sub-40ms execution on indexed MySQL InnoDB transactions with Redis caching",
      icon: Zap
    },
    {
      value: "0.00%",
      label: "LEDGER DRIFT",
      detail: "Row-level locks (SELECT ... FOR UPDATE) across 5,000+ financial loan accounts",
      icon: ShieldCheck
    },
    {
      value: "10,000+",
      label: "VECTORS SCORED",
      detail: "Semantic resume and candidate competency scoring via FastAPI & RAG embeddings",
      icon: Cpu
    },
    {
      value: "99.9%",
      label: "UPTIME RECORD",
      detail: "High-reliability deployments supporting multi-branch daily production workflows",
      icon: Database
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-[100svh] bg-canvas flex flex-col justify-center py-20 lg:py-32 border-b border-rule"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Eyebrow Label */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-rule mb-10">
          <div className="font-space text-xs font-bold tracking-widest uppercase text-accent">
            (ABOUT · THE ENGINEER &amp; CRAFT)
          </div>
          <div className="font-space text-xs font-semibold text-neutral-500 uppercase tracking-widest hidden sm:block">
            PHILOSOPHY &amp; TELEMETRY
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-funnel font-black text-ink text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            <HwText text="Architecting systems where latency is low and data consistency is absolute." />
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-serif italic text-2xl sm:text-3xl text-neutral-800 dark:text-neutral-200 leading-snug">
              Somewhere between rigorous backend structure and intuitive human interactions.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
              <p>
                I am <span className="text-ink dark:text-white font-medium">Levin</span>, a full-stack software engineer and AI builder based in Tamil Nadu, India. I specialize in bridging complex transactional requirements with refined, responsive user interfaces that never lag.
              </p>
              <p>
                My engineering ethos is grounded in zero-compromise systems design: strict ACID row-locking on InnoDB, sub-40ms P99 queries via normalized schemas, and predictable state synchronization with zero ledger drift.
              </p>
              <p>
                Beyond production APIs in Node.js and Laravel, I orchestrate autonomous LLM tool-calling routers with Python FastAPI, build client-side Web Worker parsers that offload heavy computations, and craft React 19 interfaces that render with 60fps fluidity.
              </p>
            </div>

            {/* CTAs & Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-space text-xs font-bold uppercase tracking-wider">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white transition-all shadow-md"
              >
                <HwText text="INITIATE INQUIRY" baseColor="currentColor" flashColor="#FFFFFF" />
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rule text-neutral-700 dark:text-neutral-300 hover:border-accent hover:text-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB REPOSITORIES</span>
              </a>
            </div>

            {/* Availability Pill */}
            <div className="pt-4 flex items-center gap-3 font-space text-xs text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select engineering contracts &amp; high-impact teams</span>
            </div>
          </div>

          {/* Right Column: 4 Luxury Telemetry Metric Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-space text-xs text-neutral-400 uppercase tracking-widest pb-1">
              ENGINEERING BENCHMARKS &amp; TELEMETRY
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {telemetryStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-black/[0.08] dark:border-white/[0.08] hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-sm space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-space text-[11px] font-bold tracking-wider text-accent uppercase">
                        {stat.label}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-accent transition-colors" />
                    </div>

                    <div className="font-funnel text-3xl sm:text-4xl font-black text-ink dark:text-white tracking-tight">
                      {stat.value}
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Core Tech Stack Badges */}
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-rule space-y-3 mt-4">
              <div className="font-space text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                ACTIVE PRODUCTION STACKS
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 19",
                  "Node.js",
                  "Laravel",
                  "Python FastAPI",
                  "MySQL 8.0 (InnoDB)",
                  "Redis",
                  "Vector RAG",
                  "Tailwind CSS",
                  "Docker",
                  "TypeScript"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-[6px] text-xs font-space font-medium text-neutral-800 dark:text-neutral-200 border border-black/[0.12] dark:border-white/[0.15] bg-canvas hover:border-accent hover:text-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
