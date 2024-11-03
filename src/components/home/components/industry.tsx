import React from 'react';

import ECommerceImage from '../../../assets/Home/e-commerce.jpg';
import EducationImage from '../../../assets/Home/education.jpg';
import FinanceImage from '../../../assets/Home/finance.jpg';
import HealthCareImage from '../../../assets/Home/health-care.jpg';
import HospitalityImage from '../../../assets/Home/Hospitality.jpg';
import ManufacturingImage from '../../../assets/Home/Manufacturing.jpg';
import RealStateImage from '../../../assets/Home/real-state.jpg';
import RetailImage from '../../../assets/Home/Retail.jpg';
import SupplyChainImage from '../../../assets/Home/supply-chain.jpg';

const images = [
  { src: ECommerceImage, title: 'E Commerce' },
  { src: HealthCareImage, title: 'Health Care' },
  { src: EducationImage, title: 'Education' },
  { src: ManufacturingImage, title: 'Manufacturing' },
  { src: FinanceImage, title: 'Finance' },
  { src: RealStateImage, title: 'Real Estate' },
  { src: HospitalityImage, title: 'Hospitality' },
  { src: SupplyChainImage, title: 'Supply Chain' },
  { src: RetailImage, title: 'Retail' }
];

export const Industry: React.FC = () => {
  return (
    <div className="mt-20 w-full flex items-center h-auto flex-col justify-center">
      <span className="custom-text-style lg:md-custom-text-style">{`INDUSTRIES WE SERVE`}</span>
      <span className="custom-heading-style lg:lg-custom-heading-style">
        Whom We Serve
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 mt-12">
        {images.map(({ src, title }) => (
          <div
            key={title}
            className="relative rounded-[20px] overflow-hidden h-[158px] md:h-[316px] w-[158px] md:w-[310px] hover:outline hover:outline-[4px] hover:outline-red-700"
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover shadow-md"
            />
            <div className="absolute lg:text-[24px] text-[16px] font-poppins bottom-0 inset-x-0 h-14 bg-primary flex justify-center items-center text-white text-lg font-semibold backdrop-blur">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
