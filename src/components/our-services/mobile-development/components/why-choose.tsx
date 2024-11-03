import userFriendly from '../../../../assets/Services/Web-development/userfriendly.jpg';
import security from '../../../../assets/Services/Web-development/security.jpg';
import expertTeam from '../../../../assets/Services/Mobile-development/expertteam.jpg';
import { WhyChooseContainer } from '../../common/why-choose-container';

const data = [
  { image: expertTeam, title: 'Expert team' },
  { image: userFriendly, title: 'User Friendly' },
  { image: security, title: 'Secure' }
];

const heading = `Why Choose Adhipa Technologies`;
const description = ` Choosing Adhipa Technologies for your mobile app development means
        embracing a future-focused approach that blends creativity with
        technical excellence. We deliver more than just functional apps; we
        create seamless, engaging experiences that captivate users and drive
        business success. Our expert team ensures every project is executed with
        precision, backed by cutting-edge technology and an unwavering
        commitment to security. With a focus on innovation and a deep
        understanding of market trends, we transform your vision into a
        powerful, high-performing app that stands out in the crowded mobile
        landscape and evolves with your business.`;

export const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer
      heading={heading}
      description={description}
      data={data}
    />
  );
};
