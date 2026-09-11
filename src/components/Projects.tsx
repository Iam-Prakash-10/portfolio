import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI / ML', 'Full Stack', 'Web Apps'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-cyan">Projects & AI Applications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Real-world applications showcasing applied AI, responsive interfaces, vector databases, and high-performance backend pipelines.
          </p>

          {/* Category Filter with Sliding Pill */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl -z-10 shadow-md shadow-cyan-500/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Project Image Box */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        if (!img.src.endsWith('.svg')) {
                          img.src = project.image.replace('.png', '.svg');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/20 to-transparent opacity-90" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                      <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-sm">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-sm">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlight Bullets */}
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[11px] font-mono bg-white/[0.04] rounded text-slate-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10"
                      aria-label="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
