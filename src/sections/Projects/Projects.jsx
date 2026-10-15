import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, Copy, 
  Layers, Code2, Activity, ShieldAlert, Cpu
} from "lucide-react";
import { projects } from "../../data/projects";
import { copyToClipboard } from "../../lib/utils";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("flow"); // 'flow' | 'schema' | 'benchmarks'
  const [copiedSchema, setCopiedSchema] = useState(false);

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleCopySchema = () => {
    if (currentProject.schemaSnippet) {
      copyToClipboard(currentProject.schemaSnippet);
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2000);
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <Layers className="w-3.5 h-3.5" />
            // 02 — PRODUCTION CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered Systems & Case Studies.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Real enterprise platforms and AI copilot systems evaluated through architectural constraints, relational data schemas, and verified production benchmarks.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#0E1017] border border-white/10 p-1.5 rounded-2xl self-start md:self-end">
          {projects.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setActiveWorkbenchTab("flow");
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Studio Workspace */}
      <div className="bg-[#0B0D14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Problem, Metrics & Architectural Trade-offs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {currentProject.category}
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="font-mono text-xs text-zinc-500">
                  {currentProject.year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400 mb-4">
                {currentProject.tagline}
              </p>

              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Production Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
              {currentProject.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#0E1017] border border-white/[0.06]"
                >
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                    {m.label}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-lg font-bold text-white">
                      {m.value}
                    </span>
                    {m.change && (
                      <span className="text-[10px] font-mono text-emerald-400">
                        {m.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Senior Architectural Trade-Offs (Why X over Y) */}
            {currentProject.tradeoffs && (
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  Architectural Trade-Offs
                </span>
                {currentProject.tradeoffs.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0E1017]/80 border border-white/[0.06] space-y-1.5"
                  >
                    <p className="text-xs font-mono font-semibold text-white">
                      Q: {t.question}
                    </p>
                    <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                      {t.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {currentProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Engineering Workbench Tabs */}
          <div className="lg:col-span-7 bg-[#08090C] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[500px]">
            {/* Workbench Navigation Header */}
            <div className="px-4 py-3 bg-[#0E1017] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="font-mono text-xs font-semibold text-white">
                  ENGINEERING WORKBENCH
                </span>
              </div>

              {/* View Tabs */}
              <div className="flex items-center gap-1 bg-[#08090C] border border-white/[0.08] p-1 rounded-lg">
                {[
                  { id: "flow", label: "01 System Flow", icon: Cpu },
                  { id: "schema", label: "02 Schema & DDL", icon: Code2 },
                  { id: "benchmarks", label: "03 Benchmarks", icon: Activity },
                ].map((tab) => {
                  const isActive = activeWorkbenchTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveWorkbenchTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                        isActive
                          ? "bg-amber-400 text-black font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Workbench Tab Content Area */}
            <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {/* TAB 1: System Flow Diagram */}
                {activeWorkbenchTab === "flow" && (
                  <motion.div
                    key="tab-flow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.06]">
                      <span>EXECUTION CHAIN</span>
                      <span>INSPECTION VIEW</span>
                    </div>

                    <div className="space-y-3">
                      {currentProject.architectureFlow?.map((step) => (
                        <div
                          key={step.step}
                          className="flex items-start gap-4 p-3.5 rounded-xl bg-[#0E1017] border border-white/[0.06] hover:border-amber-400/30 transition-all"
                        >
                          <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                            {step.step}
                          </span>
                          <div>
                            <h4 className="text-sm font-mono font-bold text-white mb-0.5">
                              {step.name}
                            </h4>
                            <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: Schema & DDL */}
                {activeWorkbenchTab === "schema" && (
                  <motion.div
                    key="tab-schema"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.06]">
                      <span>RELATIONAL SCHEMA / DATA CONTRACT</span>
                      <button
                        onClick={handleCopySchema}
                        className="flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                      >
                        {copiedSchema ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Schema</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-[#050608] border border-white/[0.08] text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed max-h-[360px]">
                      <code>{currentProject.schemaSnippet}</code>
                    </pre>
                  </motion.div>
                )}

                {/* TAB 3: Production Benchmarks */}
                {activeWorkbenchTab === "benchmarks" && (
                  <motion.div
                    key="tab-benchmarks"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.06]">
                      <span>BEFORE VS AFTER OPTIMIZATION</span>
                      <span>PRODUCTION METRICS</span>
                    </div>

                    {currentProject.benchmarkComparison && (
                      <div className="space-y-4">
                        {Object.values(currentProject.benchmarkComparison).map((b, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-[#0E1017] border border-white/[0.06] space-y-2"
                          >
                            <span className="text-xs font-mono font-semibold text-zinc-300 block">
                              {b.label}
                            </span>
                            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                              <div className="p-2.5 rounded-lg bg-red-500/5 border border-red-500/20 text-red-400">
                                <span className="text-[10px] text-zinc-500 block">UNOPTIMIZED</span>
                                <span className="font-semibold">{b.before}</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <span className="text-[10px] text-zinc-500 block">ENGINEERED</span>
                                <span className="font-semibold">{b.after}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Workbench Footer Status */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Status: {currentProject.previewDetails?.status || "Production Live"}
                </span>
                <span className="text-zinc-400">
                  {currentProject.previewDetails?.engine || currentProject.previewDetails?.framework || "Full Stack Architecture"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
