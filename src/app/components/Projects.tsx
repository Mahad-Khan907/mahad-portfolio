"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { client } from '@/sanity/lib/client'

export default function Projects() {
  const [products, setProducts] = useState<any[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    async function getProducts() {
      const query = `*[_type == "product"] | order(projectId asc){
        _id,
        name,
        description,
        "imageUrl": image.asset->url,
        url
      }`
      const data = await client.fetch(query)
      setProducts(data)
    }

    getProducts()
  }, [])

  const visibleProducts = showAll ? products : products.slice(0, 3)

  return (
    <div id="projects" className="lg:pt-24 lg:-mt-24 pt-96 -mt-96">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col text-white justify-center items-center text-center"
      >
        <h1 className="text-3xl lg:text-5xl font-bold">Projects I've Made</h1>
        <p className="text-gray-400 text-sm lg:text-base mt-4">
          Check out my projects — built with Frontend and Full Stack technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 lg:px-20 max-w-8xl mx-auto">
        {visibleProducts.map((product: any) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div className="p-3 ">
              {/* Image Preview */}
              {product.imageUrl && (
                <div className="relative w-full rounded-xl md:h-52 h-40  overflow-hidden bg-gray-950">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-fill "
                  />
                </div>
              )}

              {/* Card Details */}
              <div className="p-3">
                <h2 className="text-xl font-semibold text-white">
                  {product.name}
                </h2>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Visit Button Footer */}
            {product.url && (
              <div className="p-3 pt-0">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-[15px]  shadow-md"
                >
                  Live Demo
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Toggle */}
      {products.length > 3 && (
        <div className="flex justify-center mt-12 px-6">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </div>
  )
}