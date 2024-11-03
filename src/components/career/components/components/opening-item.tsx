import React from 'react';

interface IProps {
  title: string;
  description: string;
  jobType: string;
}

export const OpeningItem: React.FC<IProps> = ({
  title,
  description,
  jobType
}) => {
  return (
    <div className="flex flex-col p-4 border-2 border-black shadow-lg bg-white w-[300px] h-[300px] justify-between">
      <h3 className="text-[20px] md:text-[24px] font-poppins font-semibold text-black mb-2">
        {title}
      </h3>
      <p className="text-[13px] font-poppins font-regular text-blue-600 mb-2 text-left">
        {jobType}
      </p>
      <p className="text-[13px] font-poppins font-regular text-black mb-4 text-left">
        {description}
      </p>
      <button className="rounded-full font-poppins font-regular max-w-[70%] bg-redLightColor text-white py-2 px-4  hover:bg-redDarkColor transition duration-300 uppercase">
        Read More
      </button>
    </div>
  );
};
