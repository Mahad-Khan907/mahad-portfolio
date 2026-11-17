"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaArrowUpRightFromSquare,
  FaIndustry,
  FaLaptop,
  FaGraduationCap,
  FaRobot,
  FaUtensils,
  FaBookOpen
} from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "Liberty Mills Limited — Textile Manufacturer",
      category: "corporate",
      categoryBadge: "Enterprise Industry",
      categoryIcon: FaIndustry,
      domain: "libertymillslimited.vercel.app",
      description:
        "Premier vertically integrated textile manufacturing platform with compliance auditing, global export tracking, and modern responsive UI.",
      image: "/projects/liberty-mills.jpg",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Enterprise"],
      liveUrl: "https://libertymillslimited.vercel.app/",
      status: "Production Live",
    },
    {
      id: "project-2",
      title: "MK Web — Direct Laptop Wholesale",
      category: "ecommerce",
      categoryBadge: "B2B Wholesale",
      categoryIcon: FaLaptop,
      domain: "mk-web-bymahad.vercel.app",
      description:
        "Karachi's direct laptop wholesale marketplace featuring high-FPS gaming rigs, ultrabooks, live inventory specs, and fast ordering.",
      image: "/projects/mk-web.jpg",
      tags: ["Next.js", "React 19", "Tailwind CSS", "Wholesale"],
      liveUrl: "https://mk-web-bymahad.vercel.app/",
      status: "Production Live",
    },
    {
      id: "project-3",
      title: "Islamic Session — Royal Quran Academy",
      category: "edtech",
      categoryBadge: "EdTech & Recitation",
      categoryIcon: FaGraduationCap,
      domain: "quranfolder.com",
      description:
        "Global sacred Quran learning academy featuring 1-on-1 worldwide booking, multi-lingual pedagogical tracks, and an Andalusian UI.",
      image: "/projects/islamic-session.jpg",
      tags: ["Next.js", "Tailwind CSS", "Global Booking", "EdTech"],
      liveUrl: "https://www.quranfolder.com/",
      status: "Production Live",
    },
    {
      id: "project-4",
      title: "TaskFlow AI — Autonomous Workspace",
      category: "ai",
      categoryBadge: "Agentic AI Suite",
      categoryIcon: FaRobot,
      domain: "todoapp-bymahad.vercel.app",
      description:
        "AI-driven task management workspace powered by conversational Particle AI, automated recurring schedules, and smart email reminders.",
      image: "/projects/taskflow-ai.png",
      tags: ["Agentic AI", "Particle Agent", "Automation", "Next.js"],
      liveUrl: "https://todoapp-bymahad.vercel.app/",
      status: "Production Live",
    },
    {
      id: "project-5",
      title: "MK Foods — Artisanal Dining",
      category: "food",
      categoryBadge: "Gourmet Dining",
      categoryIcon: FaUtensils,
      domain: "mk-foods.vercel.app",
      description:
        "Interactive culinary ordering web app featuring dynamic menu filters, real-time cart state management, and 30-minute delivery tracking.",
      image: "/projects/mk-foods.jpg",
      tags: ["React 19", "Tailwind CSS", "Dynamic Cart", "Food Tech"],
      liveUrl: "https://mk-foods.vercel.app/",
      status: "Production Live",
    },
    {
      id: "project-6",
      title: "Physical AI & Humanoid Robotics",
      category: "education",
      categoryBadge: "AI Course Textbook",
      categoryIcon: FaBookOpen,
      domain: "book-bymahad.vercel.app",
      description:
        "Spec-driven AI textbook covering Physical AI foundations, ROS 2 architecture, robot simulation in Gazebo & Unity, and embodied humanoid systems.",
      image: "/projects/physical-ai-book.png",
      tags: ["Physical AI", "ROS 2", "Robotics", "Course Book"],
      liveUrl: "https://book-bymahad.vercel.app/",
      status: "Production Live",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-[#0f131f]/30 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
            Verified Deployments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
            Production Web Applications
          </h2>
          <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 mt-2">
            Featured full stack, AI agent, and frontend applications deployed live in production.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => {
            const CategoryIcon = project.categoryIcon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-xl overflow-hidden border dark:border-[#1e263d] border-slate-200 dark:bg-[#0c0f18] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Browser Bar Mockup */}
                  <div className="px-3.5 py-2 dark:bg-[#111625] bg-slate-100 border-b dark:border-[#1e263d] border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-1.5 font-mono text-[10px] dark:text-slate-400 text-slate-600 truncate max-w-[140px] sm:max-w-[180px]">
                        {project.domain}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9.5px] font-mono font-bold dark:bg-emerald-950/80 bg-emerald-50 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live
                    </span>
                  </div>

                  {/* Thumbnail Container (Exact 21/10 ratio to perfectly fit 1024x485 screenshots without cropping/zooming) */}
                  <div className="aspect-[21/10] w-full overflow-hidden dark:bg-slate-950 bg-slate-100 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1024}
                      height={485}
                      className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0c0f18]/80 from-transparent via-transparent to-transparent opacity-40 pointer-events-none"></div>

                    {/* Badge Pill on thumbnail */}
                    <div className="absolute bottom-2 left-2.5">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md dark:bg-[#0f131f]/95 bg-white/95 border dark:border-cyan-500/30 border-blue-200 dark:text-cyan-300 text-blue-700 text-[10px] font-mono font-semibold backdrop-blur-md shadow-xs">
                        <CategoryIcon className="text-[11px]" />
                        <span>{project.categoryBadge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 sm:p-5 pb-2">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9.5px] font-mono px-1.5 py-0.5 rounded dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-cyan-300 bg-blue-50/80 text-blue-700 border border-blue-200 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold dark:text-white text-slate-900 dark:group-hover:text-cyan-400 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="dark:text-slate-400 text-slate-600 text-xs mt-1.5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-4 sm:p-5 pt-1">
                  <div className="pt-3 border-t dark:border-[#1e263d] border-slate-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 dark:bg-slate-900/80 hover:dark:bg-cyan-500/10 dark:text-slate-200 dark:hover:text-cyan-300 border dark:border-[#1e263d] dark:hover:border-cyan-500/40 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border-slate-200 hover:border-blue-300 shadow-xs hover:shadow group/btn"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full dark:bg-cyan-400 bg-blue-600 group-hover/btn:scale-125 transition-transform"></span>
                        <span>Live Preview</span>
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 rounded-lg dark:bg-slate-800/90 bg-white border dark:border-slate-700/60 border-slate-200 group-hover/btn:border-cyan-500/40 group-hover/btn:dark:bg-cyan-950/40 group-hover/btn:bg-blue-100/60 transition-all">
                        <FaArrowUpRightFromSquare className="text-[10px] dark:text-slate-400 dark:group-hover/btn:text-cyan-300 text-slate-500 group-hover/btn:text-blue-600 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
