import { TechnologiesItem } from './components/technology-item';
import AI from '../../../assets/Technologies/AI.svg';
import Blockchain from '../../../assets/Technologies/blockchain.svg';

const technologiesData = [
  { id: 1, title: 'Artificial Intelligence', image: AI },
  { id: 2, title: 'Blockchain', image: Blockchain }
];

export const TechnologicalAdvancement = () => {
  return (
    <div className="flex w-full flex-col px-14 lg:px-20 py-20">
      <span className="custom-heading-style  lg:lg-custom-heading-style">
        Technological Advancements
      </span>
      <span className=" text-justify tracking-wide custom-body-style lg:lg-custom-body-style mt-8">
        Harness the potential of cutting-edge technology with Adhipa
        Technologies' advanced solutions in Artificial Intelligence and
        Blockchain. We excel in integrating AI to enhance decision-making,
        automate processes, and deliver actionable insights, while our
        blockchain expertise ensures secure, transparent, and efficient
        transactions. Our solutions are designed to propel your business
        forward, driving innovation and maintaining a competitive edge in a
        rapidly evolving digital landscape.
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
