import { FaqContainer } from '../../our-services/common/faq-container';

const faqData = [
  {
    id: 1,
    question: 'What is typical response time for support requests?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question: 'Why do we use it?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question: 'Where does it come from?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  }
];
export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
