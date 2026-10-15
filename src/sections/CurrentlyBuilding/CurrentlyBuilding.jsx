import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Activity, ArrowUpRight, Flame } from "lucide-react";
import { fadeUp } from "../../lib/animations";

export default function CurrentlyBuilding() {
  return (
    <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-60px" }}
        className="glass-card rounded-3xl p-8 sm:p-12 border border-surface-border relative overflow-hidden bg-gradient-to-r from-surface-primary via-surface-secondary to-surface-primary"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Current Sprint Status */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-semibold">
                LABS & ACTIVE SPRINT
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-3 tracking-tight">
              AI-Powered SaaS Products
            </h3>

            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Currently architecting an autonomous business intelligence and workflow copilot utilizing streaming OpenAI/Claude APIs, vector embeddings, and real-time state synchronization.
            </p>

            {/* Progress Bar Widget */}
            <div className="max-w-md bg-surface-primary/80 border border-surface-border p-4 rounded-2xl">
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-400">SPRINT VELOCITY</span>
                <span className="text-accent-cyan font-bold">82% COMPLETED</span>
              </div>
              <div className="w-full h-2 bg-surface-tertiary rounded-full overflow-hidden border border-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent via-accent-violet to-accent-cyan"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-muted mt-2">
                <span>Phase: Model Guardrails & RAG</span>
                <span className="text-emerald-400">On Track</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exploration Tags & Live Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-8 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-3">
                CURRENTLY RESEARCHING & EXPLORING:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Engineering",
                  "Cloud Scale & Docker",
                  "SaaS Architecture",
                  "Multi-Tenant Schemas",
                  "Autonomous Tool Agents",
                  "Vector Databases"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-200 bg-surface-secondary border border-surface-border hover:border-accent/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 font-medium">
                  Available for selected client projects
                </span>
              </div>
              <a
                href="#contact"
                className="text-xs font-mono text-white hover:text-accent-cyan underline underline-offset-4"
              >
                Inquire →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
