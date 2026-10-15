import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { copyToClipboard } from "../../lib/utils";
import { 
  Mail, MessageSquare, 
  MapPin, Check, Copy, ArrowUpRight, Send, AlertCircle, Clock 
} from "lucide-react";
import { fadeUp } from "../../lib/animations";

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    handle: "github.com/jimjoel",
    url: "https://github.com",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/jimjoel",
    url: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "WhatsApp",
    handle: "Direct Message",
    url: "https://wa.me/",
    icon: MessageSquare,
  },
];

const ENGAGEMENT_TYPES = [
  "Architecture Consultation",
  "Full Stack SaaS Development",
  "Production AI / LLM Pipeline",
  "High-Concurrency Refactoring",
  "Technical Lead & IC Retainer"
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: ENGAGEMENT_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  const emailAddress = "hello@jimjoel.dev";

  const handleCopyEmail = () => {
    copyToClipboard(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("ERROR");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email.");
      setStatus("ERROR");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage("Please share a brief project summary (min 10 characters).");
      setStatus("ERROR");
      return;
    }

    setErrorMessage("");
    setStatus("SENDING");

    setTimeout(() => {
      setStatus("SENT");
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F59E0B", "#10B981", "#F8FAFC"],
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Column: Direct Channels & Engineering Credentials */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              // 07 — TECHNICAL CONSULTATION
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Let's engineer solutions with{" "}
              <span className="text-gradient-amber">lasting longevity.</span>
            </h2>

            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed mb-6">
              Available for architectural design, high-throughput backend scaling, AI-native SaaS products, and senior technical leadership. Every engagement begins with clear requirements and transparent trade-offs.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-8 bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Response SLA: Guaranteed review within 24 hours</span>
            </div>
          </div>

          {/* Email quick copy pill */}
          <div className="p-4 rounded-2xl bg-[#0E1017] border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">DIRECT INBOX</span>
                <span className="font-mono text-xs sm:text-sm text-white font-semibold truncate">
                  {emailAddress}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#141722] border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400 transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
              VERIFIED CHANNELS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0E1017] border border-white/[0.08] hover:border-amber-400/40 flex items-center justify-between text-xs font-mono text-zinc-300 group transition-all"
                >
                  <div className="flex items-center gap-2">
                    <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    <span>{social.name}</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-4 border-t border-white/[0.08]">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Tamil Nadu, India • Serving Clients Globally (IST / UTC+5:30)</span>
          </div>
        </motion.div>

        {/* Right Column: High-End Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 bg-[#0B0D14] rounded-3xl p-8 sm:p-10 border border-white/10 relative corner-crosshairs"
        >
          {status === "SENT" ? (
            <div className="py-16 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Inquiry Received.
              </h3>
              <p className="text-zinc-400 font-sans max-w-md text-sm leading-relaxed mb-8">
                Thank you for the detailed brief. I personally review every technical proposal and will respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setStatus("IDLE");
                  setFormData({
                    name: "",
                    email: "",
                    projectType: ENGAGEMENT_TYPES[0],
                    message: "",
                  });
                }}
                className="px-6 py-2.5 rounded-full text-xs font-mono bg-[#141722] border border-white/10 text-zinc-300 hover:border-amber-400 transition-colors cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  Initiate Technical Consultation
                </h3>
                <p className="text-xs font-mono text-zinc-500">
                  Outline your goals, timeline, and architectural requirements.
                </p>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E1017] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 font-mono transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E1017] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 font-mono transition-all"
                  />
                </div>
              </div>

              {/* Project Type Select */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                  Engagement Domain
                </label>
                <div className="flex flex-wrap gap-2">
                  {ENGAGEMENT_TYPES.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-amber-400/15 border-amber-400 text-amber-300 font-semibold"
                            : "bg-[#0E1017] border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                  Project Scope & Technical Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the problem domain, technical constraints, target delivery timeline, or stack preferences..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0E1017] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 font-mono transition-all resize-none"
                />
              </div>

              {/* Error state alert if any */}
              {status === "ERROR" && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "SENDING"}
                className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === "SENDING" ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
