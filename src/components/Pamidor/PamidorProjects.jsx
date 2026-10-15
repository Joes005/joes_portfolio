import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Activity, ShieldCheck, Database, Layers } from "lucide-react";
import { GithubIcon } from "../Icons/SocialIcons";
import HwText from "./HwText";

export default function PamidorProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "finvels",
      title: "Finvels",
      client: "Enterprise FinTech · Multi-Branch Loan Platform",
      role: "Full Stack Architecture · Systems Lead",
      timeline: "6 Months · Production",
      year: "2024 — 2025",
      team: "React 19 · Node.js · MySQL InnoDB · Redis",
      accent: "#D12424",
      description:
        "Enterprise financial portal managing loan lifecycles, real-time collection reconciliation, automated EMI amortization schedules, KYC verification pipelines, and multi-tenant audit logs across 12 branch locations with strict ACID row-locking.",
      metrics: [
        { label: "P99 LATENCY", value: "38ms" },
        { label: "ACCOUNTS", value: "5,000+" },
        { label: "LEDGER DRIFT", value: "0.00%" }
      ],
      previewCode: `// Multi-branch Loan Repayment Ledger with Row Locks
START TRANSACTION;
SELECT balance FROM loan_accounts 
WHERE id = ? FOR UPDATE;
INSERT INTO loan_repayments (loan_id, amount, recorded_by) 
VALUES (?, ?, ?);
UPDATE loan_accounts SET balance = balance - ?;
COMMIT;`,
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "brandvault",
      title: "Brandvault",
      client: "Cloud Infrastructure · Dynamic Vector Engine",
      role: "Distributed Systems & Cloud Architecture",
      timeline: "4 Months · Active",
      year: "2024",
      team: "Cloudflare Edge · Web Workers · Node.js",
      accent: "#059669",
      description:
        "Centralized cloud asset management platform enabling distributed engineering and design teams to govern vector assets, live design tokens, typography scales, and secure public press kits with real-time edge CDN caching.",
      metrics: [
        { label: "PREVIEW LATENCY", value: "140ms" },
        { label: "CDN CACHE HIT", value: "94.2%" },
        { label: "BANDWIDTH SAVED", value: "3.2 TB/mo" }
      ],
      previewCode: `// Client Web Worker SVG AST Parser
const worker = new Worker('/workers/svgParser.js');
worker.postMessage({ rawSvg: payload });
worker.onmessage = ({ data }) => {
  renderExtractedTokens(data.palette, data.viewBox);
};`,
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "careerpulse",
      title: "Careerpulse",
      client: "AI Engineering · Human Capital Scoring Engine",
      role: "Full Stack & AI Engineer",
      timeline: "3 Months",
      year: "2024 / 2025",
      team: "FastAPI · Python · Vector Embeddings · React 19",
      accent: "#7C3AED",
      description:
        "Full-stack AI assessment engine analyzing technical resumes against role requirements, extracting semantic competencies, scoring match vectors, and generating structured interviewer briefs with streaming SSE.",
      metrics: [
        { label: "EXTRACTION ACCURACY", value: "96.4%" },
        { label: "SCORING LATENCY", value: "1.2s" },
        { label: "CANDIDATES PROCESSED", value: "10,000+" }
      ],
      previewCode: `@router.post("/evaluate-stream")
async def evaluate_candidate(resume: ResumeUpload):
    embeddings = await embed_service.vectorize(resume)
    return StreamingResponse(
        agent_orchestrator.score_stream(embeddings)
    )`,
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: "studyportal",
      title: "Study Portal",
      client: "Production Multi-Branch EdTech Management Portal",
      role: "Full Stack Web Developer",
      timeline: "5 Months",
      year: "2023 — 2024",
      team: "Laravel · PHP · MySQL · REST APIs",
      accent: "#2563EB",
      description:
        "Bespoke education portal supporting student enrollment, batch scheduling, real-time exam result announcements, test series evaluation, and automated attendance reporting for Karur Study Centre.",
      metrics: [
        { label: "ACTIVE STUDENTS", value: "2,400+" },
        { label: "BATCH TESTS", value: "450+" },
        { label: "PORTAL UPTIME", value: "99.9%" }
      ],
      previewCode: `class StudentBatchController extends Controller {
    public function generateRankMatrix($batchId) {
        return DB::transaction(function () use ($batchId) {
            return ExamResultService::computePercentiles($batchId);
        });
    }
}`,
      liveUrl: "https://github.com",
      githubUrl: "https://github.com"
    }
  ];

  const currentProj = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas py-16 lg:pt-28 lg:pb-36"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Title - Exactly Pamidor: Selected Projects */}
        <div>
          <h2 className="font-funnel text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            Selected Projects
          </h2>
        </div>

        {/* Rule Divider */}
        <div
          aria-hidden="true"
          className="h-[1.5px] w-full bg-rule mt-6 lg:mt-8"
        />

        {/* Interactive Accordion Layout - Exact Pamidor Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:pt-12 items-start">
          {/* Left Column: Project Rows (Interactive Accordion) */}
          <ul className="lg:col-span-7 flex flex-col divide-y divide-black/[0.08] dark:divide-white/[0.1]">
            {projects.map((proj, idx) => {
              const isActive = activeProject === idx;

              return (
                <li
                  key={proj.id}
                  onMouseEnter={() => setActiveProject(idx)}
                  className={`group relative py-6 lg:py-8 cursor-pointer transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    {/* Project Header Row */}
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-space text-xs font-mono text-neutral-400">
                          0{idx + 1}
                        </span>

                        <h3
                          className={`font-funnel text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-ink group-hover:text-accent"
                          }`}
                        >
                          <HwText text={proj.title} active={isActive} />
                        </h3>
                      </div>

                      {/* Jump To Project Button */}
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-space font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? "text-accent"
                            : "text-neutral-500 group-hover:text-ink"
                        }`}
                      >
                        <HwText text="Jump To Project" active={isActive} />
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>

                    {/* Client / Category subtitle */}
                    <div className="font-space text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {proj.client}
                    </div>

                    {/* Expanded Metadata (Active Item only) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-4 space-y-6"
                        >
                          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                            {proj.description}
                          </p>

                          {/* Pamidor 4-Column Metadata Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-black/[0.06] dark:border-white/[0.08] font-space text-xs">
                            <div>
                              <span className="block text-neutral-400 uppercase tracking-widest text-[11px] mb-1">
                                ROLE
                              </span>
                              <span className="font-bold text-ink dark:text-white">
                                {proj.role}
                              </span>
                            </div>

                            <div>
                              <span className="block text-neutral-400 uppercase tracking-widest text-[11px] mb-1">
                                TIMELINE
                              </span>
                              <span className="font-bold text-ink dark:text-white">
                                {proj.timeline}
                              </span>
                            </div>

                            <div>
                              <span className="block text-neutral-400 uppercase tracking-widest text-[11px] mb-1">
                                YEAR
                              </span>
                              <span className="font-bold text-ink dark:text-white">
                                {proj.year}
                              </span>
                            </div>

                            <div>
                              <span className="block text-neutral-400 uppercase tracking-widest text-[11px] mb-1">
                                TEAM / STACK
                              </span>
                              <span className="font-bold text-ink dark:text-white">
                                {proj.team}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right Column: Live Sticky Architecture & Telemetry Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              key={currentProj.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-night text-white border border-white/[0.1] shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.1] font-space text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="font-mono text-white font-semibold">
                    {currentProj.id}.architecture.spec
                  </span>
                </div>
                <span className="text-accent text-[11px] font-bold uppercase tracking-widest">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Code Snippet */}
              <div className="bg-black/60 rounded-2xl p-4 font-mono text-xs text-neutral-300 overflow-x-auto border border-white/[0.05] leading-relaxed">
                <pre>
                  <code>{currentProj.previewCode}</code>
                </pre>
              </div>

              {/* Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {currentProj.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-center"
                  >
                    <div className="font-space text-[10px] text-neutral-400 font-semibold tracking-wider">
                      {m.label}
                    </div>
                    <div className="font-mono text-sm sm:text-base font-bold text-white mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={currentProj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-white text-ink hover:bg-accent hover:text-white transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={currentProj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-space font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPO</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
