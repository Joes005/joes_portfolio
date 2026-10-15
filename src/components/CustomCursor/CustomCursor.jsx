import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function CustomCursor() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [cursorState, setCursorState] = useState("DEFAULT");
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring physics for cursor position
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        setCursorState(type ? type.toUpperCase() : "LINK");
      } else if (e.target.closest("a, button, [role='button'], input, textarea")) {
        setCursorState("LINK");
      } else {
        setCursorState("DEFAULT");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isFinePointer, isVisible, cursorX, cursorY]);

  if (!isFinePointer || !isVisible) return null;

  const isView = cursorState === "VIEW" || cursorState === "PROJECT";
  const isDrag = cursorState === "DRAG";
  const isLink = cursorState === "LINK";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isView ? 76 : isDrag ? 60 : isLink ? 42 : 24,
          height: isView ? 76 : isDrag ? 60 : isLink ? 42 : 24,
          backgroundColor: isView 
            ? "rgba(245, 158, 11, 0.9)" 
            : isDrag 
            ? "rgba(16, 185, 129, 0.85)" 
            : isLink 
            ? "rgba(255, 255, 255, 0.12)" 
            : "rgba(255, 255, 255, 0.04)",
          borderColor: isView 
            ? "rgba(255, 255, 255, 0.6)" 
            : isDrag 
            ? "rgba(255, 255, 255, 0.5)" 
            : isLink 
            ? "rgba(245, 158, 11, 0.5)" 
            : "rgba(255, 255, 255, 0.2)",
          borderWidth: isView || isDrag ? 0 : 1,
          backdropFilter: isLink || isView ? "blur(4px)" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {isView && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-black uppercase animate-pulse">
            INSPECT
          </span>
        )}
      </motion.div>

      {/* Center inner pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isView || isDrag ? 0 : isLink ? 1.4 : 1,
          backgroundColor: isLink ? "#F59E0B" : "#FFFFFF",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </div>
  );
}
