import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, ChevronDown, ChevronUp, FileCode, GitPullRequest } from "lucide-react";
import { adrRecords } from "../../data/adrs";

export default function ADRSection() {
  const [expandedId, setExpandedId] = useState(adrRecords[0].id);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="adrs" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <BookOpen className="w-3.5 h-3.5" />
            // 04 — ARCHITECTURAL GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Architectural Decision Records.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Senior software engineering is defined by reasoning through trade-offs. These ADRs document real decisions on transactional boundaries, streaming protocols, and edge vector caching.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 bg-[#0E1017] px-3.5 py-1.5 rounded-full border border-white/10 self-start md:self-end">
          <GitPullRequest className="w-3.5 h-3.5 text-amber-400" />
          <span>4 Decisions Ratified</span>
        </div>
      </div>

      {/* ADR Records Accordion List */}
      <div className="space-y-4">
        {adrRecords.map((adr) => {
          const isExpanded = expandedId === adr.id;

          return (
            <div
              key={adr.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? "bg-[#0E1017] border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.1)]"
                  : "bg-[#0B0D14] border-white/[0.08] hover:border-white/20"
              }`}
            >
              {/* Header Bar */}
              <button
                onClick={() => toggleExpand(adr.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                      {adr.id}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                      {adr.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white truncate">
                    {adr.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="font-mono text-xs text-zinc-500 hidden md:inline">
                    {adr.system} • {adr.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-white/[0.06] bg-[#08090C]/60"
                  >
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Context */}
                        <div className="space-y-2">
                          <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
                            CONTEXT &amp; PROBLEM
                          </span>
                          <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed">
                            {adr.context}
                          </p>
                        </div>

                        {/* Decision */}
                        <div className="space-y-2">
                          <span className="font-mono text-xs text-amber-400 uppercase tracking-wider block">
                            RATIFIED DECISION
                          </span>
                          <p className="text-xs sm:text-sm font-sans text-white leading-relaxed">
                            {adr.decision}
                          </p>
                        </div>

                        {/* Consequences */}
                        <div className="space-y-2">
                          <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block">
                            OBSERVED CONSEQUENCES
                          </span>
                          <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed">
                            {adr.consequences}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                        <span className="font-mono text-[11px] text-zinc-500 mr-2">
                          Architectural Tags:
                        </span>
                        {adr.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
