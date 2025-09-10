import Image from "next/image";

const Culture = () => {
  return (
    <section className="py-4 md:py-4 lg:py-4">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
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
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 COMPANY CULTURE
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color text-justify sm:text-lg sm:leading-relaxed">
                Our culture is built on the foundation of collaboration, innovation, and empathy. We believe in fostering a supportive and inclusive environment where every team member is valued, respected, and motivated to reach their full potential. We embrace diversity in perspectives, experiences, and backgrounds, recognizing that it fuels creativity and drives meaningful change. We encourage curiosity, continuous learning, and a growth mindset, as we navigate theevolving landscape of technology and business. We celebrate success, learn from failure, and approach challenges with resilience, determination, and a sense of humor. Together, we are not just building AI solutions, we are building a community that thrives on passion, purpose, and human connection.                </p>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;