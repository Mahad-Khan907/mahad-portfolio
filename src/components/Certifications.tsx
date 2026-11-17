"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaBrain, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-transparent bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
            Credentials & Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
            Industry Certifications & Academic Honors
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
            Verified technical qualifications in agentic AI architecture, modern software engineering, and scientific education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Flagship Certification: PCAOF Panaversity (Col 1-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 spotlight-card p-7 sm:p-9 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b dark:border-[#1e263d] border-slate-200 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-[11px] sm:text-xs font-mono uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <FaAward /> FLAGSHIP CERTIFICATION
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full dark:bg-emerald-950/80 dark:border-emerald-500/40 dark:text-emerald-300 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1">
                    <FaCheckCircle className="text-[10px]" /> PASSED & VERIFIED
                  </span>
                </div>
                <span className="text-xs font-mono dark:text-slate-400 text-slate-500 font-semibold">Panaversity</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-orange-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <div className="w-full h-full dark:bg-[#080a11] bg-white rounded-xl flex items-center justify-center text-amber-500 text-xl sm:text-2xl font-bold">
                    <FaBrain />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold dark:text-white text-slate-900 leading-snug">
                    PCAOF — Panaversity Certified Agentic and Orchestrated Foundations
                  </h3>
                  <p className="text-xs font-mono dark:text-cyan-400 text-blue-600 mt-1 font-semibold">
                    Global AI Agent Architecture & Multi-Agent Orchestration Standard
                  </p>
                </div>
              </div>

              <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mt-4">
                Successfully passed the prestigious <strong className="dark:text-white text-slate-900">PCAOF exam</strong> by Panaversity. This credential validates rigorous technical expertise in designing autonomous AI agents, multi-agent state machines, structured tool calling, deterministic workflows, and production-ready LLM orchestration.
              </p>

              {/* Competencies Covered */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t dark:border-[#1e263d] border-slate-100 text-xs font-mono">
                <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span>Agentic Systems Design</span>
                </div>
                <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span>Tool Use & API Orchestration</span>
                </div>
                <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span>Autonomous Multi-Agent Swarms</span>
                </div>
                <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span>Deterministic Workflow Pipelines</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t dark:border-[#1e263d] border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <span className="dark:text-slate-400 text-slate-500">Authority: Panaversity</span>
              <span className="dark:text-cyan-400 text-blue-600 font-bold">Credential: Certified AI Architect</span>
            </div>
          </motion.div>

          {/* Education & Other Credentials (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Adamjee Govt. Science College Karachi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="spotlight-card p-6 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b dark:border-[#1e263d] border-slate-100 mb-4">
                  <span className="text-[11px] font-mono dark:text-emerald-400 text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FaBuildingColumns /> ACADEMIC EDUCATION
                  </span>
                  <span className="text-xs font-mono dark:text-slate-400 text-slate-500">Karachi, PK</span>
                </div>

                <h4 className="text-lg font-bold dark:text-white text-slate-900">
                  FSC — Adamjee Govt. Science College Karachi
                </h4>
                <p className="text-xs dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                  Higher Secondary Certificate in Science from Karachi’s premier institution, developing a solid foundation in scientific reasoning, systematic problem-solving, and computational logic.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t dark:border-[#1e263d] border-slate-100 text-[11px] font-mono dark:text-emerald-400 text-emerald-600 font-semibold">
                Field: Science Studies
              </div>
            </motion.div>

            {/* Governor House Karachi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="spotlight-card p-6 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b dark:border-[#1e263d] border-slate-100 mb-4">
                  <span className="text-[11px] font-mono dark:text-cyan-400 text-blue-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FaLaptopCode /> INFORMATION TECHNOLOGY ( IT )
                  </span>
                  <span className="text-xs font-mono dark:text-slate-400 text-slate-500">Sindh Governor House</span>
                </div>

                <h4 className="text-lg font-bold dark:text-white text-slate-900">
                  Governor Sindh Information Technology ( IT ) Program
                </h4>
                <p className="text-xs dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                  Advanced technical cohort specializing in modern TypeScript, Next.js Full Stack App Router development, Serverless APIs, and generative cloud deployments.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t dark:border-[#1e263d] border-slate-100 text-[11px] font-mono dark:text-cyan-400 text-blue-600 font-semibold">
                Focus: Next.js • Cloud Native • AI Applications
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
