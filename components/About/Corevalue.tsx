const coreValues = [
    {
      title: "Empathy",
      content: "We prioritize understanding and compassion in all our interactions."
    },
    {
      title: "Innovation",
      content: "We embrace curiosity, creativity, and bold thinking."
    },
    {
      title: "Integrity",
      content: "We uphold the highest standards of honesty, transparency, and ethical behavior."
    },
    {
      title: "Collaboration",
      content: "We believe in the power of teamwork and collaboration."
    },
    {
      title: "Excellence",
      content: "We are driven by a relentless pursuit of excellence."
    }
     
  ];
  
  const Corevalue = () => {
    return (
      <section className="py-4 md:py-4 lg:py-4">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div className="wow fadeInUp max-w-[940px] mx-auto" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    CORE VALUES
                  </h3>
                  {coreValues.map((value, index) => (
                    <p key={index} className="mt-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      <span className="font-bold text-black dark:text-white">{value.title}: </span>
                      {value.content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default Corevalue;
