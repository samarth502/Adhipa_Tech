import React from 'react';

import BlogOneImage from '../../../../assets/Home/blog-one.jpg';
import BlogThreeImage from '../../../../assets/Home/blog-two.jpg';
import BlogTwoImage from '../../../../assets/Home/blog-three.jpg';
import { CaseStudyItem } from './components/case-study-item';

export const CaseStudy: React.FC = () => {
  const data = [
    {
      image: BlogOneImage,
      title: 'AI in Action: Transforming Patient Care in Hospitals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
      image: BlogTwoImage,
      title: 'AI in Action: Transforming Patient Care in Hospitals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
      image: BlogThreeImage,
      title: 'AI in Action: Transforming Patient Care in Hospitals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    }
  ];

  return (
    <div className="flex flex-col mt-20 px-14 lg:px-20">
      <div className="flex flex-col">
        <h2 className="custom-heading-style lg:lg-custom-heading-style">
          Case Studies
        </h2>
      </div>
      <div className="mt-10 w-full xs:flex xs:overflow-x-auto xs:space-x-4  md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index} className="xs:min-w-[90%] sm:w-full">

          <CaseStudyItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
          </div>
        ))}
      </div>
    </div>
  );
};
