import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Case {
    id: number;
    image: string;
    heading: string;
    paragraph: string;
  }
interface CaseContextType {
  Cases: Case[];
  setCases: React.Dispatch<React.SetStateAction<Case[]>>;
}

const CaseContext = createContext<CaseContextType | undefined>(undefined);

interface CaseProviderProps {
  children: ReactNode; // Define the type for children
}

export const CaseProvider: React.FC<CaseProviderProps> = ({ children }) => {
  const [Cases, setCases] = useState<Case[]>([]);

  return (
    <CaseContext.Provider value={{ Cases, setCases }}>
      {children}
    </CaseContext.Provider>
  );
};

export const useCase = () => {
  const context = useContext(CaseContext);
  if (!context) {
    throw new Error('useCase must be used within a CaseProvider');
  }
  return context;
};
