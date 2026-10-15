import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HwText from "./HwText";

export default function PamidorCodeLab() {
  const [activeExp, setActiveExp] = useState(0);

  const experiments = [
    {
      num: "01",
      title: "Autonomous AI Agent Tool Router",
      tag: "LLM Systems",
      desc: "Deterministic intent router converting fuzzy human prompts into validated database mutations with zero Hallucination risk.",
      stat: "14ms routing overhead",
      status: "BENCHMARKED"
    },
    {
      num: "02",
      title: "Client-side Web Worker SVG AST Parser",
      tag: "Parallel Performance",
      desc: "Offloading intensive 15MB+ vector graphic AST compilation to background worker threads, achieving 0ms main thread lock.",
      stat: "0ms UI frame drops",
      status: "VERIFIED"
    },
    {
      num: "03",
      title: "InnoDB Row-Lock Concurrency Simulator",
      tag: "Database Integrity",
      desc: "Simulating 500 concurrent financial repayment deposits using SELECT ... FOR UPDATE to eliminate ledger drift.",
      stat: "100.0% zero drift",
      status: "PRODUCTION STRESS"
    },
    {
      num: "04",
      title: "Streaming SSE Pipe with Backpressure",
      tag: "Network Architecture",
      desc: "FastAPI server-sent events stream with client-side buffer regulation to prevent memory leaks during high-token throughput.",
      stat: "< 12ms TTFT",
      status: "ACTIVE"
    }
  ];

  return (
    <section
      id="code-lab"
      className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas py-16 lg:py-28"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Rule Divider */}
        <div aria-hidden="true" className="h-[1.5px] w-full bg-rule" />

        {/* Section Header - Exact Pamidor: The Art Lab format */}
        <div className="pt-7 lg:pt-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-2">
              (THE CREATIVE PLAYGROUND)
            </div>
            <h2 className="font-funnel text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              <HwText text="The Code Lab" />
            </h2>
          </div>

          <span className="font-space text-xs text-neutral-500 uppercase tracking-widest">
            EXPERIMENTAL ARCHITECTURES &amp; BENCHMARKS
          </span>
        </div>

        {/* Two-column Editorial Lab Layout - Exact Pamidor Structure */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Rebellious Statement & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lead text-neutral-800 dark:text-neutral-200 leading-relaxed font-light">
              Let’s get one thing straight, I don't always build strictly within textbook lines. Welcome to my creative playground. This space is my unapologetic tribute to pure, unfiltered engineering experiments.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Think of this section as an unconstrained workshop of custom Web Worker AST parsers, streaming SSE token pipelines, and raw database concurrency simulations. It’s fast, it’s a little rebellious, and it’s driven entirely by technical curiosity. Care to take a peek under the hood?
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-ink text-canvas hover:bg-accent hover:text-white transition-all shadow-md"
              >
                <HwText text="ENTER THE LAB (GITHUB)" baseColor="currentColor" flashColor="#FFFFFF" />
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-space font-bold uppercase tracking-wider border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <span>VIEW SHIPPED WORK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Experiment Tiles */}
          <div className="lg:col-span-6 space-y-3">
            <div className="font-space text-xs text-neutral-400 uppercase tracking-widest pb-2">
              ACTIVE LAB SPECIFICATIONS
            </div>

            <div className="space-y-3">
              {experiments.map((exp, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveExp(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    activeExp === idx
                      ? "bg-white dark:bg-[#121212] border-accent shadow-lg shadow-black/[0.04]"
                      : "bg-black/[0.02] dark:bg-white/[0.02] border-rule hover:border-black/[0.2]"
                  }`}
                >
                  <div className="flex items-center justify-between font-space text-xs mb-2">
                    <span className="font-bold text-accent">{exp.tag}</span>
                    <span className="text-neutral-400 font-semibold">{exp.status}</span>
                  </div>

                  <h3 className="font-funnel text-lg font-bold text-ink dark:text-white mb-1.5">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {exp.desc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-rule font-space text-[11px] flex items-center justify-between">
                    <span className="text-neutral-400">Benchmark Metric:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{exp.stat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
