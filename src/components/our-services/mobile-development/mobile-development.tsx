import { CaseStudy } from './components/case-study';
import { Banner } from './components/banner';
import { FrequentlyAskedQuestion } from './components/frequently-asked-question';
import { Service } from './components/service';
import { Process } from './components/process';
import { WhyChoose } from './components/why-choose';

export const MobileDevelopment = () => {
  return (
    <>
      <Banner />
      <Service />
      <WhyChoose />
      <Process />
      <CaseStudy />
      <FrequentlyAskedQuestion />
    </>
  );
};
