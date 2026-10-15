import React from "react";
import { motion } from "framer-motion";

export default function GreetingIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Background Soft Glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main SVG Vector Illustration */}
      <motion.svg
        viewBox="0 0 600 500"
        className="w-full h-auto drop-shadow-2xl select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#1C2541" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="chairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Grid Floor */}
        <ellipse cx="300" cy="450" rx="260" ry="40" fill="currentColor" className="text-slate-200/60 dark:text-slate-800/40" />

        {/* Ergonomic Chair Back */}
        <path d="M 270 240 Q 300 230 330 240 L 335 370 Q 300 375 265 370 Z" fill="url(#chairGrad)" />
        <rect x="290" y="370" width="20" height="60" rx="5" fill="#475569" />
        <path d="M 260 430 L 340 430 L 300 395 Z" fill="#334155" />

        {/* Developer Character */}
        {/* Head & Hair */}
        <circle cx="300" cy="180" r="32" fill="#F87171" opacity="0.9" />
        {/* Hair Style */}
        <path d="M 270 180 Q 280 145 315 150 Q 335 155 330 180 Q 315 160 270 180 Z" fill="#1E293B" />
        {/* Headphones */}
        <path d="M 266 170 Q 300 140 334 170" stroke="#6366F1" strokeWidth="6" fill="none" strokeLinecap="round" />
        <rect x="262" y="170" width="8" height="18" rx="4" fill="#818CF8" />
        <rect x="330" y="170" width="8" height="18" rx="4" fill="#818CF8" />

        {/* Body / Hoodie */}
        <path d="M 260 220 Q 300 210 340 220 L 350 310 Q 300 320 250 310 Z" fill="#4F46E5" />
        <path d="M 285 220 L 300 250 L 315 220" stroke="#818CF8" strokeWidth="3" fill="none" />

        {/* Arms typing on keyboard */}
        <path d="M 260 240 Q 240 280 270 300" stroke="#4F46E5" strokeWidth="16" strokeLinecap="round" fill="none" />
        <path d="M 340 240 Q 360 280 330 300" stroke="#4F46E5" strokeWidth="16" strokeLinecap="round" fill="none" />
        <circle cx="272" cy="300" r="8" fill="#F87171" />
        <circle cx="328" cy="300" r="8" fill="#F87171" />

        {/* Desk Table */}
        <rect x="100" y="320" width="400" height="16" rx="8" fill="url(#deskGrad)" />
        <rect x="140" y="336" width="16" height="100" rx="4" fill="#64748B" />
        <rect x="444" y="336" width="16" height="100" rx="4" fill="#64748B" />

        {/* Main Central Screen */}
        <rect x="220" y="170" width="160" height="110" rx="8" fill="url(#monitorGrad)" stroke="#6366F1" strokeWidth="2" />
        <rect x="228" y="178" width="144" height="94" rx="4" fill="url(#screenGrad)" />
        <rect x="290" y="280" width="20" height="40" fill="#475569" />
        <rect x="270" y="318" width="60" height="4" rx="2" fill="#334155" />

        {/* Code Lines on Main Screen */}
        <g opacity="0.9">
          <line x1="236" y1="190" x2="270" y2="190" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
          <line x1="275" y1="190" x2="310" y2="190" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="244" y1="202" x2="330" y2="202" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="244" y1="214" x2="300" y2="214" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="252" y1="226" x2="340" y2="226" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="252" y1="238" x2="315" y2="238" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="244" y1="250" x2="280" y2="250" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="345" cy="250" r="4" fill="#10B981" />
        </g>

        {/* Left Vertical Secondary Screen (Code / Terminal) */}
        <g transform="rotate(6 140 220)">
          <rect x="110" y="150" width="85" height="135" rx="6" fill="url(#monitorGrad)" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="115" y="155" width="75" height="125" rx="3" fill="#030712" />
          {/* Terminal prompt lines */}
          <line x1="122" y1="168" x2="135" y2="168" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="168" x2="175" y2="168" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="122" y1="180" x2="160" y2="180" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="122" y1="192" x2="180" y2="192" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="122" y1="204" x2="155" y2="204" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="122" y1="216" x2="170" y2="216" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="122" y1="228" x2="145" y2="228" stroke="#F43F5E" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="145" y="300" width="12" height="20" fill="#475569" />
          <rect x="135" y="318" width="35" height="3" rx="1.5" fill="#334155" />
        </g>

        {/* Right Secondary Screen (Metrics & Dashboard) */}
        <g transform="rotate(-6 460 220)">
          <rect x="410" y="150" width="95" height="130" rx="6" fill="url(#monitorGrad)" stroke="#EC4899" strokeWidth="1.5" />
          <rect x="416" y="156" width="83" height="118" rx="3" fill="#0F172A" />
          {/* Mini Chart */}
          <path d="M 425 240 L 440 215 L 455 225 L 470 190 L 485 200" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="470" cy="190" r="3" fill="#F43F5E" />
          <line x1="425" y1="172" x2="465" y2="172" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="425" y1="182" x2="480" y2="182" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="450" y="295" width="12" height="25" fill="#475569" />
          <rect x="440" y="318" width="35" height="3" rx="1.5" fill="#334155" />
        </g>

        {/* Laptop on desk */}
        <path d="M 270 305 L 330 305 L 340 318 L 260 318 Z" fill="#94A3B8" />
        <rect x="275" y="310" width="50" height="5" fill="#64748B" rx="1" />

        {/* Coffee Mug with steam */}
        <rect x="380" y="304" width="16" height="16" rx="3" fill="#F59E0B" />
        <path d="M 396 308 Q 402 312 396 316" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M 384 298 Q 386 292 384 286" stroke="#CBD5E1" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M 389 299 Q 391 293 389 287" stroke="#CBD5E1" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Mini Indoor Plant on Desk */}
        <polygon points="120,320 135,320 132,305 123,305" fill="#B45309" />
        <circle cx="127" cy="300" r="7" fill="#10B981" />
        <circle cx="122" cy="296" r="6" fill="#34D399" />
        <circle cx="132" cy="296" r="6" fill="#059669" />

        {/* Floating Developer Badges */}
        {/* React Badge */}
        <g className="animate-float" style={{ animationDelay: "0s" }}>
          <rect x="40" y="70" width="90" height="36" rx="18" fill="#1E293B" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="65" y="93" fill="#06B6D4" fontSize="13" fontFamily="monospace" fontWeight="bold">⚛ React</text>
        </g>

        {/* Node.js / API Badge */}
        <g className="animate-float" style={{ animationDelay: "1.2s" }}>
          <rect x="460" y="60" width="100" height="36" rx="18" fill="#1E293B" stroke="#22C55E" strokeWidth="1.5" />
          <text x="480" y="83" fill="#22C55E" fontSize="13" fontFamily="monospace" fontWeight="bold">⚡ Node.js</text>
        </g>

        {/* AI / Python Badge */}
        <g className="animate-float" style={{ animationDelay: "2.4s" }}>
          <rect x="55" y="380" width="85" height="34" rx="17" fill="#1E293B" stroke="#A855F7" strokeWidth="1.5" />
          <text x="73" y="402" fill="#C084FC" fontSize="12" fontFamily="monospace" fontWeight="bold">🤖 AI & LLM</text>
        </g>

        {/* Cloud / MySQL Badge */}
        <g className="animate-float" style={{ animationDelay: "1.8s" }}>
          <rect x="465" y="370" width="95" height="34" rx="17" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="482" y="392" fill="#FCD34D" fontSize="12" fontFamily="monospace" fontWeight="bold">🐬 MySQL</text>
        </g>
      </motion.svg>
    </div>
  );
}
