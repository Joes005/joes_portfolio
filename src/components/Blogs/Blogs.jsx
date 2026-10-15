import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogSection } from "../../portfolio";

export default function Blogs() {
  if (!blogSection.display) return null;

  return (
    <section id="blogs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {blogSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            {blogSection.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Blogs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogSection.blogs.map((blog, idx) => (
            <motion.a
              key={idx}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#151D30] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {blog.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                {blog.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Read Article Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
