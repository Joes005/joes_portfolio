import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Eye, Flame, CheckCircle2 } from "lucide-react";
import { engineeringPrinciples } from "../../data/philosophy";

const PRINCIPLE_ICONS = [Shield, Terminal, Eye, Flame];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <Terminal className="w-3.5 h-3.5" />
            // 05 — ENGINEERING MENTAL MODELS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineering Philosophy.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            The principles that guide my technical decisions. Software systems outlive trends; simplicity, telemetry, and resilience endure.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 bg-[#0E1017] px-4 py-2 rounded-xl border border-white/10 self-start md:self-end">
          Core Tenet: <span className="text-amber-400">Form Follows Utility</span>
        </div>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {engineeringPrinciples.map((p, idx) => {
          const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];

          return (
            <div
              key={p.number}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B0D14] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between corner-crosshairs group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#141724] border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {p.tag}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {p.title}
                </h3>

                <blockquote className="border-l-2 border-amber-400/60 pl-3.5 italic font-sans text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                  "{p.quote}"
                </blockquote>

                <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {p.body}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Benchmark Goal:</span>
                <span className="text-emerald-400 font-semibold">{p.metrics}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
