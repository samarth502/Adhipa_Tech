import React from 'react';
import { ServiceItem } from './components/service-item';
import manualTesting from '../../../../assets/Services/Software-testing-qa/ManualTesting.jpg';
import securityTesting from '../../../../assets/Services/Software-testing-qa/SecurityTesting.jpg';
import performanceTesting from '../../../../assets/Services/Software-testing-qa/PerformanceTesting.jpg';
import automationTesting from '../../../../assets/Services/Software-testing-qa/AutomationTesting.jpg';
import apiTesting from '../../../../assets/Services/Software-testing-qa/ApiTesting.jpg';
import continuousTesting from '../../../../assets/Services/Software-testing-qa/ContinuousTesting.jpg';

interface ServiceData {
  image: string;
  title: string;
  description: string;
}

const data: ServiceData[] = [
  {
    image: manualTesting,
    title: 'Manual Testing',
    description:
      'Our Manual Testing service involves meticulously evaluating your software by hand to identify bugs and usability issues. We simulate real user interactions to ensure your application performs seamlessly and meets quality standards before release.'
  },
  {
    image: securityTesting,
    title: 'Security Testing',
    description:
      'Our Security Testing service rigorously evaluates your software for vulnerabilities and threats, ensuring robust protection against cyber attacks. We identify and address potential risks to safeguard your data and maintain your system’s integrity.'
  },
  {
    image: performanceTesting,
    title: 'Performance Testing',
    description:
      'Our performance testing service evaluates how your software performs under various conditions. We simulate real-world loads to identify bottlenecks and ensure your application runs smoothly and efficiently, providing a seamless user experience even during peak usage.'
  },
  {
    image: automationTesting,
    title: 'Automation Testing',
    description:
      'Our automation testing service streamlines your testing process by using automated scripts to execute repetitive tests efficiently. We design and implement robust test cases, ensuring consistent and reliable results while accelerating the testing cycle and reducing manual effort.'
  },
  {
    image: apiTesting,
    title: 'API Testing',
    description:
      'We rigorously validate Application Programming Interfaces (APIs) to ensure they function correctly. Our experts verify data exchange, security, performance, and compatibility. Trust us to keep your APIs error-free.'
  },
  {
    image: continuousTesting,
    title: 'Continuous Testing',
    description:
      'Our continuous testing service integrates automated testing into your development pipeline, ensuring rapid feedback on code changes. We continuously execute tests throughout the development process, identifying issues early and enhancing software quality with each iteration.'
  }
];

export const Service: React.FC = () => {
  return (
    <div className="mt-20 px-14 lg:px-20">
      <h1 className="custom-heading-style lg:lg-custom-heading-style">
        Our Software Testing & QA Services
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
