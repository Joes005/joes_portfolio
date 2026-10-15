import React from "react";
import HwText from "./HwText";
import { skillsSection, techStack } from "../../portfolio";

export default function PamidorSkillset() {
  const skills = [
    {
      num: "01",
      title: "Distributed Architecture",
      desc: "From “we have an idea” to modular microservices, transactional guarantees, and systems built to scale from day one."
    },
    {
      num: "02",
      title: "Transactional Backends & Data",
      desc: "Strict ACID compliance, row-level locks, zero ledger drift, and sub-40ms indexed queries using MySQL, Redis, Node.js & Laravel."
    },
    {
      num: "03",
      title: "Reactive UI & Web Performance",
      desc: "Clear interfaces for real behavior, weird edge cases, and high-frequency screens built with React 19, zero layout shift, and 60fps interactions."
    },
    {
      num: "04",
      title: "AI Engineering & Vector RAG",
      desc: "Autonomous LLM tool-calling, vector embeddings, streaming SSE protocols, and prompt guardrails that accelerate business operations."
    }
  ];

  return (
    <section
      id="skillset"
      data-cursor-invert="true"
      className="relative flex min-h-[100svh] w-full flex-col justify-center bg-night text-canvas py-16 lg:py-32"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Heading - Exact Pamidor: Skillset */}
        <div>
          <h2 className="font-funnel text-3xl sm:text-5xl font-bold tracking-tight text-white">
            <HwText text="Skillset" />
          </h2>
        </div>

        {/* Rule Divider */}
        <div
          aria-hidden="true"
          className="h-[1.5px] w-full bg-[var(--night-hr)] mt-8 lg:mt-10"
        />

        {/* Numbered 5-Column Grid List - Exact Pamidor Structure */}
        <ul className="overflow-hidden">
          {skills.map((skill, idx) => (
            <li key={skill.num} className="group">
              <div className="py-8 lg:py-12 transition-opacity duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-baseline gap-y-3 lg:gap-x-6">
                  {/* Column 1: Number 01 */}
                  <span className="font-space text-sm font-mono text-neutral-400">
                    {skill.num}
                  </span>

                  {/* Column 2: Title */}
                  <span className="font-funnel text-2xl sm:text-3xl font-bold text-white lg:col-span-2 group-hover:text-accent transition-colors">
                    <HwText text={skill.title} />
                  </span>

                  {/* Column 3: Description */}
                  <span className="text-sm sm:text-base text-neutral-300 leading-relaxed lg:col-span-2 font-light">
                    {skill.desc}
                  </span>
                </div>
              </div>

              {/* Rule divider */}
              <div
                aria-hidden="true"
                className="h-[1.5px] w-full bg-[var(--night-hr)]"
              />
            </li>
          ))}
        </ul>

        {/* Pamidor Closing Tagline */}
        <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-serif italic text-lg sm:text-xl text-neutral-400">
            Consistency, persistence, and technical problem solving that scales with velocity.
          </p>

          {/* Software tech tags */}
          <div className="flex flex-wrap gap-2">
            {skillsSection.softwareSkills.slice(0, 8).map((tech) => (
              <span
                key={tech.skillName}
                className="px-3 py-1 rounded-full text-xs font-space font-medium uppercase tracking-wider bg-white/[0.05] border border-white/[0.08] text-neutral-300 hover:border-accent hover:text-white transition-colors"
              >
                {tech.skillName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
