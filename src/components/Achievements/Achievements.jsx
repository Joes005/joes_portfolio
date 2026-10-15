import React from "react";
import { motion } from "framer-motion";
import { Award, Brain, Database, Trophy, ExternalLink, CheckCircle } from "lucide-react";
import { achievementSection } from "../../portfolio";

function getAchievementIcon(iconName) {
  switch (iconName) {
    case "Brain":
      return <Brain className="w-7 h-7 text-purple-500" />;
    case "Database":
      return <Database className="w-7 h-7 text-blue-500" />;
    case "Trophy":
      return <Trophy className="w-7 h-7 text-amber-500" />;
    case "Award":
    default:
      return <Award className="w-7 h-7 text-indigo-500" />;
  }
}

export default function Achievements() {
  if (!achievementSection.display) return null;

  return (
    <section id="achievements" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {achievementSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            {achievementSection.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementSection.achievementsCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                    {getAchievementIcon(card.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {card.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    <span>{card.issuer}</span>
                    <span>•</span>
                    <span>{card.date}</span>
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* Footer Links */}
              {card.footerLink && card.footerLink.length > 0 && (
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                  {card.footerLink.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
