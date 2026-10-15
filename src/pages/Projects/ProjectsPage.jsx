import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ArrowRight, ArrowUpRight, ExternalLink, 
  GitBranch, Star, Terminal, ShieldCheck, 
  CheckCircle2, Clock 
} from "lucide-react";
import { projects } from "../../data/projects";
import { openSource } from "../../portfolio";
import HwText from "../../components/Pamidor/HwText";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "ALL PROJECTS" },
    { id: "fintech", label: "FINTECH & SYSTEMS" },
    { id: "web-apps", label: "WEB PLATFORMS" },
    { id: "ai-ml", label: "AI & MACHINE LEARNING" },
    { id: "in-progress", label: "IN PROGRESS" },
    { id: "open-source", label: "OPEN SOURCE" }
  ];

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "fintech" && (p.category.toLowerCase().includes("fintech") || p.category.toLowerCase().includes("distributed"))) ||
      (selectedCategory === "web-apps" && (p.category.toLowerCase().includes("web") || p.category.toLowerCase().includes("edtech") || p.category.toLowerCase().includes("erp"))) ||
      (selectedCategory === "ai-ml" && (p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("machine learning"))) ||
      (selectedCategory === "in-progress" && p.status.toLowerCase().includes("progress"));

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.problem && p.problem.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-16">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>PROJECTS DIRECTORY — PRODUCTION CASE STUDIES &amp; CODEBASES</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="PROVEN PROJECTS" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="&amp; SYSTEM CASE STUDIES." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            Every project represents solved real-world problems — from reducing-balance loan calculators to high-concurrency examination platforms and clinical Machine Learning predictors.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-rule">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-space text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white shadow-sm"
                      : "bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 hover:text-ink hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-rule"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tech, title, or problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule text-xs font-space text-ink placeholder:text-neutral-400 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Primary Case Studies Grid */}
        {selectedCategory !== "open-source" && (
          <div className="space-y-12">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-rule bg-black/[0.02] dark:bg-white/[0.02]">
                <p className="font-space text-sm text-neutral-500">
                  No projects found matching "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredProjects.map((project, idx) => {
                const isCompleted = project.status === "Completed";
                return (
                  <div
                    key={project.id}
                    className="p-8 sm:p-12 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-8 hover:border-accent/40 transition-colors"
                  >
                    {/* Top Row: Meta, Status & Tags */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rule">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-black/[0.04] dark:bg-white/[0.06] border border-rule text-ink">
                          {project.category}
                        </span>
                        <span className="font-space text-xs text-neutral-500 font-semibold">
                          YEAR {project.year} • {project.client}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div>
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                            <Clock className="w-3.5 h-3.5" />
                            In Progress (Active Dev)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Project Description & Problem Statement */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h2 className="font-funnel text-3xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                            <Link
                              to={`/projects/${project.slug}`}
                              className="hover:text-accent transition-colors"
                            >
                              {project.title}
                            </Link>
                          </h2>
                          <p className="font-space text-xs sm:text-sm font-bold uppercase text-neutral-500 dark:text-neutral-400 mt-1">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Problem Statement Box */}
                        {project.problem && (
                          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border-l-4 border-accent space-y-1">
                            <span className="font-space text-[10px] font-bold uppercase tracking-widest text-accent">
                              THE PROBLEM STATEMENT
                            </span>
                            <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                        )}

                        {/* Project Description */}
                        <div className="space-y-2">
                          <span className="font-space text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            SYSTEM OVERVIEW
                          </span>
                          <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Key Features */}
                        {project.features && (
                          <div className="space-y-2.5">
                            <span className="font-space text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                              KEY FEATURES &amp; CAPABILITIES
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-700 dark:text-neutral-300">
                              {project.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div className="space-y-2 pt-2">
                          <span className="font-space text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            TECHNOLOGIES USED
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 rounded-md text-xs font-space font-medium text-neutral-700 dark:text-neutral-300 bg-canvas border border-rule"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons: Live Demo, GitHub, Detail Page */}
                        <div className="pt-4 flex flex-wrap items-center gap-3 font-space text-xs font-bold uppercase tracking-wider">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:bg-ink transition-colors shadow-sm"
                          >
                            <span>INSPECT CASE STUDY</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {project.links?.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
                            >
                              <span>LIVE DEMO</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {project.links?.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
                            >
                              <GitBranch className="w-3.5 h-3.5" />
                              <span>GITHUB REPO</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Technical Highlights & Metrics Card */}
                      <div className="lg:col-span-5 space-y-6">
                        {/* Highlights Card */}
                        {project.highlights && (
                          <div className="p-6 sm:p-8 rounded-2xl bg-night text-canvas border border-white/[0.08] space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-white/[0.1]">
                              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                                ARCHITECTURAL HIGHLIGHTS
                              </span>
                              <ShieldCheck className="w-4 h-4 text-accent" />
                            </div>
                            <ul className="space-y-2.5 font-sans text-xs text-neutral-300">
                              {project.highlights.map((hl, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-4 rounded-xl border border-rule bg-canvas"
                            >
                              <span className="block font-space text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                                {m.label}
                              </span>
                              <div className="font-funnel text-2xl font-black text-ink">
                                {m.value}
                              </div>
                              <span className="inline-block mt-1 text-[11px] font-space font-bold text-accent">
                                {m.change}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Open Source Repositories Section */}
        {(selectedCategory === "all" || selectedCategory === "open-source") && (
          <div className="space-y-8 pt-8 border-t border-rule">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <div>
                <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                  DEVELOPER UTILITIES
                </span>
                <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight mt-1">
                  Open Source Codebases &amp; Packages
                </h2>
              </div>
              <GitBranch className="w-6 h-6 text-accent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSource.repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-space text-sm font-bold text-ink group-hover:text-accent transition-colors flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-accent" />
                        <span>{repo.name}</span>
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-accent transition-colors" />
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-rule/50 flex items-center justify-between font-space text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3.5 h-3.5 text-neutral-400" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
