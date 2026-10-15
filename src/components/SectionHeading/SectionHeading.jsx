import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left", // 'left' | 'center'
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-16 md:mb-20 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-violet ${isCenter ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-muted leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
