"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaCopy, FaCheck, FaPaperPlane, FaDownload, FaEye } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "mahadkhan9907@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSucceeded(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to deliver message. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error: Unable to connect to transmission server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-b dark:border-[#1e263d] border-slate-200 dark:bg-transparent bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest dark:text-cyan-400 text-blue-700 font-bold dark:bg-cyan-950/60 bg-blue-50 px-3 py-1 rounded-full border dark:border-cyan-500/30 border-blue-200">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mt-3">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-400 text-slate-600 mt-2">
            Available for full stack engineering roles, AI agent architecture consulting, and enterprise contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Networks */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Email Box */}
            <div className="spotlight-card p-5 sm:p-6">
              <span className="text-xs font-mono uppercase dark:text-slate-400 text-slate-500 block mb-1">
                Direct Official Email
              </span>
              <div className="flex items-center justify-between gap-2 mt-2">
                <span className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs dark:text-cyan-400 text-blue-600 font-mono px-3 py-1 rounded-lg dark:bg-slate-900 bg-blue-50 border dark:border-[#1e263d] border-blue-200 font-bold transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Curriculum Vitae Box */}
            <div className="spotlight-card p-5 sm:p-6">
              <span className="text-xs font-mono uppercase dark:text-slate-400 text-slate-500 block mb-1">
                Official Curriculum Vitae
              </span>
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-bold dark:text-white text-slate-900 block truncate">
                    Mahad_Khan_Resume.pdf
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono truncate block">Full Stack & AI Architect</span>
                </div>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs dark:bg-cyan-500 dark:text-black bg-blue-600 text-white font-mono px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 shadow-xs hover:opacity-90 flex-shrink-0 cursor-pointer"
                >
                  <FaEye className="text-[11px]" />
                  <span>View CV</span>
                </a>
              </div>
            </div>

            {/* Location Box */}
            <div className="spotlight-card p-5 sm:p-6">
              <span className="text-xs font-mono uppercase dark:text-slate-400 text-slate-500 block mb-1">
                Geographic Base
              </span>
              <p className="text-sm font-bold dark:text-white text-slate-900 mt-1 flex items-center gap-2">
                <FaLocationDot className="text-rose-500" />
                <span>Karachi, Sindh, Pakistan</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Open to Global Remote, Hybrid, & Relocation Opportunities.
              </p>
            </div>

            {/* Social Networks */}
            <div className="spotlight-card p-5 sm:p-6">
              <span className="text-xs font-mono uppercase dark:text-slate-400 text-slate-500 block mb-3">
                Verified Social Channels
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/Mahad-Khan907/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl dark:bg-slate-900 bg-slate-100 border dark:border-[#1e263d] border-slate-200 dark:hover:border-white hover:border-slate-400 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
                >
                  <FaGithub className="text-sm" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mahad-khan-5772a8347?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl dark:bg-slate-900 bg-blue-50 border dark:border-[#1e263d] border-blue-200 dark:hover:border-blue-400 hover:border-blue-400 dark:text-slate-300 text-blue-700 dark:hover:text-cyan-400 hover:text-blue-600 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
                >
                  <FaLinkedinIn className="text-sm" /> LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/share/16s3tVVwab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl dark:bg-slate-900 bg-slate-100 border dark:border-[#1e263d] border-slate-200 dark:hover:border-blue-400 hover:border-blue-400 dark:text-slate-300 text-slate-700 dark:hover:text-blue-400 hover:text-blue-600 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
                >
                  <FaFacebookF className="text-sm" /> Facebook
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Node.js SMTP Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="spotlight-card p-5 sm:p-8 lg:p-10 shadow-2xl">
              
              {succeeded ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-3xl mx-auto border border-emerald-500/40 animate-pulse">
                    <FaCheck />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Your message has been delivered directly to my inbox and I will review it and reply shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSucceeded(false)}
                      className="px-6 py-2.5 rounded-xl dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-cyan-400 text-blue-600 font-mono text-xs font-bold transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                      <FaExclamationCircle className="text-sm flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider dark:text-slate-300 text-slate-700 mb-2 font-bold">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Turner"
                        className="w-full px-4 py-3 rounded-xl dark:bg-[#080a11] bg-slate-50 border dark:border-[#1e263d] border-slate-200 dark:text-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none dark:focus:border-cyan-400 focus:border-blue-600 dark:focus:bg-[#0c0f18] focus:bg-white transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider dark:text-slate-300 text-slate-700 mb-2 font-bold">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl dark:bg-[#080a11] bg-slate-50 border dark:border-[#1e263d] border-slate-200 dark:text-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none dark:focus:border-cyan-400 focus:border-blue-600 dark:focus:bg-[#0c0f18] focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider dark:text-slate-300 text-slate-700 mb-2 font-bold">
                      Subject / Project Scope
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Full Stack Engineering Proposal / AI Project"
                      className="w-full px-4 py-3 rounded-xl dark:bg-[#080a11] bg-slate-50 border dark:border-[#1e263d] border-slate-200 dark:text-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none dark:focus:border-cyan-400 focus:border-blue-600 dark:focus:bg-[#0c0f18] focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider dark:text-slate-300 text-slate-700 mb-2 font-bold">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical requirements, goals, timeline, or proposition..."
                      className="w-full px-4 py-3 rounded-xl dark:bg-[#080a11] bg-slate-50 border dark:border-[#1e263d] border-slate-200 dark:text-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none dark:focus:border-cyan-400 focus:border-blue-600 dark:focus:bg-[#0c0f18] focus:bg-white transition-all shadow-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl dark:bg-gradient-to-r dark:from-cyan-500 dark:via-blue-600 dark:to-purple-600 dark:text-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider dark:shadow-cyan-glow shadow-blue-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
