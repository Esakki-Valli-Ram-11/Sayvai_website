"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

const AboutSectionTwo = () => {
  return (
    <section className="py-4 md:py-4 lg:py-4">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full px-4 lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
          >
            <div className="relative mx-auto mb-8 aspect-[25/24] max-w-[500px] text-center lg:mb-0 lg:ml-0">
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full px-4 lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
          >
            <div className="max-w-[470px]">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                MILESTONE
              </h3>
              <p className="text-justify text-base font-medium leading-relaxed text-body-color">
                We are thrilled to announce a monumental achievement in our journey. Sayvai has reached a remarkable milestone, with users now relying on our innovative solutions worldwide. This achievement stands as a testament to our commitment to revolutionizing AI with cutting-edge technology. We extend our heartfelt gratitude to our users, partners, and dedicated team for their unwavering support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
