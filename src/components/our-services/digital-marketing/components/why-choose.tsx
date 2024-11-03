import expertTeam from '../../../../assets/Services/Mobile-development/expertteam.jpg';
import tailoredStrategy from '../../../../assets/Services/Digital-marketing/tailredstatergy.jpg';
import socialEngagement from '../../../../assets/Services/Digital-marketing/socialengagement.jpg';
import adCampaigns from '../../../../assets/Services/Digital-marketing/addcampains.jpg';
import contentCreation from '../../../../assets/Services/Digital-marketing/contentcreation.jpg';
import { WhyChooseContainer } from '../../common/why-choose-container';

const data = [
  { image: expertTeam, title: 'Expert Team' },
  { image: tailoredStrategy, title: 'Tailored Strategy' },
  { image: socialEngagement, title: 'Social Engagement' },
  { image: adCampaigns, title: 'Ad Campaigns' },
  { image: contentCreation, title: 'Content Creation' }
];

const heading = `Why Choose Adhipa Technologies`;
const description = `Adhipa Technologies transforms your digital presence with marketing
        strategies that captivate and connect. Our experienced team crafts
        innovative strategies that go beyond conventional approaches, ensuring
        your brand resonates with your audience and stands out in a crowded
        digital space. We blend creativity with data-driven insights to deliver
        campaigns that not only capture attention but also deliver measurable
        results, helping your business grow and thrive in the digital landscape.`;

export const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer
      heading={heading}
      description={description}
      data={data}
    />
  );
};
