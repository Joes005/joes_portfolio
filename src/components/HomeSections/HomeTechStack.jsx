import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Server, Database, Cloud, Bot, Layers, 
  Cpu, Zap, Sparkles, CheckCircle2, ArrowRight 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function HomeTechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "ALL TECHNOLOGIES" },
    { id: "frontend", label: "FRONTEND & UI" },
    { id: "backend", label: "BACKEND & APIS" },
    { id: "database", label: "DATABASES & CACHE" },
    { id: "ai-cloud", label: "AI & CLOUD DEVOPS" }
  ];

  const technologies = [
    {
      name: "React 19",
      category: "frontend",
      categoryLabel: "Frontend",
      level: 94,
      tag: "Concurrent UI & Hooks",
      desc: "Optimistic mutations, client state management, lightweight bundling, and accessible component architectures.",
      color: "#06B6D4"
    },
    {
      name: "JavaScript ESNext",
      category: "frontend",
      categoryLabel: "Frontend",
      level: 95,
      tag: "Web Workers & Async",
      desc: "Offloading intensive CPU tasks to background Web Workers, strict event loop performance, and zero main-thread block.",
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      category: "frontend",
      categoryLabel: "Frontend",
      level: 90,
      tag: "Strict Type Safety",
      desc: "Compile-time contract enforcement, generic abstractions, and end-to-end type safety from DB schemas to UI props.",
      color: "#3178C6"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      categoryLabel: "Frontend",
      level: 96,
      tag: "Design Systems & HSL",
      desc: "Tokenized color systems, dark/light theme switching without flash, responsive fluid scales, and micro-interactions.",
      color: "#38BDF8"
    },
    {
      name: "Node.js & Express",
      category: "backend",
      categoryLabel: "Backend",
      level: 90,
      tag: "REST Microservices",
      desc: "High-throughput asynchronous API endpoints, robust middleware pipelines, JWT auth, and rate-limiting guards.",
      color: "#22C55E"
    },
    {
      name: "Python FastAPI",
      category: "backend",
      categoryLabel: "Backend",
      level: 88,
      tag: "ASGI & SSE Streams",
      desc: "High-performance async APIs, native Pydantic v2 serialization, Server-Sent Events (SSE), and data pipelines.",
      color: "#EAB308"
    },
    {
      name: "Laravel 10 / 11",
      category: "backend",
      categoryLabel: "Backend",
      level: 87,
      tag: "Multi-Tenant Architecture",
      desc: "Enterprise PHP development, queued background workers, schema migrations, and secure transactional operations.",
      color: "#FF2D20"
    },
    {
      name: "MySQL 8.0 (InnoDB)",
      category: "database",
      categoryLabel: "Database",
      level: 92,
      tag: "ACID & Row Locks",
      desc: "Strict foreign key constraints, composite index profiling, SELECT ... FOR UPDATE locking, and zero balance drift.",
      color: "#3B82F6"
    },
    {
      name: "Redis",
      category: "database",
      categoryLabel: "Database",
      level: 88,
      tag: "In-Memory Cache & Streams",
      desc: "Sub-millisecond cache-aside layers, token bucket rate limiters, session storage, and distributed pub/sub queues.",
      color: "#DC2626"
    },
    {
      name: "AI & Vector RAG",
      category: "ai-cloud",
      categoryLabel: "AI & Cloud",
      level: 86,
      tag: "LLM Streaming & Embeddings",
      desc: "Prompt engineering guardrails, tool calling, structured JSON outputs, semantic search, and context grounding.",
      color: "#8B5CF6"
    },
    {
      name: "Cloudflare Workers",
      category: "ai-cloud",
      categoryLabel: "AI & Cloud",
      level: 84,
      tag: "Serverless Edge CDN",
      desc: "Global edge caching, asset transform workers, stale-while-revalidate distribution, and zero-origin latency.",
      color: "#F97316"
    },
    {
      name: "Docker & CI/CD",
      category: "ai-cloud",
      categoryLabel: "AI & Cloud",
      level: 85,
      tag: "Reproducible Builds",
      desc: "Multi-stage Docker builds, isolated staging containers, automated test runners, and zero-downtime deployments.",
      color: "#2496ED"
    }
  ];

  const filteredTech = activeCategory === "all"
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="w-full bg-canvas py-20 lg:py-28 border-b border-rule relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rule">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>TECHNICAL RADAR &amp; PROFICIENCY</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-ink tracking-tight">
              <HwText text="BATTLE-TESTED STACK" flashColor="#D12424" />
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                <HwText text="BUILT FOR PRODUCTION." flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-serif italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
              Every technology in my arsenal has been deployed to production and stress-tested under real-world traffic.
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 font-space text-xs font-bold text-accent hover:text-ink transition-colors uppercase tracking-wider"
            >
              <span>EXPLORE ALL SKILLS &amp; TECHNOLOGIES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="pt-8 pb-4 flex flex-wrap gap-2 border-b border-rule">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-space text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
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

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-space font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      {tech.categoryLabel}
                    </span>
                    <span className="font-space text-xs font-bold text-neutral-500">
                      {tech.level}%
                    </span>
                  </div>

                  <h3 className="font-funnel text-xl sm:text-2xl font-bold uppercase text-ink tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {tech.name}
                  </h3>

                  <div className="font-space text-xs font-semibold text-neutral-500 mb-3">
                    {tech.tag}
                  </div>

                  <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="pt-4 border-t border-rule mt-5">
                  <div className="w-full h-1.5 bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Telemetry Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-rule grid grid-cols-1 sm:grid-cols-3 gap-6 font-space text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <div className="text-neutral-400 font-bold uppercase">AVERAGE P99 LATENCY</div>
              <div className="font-funnel text-xl font-bold text-ink">38ms Target Achieved</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div>
              <div className="text-neutral-400 font-bold uppercase">DATABASE CACHE HIT</div>
              <div className="font-funnel text-xl font-bold text-ink">88.4% Average Ratio</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div>
              <div className="text-neutral-400 font-bold uppercase">UI RENDERING FRAME RATE</div>
              <div className="font-funnel text-xl font-bold text-ink">60 FPS Locked Standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
