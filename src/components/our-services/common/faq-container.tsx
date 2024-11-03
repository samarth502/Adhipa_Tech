import { useState } from 'react';
import { FaqContainerItem } from './components/faq-container-item';

interface IFaqData {
  id: number;
  question: string;
  answer: string;
}

interface IProps {
  faqData: IFaqData[];
}

export const FaqContainer: React.FC<IProps> = ({ faqData }) => {
  const [openFAQ, setOpenFAQ] = useState<number | undefined>(undefined);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? undefined : id);
  };

  return (
    <div className="px-14 lg:px-20 py-20">
      <h2 className="custom-heading-style lg:lg-custom-heading-style">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center mt-10">
        <div className="w-full space-y-4">
          {faqData.map(({ id, question, answer }) => (
            <FaqContainerItem
              key={id}
              id={id}
              question={question}
              answer={answer}
              isOpen={openFAQ === id}
              onToggle={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
