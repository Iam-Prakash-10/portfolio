import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            My professional path across engineering roles, freelance software projects, and academic foundations.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="relative pl-8 md:pl-10 group"
            >

              {/* Timeline Marker Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 shadow-md shadow-cyan-500/30 transition-colors"
              >
                {item.type === 'Education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-300 shadow-xl"
              >

                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    {item.period && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                    )}
                    {item.location && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-6">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <motion.span
                      key={tIdx}
                      whileHover={{ scale: 1.06, y: -1 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] border border-white/[0.08] rounded-md text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
