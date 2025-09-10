"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Financeaccount = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 mt-12"
            >
              Retail and E-Commerce
            </motion.h2>
          </div>

          {/* 1. Customer Interaction Automation */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                >
                  <h3 className="text-2xl font-semibold mb-4">1. Customer Interaction Automation</h3>
                  <p className="mb-0 text-justify">
                    AI transforms the way retail and eCommerce businesses engage with customers by automating communication across multiple touchpoints. Intelligent chatbots and voice bots provide instant support, answering questions, guiding product discovery, and resolving issues 24/7. Unlike traditional systems, these bots continuously learn from interactions, ensuring conversations feel natural, personalized, and aligned with customer intent. By reducing response times and enhancing self-service options, businesses can handle thousands of queries simultaneously while freeing up human agents to focus on complex cases.
                  </p>
                </motion.div>
              </div>
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-01.jpeg"
                    alt="Customer Interaction Automation"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features block for 1 */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-5 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-02.png"
                    alt="Features visual"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 max-w-full lg:max-w-[570px]"
                >
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>24/7 customer engagement with intelligent AI chatbots and voice bots.</li>
                    <li>Personalized recommendations during live conversations based on browsing and purchase history.</li>
                    <li>Seamless integration with websites, mobile apps, and social media platforms.</li>
                    <li>Multilingual support to serve diverse global audiences.</li>
                    <li>Scalable solution capable of managing seasonal traffic spikes without extra staff.</li>
                    <li>Human handover when high-value or complex queries require personal attention.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 2. Predictive Analytics & Demand Forecasting */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                >
                  <h3 className="text-2xl font-semibold mb-4">2. Predictive Analytics & Demand Forecasting</h3>
                  <p className="mb-0 text-justify">
                    AI empowers retailers to anticipate customer needs and market changes by analyzing large volumes of sales, inventory, and behavioral data. Predictive models detect purchasing trends, forecast demand, and identify opportunities for cross-selling and upselling. This ensures businesses can optimize stock levels, prevent overstock or shortages, and plan campaigns that match customer expectations. With real-time insights, eCommerce platforms can move from reactive decision-making to proactive strategy.
                  </p>
                </motion.div>
              </div>
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-03.jpg"
                    alt="Predictive Analytics"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features block for 2 */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-04.png"
                    alt="Features visual"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 max-w-full lg:max-w-[570px]"
                >
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>Accurate sales forecasting using AI-powered demand prediction models.</li>
                    <li>Personalized product recommendations that increase average order value.</li>
                    <li>Real-time insights into customer behavior, preferences, and churn risks.</li>
                    <li>Inventory optimization to balance supply and demand.</li>
                    <li>Advanced segmentation for targeted marketing campaigns.</li>
                    <li>Predictive alerts for product trends, seasonal peaks, and promotional opportunities.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3. Intelligent Product & Content Automation */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                >
                  <h3 className="text-2xl font-semibold mb-4">3. Intelligent Product & Content Automation</h3>
                  <p className="mb-0 text-justify">
                    AI enhances the shopping experience by automating product tagging, categorization, and content generation. Instead of manually creating descriptions or assigning products to categories, AI models analyze product images, attributes, and specifications to generate accurate and engaging content. This reduces manual workload, speeds up go-to-market time, and improves searchability within eCommerce platforms. Customers benefit from consistent product information and tailored recommendations that align with their interests.
                  </p>
                </motion.div>
              </div>
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-05.svg"
                    alt="Product & Content Automation"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features block for 3 */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-06.jpg"
                    alt="Features visual"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 max-w-full lg:max-w-[570px]"
                >
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>Automatic product categorization and tagging from images and attributes.</li>
                    <li>AI-generated product descriptions optimized for SEO and conversions.</li>
                    <li>Personalized content delivery based on user browsing history.</li>
                    <li>Consistent catalog management across multiple marketplaces.</li>
                    <li>Smart search and recommendation engines powered by AI.</li>
                    <li>Reduced manual errors in product listings.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 4. AI-Powered Operational Automation */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                >
                  <h3 className="text-2xl font-semibold mb-4">4. AI-Powered Operational Automation</h3>
                  <p className="mb-0 text-justify">
                    Retail and eCommerce businesses run on fast-moving operations — from order processing to return management. AI automates repetitive workflows such as order verification, fraud detection, and logistics coordination. By analyzing real-time transaction data, AI detects anomalies and ensures secure, error-free operations. It also streamlines back-office tasks like categorizing expenses, updating records, and syncing data across platforms, freeing teams to focus on growth.
                  </p>
                </motion.div>
              </div>
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto aspect-[33/24] max-w-[550px] lg:ml-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-07.jpg"
                    alt="Operational Automation"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features block for 4 */}
          <div className="py-10 md:py-14">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Image column (clean) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -24, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto mb-6 aspect-[33/24] max-w-[550px] text-center lg:m-0 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                >
                  <Image
                    src="/images/solutions/finace&accounts/e-commerce-08.png"
                    alt="Features visual"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>
              {/* Text column (card) */}
              <div className="w-full px-6 md:px-8 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 max-w-full lg:max-w-[570px]"
                >
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>Automated order processing and validation with AI-driven fraud detection.</li>
                    <li>Real-time inventory synchronization across multiple sales channels.</li>
                    <li>Smart return management to improve customer satisfaction.</li>
                    <li>Voice-enabled workflows for faster back-office operations.</li>
                    <li>AI-powered dashboards providing real-time performance insights.</li>
                    <li>End-to-end integration with ERP, CRM, and logistics systems.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Financeaccount;
