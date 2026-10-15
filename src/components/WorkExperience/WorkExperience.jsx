import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { workExperiences } from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experiences
          </h2>
          <p className="mt-3 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            Professional Engineering & Production Milestones
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline / Experience Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperiences.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-t-2xl" />

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Company / Work Icon */}
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 shrink-0">
                  <Briefcase className="w-8 h-8" />
                </div>

                {/* Details */}
                <div className="space-y-4 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {exp.badge && (
                      <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      {exp.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* Highlight Bullets */}
                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      {exp.descBullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack pills */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
