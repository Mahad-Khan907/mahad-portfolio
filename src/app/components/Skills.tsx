import React from 'react'
import Image from 'next/image'
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'framer-motion';

function Skills() {
  // Variants for each skill/tool item
  const logoItemVariant = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div id='skills' className="py-16 overflow-hidden px-6 lg:px-20 text-white lg:pt-24 lg:-mt-24 pt-96 -mt-96">

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, x: 200 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        viewport={{ once: false }} 
        className="text-center mb-12"
      >
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Skills I Achieved
        </h1>
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
          Here are the technologies I have learned and practiced as part of my journey as a developer.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div  
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }} 
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center"
      >
        {/* Each skill with animation */}
        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image className='w-[60px] h-[60px]' src="/html.png" alt="HTML" width={600} height={600} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">HTML</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/css-3.png" alt="CSS" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">CSS</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image className='w-[60px] h-[60px]' src="/php.png" alt="PHP" width={600} height={600} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">PHP</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/typescript.png" alt="TypeScript" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">TypeScript</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/python.png" alt="Python" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Python</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/atom.png" alt="React" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">React</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <h1 className="text-6xl"><RiNextjsFill /></h1>
          <p className="text-gray-300 mt-2 text-sm font-semibold">Next.js</p>
        </motion.div>
      </motion.div>

      {/* Tools Section Heading */}
      <motion.div 
        initial={{ opacity: 0, x: 200 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        viewport={{ once: false }} 
        className="text-center mb-12"
      >
        <h1 className="text-3xl mt-16 lg:text-5xl font-bold mb-4">Tools I Use</h1>
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
          Here are the tools I have learned and practiced as part of my journey as a developer.
        </p>
      </motion.div>

      {/* Tools Grid */}
      <motion.div  
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-center items-center text-center m-auto place-items-center"
      >
        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image className='w-[60px] h-[60px]' src="/figma.png" alt="Figma" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Figma</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/vs-code.svg" alt="VS Code" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">VS Code</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image className='w-[60px] h-[60px]' src="/cursor-ai.png" alt="Cursor AI" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Cursor AI</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/tailwind.png" alt="Tailwind" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Tailwind</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image src="/social.png" alt="Git" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Git</p>
        </motion.div>

        <motion.div variants={logoItemVariant} className="flex flex-col bg-gray-900 p-5 rounded-2xl items-center hover:scale-110 transition-all duration-300">
          <Image className='bg-white' src="/github.png" alt="Github" width={60} height={60} />
          <p className="text-gray-300 mt-2 text-sm font-semibold">Github</p>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Skills
