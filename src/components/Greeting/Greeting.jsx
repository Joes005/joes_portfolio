import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons/SocialIcons";
import { greeting, socialMediaLinks } from "../../portfolio";
import GreetingIllustration from "./GreetingIllustration";

export default function Greeting() {
  const socialIcons = [
    {
      name: "GitHub",
      url: socialMediaLinks.github,
      icon: <GithubIcon className="w-5 h-5" />,
      color: "hover:text-[#333] hover:border-[#333] dark:hover:text-white dark:hover:border-white"
    },
    {
      name: "LinkedIn",
      url: socialMediaLinks.linkedin,
      icon: <LinkedinIcon className="w-5 h-5" />,
      color: "hover:text-[#0077B5] hover:border-[#0077B5]"
    },
    {
      name: "Gmail",
      url: `mailto:${socialMediaLinks.gmail}`,
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-[#EA4335] hover:border-[#EA4335]"
    },
    {
      name: "Twitter",
      url: socialMediaLinks.twitter,
      icon: <TwitterIcon className="w-5 h-5" />,
      color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]"
    }
  ];

  return (
    <section id="greeting" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for New Projects & Engineering Roles</span>
            </div>

            {/* Main Greeting Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {greeting.title}{" "}
              <motion.span
                className="inline-block origin-bottom-right"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </h1>

            {/* Role Title */}
            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400">
              {greeting.role}
            </p>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {greeting.subTitle}
            </p>

            {/* Social Media Link Icons */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              {socialIcons.map(
                (item) =>
                  item.url && (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className={`p-3 rounded-full border border-slate-300/80 dark:border-white/10 text-slate-600 dark:text-slate-300 bg-white dark:bg-white/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all ${item.color}`}
                    >
                      {item.icon}
                    </a>
                  )
              )}
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="folio-btn folio-btn-primary gap-2">
                <span>CONTACT ME</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={greeting.resumeLink}
                className="folio-btn folio-btn-secondary gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>SEE MY RESUME</span>
              </a>

              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              >
                Explore Projects ↓
              </a>
            </div>
          </motion.div>

          {/* Right Vector Illustration Column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <GreetingIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
