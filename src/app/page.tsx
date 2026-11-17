"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Global cursor spotlight tracking across spotlight-card elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".spotlight-card");
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[550px] h-[550px] dark:bg-cyan-500/10 bg-blue-400/10 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500"></div>
      <div className="fixed bottom-1/3 right-10 w-[550px] h-[550px] dark:bg-blue-600/10 bg-indigo-300/10 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500"></div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-theme-grid pointer-events-none -z-20 transition-all duration-300"></div>

      {/* Main Page Layout */}
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
