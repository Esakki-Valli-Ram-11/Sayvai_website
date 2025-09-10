"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

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
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-4 md:pt-4 lg:pt-4">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 text-justify">
          <div className="-mx-4 flex flex-wrap items-center">
            <motion.div 
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <SectionTitle
                title="About Us"
                paragraph="At Sayvai, we're on a mission to get businesses into future where AI enhances, rather than replaces, human connections. We make AI accessible, relatable, and beneficial, helping businesses thrive in a world where compassion and innovation go hand in hand."
                mb="24px"
                center={false}
              />
              <SectionTitle
                title=""
                paragraph="Our vision at Sayvai is to create a world where every interaction with technology feels personal, empathetic, and enriching. We envision a future where AI not only streamlines processes efficiency but also fosters deeper connections and understanding between businesses and their customers. By infusing every solution with a human touch, we aim to redefine the possibilities of AI, transforming industries and enriching lives with every interaction."
                mb="0"
                center={false}
              />
            </motion.div>

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

export default AboutSectionOne;
