import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, 
  Database, Server, Activity, GitBranch, 
  Clock, ExternalLink, HelpCircle, ShieldCheck 
} from "lucide-react";
import { projects } from "../../data/projects";
import HwText from "../../components/Pamidor/HwText";

export default function ProjectDetails() {
  const { slug } = useParams();

  // Find project by slug, altSlug, or id
  const projectIndex = projects.findIndex(
    (p) => p.slug === slug || p.altSlug === slug || p.id === slug
  );
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-canvas text-ink">
        <span className="font-space text-xs font-bold uppercase tracking-widest text-accent mb-2">
          ERROR 404 · CASE STUDY
        </span>
        <h1 className="font-funnel text-4xl sm:text-5xl font-black uppercase text-ink mb-4">
          Project Not Found
        </h1>
        <p className="font-serif italic text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
          The requested engineering case study does not exist or has been relocated.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-canvas transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Work</span>
        </Link>
      </div>
    );
  }

  // Calculate next project for bottom pagination
  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];
  const isCompleted = project.status === "Completed";

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-rule">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-space text-xs font-bold text-neutral-500 hover:text-accent uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2 font-space text-xs text-neutral-400">
            <span>PROJECT</span>
            <span>/</span>
            <span className="text-accent font-bold">{project.title}</span>
          </div>
        </div>

        {/* 1. PROJECT HERO */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
              {project.category}
            </span>
            <span className="font-space text-xs text-neutral-500 font-semibold">
              YEAR {project.year} • {project.client}
            </span>
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

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text={project.title} flashColor="#D12424" />
          </h1>

          <p className="font-space text-base sm:text-xl font-bold uppercase text-neutral-600 dark:text-neutral-300 max-w-3xl">
            {project.tagline}
          </p>

          <p className="font-sans text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Quick links & tags */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-space font-semibold bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-rule"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 font-space text-xs font-bold uppercase tracking-wider">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}
              {!project.links?.live && !project.links?.github && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rule bg-black/[0.02] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 font-space text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{project.links?.accessNote || "Private Enterprise Codebase · Commercial NDA"}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. PROBLEM & SOLUTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 sm:p-10 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-4">
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>THE CHALLENGE &amp; PROBLEM STATEMENT</span>
            </div>
            <h3 className="font-funnel text-2xl font-bold uppercase text-ink">
              Operational Friction &amp; Inefficiencies
            </h3>
            <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-night text-canvas border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>
            <h3 className="font-funnel text-2xl font-bold uppercase text-white">
              Engineered Solution &amp; Delivery
            </h3>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 3. KEY FEATURES LIST */}
        {project.features && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight">
                Key Features &amp; Functional Workflows
              </h2>
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-canvas border border-rule hover:border-accent/50 transition-colors space-y-2"
                >
                  <span className="font-space text-xs font-bold text-accent">
                    FEATURE 0{idx + 1}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. VERIFIABLE METRICS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight">
              Verifiable Production Metrics
            </h2>
            <Activity className="w-5 h-5 text-accent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl border border-rule bg-black/[0.015] dark:bg-white/[0.025] space-y-2"
              >
                <span className="font-space text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                  {m.label}
                </span>
                <div className="font-funnel text-3xl sm:text-4xl font-black text-ink">
                  {m.value}
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-space font-bold bg-accent/10 text-accent">
                  {m.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. ARCHITECTURE WORKFLOW */}
        {project.architectureFlow && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight">
                Architectural Ingress &amp; Execution Pipeline
              </h2>
              <Server className="w-5 h-5 text-accent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {project.architectureFlow.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-canvas border border-rule hover:border-accent transition-colors space-y-3 relative group"
                >
                  <div className="font-space text-xs font-mono font-bold text-accent">
                    STEP {step.step}
                  </div>
                  <h3 className="font-funnel text-base font-bold uppercase text-ink">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. DATABASE SCHEMA SNIPPET / CODE DESIGN */}
        {project.schemaSnippet && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <div>
                <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                  DATABASE &amp; SCHEMA CONTRACT
                </span>
                <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight mt-1">
                  Relational Data Schema &amp; Storage Architecture
                </h2>
              </div>
              <Database className="w-5 h-5 text-accent" />
            </div>

            <div className="rounded-3xl bg-[#0D0D0B] text-neutral-200 border border-white/[0.1] overflow-hidden shadow-2xl">
              <div className="px-6 py-3 border-b border-white/[0.08] bg-black/40 flex items-center justify-between font-space text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-300">
                    schema-contract.sql
                  </span>
                </div>
                <span>ACID ENGINE INNODB</span>
              </div>
              <pre className="p-6 sm:p-8 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-emerald-400 selection:bg-accent selection:text-white">
                <code>{project.schemaSnippet}</code>
              </pre>
            </div>
          </div>
        )}

        {/* 7. ARCHITECTURAL TRADEOFFS & CHALLENGES */}
        {project.tradeoffs && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <div>
                <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                  ENGINEERING DILEMMAS &amp; DECISIONS
                </span>
                <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight mt-1">
                  Challenges, Trade-Offs &amp; Solutions
                </h2>
              </div>
              <HelpCircle className="w-5 h-5 text-accent" />
            </div>

            <div className="space-y-4">
              {project.tradeoffs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-3"
                >
                  <h3 className="font-funnel text-lg sm:text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-space text-xs font-mono text-accent">Q:</span>
                    {item.question}
                  </h3>
                  <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-6 border-l-2 border-accent">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. NEXT PROJECT NAVIGATION */}
        <div className="pt-12 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/projects"
            className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-accent transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL CASE STUDIES</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-3 font-funnel text-xl sm:text-2xl font-bold text-ink hover:text-accent transition-colors uppercase tracking-tight"
          >
            <span>NEXT PROJECT: {nextProject.title}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
