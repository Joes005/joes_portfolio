import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Server, Database, Bot, Sparkles, CheckCircle2, 
  ArrowRight, ArrowUpRight, HelpCircle, ChevronDown, 
  ShieldCheck, Clock, Zap, Layers, Briefcase, MessageSquare 
} from "lucide-react";
import HwText from "../../components/Pamidor/HwText";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      id: "web-dev",
      num: "01",
      title: "WEB DEVELOPMENT",
      tagline: "High-Performance Reactive Websites & Web Applications",
      icon: Code2,
      accent: "#D12424",
      subOfferings: [
        "Business Websites",
        "Portfolio Websites",
        "Responsive Web Applications"
      ],
      problemSolved:
        "Slow-loading, generic template websites that fail to convert visitors, break on mobile devices, and cannot scale as your business grows.",
      clientBenefit:
        "Blazing-fast load times, bespoke modern aesthetics (dark/light themes, fluid typography), exceptional SEO search ranking, and silky-smooth user experiences that build instant credibility.",
      projectTypes: [
        "Corporate and enterprise brand websites with CMS integration",
        "Creative developer & agency portfolios with rich micro-animations",
        "Interactive SaaS web application dashboards built with React 19 and Tailwind CSS"
      ],
      deliverables: [
        "Clean, semantic HTML5, CSS3, and modern React 19 architecture",
        "Fully responsive layout across mobile, tablet, and ultra-wide screens",
        "Core Web Vitals optimization (sub-second FCP and zero layout shifts)",
        "Search engine optimization (SEO meta tags, OpenGraph, structured data)"
      ]
    },
    {
      id: "backend-dev",
      num: "02",
      title: "BACKEND DEVELOPMENT",
      tagline: "Scalable REST APIs, Database Design & System Integration",
      icon: Server,
      accent: "#22C55E",
      subOfferings: [
        "REST API Development",
        "Database Design & Normalization",
        "Backend & Third-Party Integration"
      ],
      problemSolved:
        "Unreliable API endpoints, slow database queries, security vulnerabilities, and chaotic unnormalized data that creates duplicate records and race conditions.",
      clientBenefit:
        "Bulletproof backend architecture that handles peak user traffic without crashing, strict ACID transaction boundaries to prevent data corruption, and clean API contracts.",
      projectTypes: [
        "RESTful API backends built with Node.js/Express, Python FastAPI, or Laravel",
        "Third-party payment gateways (Stripe, Razorpay), SMS alerts, and webhooks",
        "Normalized MySQL relational databases with optimized indexes and row-level locks"
      ],
      deliverables: [
        "RESTful API design with JWT token authentication and role-based permissions",
        "Relational schema design (3NF normalization, foreign keys, index profiling)",
        "High-speed in-memory caching with Redis for sub-50ms analytical reads",
        "Comprehensive API documentation and Postman collections for front-end integration"
      ]
    },
    {
      id: "business-apps",
      num: "03",
      title: "BUSINESS APPLICATIONS",
      tagline: "Custom Management Software, ERP & Enterprise Workflows",
      icon: Layers,
      accent: "#3B82F6",
      subOfferings: [
        "Inventory Management Systems",
        "School Management Systems",
        "Custom Management Software"
      ],
      problemSolved:
        "Scattered Excel spreadsheets, manual paper records, double-booked resources, and lack of real-time visibility into stock, students, or branch operations.",
      clientBenefit:
        "Automated operational workflows that save dozens of staff hours each week, eliminate human calculation errors, and provide real-time executive visibility from any device.",
      projectTypes: [
        "Multi-warehouse Inventory Management with barcode tracking and low-stock alerts",
        "School Management Systems with role-based access, attendance, and exam grading",
        "Multi-branch Loan Management platforms with automated amortization schedules"
      ],
      deliverables: [
        "Role-Based Access Control (Admin, Manager, Staff, Customer/Student)",
        "Automated document and PDF tax invoice generation",
        "Audit logs tracking every modification for full regulatory compliance",
        "Interactive analytics dashboards with printable executive reports"
      ]
    },
    {
      id: "ai-dev",
      num: "04",
      title: "AI APPLICATION DEVELOPMENT",
      tagline: "AI API Integration, Autonomous Copilots & Workflow Automation",
      icon: Bot,
      accent: "#A855F7",
      subOfferings: [
        "AI API Integration",
        "AI-Powered Web Applications",
        "Business Workflow Automation"
      ],
      problemSolved:
        "Manual data entry, slow customer query turnaround times, tedious document synthesis, and fragile AI prompt setups prone to hallucinations and timeouts.",
      clientBenefit:
        "Cutting-edge AI automation integrated safely into your production apps, delivering instant automated answers, predictive intelligence, and dramatic cost savings.",
      projectTypes: [
        "Autonomous AI Business Copilots delivering daily executive briefings",
        "AI-driven customer support assistants with custom knowledge bases",
        "Machine Learning risk prediction and diagnostic tools for healthcare & finance"
      ],
      deliverables: [
        "OpenAI / Anthropic API integrations with strict Pydantic JSON schema outputs",
        "Streaming response pipelines (SSE) for sub-second first-token speeds",
        "Asynchronous background queue dispatch preventing web request timeouts",
        "Rate-limiting and fallback circuit breakers to manage token consumption costs"
      ]
    }
  ];

  const faqs = [
    {
      q: "How does our typical project engagement work?",
      a: "We start with a thorough requirement discovery call, outline technical specifications and database schemas, agree on milestones, and execute in focused weekly sprints with live staging URLs for you to test."
    },
    {
      q: "Can you build both the frontend and the backend?",
      a: "Yes! As a Full Stack Developer, I handle the complete engineering stack — from responsive React user interfaces to scalable Node.js/Laravel/FastAPI backends and MySQL database architecture."
    },
    {
      q: "Will I get full source code ownership upon project completion?",
      a: "Absolutely. 100% of the code, GitHub repositories, database schemas, and documentation belong completely to you with zero vendor lock-in."
    },
    {
      q: "How do we handle hosting and deployment?",
      a: "I deploy your application to modern cloud providers (Vercel, AWS, DigitalOcean, or Hostinger VPS) with automated CI/CD pipelines, SSL certificates, and database backups configured."
    }
  ];

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-24">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>SERVICES — CUSTOM SOFTWARE, BACKENDS &amp; AI SOLUTIONS</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="SOFTWARE SERVICES" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="THAT SOLVE REAL PROBLEMS." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            High-caliber full-stack web engineering, scalable backends, bespoke business management platforms, and autonomous AI integrations tailored for founders, businesses, and enterprises.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="space-y-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-8 hover:border-accent/40 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rule">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-space text-xs font-mono font-bold text-accent">
                        SERVICE {service.num}
                      </span>
                      <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <span className="font-space text-xs font-bold uppercase text-neutral-500 tracking-wider">
                    {service.tagline}
                  </span>
                </div>

                {/* Sub-Offerings Badges */}
                <div className="flex flex-wrap gap-2">
                  {service.subOfferings.map((offering) => (
                    <span
                      key={offering}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-space font-bold uppercase tracking-wider bg-canvas border border-rule text-ink"
                    >
                      ✓ {offering}
                    </span>
                  ))}
                </div>

                {/* 3-Column Problem / Benefit / Project Types Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* Problem Solved */}
                  <div className="p-6 rounded-2xl bg-canvas border border-rule space-y-2">
                    <div className="flex items-center gap-2 font-space text-[11px] font-bold uppercase tracking-wider text-accent">
                      <span>THE PROBLEM IT SOLVES</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {service.problemSolved}
                    </p>
                  </div>

                  {/* Client Benefit */}
                  <div className="p-6 rounded-2xl bg-canvas border border-rule space-y-2">
                    <div className="flex items-center gap-2 font-space text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                      <span>CLIENT BENEFIT</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {service.clientBenefit}
                    </p>
                  </div>

                  {/* Project Types */}
                  <div className="p-6 rounded-2xl bg-canvas border border-rule space-y-2">
                    <div className="flex items-center gap-2 font-space text-[11px] font-bold uppercase tracking-wider text-blue-500">
                      <span>TYPES OF PROJECTS BUILT</span>
                    </div>
                    <ul className="space-y-1.5 font-sans text-xs text-neutral-700 dark:text-neutral-300">
                      {service.projectTypes.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-accent font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deliverables Bullet List */}
                <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule/60 space-y-3">
                  <span className="font-space text-[11px] font-bold uppercase tracking-widest text-neutral-400 block">
                    KEY TECHNICAL DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-neutral-700 dark:text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="space-y-8 pt-8 border-t border-rule">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
              Frequently Asked Questions
            </h2>
            <HelpCircle className="w-6 h-6 text-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-3"
              >
                <h3 className="font-funnel text-lg font-bold text-ink">
                  {faq.q}
                </h3>
                <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Box as specified:
            "Have a project in mind? Let's discuss."
            [Contact Me] */}
        <div className="p-8 sm:p-14 rounded-3xl bg-night text-canvas border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-space text-xs font-bold uppercase tracking-widest text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>COMMISSION A BUILD · CLIENT WORK</span>
            </div>
            <h3 className="font-funnel text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Have a project in mind? Let's discuss.
            </h3>
            <p className="font-serif italic text-neutral-300 max-w-xl text-base sm:text-lg">
              Whether you need a business web platform, a robust backend system, or an AI workflow, I'm ready to bring it to life with speed and precision.
            </p>
          </div>

          <Link
            to="/contact"
            className="group px-8 py-4 rounded-full bg-accent text-white hover:bg-white hover:text-night font-space text-xs font-bold uppercase tracking-wider transition-all shadow-xl shrink-0 flex items-center gap-2"
          >
            <span>CONTACT ME</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
