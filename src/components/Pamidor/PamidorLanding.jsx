import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Sparkles, Terminal, Code2, Cpu, ShieldCheck } from "lucide-react";
import HwText from "./HwText";

export default function PamidorLanding() {
  const marqueeItems = [
    "FULL STACK SOFTWARE DEVELOPER",
    "DISTRIBUTED SYSTEMS ARCHITECTURE",
    "REACT 19 & MODERN FRONTEND",
    "HIGH-THROUGHPUT NODE.JS & LARAVEL",
    "TRANSACTIONAL MYSQL 8.0 & REDIS",
    "PYTHON FASTAPI & VECTOR RAG",
    "AUTONOMOUS AI AGENTS & TOOL CALLING",
    "ZERO LEDGER DRIFT & ACID INTEGRITY"
  ];

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-canvas flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden border-b border-rule"
    >
      {/* Top Header Eyebrow */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-rule text-xs font-space font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2.5 text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>PORTFOLIO &amp; PRODUCTION ARCHITECTURES</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-500">
            <span>TAMIL NADU, INDIA</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-ink font-bold">2025 — 2026</span>
          </div>
        </div>
      </div>

      {/* Main Dramatic Landing Statement */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 my-auto py-10 sm:py-16">
        <div className="max-w-6xl space-y-6">
          {/* Subtitle intro */}
          <div className="font-space text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-neutral-500">
            HI, I'M LEVIN —
          </div>

          {/* Monumental Headline establishing Software Developer */}
          <h1 className="font-funnel font-black text-ink uppercase tracking-tight text-[3.8rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9.5rem] leading-[0.84] select-none">
            <span className="block">
              <HwText text="SOFTWARE" baseColor="#0A0A0A" flashColor="#D12424" />
            </span>
            <span className="block mt-1 sm:mt-2 text-neutral-400 dark:text-neutral-500 hover:text-ink transition-colors">
              <HwText text="DEVELOPER" baseColor="#0A0A0A" flashColor="#D12424" />
            </span>
          </h1>

          {/* Editorial Philosophy Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6">
            <p className="lg:col-span-8 font-serif italic text-2xl sm:text-3xl lg:text-4xl text-neutral-700 dark:text-neutral-300 leading-snug">
              Engineering high-throughput systems, ACID transactional backends, and interfaces users never have to wait for.
            </p>

            {/* Quick Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 font-space text-xs font-bold uppercase tracking-wider">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white transition-all shadow-md"
              >
                <HwText text="ABOUT LEVIN" baseColor="currentColor" flashColor="#FFFFFF" />
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rule text-neutral-700 dark:text-neutral-300 hover:border-accent hover:text-accent transition-colors"
              >
                <span>VIEW SHIPPED WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee Ticker */}
      <div className="w-full overflow-hidden border-t border-rule bg-black/[0.02] dark:bg-white/[0.02] py-3.5">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 mx-4 font-space text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-accent transition-colors cursor-default"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
