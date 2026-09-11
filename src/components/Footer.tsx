import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070a] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left: Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{personalInfo.name}</p>
              <p className="text-xs text-slate-400 font-mono">Full Stack & AI Engineer</p>
            </div>
          </div>

          {/* Center: Quick navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors group flex items-center gap-2 text-xs cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Designed & built with modern React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
