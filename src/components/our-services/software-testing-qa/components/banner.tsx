import React from 'react';
import BannerImage from '../../../../assets/Services/Software-testing-qa/banner.jpg';
import { MainMail } from '../../../../common/main-mail';
import { MainPhone } from '../../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[100vh] object-top z-0"
      />
      <div className="absolute px-14 md:px-20 lg:ml-7 lg:top-[32%] top-[14%] flex flex-col gap-8 text-white z-10">
        <h2 className="md:text-[40px] font-lato text-[24px] tracking-wider font-bold ">
          Ensure the reliability and performance of your software <br /> with
          our comprehensive Testing & QA services.{' '}
        </h2>
        <p className="text-[20px] text-grayish md:text-[24px] font-normal font-poppins tracking-wide flex flex-col">
          We deliver bug-free, high-quality products through rigorous testing
          and <br /> quality assurance processes.{' '}
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
