import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ArrowRight, CheckCircle2, 
  Terminal, Layers, Database, Sparkles, Wrench, 
  Code2, Check 
} from "lucide-react";
import { skillsCategorized } from "../../data/skills";
import HwText from "../../components/Pamidor/HwText";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons = {
    frontend: Code2,
    backend: Layers,
    database: Database,
    "ai-ds": Sparkles,
    tools: Wrench
  };

  const categories = [
    { id: "all", label: "ALL DOMAINS" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "database", label: "DATABASE" },
    { id: "ai-ds", label: "AI & DATA SCIENCE" },
    { id: "tools", label: "TOOLS & WORKFLOW" }
  ];

  const filteredCategories = skillsCategorized
    .map((cat) => {
      // If category filter is active and doesn't match
      if (selectedCategory !== "all" && cat.id !== selectedCategory) {
        return null;
      }

      // Filter items by search query
      const matchingItems = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.level.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingItems.length === 0 && searchQuery.trim() !== "") {
        return null;
      }

      return {
        ...cat,
        items: matchingItems
      };
    })
    .filter(Boolean);

  const totalSkillsCount = skillsCategorized.reduce(
    (acc, curr) => acc + curr.items.length,
    0
  );

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-16">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>SKILLS &amp; TECHNOLOGIES — CAPABILITIES &amp; STACKS</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="TECHNICAL SKILLS" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="&amp; ENGINEERING STACKS." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            A comprehensive breakdown of technical capabilities across Frontend, Backend, Relational Databases, AI &amp; Data Science, and modern development workflows.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap gap-4 sm:gap-8 font-space text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <div>
              <span className="text-accent font-bold">5</span> DOMAINS
            </div>
            <div>•</div>
            <div>
              <span className="text-accent font-bold">{totalSkillsCount}</span> VERIFIED TECHNOLOGIES
            </div>
            <div>•</div>
            <div>
              <span className="text-emerald-500 font-bold">100%</span> HANDS-ON TESTED
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
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

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter skills by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule text-xs font-space text-ink placeholder:text-neutral-400 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-rule bg-black/[0.02] dark:bg-white/[0.02]">
              <p className="font-space text-sm text-neutral-500">
                No technologies found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((cat, idx) => {
              const Icon = categoryIcons[cat.id] || Terminal;
              return (
                <div
                  key={cat.id}
                  className="p-8 sm:p-10 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-6 hover:border-accent/40 transition-colors"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rule">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-space text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            DOMAIN 0{idx + 1}
                          </span>
                        </div>
                        <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink">
                          {cat.category}
                        </h2>
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-space text-xs">
                      <span className="text-accent font-bold uppercase tracking-wider">
                        {cat.tagline}
                      </span>
                      <p className="text-neutral-500 text-[11px] mt-0.5">
                        {cat.items.length} Technologies Listed
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-5 rounded-2xl bg-canvas border border-rule hover:border-accent/60 hover:shadow-md transition-all group flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-funnel text-lg font-bold text-ink group-hover:text-accent transition-colors">
                              {item.name}
                            </h3>
                            <span className="px-2 py-0.5 rounded text-[10px] font-space font-semibold uppercase tracking-wider bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 border border-rule">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {item.note}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-rule/50 flex items-center justify-between text-[11px] font-space text-neutral-400">
                          <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                            <Check className="w-3 h-3" />
                            Production Ready
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Application in Projects Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-night text-canvas border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
              APPLIED ENGINEERING
            </span>
            <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-white">
              See How These Skills Are Applied in Production Projects
            </h3>
            <p className="font-serif italic text-neutral-300 max-w-xl">
              From reducing-balance loan calculators to real-time catering shift dispatchers and clinical ML prediction models.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-accent text-white hover:bg-white hover:text-night font-space text-xs font-bold uppercase tracking-wider transition-colors"
            >
              EXPLORE PROJECTS
            </Link>
            <Link
              to="/resume"
              className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 font-space text-xs font-bold uppercase tracking-wider transition-colors"
            >
              RESUME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
