"use client";
import Link from "next/link";
import { useState, ChangeEvent, KeyboardEvent } from 'react';

const EnterOTP = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (index < otp.length - 1) {
        const nextInput = document.querySelectorAll('input')[index + 1];
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move to the previous input field
      if (index > 0) {
        const prevInput = document.querySelectorAll('input')[index - 1];
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-[#16C3A6] dark:text-[#16C3A6] sm:text-3xl">
                  OTP Verification 
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Your code was sent to you via email
                </p>
               
                <form>
                
                 
                  <div className="mb-8">
                    <label
                      htmlFor="otp"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Enter OTP
                    </label>
                    <div className="flex space-x-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={digit}
                          className="w-12 h-12 border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] text-base text-body-color outline-none transition-all duration-300 focus:border-[#16C3A6] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#16C3A6] dark:focus:shadow-none text-center"
                          onChange={(e) => handleInputChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e as KeyboardEvent<HTMLInputElement>, index)}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-center text-base font-medium text-body-color">
                  Didn&apos;t receive code?{" "}
                  <Link href="/forgetpassword" className="text-[#16C3A6] hover:underline">
                    Request OTP
                  </Link>
                  </p>
                    
                  <div className="mb-6 mt-4">
                    <Link
                      href="/ResetPassword"
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-[#16C3A6] px-9 py-4 text-base font-medium text-white duration-300 hover:bg-[#16C3A6]/90"
                    >
                      Verifiy & Continue
                    </Link>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#16C3A6" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#16C3A6" />
                <stop offset="1" stopColor="#16C3A6" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#16C3A6" />
                <stop offset="1" stopColor="#16C3A6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default EnterOTP;
