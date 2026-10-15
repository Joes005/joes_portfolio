import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Download, Printer, ArrowRight, ArrowUpRight, Mail, 
  MapPin, Phone, ExternalLink, 
  CheckCircle2, GraduationCap, Briefcase, Award, 
  Code2, Database, Sparkles, Terminal, FileText 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/Common/SocialIcons";
import HwText from "../../components/Pamidor/HwText";
import { projects } from "../../data/projects";
import { skillsCategorized } from "../../data/skills";
import { workExperiences, educationInfo, achievementSection } from "../../portfolio";

export default function ResumePage() {
  const resumeRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Print Stylesheet Hook */}
      <style>{`
        @media print {
          header, footer, nav, #site-menu, .no-print {
            display: none !important;
          }
          body, html {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
          }
          .print-container {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            background: white !important;
            color: black !important;
          }
          .print-text-dark {
            color: black !important;
          }
          .print-border {
            border-color: #ddd !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-12 space-y-12">
        {/* Top Page Header (Hidden on print) */}
        <div className="no-print border-b border-rule pb-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>RESUME — CURRICULUM VITAE &amp; CREDENTIALS</span>
            </div>

            {/* Print & Download Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-rule text-ink hover:border-accent hover:text-accent font-space text-xs font-bold uppercase tracking-wider transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / SAVE AS PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white hover:bg-ink transition-colors font-space text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="LEVIN JOESHWA" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-sans text-2xl sm:text-3xl font-normal">
              Curriculum Vitae &amp; Technical Credentials
            </span>
          </h1>

          <p className="font-serif italic text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Synchronized with all portfolio projects and skills. Optimized for recruiters, hiring managers, and enterprise clients.
          </p>
        </div>

        {/* ========================================================
            FORMAL RESUME DOCUMENT CONTAINER (Screen & Print Ready)
           ======================================================== */}
        <div
          ref={resumeRef}
          className="print-container rounded-3xl border border-rule bg-canvas dark:bg-[#0E0E0C] p-8 sm:p-14 shadow-2xl space-y-12 transition-colors"
        >
          {/* 1. RESUME HEADER */}
          <div className="border-b border-rule pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-funnel text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink print-text-dark">
                LEVIN JOESHWA
              </h2>
              <div className="font-space text-xs sm:text-sm font-bold uppercase text-accent tracking-wider">
                Full Stack Developer · Scalable Backends · AI Solutions
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans max-w-xl leading-relaxed">
                Focused on building modern web applications, scalable backend systems, and AI-powered solutions. B.Tech in Artificial Intelligence &amp; Data Science.
              </p>
            </div>

            {/* Contact Telemetry */}
            <div className="font-space text-xs space-y-2 text-neutral-600 dark:text-neutral-400 shrink-0 text-left md:text-right">
              <div className="flex md:justify-end items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href="mailto:levinjoeshwa.dev@gmail.com" className="hover:text-accent font-medium">
                  levinjoeshwa.dev@gmail.com
                </a>
              </div>
              <div className="flex md:justify-end items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <a href="tel:+918838415403" className="hover:text-accent font-medium">
                  +91 8838415403
                </a>
              </div>
              <div className="flex md:justify-end items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex md:justify-end items-center gap-3 pt-1">
                <a
                  href="https://github.com/Joes005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold inline-flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. PROFESSIONAL SUMMARY */}
          <div className="space-y-3">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>PROFESSIONAL SUMMARY</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Results-driven Full Stack Developer with an engineering background in <strong>Artificial Intelligence and Data Science</strong>. Proven capability in architecting end-to-end web applications, designing normalized relational database schemas with strict ACID transactional guarantees, and building high-concurrency backends using React 19, Node.js, Laravel, Python, FastAPI, and MySQL. Experienced in decomposing complex operational challenges into reliable, low-latency software products.
            </p>
          </div>

          {/* 3. EDUCATION */}
          <div className="space-y-4">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>EDUCATION</span>
            </div>

            <div className="p-6 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-funnel text-lg sm:text-xl font-bold uppercase text-ink print-text-dark">
                  B.Tech in Artificial Intelligence and Data Science
                </h3>
                <span className="font-space text-xs font-semibold text-accent">
                  2020 — 2024
                </span>
              </div>
              <div className="font-serif italic text-xs text-neutral-600 dark:text-neutral-400">
                Bachelor of Technology with Honors · Tamil Nadu, India
              </div>
              <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300 pt-1 leading-relaxed">
                Specialized in Machine Learning, Algorithms &amp; Data Structures, Relational Database Management Systems (DBMS), and Distributed Computing.
              </p>
            </div>
          </div>

          {/* 4. TECHNICAL SKILLS MATRIX */}
          <div className="space-y-4">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>TECHNICAL SKILLS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              {skillsCategorized.map((cat) => (
                <div
                  key={cat.id}
                  className="p-4 rounded-xl border border-rule bg-canvas dark:bg-[#121210] space-y-2"
                >
                  <span className="font-space font-bold uppercase tracking-wider text-accent block">
                    {cat.category}
                  </span>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                    {cat.items.map((i) => i.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. FEATURED PROJECTS */}
          <div className="space-y-6">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>FEATURED PROJECTS &amp; CASE STUDIES</span>
            </div>

            <div className="space-y-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-funnel text-base sm:text-lg font-bold uppercase text-ink print-text-dark">
                        {proj.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-space font-bold uppercase tracking-wider bg-black/[0.04] dark:bg-white/[0.06] border border-rule text-neutral-600 dark:text-neutral-300">
                        {proj.status}
                      </span>
                    </div>
                    <span className="font-space text-xs text-neutral-500 font-semibold">
                      {proj.year} • {proj.category}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {proj.description}
                  </p>

                  {proj.highlights && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-sans text-neutral-600 dark:text-neutral-400 pt-1">
                      {proj.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-2 flex flex-wrap gap-1.5 font-space text-[11px] text-neutral-500">
                    <strong className="text-ink">Technologies:</strong> {proj.tech.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. EXPERIENCE & LEARNING */}
          <div className="space-y-4">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>EXPERIENCE &amp; PROJECT DELIVERIES</span>
            </div>

            <div className="space-y-4">
              {workExperiences.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-funnel text-base sm:text-lg font-bold uppercase text-ink print-text-dark">
                      {exp.role}
                    </h4>
                    <span className="font-space text-xs text-accent font-semibold">
                      {exp.date}
                    </span>
                  </div>
                  <div className="font-space text-xs text-neutral-500 font-medium">
                    {exp.company} • {exp.location}
                  </div>
                  <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {exp.desc}
                  </p>
                  <ul className="space-y-1 text-[11px] font-sans text-neutral-600 dark:text-neutral-400 pt-1">
                    {exp.descBullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-accent font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 7. CERTIFICATIONS & ACHIEVEMENTS */}
          <div className="space-y-4">
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <span>CERTIFICATIONS &amp; CREDENTIALS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {achievementSection.achievementsCards.map((ach) => (
                <div
                  key={ach.title}
                  className="p-4 rounded-xl border border-rule bg-canvas dark:bg-[#121210] space-y-1"
                >
                  <div className="font-funnel text-sm font-bold uppercase text-ink print-text-dark">
                    {ach.title}
                  </div>
                  <div className="font-space text-[10px] text-neutral-500">
                    {ach.issuer} • {ach.date}
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-sans">
                    {ach.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Document Footer */}
          <div className="pt-6 border-t border-rule text-center font-space text-[11px] text-neutral-500">
            Portfolio: levinjoeshwa.dev • Verified Curriculum Vitae • Levin Joeshwa
          </div>
        </div>

        {/* Bottom CTA (Hidden on print) */}
        <div className="no-print p-8 sm:p-12 rounded-3xl bg-night text-canvas border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-white">
              Interested in scheduling an interview or discussing a role?
            </h3>
            <p className="font-serif italic text-neutral-300">
              I reply promptly to all recruiter and client inquiries.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-accent text-white hover:bg-white hover:text-night font-space text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            CONTACT LEVIN
          </Link>
        </div>
      </div>
    </div>
  );
}
