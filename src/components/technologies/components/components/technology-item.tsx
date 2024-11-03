import React from 'react';

interface IProps {
  title: string;
  image: string;
}

export const TechnologiesItem: React.FC<IProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col w-[280px] h-[300px] text-white items-center justify-between bg-primary p-8 rounded-[1rem] shadow-md xs:w-full xs:h-48 md:h-[300px]  ">

      <div className="flex flex-col items-center justify-center bg-white md:w-40  md:h-40 rounded-[2rem] mt-auto  xs:w-20 xs:h-20 xs:rounded-full ">

        <img src={image} alt={title} className="w-[80%] h-[80%] object-cover xs:h-full xs:w-full rounded-full" />
      </div>

      <span className="text-[16px] xs:text-sm text-center md:text-[20px] font-poppins font-regular mt-auto">
        {title}
      </span>
    </div>
  );
};
