"use client";

import { motion } from "framer-motion";
import AnimatedAboutSectionOne from "@/components/About/AnimatedAboutSectionOne";
import AnimatedAboutSectionTwo from "@/components/About/AnimatedAboutSectionTwo";
import Testimoni from "@/components/Carousel/Testimoni";
import DigitalMarketingSection from "@/components/DigitalMarketing/DigitalMarketingSection";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { SectionWrapper } from "@/components/Common/SectionWrapper";

type Testimonial = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const AnimatedSections = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="space-y-0 overflow-hidden"
    >
      <motion.div variants={fadeInUp} custom={0}>
        <Hero />
      </motion.div>
      
      <SectionWrapper className="bg-white dark:bg-gray-900 py-6 md:py-8">
        <motion.div variants={slideInFromLeft} custom={0.5}>
          <DigitalMarketingSection />
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900 py-6 md:py-8">
        <motion.div variants={scaleUp} custom={0}>
          <Features />
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-white dark:bg-gray-900 py-6 md:py-8">
        <motion.div variants={slideInFromRight} custom={0.5}>
          <AnimatedAboutSectionOne
            title="About Us"
            paragraph="At Sayvai, we're on a mission to get businesses into future where AI enhances, rather than replaces, human connections. We make AI accessible, relatable, and beneficial, helping businesses thrive in a world where compassion and innovation go hand in hand.  Our vision at Sayvai is to create a world where every interaction with technology feels personal, empathetic, and enriching. We envision a future where AI not only streamlines processes efficiently but also fosters deeper connections and understanding between businesses and their customers. By infusing every solution with a human touch, we aim to redefine the possibilities of AI, transforming industries and enriching lives with every interaction."
            
          />
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-white dark:bg-gray-900 pt-0 pb-6 md:pb-8">
        <motion.div variants={slideInFromLeft} custom={0.5}>
          <AnimatedAboutSectionTwo />
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-white dark:bg-gray-900 py-6 md:py-8">
        <motion.div variants={scaleUp} custom={0.5}>
          <Testimoni listTestimoni={testimonials} />
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900 py-6 md:py-8">
        <motion.div variants={fadeInUp} custom={0.5}>
          <Faq />
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
};

export default AnimatedSections;
