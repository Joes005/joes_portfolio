import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { educationInfo } from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            Basic Qualification and Academic Background
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationInfo.schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl" />

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Degree Icon Badge */}
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>

                {/* Details */}
                <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {school.schoolName}
                    </h3>
                    <p className="text-base font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {school.subHeader}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      {school.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      {school.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      Honors Degree
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {school.desc}
                  </p>

                  {/* Highlight Bullets */}
                  {school.descBullets && school.descBullets.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      {school.descBullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
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
