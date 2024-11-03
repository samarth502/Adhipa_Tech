import React from 'react';
import { ServiceItem } from './components/service-item';
import CrossPlatformAppDevelopment from '../../../../assets/Services/Mobile-development/Crossplatformappdevelopment.jpg';
import MobileTesting from '../../../../assets/Services/Mobile-development/Mobileappdevelopmentandqanda.jpg';
import NativeAppDevelopment from '../../../../assets/Services/Mobile-development/Nativeappdevelopment.jpg';
import MobileApplicationDevelopmentImage from '../../../../assets/Services/Mobile-development/Appstoreoptimization.jpg';
import MobileSiteMaintenanceAndSupportImage from '../../../../assets/Services/Mobile-development/Appmainatinceandsupport.jpg';
import MobileAppConsultancyImage from '../../../../assets/Services/Mobile-development/mobileappconsultancy.jpg';
import uIuX from '../../../../assets/Services/Mobile-development/uiuxdesign.jpg';
interface ServiceData {
  image: string;
  title: string;
  description: string;
}

const data: ServiceData[] = [
  {
    image: MobileAppConsultancyImage,
    title: 'Mobile App Consultation',
    description:
      'Our Mobile App Consultation service offers expert advice on app development, design, and strategy. We guide you through every stage, from initial planning to launch, ensuring your app meets your goals and market needs effectively.'
  },
  {
    image: MobileTesting,
    title: 'Mobile App Testing & QA',
    description:
      'Our Mobile App Testing & QA services ensure your app is reliable, functional, and user-friendly. We perform extensive testing across multiple devices and platforms to identify and fix errors, ensuring a stable and reliable application.'
  },
  {
    image: NativeAppDevelopment,
    title: 'Native App Development',
    description:
      'Our Native App Development service creates high-performance apps tailored specifically for iOS and Android platforms. By leveraging platform-specific technologies, we ensure optimal functionality, speed, and user experience for your target audience.'
  },
  {
    image: uIuX,
    title: 'UI/UX Design',
    description:
      'Our UI/UX design service focuses on crafting user-friendly interfaces for mobile applications. We conduct in-depth user research, develop comprehensive wireframes, and design visually appealing layouts to elevate user experience, ensuring your app captures attention and exceeds user expectations.'
  },
  {
    image: CrossPlatformAppDevelopment,
    title: 'Cross Platform App Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi laudantium earum. Quidem rem libero exercitationem officiis, ea hic ducimus earum officia illo voluptatum perspiciatis eos unde amet excepturi impedit'
  },
  {
    image: MobileSiteMaintenanceAndSupportImage,
    title: 'App Maintenance & Support',
    description:
      'Our Mobile App Maintenance and Support services keep your app running smoothly with regular updates, performance monitoring, and prompt issue resolution. We ensure your app remains functional, secure, and up-to-date, providing ongoing support to meet evolving needs.'
  },
  {
    image: MobileApplicationDevelopmentImage,
    title: 'App Store Optimization',
    description:
      'Our App Store Optimization service enhances your app’s visibility and ranking in app stores. We employ targeted strategies to improve discoverability, drive downloads, and boost user engagement, helping your app stand out in a crowded marketplace.'
  }
];

export const Service: React.FC = () => {
  return (
    <div className="mt-20 px-14 lg:px-20">
      <h1 className="custom-heading-style lg:lg-custom-heading-style">
        Our Mobile Development Services
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
