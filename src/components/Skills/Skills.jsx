import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Code2,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Server,
  Boxes,
  Terminal,
  Zap,
  Coffee,
  Database,
  Layers,
  Cpu,
  Container,
  Cloud,
  GitBranch,
  Bot,
  CheckCircle2
} from "lucide-react";
import { skillsSection, techStack } from "../../portfolio";
import SkillsIllustration from "./SkillsIllustration";

// Helper icon resolver
function getSkillIcon(iconName) {
  const iconMap = {
    Atom: <Atom className="w-6 h-6" />,
    Code2: <Code2 className="w-6 h-6" />,
    FileCode: <FileCode className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Boxes: <Boxes className="w-6 h-6" />,
    Terminal: <Terminal className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Coffee: <Coffee className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Container: <Container className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    GitBranch: <GitBranch className="w-6 h-6" />,
    Bot: <Bot className="w-6 h-6" />
  };
  return iconMap[iconName] || <Code2 className="w-6 h-6" />;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "AI & Tools"];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsSection.softwareSkills
      : skillsSection.softwareSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {skillsSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            {skillsSection.subTitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid: Illustration & Skills Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Vector Illustration */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <SkillsIllustration />
          </div>

          {/* Right Column: Skills Badges & Bullets */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-indigo-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Software Skills Icons Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.skillName}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all text-center cursor-default"
                >
                  <div
                    className="p-2.5 rounded-lg mb-1.5 transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {skill.skillName}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bullet Points with ⚡ Emoji */}
            <div className="space-y-3.5 pt-2">
              {skillsSection.skills.map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  <span className="text-amber-500 font-bold text-lg select-none">⚡</span>
                  <span>{bullet.replace(/^⚡\s*/, "")}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Proficiency / Tech Stack Section */}
        {techStack.viewSkillBars && (
          <div className="max-w-4xl mx-auto pt-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">
              Proficiency
            </h3>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-10">
              Technical depth across core engineering layers
            </p>

            <div className="space-y-6">
              {techStack.experience.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                    <span>{item.Stack}</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">
                      {item.progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-300/40 dark:border-white/10">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progressPercentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
