import React from 'react';
import BannerImage from '../../../../assets/Services/Digital-marketing/banner.jpg';
import { MainMail } from '../../../../common/main-mail';
import { MainPhone } from '../../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full object-fill">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[100vh] object-cove z-0"
      />
      <div className="absolute px-14 md:px-20 font-poppins lg:top-[32%] lg:left-[5%] top-[20%] flex flex-col gap-7 text-white z-10">
        <h2 className="md:text-[40px]  text-[24px] tracking-wider  font-bold ">
          Elevate your brand’s online presence with our <br /> comprehensive
          Digital Marketing services.
        </h2>
        <p className="md:text-[24px] text-grayish text-[20px] font-lato font-medium   tracking-wide flex flex-col ">
          We craft targeted strategies to drive traffic, boost engagement, and
          increase <br /> conversions across all digital channels.{' '}
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
