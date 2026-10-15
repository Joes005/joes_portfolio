import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, Server, Bot, Database, Sparkles, ArrowUpRight, 
  CheckCircle2, ChevronRight, Layers, ArrowRight 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function HomeServices() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const services = [
    {
      num: "01",
      title: "WEB DEVELOPMENT",
      tagline: "High-performance reactive websites & web applications",
      desc: "Architecting bespoke, production-ready web apps from responsive frontend interfaces down to relational schemas and modern design systems.",
      icon: Code2,
      deliverables: [
        "Business websites & creative portfolio platforms",
        "React 19 & Tailwind CSS responsive client apps",
        "Multi-tenant RBAC authentication & session security",
        "Fast page load optimization and accessible design"
      ],
      tech: ["React 19", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      accent: "#D12424"
    },
    {
      num: "02",
      title: "BACKEND DEVELOPMENT",
      tagline: "Scalable REST APIs, database design & backend integration",
      desc: "Designing normalized relational schemas and high-throughput background processing that handle thousands of simultaneous requests without deadlocks.",
      icon: Server,
      deliverables: [
        "REST API development with Node.js, Express, or Laravel",
        "MySQL 8.0 normalized schema design with row-level locks",
        "Redis caching tier for sub-50ms analytical query response",
        "Secure third-party API and webhook integrations"
      ],
      tech: ["Java & Spring", "Python & FastAPI", "Node.js", "PHP & Laravel", "MySQL"],
      accent: "#22C55E"
    },
    {
      num: "03",
      title: "BUSINESS APPLICATIONS",
      tagline: "Custom management software, ERP & operational workflows",
      desc: "Replacing chaotic spreadsheets with centralized management portals that automate stock, student registrations, and loan disbursements.",
      icon: Layers,
      deliverables: [
        "Inventory management systems with barcode tracking",
        "School management systems with role-based attendance",
        "Loan management systems with amortization calculators",
        "Automated PDF report and invoice generation"
      ],
      tech: ["MySQL 8.0", "Redis", "REST APIs", "Tailwind CSS", "React"],
      accent: "#3B82F6"
    },
    {
      num: "04",
      title: "AI APPLICATION DEVELOPMENT",
      tagline: "AI API integration, autonomous copilots & workflow automation",
      desc: "Integrating state-of-the-art LLMs and Machine Learning into production software with strict schema guardrails and streaming responses.",
      icon: Bot,
      deliverables: [
        "Streaming Server-Sent Events (SSE) via Python FastAPI",
        "AI-powered business intelligence & executive briefs",
        "Clinical & financial predictive Machine Learning pipelines",
        "Autonomous agent workflows & background task dispatch"
      ],
      tech: ["FastAPI", "Python", "OpenAI API", "Machine Learning", "Pydantic"],
      accent: "#A855F7"
    }
  ];

  return (
    <section id="services" className="w-full bg-canvas py-20 lg:py-28 border-b border-rule relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rule">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>CORE SERVICES &amp; CAPABILITIES</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-ink tracking-tight">
              <HwText text="ENGINEERING SERVICES" flashColor="#D12424" />
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                <HwText text="FOR AMBITIOUS BUILDS." flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-serif italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md font-light">
              From MVP architecture to full enterprise scaling — zero boilerplate shortcuts, 100% bespoke engineering.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-accent hover:text-ink transition-colors"
            >
              <span>VIEW FULL SERVICES DIRECTORY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "bg-black/[0.03] dark:bg-white/[0.04] border-accent shadow-lg"
                    : "bg-black/[0.01] dark:bg-white/[0.02] border-rule"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-rule flex items-center justify-center text-ink group-hover:text-accent group-hover:border-accent transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-space text-xs font-bold uppercase tracking-widest text-neutral-500">
                        SERVICE {service.num}
                      </span>
                    </div>

                    <span className="font-space text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>ENGAGE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink tracking-tight mb-2 group-hover:text-accent transition-colors">
                    <HwText text={service.title} flashColor="#D12424" />
                  </h3>

                  <p className="font-space text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-rule">
                    <div className="font-space text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      WHAT YOU GET:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-space font-medium text-neutral-600 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/[0.05] border border-rule"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-space text-xs font-bold uppercase tracking-wider text-ink hover:text-accent transition-colors shrink-0"
                  >
                    <span>INQUIRE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
