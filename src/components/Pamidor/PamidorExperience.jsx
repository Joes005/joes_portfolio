import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Calendar, ChevronDown } from "lucide-react";
import { workExperiences, educationInfo } from "../../portfolio";
import HwText from "./HwText";

export default function PamidorExperience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="experience"
      className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas py-20 lg:py-32 border-b border-rule"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-rule">
          <div>
            <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-2">
              (CAREER TIMELINE &amp; CREDENTIALS)
            </div>
            <h2 className="font-funnel text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              <HwText text="Experience & Education" />
            </h2>
          </div>

          <span className="font-space text-xs text-neutral-500 uppercase tracking-widest">
            PROVEN PRODUCTION TRACK RECORD · 2021 — PRESENT
          </span>
        </div>

        {/* Experience Timeline Rows - Ruled Accordion Style */}
        <div className="pt-8 lg:pt-12">
          <div className="font-space text-xs text-neutral-400 uppercase tracking-widest pb-4">
            PROFESSIONAL ROLES &amp; CLIENT DELIVERIES
          </div>

          <ul className="divide-y divide-black/[0.08] dark:divide-white/[0.1]">
            {workExperiences.experience.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <li
                  key={idx}
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="group py-6 lg:py-8 cursor-pointer transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    {/* Top Row: Number, Role, Date & Chevron */}
                    <div className="flex items-start sm:items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-space text-xs font-mono text-neutral-400">
                          0{idx + 1}
                        </span>

                        <div>
                          <h3
                            className={`font-funnel text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors ${
                              isExpanded ? "text-accent" : "text-ink group-hover:text-accent"
                            }`}
                          >
                            <HwText text={exp.role} active={isExpanded} />
                          </h3>

                          <div className="font-space text-xs font-semibold uppercase tracking-wider text-neutral-500 mt-1">
                            {exp.company} · {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Date & Expand Indicator */}
                      <div className="flex items-center gap-4 shrink-0 font-space text-xs font-bold uppercase">
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-rule text-neutral-700 dark:text-neutral-300">
                          {exp.date}
                        </span>
                        <span className="text-accent text-[11px] px-2.5 py-0.5 rounded-full border border-accent/30 bg-accent/[0.05]">
                          {exp.badge}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-4 space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-light"
                        >
                          <p className="leading-relaxed max-w-4xl">{exp.desc}</p>

                          {exp.descBullets && (
                            <ul className="space-y-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] max-w-4xl">
                              {exp.descBullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                  <span className="text-accent font-bold mt-0.5">›</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {exp.tech && (
                            <div className="flex flex-wrap gap-2 pt-3">
                              {exp.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-3 py-1 rounded-[6px] text-xs font-space font-medium text-neutral-800 dark:text-neutral-200 border border-black/[0.12] dark:border-white/[0.15] bg-canvas"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Education & Academic Honors Section */}
        <div className="pt-16 lg:pt-20">
          <div className="font-space text-xs text-neutral-400 uppercase tracking-widest pb-4">
            ACADEMIC DEGREES &amp; FORMAL FOUNDATIONS
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-black/[0.08] dark:border-white/[0.08] shadow-sm">
            {educationInfo.schools.map((school, sIdx) => (
              <div key={sIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent">
                    <GraduationCap className="w-4 h-4" />
                    <span>{school.duration} · ACADEMIC HONORS</span>
                  </div>

                  <h3 className="font-funnel text-2xl sm:text-3xl font-bold text-ink dark:text-white uppercase tracking-tight">
                    {school.schoolName}
                  </h3>

                  <p className="font-space text-xs text-neutral-500 uppercase tracking-wider">
                    {school.subHeader} · {school.location}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                    {school.desc}
                  </p>

                  {school.descBullets && (
                    <ul className="space-y-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                      {school.descBullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="text-accent font-bold mt-0.5">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
