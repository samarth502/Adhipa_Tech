import React from 'react';
import { OpeningItem } from './components/opening-item';

export const Opening: React.FC = () => {
  const openingsData = [
    {
      id: 1,
      title: 'Software Engineer',
      description:
        'Join our team as a Software Engineer and contribute to building cutting-edge applications. You will work with a dynamic group of developers, collaborate on innovative projects, and have the opportunity to grow your career in a fast-paced environment.',
      jobType: 'Remote'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      description:
        'We are looking for a Frontend Developer with experience in React, Vue, or Angular. You will work on building intuitive user interfaces and delivering engaging user experiences.',
      jobType: 'Onsite'
    },
    {
      id: 3,
      title: 'Backend Developer',
      description:
        'As a Backend Developer, you will design, develop, and maintain server-side logic, ensuring high performance and responsiveness to requests from the front end.',
      jobType: 'Hybrid'
    },
    {
      id: 4,
      title: 'Backend Developer',
      description:
        'As a Backend Developer, you will design, develop, and maintain server-side logic, ensuring high performance and responsiveness to requests from the front end.',
      jobType: 'Hybrid'
    }
  ];

  return (
    <div className="w-full mx-auto flex flex-col px-14 md:px-20 mt-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Openings
      </span>
      {openingsData.length === 0 && (
        <span className="text-[20px] lg:text-[24px] font-poppins font-semibold mt-8">
          We're not hiring at the moment. Thank you for you interest.
        </span>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {openingsData.length > 0 &&
          openingsData.map((opening) => (
            <OpeningItem
              key={opening.id}
              title={opening.title}
              description={opening.description}
              jobType={opening.jobType}
            />
          ))}
      </div>
    </div>
  );
};
