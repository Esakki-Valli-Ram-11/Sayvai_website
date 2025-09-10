// components/ScrollToTop.tsx
import { useEffect, useState } from 'react';
import ChatWidget from '../ChatWidget';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className="fixed bottom-24 sm:right-12 right-8 z-[99]">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#45988e] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>
      <div className="fixed bottom-6 right-6 w-82 z-[99]">
        <ChatWidget />
      </div>
      
    </>
  );
};

export default ScrollToTop;
