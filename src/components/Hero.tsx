import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Sparkles,
  Bot,
  Code2,
  Cpu,
  Terminal
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT }
  }
};

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio & Action */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >

            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-cyan-500/10 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6"
            >
              Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
              <br />
              <span className="text-slate-100">{personalInfo.role}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              {personalInfo.tagline} Focused on <span className="text-cyan-300 font-medium">Retrieval-Augmented Generation (RAG)</span>, <span className="text-purple-300 font-medium">intelligent AI agents</span>, and <span className="text-blue-300 font-medium">modern web architecture</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Floating Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400"
            >
              {[
                { icon: <Bot className="w-3.5 h-3.5 text-cyan-400" />, label: "Applied AI" },
                { icon: <Code2 className="w-3.5 h-3.5 text-blue-400" />, label: "Full Stack" },
                { icon: <Cpu className="w-3.5 h-3.5 text-purple-400" />, label: "RAG & LLMs" },
                { icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" />, label: "Clean Architecture" }
              ].map((tag, tIdx) => (
                <motion.span
                  key={tIdx}
                  whileHover={{ scale: 1.05, y: -1 }}
                  transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-colors cursor-default"
                >
                  {tag.icon} {tag.label}
                </motion.span>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Avatar / Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm">

              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 animate-pulse-slow"></div>

              {/* Main Avatar Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/15 shadow-2xl"
              >

                {/* Code Header Bar Mock */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> engineer.config
                  </span>
                </div>

                {/* Avatar Visual */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-full blur-md opacity-50 animate-pulse"></div>
                  <img
                    src={personalInfo.avatar || "/images/profile-pic.png"}
                    alt={personalInfo.name}
                    className="relative w-full h-full object-cover object-center rounded-full border-2 border-cyan-400/50 p-1 shadow-inner bg-slate-900"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/profile-pic.svg";
                    }}
                  />
                  <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0b0f19] flex items-center justify-center shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-wide">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{personalInfo.role}</p>

                  {/* Mini Skill Badges */}
                  <div className="pt-4 flex flex-wrap justify-center gap-1.5">
                    {["Python", "React", "LangChain", "Next.js", "FastAPI"].map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, y: -1 }}
                        transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        className="px-2.5 py-1 text-[11px] font-mono bg-white/[0.05] border border-white/10 rounded-md text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Interactive Status Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Open for Projects
                  </span>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 2 }}
                    className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                  >
                    Hire me <ArrowRight className="w-3 h-3" />
                  </motion.a>
                </div>

              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 sm:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-xl p-5 text-center sm:text-left border border-white/5 hover:border-cyan-500/30 transition-colors shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
