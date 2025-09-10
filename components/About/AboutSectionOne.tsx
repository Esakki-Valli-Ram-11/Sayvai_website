import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-4 md:pt-4 lg:pt-4">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 text-justify">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Us"
                subtitle=" "
                paragraph="At Sayvai, we're on a mission to get businesses into future where AI enhances, rather than replaces, human connections. We make AI accessible, relatable, and beneficial, helping businesses thrive in a world where compassion and innovation go hand in hand."
                mb="24px"
                center={false}
              />

              <SectionTitle
                title=""
                subtitle=" "
                paragraph="Our vision at Sayvai is to create a world where every interaction with technology feels personal, empathetic, and enriching. We envision a future where AI not only streamlines processes efficiently but also fosters deeper connections and understanding between businesses and their customers. By infusing every solution with a human touch, we aim to redefine the possibilities of AI, transforming industries and enriching lives with every interaction."
                mb="0"
                center={false}
              />
            </div>

            {/* Right Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image.png"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;