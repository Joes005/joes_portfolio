import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Database, Gauge, Zap } from "lucide-react";
import { queryStrategies } from "../../data/benchmarks";

export default function BenchmarkPlayground() {
  // Simulator 1: Database Query Strategy
  const [concurrency, setConcurrency] = useState(12000); // 1,000 to 50,000 req/sec
  const [activeStrategyKey, setActiveStrategyKey] = useState("index"); // 'scan' | 'index' | 'redis'

  const activeStrategy = queryStrategies[activeStrategyKey];

  // Dynamic calculations based on strategy and concurrency
  const calculatedLatency = (
    activeStrategy.baseLatency +
    concurrency * activeStrategy.latencyMultiplier
  ).toFixed(1);

  const calculatedCpu = Math.min(
    100,
    (activeStrategy.cpuBase + concurrency * activeStrategy.cpuMultiplier).toFixed(1)
  );

  const calculatedThroughput = Math.min(
    concurrency,
    activeStrategyKey === "scan"
      ? Math.floor(Math.min(concurrency, 3200))
      : activeStrategyKey === "index"
      ? Math.floor(Math.min(concurrency, 24000))
      : concurrency
  );

  // Simulator 2: Token Bucket Rate Limiter
  const [tokens, setTokens] = useState(8);
  const maxTokens = 10;
  const [requestLog, setRequestLog] = useState([
    { id: 1, status: 200, msg: "HTTP 200 OK — Ingress allowed [token_consumed: 1]" },
    { id: 2, status: 200, msg: "HTTP 200 OK — Ingress allowed [token_consumed: 1]" },
  ]);

  // Token replenishment timer (1 token every 800ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setTokens((prev) => Math.min(maxTokens, prev + 1));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const handleSendBurst = (count = 1) => {
    if (tokens >= count) {
      setTokens((prev) => prev - count);
      const newLogs = Array.from({ length: count }).map((_, i) => ({
        id: Date.now() + i,
        status: 200,
        msg: `HTTP 200 OK — Request routed to upstream API [token: ${tokens - i - 1}/${maxTokens}]`
      }));
      setRequestLog((prev) => [...newLogs.reverse(), ...prev].slice(0, 5));
    } else {
      // 429 Too Many Requests
      const newLogs = [
        {
          id: Date.now(),
          status: 429,
          msg: `HTTP 429 TOO MANY REQUESTS — Token bucket empty. Throttled at edge.`
        }
      ];
      setRequestLog((prev) => [...newLogs, ...prev].slice(0, 5));
    }
  };

  return (
    <section id="benchmarks" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
            <Gauge className="w-3.5 h-3.5" />
            // 03 — SYSTEMS BENCHMARK LAB
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Interactive Systems Simulator.
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Test the architectural trade-offs of database indexing and edge rate limiting under variable concurrency loads. Adjust parameters to inspect real-time latency and saturation.
          </p>
        </div>

        <div className="px-4 py-2 bg-[#0E1017] border border-white/10 rounded-xl font-mono text-xs text-zinc-300 self-start md:self-end">
          <span className="text-zinc-500 mr-2">SIMULATION ENGINE:</span>
          <span className="text-emerald-400 font-semibold">ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Database Strategy Benchmark (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0B0D14] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Database Query Strategy Simulator
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Compare indexing structures against in-memory caches
                </span>
              </div>
            </div>
          </div>

          {/* Strategy Selector Tabs */}
          <div className="grid grid-cols-3 gap-2">
            {Object.values(queryStrategies).map((strat) => {
              const isSelected = strat.id === activeStrategyKey;
              return (
                <button
                  key={strat.id}
                  onClick={() => setActiveStrategyKey(strat.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#141724] border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "bg-[#0E1017] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span className="font-mono text-[10px] text-zinc-500 block mb-1">
                    {strat.tag}
                  </span>
                  <span className="font-mono text-xs font-bold block truncate">
                    {strat.name}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs font-sans text-zinc-300 leading-relaxed bg-[#08090C] p-3 rounded-xl border border-white/[0.06]">
            {activeStrategy.description}
          </p>

          {/* Concurrency Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">CONCURRENT INGRESS TRAFFIC:</span>
              <span className="text-amber-400 font-bold text-sm">
                {concurrency.toLocaleString()} req / sec
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={concurrency}
              onChange={(e) => setConcurrency(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-600">
              <span>1,000 req/s (Baseline)</span>
              <span>25,000 req/s (Mid-Peak)</span>
              <span>50,000 req/s (Surge)</span>
            </div>
          </div>

          {/* Real-time Dynamic Gauge Output */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08]">
            <div className="p-3.5 rounded-xl bg-[#0E1017] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                P99 LATENCY
              </span>
              <span
                className={`font-mono text-xl font-bold ${
                  Number(calculatedLatency) > 100
                    ? "text-red-400"
                    : Number(calculatedLatency) > 30
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}
              >
                {calculatedLatency}ms
              </span>
              <span className="text-[10px] font-mono text-zinc-500 block mt-1">
                {Number(calculatedLatency) > 100 ? "Severe Degradation" : "SLA Compliant"}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E1017] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                CPU UTILIZATION
              </span>
              <span
                className={`font-mono text-xl font-bold ${
                  Number(calculatedCpu) > 85
                    ? "text-red-400"
                    : Number(calculatedCpu) > 50
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}
              >
                {calculatedCpu}%
              </span>
              <span className="text-[10px] font-mono text-zinc-500 block mt-1">
                {Number(calculatedCpu) > 85 ? "Throttling" : "Healthy Headroom"}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E1017] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                EFFECTIVE RPS
              </span>
              <span className="font-mono text-xl font-bold text-white">
                {calculatedThroughput.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 block mt-1">
                {calculatedThroughput < concurrency ? "Dropped Packets" : "100% Handled"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Token Bucket Rate Limiter Simulator (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B0D14] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Token Bucket Rate Limiter
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Edge perimeter DDoS & burst mitigation
                </span>
              </div>
            </div>
          </div>

          {/* Visual Bucket Tokens */}
          <div className="p-4 rounded-xl bg-[#08090C] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">AVAILABLE TOKENS:</span>
              <span className="font-bold text-amber-400">
                {tokens} / {maxTokens} TOKENS
              </span>
            </div>

            {/* Token Pill Visualizer */}
            <div className="grid grid-cols-10 gap-1.5 py-2">
              {Array.from({ length: maxTokens }).map((_, i) => {
                const isFull = i < tokens;
                return (
                  <div
                    key={i}
                    className={`h-7 rounded-md transition-all duration-200 border ${
                      isFull
                        ? "bg-amber-400 border-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                        : "bg-white/[0.04] border-white/[0.08]"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Leak / Refill Rate: +1 token every 800ms</span>
              <span className="text-emerald-400">● Ingress Active</span>
            </div>
          </div>

          {/* Interactive Trigger Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSendBurst(1)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all cursor-pointer"
            >
              Send 1 Request
            </button>
            <button
              onClick={() => handleSendBurst(5)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-mono text-xs hover:border-amber-400 hover:bg-white/[0.1] transition-all cursor-pointer"
            >
              Burst 5 Requests
            </button>
          </div>

          {/* Live Edge Request Stream Log */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
              EDGE INGRESS AUDIT STREAM:
            </span>
            <div className="p-3 bg-[#08090C] rounded-xl border border-white/[0.06] space-y-1.5 font-mono text-[11px] min-h-[140px]">
              {requestLog.map((log) => (
                <div key={log.id} className="flex items-start gap-2">
                  <span
                    className={
                      log.status === 200 ? "text-emerald-400 font-bold" : "text-red-400 font-bold"
                    }
                  >
                    [{log.status}]
                  </span>
                  <span className="text-zinc-300 truncate">{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
