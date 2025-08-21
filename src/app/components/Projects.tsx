import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div id="projects" className="lg:pt-24 lg:-mt-24 pt-96 -mt-96">
      {/* Heading */}
       <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }} className="flex flex-col text-white justify-center items-center text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">Projects I've Made</h1>
        <p className="text-gray-400 text-sm lg:text-base mt-4">
          Check out my projects — built with Frontend and Full Stack technologies.
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-10 lg:p-20">
        
        {/* Project Card 1 */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/project1.png" alt="project" width={400} height={250} className="rounded-xl"/>
          <h2 className="text-xl font-semibold mt-4">Project One</h2>
          <p className="text-gray-400 text-sm mt-2">A full stack project with clean UI.</p>
          <a href="https://mk-web-bymahad.vercel.app/" target='_blank' className="inline-block mt-4 px-1 lg:px-4 lg:py-2 py-2 text-[12px] lg:text-[16px] bg-blue-600 rounded-lg hover:bg-blue-700">
            Watch Live Demo
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/project2.png" alt="project" width={400} height={250} className="rounded-xl"/>
          <h2 className="text-xl font-semibold mt-4">Project Two</h2>
          <p className="text-gray-400 text-sm mt-2">Another full stack project with clean UI.</p>
          <a href="https://mk-foods.vercel.app/" target='_blank' className="inline-block mt-4 px-1 lg:px-4 lg:py-2 py-2 text-[12px] lg:text-[16px] bg-blue-600 rounded-lg hover:bg-blue-700">
            Watch Live Demo
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/project3.png" alt="project" width={400} height={250} className="rounded-xl"/>
          <h2 className="text-xl font-semibold mt-4">Project Three</h2>
          <p className="text-gray-400 text-sm mt-2">A frontend blog project showcasing modern UI/UX.</p>
          <a href="https://blogweb-bymahad.vercel.app/" target='_blank' className="inline-block mt-4 px-1 lg:px-4 lg:py-2 py-2 text-[12px] lg:text-[16px] bg-blue-600 rounded-lg hover:bg-blue-700">
            Watch Live Demo
          </a>
        </div>

        {/* Project Card 4 */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/project4.png" alt="project" width={400} height={250} className="rounded-xl"/>
          <h2 className="text-xl font-semibold mt-4">Project Four</h2>
          <p className="text-gray-400 text-sm mt-2">Another frontend project showcasing modern UI/UX.</p>
          <a href="https://mywatch-tcss-bymahad.vercel.app/" target='_blank' className="inline-block mt-4 px-1 lg:px-4 lg:py-2 py-2 text-[12px] lg:text-[16px] bg-blue-600 rounded-lg hover:bg-blue-700">
            Watch Live Demo
          </a>
        </div>

       

      </div>
    </div>
  )
}

export default Projects
