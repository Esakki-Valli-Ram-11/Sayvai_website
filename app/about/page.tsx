import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import History from "@/components/About/History";
import Culture from "@/components/About/Culture";
import Corevalue from "@/components/About/Corevalue";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AnimatedSection from "@/components/About/AnimatedSection";

export const metadata: Metadata = {
  title: "Sayvai",
  // description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AnimatedSection>
        <Breadcrumb
          pageName="About Page"
          description="At Sayvai, we're committed to helping businesses embrace the future with AI that enhances human connections. We make AI accessible and valuable, enabling businesses to thrive through compassion and innovation."
        />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutSectionOne />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutSectionTwo />
      </AnimatedSection>
      
      <AnimatedSection>
        <History />
      </AnimatedSection>
      
      <AnimatedSection>
        <Culture />
      </AnimatedSection>
      
      <AnimatedSection>
        <Corevalue />
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
