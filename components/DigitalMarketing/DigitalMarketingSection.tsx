"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DigitalMarketingSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Digital Presence
          </motion.h2>
          <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          >
          Our AI-powered digital marketing solutions help you reach the right audience, 
          engage customers, and drive conversions. From strategy to execution, we&apos;ve got you covered.
          </motion.p>

          <motion.div 
            className="space-y-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {[
              "AI-Driven Campaign Optimization",
              "Data-Backed Marketing Strategies",
              "Full-Funnel Digital Marketing",
              "Real-Time Performance Analytics"
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <div className="flex-shrink-0 h-6 w-6 text-[#16C3A6] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
                href="https://marketing.sayvai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#16C3A6] rounded-full hover:bg-[#0fa78c] transition-colors duration-300"
              >
              Explore Digital Marketing
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/solutions/finace&accounts/digital-10 (2).png"
              alt="Digital Marketing Solutions"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
