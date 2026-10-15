import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Terminal, Database, Cpu, Layers, FileCode2, 
  ExternalLink, Mail, CornerDownLeft, X, Activity, BookOpen
} from "lucide-react";
import { projects } from "../../data/projects";
import { adrRecords } from "../../data/adrs";
import { copyToClipboard } from "../../lib/utils";

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copyFeedback, setCopyFeedback] = useState("");
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Global Esc key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(); // toggle or close
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navigationItems = [
    { id: "work", title: "Selected Work & Case Studies", category: "Navigation", icon: Layers, href: "#work" },
    { id: "architecture", title: "Interactive System Architecture Rail", category: "Navigation", icon: Cpu, href: "#architecture" },
    { id: "benchmarks", title: "Interactive Systems Benchmark Lab", category: "Navigation", icon: Activity, href: "#benchmarks" },
    { id: "adrs", title: "Architectural Decision Records (ADRs)", category: "Navigation", icon: BookOpen, href: "#adrs" },
    { id: "philosophy", title: "Engineering Philosophy & Principles", category: "Navigation", icon: Terminal, href: "#philosophy" },
    { id: "experience", title: "Engineering Career & Journey", category: "Navigation", icon: FileCode2, href: "#experience" },
    { id: "contact", title: "Direct Contact & Consultation", category: "Navigation", icon: Mail, href: "#contact" },
  ];

  const projectItems = projects.map((p) => ({
    id: `project-${p.id}`,
    title: `${p.title} — ${p.tagline}`,
    category: "Project Case Study",
    icon: Database,
    href: `#work`,
    action: () => {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }));

  const adrItems = adrRecords.map((a) => ({
    id: `adr-${a.id}`,
    title: `${a.id}: ${a.title}`,
    category: "Architecture Decision",
    icon: BookOpen,
    href: `#adrs`,
    action: () => {
      const el = document.getElementById("adrs");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }));

  const quickActions = [
    {
      id: "copy-email",
      title: "Copy Direct Email (hello@jimjoel.dev)",
      category: "Action",
      icon: Mail,
      action: () => {
        copyToClipboard("hello@jimjoel.dev");
        setCopyFeedback("Email copied to clipboard!");
        setTimeout(() => setCopyFeedback(""), 2000);
      }
    },
    {
      id: "github",
      title: "View GitHub Profile",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com", "_blank");
      }
    }
  ];

  const allItems = [...navigationItems, ...projectItems, ...adrItems, ...quickActions];

  const filteredItems = query.trim() === ""
    ? allItems.slice(0, 8)
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    if (!item.action || item.id !== "copy-email") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0B0D14] border border-white/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-4 h-4 text-muted flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, or architecture decision..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-muted hover:text-white text-xs font-mono"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10 rounded">
                ESC
              </kbd>
            </div>

            {/* Notification alert if email copied */}
            {copyFeedback && (
              <div className="px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center justify-between">
                <span>{copyFeedback}</span>
              </div>
            )}

            {/* Results List */}
            <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-10 text-center text-xs font-mono text-muted">
                  No matching systems, projects, or commands found for "{query}".
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                        selectedIndex === idx
                          ? "bg-white/10 text-white"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-amber-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-sans font-medium text-white truncate">
                            {item.title}
                          </p>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {selectedIndex === idx && (
                          <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                            <span>Select</span>
                            <CornerDownLeft className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-4">
                <span>Navigation & Systems Index</span>
              </div>
              <div className="flex items-center gap-3">
                <span>[↑↓] Navigate</span>
                <span>[↵] Execute</span>
                <span>[ESC] Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
