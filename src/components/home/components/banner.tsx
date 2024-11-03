import React, { useEffect, useState } from 'react';

import BannerImage from '../../../assets/Home/banner.jpg';
import { MainPhone } from '../../../common/main-phone';
import { MainMail } from '../../../common/main-mail';

const textOptions = [
  { start: 'Innovative', end: 'Strategies' },
  { start: 'Comprehensive', end: 'Support' },
  { start: 'Transformation', end: 'Solutions' }
];

export const Banner: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-slideUpIn');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-slideUpOut');
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setAnimationClass('animate-slideUpIn');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full object-fill">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[100vh] object-cover z-0"
      />
      <div className="absolute w-full top-[22%] md:top-[40%] flex flex-col items-center gap-2 text-white z-10 px-14 md:px-20">
        <div className="text-center lg:text-left lg:flex-none lg:items-start lg:justify-start text-[20px] lg:text-[34px] font-poppins font-bold">
          Empowering Your Business Through
          <span
            className={`inline-block ${animationClass} max-w-[350px]  text-redDarkColor ml-2`}
          >
            {textOptions[textIndex].start}
          </span>
          <span
            className={`inline-block ${animationClass} max-w-[290px]  text-redDarkColor ml-2`}
          >
            {textOptions[textIndex].end}
          </span>
        </div>
        <p className="text-[20px] lg:text-[24px] text-center text-grayish font-poppins font-normal">
          {'Experience Seamless Integration & Maximum Efficiency'}
        </p>
        <button className="px-5 py-2 hover:bg-redDarkColor bg-redLightColor lg:text-[24px] text-[20px] rounded-full uppercase font-poppins font-regular mt-8">
          <a href="/contact-us">{'Get Expert Advice'}</a>
        </button>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
