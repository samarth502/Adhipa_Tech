import React from 'react';
import BannerImage from '../../../assets/AboutUs/banner.jpg';
import { MainMail } from '../../../common/main-mail';
import { MainPhone } from '../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[50vh] object-cover z-0"
      />
      <div className="absolute flex flex-col items-center justify-center gap-7 text-white z-10 top-[40%] md:top-[45%] px-14 lg:px-20">
        <div className="text-[25px] md:text-[40px] font-poppins font-bold">
          ABOUT US
        </div>
        <div className="flex  w-full flex-col md:flex-row justify-between lg:min-w-[400px] font-poppins gap-4 md:gap-4">
          <button className="px-5 py-2 hover:bg-redDarkColor bg-redLightColor lg:text-[24px] text-[20px] rounded-full uppercase font-poppins font-regular">
            <a href="/contact-us">{`Consult our experts`}</a>
          </button>
          <button className="px-5 py-2 hover:bg-redDarkColor bg-redLightColor lg:text-[24px] text-[20px] rounded-full uppercase font-poppins font-regular">
            <a href="/career">{`Join our team`}</a>
          </button>
        </div>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
