'use client';
import React, { createContext, useState, useContext, ReactElement } from 'react';

// StepContext interface defining the shape of the context
interface StepContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  complete: boolean;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  steps: readonly [
    'Job Title',
    'Company Size',
    'ApplicationLimit',
    'Company or Candidate',
    'Overview',
  ];
}

// Create the StepContext
export const StepContext = createContext<StepContextType | undefined>(undefined);

// StepProvider component to provide the context to its children
export const StepProvider = ({ children }: { children: ReactElement }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);

  const steps = [
    'Job Title',
    'Company Size',
    'ApplicationLimit',
    'Company or Candidate',
    'Overview',
  ] as const;

  // Value of the context
  const value: StepContextType = {
    currentStep,
    setCurrentStep,
    complete,
    setComplete,
    steps,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

// Custom hook to consume the StepContext
export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStepContext must be used within a StepProvider');
  }
  return context;
};
