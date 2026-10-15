import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Terminal, ArrowRight, Shield, Database, 
  Activity, Zap, Server, ChevronRight, Layers, Radio
} from "lucide-react";
import { architecturePipeline } from "../../data/architecture";

export default function ArchitecturePipeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStage = architecturePipeline[activeStepIndex];

  return (
    <section id="architecture" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            // 01 — DISTRIBUTED SYSTEM FLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Interactive Architecture Pipeline.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            A production software system is an unbroken chain of custody. Scrub through the multi-tier pipeline to inspect how edge ingress, reactive frontends, asynchronous AI workers, and transactional storage interact with sub-50ms latency.
          </p>
        </div>

        {/* Live Active Protocol Badge */}
        <div className="flex items-center gap-2 bg-[#0E1017] border border-white/10 px-4 py-2 rounded-xl font-mono text-xs text-zinc-300">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>Stage {activeStage.step}/04:</span>
          <span className="text-amber-400 font-semibold">{activeStage.layer}</span>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Track */}
      <div className="w-full bg-[#0B0D14] border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 overflow-hidden relative">
        {/* Animated Data Bus Line */}
        <div className="relative mb-6 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
            <span>PACKET INGRESS BUS</span>
            <span>END-TO-END FLOW</span>
          </div>

          {/* Stepper Rail */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 relative z-10">
            {architecturePipeline.map((stage, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? "bg-[#141724] border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                      : "bg-[#0E1017]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#121520]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-amber-400" : "text-zinc-500"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      {stage.latency}
                    </span>
                  </div>

                  <p
                    className={`font-sans text-xs font-bold truncate ${
                      isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {stage.layer}
                  </p>

                  {/* Active bottom line indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePipelineIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Architecture Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2"
          >
            {/* Left 7 Columns: Stage Specifications & Architectural Reasoning */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-[11px] font-semibold">
                    PROTOCOL: {activeStage.protocol}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">
                    Target Latency: {activeStage.latency}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                  {activeStage.title}
                </h3>

                <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                {activeStage.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#0E1017] border border-white/[0.06] text-xs font-mono"
                  >
                    <span className="text-zinc-500 block mb-0.5">{spec.key}</span>
                    <span className="text-zinc-200 font-semibold">{spec.val}</span>
                  </div>
                ))}
              </div>

              {/* Stack Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-xs text-zinc-500 mr-2">Core Tech:</span>
                {activeStage.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Live Layer Terminal Output */}
            <div className="lg:col-span-5 bg-[#08090C] border border-white/10 rounded-xl overflow-hidden shadow-xl">
              <div className="px-4 py-2.5 bg-[#0E1017] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-zinc-400">
                    node://layer-{activeStage.step}.log
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-600">INSPECT</span>
              </div>

              <div className="p-4 font-mono text-xs text-zinc-300 space-y-2 min-h-[160px] bg-[#08090C]">
                <div className="text-zinc-600 text-[10px]">
                  // Live event telemetry captured for {activeStage.layer}
                </div>
                {activeStage.terminalLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 select-none">&gt;</span>
                    <span className="text-zinc-300 leading-relaxed">{log}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 bg-[#0E1017] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Packet Status: Verified</span>
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % architecturePipeline.length)
                  }
                  className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
