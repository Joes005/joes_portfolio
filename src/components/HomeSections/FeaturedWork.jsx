import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, ArrowRight, ExternalLink, Activity, 
  ShieldCheck, Database, Layers, CheckCircle2, Terminal 
} from "lucide-react";
import { projects } from "../../data/projects";
import HwText from "../Pamidor/HwText";

export default function FeaturedWork() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Take the 4 primary flagship projects
  const featured = projects.slice(0, 4);
  const current = featured[selectedIdx] || featured[0];

  return (
    <section id="work" className="w-full bg-night text-canvas py-20 lg:py-28 border-b border-white/[0.08] relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.12]">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>FEATURED WORK &amp; CASE STUDIES</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              <HwText text="FLAGSHIP SYSTEMS" baseColor="#FFFFFF" flashColor="#D12424" />
              <br />
              <span className="text-neutral-400">
                <HwText text="PROVEN IN PRODUCTION." baseColor="#9CA3AF" flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-serif italic text-base sm:text-lg text-neutral-300 max-w-md font-light">
              Real code, real architectural trade-offs, and verifiable numbers. Click any project to inspect the case study.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
            >
              <span>BROWSE ALL PROJECTS &amp; OPEN SOURCE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Selector Row / Tabs */}
        <div className="pt-8 pb-4 flex flex-wrap gap-2 border-b border-white/[0.12]">
          {featured.map((p, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 rounded-lg font-space text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-white shadow-md"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <span className="text-[10px] opacity-75">0{idx + 1}</span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Highlight Viewport */}
        <div className="pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white/[0.02] border border-white/[0.1] p-6 sm:p-10 lg:p-12 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Specs & Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-space font-bold tracking-wider uppercase bg-accent/20 text-accent border border-accent/30">
                      {current.category}
                    </span>
                    <span className="text-xs font-space text-neutral-400">
                      YEAR {current.year} · {current.client}
                    </span>
                  </div>

                  <h3 className="font-funnel text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    {current.title}
                  </h3>

                  <p className="font-space text-sm font-semibold text-neutral-300">
                    {current.tagline}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Problem & Solution Mini Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="font-space text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">
                        THE CHALLENGE
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="font-space text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                        THE ARCHITECTURE
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {current.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {current.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-space text-neutral-300 bg-white/[0.05] border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/projects/${current.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-md group"
                    >
                      <span>INSPECT FULL CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.15] text-white hover:border-accent hover:text-accent font-space text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>ALL WORK DIRECTORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Telemetry & Architecture Benchmark */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-black/50 p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
                      <span className="font-space text-xs font-bold uppercase tracking-widest text-neutral-400">
                        PRODUCTION TELEMETRY
                      </span>
                      <span className="flex items-center gap-1.5 font-space text-[11px] text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        AUDITED
                      </span>
                    </div>

                    {/* Metric Rows */}
                    <div className="space-y-4 pt-6">
                      {current.metrics.map((m) => (
                        <div key={m.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <div className="flex items-center justify-between">
                            <span className="font-space text-xs font-semibold text-neutral-400">
                              {m.label}
                            </span>
                            <span className="font-space text-[11px] text-accent font-bold">
                              {m.change}
                            </span>
                          </div>
                          <div className="font-funnel text-2xl font-black text-white mt-1">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Snippet Preview */}
                  <div className="pt-4 border-t border-white/[0.1]">
                    <div className="flex items-center justify-between font-space text-[11px] text-neutral-400 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-accent" />
                        PRODUCTION SPEC
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">READ-ONLY</span>
                    </div>
                    <pre className="font-mono text-[11px] text-neutral-300 p-3 rounded-lg bg-black/60 border border-white/[0.05] overflow-x-auto leading-relaxed max-h-36">
                      <code>{current.schemaSnippet?.split("\n").slice(0, 6).join("\n") || "-- Verified Schema Model"}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
