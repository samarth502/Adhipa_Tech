import React from 'react';
import BannerImage from '../../../assets/Technologies/banner.jpg';
import { MainMail } from '../../../common/main-mail';
import { MainPhone } from '../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[50vh] object-cover z-0"
      />
      <div className="absolute flex flex-col items-center justify-center gap-7 text-white z-10 top-[35%] px-14 md:px-20">
        <div className="text-[24px] md:text-[40px] font-poppins font-bold">
          OUR TECHNOLOGIES
        </div>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
