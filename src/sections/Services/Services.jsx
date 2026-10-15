import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { services } from "../../data/services";
import { ArrowUpRight, Check, Code2, Bot, Palette, Briefcase } from "lucide-react";
import { fadeUp } from "../../lib/animations";

const SERVICE_ICONS = {
  "web-dev": Code2,
  "ai-dev": Bot,
  "ui-ux": Palette,
  "business-platforms": Briefcase,
};

function ServiceCard({ service, index }) {
  const Icon = SERVICE_ICONS[service.id] || Code2;
  const cardRef = useRef(null);

  // Subtle interactive cursor reactive glow position inside the card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl p-8 sm:p-10 border border-surface-border bg-surface-primary/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-surface-border-hover flex flex-col justify-between"
    >
      {/* Dynamic Cursor Light Spot on Hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-2xl bg-surface-secondary border border-surface-border flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs font-bold text-muted group-hover:text-accent-violet transition-colors">
            {service.number}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 group-hover:text-accent-violet transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed mb-8">
          {service.tagline}
        </p>

        {/* Deliverables / Capabilities checklist */}
        <div className="space-y-2.5 mb-8">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech tags footer */}
      <div className="relative z-10 pt-6 border-t border-surface-border flex flex-wrap items-center gap-2">
        {service.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-surface-secondary border border-surface-border group-hover:border-accent/30 group-hover:text-white transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        badge="CAPABILITIES"
        title="What I Can Build"
        subtitle="End-to-end engineering services designed to turn ambitious concepts into reliable, production-ready software systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={service.id} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
}
