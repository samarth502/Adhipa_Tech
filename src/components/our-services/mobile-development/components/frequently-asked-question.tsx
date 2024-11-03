import { FaqContainer } from '../../common/faq-container';

const faqData = [
  {
    id: 1,
    question:
      'How does mobile app development streamline our business processes and increase operational efficiency?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question:
      'Do you offer integration with existing systems or third-party services?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question:
      'What are the differences between native and hybrid mobile app development?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 4,
    question:
      'How do you ensure mobile apps are compatible with different devices and screen sizes?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
  }
];

export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
