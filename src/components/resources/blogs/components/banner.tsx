import React from 'react';
import BannerImage from '../../../../assets/Resources/Blogs/banner.jpg';
import { MainMail } from '../../../../common/main-mail';
import { MainPhone } from '../../../../common/main-phone';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center">
      <img
        src={BannerImage}
        alt="BannerImage"
        className="w-full h-[50vh] object-cover z-0"
      />
      <div className="absolute px-14 md:px-20 flex flex-col items-center justify-center text-white z-10 top-[50%]">
        <h2 className="font-poppins text-[24px] md:text-[40px] tracking-wider font-bold">
          BLOGS
        </h2>
      </div>
      <MainPhone />
      <MainMail />
    </div>
  );
};
