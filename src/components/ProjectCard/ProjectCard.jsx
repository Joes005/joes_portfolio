import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import ProjectVisualPreview from "./ProjectVisualPreview";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt physics values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      data-cursor="view"
      className="group relative rounded-3xl border border-surface-border bg-surface-primary/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-surface-border-hover hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
    >
      <Link to={`/projects/${project.slug}`} className="block h-full focus:outline-none">
        {/* Project Card Mockup Canvas Header */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full border-b border-surface-border overflow-hidden bg-surface-secondary">
          <ProjectVisualPreview project={project} />

          {/* Interactive hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
              isHovered ? "opacity-40" : "opacity-70"
            }`}
          />

          {/* Top-Right Badge: Category & Year */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#07070A]/80 backdrop-blur-md text-slate-300 border border-surface-border">
              {project.year}
            </span>
          </div>

          {/* Hover View Case Study Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-950 font-display text-xs font-bold shadow-xl"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.div>
        </div>

        {/* Card Body Information */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                {project.category}
              </span>
              <span className="font-mono text-xs text-muted">
                0{index + 1}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-accent-violet transition-colors">
                {project.title}
              </h3>
              <div className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-muted group-hover:text-white group-hover:border-accent group-hover:bg-accent/10 transition-all flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed line-clamp-2 mb-6">
              {project.tagline}
            </p>
          </div>

          {/* Tech stack tags */}
          <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-surface-secondary/80 border border-surface-border group-hover:border-white/10 transition-colors"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
