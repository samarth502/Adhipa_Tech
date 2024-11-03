import React from 'react';
import { IoStar } from 'react-icons/io5';

interface Review {
  rating: number;
  comment: string;
  author: string;
}

interface IProps {
  reviews: Review[];
  currentIndex: number;
  visibleReviews: number;
}

export const ReviewItem: React.FC<IProps> = ({
  reviews,
  currentIndex,
  visibleReviews
}) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)`
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-3" // Horizontal padding for spacing
            style={{ width: `calc(100% / ${visibleReviews})` }} // Adjust width based on the number of visible reviews
          >
            <div className="flex flex-col justify-between p-6 bg-[#000048] text-white rounded-lg shadow-lg h-[300px] items-center text-center">
              <div className="flex flex-row items-center">
                <div className="flex text-xl font-lato mr-2">
                  {review.rating}
                </div>
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <IoStar className="text-yellow-600" key={i} size={34} />
                  ))}
                </div>
              </div>
              <p className="text-sm font-poppins mt-3 whitespace-normal break-words">
                {review.comment}
              </p>
              <div className="mt-4 font-poppins">- {review.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
