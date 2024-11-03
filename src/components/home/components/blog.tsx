import React, { useEffect, useRef, useState } from 'react';
import { BlogItem } from './components/blog-item';
import { useBlog } from '../../resources/blogs/blog-context';

export const Blog: React.FC = () => {
  const { blogs } = useBlog();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer && window.innerWidth <= 640) {
      // Ensure scrollContainer exists and target mobile screens
      let scrollAmount = 0;
      const scrollStep = 2; // Adjust this value to change the scroll speed

      const scrollInterval = setInterval(() => {
        if (!isPaused) {
          if (
            scrollAmount <=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollAmount += scrollStep;
            scrollContainer.scrollLeft = scrollAmount;
          } else {
            scrollAmount = 0; // Reset to the beginning for infinite scrolling
          }
        }
      }, 20); // Adjust the interval time to control how fast it scrolls (20ms here)

      // Clean up the interval on component unmount
      return () => clearInterval(scrollInterval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={`${
        blogs.length > 0
          ? 'flex flex-col items-center py-20 px-14 md:px-20 mx-auto'
          : 'mt-20'
      }`}
    >
      {blogs.length > 0 && (
        <>
          {/* Header Section */}
          <div className="text-center flex flex-col">
            <span className="custom-text-style md:md-custom-text-style uppercase tracking-wider">
              {`STAY INFORMED`}
            </span>
            <span className="custom-heading-style lg:lg-custom-heading-style mt-2">
              Read Blogs and Articles
            </span>
          </div>

          <div className="flex justify-end w-full">
            <a
              href="/resources/blogs"
              className="text-blue-600 text-[20px] hover:underline hover:text-redLightColor font-poppins font-regular mt-4"
            >
              See All
            </a>
          </div>

          {/* Horizontal Scroll on Extra-Small Devices, Grid on Larger Screens */}
          <div
            ref={scrollRef}
            className="mt-10 w-full flex sm:grid overflow-x-auto sm:overflow-hidden flex-nowrap space-x-4 sm:space-x-0 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {blogs.map((item, index) => (
              <div key={index} className="max-w-[100%] flex-shrink-0">
                <BlogItem
                  key={index}
                  image={item.image}
                  title={item.heading}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
