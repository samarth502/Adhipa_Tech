import { Banner } from './components/banner';
import { Service } from './components/service';
import { WhyChoose } from './components/why-choose';
import { Process } from './components/process';
import { FrequentlyAskedQuestion } from './components/frequently-asked-question';
import { Blog } from './components/blog';

export const DigitalMarketing = () => {
  return (
    <>
      <Banner />
      <Service />
      <WhyChoose />
      <Process />
      <Blog />
      <FrequentlyAskedQuestion />
    </>
  );
};
