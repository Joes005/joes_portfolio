import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return prev + 6;
      });
    }, 35);

    const stepInterval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -15,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090C] text-foreground select-none px-6"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Monogram / Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-amber-400 mx-auto mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            JJ
          </div>
          <span className="font-display text-2xl font-extrabold tracking-tight text-white block">
            JIM JOEL
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 mt-1 block">
            Systems & Full Stack IC
          </span>
        </motion.div>

        {/* Technical Boot Steps */}
        <div className="flex items-center gap-4 mb-5 font-mono text-xs text-zinc-500">
          {["01 INGRESS", "02 RUNTIME", "03 SCHEMAS", "04 READY"].map((item, idx) => {
            const num = idx + 1;
            const isActive = step === num;
            const isDone = step > num;
            return (
              <span
                key={item}
                className={`text-[10px] transition-colors duration-150 ${
                  isActive
                    ? "text-amber-400 font-bold"
                    : isDone
                    ? "text-zinc-300"
                    : "text-zinc-700"
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#141722] rounded-full overflow-hidden mb-3 border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Status text & percentage */}
        <div className="flex items-center justify-between w-full font-mono text-[11px] text-zinc-500">
          <span>INITIALIZING SYSTEM TELEMETRY</span>
          <span className="text-amber-400 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
