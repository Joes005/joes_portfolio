import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, Copy, Check, MessageSquare, 
  Calendar, ShieldCheck, Clock, Mail 
} from "lucide-react";
import HwText from "../Pamidor/HwText";
import AnimatedDoor from "../Pamidor/AnimatedDoor";

export default function FinalCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("levinjoeshwa.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="w-full bg-night text-canvas py-24 lg:py-36 border-b border-white/[0.08] relative overflow-hidden">
      {/* Soft Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>FINAL CALL TO ACTION · OPEN FOR PRODUCTION</span>
          </div>

          {/* Monumental Headline with kinetic wave */}
          <div className="select-none">
            <h2 className="font-funnel font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.92] text-white tracking-tight uppercase">
              <span className="block">
                <HwText text="HAVE A PROJECT" baseColor="#FFFFFF" flashColor="#D12424" />
              </span>
              <span className="block mt-2 text-neutral-400">
                <HwText text="IN MIND?" baseColor="#9CA3AF" flashColor="#D12424" />
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-serif italic text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you need a high-throughput financial portal, an autonomous AI copilot, or full-stack software development from day one.
          </p>

          {/* Kinetic OPEN THE DOOR Animated Element */}
          <div className="py-4 flex justify-center">
            <AnimatedDoor />
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* Direct Project Inquiry Route */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-space text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-xl group"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* Quick 1-Click Copy Email Button with Visual Confirmation */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/[0.15] bg-white/[0.04] text-white hover:border-accent hover:text-accent font-space text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">EMAIL COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>COPY: LEVINJOESHWA.DEV@GMAIL.COM</span>
                </>
              )}
            </button>
          </div>

          {/* SLA & Timezone Trust Guarantees */}
          <div className="pt-10 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-3 gap-6 font-space text-xs text-neutral-400">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>12-HOUR GUARANTEED REPLY</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% CONFIDENTIAL &amp; NDA READY</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>WORKING GLOBALLY / ALL TIMEZONES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
