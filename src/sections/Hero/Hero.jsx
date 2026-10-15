import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowDown, ArrowUpRight, Terminal, Cpu, Database, 
  ShieldCheck, Activity, CheckCircle2, ChevronRight, Layers, Play
} from "lucide-react";
import { fadeUp, staggerContainer } from "../../lib/animations";

const TERMINAL_LINES = [
  { time: "00:00.012", type: "system", msg: "kernel: initializing production runtime v2.8" },
  { time: "00:00.038", type: "network", msg: "edge_ingress: 12 PoPs connected via Anycast DNS" },
  { time: "00:00.064", type: "db", msg: "mysql_pool: 80 connections verified (InnoDB ACID compliant)" },
  { time: "00:00.091", type: "cache", msg: "redis_cluster: session cache initialized (hit_rate: 99.4%)" },
  { time: "00:00.120", type: "ai", msg: "ai_orchestrator: OpenAI/FastAPI SSE worker pool ready" },
  { time: "00:00.145", type: "success", msg: "STATUS: 100% OPERATIONAL • Zero dropped packets" },
];

export default function Hero({ onOpenCommandPalette }) {
  const [activeTab, setActiveTab] = useState("diagnostic");
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-8 pb-16 px-6 sm:px-8 overflow-hidden bg-[#08090C]">
      {/* Precision Blueprint Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]" />

      {/* Subtle warm amber ambient depth (restrained, non-garish) */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.04] rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Authoritative Staff Engineering Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0E1017]/80 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-zinc-300 font-medium tracking-wide">
            STAFF-LEVEL FULL STACK & DISTRIBUTED SYSTEMS
          </span>
          <span className="text-zinc-600 font-mono text-xs">|</span>
          <span className="font-mono text-xs text-amber-400">TAMIL NADU, IN</span>
        </motion.div>

        {/* Primary Headline */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl"
          >
            Architecting resilient systems, high-throughput APIs &{" "}
            <span className="text-gradient-amber relative inline-block">
              AI-native products.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-zinc-400 font-sans max-w-3xl font-normal mb-8 leading-relaxed text-center"
          >
            I am <strong className="text-white font-medium">Jim Joel</strong>, a Senior Software Engineer specializing in transactional relational architectures, low-latency micro-monoliths, and production AI orchestration. Crafting reliable software from the database lock to the micro-interaction.
          </motion.p>

          {/* Senior Production Telemetry Strip */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 text-left"
          >
            {[
              { label: "P99 LATENCY", val: "< 38ms", note: "FinTech API SLA" },
              { label: "ACCOUNTS MANAGED", val: "5,000+", note: "FINVELS Core" },
              { label: "UPTIME RECORD", val: "99.98%", note: "Zero Ledger Drift" },
              { label: "SYSTEM ARCHITECTURE", val: "ACID + Redis", note: "Row-Level Locking" }
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#0E1017]/90 border border-white/[0.08] hover:border-amber-400/40 transition-all corner-crosshairs"
              >
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-white block">
                  {stat.val}
                </span>
                <span className="font-mono text-[10px] text-amber-400/90 block">
                  {stat.note}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => scrollToSection("architecture")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
            >
              <span>Inspect Architecture Pipeline</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenCommandPalette}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 bg-[#12141E] text-zinc-200 font-mono text-xs flex items-center justify-center gap-2 hover:border-white/20 hover:bg-[#181B28] transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Command Hub</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-zinc-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => scrollToSection("work")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/[0.06] bg-transparent text-zinc-400 font-mono text-xs hover:text-white transition-colors"
            >
              <span>View Case Studies</span>
              <span className="text-zinc-600 ml-1">→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Interactive Live System Terminal Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="w-full max-w-3xl bg-[#0B0D14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-left"
        >
          {/* Terminal Title Bar */}
          <div className="px-4 py-2.5 bg-[#08090C] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="font-mono text-[11px] text-zinc-400 ml-2">
                levin-core-telemetry · session: active
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                EDGE SYNC
              </span>
            </div>
          </div>

          {/* Terminal Logs Output */}
          <div className="p-4 font-mono text-xs text-zinc-300 space-y-1.5 overflow-x-auto max-h-[160px] bg-[#0B0D14]">
            {TERMINAL_LINES.map((line, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-zinc-600 select-none text-[10px] mt-0.5">
                  [{line.time}]
                </span>
                <span
                  className={
                    line.type === "success"
                      ? "text-emerald-400 font-semibold"
                      : line.type === "ai"
                      ? "text-amber-400"
                      : line.type === "db"
                      ? "text-blue-400"
                      : "text-zinc-300"
                  }
                >
                  {line.msg}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Terminal Quick Controls */}
          <div className="px-4 py-2 bg-[#0E1017] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Shortcuts:</span>
              <button
                onClick={() => scrollToSection("architecture")}
                className="hover:text-amber-400 hover:underline cursor-pointer"
              >
                [1] Architecture Rail
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="hover:text-amber-400 hover:underline cursor-pointer"
              >
                [2] Case Studies
              </button>
              <button
                onClick={() => scrollToSection("benchmarks")}
                className="hover:text-amber-400 hover:underline cursor-pointer"
              >
                [3] Benchmark Lab
              </button>
            </div>

            <div className="text-zinc-500 text-[10px]">
              Press <kbd className="text-amber-400">⌘K</kbd> anywhere
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={() => scrollToSection("architecture")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors cursor-pointer select-none"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">
          EXPLORE SYSTEMS
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
