import React from 'react';
import { ServiceItem } from './components/service-item';
import SocialMedia from '../../../../assets/Services/Digital-marketing/socialmedia.jpg';
import LeadGeneration from '../../../../assets/Services/Digital-marketing/leadgenration.jpg';
import SEO from '../../../../assets/Services/Digital-marketing/seo.jpg';
interface ServiceData {
  image: string;
  title: string;
  description: string;
}

const data: ServiceData[] = [
  {
    image: SocialMedia,
    title: 'Social Media Marketing',
    description:
      'Our social media marketing service builds and enhances your brand’s presence online. We create engaging content, manage your social channels, and use data-driven strategies to connect with your audience effectively'
  },
  {
    image: LeadGeneration,
    title: 'Lead Generation',
    description:
      'Our lead generation service drives high-quality prospects to your business through targeted strategies. We identify and attract potential customers using data-driven approaches and optimized campaigns, ensuring you receive qualified leads that boost your sales and growth. Trust us to deliver effective and reliable results.'
  },
  {
    image: SEO,
    title: 'SEO',
    description:
      'Our SEO service optimizes your website to rank higher in search engine results, driving organic traffic to your business. We conduct thorough keyword research, on-page optimization, and technical audits to boost visibility.'
  }
];

export const Service: React.FC = () => {
  return (
    <div className="mt-20 px-14 lg:px-20">
      <h1 className="custom-heading-style lg:lg-custom-heading-style">
        Our Digital Marketing Services
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {data.map((item, index) => (
          <ServiceItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
