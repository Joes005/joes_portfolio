import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { aboutTabs } from "../../data/about";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function About() {
  const [activeTabId, setActiveTabId] = useState("who-i-am");
  const activeTab = aboutTabs.find((t) => t.id === activeTabId) || aboutTabs[0];

  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        badge="PERSPECTIVE"
        title="More than just code."
        subtitle="I build digital experiences with the conviction that software should solve real business friction, maintain structural elegance, and delight human senses."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Tab Selectors */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {aboutTabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                data-cursor="link"
                className={`w-full text-left p-5 rounded-2xl transition-all relative overflow-hidden flex items-center justify-between border ${
                  isActive
                    ? "bg-surface-secondary border-accent/40 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                    : "bg-surface-primary/40 border-surface-border hover:bg-surface-secondary/50 hover:border-surface-border-hover text-muted"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive ? "text-accent-cyan" : "text-muted"
                    }`}
                  >
                    {tab.number}
                  </span>
                  <span
                    className={`font-display text-sm md:text-base font-bold tracking-wide transition-colors ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? "text-accent translate-x-1" : "text-neutral-600"
                  }`}
                />

                {/* Active left indicator strip */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-cyan"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Animated Card Content */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-surface-border min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                    {activeTab.label}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 leading-tight">
                  {activeTab.title}
                </h3>

                <div className="space-y-4 mb-8 text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                  {activeTab.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Granular Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-surface-border">
                  {activeTab.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-mono text-[11px] text-muted uppercase tracking-wider mb-1">
                        {stat.label}
                      </span>
                      <span className="font-display font-semibold text-sm sm:text-base text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
