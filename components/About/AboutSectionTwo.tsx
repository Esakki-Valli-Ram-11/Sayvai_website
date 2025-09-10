import Image from "next/image";

export default function AboutSectionTwo() {
  return (
    <section className="py-4 md:py-4 lg:py-4">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-8 aspect-[25/24] max-w-[500px] text-center lg:mb-0 lg:ml-0">
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                MILESTONE
              </h3>
              <p className="text-justify text-base font-medium leading-relaxed text-body-color">
                We are thrilled to announce a monumental achievement in our journey. Sayvai has reached a remarkable milestone, with users now relying on our innovative solutions worldwide. This achievement stands as a testament to our commitment to revolutionizing AI with cutting-edge technology. We extend our heartfelt gratitude to our users, partners, and dedicated team for their unwavering support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
