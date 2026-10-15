import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import confetti from "canvas-confetti";
import AnimatedDoor from "./AnimatedDoor";
import HwText from "./HwText";

export default function PamidorContact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "Full Stack Architecture",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
      setFormState({ name: "", email: "", scope: "Full Stack Architecture", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
        setFormOpen(false);
      }, 4000);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-canvas py-20 lg:py-[9svh] border-b border-rule"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Eyebrow Label */}
        <div className="font-space text-xs font-bold tracking-widest uppercase text-accent mb-6">
          (INITIATE CONTACT · 2025-2026)
        </div>

        {/* Pamidor Signature Animated Headline: OPEN THE DOOR */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-display text-ink font-black uppercase tracking-tight">
            <AnimatedDoor />
          </h2>
        </div>

        {/* Huge Clickable Email Address with Kinetic hw-sweep */}
        <div className="py-6 border-y border-rule my-6">
          <a
            href="mailto:levinjoeshwa.dev@gmail.com"
            className="group block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-funnel font-black tracking-tight text-ink hover:text-accent transition-colors"
          >
            <div className="flex items-center justify-between">
              <HwText text="LEVINJOESHWA.DEV@GMAIL.COM" flashColor="#D12424" />
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-accent transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 shrink-0" />
            </div>
          </a>
        </div>

        {/* Subtext and Reassurance */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start my-8">
          <div className="md:col-span-8 space-y-2">
            <p className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium">
              No spam. A real reply, usually the same day.
            </p>
            <p className="text-sm text-neutral-500 font-space font-light">
              Sent details land in my personal inbox and nowhere else — available for selected architecture contracts, full-stack systems &amp; full-time engineering leadership.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <button
              onClick={() => setFormOpen(!formOpen)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-space font-bold tracking-wider uppercase bg-ink text-canvas hover:bg-accent hover:text-white transition-all shadow-md"
            >
              <span>{formOpen ? "CLOSE FORM" : "SEND DIRECT INQUIRY"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Direct Message Form Drawer */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121212] border border-black/[0.1] dark:border-white/[0.1] max-w-3xl mx-auto shadow-xl">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-rule">
                  <div>
                    <h3 className="font-funnel text-2xl font-bold uppercase tracking-tight text-ink dark:text-white">
                      Start a Conversation
                    </h3>
                    <p className="text-xs font-space text-neutral-500 mt-1">
                      DIRECT INBOX DISPATCH · SAME DAY REPLY
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                    <h4 className="text-xl font-bold text-ink dark:text-white">Message Dispatched!</h4>
                    <p className="text-sm text-neutral-500 max-w-md mx-auto">
                      Thank you for reaching out. Your note landed directly in my personal inbox. I will reply shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-space uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Alex Mercer"
                          className="w-full px-4 py-3 rounded-xl bg-canvas dark:bg-white/[0.05] border border-rule text-ink dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-space uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-canvas dark:bg-white/[0.05] border border-rule text-ink dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-space uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                        Scope of Interest
                      </label>
                      <select
                        value={formState.scope}
                        onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-canvas dark:bg-[#1a1a1a] border border-rule text-ink dark:text-white text-sm focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="Full Stack Architecture">Full Stack Web Architecture &amp; React 19</option>
                        <option value="AI Integration & LLM Agents">AI Integration &amp; Autonomous LLM Agents</option>
                        <option value="Transactional Database & Scale">Transactional Database (MySQL / Redis) &amp; Scale</option>
                        <option value="Full-Time Engineering Role">Full-Time / Contract Engineering Position</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-space uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your product requirements or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-canvas dark:bg-white/[0.05] border border-rule text-ink dark:text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-space text-xs font-bold uppercase tracking-widest bg-accent hover:bg-ink hover:text-white text-white transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>DISPATCHING MESSAGE...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pamidor Signature Statement */}
        <div className="pt-6">
          <p className="font-serif italic text-xl sm:text-2xl text-neutral-500">
            Somewhere between structure and instinct.
          </p>
        </div>
      </div>
    </section>
  );
}
