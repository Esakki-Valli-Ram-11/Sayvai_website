"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FashionIndustry = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">

          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 mt-12"
            >
              AutoCAD Industry
            </motion.h2>
          </div>

          <div className="py-10 md:py-14 text-left">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  1. Design Trends Forecasting & Project Planning
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    AI streamlines the design process by analyzing historical projects, industry standards, and real-time design data.
                  </li>
                  <li>
                    It eliminates repetitive manual checks and provides intelligent recommendations for layouts, structures, and design approaches.
                  </li>
                  <li>
                    Complex CAD models are automatically organized into structured data, with AI recognizing patterns, materials, and geometries.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src="/images/solutions/finace&accounts/auto-01.jpg"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14 border-b border-body-color/[.15]">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/solutions/finace&accounts/auto-02.jpeg"
                  alt="about image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
            >
              <div className="max-w-full lg:max-w-[570px]">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                    <li>
                      Performs in-depth analysis of past design projects to identify emerging trends.
                    </li>
                    <li>
                      Detects potential design opportunities using predefined rules and AI-driven analytics.
                    </li>
                    <li>
                      Forecasts future design needs by processing both historical and real-time project data.
                    </li>
                    <li>
                      Recommends optimal design approaches to improve efficiency and reduce rework.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --------------------------------------------------------------------------------------------------- */}

          <div className="py-10 md:py-14 text-left">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  2. AI-Assisted Design & Development

                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                   AI is seamlessly integrated into the CAD design workflow to support drafting, modeling, and visualization.
                  </li>
                  <li>
                   It provides intelligent design recommendations, optimizes layouts for material efficiency, and creates virtual prototypes for faster iteration.
                  </li>
                  <li>
                    Designers can explore multiple styles, materials, and structures, visualize outcomes, and streamline the design process — reducing the need for multiple revisions.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src="/images/solutions/finace&accounts/auto-03.jpg"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14 border-b border-body-color/[.15]">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/solutions/finace&accounts/auto-04.jpg"
                  alt="about image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
            >
              <div className="max-w-full lg:max-w-[570px]">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                  <li>
                    Optimizes design patterns to minimize material waste and improve sustainability.
                  </li>
                  <li>
                    Enhances material utilization to lower project costs.
                  </li>
                  <li>
                    Generates virtual prototypes to test and preview designs before production.
                  </li>
                  <li>
                    Enables real-time adjustments with instant AI-driven feedback.
                  </li>
                  <li>
                    Suggests alternative design concepts based on trends, past projects, and user input.
                  </li>
                  <li>
                    Aligns design recommendations with brand, client, or project specifications.
                  </li>
                  <li>
                    Supports experimentation with shapes, materials, and styles for innovative solutions.

                  </li>
                  
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* -------------------------------------------------------------------------------------------------- */}
           
          <div className="py-10 md:py-14 text-left">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">
                3. Project Merchandising & Performance Analysis
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  AI enhances project planning, resource allocation, and performance monitoring in AutoCAD workflows.
                  </li>
                  <li>
                  By analyzing design data, project history, and resource usage, AI helps determine the optimal mix of materials, layouts, and workflows to maximize efficiency.
                  </li>
                  <li>
                  This data-driven approach reduces resource waste, avoids project delays, and improves overall profitability.
                  </li>
                  
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src="/images/solutions/finace&accounts/auto-05.jpg"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/images/solutions/finace&accounts/auto-06.png"
                  alt="about image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
            >
              <div className="max-w-full lg:max-w-[570px]">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                  <li>
                    Consolidates data from multiple CAD projects to provide a comprehensive overview.
                  </li>
                  <li>
                    Uses trend and project analysis to forecast resource and design requirements.
                  </li>
                  <li>
                    Provides real-time insights into project progress, material use, and design efficiency.
                  </li>
                  <li>
                    Segments projects by type, complexity, or client to improve planning accuracy.
                  </li>
                  <li>
                    Identifies opportunities for optimization, reuse of design components, and workflow improvements.
                  </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
    </>
  );
};

export default FashionIndustry;
