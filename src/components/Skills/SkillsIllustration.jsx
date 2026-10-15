import React from "react";
import { motion } from "framer-motion";

export default function SkillsIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center p-4">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <motion.svg
        viewBox="0 0 500 450"
        className="w-full h-auto drop-shadow-xl select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>

        {/* Central Connecting Data Lines */}
        <path d="M 250 150 L 150 260" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 250 150 L 350 260" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 150 260 L 250 370" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 350 260 L 250 370" stroke="#818CF8" strokeWidth="2.5" strokeDasharray="6 4" />

        {/* Central Cloud Architecture Node */}
        <g transform="translate(170, 70)">
          <path
            d="M 50 70 A 30 30 0 0 1 95 35 A 45 45 0 0 1 155 45 A 35 35 0 0 1 180 80 A 25 25 0 0 1 170 115 L 50 115 A 25 25 0 0 1 50 70 Z"
            fill="url(#cloudGrad)"
            className="filter drop-shadow-lg"
          />
          <text x="110" y="85" fill="#FFFFFF" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            CLOUD & APIS
          </text>
        </g>

        {/* Frontend / Web App Card (Left) */}
        <g transform="translate(60, 200)">
          <rect x="0" y="0" width="160" height="110" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
          <rect x="0" y="0" width="160" height="24" rx="12" fill="#0F172A" />
          <circle cx="15" cy="12" r="4" fill="#EF4444" />
          <circle cx="28" cy="12" r="4" fill="#F59E0B" />
          <circle cx="41" cy="12" r="4" fill="#10B981" />
          {/* UI wireframe mockup */}
          <rect x="15" y="36" width="60" height="8" rx="2" fill="#38BDF8" />
          <rect x="15" y="52" width="130" height="6" rx="2" fill="#475569" />
          <rect x="15" y="64" width="100" height="6" rx="2" fill="#475569" />
          <rect x="15" y="80" width="55" height="18" rx="4" fill="#6366F1" />
          <rect x="80" y="80" width="55" height="18" rx="4" fill="#0EA5E9" />
        </g>

        {/* Database Cylinders (Right) */}
        <g transform="translate(300, 200)">
          {/* Disk 1 */}
          <ellipse cx="60" cy="20" rx="55" ry="16" fill="url(#dbGrad)" />
          <rect x="5" y="20" width="110" height="25" fill="#059669" />
          <ellipse cx="60" cy="45" rx="55" ry="16" fill="url(#dbGrad)" />
          {/* Disk 2 */}
          <rect x="5" y="45" width="110" height="25" fill="#047857" />
          <ellipse cx="60" cy="70" rx="55" ry="16" fill="url(#dbGrad)" />
          {/* Disk 3 */}
          <rect x="5" y="70" width="110" height="25" fill="#065F46" />
          <ellipse cx="60" cy="95" rx="55" ry="16" fill="url(#dbGrad)" />
          <circle cx="100" cy="40" r="3" fill="#34D399" />
          <circle cx="100" cy="65" r="3" fill="#34D399" />
          <circle cx="100" cy="90" r="3" fill="#34D399" />
          <text x="60" y="60" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            MySQL / ACID
          </text>
        </g>

        {/* AI & Neural Brain / Logic Node (Bottom Center) */}
        <g transform="translate(175, 330)">
          <rect x="0" y="0" width="150" height="85" rx="14" fill="#1E293B" stroke="#A855F7" strokeWidth="2" />
          <text x="75" y="32" fill="#C084FC" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            🧠 AI & RAG
          </text>
          <line x1="20" y1="48" x2="130" y2="48" stroke="#334155" strokeWidth="2" />
          <text x="75" y="68" fill="#F8FAFC" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
            LLM Agents & APIs
          </text>
        </g>

        {/* Floating Code Snippet Card */}
        <g className="animate-float" style={{ animationDelay: "1s" }}>
          <rect x="20" y="90" width="95" height="42" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="28" y="116" fill="#FBBF24" fontSize="11" fontFamily="monospace">
            const app = () =&gt;
          </text>
        </g>

        {/* Floating Git Commit Node */}
        <g className="animate-float" style={{ animationDelay: "2s" }}>
          <rect x="385" y="95" width="95" height="42" rx="8" fill="#1E293B" stroke="#EC4899" strokeWidth="1.5" />
          <text x="400" y="120" fill="#F472B6" fontSize="11" fontFamily="monospace">
            git commit 🚀
          </text>
        </g>
      </motion.svg>
    </div>
  );
}
