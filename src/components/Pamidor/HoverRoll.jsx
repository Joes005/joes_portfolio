import React from "react";
import { motion } from "framer-motion";

/**
 * Pamidor signature kinetic rolling text component.
 * On hover, each character slides up and is replaced by a clone from below with a subtle stagger.
 */
export default function HoverRoll({
  text,
  className = "",
  activeClassName = "",
  staggerDelay = 0.015,
  as = "span"
}) {
  const letters = Array.from(text);

  return (
    <motion.span
      className={`group/roll relative inline-flex overflow-hidden cursor-pointer select-none leading-tight ${className}`}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* Primary visible text row that slides up on hover */}
      <span className="inline-flex" aria-hidden="false">
        {letters.map((char, index) => (
          <motion.span
            key={`top-${index}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/roll:-translate-y-full"
            style={{
              transitionDelay: `${index * staggerDelay}s`,
              whiteSpace: char === " " ? "pre" : "normal"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* Duplicate hidden text row that slides in from below on hover */}
      <span className="absolute top-0 left-0 inline-flex" aria-hidden="true">
        {letters.map((char, index) => (
          <motion.span
            key={`bottom-${index}`}
            className={`inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/roll:translate-y-0 ${activeClassName}`}
            style={{
              transitionDelay: `${index * staggerDelay}s`,
              whiteSpace: char === " " ? "pre" : "normal"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
