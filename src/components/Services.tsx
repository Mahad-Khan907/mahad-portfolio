"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaServer, 
  FaLayerGroup, 
  FaBrain, 
  FaNetworkWired, 
  FaRocket
} from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Frontend Engineering",
      icon: FaLaptopCode,
      iconBg: "dark:bg-cyan-950/60 bg-blue-50 dark:text-cyan-400 text-blue-600 border dark:border-cyan-500/30 border-blue-200",
      description:
        "Building responsive, high-performance user interfaces using React 19, Next.js 15, and Tailwind CSS with fluid interactions.",
      tags: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "02",
      title: "Backend & CMS Architecture",
      icon: FaServer,
      iconBg: "dark:bg-blue-950/60 bg-indigo-50 dark:text-blue-400 text-indigo-600 border dark:border-blue-500/30 border-indigo-200",
      description:
        "Developing robust server-side logic with Node.js, structured headless schemas in Sanity CMS, and fast queries with Neon DB.",
      tags: ["Node.js", "Sanity CMS", "Neon DB", "Server Actions"],
    },
    {
      id: "03",
      title: "Full Stack Web Solutions",
      icon: FaLayerGroup,
      iconBg: "dark:bg-purple-950/60 bg-purple-50 dark:text-purple-400 text-purple-600 border dark:border-purple-500/30 border-purple-200",
      description:
        "End-to-end web engineering unifying frontend interfaces with backend logic into fast, production-ready platforms.",
      tags: ["Full Stack", "SSR / SSG", "Modular UI", "App Architecture"],
    },
    {
      id: "04",
      title: "Agentic AI & Orchestration",
      icon: FaBrain,
      iconBg: "dark:bg-amber-950/60 bg-amber-50 dark:text-amber-400 text-amber-600 border dark:border-amber-500/30 border-amber-200",
      description:
        "Architecting autonomous multi-agent swarms, deterministic workflow pipelines, and PCAOF-certified LLM systems.",
      tags: ["PCAOF Certified", "Agentic AI", "Python", "Workflows"],
    },
    {
      id: "05",
      title: "RESTful API Integration",
      icon: FaNetworkWired,
      iconBg: "dark:bg-rose-950/60 bg-rose-50 dark:text-rose-400 text-rose-600 border dark:border-rose-500/30 border-rose-200",
      description:
        "Designing secure RESTful endpoints, third-party API integrations, and reliable webhook data pipelines.",
      tags: ["RESTful APIs", "Webhooks", "JSON Payloads", "OAuth / Security"],
    },
    {
      id: "06",
      title: "SEO & Cloud Deployment",
      icon: FaRocket,
      iconBg: "dark:bg-emerald-950/60 bg-emerald-50 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
      description:
        "Deploying production applications with zero-downtime CI/CD, search engine meta ranking, and 95+ Lighthouse scores.",
      tags: ["Cloud Deployment", "SEO Optimization", "CI / CD", "Lighthouse 95+"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-[#0f131f]/30 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
            Professional Engineering Services
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
            End-to-end web engineering from high-velocity frontend interfaces to robust backend architectures, autonomous AI agent swarms, and cloud deployments.
          </p>
        </div>

        {/* 6 Services Cards Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="spotlight-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Card Header: Icon + Number Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shadow-xs transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                      <Icon />
                    </div>
                    <span className="font-mono text-xs font-bold dark:text-slate-500 text-slate-400 px-2 py-0.5 rounded-md dark:bg-slate-900/80 bg-slate-100 border dark:border-[#1e263d] border-slate-200">
                      {service.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 dark:group-hover:text-cyan-400 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-3.5 mt-5 border-t dark:border-[#1e263d] border-slate-100 dark:border-opacity-60 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-slate-900/90 dark:border-[#1e263d] dark:text-cyan-300 bg-blue-50/80 text-blue-700 border border-blue-200 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
