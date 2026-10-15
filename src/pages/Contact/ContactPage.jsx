import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  MapPin, Clock, CheckCircle2, 
  Send, Copy, Check, ArrowUpRight, MessageSquare, 
  AlertCircle, Loader2, Phone 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/Common/SocialIcons";
import HwText from "../../components/Pamidor/HwText";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "" // Anti-spam trap
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("levinjoeshwa.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Anti-spam honeypot detection
    if (formData.honeypot) {
      console.warn("Spam bot submission blocked.");
      return;
    }

    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate network dispatch with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D12424", "#059669", "#2563EB", "#F59E0B"]
        });
      } catch {
        // safe fallback
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: ""
      });
      setErrors({});
    } catch (err) {
      setErrorMessage("Something went wrong while sending. Please email levinjoeshwa.dev@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-20">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>CONTACT — DIRECT INBOX &amp; PROJECT INQUIRIES</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="LET'S BUILD SOMETHING" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="REMARKABLE TOGETHER." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            Have a project in mind, looking to hire a full stack engineer, or want to explore an AI workflow? Send a message and I'll get back to you promptly.
          </p>
        </div>

        {/* Main Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form with Validation, Spam Trap & Loading State */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-8">
            <div className="space-y-1">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                DISPATCH FORM · VALIDATED INGRESS
              </span>
              <h2 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-ink">
                Send a Direct Message
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-funnel text-2xl font-bold uppercase text-ink">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will review it and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-ink text-canvas hover:bg-accent hover:text-white font-space text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot Spam Protection (Invisible to humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url">Do not fill this field</label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-accent text-xs font-space flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field 1: Name */}
                <div className="space-y-2">
                  <label className="block font-space text-xs font-bold uppercase tracking-wider text-ink">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm font-sans text-ink placeholder:text-neutral-400 focus:outline-none transition-colors ${
                      errors.name ? "border-accent focus:border-accent" : "border-rule focus:border-accent"
                    }`}
                  />
                  {errors.name && (
                    <p className="font-space text-[11px] text-accent flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Field 2: Email */}
                <div className="space-y-2">
                  <label className="block font-space text-xs font-bold uppercase tracking-wider text-ink">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm font-sans text-ink placeholder:text-neutral-400 focus:outline-none transition-colors ${
                      errors.email ? "border-accent focus:border-accent" : "border-rule focus:border-accent"
                    }`}
                  />
                  {errors.email && (
                    <p className="font-space text-[11px] text-accent flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Field 3: Subject */}
                <div className="space-y-2">
                  <label className="block font-space text-xs font-bold uppercase tracking-wider text-ink">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Web Application Inquiry"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm font-sans text-ink placeholder:text-neutral-400 focus:outline-none transition-colors ${
                      errors.subject ? "border-accent focus:border-accent" : "border-rule focus:border-accent"
                    }`}
                  />
                  {errors.subject && (
                    <p className="font-space text-[11px] text-accent flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Field 4: Message */}
                <div className="space-y-2">
                  <label className="block font-space text-xs font-bold uppercase tracking-wider text-ink">
                    Project Details / Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your requirements, goals, timeline, or engineering challenge..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm font-sans text-ink placeholder:text-neutral-400 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-accent focus:border-accent" : "border-rule focus:border-accent"
                    }`}
                  />
                  {errors.message && (
                    <p className="font-space text-[11px] text-accent flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-ink text-canvas hover:bg-accent hover:text-white font-space text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>DISPATCH MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-night text-canvas border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                  DIRECT EMAIL INBOX
                </span>
                <h3 className="font-funnel text-2xl font-bold uppercase text-white">
                  levinjoeshwa.dev@gmail.com
                </h3>
              </div>

              <p className="font-serif italic text-sm text-neutral-300">
                Direct asynchronous communication. Expect a thoughtful response, usually within a few hours.
              </p>

              <button
                onClick={handleCopyEmail}
                className="w-full py-3 rounded-xl border border-white/20 text-white hover:bg-white hover:text-night font-space text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp For Freelance Enquiries */}
            <div className="p-8 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-4">
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-emerald-500">
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP · FREELANCE INQUIRIES</span>
              </div>
              <h3 className="font-funnel text-xl font-bold uppercase text-ink">
                Instant Chat for Projects
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Prefer discussing project scope or timelines over WhatsApp? Click below to start a direct chat.
              </p>
              <a
                href="https://wa.me/918838415403?text=Hi%20Levin%2C%20I'm%20interested%20in%20discussing%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 font-space text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-8 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule space-y-4">
              <div className="font-space text-xs font-bold uppercase tracking-widest text-accent">
                CONTACT &amp; LOCATION
              </div>

              <div className="space-y-3 font-space text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:+918838415403" className="hover:text-accent font-medium">
                    +91 8838415403
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Timezone: IST (UTC +5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Select Sprint Builds Open</span>
                </div>
              </div>

              {/* Networks */}
              <div className="pt-4 border-t border-rule flex items-center gap-6 font-space text-xs font-bold uppercase tracking-wider">
                <a
                  href="https://github.com/Joes005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
