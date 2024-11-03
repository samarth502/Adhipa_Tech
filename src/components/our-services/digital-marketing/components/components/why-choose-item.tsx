import React from 'react';

interface IProps {
  image: string;
  title: string;
}

export const WhyChooseItem: React.FC<IProps> = ({ image, title }) => {
  return (
    <div
      className="relative rounded-[20px] hover:scale-105 duration-300 transition-transform overflow-hidden h-[204px] w-[280px] lg:w-[363px]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover shadow-md"
      />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-[#000048]/80 flex justify-center items-center text-white text-lg font-poppins font-extrabold">
        {title}
      </div>
    </div>
  );
};
