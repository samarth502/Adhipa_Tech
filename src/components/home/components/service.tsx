import React from 'react';

import WebDevelopmentImage from '../../../assets/Home/web-development.jpg';
import MobileDevelopmentImage from '../../../assets/Home/mobile-app-development.jpg';
import ITConsultingImage from '../../../assets/Home/it-consulting.png';
import DigitalMarketingImage from '../../../assets/Home/digital-marketing.jpg';

import { ServiceItem } from './components/service-item';

export const Service: React.FC = () => {
  const data = [
    {
      title: 'Web Development',
      image: WebDevelopmentImage,
      description: `Crafting dynamic websites with sleek designs and seamless functionality. From responsive layouts to robust backend solutions, we tailor web development services to elevate your online presence. Let's bring your vision to life.`,
      url: `/our-services/web-development`
    },
    {
      title: 'Mobile App Development',
      image: MobileDevelopmentImage,
      description: `Innovative mobile app development services that combine cutting-edge technology with intuitive design. From concept to launch, we create immersive user experiences that drive engagement and success. Let's transform your ideas into reality.`,
      url: `/our-services/mobile-development`
    },
    {
      title: 'Digital Marketing',
      image: DigitalMarketingImage,
      description: `Transform your online presence with our comprehensive digital marketing services. From SEO and social media management to content creation and advertising, we tailor strategies to elevate your brand, drive traffic, and boost conversions. `,
      url: `/our-services/digital-marketing`
    },
    {
      title: 'IT Consulting',
      image: ITConsultingImage,
      description: `Unlock the future of your business with innovative IT consulting solutions designed to transform and elevate your operations.  Navigate the complexities of the digital age with our expert guidance for lasting success.`,
      url: `/our-services/it-consulting`
    }
  ];

  return (
    <div className="flex flex-col items-center mt-20 px-14 md:px-20">
      <div className="text-center flex flex-col">
        <span className="custom-text-style lg:md-custom-text-style">
          {`Services we provide`}
        </span>
        <span className="custom-heading-style lg:lg-custom-heading-style">
          What we're offering
        </span>
      </div>
      <div className="flex flex-wrap gap-8 lg:gap-12 mt-10 justify-center md:justify-between">
        {data.map((item, index) => (
          <ServiceItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
