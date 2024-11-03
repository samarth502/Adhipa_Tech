import React from 'react';

interface IProps {
  image: string;
  title: string;
}

export const WhyChooseContainerItem: React.FC<IProps> = ({ image, title }) => {
  return (
    <div className="relative rounded-[20px] hover:scale-105 duration-300 transition-transform overflow-hidden h-[300px] w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover shadow-md"
      />
      <div className="absolute font-poppins text-[16px] lg:text-[20px] font-semibold bottom-0 inset-x-0 h-14 bg-primary flex justify-center items-center text-white backdrop-blur">
        {title}
      </div>
    </div>
  );
};
