'use client';
import { companySizeData } from '@/components/PostCreationStep/CompanySize';
import React, { ReactElement, createContext, useContext, useState } from 'react';

//SECTION::Types
export type FormItems = {
  jobTitle: string;
  companySize: string;
  isApplicationLimitCap: boolean;
  isPostEndDate: boolean;
  postType: 'company' | 'candidate';
  applicationLimitCapNumber?: string;
  actualPostEndDate?: string;
  days?: string;
  months?: string;
  years?: string;
};

type PostCreationContextType = {
  postValue: FormItems;
  currentIndex: number;
  stepsNumber: number;
  steps: string[];
  updatePostValue: (value: Partial<FormItems>) => void;
  nextStep: () => void;
  previousStep: () => void;
  setCurrentIndex: (index: number) => void;
  toggleApplicationLimitCap: (value: boolean) => void;
  togglePostEndDate: (value: boolean) => void;
};

//SECTION::Creation of Context
const PostCreationContext = createContext<PostCreationContextType | undefined>(undefined);

const initialValues: FormItems = {
  jobTitle: '',
  companySize: companySizeData[0].value,
  isApplicationLimitCap: false,
  isPostEndDate: false,
  postType: 'company',
};

//SECTION::Provider
export const PostCreationContextProvider = ({ children }: { children: ReactElement }) => {
  const steps = [
    'Job Title',
    'Company Size',
    'Application Limit',
    'Company or Candidate',
    'Overview',
  ];

  const stepsNumber = steps.length;

  //COMMENT::State Part
  const [postValue, setPostValue] = useState<FormItems>(initialValues);
  const [currentIndex, setCurrentIndex] = useState(0);

  //COMMENT::Function Part
  const updatePostValue = (value: Partial<FormItems>) => {
    setPostValue({ ...postValue, ...value });
  };

  const nextStep = () => {
    if (currentIndex < stepsNumber - 1) {
      setCurrentIndex(i => i + 1);
    }
  };

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleApplicationLimitCap = (value: boolean) => {
    updatePostValue({ ...postValue, isApplicationLimitCap: value });
  };

  const togglePostEndDate = (value: boolean) => {
    updatePostValue({ ...postValue, isPostEndDate: value });
  };

  //COMMENT::Context Value
  const contextValue: PostCreationContextType = {
    postValue,
    currentIndex,
    stepsNumber,
    steps,
    updatePostValue,
    nextStep,
    previousStep,
    setCurrentIndex,
    toggleApplicationLimitCap,
    togglePostEndDate,
  };

  //COMMENT::Return Type
  return (
    <PostCreationContext.Provider value={contextValue}>{children}</PostCreationContext.Provider>
  );
};

//SECTION::HOOKS
export const usePostCreationContext = () => {
  const context = useContext(PostCreationContext);
  if (!context) {
    throw new Error('usePostCreationContext  must be used within a PostCreationContextProvider');
  }
  return context;
};
