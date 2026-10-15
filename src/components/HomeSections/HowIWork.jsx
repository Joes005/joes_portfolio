import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Cpu, PlayCircle, CheckCircle, Rocket, 
  ArrowRight, Clock, FileCode, Check 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function HowIWork() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      phase: "PHASE 01",
      title: "DISCOVERY & TECHNICAL SCOPING",
      duration: "Days 1 — 3",
      icon: Search,
      focus: "Deconstructing product requirements, mapping edge cases, estimating user concurrency, and defining latency budgets.",
      activities: [
        "In-depth architectural discovery session",
        "Data requirements & entity-relationship modeling",
        "API contract definition & auth security scope",
        "Clear milestone calendar with agreed deliverables"
      ],
      output: "Technical Specification Sheet & Architecture Blueprint"
    },
    {
      num: "02",
      phase: "PHASE 02",
      title: "SYSTEM DESIGN & DATA MODELING",
      duration: "Days 4 — 7",
      icon: Cpu,
      focus: "Designing normalized relational schemas with InnoDB row-locks, configuring Redis cache keys, and scaffolding clean folder architectures.",
      activities: [
        "Relational database schema with 3NF normalization",
        "Cache-aside policy & in-memory key taxonomy",
        "Pydantic schema definitions / OpenAPI 3.0 contracts",
        "Isolated staging environment & CI/CD deployment"
      ],
      output: "Schema Migrations & Live Staging API Scaffolding"
    },
    {
      num: "03",
      phase: "PHASE 03",
      title: "AGILE SPRINT EXECUTION",
      duration: "Weeks 2 — 4+",
      icon: PlayCircle,
      focus: "Rapid, test-driven coding combining reactive React 19 UI with resilient backend microservices. Zero radio silence.",
      activities: [
        "Weekly deployable preview links for client review",
        "Daily asynchronous progress logs & blocker alerts",
        "Strict Git branch isolation and clean atomic commits",
        "Live interactive design token & component verification"
      ],
      output: "Weekly Live Staging URL & Code Repository Pull Requests"
    },
    {
      num: "04",
      phase: "PHASE 04",
      title: "RIGOROUS TESTING & BENCHMARKING",
      duration: "Sprint Hardening",
      icon: CheckCircle,
      focus: "Stress testing concurrent operations, verifying ACID transaction atomicity under simulated network drops, and tuning query indexes.",
      activities: [
        "P99 latency profiling to ensure sub-50ms query targets",
        "Concurrent race condition testing on transactional ledgers",
        "Cross-browser and mobile device responsive QA",
        "Security audits: SQL injection, CORS, RBAC bypass tests"
      ],
      output: "Audited Performance Telemetry & Zero-Bug Signoff"
    },
    {
      num: "05",
      phase: "PHASE 05",
      title: "CLOUD DEPLOYMENT & HANDOFF",
      duration: "Launch & Beyond",
      icon: Rocket,
      focus: "Zero-downtime production deployment, SSL/CDN domain provisioning, real-time logging, and thorough code handoff.",
      activities: [
        "Production deployment to AWS, Cloudflare or client servers",
        "Automated database backups & telemetry alarms",
        "Comprehensive code walkthrough video & README guides",
        "Dedicated post-launch warranty & maintenance window"
      ],
      output: "100% Repository Ownership, Docs & Live Production URLs"
    }
  ];

  return (
    <section id="how-i-work" className="w-full bg-night text-canvas py-20 lg:py-28 border-b border-white/[0.08] relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.12]">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>PROCESS &amp; DELIVERY WORKFLOW</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              <HwText text="HOW I DELIVER WORK" baseColor="#FFFFFF" flashColor="#D12424" />
              <br />
              <span className="text-neutral-400">
                <HwText text="WITHOUT SURPRISES." baseColor="#9CA3AF" flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-neutral-300 max-w-md font-light">
            A transparent, sprint-based workflow where you test real software every single week.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="pt-12 space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white/[0.05] border-accent shadow-xl"
                    : "bg-white/[0.015] border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-funnel text-3xl sm:text-4xl font-black text-neutral-500 group-hover:text-accent">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-space font-bold uppercase tracking-widest text-accent mb-0.5">
                        <span>{step.phase}</span>
                        <span>•</span>
                        <span className="text-neutral-400">{step.duration}</span>
                      </div>
                      <h3 className="font-funnel text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-space text-xs font-semibold text-neutral-400">
                    <span className="hidden sm:inline">OUTPUT:</span>
                    <span className="text-white bg-white/[0.05] px-3 py-1 rounded border border-white/[0.1]">
                      {step.output}
                    </span>
                  </div>
                </div>

                {/* Expanded Details when active */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6"
                  >
                    <div className="lg:col-span-5">
                      <div className="font-space text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        PHASE SUMMARY
                      </div>
                      <p className="font-sans text-sm text-neutral-300 leading-relaxed">
                        {step.focus}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="font-space text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        KEY ACTIVITIES &amp; VERIFICATIONS
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.activities.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
