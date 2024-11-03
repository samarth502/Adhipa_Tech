import { FaqContainer } from '../../common/faq-container';

const faqData = [
  {
    id: 1,
    question: 'How long does it take to complete building a website?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question:
      'How do you select the right technologies for each web development project?',
    answer: 'It is a long established fact that a reader will be distracted.'
  },
  {
    id: 3,
    question: 'What is the cost structure for web development services?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 4,
    question: 'What kind of ongoing support and maintenance do you offer?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
  },
  {
    id: 5,
    question:
      'How do you ensure the website is mobile-friendly and responsive?',
    answer:
      'Yes, using Lorem Ipsum is perfectly safe for design and layout purposes.'
  }
];

export const FrequentlyAskedQuestion = () => {
  return <FaqContainer faqData={faqData} />;
};
