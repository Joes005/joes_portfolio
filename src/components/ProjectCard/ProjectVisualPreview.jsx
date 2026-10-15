import React from "react";
import { 
  DollarSign, TrendingUp, ShieldCheck, Database, 
  Sparkles, Search, Layers, FileText, CheckCircle, 
  Clock, Users, Award, AlertCircle, Bot, ArrowRight 
} from "lucide-react";

export default function ProjectVisualPreview({ project }) {
  const { id } = project;

  if (id === "finvels") {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none bg-gradient-to-br from-[#12131C] to-[#0A0B10]">
        {/* Top header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-semibold">FINVELS · LOAN ENGINE</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            AUDIT ACTIVE
          </span>
        </div>

        {/* Dashboard Metrics Mockup */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] text-muted block mb-1">TOTAL DISBURSED</span>
            <span className="text-sm font-bold text-white font-display">₹42.8M</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] text-muted block mb-1">ACTIVE LOANS</span>
            <span className="text-sm font-bold text-cyan-400 font-display">5,240</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span className="text-[10px] text-muted block mb-1">RECOVERY RATE</span>
            <span className="text-sm font-bold text-emerald-400 font-display">98.4%</span>
          </div>
        </div>

        {/* Loan Amortization / Audit Ledger Row */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] text-muted px-2 py-1 bg-white/[0.02] rounded">
            <span>#LN-9824 • S. Ramanathan</span>
            <span className="text-emerald-400 font-medium">Verified ✓</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted px-2 py-1 bg-white/[0.02] rounded">
            <span>#LN-9825 • Priya Devi</span>
            <span className="text-cyan-400 font-medium">Disbursed</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "brandvault") {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none bg-gradient-to-br from-[#0F141C] to-[#080B10]">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-semibold">BRANDVAULT · REPO</span>
          </div>
          <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            6 ASSET TYPES
          </span>
        </div>

        {/* Color Palette and Assets Mockup */}
        <div className="my-3 space-y-3">
          <div className="flex items-center gap-2">
            {["#07070A", "#6366F1", "#06B6D4", "#F5F5F5"].map((hex) => (
              <div key={hex} className="flex-1 h-9 rounded-lg border border-white/10 flex items-center justify-center" style={{ backgroundColor: hex }}>
                <span className="text-[9px] font-bold mix-blend-difference text-white">{hex}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <span>Vector Logos (SVG)</span>
              <span className="text-accent-cyan">34 files</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <span>Domain SSL Health</span>
              <span className="text-emerald-400">100% OK</span>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-muted flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <span>Syncing with Cloud Storage CDN</span>
          <span className="text-white font-bold">&lt; 180ms</span>
        </div>
      </div>
    );
  }

  if (id === "freelancer-marketplace") {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none bg-gradient-to-br from-[#140F1E] to-[#0A0812]">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-white font-semibold">AI SCOPE EVALUATOR</span>
          </div>
          <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            FASTAPI + LLM
          </span>
        </div>

        <div className="my-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-300">Brief: "SaaS Payment Gateway"</span>
            <span className="text-purple-400 font-bold">Risk: LOW (12%)</span>
          </div>
          <div className="w-full bg-surface-tertiary h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[88%]" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted">
            <span>Match: Full Stack Dev (94% synergy)</span>
            <span className="text-emerald-400">Escrow Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <span className="p-1.5 bg-white/[0.03] rounded border border-white/[0.05] text-center text-slate-300">
            Automated Milestones
          </span>
          <span className="p-1.5 bg-white/[0.03] rounded border border-white/[0.05] text-center text-slate-300">
            Dynamic Escrow Locks
          </span>
        </div>
      </div>
    );
  }

  if (id === "ai-business-copilot") {
    return (
      <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none bg-gradient-to-br from-[#1A0E18] to-[#0D070C]">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Bot className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-white font-semibold">EXECUTIVE COPILOT</span>
          </div>
          <span className="text-[10px] text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
            DAILY BRIEF 08:00 AM
          </span>
        </div>

        <div className="my-3 space-y-2">
          <div className="p-2.5 rounded-lg bg-pink-500/5 border border-pink-500/15 text-[11px] text-slate-300 leading-snug">
            <span className="text-pink-400 font-bold block mb-0.5">Anomaly Detected:</span>
            Cart drop-off spiked 14% on checkout step 2. Suggested fix generated.
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted px-2">
            <span>Drafted 18 customer responses</span>
            <span className="text-white font-semibold">Saved 3.2 hrs</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px]">
          <span className="text-muted">Pipeline: Laravel 10 + OpenAI</span>
          <span className="text-pink-400 font-bold">Latency: 650ms</span>
        </div>
      </div>
    );
  }

  // Default / KSC Education
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none bg-gradient-to-br from-[#0F1A15] to-[#070D0B]">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white font-semibold">KSC · EXAM PORTAL</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          CONCURRENT 600+
        </span>
      </div>

      <div className="my-3 space-y-2">
        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-muted block">TIMED TEST ACCURACY</span>
            <span className="text-sm font-bold text-white font-display">96.8th Percentile</span>
          </div>
          <span className="text-emerald-400 text-xs font-bold">Auto-Graded</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-muted">
        <span>Active Enrolled Students: 1,200+</span>
        <span className="text-white font-bold">99.98% Uptime</span>
      </div>
    </div>
  );
}
