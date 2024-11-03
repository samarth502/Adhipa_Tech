import React from 'react';
import userFriendly from '../../../../assets/Services/Web-development/userfriendly.jpg';
import security from '../../../../assets/Services/Web-development/security.jpg';
import brandIdentity from '../../../../assets/Services/Web-development/brandidentity.jpg';
import responsiveDesign from '../../../../assets/Services/Web-development/responsivedesign.jpg';
import integrity from '../../../../assets/Services/Web-development/integrity.jpg';
import scalability from '../../../../assets/Services/Web-development/scalability.jpg';
import { WhyChooseContainer } from '../../common/why-choose-container';

const data = [
  { image: userFriendly, title: 'User Friendly' },
  { image: security, title: 'Secure' },
  { image: brandIdentity, title: 'Brand Identity' },
  { image: responsiveDesign, title: 'Responsive Design' },
  { image: integrity, title: 'Integrity' },
  { image: scalability, title: 'Scalability' }
];

const heading = `Why Choose Adhipa Technologies`;
const description = `Partnering with Adhipa Technologies means unlocking the full potential
        of your digital presence through innovative and comprehensive web
        development. We create engaging, dynamic websites that evolve with your
        business needs, using the latest technology and a deep understanding of
        user experience. Our focus on security, responsiveness, and scalability
        ensures your site meets today’s demands and is ready for future
        challenges. With a commitment to integrity and strong brand identity, we
        deliver a unique digital presence that reflects your vision and stands
        out in a competitive landscape. Choose us to transform your ideas into a
        powerful, future-ready website.`;

export const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer
      heading={heading}
      description={description}
      data={data}
    />
  );
};
