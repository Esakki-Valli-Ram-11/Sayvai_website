"use client";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <div className="w-60 max-w-full px-4 xl:mr-12">
                <Link
                href="/">        
                <div className="flex items-center  ">

                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden "
                />
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block "
                  />
                  </div>
              </Link>
            </div>
                 
                <div className="flex items-center p-12">
                  <a
                    href="https://www.facebook.com/people/Sayvai-Softwares/61551908917131/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-[#1877F2] dark:hover:text-[#1877F2]"
                  >
                    <RiFacebookFill className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/Sayvai_Software"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-black dark:hover:text-white"
                  >
                    <RiTwitterXFill className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/savyvai/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="dark:text-body-color-dark text-body-color duration-300 hover:text-[#0077b5] dark:hover:text-[#0077b5]"
                  >
                    <RiLinkedinFill className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/about"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Finance&account"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Solution
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Our Services
                </h2>
                <ul>
                  <li>
                    <a
                      href="/phone-call-solutions"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Phone Call Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/custom-ai-solutions"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Custom AI Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sayvaidigital.netlify.app/" // <-- external URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-[#45988e] dark:hover:text-[#45988e]"
                    >
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Contact Us
                </h2>
                <p className="mb-7 text-base text-body-color dark:text-body-color-dark">
                  Have questions or need help? Our team is here to assist you.
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white group">
                  <span className="mr-3 text-primary">
                    <MdLocationOn className="w-5 h-5 group-hover:text-[#45988e] transition-colors duration-300" />
                  </span>
                  <span>Sayvai Software LLP, CIT Campus, Coimbatore 641013.</span>
                </p>
                <p className="mt-2 flex items-center text-sm font-medium text-dark dark:text-white group">
                  <span className="mr-3 text-primary">
                    <MdEmail className="w-5 h-5 group-hover:text-[#45988e] transition-colors duration-300" />
                  </span>
                  <span>Info.sayvai@gmail.com</span>
                </p>
                <p className="mt-2 flex items-center text-sm font-medium text-dark dark:text-white group">
                  <span className="mr-3 text-primary">
                    <MdPhone className="w-5 h-5 group-hover:text-[#45988e] transition-colors duration-300" />
                  </span>
                  <a href="tel:+918220486198">+91 8220486198</a>
                </p>
              </div>
            </div>

          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="flex flex-col items-center py-6 space-y-4">
            <p className="text-base text-body-color dark:text-white text-center">
              Copyrights @ 2024 Sayvai. All rights reserved
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a
                href=""
                className="text-base text-body-color duration-300 hover:text-[#45988e] dark:text-white dark:hover:text-[#45988e]"
              >
                Terms and Conditions
              </a>
              <span className="h-4 w-px bg-[#D2D8E1] dark:bg-[#959CB1]"></span>
              <a
                href=""
                className="text-base text-body-color duration-300 hover:text-[#45988e] dark:text-white dark:hover:text-[#45988e]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
