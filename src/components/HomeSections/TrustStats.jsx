import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Zap, Activity, Users, Clock, Database, 
  CheckCircle2, ArrowUpRight 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function TrustStats() {
  const stats = [
    {
      metric: "100%",
      label: "ON-TIME CLIENT DELIVERY",
      subtext: "Zero broken production contracts or missed launch deadlines",
      accent: "#D12424",
      icon: ShieldCheck,
      badge: "Verified Track Record"
    },
    {
      metric: "5,000+",
      label: "ACTIVE USERS & ACCOUNTS",
      subtext: "Handled across loan portals, student exams & SaaS platforms",
      accent: "#059669",
      icon: Users,
      badge: "Real-World Scale"
    },
    {
      metric: "< 38ms",
      label: "P99 ENDPOINT LATENCY",
      subtext: "Engineered with parameterized InnoDB indexing & Redis caching",
      accent: "#2563EB",
      icon: Zap,
      badge: "High Performance"
    },
    {
      metric: "12+",
      label: "PRODUCTION DEPLOYMENTS",
      subtext: "Full-lifecycle delivery from architecture to cloud CI/CD",
      accent: "#7C3AED",
      icon: Activity,
      badge: "End-to-End Delivery"
    }
  ];

  const trustHighlights = [
    { title: "Strict ACID Transactions", desc: "Row-level locks prevent financial ledger drift and race conditions." },
    { title: "Zero Toy Code", desc: "Production-grade error handling, schema migrations, and secure RBAC." },
    { title: "Transparent Async Logs", desc: "Daily progress updates, deployable preview links, and clear blocker alerts." },
    { title: "Sub-100ms UI Latency", desc: "Optimistic updates, Web Workers, and lightweight bundle orchestration." }
  ];

  const techEcosystem = [
    "REACT 19", "NODE.JS", "PYTHON FASTAPI", "MYSQL 8.0 INNODB", 
    "REDIS", "CLOUDFLARE EDGE", "DOCKER", "AWS CLOUD", "LARAVEL"
  ];

  return (
    <section id="trust" className="w-full bg-canvas py-20 lg:py-28 border-b border-rule relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rule">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>TRUST &amp; PERFORMANCE TELEMETRY</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-ink tracking-tight">
              <HwText text="PROVEN AT SCALE," flashColor="#D12424" />
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                <HwText text="NOT JUST ON PAPER." flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
            Every metric below is backed by real production telemetry — audited databases, high-throughput APIs, and verifiable client systems.
          </p>
        </div>

        {/* 4 Primary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-space font-bold tracking-wider uppercase bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-rule">
                      {stat.badge}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-accent transition-colors" />
                  </div>

                  <div className="font-funnel text-4xl sm:text-5xl font-black text-ink tracking-tight mb-2">
                    <HwText text={stat.metric} flashColor="#D12424" />
                  </div>

                  <div className="font-space text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    {stat.label}
                  </div>
                </div>

                <div className="pt-4 border-t border-rule mt-4 text-xs font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Trust Principles Grid */}
        <div className="mt-12 pt-10 border-t border-rule grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-space text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Ecosystem Banner */}
        <div className="mt-12 py-4 px-6 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-rule flex flex-wrap items-center justify-between gap-4">
          <span className="font-space text-[11px] font-bold uppercase tracking-widest text-accent flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            BATTLE-TESTED STACK:
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-space text-[11px] font-semibold text-neutral-600 dark:text-neutral-400">
            {techEcosystem.map((tech) => (
              <span key={tech} className="hover:text-ink transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
