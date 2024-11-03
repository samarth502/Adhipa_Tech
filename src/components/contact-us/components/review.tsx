import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ReviewItem } from './components/review-item';
import { useState } from 'react';

const reviews = [
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi voluptas ex enim quis esse repellendus ipsam consequuntur, quibusdam modi!',
    author: 'John Doe'
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi voluptas ex enim quis esse repellendus ipsam consequuntur, quibusdam modi!',
    author: 'John Doe'
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi voluptas ex enim quis esse repellendus ipsam consequuntur, quibusdam modi!',
    author: 'John Doe'
  },
  {
    rating: 3,
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi voluptas ex enim quis esse repellendus ipsam consequuntur, quibusdam modi!',
    author: 'John Doe'
  },
  {
    rating: 4,
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi voluptas ex enim quis esse repellendus ipsam consequuntur, quibusdam modi!',
    author: 'John Doe'
  }
];

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const handleNext = () => {
    if (currentIndex < reviews.length - visibleReviews) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mb-20">
      <h2 className="custom-heading-style lg:lg-custom-heading-style px-14 lg:px-20">
        Adhipa Technologies Reviews
      </h2>
      <div className="flex mt-10 items-center justify-center w-full p-4 mx-auto max-w-[90vw]">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="bg-[#F0F0F5] p-2 rounded-lg h-14 w-11 shadow-md items-center"
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack className="text-black" size={28} />
        </button>

        {/* Review Items */}
        <ReviewItem
          reviews={reviews}
          currentIndex={currentIndex}
          visibleReviews={visibleReviews}
        />

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="bg-faqBgColor p-2 rounded-lg h-14 w-11 shadow-md items-center"
          disabled={currentIndex >= reviews.length - visibleReviews}
        >
          <IoIosArrowForward className="text-black" size={28} />
        </button>
      </div>
    </div>
  );
};
