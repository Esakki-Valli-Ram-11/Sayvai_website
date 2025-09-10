const SectionTitle = ({
  title,
  subtitle,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subtitle: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <h3 className="text-xl font-medium text-gray-700 mt-2">{subtitle}</h3>
        <p className="text-base !leading-relaxed text-body-color md:text-lg mt-2">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;