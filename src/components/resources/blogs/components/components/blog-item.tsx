import React from 'react';

interface IProps {
  image: string;
  title: string;
  description: string;
}

export const BlogItem: React.FC<IProps> = ({ image, title, description }) => {
  return (
    <div className="bg-[#000048] relative max-h-[500px]  hover:scale-105 transition-transform duration-500 text-white w-full sm:w-[300px] md:w-full rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] sm:h-[180px] md:h-[250px] object-cover"
      />
      <div className="p-3 sm:p-4 relative">
        <h2 className="text-base line-clamp-2 sm:text-lg md:text-xl font-semibold mb-1">
          {title}
        </h2>
        <p className="text-white line-clamp-4 text-xs sm:text-sm md:text-base mb-10 ">
          {description}
        </p>
        <a
          href="#"
          className="text-blue-500 absolute bottom-3 right-3 hover:underline text-xs sm:text-sm"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
