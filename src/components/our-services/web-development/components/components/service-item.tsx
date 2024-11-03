import React from 'react';

interface IProps {
  title: string;
  image: string;
  description: string;
}

export const ServiceItem: React.FC<IProps> = ({
  title,
  image,
  description
}) => {
  return (
    <div className="group relative  font-poppins w-full max-w-[370px] h-[300px] rounded-[18px] text-white">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full backface-visibility-hidden flex flex-col">
          <div className="bg-primary  bg-opacity-70 w-full h-[22%] flex items-center justify-center rounded-t-[18px] backdrop-blur">
            <h2 className="font-poppins text-[16px] lg:text-[20px] font-semibold">
              {title}
            </h2>
          </div>
          <img
            src={image}
            alt={title}
            className="w-full h-[78%] object-cover rounded-b-[18px]"
          />
        </div>

        <div className="absolute w-full h-full bg-primary text-center px-4 flex items-center justify-center rounded-[18px] [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:rotate-y-0">
          <p className="text-[14px] lg:text-[18px] font-regular font-poppins">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
