import React from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

function About() {
  return (
    <div id='about' className="lg:pt-24 lg:-mt-24  pt-96 -mt-96">
    <div className='flex  text-center text-white lg:p-20'>
  {/* container */}
  <div className='flex lg:flex-row flex-col items-center gap-6 lg:gap-16'>
    <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }} 
    >
          <h1 className='text-5xl block lg:hidden font-bold'>About Me</h1>
      <h2 className='text-3xl block lg:hidden mt-4 text-cyan-400 font-semibold'>Mahad Khan</h2>
      </motion.div>
    {/* image side */}
    <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }} className='lg:w-1/3 flex justify-center'>
      <Image 
        className='myshadow lg:w-[300px] lg:h-[350px] w-[150px] h-auto overflow-hidden object-cover rounded-full lg:rounded-lg shadow-2xl border-4 border-cyan-400' 
        src="/mahad2.jpeg" 
        alt='mahad' 
        width={800} 
        height={800} 
      />
    </motion.div>
    </AnimatePresence>

    {/* text side */}
     <div
   
    className='lg:w-2/3 px-5 text-center lg:text-left'>

      <motion.h1  initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }} className='text-5xl hidden lg:block font-bold'>About Me</motion.h1>
      <motion.h2  initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }} className='text-3xl mt-4 hidden lg:block text-cyan-400 font-semibold'>Mahad Khan</motion.h2>
      <motion.p  initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }} className='mt-3 text-[12px] m-auto lg:text-xl sm:w-2/3 lg:w-auto'>
        Hello! My name is <span className='text-cyan-400'>Mahad Khan</span>, and I am a passionate <span className='text-cyan-400'>Full Stack Developer</span> with experience in building dynamic and responsive web applications. I specialize in both <span className='text-cyan-400'>frontend and backend development</span>, creating seamless user experiences. I am proficient in technologies such as <span className='text-cyan-400'>React.js, Next.js, Tailwind CSS, and Sanity (Database)</span>. My goal is to craft modern web solutions that solve real-world problems. I enjoy learning new technologies, and constantly improving my skills.
      </motion.p>
    </div>

  </div>
</div>
{/* education section */}
<div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Education Card */}
  <div className="bg-gray-900 flex md:flex-row flex-col items-center rounded-xl p-5 gap-6 shadow-lg hover:shadow-2xl transition-all">
    <Image src="/education.png" alt="edu" width={60} height={60} />
    <div>
      <h3 className="text-xl font-semibold text-white">Education</h3>
      <p className="text-gray-400 text-sm mt-2">
        I am currently in <span className="text-cyan-400 font-medium">2nd year Pre-Medical </span> 
        and also learning <span className="text-cyan-400 font-medium">IT</span> at 
        <span className="text-cyan-400 font-medium"> Governor House Karachi</span>.
      </p>
    </div>
  </div>

  {/* Skills / Experience Card */}
  <div className="bg-gray-900 flex md:flex-row flex-col  items-center rounded-xl p-5 gap-6 shadow-lg hover:shadow-2xl transition-all">
    <Image src="/task-management.png" alt="skills" width={60} height={60} />
    <div>
      <h3 className="text-xl font-semibold text-white">Skills & Learning</h3>
      <p className="text-gray-400 text-sm mt-2">
        Exploring <span className="text-cyan-400 font-medium">Web Development</span>, 
        focusing on React.js, Next.js, Tailwind CSS, and modern tools to build real-world projects.
      </p>
    </div>
  </div>
</div>

</div>

  )
}

export default About
