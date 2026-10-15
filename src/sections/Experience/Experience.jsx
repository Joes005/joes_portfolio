import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import { CheckCircle2, GitBranch } from "lucide-react";
import { fadeUp } from "../../lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <GitBranch className="w-3.5 h-3.5" />
            // 06 — SYSTEM EVOLUTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineering Career Timeline.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            The progression from algorithmic foundations in Artificial Intelligence & Data Science to shipping high-availability financial systems and distributed AI backends.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 bg-[#0E1017] px-4 py-2 rounded-xl border border-white/10 self-start md:self-end">
          <span>Active Practice: </span>
          <span className="text-emerald-400 font-semibold">Full Stack &amp; AI Engineer</span>
        </div>
      </div>

      <div className="relative border-l border-white/[0.1] md:ml-8 pl-6 md:pl-10 space-y-12">
        {/* Glowing vertical line accent */}
        <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-amber-400 via-amber-500/40 to-transparent pointer-events-none" />

        {experiences.map((exp, idx) => {
          const isCurrent = exp.year === "NOW";

          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isCurrent
                    ? "border-emerald-400 bg-[#08090C] shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                    : "border-amber-400/60 bg-[#141722] group-hover:border-amber-400"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isCurrent ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                  }`}
                />
              </div>

              {/* Milestone Card */}
              <div className="bg-[#0B0D14] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/40 transition-all corner-crosshairs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                        isCurrent
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 uppercase">
                      {exp.badge}
                    </span>
                  </div>

                  {isCurrent && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Engagement
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-mono text-amber-400/90 mb-4">
                  {exp.role}
                </h4>

                <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs font-mono text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
