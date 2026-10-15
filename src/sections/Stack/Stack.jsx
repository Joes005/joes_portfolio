import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TechOrbit from "../../components/TechOrbit/TechOrbit";
import { orbitTechs, skillsCategorized } from "../../data/skills";
import { Orbit, LayoutGrid } from "lucide-react";

export default function Stack() {
  const [viewMode, setViewMode] = useState("orbit"); // 'orbit' | 'grid'

  return (
    <section id="stack" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <SectionHeading
          badge="TECH ARCHITECTURE"
          title="Battle-Tested Stack."
          subtitle="An integrated ecosystem of modern frontend frameworks, distributed backends, relational databases, and AI tooling."
          className="mb-0 sm:mb-0"
        />

        {/* View Mode Toggle: Constellation Orbit vs Structured Grid */}
        <div className="inline-flex items-center gap-1 p-1 bg-surface-primary border border-surface-border rounded-full self-start sm:self-end">
          <button
            onClick={() => setViewMode("orbit")}
            data-cursor="link"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "orbit"
                ? "bg-accent text-white font-semibold shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                : "text-muted hover:text-white"
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Constellation</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            data-cursor="link"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "grid"
                ? "bg-accent text-white font-semibold shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                : "text-muted hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Structured Grid</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "orbit" ? (
          <motion.div
            key="orbit-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <TechOrbit />
          </motion.div>
        ) : (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {orbitTechs.map((tech) => (
              <div
                key={tech.id}
                className="glass-card rounded-2xl p-6 border border-surface-border hover:border-accent/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-accent-violet transition-colors">
                      {tech.name}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-muted bg-surface-secondary px-2 py-0.5 rounded border border-surface-border">
                    {tech.category}
                  </span>
                </div>

                <p className="text-slate-400 text-xs font-sans leading-relaxed mb-4">
                  {tech.description}
                </p>

                <div className="pt-3 border-t border-surface-border flex items-center justify-between text-[11px] font-mono">
                  <span className="text-muted">Proficiency:</span>
                  <span className="text-accent-cyan font-medium">{tech.level}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
