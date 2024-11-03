import React from 'react';

interface IProps {
  image: string;
  title: string;
  description: string;
}

export const BlogItem: React.FC<IProps> = ({ image, title, description }) => {
  return (
    <div className="bg-primary group relative hover:scale-105 transition-transform duration-300 text-white">
      <img
        src={image}
        alt={`${title} image`}
        className="w-full h-[150px] sm:h-[180px] md:h-[250px] object-cover"
      />
      <div className="p-3 sm:p-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
          {title}
        </h2>
        <p className="text-white mt-4 text-xs sm:text-sm md:text-base mb-10 line-clamp-3">
          {description}
        </p>
        <a
          href="#"
          className="text-blue-500 absolute bottom-5 right-9 hover:underline text-xs sm:text-sm "
        >
          Read more
        </a>
      </div>
    </div>
  );
};
