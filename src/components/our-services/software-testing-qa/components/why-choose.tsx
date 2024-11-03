import ContinuousImprovement from '../../../../assets/Services/Software-testing-qa/ContinuousImprovement.jpg';
import Scalability from '../../../../assets/Services/Web-development/scalability.jpg';
import ExpertTeam from '../../../../assets/Services/Mobile-development/expertteam.jpg';
import { WhyChooseContainer } from '../../common/why-choose-container';

const data = [
  { image: ExpertTeam, title: 'Expert team' },
  { image: Scalability, title: 'Scalability' },
  { image: ContinuousImprovement, title: 'Continuous Improvement' }
];
const heading = `Why Choose Adhipa Technologies`;
const description = `Choosing Adhipa Technologies for your software testing and QA needs
        means ensuring the highest standards of quality and reliability for your
        products. We approach testing with a focus on precision and
        thoroughness, leveraging our expertise to identify and address potential
        issues before they impact your users. Our commitment to continuous
        improvement means that your software is always evolving, staying ahead
        of industry standards and user expectations. With a scalable approach
        tailored to your business’s growth, we deliver robust solutions that
        enhance performance and security. Partner with us to ensure your
        software not only meets but exceeds the expectations of a competitive
        market, providing a seamless and trustworthy experience for your users.`;

export const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer
      heading={heading}
      description={description}
      data={data}
    />
  );
};
