"use client";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="overflow-hidden">
    <div className="w-full h-auto lg:p-32 p-10">
      <div className="flex flex-col-reverse lg:flex-row md:justify-between items-center lg:items-start text-white gap-8">
        
        {/* left side */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col space-y-4 text-center lg:text-left"
          >
            <p className="lg:text-2xl text-xl font-semibold">Hello, It's Me🖐</p>
            <h1 className="lg:text-5xl text-3xl font-bold">Mahad Khan</h1>
            <h2 className="lg:text-2xl text-xl font-semibold">
              And I'm a <span className="text-cyan-400 font-bold">Full Stack Developer</span>
            </h2>
            <h3 className="lg:text-lg text-[12px]">
              I’m a highly motivated Full Stack Developer who believes in continuous learning and innovation.
              I love creating powerful, end-to-end solutions that transform concepts into reality and push
              boundaries in the digital world.
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* right side (profile picture) */}
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="myshadow w-[150px] h-[150px] mt-[-30px] lg:w-[850px] lg:h-[350px] rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400"
          >
            <Image
              src="/mahad.jpeg"
              alt="Mahad"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* buttons */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="text-white gap-4 lg:mt-6 mt-10 flex justify-center lg:justify-start"
        >
          <a href="/chat"
            target="_blank"
            rel="noopener noreferrer">
          <button className="bg-green-600 py-2 px-4 font-semibold rounded-md cursor-pointer">
            Let's Talk
          </button>
          </a>
          <a href="#contact">
          <button className="bg-cyan-600 py-2 px-4 font-semibold rounded-md cursor-pointer">
            Contact Me
          </button></a>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="mt-16">
    <About/>
     </div>
     <div className="mt-16 lg:mt-40">
    <Skills/>
    </div>
     <div className="mt-16 lg:mt-32">
    <Projects/>
    </div>
    <div className="mt-16 lg:mt-12">
    <Contact/>
   </div>
    </div>
  );
}
