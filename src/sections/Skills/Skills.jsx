import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { skillsCategorized } from "../../data/skills";
import { CheckCircle2, Terminal, Code2, Database, Wrench } from "lucide-react";
import { fadeUp } from "../../lib/animations";

const CATEGORY_ICONS = {
  "Frontend Architecture": Code2,
  "Backend & Cloud Services": Terminal,
  "Databases & Storage": Database,
  "AI, Tools & Workflow": Wrench,
};

export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        badge="MASTERY MATRIX"
        title="Technical Competencies."
        subtitle="Organized across architectural domains with emphasis on production-readiness, speed, and real-world execution."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsCategorized.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[cat.category] || Code2;
          return (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card rounded-3xl p-8 border border-surface-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-surface-border flex items-center justify-center text-accent-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skills list cards */}
                <div className="space-y-2.5">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-surface-secondary/50 border border-surface-border flex items-center justify-between hover:border-surface-border-hover transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        <span className="font-mono text-xs sm:text-sm text-white font-medium">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-muted hidden sm:inline">
                          {skill.note}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-accent-violet bg-accent/10 border border-accent/20 font-semibold">
                          {skill.level}
                        </span>
                      </div>
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
