import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Rocket, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "Applied AI & RAG Pipelines",
      description: "Designing semantic search engines, multi-document retrieval systems, vector embedding pipelines, and agentic workflows using LangChain and modern LLM APIs."
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Full-Stack Web Engineering",
      description: "Developing responsive, pixel-perfect frontends with React, Next.js, and Tailwind CSS, backed by robust Node.js/Python APIs and modern databases."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "Production Architecture & Speed",
      description: "Delivering high-performance, accessible, and type-safe software with clean modular architecture, CI/CD automation, and cloud deployments."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
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
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging the Gap Between <span className="text-gradient-cyan">AI Capabilities</span> and <span className="text-slate-200">Real-World Software</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Passionate about turning state-of-the-art machine learning concepts into intuitive, high-value user experiences.
          </p>
        </motion.div>

        {/* Grid: Story & Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Left: Bio narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>My Journey & Philosophy</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                My work centers on building practical, high-impact AI applications rather than purely theoretical research. Whether it's building document analysis engines that ingest thousands of pages in seconds, or crafting seamless e-commerce checkout funnels, I prioritize speed, maintainability, and user delight.
              </p>
              <p>
                I thrive in fast-paced environments where I can learn new tools quickly, collaborate with diverse teams, and deliver robust software from concept to deployment.
              </p>
            </div>

            {/* Key Strengths Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "RAG & Semantic Vector Search",
                "Full Stack React & Next.js",
                "RESTful & GraphQL API Design",
                "Prompt Engineering & Agent Loops",
                "High-Speed UI/UX Performance",
                "Automated Cloud Deployments"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 space-y-4"
          >

            {/* Quick Fact: Location */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-colors flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Location</h4>
                <p className="text-xs text-slate-400 mt-0.5">{personalInfo.location} (Open to Global Remote Work & Relocation)</p>
              </div>
            </motion.div>

            {/* Quick Fact: Education */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-colors flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Education</h4>
                <p className="text-xs text-slate-400 mt-0.5">B.Tech in Electronics & Communication (2023–2027)</p>
              </div>
            </motion.div>

            {/* Quick Fact: Code Card Mock */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-colors font-mono text-xs text-slate-300"
            >
              <div className="text-cyan-400 font-semibold mb-2 flex items-center justify-between">
                <span>developer.status</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded animate-pulse">active</span>
              </div>
              <div className="space-y-1 text-slate-400">
                <p><span className="text-purple-400">const</span> engineer = {'{'}</p>
                <p className="pl-4">name: <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-300">"{personalInfo.role}"</span>,</p>
                <p className="pl-4">passions: [<span className="text-cyan-300">"AI"</span>, <span className="text-cyan-300">"FullStack"</span>, <span className="text-cyan-300">"OpenSource"</span>],</p>
                <p className="pl-4">coffeeLover: <span className="text-amber-400">true</span></p>
                <p>{'}'};</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-500/30 w-fit mb-5 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
