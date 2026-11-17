"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 backdrop-blur-2xl transition-colors duration-300 dark:bg-[#080a11]/85 bg-white/85 text-xs dark:text-slate-400 text-slate-500 font-mono border-t dark:border-[#1e263d] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b dark:border-[#1e263d] border-slate-100">
          
          {/* Brand Column */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl dark:bg-gradient-to-tr dark:from-cyan-500 dark:via-blue-600 dark:to-purple-600 dark:text-black bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              MK
            </div>
            <div>
              <span className="dark:text-white text-slate-900 font-bold font-sans text-sm">
                Mahad Khan
              </span>
              <span className="text-slate-400"> / </span>
              <span className="text-[11px] dark:text-cyan-400 text-blue-600 font-semibold">
                Full Stack Developer + AI Architect
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-sans font-semibold">
            <a href="#top" className="hover:text-blue-500 transition-colors">Overview</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#certifications" className="hover:text-blue-500 transition-colors">PCAOF</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/Mahad-Khan907/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg dark:bg-slate-900 bg-slate-100 flex items-center justify-center dark:hover:text-white hover:text-slate-900 transition-colors" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mahad-khan-5772a8347?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg dark:bg-slate-900 bg-slate-100 flex items-center justify-center hover:text-blue-500 transition-colors" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/share/16s3tVVwab/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg dark:bg-slate-900 bg-slate-100 flex items-center justify-center hover:text-blue-500 transition-colors" title="Facebook">
              <FaFacebookF />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg dark:bg-[#131828] bg-blue-50 dark:text-cyan-400 text-blue-600 border dark:border-[#1e263d] border-blue-200 flex items-center justify-center hover:scale-105 transition-all shadow-xs cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="pt-6 text-center text-[11px] dark:text-slate-400 text-slate-500">
          <p>
            © {new Date().getFullYear()} Mahad Khan. Full Stack Architecture & AI Agent Systems.
          </p>
        </div>

      </div>
    </footer>
  );
}
