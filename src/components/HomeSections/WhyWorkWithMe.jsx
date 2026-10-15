import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Cpu, Zap, Target, MessageSquare, 
  CheckCircle2, Award 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function WhyWorkWithMe() {
  const pillars = [
    {
      num: "01",
      title: "PRODUCTION-GRADE ARCHITECTURE",
      tagline: "No toy code, no fragile tutorials",
      desc: "Every database schema is normalized with strict foreign keys and transactional locks. Code is architected to handle race conditions, network failures, and high-concurrency traffic from day one.",
      icon: ShieldCheck,
      highlight: "ACID Guaranteed"
    },
    {
      num: "02",
      title: "END-TO-END FULL-STACK MASTERY",
      tagline: "Pixel-perfect frontend down to database indices",
      desc: "You don't need separate hires for UI design, frontend interactivity, API middleware, and database configuration. I handle the entire pipeline with unified coherence.",
      icon: Cpu,
      highlight: "Unified Stack"
    },
    {
      num: "03",
      title: "RAPID ITERATION & HIGH SPRINT VELOCITY",
      tagline: "Weekly live preview URLs, no radio silence",
      desc: "You never have to guess progress. Every sprint delivers tangible, testable code deployed on staging environments with documented pull requests and live feedback loops.",
      icon: Zap,
      highlight: "Weekly Previews"
    },
    {
      num: "04",
      title: "BUSINESS & ROI-DRIVEN ENGINEERING",
      tagline: "Code that moves revenue & lowers server bills",
      desc: "Software isn't art for art's sake — it must drive measurable business results. I optimize database queries to cut AWS/server compute costs and optimize UX to maximize conversion.",
      icon: Target,
      highlight: "Cost & Growth"
    },
    {
      num: "05",
      title: "TRANSPARENT & DIRECT COMMUNICATION",
      tagline: "Clear timelines, prompt direct updates",
      desc: "No corporate fluff or technical jargon obscurity. You get direct access, regular async progress logs, immediate blocker alerts, and clear milestone reviews.",
      icon: MessageSquare,
      highlight: "Direct Access"
    }
  ];

  return (
    <section id="why-work-with-me" className="w-full bg-canvas py-20 lg:py-28 border-b border-rule relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rule">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>VALUE PROPOSITION &amp; STANDARDS</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-ink tracking-tight">
              <HwText text="WHY WORK WITH ME" flashColor="#D12424" />
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                <HwText text="ENGINEERING STANDARDS." flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
            The difference between getting a working prototype and getting an enterprise system that runs autonomously without 2 a.m. server crashes.
          </p>
        </div>

        {/* 5 Pillars Grid (First 3 top, then 2 bottom with Guarantee Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-7 sm:p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-space text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-accent transition-colors">
                      PILLAR {pillar.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-space font-bold uppercase tracking-wider bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-rule">
                      {pillar.highlight}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-rule flex items-center justify-center text-ink group-hover:text-accent group-hover:border-accent mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-funnel text-xl sm:text-2xl font-bold uppercase text-ink tracking-tight mb-2 group-hover:text-accent transition-colors">
                    <HwText text={pillar.title} flashColor="#D12424" />
                  </h3>

                  <div className="font-space text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                    {pillar.tagline}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-rule mt-6 flex items-center gap-2 text-xs font-space font-bold text-accent">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED PRACTICE</span>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: The Zero Debt Engineering Oath */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-7 sm:p-8 rounded-2xl bg-accent text-white flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-white/80">
                  GUARANTEE
                </span>
                <Award className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-funnel text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                THE ZERO-DEBT CODE PROMISE
              </h3>

              <p className="text-white/90 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Every project I deliver is built on normalized database schemas, modular components, documented API endpoints, and clean architectural separation. If you ever hand it off to an internal team, they will applaud the structure.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between font-space text-xs font-bold tracking-wider">
              <span>LIFETIME CODE INTEGRITY</span>
              <span>100% OWNERSHIP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
