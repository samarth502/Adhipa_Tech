import { FaqContainer } from '../../common/faq-container';

const faqData = [
  {
    id: 1,
    question: 'How can you help me improve my IT infrastructure?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question: 'How do you ensure data security and compliance?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question: 'What is your approach to project management?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 4,
    question: 'What is the process for migrating to cloud services?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
  }
];

export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
