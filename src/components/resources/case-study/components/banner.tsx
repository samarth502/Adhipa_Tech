import React from 'react';
import BannerImage from '../../../../assets/Resources/CaseStudy/banner.jpg';
import { MainMail } from '../../../../common/main-mail';
import { MainPhone } from '../../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex  justify-start">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[50vh] object-cover z-0"
      />
      <div className="absolute ml-9  flex flex-col items-center justify-center gap-7 text-black z-10 top-[40%] lg:top-[42%]">
        <h2 className="font-poppins md:text-[40px] text-[24px] lg:ml-24  font-bold">
          CASE STUDIES
        </h2>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
