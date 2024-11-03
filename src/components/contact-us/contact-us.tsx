import { Banner } from './components/banner';
import { FrequentlyAskedQuestion } from './components/frequently-asked-question';
import { LetConnect } from './components/let-connect';
import { Review } from './components/review';

export const ContactUs = () => {
  return (
    <>
      <Banner />
      <LetConnect />
      <FrequentlyAskedQuestion />
      <Review />
    </>
  );
};
