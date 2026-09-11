import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit, Layout, Server, Cpu, Layers } from 'lucide-react';
import { techStack } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  const categories = ['All', ...techStack.map(c => c.title)];

  const displayedCategories = activeCategory === 'All'
    ? techStack
    : techStack.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technologies & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools I Use to Build <span className="text-gradient-cyan">Intelligent Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            A carefully curated stack designed for speed, scalability, and seamless AI integration.
          </p>

          {/* Filter Pills with animated sliding backdrop */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="skillsCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl -z-10 shadow-md shadow-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Groups Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((group, groupIdx) => (
              <motion.div
                key={group.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: groupIdx * 0.05,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                    <p className="text-xs text-slate-400">{group.skills.length} core technologies</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-cyan-500/40 transition-colors group flex flex-col justify-between cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                          style={{ backgroundColor: skill.color || '#38bdf8' }}
                        />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
