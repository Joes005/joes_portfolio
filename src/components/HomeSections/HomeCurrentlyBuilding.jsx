import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Sparkles, Activity, GitBranch, ArrowUpRight, 
  Cpu, Layers, CheckCircle2 
} from "lucide-react";
import HwText from "../Pamidor/HwText";

export default function HomeCurrentlyBuilding() {
  return (
    <section id="currently-building" className="w-full bg-canvas py-20 lg:py-28 border-b border-rule relative">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-rule">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE LABS &amp; ACTIVE SPRINT</span>
            </div>
            <h2 className="font-funnel text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-ink tracking-tight">
              <HwText text="CURRENTLY BUILDING" flashColor="#D12424" />
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                <HwText text="IN THE CODE LAB." flashColor="#D12424" />
              </span>
            </h2>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
            Ongoing research into low-latency AI orchestration, streaming agent workflows, and vector knowledge retrieval.
          </p>
        </div>

        {/* Feature Banner Card */}
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-black/[0.02] dark:bg-white/[0.03] border border-rule relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Sprint Status */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                    ACTIVE PROJECT
                  </span>
                  <span className="font-space text-xs text-neutral-500 uppercase tracking-widest">
                    SPRINT 04 · 2026
                  </span>
                </div>

                <h3 className="font-funnel text-3xl sm:text-4xl font-black uppercase text-ink tracking-tight">
                  AUTONOMOUS AI BUSINESS COPILOT &amp; VECTOR RAG ENGINE
                </h3>

                <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Architecting an autonomous executive telemetry copilot that ingests order streams, Stripe metrics, and user feedback to synthesize actionable daily briefing memos with sub-200ms streaming responses.
                </p>

                {/* Live Sprint Progress Meter */}
                <div className="p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-rule space-y-3">
                  <div className="flex items-center justify-between font-space text-xs">
                    <span className="font-bold uppercase tracking-wider text-neutral-500">
                      SPRINT VELOCITY PROGRESS
                    </span>
                    <span className="font-bold text-accent">82% COMPLETED</span>
                  </div>

                  <div className="w-full h-2.5 bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-[11px] font-space text-neutral-500 pt-1">
                    <span>Phase: Model Guardrails &amp; RAG Vector Indexes</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      On Schedule
                    </span>
                  </div>
                </div>

                {/* Tech specifications */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python FastAPI", "React 19", "OpenAI Tool Calling", "Redis Streams", "Vector Embeddings"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs font-space font-medium text-neutral-700 dark:text-neutral-300 bg-black/[0.04] dark:bg-white/[0.05] border border-rule"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Code Snippet Preview */}
              <div className="lg:col-span-5 bg-night text-canvas p-6 sm:p-8 rounded-2xl border border-white/[0.1] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.1]">
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span>brief_generator.py</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    PASSING
                  </span>
                </div>

                <pre className="font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto">
                  <code>{`@router.post("/stream-intelligence")
async def stream_executive_brief(
    payload: TelemetryIngest
):
    # 1. Pydantic v2 guardrail schema
    validated = await schema_guard(payload)
    
    # 2. Vector RAG embedding lookup
    context = await rag_service.query(
        validated.metrics
    )
    
    # 3. Sub-second SSE token stream
    return StreamingResponse(
        copilot.synthesize_stream(context),
        media_type="text/event-stream"
    )`}</code>
                </pre>

                <div className="pt-3 border-t border-white/[0.1] flex items-center justify-between font-space text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-accent" />
                    branch: feat/rag-orchestrator
                  </span>
                  <a
                    href="https://github.com/Joes005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>VIEW REPO</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
