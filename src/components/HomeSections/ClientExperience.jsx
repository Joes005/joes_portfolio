import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  ArrowRight, Quote, Award, ArrowUpRight 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function ClientExperience() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      badge: "CURRENT FOCUS",
      role: "Full Stack Engineer & Independent Creator",
      company: "Self-Employed / Freelance Client Delivery",
      location: "Remote / Global",
      desc: "Architecting modern SaaS web applications, AI-enabled workflow tools, and bespoke software solutions for global and enterprise clients.",
      bullets: [
        "Engineered multi-tenant platforms handling thousands of transactions with zero ledger drift",
        "Integrated autonomous AI features reducing routine manual workflow steps by over 40%",
        "Designed fluid, accessible design systems and real-time monitoring telemetry"
      ],
      tech: ["React 19", "Node.js", "MySQL 8.0", "Redis", "Tailwind CSS"]
    },
    {
      period: "2023 — 2024",
      badge: "SPECIALIZATION",
      role: "Full Stack & AI Developer",
      company: "AI & SaaS Product Engineering",
      location: "India",
      desc: "Combined modern reactive frontend frameworks with LLM inference engines, FastAPI endpoints, and cloud microservices.",
      bullets: [
        "Developed AI Copilot and Smart Freelancer Marketplace applications",
        "Implemented streaming response protocols and prompt engineering guardrails",
        "Refactored legacy monolith backends into scalable RESTful microservices"
      ],
      tech: ["FastAPI", "Python", "React", "Docker", "Vector DB"]
    },
    {
      period: "2022 — 2023",
      badge: "CLIENT WORK",
      role: "Freelance Web Developer",
      company: "Client Solutions & Production Portals",
      location: "Tamil Nadu, India",
      desc: "Partnered directly with founders, business owners, and institutions to bring high-impact custom web applications from concept to production.",
      bullets: [
        "Delivered production portals including Karur Study Centre and financial tracking tools",
        "Maintained 100% on-time project completion and high client satisfaction",
        "Managed full software lifecycle: discovery, system design, implementation, and cloud deployment"
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap/Tailwind"]
    },
    {
      period: "2021 — 2022",
      badge: "FOUNDATIONS",
      role: "Software Engineering Immersion",
      company: "Enterprise Systems & Database Foundations",
      location: "India",
      desc: "Deep focus on enterprise object-oriented architecture, database normalization, concurrency patterns, and secure REST APIs.",
      bullets: [
        "Built enterprise-style services with Spring Boot, Java, and MySQL",
        "Mastered ACID principles, index optimization, and API security paradigms"
      ],
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"]
    }
  ];

  const testimonials = [
    {
      quote:
        "Levin took our fragmented loan operations across 12 branches and delivered an automated, zero-drift financial portal. Our loan disbursement cycle dropped from 4 days to under 4 hours.",
      author: "S. V.",
      title: "Operations Director, Enterprise FinTech Portal",
      metric: "-85% Disbursement Time"
    },
    {
      quote:
        "The Karur Study Centre portal handled 600+ students taking timed competitive mock tests simultaneously without dropping a single submission. Outstanding reliability and code quality.",
      author: "P. R.",
      title: "Managing Director, Educational Academy",
      metric: "600+ Concurrent Students"
    }
  ];

  return (
    <section id="experience" className="w-full bg-night text-canvas py-20 lg:py-28 border-b border-white/[0.08] relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.12]">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>CAREER &amp; CLIENT ENGAGEMENTS</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              <HwText text="PROVEN CLIENT" baseColor="#FFFFFF" flashColor="#D12424" />
              <br />
              <span className="text-neutral-400">
                <HwText text="TRACK RECORD." baseColor="#9CA3AF" flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-serif italic text-base sm:text-lg text-neutral-300 max-w-md font-light">
              Years of delivering mission-critical applications directly for founders and enterprise clients.
            </p>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
            >
              <span>INSPECT COMPLETE TIMELINE &amp; AWARDS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="pt-12 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Period & Meta */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-space font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
                      {exp.badge}
                    </span>
                    <span className="font-space text-xs text-neutral-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="font-funnel text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-space text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right Role & Bullets */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-funnel text-lg sm:text-xl font-bold uppercase text-accent tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {exp.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs font-space text-neutral-400 bg-white/[0.04] border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials Row */}
        <div className="mt-16 pt-12 border-t border-white/[0.12]">
          <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-6">
            CLIENT FEEDBACK &amp; VERIFIED OUTCOMES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-accent mb-4" />
                  <p className="font-serif italic text-sm sm:text-base text-neutral-200 leading-relaxed mb-6 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <div className="font-funnel text-sm font-bold uppercase text-white">
                      {t.author}
                    </div>
                    <div className="font-space text-xs text-neutral-400">
                      {t.title}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-space font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
