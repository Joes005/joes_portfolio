import React, { useState, useEffect } from "react";
import { Terminal, Activity, GitBranch, Clock, Wifi } from "lucide-react";

export default function TelemetryBar({ onOpenCommandPalette }) {
  const [timeStr, setTimeStr] = useState("");
  const [pingLatency, setPingLatency] = useState(24);

  // Live IST Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Ping jitter calculation
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real edge ping variation between 18ms and 28ms
      const jitter = Math.floor(18 + Math.random() * 10);
      setPingLatency(jitter);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050608] border-b border-white/[0.06] text-[11px] font-mono text-zinc-400 py-1.5 px-4 sm:px-8 select-none z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: System Status & Commit */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300 font-medium hidden xs:inline">SYSTEMS OPERATIONAL</span>
            <span className="text-zinc-500 text-[10px] hidden md:inline">SLA 99.98%</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-zinc-500 border-l border-white/[0.08] pl-4">
            <GitBranch className="w-3 h-3 text-zinc-400" />
            <span className="text-zinc-300">main</span>
            <span className="text-zinc-600">@</span>
            <span className="text-amber-400/90 font-mono">8f4e21a</span>
          </div>
        </div>

        {/* Right: Latency, Timezone, and ⌘K Trigger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
            <Wifi className="w-3 h-3 text-emerald-400" />
            <span>Edge Ping:</span>
            <span className="text-emerald-400 font-medium">{pingLatency}ms</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3 h-3 text-zinc-500" />
            <span>{timeStr || "12:00:00 PM"}</span>
            <span className="text-zinc-600 hidden sm:inline">IST (UTC+5:30)</span>
          </div>

          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white hover:border-amber-400/50 hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Open Command Palette"
          >
            <span className="text-[10px] text-zinc-400 hidden xs:inline">Command</span>
            <kbd className="text-[10px] font-mono text-amber-400 font-semibold">⌘K</kbd>
          </button>
        </div>
      </div>
    </div>
  );
}
