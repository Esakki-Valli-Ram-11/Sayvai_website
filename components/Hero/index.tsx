"use client";
import Image from "next/image";
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { SectionWrapper } from "../Common/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper 
      id="home" 
      className="relative z-10 overflow-hidden pt-32 md:pt-24"
      padding="lg"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#45988e] dark:text-white mb-4">
              AI in Your Business!
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Sayvai creates <span className="text-[#16C3A6] font-medium">customized AI solutions</span> specialized to your business needs. Our approach ensures smooth integration and impactful results, enabling your business to succeed in a competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Button
                href="/about"
                variant="contained"
                disableElevation
                className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#16C3A6] hover:bg-[#0fa78c] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get started
              </Button>
              <Button
                href="/services"
                variant="contained"
                disableElevation
                className="w-full sm:w-auto h-12 px-6 rounded-full bg-gray-900 hover:bg-[#16C3A6] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-[#16C3A6] dark:hover:text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-[500px]"
          >
            <Image
              src="/images/home/home5.png"
              alt="AI Solutions Image"
              width={600}
              height={600}
              className="w-full h-auto object-contain dark:brightness-95 dark:contrast-105 transition-all duration-300"
              priority
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
