import React from 'react';
import BannerImage from '../../../../assets/Services/Mobile-development/banner.png';
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
      <div className="absolute items-center lg:left-[6%] px-14 md:px-20 lg:top-[27%] top-[20%] flex flex-col gap-4 text-white z-10">
        <h2 className="text-[24px] md:text-[40px]  tracking-wider  font-bold text-center">
          Transform your ideas into powerful mobile applications <br /> with our
          expert mobile app development services
        </h2>
        <p className="md:text-[24px] text-grayish text-[20px] tracking-wide flex flex-col text-center">
          We build intuitive, high-performance apps that enhance <br /> user
          experience and drive growth.
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
