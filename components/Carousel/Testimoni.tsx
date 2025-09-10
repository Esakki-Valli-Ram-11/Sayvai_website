"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { SectionWrapper } from "../Common/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";

interface TestimoniItem {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface TestimoniProps {
  listTestimoni: TestimoniItem[];
}

const Testimoni: React.FC<TestimoniProps> = ({
  listTestimoni = [
    {
      name: "Retail and E-commerce",
      description:
        "We offer tailored financial and accounting services to help businesses maintain their financial health and streamline their accounting operations.",
      image: "/images/Testimoni/retail and Ecommerce.jpg",
      link: "/Finance&account",
    },
    {
      name: "AutoCAD Industry",
      description:
        "Our solutions for the fashion industry enable brands to stay ahead of trends, manage production, and enhance their customer engagement.",
      image: "/images/Testimoni/Autocad.jpg",
      link: "/Fashion_Industry",
    },
    {
      name: "Digital Marketing",
      description:
        "We provide expert legal and compliance services, helping businesses navigate regulatory challenges and mitigate risks.",
      image: "/images/Testimoni/DM.jpg",
      link: "/Leagal&Compliance",
    },
    {
      name: "Sales and Support",
      description:
        "Our sales and support services enhance customer satisfaction and drive revenue growth by optimizing the sales process.",
      image: "/images/Testimoni/Sales and Support.jpg",
      link: "/Sales&Support",
    },
  ],
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const contentSliderRef = useRef<Slider>(null);

  const handleNameClick = (index: number) => {
    setSelectedIndex(index);
    contentSliderRef.current?.slickGoTo(index); // Sync content slider with name slider
  };

  const nameSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      handleNameClick(newIndex);
    },
  };

  const contentSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSelectedIndex(newIndex); // Sync name slider with content slider
    },
  };

  return (
    <SectionWrapper className="bg-white dark:bg-gray-950 py-16 md:py-20 lg:py-24">
      <SectionTitle
        title="INDUSTRIES WE SERVE"
        subtitle=""
        paragraph="Explore the diverse industries we serve and discover tailored solutions for your business."
        center
        mb="60px"
      />

      {/* Industry content with card for first section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {listTestimoni.map((item, index) => (
          <div 
            key={index} 
            className={`${selectedIndex === index ? 'block' : 'hidden'}`}
          >
            <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden ${index === 0 ? 'border-2 border-[#16C3A6]' : ''}`}>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.image}
                    height={400}
                    width={600}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry navigation */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Retail and E-commerce", icon: "/images/industries icon/retail.png" },
            { name: "AutoCAD Industry", icon: "/images/industries icon/cad.png" },
            { name: "Digital Marketing", icon: "/images/industries icon/iconD.png" },
            { name: "Sales and Support", icon: "/images/industries icon/sale.png" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                selectedIndex === index
                  ? 'bg-[#16C3A6] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={20} 
                height={20} 
                className="mr-2" 
              />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimoni;
