import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase, GraduationCap, Award, Trophy, 
  MapPin, CheckCircle2, ArrowRight, ArrowUpRight, 
  Calendar, ShieldCheck, Terminal, Cpu 
} from "lucide-react";
import { workExperiences, educationInfo, achievementSection } from "../../portfolio";
import HwText from "../../components/Pamidor/HwText";

export default function ExperiencePage() {
  return (
    <div className="w-full bg-canvas text-ink pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 space-y-24">
        {/* Page Hero */}
        <div className="border-b border-rule pb-12 space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>EXPERIENCE &amp; LEARNING — WORK, INTERNSHIPS &amp; DELIVERIES</span>
          </div>

          <h1 className="font-funnel text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-ink tracking-tight leading-[0.92]">
            <HwText text="EXPERIENCE &amp; LEARNING" flashColor="#D12424" />
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">
              <HwText text="&amp; PROVEN DELIVERIES." flashColor="#D12424" />
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-light leading-relaxed">
            A comprehensive record of professional engineering roles, independent client deployments, academic honors, and verified technical milestones.
          </p>
        </div>

        {/* 1. Professional Experience Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
              PROFESSIONAL ROLES &amp; CLIENT DELIVERIES
            </h2>
            <Briefcase className="w-5 h-5 text-accent" />
          </div>

          <div className="space-y-8">
            {workExperiences.experience.map((exp, idx) => (
              <div
                key={exp.role}
                className="p-8 sm:p-10 rounded-3xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-space font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                        {exp.badge}
                      </span>
                      <span className="font-space text-xs text-neutral-500 font-semibold">
                        {exp.date}
                      </span>
                    </div>

                    <h3 className="font-funnel text-xl sm:text-2xl font-bold uppercase text-ink tracking-tight">
                      {exp.company}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-space text-neutral-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="font-funnel text-lg sm:text-xl font-bold uppercase text-accent">
                      {exp.role}
                    </div>

                    <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {exp.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-rule">
                      {exp.descBullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-space text-neutral-600 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/[0.05] border border-rule"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Education Section */}
        <div className="pt-12 border-t border-rule space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
              ACADEMIC EDUCATION &amp; HONORS
            </h2>
            <GraduationCap className="w-5 h-5 text-accent" />
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-night text-canvas border border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.1]">
              <div>
                <h3 className="font-funnel text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                  {educationInfo.schools[0].schoolName}
                </h3>
                <div className="font-space text-xs text-neutral-400 mt-1">
                  {educationInfo.schools[0].subHeader}
                </div>
              </div>

              <div className="font-space text-xs font-semibold text-accent shrink-0">
                {educationInfo.schools[0].duration} • {educationInfo.schools[0].location}
              </div>
            </div>

            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {educationInfo.schools[0].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              {educationInfo.schools[0].descBullets.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-300 space-y-1">
                  <CheckCircle2 className="w-4 h-4 text-accent mb-2" />
                  <div>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Achievements & Certifications */}
        <div className="pt-12 border-t border-rule space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <h2 className="font-funnel text-2xl sm:text-4xl font-bold uppercase text-ink tracking-tight">
              CERTIFICATIONS &amp; AWARDS
            </h2>
            <Award className="w-5 h-5 text-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementSection.achievementsCards.map((ach) => (
              <div
                key={ach.title}
                className="p-8 rounded-2xl bg-black/[0.015] dark:bg-white/[0.025] border border-rule hover:border-accent/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-space font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      {ach.badge}
                    </span>
                    <span className="font-space text-xs text-neutral-500 font-semibold">
                      {ach.date}
                    </span>
                  </div>

                  <h3 className="font-funnel text-xl font-bold uppercase text-ink tracking-tight mb-2">
                    {ach.title}
                  </h3>

                  <div className="font-space text-xs font-semibold text-neutral-500 mb-3">
                    ISSUED BY · {ach.issuer}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {ach.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-rule flex items-center justify-between font-space text-xs">
                  <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    VERIFIED CREDENTIAL
                  </span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent hover:text-ink transition-colors flex items-center gap-1"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-night text-canvas border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-space text-xs font-bold uppercase tracking-widest text-accent mb-2">
              LOOKING TO HIRE A PROVEN ENGINEER?
            </div>
            <h3 className="font-funnel text-2xl sm:text-4xl font-black uppercase text-white">
              Let's talk about how I can bring speed and reliability to your team.
            </h3>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-space text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-md shrink-0"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
