import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, GraduationCap, ShieldCheck, 
  Cpu, Heart, Terminal, Compass, Award, CheckCircle2, 
  Target, Sparkles, BookOpen, Layers, Lightbulb, FileText 
} from "lucide-react";
import HwText from "../../components/Pamidor/HwText";
import { educationInfo } from "../../portfolio";

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "PREFER RIGID SCHEMAS OVER LOOSE GUESSWORK",
      desc: "Data models must enforce constraints at the database level with strict foreign keys, parameterized queries, and transactional locks, never just ephemeral client validation."
    },
    {
      num: "02",
      title: "P99 LATENCY IS RESPECT FOR USER ATTENTION",
      desc: "Users shouldn't wait for loading spinners. We optimize composite database indexes, cache aggressively with Redis, and offload CPU-heavy parsing to background workers."
    },
    {
      num: "03",
      title: "TRANSPARENCY OVER COMPLICATED JARGON",
      desc: "Every sprint is accompanied by plain-English asynchronous summaries, live deployable preview URLs, structured code commits, and documented pull requests."
    },
    {
      num: "04",
      title: "NO UNNECESSARY DEPENDENCIES",
      desc: "Every package added is a potential vulnerability and performance drag. We write lean, idiomatic code and rely on web standards whenever possible."
    }
  ];

  const technicalInterests = [
    {
      title: "Modern Web Technologies",
      desc: "Interactive, fluid user interfaces powered by React 19, responsive styling with Tailwind CSS, and zero-jank micro-interactions.",
      icon: Terminal
    },
    {
      title: "Scalable Backend Engineering",
      desc: "Event-driven REST APIs, robust microservices with Node.js, Spring Boot, and Laravel, and resilient queue-buffered architectures.",
      icon: Layers
    },
    {
      title: "Database Design & ACID Integrity",
      desc: "Normalized 3NF relational schemas, row-level locks, transaction isolation, and high-performance querying in MySQL.",
      icon: ShieldCheck
    },
    {
      title: "AI & Machine Learning Applications",
      desc: "Integrating predictive models with Python, Scikit-Learn, and LLM APIs for automated business intelligence and workflow copilot engines.",
      icon: Sparkles
    }
  ];

  const personalStrengths = [
    {
      title: "AI & Mathematical Foundation",
      desc: "Strong academic background in probability, linear algebra, and data science that enables understanding how algorithms operate under the hood."
    },
    {
      title: "End-to-End Problem Decomposition",
      desc: "Ability to take vague business requirements, dissect them into discrete technical contracts, and deliver fully working systems."
    },
    {
      title: "Fast Learner & Adaptable Builder",
      desc: "Comfortable picking up new frameworks, libraries, and languages rapidly based on project architectural requirements."
    },
    {
      title: "Obsession with Code Quality",
      desc: "Writing self-documenting code, strictly adhering to clean architecture, and thinking about long-term maintainability."
    }
  ];

  const careerGoals = [
    {
      phase: "Near-Term Focus",
      title: "Building High-Impact Full Stack & AI Systems",
      desc: "Engineering modern web applications and scalable backends that solve tangible operational challenges for enterprises and fast-moving teams."
    },
    {
      phase: "Long-Term Vision",
      title: "Architecting Autonomous Enterprise Software",
      desc: "Leading system architecture for data-intensive platforms, combining autonomous AI workflows with rock-solid transactional backends."
    }
  ];

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-24">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>ABOUT ME — IDENTITY, PHILOSOPHY &amp; FOUNDATIONS</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="CODE WITH INTEGRITY." flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="SYSTEMS WITH ENDURANCE." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            "I'm a developer with a background in Artificial Intelligence and Data Science, interested in building practical software solutions through modern web technologies, backend engineering, and AI applications."
          </p>
        </div>

        {/* 1. Professional Introduction & Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
            <div className="flex items-center gap-2 font-space text-xs font-bold text-accent uppercase tracking-widest">
              <span>PROFESSIONAL INTRODUCTION</span>
            </div>

            <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
              Engineering Practical Software That Solves Real Problems
            </h2>

            <p>
              My journey into software engineering started with an obsession for what happens behind the screen — how complex real-world workflows like loan approvals, exam assessments, and inventory movements can be modeled into bulletproof code and responsive user interfaces.
            </p>

            <p>
              Holding a <strong className="text-ink font-semibold">B.Tech in Artificial Intelligence and Data Science</strong> from Tamil Nadu, India, I bridge the crucial gap between academic mathematical rigor (vector representations, statistical inference, algorithmic efficiency) and practical software craft (clean React components, low-latency APIs, and normalized SQL schemas).
            </p>

            <p>
              Whether it is building a loan management portal across 12 branch locations with zero balance drift, constructing an AI business copilot that synthesizes executive briefings, or implementing an on-demand event staffing platform, I focus on building reliable software that users love using and businesses trust running.
            </p>

            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule space-y-3 font-space text-xs">
              <span className="font-bold text-accent uppercase tracking-widest block">
                DEVELOPMENT MANTRA
              </span>
              <p className="font-serif italic text-base text-ink">
                "Writing code that merely functions is easy; writing code that survives concurrent traffic, edge failures, and years of business iteration without degradation is where the true craft lives."
              </p>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap gap-3 font-space text-xs font-bold uppercase tracking-wider">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white transition-colors"
              >
                <span>EXPLORE SKILLS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>VIEW RESUME</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Personal Photo & Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-rule shadow-xl bg-night text-canvas">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/hero-portrait.webp"
                  alt="Levin Joeshwa - Developer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2 border-t border-white/[0.1] bg-night">
                <div className="flex items-center justify-between font-space text-xs">
                  <span className="text-accent font-bold uppercase tracking-widest">LEVIN JOESHWA</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AVAILABLE
                  </span>
                </div>
                <p className="font-serif italic text-sm text-neutral-300">
                  Full Stack Developer · B.Tech AI &amp; Data Science · Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Education Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                ACADEMIC QUALIFICATION
              </span>
              <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                Education &amp; Academic Honors
              </h2>
            </div>
            <GraduationCap className="w-6 h-6 text-accent" />
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rule">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink mt-2">
                  B.Tech in Artificial Intelligence and Data Science
                </h3>
                <p className="font-serif italic text-neutral-600 dark:text-neutral-400 mt-1">
                  Bachelor of Technology with Honors · Tamil Nadu, India
                </p>
              </div>
              <div className="font-space text-xs font-semibold text-neutral-500 uppercase tracking-widest text-left sm:text-right">
                <span>GRADUATED · 2020 — 2024</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              <p>
                Completed rigorous coursework covering Machine Learning, Deep Learning, Probability &amp; Statistics, Data Structures &amp; Algorithms, Database Management Systems (DBMS), and Computer System Architecture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-rule bg-canvas">
                  <span className="font-space text-xs font-bold text-accent block mb-1">DATA SCIENCE &amp; ML</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Feature extraction, predictive modeling, regression, and model validation with Python.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-rule bg-canvas">
                  <span className="font-space text-xs font-bold text-accent block mb-1">SYSTEMS &amp; RELATIONAL DB</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    ACID transaction guarantees, indexing strategies, normalization, and concurrency control.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-rule bg-canvas">
                  <span className="font-space text-xs font-bold text-accent block mb-1">ALGORITHMS &amp; CODING</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Time/space complexity analysis, tree traversals, and dynamic programming implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Technical Interests */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                CORE FOCUS AREAS
              </span>
              <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                Technical Interests
              </h2>
            </div>
            <Lightbulb className="w-6 h-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalInterests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-funnel text-xl font-bold uppercase text-ink">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                    {interest.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Development Philosophy */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                ENGINEERING VALUES
              </span>
              <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                Development Philosophy
              </h2>
            </div>
            <Compass className="w-6 h-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-colors space-y-3"
              >
                <div className="font-space text-xs font-mono font-bold text-accent">
                  PRINCIPLE {p.num}
                </div>
                <h3 className="font-funnel text-lg sm:text-xl font-bold uppercase text-ink tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Personal Strengths */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                CHARACTER &amp; CAPABILITIES
              </span>
              <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                Personal Strengths
              </h2>
            </div>
            <ShieldCheck className="w-6 h-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalStrengths.map((str, idx) => (
              <div
                key={str.title}
                className="p-6 rounded-2xl border border-rule bg-black/[0.015] dark:bg-white/[0.025] space-y-3"
              >
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center font-space text-xs font-bold text-accent">
                  0{idx + 1}
                </span>
                <h3 className="font-funnel text-lg font-bold uppercase text-ink">
                  {str.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  {str.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Career Goals */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                TRAJECTORY &amp; ROADMAP
              </span>
              <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                Career Goals
              </h2>
            </div>
            <Target className="w-6 h-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerGoals.map((goal) => (
              <div
                key={goal.title}
                className="p-8 rounded-2xl bg-night text-canvas border border-white/[0.08] space-y-3"
              >
                <span className="px-3 py-1 rounded-full text-[11px] font-space font-bold uppercase tracking-wider bg-accent text-white">
                  {goal.phase}
                </span>
                <h3 className="font-funnel text-xl font-bold uppercase text-white mt-2">
                  {goal.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink">
              Ready to collaborate or discuss an engineering role?
            </h3>
            <p className="font-serif italic text-neutral-600 dark:text-neutral-400">
              Open to full-time developer positions and high-impact freelance projects.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white font-space text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </div>
  );
}
