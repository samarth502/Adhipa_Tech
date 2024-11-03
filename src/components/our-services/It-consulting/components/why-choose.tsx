import InnovativeSolution from "../../../../assets/Services/IT-consulting/innovativesolution'.jpg";
import ExpertTeam from '../../../../assets/Services/Mobile-development/expertteam.jpg';
import security from '../../../../assets/Services/Web-development/security.jpg';
import { WhyChooseContainer } from '../../common/why-choose-container.tsx';

const data = [
  { image: ExpertTeam, title: 'Expert team' },
  { image: InnovativeSolution, title: 'Innovative Solutions' },
  { image: security, title: 'Secure' }
];

const heading = `Why Choose Adhipa Technologies`;
const description = ` Adhipa Technologies provides IT consulting that redefines how your
        business leverages technology. Our team brings a wealth of experience
        and a fresh perspective, helping you navigate complex challenges and
        seize opportunities in the ever-evolving tech landscape. We provide more
        than just advice—we deliver innovative, secure solutions that drive
        efficiency and future-proof your IT infrastructure. Partner with us to
        transform your IT capabilities, ensuring they not only support but
        actively propel your business toward sustained success.`;

export const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer
      heading={heading}
      description={description}
      data={data}
    />
  );
};
