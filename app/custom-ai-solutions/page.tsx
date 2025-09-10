'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

export default function CustomAISolutionsPage() {
  return (
    <motion.section 
      className="pt-36 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex flex-wrap items-center">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 px-4">
            <motion.div 
              className="mb-12 lg:mb-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                className="text-black dark:text-white mb-6 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2]"
                variants={item}
              >
                Custom AI Solutions
              </motion.h1>
              <motion.div 
                className="h-1.5 w-24 rounded-full mb-6 bg-[#07cebaff]"
                variants={item}
              />
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                variants={item}
              >
                Transform your business with tailor-made AI solutions designed specifically for your unique challenges and workflows.
              </motion.p>
              
              <motion.div 
                className="grid gap-6"
                variants={container}
              >
                <motion.div 
                  className="flex items-start"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#07ceba20] text-[#07cebaff]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Tailored AI Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">Custom AI models and algorithms built specifically for your business needs and data.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#07ceba20] text-[#07cebaff]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Seamless Integration</h3>
                    <p className="text-gray-600 dark:text-gray-300">Smooth integration with your existing tools, platforms, and workflows.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#07ceba20] text-[#07cebaff]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Ongoing Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">Continuous monitoring, maintenance, and updates to keep your AI solution performing at its best.</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                variants={item}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#07cebaff] px-8 py-3 text-base font-semibold text-white hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started with Custom AI
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Image */}
          <motion.div 
            className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
          >
            <div className="relative mx-auto max-w-[500px] lg:mr-0 lg:ml-auto">
              <Image
                src="/images/blog/custom 1.png"
                alt="Custom AI Solutions"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
