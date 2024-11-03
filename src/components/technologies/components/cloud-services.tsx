import { TechnologiesItem } from './components/technology-item';
import AWS from '../../../assets/Technologies/aws.jpg';
import Azure from '../../../assets/Technologies/microsoft-azure.svg';

const technologiesData = [
  { id: 1, title: 'AWS', image: AWS },
  { id: 2, title: 'Azure', image: Azure }
];

export const CloudServices = () => {
  return (
    <div className="flex w-full flex-col px-14 lg:px-20 mt-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Cloud Services
      </span>
      <span className="text-justify tracking-wide custom-body-style lg:lg-custom-body-style mt-8">
        Leverage the power of cloud computing with Adhipa Technologies'
        comprehensive cloud services. We specialize in deploying and managing
        solutions on leading platforms like AWS and Azure, enabling your
        business to scale effortlessly while maintaining security and
        performance. Our cloud services are designed to optimize your
        infrastructure, reduce operational costs, and ensure your data is
        secure, making your journey to the cloud seamless and efficient.
      </span>
      <div className="mt-10 xs:grid-cols-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {technologiesData.map((tech) => (
          <TechnologiesItem
            key={tech.id}
            title={tech.title}
            image={tech.image}
          />
        ))}
      </div>
    </div>
  );
};
