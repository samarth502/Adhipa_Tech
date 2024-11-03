import { FaqContainer } from '../../common/faq-container';

const faqData = [
  {
    id: 1,
    question: 'How do you handle defect management?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question: 'What is the difference between manual and automated testing?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question: 'What tools and technologies do you use for testing?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 4,
    question: 'What metrics do you use to measure testing success?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
  },
  {
    id: 5,
    question: 'Can you integrate with our existing development processes?',
    answer:
      'Yes, using Lorem Ipsum is perfectly safe for design and layout purposes.'
  }
];

export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
