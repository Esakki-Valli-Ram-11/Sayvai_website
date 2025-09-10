'use client';

import { motion } from 'framer-motion';
import blogData from "@/components/Blog/blogData";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Blog() {
  return (
    <section id="blog" className="pt-36 pb-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-16 max-w-3xl">
              <motion.h2 
                className="text-black dark:text-white mb-6 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Blog
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Discover the latest insights, trends, and updates in the world of technology and innovation. 
                Our team of experts shares valuable knowledge to help you stay ahead in the digital landscape.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div 
          className="space-y-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogData.map((blog, index) => (
            <motion.div 
              key={blog.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              variants={item}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-full md:w-1/2 px-2">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4 text-dark dark:text-white"
                  whileHover={{ color: '#07cebaff' }}
                >
                  {blog.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {blog.paragraph}
                </motion.p>
              </div>

              <motion.div 
                className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
