import { FaqContainer } from '../../common/faq-container';

const faqData = [
  {
    id: 1,
    question: 'How do you handle customer complaints online?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question: 'How do you handle content creation and management?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question: 'How do you handle content creation and management?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 4,
    question:
      'What is the typical timeline for seeing results from digital marketing efforts?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
  }
];

export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
