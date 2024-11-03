import React from 'react';
import { TechnologiesItem } from './components/technology-item';
import nodeImage from '../../../assets/Technologies/node.jpg';
import javaImage from '../../../assets/Technologies/java.jpg';
import kubernetesImage from '../../../assets/Technologies/kubernetes.jpg';
import php from '../../../assets/Technologies/php.png';

const backendTechnologiesData = [
  { id: 1, title: 'Node JS', image: nodeImage },
  { id: 2, title: 'PHP', image: php },
  { id: 3, title: 'Java', image: javaImage },
  { id: 4, title: 'Kubernetes', image: kubernetesImage }
];

export const Backend: React.FC = () => {
  return (
    <div className="flex w-full flex-col px-14 lg:px-20 mt-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Backend
      </span>
      <span className=" text-justify tracking-wide custom-body-style lg:lg-custom-body-style mt-8">
        Our backend services at Adhipa Technologies are built to power your
        applications with reliability, scalability, and security. Utilizing
        technologies like Node.js, PHP, Java, and Kubernetes, we create robust
        backend solutions that handle complex processes, manage data
        efficiently, and ensure seamless integration with your front-end.
        Whether it's APIs, databases, or server management, we deliver backend
        architectures that are both powerful and adaptable to your business
        needs.
      </span>
      <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {backendTechnologiesData.map((tech) => (
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
