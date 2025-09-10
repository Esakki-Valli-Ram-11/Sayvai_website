import { Metadata } from "next";
import ServicesGrid from "@/components/Services/ServicesGrid";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Services | Sayvai",
  description:
    "Explore our services and discover how we help teams ship faster with AI-powered solutions.",
};

const services = [
  {
    title: "Phone Call",
    description:
      "Talk to our team to understand options, timelines, and the right next step for your use case.",
    href: "/phone-call-solutions",
    tag: "Service",
    image: "/images/Services/service-01.png",
    alt: "Schedule a phone call",
  },
  {
    title: "Custom AI Solution",
    description:
      "We design and build end‑to‑end AI solutions tailored to your workflows, tools, and data.",
    href: "/custom-ai-solutions",
    tag: "Service",
    image: "/images/Services/service-02.jpg",
    alt: "Custom AI solution illustration",
  },
  {
    title: "Digital Marketing",
    description:
      "Audience insights, content generation, and performance optimization with AI.",
    href: "https://sayvaidigital.netlify.app/",
    tag: "Service",
    image: "/images/Services/service-03.jpg",
    alt: "Digital marketing visual",
    newTab : true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="A central hub to explore everything we offer. Browse our core services and solution areas, then dive deeper into dedicated pages."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <ServicesGrid services={services} />
        </div>
      </section>
    </>
  );
}
