import React from 'react';

interface IProps {
  title: string;
  image: string;
  description: string;
  url: string;
}

export const ServiceItem: React.FC<IProps> = ({
  title,
  image,
  description,
  url
}) => {
  return (
    <div className="group relative bg-primary px-4 max-w-[300px] h-[400px] rounded-[18px] text-white flex flex-col items-center justify-between py-8 hover:scale-105 transition-transform duration-300">
      <div className="font-poppins text-[20px] font-semibold">{title}</div>
      <div className="flex flex-row w-full h-[70%] transition-opacity duration-300 group-hover:hidden">
        <img src={image} alt={title} className={`h-full object-cover`} />
      </div>
      <p className="hidden group-hover:block text-[16px]">{description}</p>
      <button className="hover:bg-redDarkColor bg-redLightColor rounded-full w-[65%] py-1 mt-4 lg:text-[20px] text-[18px] uppercase font-poppins font-regular cursor-pointer">
        <a href={url}>View Details </a>
      </button>
    </div>
  );
};
