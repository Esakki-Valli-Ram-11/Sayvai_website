"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// ✅ Props interface
interface AnimatedAboutSectionOneProps {
  title: string;
  paragraph: string;
  subtitle?: string; // optional subtitle
}

const AnimatedAboutSectionOne: React.FC<AnimatedAboutSectionOneProps> = ({ title, paragraph, subtitle }) => {
  return (
    <section id="about" className="pt-4 md:pt-4 lg:pt-4">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 text-justify">
          <div className="-mx-4 flex flex-wrap items-center">
            
            {/* Left Side */}
            <motion.div 
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <SectionTitle
                title={title}
                paragraph={paragraph}
                mb="24px"
                center={false}
              />
              {subtitle && (
                <SectionTitle
                  title=""
                  paragraph={subtitle}
                  mb="0"
                  center={false}
                />
              )}
            </motion.div>

            {/* Right Side */}
            <motion.div 
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
            >
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAboutSectionOne;
