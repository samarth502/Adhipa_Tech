import React, { useEffect, useRef } from 'react';

import { SquareImageBox } from './components/square-image-box';

const img1 =
  'https://d1d5tdbhbal06t.cloudfront.net/adhipa-tech-webpage-images/HomeAboutUs/1.webp';
const img2 =
  'https://d1d5tdbhbal06t.cloudfront.net/adhipa-tech-webpage-images/HomeAboutUs/2.webp';
const img3 =
  'https://d1d5tdbhbal06t.cloudfront.net/adhipa-tech-webpage-images/HomeAboutUs/3.webp';

interface IImage {
  id: number;
  src: string;
}

const images: IImage[] = [
  {
    id: 1,
    src: img1
  },
  {
    id: 2,
    src: img2
  },
  {
    id: 3,
    src: img3
  }
];

export const AboutUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer && window.innerWidth <= 640) {
      // Ensure scrollContainer exists and target mobile screens
      let scrollAmount = 0;
      const scrollStep = 2; // Adjust this value to change the scroll speed
      const scrollInterval = setInterval(() => {
        if (
          scrollAmount <=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount += scrollStep;
          scrollContainer.scrollLeft = scrollAmount;
        } else {
          scrollAmount = 0; // Reset to the beginning for infinite scrolling
        }
      }, 20); // Adjust the interval time to control how fast it scrolls (20ms here)

      // Clean up the interval on component unmount
      return () => clearInterval(scrollInterval);
    }
  }, []);
  return (
    <div className="w-full py-12 bg-primary mt-20 px-14 md:px-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          <span className="lg:text-[16px] text-[10px] text-white font-poppins font-semibold uppercase">
            About Us
          </span>
        </div>
        <div className="flex mt-6 text-white custom-heading-style lg:lg-custom-heading-style text-center">
          We Provide The Best Solution For Your Business
        </div>
        <div className="text-white text-[16px] lg:text-[20px] mt-10 font-poppins font-regular text-justify leading-9">
          At Adhipa Technologies, we understand that every business is unique,
          which is why we provide tailored solutions to address your specific
          needs. Our team of seasoned IT professionals works tirelessly to
          analyze your requirements and deliver the best-suited technology
          solutions. Whether it's web development, Mobile App Development,
          cybersecurity, or cloud services, we prioritize your business goals to
          ensure optimal performance and efficiency. With a focus on innovation
          and client satisfaction, we strive to be your trusted partner in
          navigating the complexities of the digital landscape. Let us optimize
          your technology ecosystem and propel your business towards success.
        </div>
      </div>

      {/* Display 1 image on extra-small devices, scrollable, grid on larger */}
      <div
        ref={scrollRef}
        className="mt-10 w-full sm:overflow-hidden xs:flex xs:overflow-x-auto xs:space-x-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((image) => (
          <div key={image.id} className="xs:min-w-[100%] sm:w-full">
            <SquareImageBox id={image.id} image={image.src} />
          </div>
        ))}
      </div>
    </div>
  );
};
