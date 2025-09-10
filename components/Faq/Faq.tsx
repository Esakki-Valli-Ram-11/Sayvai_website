"use client";

import React from "react";
import QA from "./QA";
import SectionTitle from "../Common/SectionTitle";

const dataQA = [
    {
        question: "What services does Sayvai provide?",
        answer: "Sayvai offers a range of AI services tailored to meet the unique needs and objectives of businesses across various industries. Our services include Digital Marketing, Custom AI Solutions, AI Phone Call Service, and Sales & Support. We provide tailored solutions to enhance business efficiency, customer engagement, and growth. We also provide education services to help businesses understand and leverage the power of AI in their operations.",
    },
    {
        question: "What is included in Digital Marketing services?",
        answer: "Our Digital Marketing services include SEO Optimization, Social Media Management, Google My Business setup, Google Ads, Meta Ads, and lead generation strategies to help businesses reach their target audience effectively.",
    },
    {
        question: "How does Sayvai ensure data privacy and security?",
        answer: "At Sayvai, we take data privacy and security seriously. We adhere to industry best practices and compliance standards to safeguard sensitive information and protect the privacy of our clients and their customers.",
    },
    {
        question: "How can Custom AI Solutions help my business?",
        answer: "Custom AI Solutions include AI chatbots and other AI tools designed to automate tasks, provide personalized customer interactions, and improve operational efficiency. Solutions are tailored to your specific business requirements.",
    },
    {
        question: "What is the AI Phone Call Service?",
        answer: "The AI Phone Call Service automates customer calls using AI technology, providing quick responses, appointment scheduling, reminders, and efficient customer engagement without manual intervention.",
    },
    {
        question: "What does Sales & Support include?",
        answer: "Sales & Support services focus on customer engagement, lead management, follow-ups, query handling, and improving overall customer satisfaction.",
    },
    {
        question: "Are Sayvai's AI solutions customizable?",
        answer: "Yes, all our AI solutions are highly customizable to meet your business goals, processes, and specific requirements.",
    },
    {
        question: "How do I get started with Sayvai?",
        answer: "You can get started by contacting our team for a consultation. We'll understand your needs and provide a tailored plan to implement our AI or marketing solutions effectively.",
    },
];


const Faq: React.FC = () => {
    return (
<div className="pl-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">       
         <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle=""
          paragraph=""
          center
        />

        
      </div>
            {dataQA.map((data, i) => (
                <div key={i}>
                    <QA question={data.question} answer={data.answer} />
                </div>
            ))}
        </div>
    );
};

export default Faq;