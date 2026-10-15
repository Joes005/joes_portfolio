import React, { useState, useEffect } from "react";
import { getCurrentTimeIST } from "../../lib/utils";
import { Clock, MapPin } from "lucide-react";

export default function StatusBadge({ compact = false }) {
  const [time, setTime] = useState(getCurrentTimeIST());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTimeIST());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400 font-mono">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for projects</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-muted">
      {/* Live availability badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for selected projects</span>
      </div>

      {/* Location and time */}
      <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface-primary/50 text-slate-300">
        <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
        <span>Tamil Nadu, India</span>
        <span className="text-slate-600">•</span>
        <Clock className="w-3.5 h-3.5 text-accent-violet" />
        <span>{time} IST</span>
      </div>
    </div>
  );
}
