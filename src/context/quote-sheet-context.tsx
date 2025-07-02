'use client';

import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type QuoteSheetContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const QuoteSheetContext = createContext<QuoteSheetContextType | undefined>(undefined);

export function QuoteSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteSheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </QuoteSheetContext.Provider>
  );
}

export function useQuoteSheet() {
  const context = useContext(QuoteSheetContext);
  if (context === undefined) {
    throw new Error('useQuoteSheet must be used within a QuoteSheetProvider');
  }
  return context;
}
