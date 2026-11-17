"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaLayerGroup } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-[#0f131f]/30 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
            About & Education
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
            Building Modern Scalable Systems with Engineering Rigor
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
            A developer who combines rigorous scientific foundations from Adamjee Govt. Science College with modern full-stack web and agentic AI architectures.
          </p>
        </div>

        {/* Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr dark:from-cyan-500 dark:via-blue-600 dark:to-purple-600 from-blue-600 to-indigo-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border dark:border-[#1e263d] border-slate-200 p-2 dark:bg-[#080a11] bg-slate-50 shadow-xl">
                <Image
                  src="/11111111111.jpg"
                  alt="Mahad Khan"
                  width={600}
                  height={700}
                  className="w-full h-72 sm:h-96 object-cover rounded-xl transition duration-500 group-hover:scale-105"
                />
                <div className="p-3 text-center">
                  <p className="text-sm font-bold dark:text-white text-slate-900">Mahad Khan</p>
                  <p className="text-xs dark:text-cyan-400 text-blue-600 font-mono mt-0.5">Full Stack Developer + AI Architect</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
              Transforming Ideas Into Clean, High-Velocity Digital Products.
            </h3>
            
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
              Hello! I am <strong className="dark:text-cyan-400 text-blue-600">Mahad Khan</strong>, an accomplished Full Stack Developer and Certified AI Architect. I specialize in building responsive, modern, and performant web applications with seamless frontend user interfaces and robust backend integration.
            </p>

            <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-sm sm:text-base">
              I am actively expanding my software engineering mastery through the prestigious <strong className="dark:text-cyan-400 text-indigo-600">Governor House Karachi Information Technology ( IT ) Program</strong>, and achieved the official <strong className="dark:text-white text-slate-900">PCAOF (Panaversity Certified Agentic and Orchestrated Foundations)</strong> certification, validating deep expertise in autonomous AI agent systems, orchestration, and next-generation cloud architectures.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 dark:text-cyan-300 text-blue-700 font-semibold">
                ✓ Full Stack Developer
              </span>
              <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 dark:text-cyan-300 text-blue-700 font-semibold">
                ✓ AI Architect
              </span>
              <span className="px-3 py-1 rounded-lg dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 dark:text-cyan-300 text-blue-700 font-semibold">
                ✓ PCAOF Certified
              </span>
            </div>
          </motion.div>

        </div>

        {/* Foundational Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Pillar 1: Full Stack */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="spotlight-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl dark:bg-cyan-500/10 bg-blue-50 border dark:border-cyan-500/30 border-blue-200 dark:text-cyan-400 text-blue-600 flex items-center justify-center text-xl mb-4">
                <FaLayerGroup />
              </div>
              <h4 className="text-base font-bold dark:text-white text-slate-900">Full Stack Engineering</h4>
              <p className="text-xs dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                Building responsive, scalable web applications with Next.js App Router, SSR, REST endpoints, and headless Sanity database schemas.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t dark:border-[#1e263d] border-slate-100 text-[11px] font-mono dark:text-cyan-400 text-blue-600 font-semibold">
              Next.js • React • Tailwind
            </div>
          </motion.div>

          {/* Pillar 2: AI Architecture */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="spotlight-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl dark:bg-blue-500/10 bg-indigo-50 border dark:border-blue-500/30 border-indigo-200 dark:text-blue-400 text-indigo-600 flex items-center justify-center text-xl mb-4">
                <FaBrain />
              </div>
              <h4 className="text-base font-bold dark:text-white text-slate-900">AI Agent Architecture</h4>
              <p className="text-xs dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                Specialized in multi-agent orchestration, autonomous workflows, and LLM application integrations certified under Panaversity PCAOF.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t dark:border-[#1e263d] border-slate-100 text-[11px] font-mono dark:text-blue-400 text-indigo-600 font-semibold">
              PCAOF • Agents • Python
            </div>
          </motion.div>

          {/* Pillar 3: IT Program */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="spotlight-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl dark:bg-purple-500/10 bg-purple-50 border dark:border-purple-500/30 border-purple-200 text-purple-500 flex items-center justify-center text-xl mb-4">
                <FaGraduationCap />
              </div>
              <h4 className="text-base font-bold dark:text-white text-slate-900">Governor House IT Program</h4>
              <p className="text-xs dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                Information Technology ( IT ) program in Karachi, rigorously mastering TypeScript, Cloud Native, and Generative AI paradigms.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t dark:border-[#1e263d] border-slate-100 text-[11px] font-mono text-purple-500 font-semibold">
              Cloud Native • TypeScript • AI
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
