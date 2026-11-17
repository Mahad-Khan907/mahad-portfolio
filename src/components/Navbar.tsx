"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FaDownload, FaEye } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scroll handler for both mobile and desktop
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-colors duration-300 dark:bg-[#080a11]/85 bg-white/85 border-b dark:border-[#1e263d] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brand */}
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, "top")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 rounded-xl p-[1.5px] bg-gradient-to-tr dark:from-cyan-500 dark:via-blue-600 dark:to-purple-600 from-blue-600 to-indigo-600 shadow-sm"
            >
              <div className="w-full h-full dark:bg-[#080a11] bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-base dark:text-cyan-400 text-blue-600">
                MK
              </div>
            </motion.div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors">
                Mahad<span className="dark:text-cyan-400 text-blue-600">.</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest dark:text-slate-400 text-slate-500 uppercase font-semibold">
                Full Stack & AI Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider dark:text-slate-300 text-slate-600">
            <a onClick={(e) => scrollToSection(e, "top")} href="#top" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">Overview</a>
            <a onClick={(e) => scrollToSection(e, "about")} href="#about" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a onClick={(e) => scrollToSection(e, "certifications")} href="#certifications" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 cursor-pointer">
              <span>PCAOF Cert</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] dark:bg-cyan-950 dark:text-cyan-300 bg-blue-50 text-blue-700 border dark:border-cyan-500/40 border-blue-200">AI</span>
            </a>
            <a onClick={(e) => scrollToSection(e, "skills")} href="#skills" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">Skills</a>
            <a onClick={(e) => scrollToSection(e, "services")} href="#services" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">Services</a>
            <a onClick={(e) => scrollToSection(e, "projects")} href="#projects" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">Projects</a>
            <a onClick={(e) => scrollToSection(e, "contact")} href="#contact" className="dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </nav>

          {/* Right Area: Theme Toggle, Socials, CTA */}
          <div className="flex items-center gap-3">

            {/* Icon-Only Theme Switcher Pill */}
            <div className="flex items-center p-1 rounded-xl border dark:border-[#1e263d] border-slate-300 dark:bg-[#0f131f] bg-slate-100 shadow-xs">
              <button
                type="button"
                onClick={() => theme !== "dark" && toggleTheme()}
                aria-label="Dark Mode"
                title="Dark Mode"
                className={`p-2 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center ${theme === "dark"
                  ? "bg-cyan-500 text-black shadow-xs"
                  : "dark:text-slate-400 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                <FaMoon className="text-xs" />
              </button>
              <button
                type="button"
                onClick={() => theme !== "light" && toggleTheme()}
                aria-label="Light Mode"
                title="Light Mode"
                className={`p-2 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center ${theme === "light"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "dark:text-slate-400 text-slate-500 hover:text-slate-900 dark:hover:text-cyan-400"
                  }`}
              >
                <FaSun className="text-xs" />
              </button>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5 pl-2 pr-2 border-r dark:border-[#1e263d] border-slate-200 dark:text-slate-400 text-slate-500 text-sm">
              <a href="https://github.com/Mahad-Khan907/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg dark:hover:text-white hover:text-slate-900 transition-colors" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mahad-khan-5772a8347?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:text-blue-500 transition-colors" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/share/16s3tVVwab/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:text-blue-500 transition-colors" title="Facebook">
                <FaFacebookF />
              </a>
            </div>

            {/* View Resume Button (Opens Viewer with Download Option) */}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-xl dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:text-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider transition-all dark:shadow-cyan-glow shadow-sm hover:opacity-95 items-center gap-1.5 cursor-pointer"
            >
              <FaEye className="text-xs" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg dark:text-slate-300 text-slate-700 focus:outline-none text-xl cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (GPU Accelerated, Zero Lag) */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 border-b dark:border-[#1e263d] border-slate-200 dark:bg-[#080a11] bg-white shadow-2xl transition-all duration-200 ease-in-out ${mobileOpen
          ? "opacity-100 visible translate-y-0 pointer-events-auto"
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="px-6 py-5 space-y-3.5 text-sm font-bold dark:text-slate-200 text-slate-800">
          <a onClick={(e) => scrollToSection(e, "top")} href="#top" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            Overview
          </a>
          <a onClick={(e) => scrollToSection(e, "about")} href="#about" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            About
          </a>
          <a onClick={(e) => scrollToSection(e, "certifications")} href="#certifications" className="block hover:text-blue-500 py-1 flex items-center justify-between transition-colors cursor-pointer">
            <span>PCAOF Cert</span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-400 font-mono">AI</span>
          </a>
          <a onClick={(e) => scrollToSection(e, "skills")} href="#skills" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            Skills
          </a>
          <a onClick={(e) => scrollToSection(e, "services")} href="#services" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            Services
          </a>
          <a onClick={(e) => scrollToSection(e, "projects")} href="#projects" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            Projects
          </a>
          <a onClick={(e) => scrollToSection(e, "contact")} href="#contact" className="block hover:text-blue-500 py-1 transition-colors cursor-pointer">
            Contact
          </a>

          <div className="pt-3 border-t dark:border-[#1e263d] border-slate-200 flex items-center justify-between">
            <div className="flex gap-4 dark:text-slate-400 text-slate-600 text-base">
              <a href="https://github.com/Mahad-Khan907/" target="_blank" rel="noopener noreferrer" className="dark:hover:text-white hover:text-slate-900 transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mahad-khan-5772a8347?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/share/16s3tVVwab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            </div>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg dark:bg-cyan-500 dark:text-black bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <FaEye className="text-xs" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
