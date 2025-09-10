import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="relative w-full border border-gray-300 rounded-3xl p-4   overflow-hidden group">
      <div className="relative z-10 wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-[#45988e] bg-opacity-10 text-[#45988e] group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:text-white">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color group-hover:text-white">
          {paragraph}
        </p>
      </div>
      <div className="absolute inset-0 rounded-none overflow-hidden">
    <div className="absolute inset-0 bg-[#16C3A6] transition-all duration-1000 ease-in-out transform scale-0 origin-bottom-left group-hover:scale-100 group-hover:opacity-100 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          style={{
            borderRadius: '50%',  
            transformOrigin: 'bottom left',
            width: '200%',  
            height: '200%', 
            top: '-50%',  
            left: '-50%',  
          }}
    
    />
  </div>

    </div>
  );
};

export default SingleFeature;
