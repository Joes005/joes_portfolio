import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function ClientExperience() {
  const experiences = [
    {
      period: "2023 — PRESENT",
      badge: "FREELANCE & CONTRACT",
      role: "Full Stack Engineer & Independent Creator",
      company: "Independent Client Delivery & Contract Software",
      location: "Tamil Nadu, India / Remote",
      desc: "Architecting modern SaaS web applications, AI-enabled workflow tools, and bespoke software solutions for clients.",
      bullets: [
        "Engineered multi-branch platforms with strict ACID transaction boundaries to prevent ledger drift",
        "Integrated AI automation features and streaming endpoints to reduce manual data preparation",
        "Designed responsive, accessible design systems and real-time operational dashboards"
      ],
      tech: ["React 19", "Node.js", "MySQL 8.0", "Redis", "Tailwind CSS"]
    },
    {
      period: "2022 — 2023",
      badge: "INTERNSHIP & PROJECTS",
      role: "Software Development Intern / Project Developer",
      company: "Web & Institutional Applications",
      location: "Tamil Nadu, India",
      desc: "Delivered production portals including Karur Study Centre and student administration workflows.",
      bullets: [
        "Architected role-based student and examination portal with timed test submissions",
        "Integrated attendance tracking and automated grade card generation",
        "Managed discovery, schema design, implementation, and deployment"
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"]
    },
    {
      period: "2020 — 2024",
      badge: "ACADEMIC FOUNDATION",
      role: "B.Tech in Artificial Intelligence & Data Science",
      company: "Undergraduate Engineering Degree",
      location: "Tamil Nadu, India",
      desc: "Formal degree in Artificial Intelligence, data structures, relational database normalization, and machine learning fundamentals.",
      bullets: [
        "Built Heart Attack Risk Prediction system with clinical feature extraction and ML classifiers",
        "Studied enterprise software architectures with Spring Boot, Java, and MySQL ACID normalization",
        "Acquired formal mathematical foundations in probability, linear algebra, and data science"
      ],
      tech: ["Python", "Machine Learning", "Java", "Spring Boot", "MySQL", "NumPy", "Pandas"]
    }
  ];

  const deliveryNotes = [
    {
      title: "FINVELS — LOAN OPERATIONS & AMORTIZATION ENGINE",
      summary:
        "Engineered an automated multi-branch loan repayment and amortization engine. Implemented row-level locks on MySQL InnoDB ledger tables to prevent concurrent balance drift and automated reducing-balance calculation workflows.",
      domain: "Enterprise FinTech Architecture",
      architecture: "Row-Level Locks · Zero Drift",
      badge: "FinTech System"
    },
    {
      title: "KARUR STUDY CENTRE — INSTITUTIONAL EXAMINATION PORTAL",
      summary:
        "Architected a role-based student and examination administration engine built on Laravel and MySQL. Designed timed test submission queues to buffer concurrent student mock tests with automated scoring and instant grade cards.",
      domain: "EdTech & Institutional Portal",
      architecture: "Role-Based Access · Queue Buffering",
      badge: "Institutional System"
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

        {/* Client Deliveries & Outcomes Row */}
        <div className="mt-16 pt-12 border-t border-white/[0.12]">
          <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-6">
            VERIFIED PROJECT DELIVERY &amp; ARCHITECTURAL SUMMARIES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryNotes.map((note, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-space text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                      {note.badge}
                    </span>
                    <span className="font-space text-xs text-neutral-400">
                      {note.domain}
                    </span>
                  </div>
                  <h4 className="font-funnel text-base sm:text-lg font-bold uppercase text-white mb-3">
                    {note.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                    {note.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <span className="font-space text-xs text-neutral-400">
                    Engineered Outcome
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-space font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {note.architecture}
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
