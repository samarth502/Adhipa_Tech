import React from 'react';
import BannerImage from '../../../assets/Career/banner.jpg';
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
      <div className="absolute flex flex-col items-center justify-center text-white z-10 top-[40%] md:top-[50%]">
        <h2 className="text-[24px] md:text-[40px] tracking-wider font-poppins font-bold">
          JOIN OUR TEAM
        </h2>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
