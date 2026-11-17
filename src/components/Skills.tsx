"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaBrain, FaServer, FaBolt, FaDatabase, FaNetworkWired, FaCloud, FaGaugeHigh } from "react-icons/fa6";

export default function Skills() {
  const frontendSkills = [
    {
      name: "Next.js 15 (SSR / SSG)",
      level: "95%",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded-lg bg-black text-white font-bold flex items-center justify-center text-xs">
          N
        </div>
      ),
    },
    {
      name: "React.js & Custom Hooks",
      level: "92%",
      iconType: "image",
      iconSrc: "/atom.png",
    },
    {
      name: "TypeScript (Strict Typing)",
      level: "90%",
      iconType: "image",
      iconSrc: "/typescript.png",
    },
    {
      name: "Tailwind CSS (Atomic UI)",
      level: "96%",
      iconType: "image",
      iconSrc: "/tailwind.png",
    },
    {
      name: "HTML5 & Semantic Markup",
      level: "98%",
      iconType: "image",
      iconSrc: "/html.png",
    },
  ];

  const backendSkills = [
    {
      name: "Agentic AI (PCAOF Certified)",
      level: "94%",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center text-xs">
          <FaBrain />
        </div>
      ),
    },
    {
      name: "Python (AI & Automation)",
      level: "88%",
      iconType: "image",
      iconSrc: "/python.png",
    },
    {
      name: "Sanity CMS (Headless DB)",
      level: "90%",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded bg-rose-950 text-rose-400 flex items-center justify-center text-xs">
          <FaDatabase />
        </div>
      ),
    },
    {
      name: "RESTful APIs & Endpoints",
      level: "92%",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded bg-blue-950 text-blue-400 flex items-center justify-center text-xs">
          <FaNetworkWired />
        </div>
      ),
    },
    {
      name: "PHP (Server-Side Logic)",
      level: "80%",
      iconType: "image",
      iconSrc: "/php.png",
    },
  ];

  const toolingSkills = [
    {
      name: "Cursor AI & VS Code",
      level: "Daily",
      iconType: "image",
      iconSrc: "/cursor-ai.png",
    },
    {
      name: "Git & GitHub Versioning",
      level: "Daily",
      iconType: "image",
      iconSrc: "/social.png",
    },
    {
      name: "Vercel Cloud CI/CD",
      level: "Production",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded bg-slate-800 text-white flex items-center justify-center text-xs">
          <FaCloud />
        </div>
      ),
    },
    {
      name: "Figma to Code Translation",
      level: "Pixel-Fit",
      iconType: "image",
      iconSrc: "/figma.png",
    },
    {
      name: "Lighthouse Performance",
      level: "High Speed",
      iconType: "component",
      icon: (
        <div className="w-6 h-6 rounded bg-amber-950 text-amber-400 flex items-center justify-center text-xs">
          <FaGaugeHigh />
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-transparent bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
              Skills & Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
              Technical Ecosystem
            </h2>
          </div>
          <div className="text-xs dark:text-slate-400 text-slate-500 font-mono">
            Strict Modular Standards • 15+ Core Technologies
          </div>
        </div>

        {/* 3 Boxes Grid (Exact Style 5 Pro Fusion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Frontend & Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="spotlight-card p-5 sm:p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b dark:border-[#1e263d] border-slate-200 mb-4">
              <h3 className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2 truncate pr-2">
                <FaReact className="dark:text-cyan-400 text-blue-600 text-base flex-shrink-0" />
                Frontend & Architecture
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800 bg-blue-50 text-blue-700 border border-blue-200 font-bold flex-shrink-0">
                Primary
              </span>
            </div>

            <div className="space-y-3">
              {frontendSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-3 dark:bg-[#080a11] bg-slate-50 rounded-xl border dark:border-[#1e263d] border-slate-200 flex items-center justify-between gap-2 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {skill.iconType === "image" && skill.iconSrc ? (
                      <Image 
                        src={skill.iconSrc} 
                        alt={skill.name} 
                        width={24} 
                        height={24} 
                        className="w-6 h-6 object-contain flex-shrink-0"
                      />
                    ) : (
                      <div className="flex-shrink-0">{skill.icon}</div>
                    )}
                    <span className="text-xs font-semibold dark:text-slate-200 text-slate-800 truncate">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono dark:text-cyan-400 text-blue-600 font-bold flex-shrink-0">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 2: Backend & AI Core */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="spotlight-card p-5 sm:p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b dark:border-[#1e263d] border-slate-200 mb-4">
              <h3 className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2 truncate pr-2">
                <FaServer className="dark:text-blue-400 text-indigo-600 text-base flex-shrink-0" />
                Backend & AI Core
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold flex-shrink-0">
                AI & Data
              </span>
            </div>

            <div className="space-y-3">
              {backendSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-3 dark:bg-[#080a11] bg-slate-50 rounded-xl border dark:border-[#1e263d] border-slate-200 flex items-center justify-between gap-2 hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {skill.iconType === "image" && skill.iconSrc ? (
                      <Image 
                        src={skill.iconSrc} 
                        alt={skill.name} 
                        width={24} 
                        height={24} 
                        className="w-6 h-6 object-contain flex-shrink-0"
                      />
                    ) : (
                      <div className="flex-shrink-0">{skill.icon}</div>
                    )}
                    <span className="text-xs font-semibold dark:text-slate-200 text-slate-800 truncate">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono dark:text-blue-400 text-indigo-600 font-bold flex-shrink-0">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 3: Tooling & Workflow DX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="spotlight-card p-5 sm:p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b dark:border-[#1e263d] border-slate-200 mb-4">
              <h3 className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2 truncate pr-2">
                <FaBolt className="text-emerald-500 text-base flex-shrink-0" />
                Tooling & Workflow DX
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex-shrink-0">
                DX
              </span>
            </div>

            <div className="space-y-3">
              {toolingSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-3 dark:bg-[#080a11] bg-slate-50 rounded-xl border dark:border-[#1e263d] border-slate-200 flex items-center justify-between gap-2 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {skill.iconType === "image" && skill.iconSrc ? (
                      <Image 
                        src={skill.iconSrc} 
                        alt={skill.name} 
                        width={24} 
                        height={24} 
                        className="w-6 h-6 object-contain flex-shrink-0"
                      />
                    ) : (
                      <div className="flex-shrink-0">{skill.icon}</div>
                    )}
                    <span className="text-xs font-semibold dark:text-slate-200 text-slate-800 truncate">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-500 font-bold flex-shrink-0">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
