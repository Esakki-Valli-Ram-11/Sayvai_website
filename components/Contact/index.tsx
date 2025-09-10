"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_8069a0s",   // Your EmailJS Service ID
          "template_1t82crl",  // Your EmailJS Template ID
          formRef.current,
          "6AlXQybd97DbHWsKw"  // Your EmailJS Public Key
        )
        .then(
          () => {
            setMessage("✅ Message sent successfully!");
            setLoading(false);
            formRef.current?.reset();
          },
          () => {
            setMessage("❌ Failed to send message. Please try again.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left side - Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form ref={formRef} onSubmit={sendEmail}>
                {/* Hidden inputs for time & year */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />
                <input
                  type="hidden"
                  name="year"
                  value={new Date().getFullYear()}
                />

                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        required
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="shadow-submit dark:shadow-submit-dark rounded-sm bg-[#45988e] px-9 py-4 text-base font-medium text-white duration-300 hover:bg-[#45988e]/90 disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>

                    {message && (
                      <p
                        aria-live="polite"
                        className={`mt-4 text-sm ${
                          message.startsWith("✅")
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Newsletter Box */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
