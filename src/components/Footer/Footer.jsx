import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { greeting } from "../../portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0B0F19] text-center text-sm text-slate-500 dark:text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Made with love */}
        <p className="flex items-center justify-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline-block animate-pulse" />
          <span>by</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {greeting.username}
          </span>
        </p>

        {/* Template Attribution & Copyright */}
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Crafted with React 19 & Tailwind CSS • Inspired by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            developerFolio
          </a>
        </p>

        {/* Floating Back to Top Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-transform active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
