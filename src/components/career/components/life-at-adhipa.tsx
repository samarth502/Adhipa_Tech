import React from 'react';
import OneTop from '../../../assets/Career/oneTop.jpg';
import OneBottom from '../../../assets/Career/oneBottom.jpg';
import two from '../../../assets/Career/two.png';
import three from '../../../assets/Career/three.jpg';
import four from '../../../assets/Career/four.png';
import FiveTop from '../../../assets/Career/fiveTop.jpg';
import FiveBottom from '../../../assets/Career/fiveBottom.jpg';

export const LifeAtAdhipa: React.FC = () => {
  return (
    <div className="text-white mt-20 py-3 bg-primary px-14 md:px-20 xs:hidden md:block">
      <div className="custom-heading-style  lg:lg-custom-heading-style mb-4">
        Life At Adhipa
      </div>
      <div className="w-full mx-auto flex flex-row gap-2 mb-16">
        {/* First Column - 2 Images */}
        <div className="flex flex-col w-[18%] gap-2">
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={OneTop}
              alt="OneTop"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={OneBottom}
              alt="OneBottom"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>

        {/* Second Column - 1 Large Image */}
        <div className="relative w-[18%] h-[460px] overflow-hidden">
          <img
            src={two}
            alt="Two"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
          />
        </div>

        {/* Third Column - 1 Large Image */}
        <div className="relative w-[28%] h-[460px] overflow-hidden">
          <img
            src={three}
            alt="Three"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
          />
        </div>

        {/* Third Column - 1 Large Image */}
        <div className="relative w-[18%] h-[460px] overflow-hidden">
          <img
            src={four}
            alt="Four"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
          />
        </div>

        {/* Fifth Column - 2 Images */}
        <div className="flex flex-col w-[18%] gap-2">
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={FiveTop}
              alt="FiveTop"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={FiveBottom}
              alt="FiveBottom"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
