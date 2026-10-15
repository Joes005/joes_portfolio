import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import HwText from "../../components/Pamidor/HwText";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-canvas text-ink">
      <span className="font-space text-xs font-bold uppercase tracking-widest text-accent mb-3">
        ERROR 404 · INVALID ROUTE
      </span>

      <h1 className="font-funnel text-5xl sm:text-7xl font-black uppercase text-ink tracking-tight mb-4">
        <HwText text="PAGE NOT FOUND" flashColor="#D12424" />
      </h1>

      <p className="font-serif italic text-base sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
        The route you are attempting to access does not exist or has been relocated to another section.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-canvas transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-rule text-ink font-space text-xs font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
        >
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
}
