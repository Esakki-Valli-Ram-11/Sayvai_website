"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SalesSupport = () => {
  return (
    <>
      <section
        id="about"
        className="pt-16 md:pt-20 lg:pt-28"
      >
        <div className="container">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 mt-12"
            >
              Sales And Support
            </motion.h2>
          </div>

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  1.Call Transcripts Analysis Automation:
                </h3>
                <h5 className="list-disc list-inside mb-4">
                  <li>
                    Call transcription analysis involves extracting useful information from live or recorded calls, such as meetings with potential customers, business calls, research interviews, earnings calls, andcustomer service calls.
                  </li>
                  <li>
                    Analyzing these calls helps identify patterns and gain insights, whichisessential for business improvement. By automating this process, business analysts, product managers, marketers, sales managers, and executives can make their business more customer focused and increase ROI.
                  </li>
                </h5>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <strong>Customizable Business Applications:</strong> Create call summaries for sales calls, earnings calls, and customer service calls to find ways to improve customer service or make investment decisions.
                  </li>

                  <li>
                    <strong>Empower Teams:</strong> Use deep insights to boost sales conversions and identify business opportunities based on the analysis of call interactions.
                  </li>
                  <li>
                    <strong>Improve Turnaround Time:</strong> AI-powered extraction and annotation of call transcriptssave time and eliminate the need for manual call monitoring.
                  </li>
                  <li>
                    <strong>Monitor & Load Transcripts: </strong>Instantly load transcripts from any source using AI- powered crawlers.
                  </li>
                </ul>
                <h3 className="text-2xl font-semibold mb-4">Powerful Call Transcript Analysis Platform: </h3>
                <h5 className="list-disc list-inside mb-4">
                  Creating a robust call transcript analysis platform involves integrating advanced features toextract deep insights and actionable intelligence from call data.
                </h5>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[36/24] max-w-[550px] lg:ml-0 overflow-hidden rounded-2xl shadow-lg"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/Sales&Support/sales-01.png"
                    alt="Call Transcripts Analysis"
                    fill
                    className="mx-auto max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
                  />
                  <Image
                    src="/images/solutions/Sales&Support/sales-01.png"
                    alt="Call Transcripts Analysis"
                    fill
                    className="mx-auto hidden max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:block"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[33/24] max-w-[500px] overflow-hidden rounded-2xl text-center shadow-lg lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/Sales&Support/sales-02.png"
                  alt="Call Analysis Features"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
                />
                <Image
                  src="/images/solutions/Sales&Support/sales-02.png"
                  alt="Call Analysis Features"
                  fill
                  className="hidden object-cover transition-transform duration-300 hover:scale-105 dark:block"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-8 sm:px-6 md:px-8 lg:px-0 lg:w-1/2"
            >
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    <li>
                      <strong> AI-Powered Data Extraction:</strong> Quickly and accurately captures detailed business information from calls, saving time and linking relevant data points.
                    </li>
                    <li>
                      <strong> Vertical Search: </strong>Seamlessly search for specific keywords or phrases within transcriptsor find relevant transcripts from a large repository. Use timestamps to quickly filter through long conversations.
                    </li>
                    <li>
                      <strong> Customized Dashboards:</strong> Analyze calls with dashboards that provide an overviewof potential opportunities or risks, and easily set up reports and widgets for meaningful insights.
                    </li>
                    <li>
                      <strong> Generate Call Summaries and Snippets: </strong>Create quick and efficient summaries for easysharing with downstream systems using out-of-the-box connectors, APIs, and webhooks.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <h3 className="text-2xl font-semibold mb-4">Benefits of Call Transcript Analysis Solution: </h3>
                <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  <li>
                    <strong> Automated Call Summaries:</strong> Provides a post-meeting summary for call attendees, including searchable keywords, action items, and recordings, in an easily understandable format.
                  </li>
                  <li>
                    <strong> Efficient Customer Service and Training: </strong> Agents can review complete calls withinminutes, improving training and service quality.
                  </li>
                  <li>
                    <strong> Automatic Transcript Loading: </strong> Intelligent crawlers automatically monitor and loadtranscripts from any source in real-time.
                  </li>
                  <li>
                    <strong> Human-Like AI Understanding: </strong> AI reads and understands transcripts like humans toextract relevant information.
                  </li>
                  <li>
                    <strong>Quick AI Training: </strong> Train AI in hours to reduce the time and costs associated withmanually defining extraction criteria.
                  </li>
                  <li>
                    <strong>Deep Insights:</strong>Identify and minimize the number of at-risk prospects and customers inreal-time and through historical transcripts.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[33/24] max-w-[500px] overflow-hidden rounded-2xl shadow-lg lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/Sales&Support/sales-03.jpg"
                    alt="Call Analysis Benefits"
                    fill
                    className="mx-auto max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
                  />
                  <Image
                    src="/images/solutions/Sales&Support/sales-03.jpg"
                    alt="Call Analysis Benefits"
                    fill
                    className="mx-auto hidden max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:block"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------------- */}

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <h3 className="text-2xl font-semibold mb-4">2. Contact Center Automation:</h3>
                <h3 className="  font-semibold mb-4">Contact Center Automation for the Entire Customer Service Lifecycle: </h3>
                <h5 className="list-disc list-inside mb-4">
                  <li>
                    Traditional chatbots in customer support are often rule-based, relying on keywords, and limit customer interaction to selecting predefined options.
                  </li>
                  <li>
                    To handle variations in language andprovide quick, high-quality responses, AI is needed for a complete overhaul.
                  </li>
                  <li>
                    Support agents should not be burdened with trivial or frequently asked questions.
                  </li>
                  <li>
                    Our AI supports Customer Service Agents in both the front office and back office by integrating chatbots with Bot AI toprovide high-quality answers from supporting documents.
                  </li>
                  <li>
                    AI suggests possible answers fromexisting Knowledge Base articles, enhancing human agents productivity through AI-basedsuggestions and reviews.
                  </li>
                </h5>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[33/24] max-w-[500px] overflow-hidden rounded-2xl shadow-lg lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/Sales&Support/sales-04.png"
                    alt="Contact Center Automation"
                    fill
                    className="mx-auto max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
                  />
                  <Image
                    src="/images/solutions/Sales&Support/sales-04.png"
                    alt="Contact Center Automation"
                    fill
                    className="mx-auto hidden max-w-full object-cover transition-transform duration-300 hover:scale-105 dark:block"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[33/24] max-w-[500px] overflow-hidden rounded-2xl text-center shadow-lg lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/Sales&Support/sales-05.jpg"
                  alt="Contact Center Features"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
                />
                <Image
                  src="/images/solutions/Sales&Support/sales-05.jpg"
                  alt="Contact Center Features"
                  fill
                  className="hidden object-cover transition-transform duration-300 hover:scale-105 dark:block"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-8 sm:px-6 md:px-8 lg:px-0 lg:w-1/2"
            >
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    <li>
                      <strong> Front-to-Back Complete Automation: </strong>Enhance the customer service experience byassisting agents at all touchpoints.
                    </li>
                    <li>
                      <strong> Easy Integrations:</strong> Easily integrate AI into your existing tools and systems.
                    </li>
                    <li>
                      <strong> Continuous Learning & Improvement:</strong> Each acceptance or rejection of AI suggestions helps improve future responses.
                    </li>
                    <li>
                      <strong>4X Agent Productivity:</strong> Free knowledge workers from repetitive tasks, allowing themtofocus on creative solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          {/* -------------------------------------------------------------------------------------------------- */}
        </div>
      </section>
    </>
  );
};

export default SalesSupport;
