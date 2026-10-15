import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orbitTechs } from "../../data/skills";
import { Sparkles, Terminal, Cpu, Database, Code, Globe, Server, Layers, GitBranch, Coffee, Boxes } from "lucide-react";

export default function TechOrbit() {
  const [selectedTech, setSelectedTech] = useState(orbitTechs[0]);
  const [hoveredTech, setHoveredTech] = useState(null);

  const active = hoveredTech || selectedTech;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
      {/* Visual Orbit Canvas */}
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
        {/* Concentric Orbit Rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.07] animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-12 rounded-full border border-white/[0.08]" />
        <div className="absolute inset-28 rounded-full border border-dashed border-white/[0.07]" />

        {/* Center Node: JIM */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-[#12131C] to-[#1E202E] border-2 border-accent/60 shadow-[0_0_50px_rgba(99,102,241,0.4)] flex flex-col items-center justify-center cursor-default"
        >
          <span className="font-display font-black text-xl text-white tracking-widest">
            JIM
          </span>
          <span className="font-mono text-[9px] text-accent-cyan uppercase tracking-wider">
            CORE
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
        </motion.div>

        {/* Orbiting Technology Nodes */}
        {orbitTechs.map((tech, index) => {
          const total = orbitTechs.length;
          const angle = (index / total) * 2 * Math.PI;
          // Radius varies slightly for constellation depth
          const radius = index % 2 === 0 ? 190 : 135;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const isHovered = active?.id === tech.id;

          return (
            <motion.button
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              data-cursor="link"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 flex items-center gap-2 ${
                isHovered
                  ? "bg-surface-secondary border-accent scale-110 shadow-[0_0_25px_rgba(99,102,241,0.5)] z-30"
                  : "bg-surface-primary/90 border-surface-border hover:border-surface-border-hover scale-100"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="font-mono text-xs font-semibold text-white whitespace-nowrap">
                {tech.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Supporting Interactive Inspection Panel */}
      <div className="w-full lg:max-w-md">
        <div className="glass-card rounded-3xl p-8 border border-surface-border relative overflow-hidden min-h-[280px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative z-10"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  {active.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-surface-border bg-surface-secondary text-slate-300">
                  {active.level}
                </span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-3 flex items-center gap-3">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: active.color }}
                />
                {active.name}
              </h3>

              <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6">
                {active.description}
              </p>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-muted">
                <span>CONSTELLATION FOCUS</span>
                <span className="text-white font-medium">Click / hover any node</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
