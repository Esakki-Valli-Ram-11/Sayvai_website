import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import AnimatedSections from "@/components/Home/AnimatedSections";

export const metadata: Metadata = {
  title: "Sayvai",
  description: "AI solutions",
};

const defaultTestimoni = [
  {
    name: "Retail and E-commerce",
    description:
      "With AI-powered tools, we help eCommerce and retail businesses simplify processes, boost profitability, and stay ahead of the competition.",
    image: "/images/Testimoni/retail and Ecommerce.jpg",
    link: "/Finance&account",
  },
  {
    name: "AutoCAD Industry",
    description:
      "We bring AI automation to the AutoCAD industry, empowering designers to save time, minimize errors, and focus on creativity.",
    image: "/images/Testimoni/Autocad.jpg",
    link: "/Fashion_Industry",
  },
  {
    name: "Digital Marketing",
    description:
      "Our AI-powered solutions optimize digital marketing by improving targeting, boosting engagement, and maximizing ROI.",
    image: "/images/Testimoni/DM.jpg",
    link: "/digital-marketing",
  },
  {
    name: "Sales and Support",
    description:
      "Our sales and support services enhance customer satisfaction and drive revenue growth by optimizing the sales process.",
    image: "/images/Testimoni/Sales and Support.jpg",
    link: "/Sales&Support",
  },
];

export default function Home() {
  return (
    <>
      <ScrollUp />
      <AnimatedSections testimonials={defaultTestimoni} />
    </>
  );
}
