import React from 'react';
import { ServiceItem } from './components/service-item.tsx';
import cloudConsulting from '../../../../assets/Services/IT-consulting/cloudconsulting.jpg';
import systemIntegration from '../../../../assets/Services/IT-consulting/systemintegration.jpg';
import technologyStrategyConsulting from '../../../../assets/Services/IT-consulting/technologystatergyconsulting.jpg';
import softwareDevelopmentAndCustomization from '../../../../assets/Services/IT-consulting/softwaredevelopemtnandcustomization.jpg';
import itInfrastructure from '../../../../assets/Services/IT-consulting/ITinfrstructure.jpg';
import itOutsourcingAndManagedServices from '../../../../assets/Services/IT-consulting/IToutsourcingnadmanagedservices.jpg';

interface ServiceData {
  image: string;
  title: string;
  description: string;
}

const data: ServiceData[] = [
  {
    image: cloudConsulting,
    title: 'Cloud Consulting',
    description:
      'Our cloud consulting service helps you navigate the complexities of cloud adoption and optimization. We assess your needs, design a tailored cloud strategy, and assist with migration and management. We ensure a seamless transition to the cloud, enhancing scalability, security, and efficiency for your business.'
  },
  {
    image: systemIntegration,
    title: 'System Integration',
    description:
      'Our system integration service unifies your IT systems into a cohesive network. We assess your infrastructure, identify gaps, and integrate software and hardware to ensure seamless communication, enhancing productivity and streamlining operations.'
  },
  {
    image: technologyStrategyConsulting,
    title: 'Technology Strategy Consulting',
    description:
      'Our technology strategy consulting service empowers businesses to harness the full potential of their IT infrastructure in alignment with their strategic objectives. We work closely with you to assess your current systems, identify areas for improvement, and develop a comprehensive technology roadmap to drive your companys success.'
  },
  {
    image: softwareDevelopmentAndCustomization,
    title: 'Software Development and Customization',
    description:
      'Our software development and consultation service creates custom software solutions aligned with your business goals. We work closely with you to understand your needs, develop the software, and offer ongoing support. Trust us to deliver reliable, high-quality software that accelerates your success.'
  },
  {
    image: itInfrastructure,
    title: 'IT Infrastructure Consulting',
    description:
      'Our IT infrastructure consulting service optimizes your technology foundation for efficiency and scalability. We evaluate your current infrastructure, design improvements, and implement solutions to enhance performance, security, and reliability, ensuring your IT systems support your business growth effectively.'
  },
  {
    image: itOutsourcingAndManagedServices,
    title: 'IT Outsourcing and Managed Services',
    description:
      'Our IT outsourcing and managed services provide businesses with expert support for their IT needs, allowing you to focus on core operations. We handle everything from infrastructure management to cybersecurity, ensuring reliable performance and peace of mind through proactive monitoring and tailored solutions.'
  }
];

export const Service: React.FC = () => {
  return (
    <div className="mt-20 px-14 lg:px-20">
      <h1 className="custom-heading-style lg:lg-custom-heading-style">
        Our Consulting Services
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
