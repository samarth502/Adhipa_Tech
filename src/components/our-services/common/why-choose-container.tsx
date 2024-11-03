import React, { useEffect, useRef } from 'react';

import { WhyChooseContainerItem } from './components/why-choose-container-item';

interface IDataProps {
  image: string;
  title: string;
}

interface IProps {
  heading: string;
  description: string;
  data: IDataProps[];
}

export const WhyChooseContainer: React.FC<IProps> = ({
  heading,
  description,
  data
}) => {
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
    <div className="flex flex-col px-14 md:px-20 py-12 bg-primary text-white mt-20">
      <h1 className="custom-heading-style  lg:lg-custom-heading-style">
        {heading}
      </h1>
      <p className="text-white text-[16px] lg:text-[20px] mt-10 font-poppins font-regular text-justify leading-9">
        {description}
      </p>
      <div
        ref={scrollRef}
        className="mt-10 w-full xs:flex xs:overflow-x-auto xs:space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-4 md:overflow-hidden scrollbar-hide"
      >
        {data.map(({ image, title }) => (
          <div className="xs:min-w-[90%] sm:w-full scrollbar-hide">
            <WhyChooseContainerItem key={title} image={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};
