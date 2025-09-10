"use client";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { motion } from "framer-motion";

const DigitalMarketing = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="text-3xl font-bold mb-8 mt-12"
            >
              Digital Marketing
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
                  1. Market Trends Forecasting & Campaign Planning
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Analyze historical performance, competitor activity, and real-time social trends to spot demand shifts.
                  </li>
                  <li>
                    Identify high-impact channels and audiences with AI-driven segmentation and insights.
                  </li>
                  <li>
                    Prioritize campaign opportunities and mitigate budget risks with predictive analytics.
                  </li>
                  <li>
                    Build data-backed campaign plans with clear KPIs and expected ROI.
                  </li>
                </ul>
                <div>
                  <h2 className="text-2xl font-bold mb-6 mt-4">
                    Powerful Marketing Intelligence Platform:
                  </h2>
                  <h5 className="mb-4 mt-4">Use AI to unify ads, web, and social data for forecasting, channel selection, and budget planning.</h5>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      Capture — Aggregate multi-channel data (ads, web, CRM, social).
                    </li>
                    <li>
                      Search — Surface contextual insights and competitor signals quickly.
                    </li>
                    <li>
                      Analyze — Predict demand, audiences, and likely ROI by channel.
                    </li>
                    <li>
                      Automate — Recommend budgets and pacing to maximize efficiency.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[736/489] max-w-[590px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/digital-01.jpg"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[736/489] max-w-[590px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/digital-02.jpg"
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
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                    <li>
                      Trend detection across channels to anticipate campaign opportunities.
                    </li>
                    <li>
                      Audience discovery and segmentation recommendations.
                    </li>
                    <li>
                      No-code planning workflows with role-based access and approvals.
                    </li>
                    <li>
                      Reduce planning cycles with automated briefs and KPI suggestions.
                    </li>
                    <li>
                      Contextual search across past campaigns for inspiration and benchmarks.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
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
                  2. AI-Assisted Creative & Content
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Generate ad copy, headlines, and variations aligned to audience personas.
                  </li>
                  <li>
                    Create and adapt creatives at scale while maintaining brand consistency.
                  </li>
                  <li>
                    Streamline approvals with human-in-the-loop edits and versioning.
                  </li>
                  <li>
                    Reduce time-to-launch with automated briefs and asset recommendations.
                  </li>
                </ul>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Powerful AI Creative Platform:
                  </h3>
                  <h5 className="mb-4 mt-4">Leverage AI to produce on-brand assets and copy variations tailored to channels and audiences.</h5>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      Capture — Centralize brand guidelines, assets, tone, and examples.
                    </li>
                    <li>
                      Search — Retrieve past top-performers and relevant references instantly.
                    </li>
                    <li>
                      Analyze — Score copy/creatives against goals and audience preferences.
                    </li>
                    <li>
                      Automate — Generate variants and resize/adapt assets across platforms.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[736/489] max-w-[590px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/digital-03.png"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[736/489] max-w-[590px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/digital-04.png"
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
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                    <li>
                      On-brand content generation with governance and approvals.
                    </li>
                    <li>
                      Variant testing at scale across headlines, CTAs, and visuals.
                    </li>
                    <li>
                      Semantic search across creative libraries and performance data.
                    </li>
                    <li>
                      No-code workflows to brief, generate, review, and publish.
                    </li>
                    <li>
                      Continuous learning from performance feedback to improve outputs.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
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
                  3. Campaign Merchandising & Performance Analysis
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Consolidate cross-channel metrics (ads, email, social, web) for a unified view.
                  </li>
                  <li>
                    Forecast performance and allocate budget dynamically to best-performing assets.
                  </li>
                  <li>
                    Identify optimization opportunities and reduce wasted spend.
                  </li>
                  <li>
                    Automate reporting with insights and recommended next actions.
                  </li>
                </ul>
                <div>
                  <h2 className="text-2xl font-bold mb-6 mt-4">
                    Powerful Campaign Intelligence Platform:
                  </h2>
                  <h5 className="mb-4 mt-4">AI unifies marketing data to optimize budget, creative, and audience strategy in real time.</h5>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[736/489] max-w-[590px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/digital-05.png"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[840/489] max-w-[590px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/digital-06.png"
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
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                    <li>
                      Multi-source data consolidation and normalization.
                    </li>
                    <li>
                      Real-time dashboards with anomaly and opportunity detection.
                    </li>
                    <li>
                      Budget pacing and bid strategy recommendations.
                    </li>
                    <li>
                      Automated reporting with goal tracking and alerts.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
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
                  4. SEO & Content Research Automation
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Accelerate keyword research and topic clustering.
                  </li>
                  <li>
                    Empower content teams with briefs and outlines.
                  </li>
                  <li>
                    Intelligent monitoring of rankings and competitor moves.
                  </li>
                  <li>
                    Reduce costs with automation across research to publication.
                  </li>
                </ul>
                <div>
                  <h2 className="text-2xl font-bold mb-4 mt-4">
                    Powerful SEO & Content Platform:
                  </h2>
                  <h5 className="mb-4 mt-4">Use AI to extract opportunities, generate briefs, and monitor performance end to end.</h5>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      Capture — Crawl SERPs, competitor content, and analytics.
                    </li>
                    <li>
                      Search — Contextual exploration of topics, intent, and gaps.
                    </li>
                    <li>
                      Analyze — Score difficulty, intent, and expected impact.
                    </li>
                    <li>
                      Automate — Generate briefs and track outcomes automatically.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full px-6 md:px-8 lg:w-1/2"
              >
                <div
                  className="wow fadeInUp relative mx-auto aspect-[736/489] max-w-[590px] lg:ml-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/digital-07.png"
                    alt="about-image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[736/489] max-w-[590px] text-center lg:m-0 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/digital-08.jpg"
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
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-left">
                    <li>
                      Rapid keyword/topic clustering with intent mapping.
                    </li>
                    <li>
                      End-to-end workflow from research to brief to publish.
                    </li>
                    <li>
                      No-code configuration, semantic understanding for topic relevance.
                    </li>
                    <li>
                      Automated QA to reduce content errors and ensure brand alignment.
                    </li>
                    <li>
                      Continuous learning loop with performance-driven updates.
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

export default DigitalMarketing;
