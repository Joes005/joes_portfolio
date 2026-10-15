import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Layers,
  FolderGit2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "../Icons/SocialIcons";
import { bigProjects, openSource } from "../../portfolio";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "FinTech & Distributed Systems", "Cloud Systems & SaaS", "AI & Human Capital", "Web Portal & EdTech"];

  const filteredBigProjects =
    selectedCategory === "All"
      ? bigProjects.projects
      : bigProjects.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Open Source
          </h2>
          <p className="mt-3 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            {bigProjects.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* View Switcher Tabs (All, Big Projects, GitHub Open Source) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-white dark:bg-[#151D30] text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>All Work</span>
            </button>
            <button
              onClick={() => setActiveTab("big")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "big"
                  ? "bg-white dark:bg-[#151D30] text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Big Projects ({bigProjects.projects.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("opensource")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "opensource"
                  ? "bg-white dark:bg-[#151D30] text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Open Source ({openSource.repos.length})</span>
            </button>
          </div>
        </div>

        {/* BIG PROJECTS SHOWCASE */}
        {(activeTab === "all" || activeTab === "big") && (
          <div className="mb-20">
            {activeTab === "all" && (
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {bigProjects.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Flagship applications and client production systems
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBigProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                        {project.category}
                      </span>
                      <div
                        className="w-3 h-3 rounded-full shadow-sm"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.projectName}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.projectDesc}
                    </p>

                    {/* Key Metrics Strip */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                              {m.label}
                            </div>
                            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
                    {project.footerLink.map((btn) => (
                      <a
                        key={btn.name}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          btn.name.includes("Demo") || btn.name.includes("Visit")
                            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                            : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
                        }`}
                      >
                        {btn.name.includes("GitHub") ? (
                          <GithubIcon className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        )}
                        <span>{btn.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* OPEN SOURCE GITHUB PROJECTS */}
        {(activeTab === "all" || activeTab === "opensource") && (
          <div>
            {activeTab === "all" && (
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {openSource.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {openSource.subtitle}
                  </p>
                </div>
                <a
                  href={`https://github.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>More Projects on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSource.repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="space-y-3">
                    {/* Repo Title with Folder icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span className="font-mono text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>

                    {/* Repo Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  {/* Footer: Language dot, Stars, Forks */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {/* Language Badge */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    {/* GitHub Stars & Forks */}
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        {repo.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
