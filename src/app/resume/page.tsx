"use client";

import React from "react";
import Link from "next/link";
import { FaDownload, FaArrowLeft, FaFilePdf, FaPrint, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#080a11] bg-[#f1f5f9] dark:text-slate-100 text-slate-800 transition-colors duration-300">
      {/* Top Navigation & Action Bar */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3.5 border-b dark:border-[#1e263d] border-slate-200 dark:bg-[#0c0f18]/90 bg-white/90 backdrop-blur-md flex items-center justify-between gap-3 shadow-sm">
        {/* Left: Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold dark:bg-slate-900 bg-slate-100 border dark:border-[#1e263d] border-slate-200 dark:hover:text-cyan-400 hover:text-blue-600 transition-colors shadow-xs"
        >
          <FaArrowLeft className="text-[11px]" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Center: File Title Badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs dark:text-slate-300 text-slate-700">
          <FaFilePdf className="text-rose-500 text-sm" />
          <span className="font-bold">Mahad_Khan_Resume.pdf</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full dark:bg-cyan-950/80 bg-blue-50 dark:text-cyan-400 text-blue-600 border dark:border-cyan-500/30 border-blue-200">
            Preview Mode
          </span>
        </div>

        {/* Right: Actions (Download & Print) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold dark:bg-slate-900 bg-slate-100 border dark:border-[#1e263d] border-slate-200 dark:hover:text-cyan-400 hover:text-blue-600 transition-colors cursor-pointer"
            title="Print Resume"
          >
            <FaPrint className="text-[11px]" />
            <span>Print</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold dark:bg-slate-900 bg-slate-100 border dark:border-[#1e263d] border-slate-200 dark:hover:text-cyan-400 hover:text-blue-600 transition-colors"
            title="Open Raw File"
          >
            <FaArrowUpRightFromSquare className="text-[10px]" />
            <span>Raw File</span>
          </a>

          {/* Prominent Download Button */}
          <a
            href="/resume.pdf"
            download="Mahad_Khan_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:text-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:opacity-95 transition-all cursor-pointer"
          >
            <FaDownload className="text-[11px]" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* PDF Viewer Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 flex flex-col">
        <div className="w-full flex-1 rounded-2xl overflow-hidden border dark:border-[#1e263d] border-slate-200 dark:bg-[#0c0f18] bg-white shadow-xl min-h-[75vh] flex flex-col">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0"
            className="w-full flex-1 min-h-[80vh] border-0"
            title="Mahad Khan Resume Viewer"
          />

          {/* Mobile Direct Download Fallback Bar */}
          <div className="p-3 text-center border-t dark:border-[#1e263d] border-slate-200 text-xs dark:text-slate-400 text-slate-600 flex flex-wrap items-center justify-center gap-2">
            <span>Having trouble previewing on mobile?</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold dark:text-cyan-400 text-blue-600 underline"
            >
              Open in New Tab
            </a>
            <span>or</span>
            <a
              href="/resume.pdf"
              download="Mahad_Khan_Resume.pdf"
              className="font-bold dark:text-cyan-400 text-blue-600 underline"
            >
              Download PDF Directly
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
