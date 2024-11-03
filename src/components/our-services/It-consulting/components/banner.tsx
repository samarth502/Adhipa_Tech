import React from 'react';
import BannerImage from '../../../../assets/Services/IT-consulting/banner.png';
import { MainMail } from '../../../../common/main-mail';
import { MainPhone } from '../../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full object-fill">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[100vh] object-top z-0"
      />
      <div className="absolute font-lato px-14 lg:px-20 lg:top-[30%] top-[20%] flex flex-col justify-center items-center gap-10 text-white z-10 w-full text-center">
        <h2 className="text-[24px] md:text-[40px] tracking-wider font-poppins font-semibold">
          Maximize your business potential with our expert <br /> IT Consulting
          services.
        </h2>
        <p className="text-[20px] text-grayish md:text-[24px] font-regular font-poppins tracking-wide">
          We provide strategic guidance and innovative solutions to drive your{' '}
          <br />
          digital transformation and operational efficiency.
        </p>
        <button className="px-5 py-2 hover:bg-redDarkColor bg-redLightColor lg:text-[24px] text-[20px] rounded-full uppercase font-poppins font-regular mt-8">
          <a href="/contact-us">Schedule a call</a>
        </button>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
