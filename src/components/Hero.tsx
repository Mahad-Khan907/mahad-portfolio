"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown, FaPaperPlane, FaGithub, FaCheck, FaCopy, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const snippetCode = `const softwareArchitect: EngineerProfile = {
  name: "Mahad Khan",
  role: "Full Stack Developer + AI Architect",
  certification: "PCAOF (Panaversity Certified Agentic & Orchestrated Foundations)",
  program: "Governor House Information Technology ( IT )",
  coreStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Sanity CMS"],
  specialization: ["Full Stack Web Systems", "Agentic AI Architecture", "API Integration"],
  status: "Available for High-Impact Roles & Contracts"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b dark:border-[#1e263d] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copy & Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >

            {/* PCAOF Certification & Status Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-cyan-950/70 dark:border-cyan-500/40 dark:text-cyan-300 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold shadow-xs">
                <FaShieldAlt className="text-amber-400 text-xs" />
                <span>PCAOF Certified AI Architect</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>

              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full dark:bg-[#0f131f] bg-slate-100 dark:border-[#1e263d] border-slate-200 text-[11px] font-mono dark:text-slate-400 text-slate-600">
                Panaversity Certified
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none dark:text-white text-slate-900">
                Architecting <br />
                <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                  Full Stack & AI Systems
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold dark:text-slate-200 text-slate-700">
                Hi, I'm <strong className="dark:text-white text-slate-900">Mahad Khan</strong>
              </p>
            </div>

            {/* Description */}
            <p className="dark:text-slate-400 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Full Stack Software Developer and <strong className="dark:text-cyan-400 text-blue-600 font-semibold">Certified AI Architect (PCAOF by Panaversity)</strong>. Dedicated to building modern, high-performance web applications and intelligent AI systems. I focus on creating clean, end-to-end digital solutions that turn ideas into impactful reality and deliver great user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:text-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider transition-all dark:shadow-cyan-glow shadow-blue-glow hover:opacity-95 flex items-center gap-2"
              >
                <span>Inspect Projects</span>
                <FaArrowDown className="text-[10px]" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl dark:bg-[#0f131f] dark:hover:bg-[#131828] bg-white hover:bg-slate-50 dark:text-white text-slate-800 font-bold text-xs uppercase tracking-wider border dark:border-[#1e263d] border-slate-300 dark:hover:border-cyan-500/50 hover:border-blue-500 transition-all shadow-xs flex items-center gap-2"
              >
                <FaPaperPlane className="dark:text-cyan-400 text-blue-600 text-xs" />
                <span>Get In Touch</span>
              </a>

              <a
                href="https://github.com/Mahad-Khan907/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl dark:bg-[#0f131f] bg-white border dark:border-[#1e263d] border-slate-300 dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-400 transition-all shadow-xs"
                title="GitHub Repository"
              >
                <FaGithub className="text-base" />
              </a>
            </div>

            {/* Stats Ribbon */}
            <div className="pt-8 border-t dark:border-[#1e263d] border-slate-200 grid grid-cols-3 gap-2 sm:gap-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-sm sm:text-xl md:text-2xl font-extrabold font-mono dark:text-cyan-400 text-blue-600 whitespace-nowrap">PCAOF</div>
                <div className="text-[9px] sm:text-xs dark:text-slate-400 text-slate-500 uppercase font-mono mt-0.5 font-bold whitespace-nowrap">AI Certified</div>
              </div>
              <div>
                <div className="text-sm sm:text-xl md:text-2xl font-extrabold font-mono dark:text-blue-400 text-indigo-600 whitespace-nowrap">Full Stack</div>
                <div className="text-[9px] sm:text-xs dark:text-slate-400 text-slate-500 uppercase font-mono mt-0.5 font-bold whitespace-nowrap">Next.js & React</div>
              </div>
              <div>
                <div className="text-sm sm:text-xl md:text-2xl font-extrabold font-mono text-emerald-500 whitespace-nowrap">Agentic AI</div>
                <div className="text-[9px] sm:text-xs dark:text-slate-400 text-slate-500 uppercase font-mono mt-0.5 font-bold whitespace-nowrap">Systems & SDKs</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Showcase & Interactive Code Sandbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >

            {/* Profile Showcase Card */}
            <div className="spotlight-card p-5 sm:p-6 shadow-2xl relative">

              <div className="flex items-center gap-4 sm:gap-5 pb-5 border-b dark:border-[#1e263d] border-slate-100">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-1 dark:bg-gradient-to-tr dark:from-cyan-500 dark:via-blue-600 dark:to-purple-600 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md flex-shrink-0 avatar-halo">
                  <Image
                    src="/mahad.jpeg"
                    alt="Mahad Khan Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 truncate">Mahad Khan</h3>
                    <span className="px-2 py-0.5 rounded dark:bg-cyan-950/80 dark:border-cyan-500/30 dark:text-cyan-300 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[10px] font-bold">
                      PCAOF
                    </span>
                  </div>
                  <p className="text-xs dark:text-cyan-400 text-blue-600 font-mono font-semibold mt-0.5 truncate">
                    Full Stack Developer & AI Architect
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1.5 text-[11px] sm:text-xs dark:text-slate-400 text-slate-500 font-mono">
                    <span>Karachi, Pakistan</span>
                    <span>•</span>
                    <span className="text-emerald-500 font-medium">Full Stack Architect</span>
                  </div>
                </div>
              </div>

              {/* Tech Orbit Badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-cyan-300 bg-slate-100 border border-slate-200 text-blue-700 font-medium flex items-center gap-1.5">
                  <SiNextdotjs className="text-sm" /> Next.js 15
                </span>
                <span className="px-2.5 py-1 rounded-lg dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-blue-300 bg-slate-100 border border-slate-200 text-indigo-700 font-medium">
                  AI Agentic Systems
                </span>
                <span className="px-2.5 py-1 rounded-lg dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-sky-300 bg-slate-100 border border-slate-200 text-sky-700 font-medium">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded-lg dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-purple-300 bg-slate-100 border border-slate-200 text-purple-700 font-medium">
                  Sanity CMS
                </span>
              </div>

            </div>

            {/* Interactive TypeScript Code Sandbox */}
            <div className="dark:bg-[#0b0e18] bg-white rounded-2xl border dark:border-[#1e263d] border-slate-200 overflow-hidden font-mono text-xs shadow-sm">

              <div className="flex items-center justify-between px-4 py-3 dark:bg-[#111627] bg-slate-50 border-b dark:border-[#1e263d] border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="dark:text-slate-400 text-slate-600 text-[11px] ml-2 font-medium">
                    mahad.engineer.ts
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-[11px] dark:text-slate-400 text-slate-600 hover:text-blue-500 px-2 py-0.5 rounded dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-200 font-semibold shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-500 text-[10px]" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-[10px]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 sm:p-5 dark:text-slate-300 text-slate-800 leading-relaxed overflow-x-auto dark:bg-[#080b13] bg-slate-50/50">
                <p><span className="dark:text-purple-400 text-indigo-600 font-bold">const</span> <span className="dark:text-cyan-300 text-blue-600">softwareArchitect</span>: <span className="dark:text-yellow-300 text-emerald-700 font-semibold">EngineerProfile</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-500 dark:text-emerald-400">"Mahad Khan"</span>,</p>
                <p className="pl-4">title: <span className="text-emerald-500 dark:text-emerald-400">"Full Stack Developer + AI Architect"</span>,</p>
                <p className="pl-4">certification: <span className="text-emerald-500 dark:text-emerald-400">"PCAOF Certified (Panaversity)"</span>,</p>
                <p className="pl-4">coreTech: [<span className="dark:text-cyan-300 text-blue-600">"Next.js"</span>, <span className="dark:text-cyan-300 text-blue-600">"React"</span>, <span className="dark:text-cyan-300 text-blue-600">"TypeScript"</span>, <span className="dark:text-cyan-300 text-blue-600">"Agentic AI"</span>],</p>
                <p className="pl-4">status: <span className="text-emerald-500 dark:text-emerald-400">"Available for Production Deployments"</span></p>
                <p>&#125;;</p>
              </div>

              <div className="px-4 py-2 dark:bg-[#0e1220] bg-slate-50 border-t dark:border-[#1e263d] border-slate-200 flex items-center justify-between text-[11px] dark:text-slate-500 text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Compilation Status: Clean (0 Errors)
                </span>
                <span>TypeScript 5.6</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
