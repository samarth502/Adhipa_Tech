import React from 'react';
import BannerImage from '../../../../assets/Services/Web-development/banner.png';
import { MainPhone } from '../../../../common/main-phone';
import { MainMail } from '../../../../common/main-mail';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full object-fill">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[100vh] object-cover z-0"
      />
      <div className="absolute px-14 md:px-20  md:top-[23%] md:left-[11%] items-center justify-center top-[14%] flex flex-col gap-6 text-white z-10">
        <h2 className="font-poppins font-bold text-center text-[24px] md:text-[40px] tracking-wider">
          Unlock your brand’s potential with our <br /> cutting-edge web
          development services
        </h2>
        <p className="text-[20px] text-grayish md:text-[24px] font-[500px] text-center font-poppins tracking-wide flex flex-col flex-start">
          We create responsive, user-friendly websites <br /> that drive
          engagement and deliver results
        </p>
        <button className="px-2 md:px-5 font-poppins hover:bg-redDarkColor font-regular py-2 bg-redLightColor md:text-[24px]  text-[20px] rounded-full shadow-md w-[200px] md:w-[250px] uppercase">
          <a href="/contact-us">Schedule a call</a>
        </button>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
