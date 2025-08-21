"use client"
import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemVariant = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const mobileItemVariant = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <div className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav className="max-w-7xl flex justify-between items-center lg:px-6 px-1 lg:py-2">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-3xl font-bold cursor-pointer hover:text-cyan-300 [text-shadow:0_0_15px_rgba(34,211,238,0.5)] hover:[text-shadow:0_0_25px_rgba(34,211,238,1)]"
        >
          <a href="/#">
            Mahad<span className="text-blue-400">.</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="lg:flex hidden space-x-12 text-md font-semibold"
        >
          <motion.li variants={navItemVariant} whileHover={{ scale: 1.2 }} className="hover:text-cyan-300 cursor-pointer"><a href="/#">Home</a></motion.li>
          <motion.li variants={navItemVariant} whileHover={{ scale: 1.2 }} className="hover:text-cyan-300 cursor-pointer"><a href="/#about">About</a></motion.li>
          <motion.li variants={navItemVariant} whileHover={{ scale: 1.2 }} className="hover:text-cyan-300 cursor-pointer"><a href="/#skills">Skills</a></motion.li>
          <motion.li variants={navItemVariant} whileHover={{ scale: 1.2 }} className="hover:text-cyan-300 cursor-pointer"><a href="/#projects">Projects</a></motion.li>
          <motion.li variants={navItemVariant} whileHover={{ scale: 1.2 }} className="hover:text-cyan-300 cursor-pointer"><a href="/#contact">Contact</a></motion.li>
        </motion.ul>

        {/* Desktop Socials */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.6 } } }} 
          className="lg:flex gap-3 text-2xl hidden"
        >
          <a href="https://www.facebook.com/share/16s3tVVwab/" target="_blank" rel="noopener noreferrer">
            <motion.h1 variants={navItemVariant} whileHover={{ scale: 1.2 , color: "#3b5998"}} ><FaFacebook /></motion.h1>
          </a>
          <a href="https://www.linkedin.com/in/khan-khan-5772a8347" target="_blank" rel="noopener noreferrer">
            <motion.h2 variants={navItemVariant} whileHover={{ scale: 1.2, color: "#0e76a8" }}><SiLinkedin /></motion.h2>
          </a>
          <a href="https://github.com/Mahad-Khan907/" target="_blank" rel="noopener noreferrer">
            <motion.h2 variants={navItemVariant} whileHover={{ scale: 1.2 , color: "#6e5494"}}><FaGithub /></motion.h2>
          </a>
        </motion.div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <motion.button
            whileTap={{ scale: 0.8, rotate: 90 }}
            onClick={toggleMenu}
            className="focus:outline-none text-3xl text-white"
          >
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="block lg:hidden w-full mt-2"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
              className="flex flex-col space-y-6 text-lg px-4 font-semibold bg-gray-900 p-4 rounded-lg shadow-lg"
            >
              <motion.li variants={mobileItemVariant} whileHover={{ scale: 1.05 }} ><a onClick={()=>setIsOpen(false)} href="/#">Home</a></motion.li>
              <motion.li variants={mobileItemVariant} whileHover={{ scale: 1.05 }} ><a onClick={()=>setIsOpen(false)} href="/#about">About</a></motion.li>
              <motion.li variants={mobileItemVariant} whileHover={{ scale: 1.05 }} ><a onClick={()=>setIsOpen(false)} href="/#skills">Skills</a></motion.li>
              <motion.li variants={mobileItemVariant} whileHover={{ scale: 1.05 }} ><a onClick={()=>setIsOpen(false)} href="/#projects">Projects</a></motion.li>
              <motion.li variants={mobileItemVariant} whileHover={{ scale: 1.05 }} ><a onClick={()=>setIsOpen(false)} href="/#contact">Contact</a></motion.li>
            </motion.ul>

            {/* Mobile Socials */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.6 } } }} 
              className="flex gap-4 text-2xl justify-center mt-4"
            >
              <a href="https://www.facebook.com/share/16s3tVVwab/" target="_blank" rel="noopener noreferrer">
                <motion.h1 variants={navItemVariant} whileHover={{ scale: 1.2 , color: "#3b5998"}}><FaFacebook /></motion.h1>
              </a>
              <a href="https://www.linkedin.com/in/khan-khan-5772a8347" target="_blank" rel="noopener noreferrer">
                <motion.h2 variants={navItemVariant} whileHover={{ scale: 1.2 , color: "#0e76a8"}}><SiLinkedin /></motion.h2>
              </a>
              <a href="https://github.com/Mahad-Khan907/" target="_blank" rel="noopener noreferrer">
                <motion.h2 variants={navItemVariant} whileHover={{ scale: 1.2 , color: "#6e5494"}}><FaGithub /></motion.h2>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
