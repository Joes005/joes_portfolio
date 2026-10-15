import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { splashScreen } from "../../portfolio";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, splashScreen.duration || 1600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center space-y-4"
      >
        {/* Animated Brand Emblem */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-2xl shadow-indigo-500/30 flex items-center justify-center">
          <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[22px] flex items-center justify-center font-mono text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            &lt;L/&gt;
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="font-mono text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400">
          {splashScreen.text}
        </h1>

        {/* Subtext and Loader spinner */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent animate-spin" />
          <span>{splashScreen.subText}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
