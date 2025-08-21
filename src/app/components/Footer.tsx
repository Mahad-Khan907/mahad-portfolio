"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineAttachEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const navItemVariant = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        
        
        
            <h1 className="text-2xl font-bold hover:text-cyan-400 cursor-pointer">
              Mahad<span className="text-cyan-400">.</span>
            </h1>
        
      
        {/* Footer Info */}
        <div className="w-full border-t-2 border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Email */}
          <div className="flex items-center gap-2">
            <MdOutlineAttachEmail className="text-2xl text-cyan-400" />
            <span className="text-sm italic">khan03126569@gmail.com</span>
          </div>

          {/* Center: logo */}
            <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex gap-6 text-2xl"
        >
          <motion.a
            href="https://www.facebook.com/share/16s3tVVwab/"
            target="_blank"
            rel="noopener noreferrer"
            variants={navItemVariant}
            whileHover={{ scale: 1.2, color: "#3b5998" }}
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/khan-khan-5772a8347"
            target="_blank"
            rel="noopener noreferrer"
            variants={navItemVariant}
            whileHover={{ scale: 1.2, color: "#0e76a8" }}
          >
            <SiLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/Mahad-Khan907/"
            target="_blank"
            rel="noopener noreferrer"
            variants={navItemVariant}
            whileHover={{ scale: 1.2, color: "#6e5494" }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

          

          {/* Right: Links */}
          <div className="flex items-center md:items-end text-sm gap-3">
            <Link href="/privacy"><h1 className="hover:text-cyan-400 cursor-pointer underline">Privacy Policy</h1></Link>
            <Link href="/service"><h2 className="hover:text-cyan-400 cursor-pointer underline">Terms & Services</h2></Link>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} Mahad. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
