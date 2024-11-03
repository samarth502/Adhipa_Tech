import React from 'react';
import BannerImage from '../../../assets/ContactUs/banner.jpg';
import { MainMail } from '../../../common/main-mail';
import { MainPhone } from '../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex justify-start">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[50vh] object-cover z-0"
      />
      <div className="absolute px-14 md:px-20 flex flex-col items-start justify-start gap-7 text-white z-10 top-[32%] md:top-[40%]">
        <h2 className="text-[24px] md:text-[40px] tracking-wider font-poppins font-bold uppercase">
          Contact Us
        </h2>
        <p className="tracking-widest text-grayish text-[20px] md:text-[24px] font-poppins">
          Thank you for visiting our website. We <br /> would love to hear from
          you. We will <br /> get back to you in 24 hours.
        </p>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
