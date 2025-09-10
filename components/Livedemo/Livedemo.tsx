"use client"; // Add this line at the top

import { useState } from "react";
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './customPhoneInput.css'; // Your custom styles

// Step 1: Define the extended type and custom component
interface ExtendedPhoneInputProps extends PhoneInputProps {
  className?: string;
}

const CustomPhoneInput: React.FC<ExtendedPhoneInputProps> = (props) => {
  return <PhoneInput {...props} />;
};

const Livedemo = () => {
  const [activeContent, setActiveContent] = useState<string>("livedemo");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prepare the data to be sent
    const data = {
      to_number: phone,
      name: name,
      email: email
    };
    let endpoint = '';
  if (activeContent === 'livedemo') {
    endpoint = 'https://voice.sayvai.io/make_call';
  } else if (activeContent === 'webcall') {
    window.open ('https://voice.sayvai.io/','_blank');
    return; // Stop execution as we're redirecting
  }

  try {
    // Send the data to the external endpoint
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Call initiated successfully!');
    } else {
      alert('Failed to initiate call.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while trying to initiate the call.');
  }
   
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 md:pb-20 lg:pb-28 mt-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded px-6 py-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Get a live demo
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Feel the state-of-the-art Voice Interaction
                </p>
                <div className="border-b border-[#45988e] mb-6">
                  <div className="mb-6 grid grid-cols-2 text-center">
                  <button onClick={() => setActiveContent("livedemo")} className={`flex w-full items-center justify-center rounded-tl-xl rounded-tr-xl px-9 py-4 text-base font-medium duration-300 
                    ${activeContent === "livedemo" ? 'bg-[#45dbbf]/90 dark:bg-[#358d80]/90 text-white' : 'bg-transparent text-[#45dbbf]'} border-2 border-transparent hover:border-white dark:hover:border-gray-700 active:shadow-xl active:brightness-110 active:scale-95`}
                  >
                  Receive A Phone Call
                 </button>
                 <button onClick={() => setActiveContent("webcall")}className={`flex w-full items-center justify-center rounded-tl-xl rounded-tr-xl px-9 py-4 text-base font-medium duration-300 
                    ${activeContent === "webcall" ? 'bg-[#45dbbf]/90 dark:bg-[#358d80]/90 text-white' : 'bg-transparent text-[#45dbbf]'} border-2 border-transparent hover:border-white dark:hover:border-gray-700 active:shadow-xl active:brightness-110 active:scale-95`}
                  >
                  Try on Webcall
                  </button>
                  </div>
                </div>
                {activeContent === "livedemo" && (
                  <div>
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <CustomPhoneInput
                        country={'in'}
                        value={phone}
                        onChange={(phone: string) => setPhone(phone)}
                        className=" dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                )}


                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                  <button className="rounded-full bg-[#45988e] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                  Get the call
                   </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Livedemo;
