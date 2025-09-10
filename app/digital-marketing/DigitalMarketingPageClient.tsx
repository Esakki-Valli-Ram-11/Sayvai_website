"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/Common/SectionWrapper";

// Animation variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    title: "SEO Optimization",
    description: "Improve your website's visibility and rank higher in search engine results with our proven SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness through strategic social media campaigns.",
    icon: "📱",
  },
  {
    title: "Content Marketing",
    description: "Create valuable, relevant content that attracts and retains your target audience.",
    icon: "✍️",
  },
  {
    title: "Google My Business Setup",
    description: "Helps businesses establish and optimize their presence on Google Maps and Google Search to improve local visibility.",
    icon: "📍",
  },
  {
    title: "Meta Ads & Google Ads",
    description: "Manages ad campaigns across Meta platforms (Facebook, Instagram) and Google Ads to reach the right audience and drive conversions.",
    icon: "📢",
  },
  {
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and detailed reporting.",
    icon: "📊",
  }
];

export default function DigitalMarketingPageClient() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] dark:from-gray-900 dark:to-gray-800 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Digital Marketing
                <span className="text-[#16C3A6]"> Solutions</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Drive growth and maximize your online presence with our data-driven digital marketing strategies. 
                From SEO to social media, we help businesses like yours succeed in the digital landscape.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-[#16C3A6] hover:bg-[#0fa78c] text-white font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/solutions/finace&accounts/digital-09 (2).png"
                alt="Digital Marketing"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Digital Marketing Services
            </h2>
            <div className="w-20 h-1 bg-[#16C3A6] mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <Link href="/digital-marketing" key={index}>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-full cursor-pointer"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#16C3A6] text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-[#16C3A6] py-16">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
  Let&apos;s discuss how our digital marketing services can help you achieve your business goals.
</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-[#16C3A6] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
