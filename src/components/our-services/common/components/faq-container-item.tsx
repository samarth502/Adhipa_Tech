import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface IProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export const FaqContainerItem: React.FC<IProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle
}) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className="bg-faqBgColor p-6 rounded-lg shadow-lg cursor-pointer relative overflow-visible transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <p className="custom-body-style lg:lg-custom-body-style">{question}</p>
        <button className="text-xl focus:outline-none">
          {isOpen ? (
            <FiMinus className="w-18 h-18 font-poppins" />
          ) : (
            <FiPlus className="w-18 h-18 font-poppins" />
          )}
        </button>
      </div>
      <div
        className={`absolute left-0 right-0 bg-[#F4F4F4] p-6 rounded-lg shadow-lg z-10 transform ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        } transition-transform duration-300`}
      >
        {isOpen && (
          <p className="custom-body-style lg:lg-custom-body-style">{answer}</p>
        )}
      </div>
    </div>
  );
};
