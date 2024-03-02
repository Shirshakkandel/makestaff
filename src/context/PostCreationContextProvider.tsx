'use client';
import {
  ApplicationLimit,
  CompanyOrCandidate,
  CompanySize,
  JobTitle,
  Overview,
} from '@/components/PostCreationStep';
import React, { ReactElement, createContext, useContext, useState } from 'react';

type PostCreationContextType = {
  postValue: FormItems;
  currentIndex: number;
  stepsNumber: number;
  steps: string[];
  updatePostValue: (value: Partial<FormItems>) => void;
  nextStep: () => void;
  previousStep: () => void;
  setCurrentIndex: (index: number) => void;
  displayStepComponents: (index: number) => ReactElement | null;
};

const PostCreationContext = createContext<PostCreationContextType | undefined>(undefined);

export type FormItems = {
  jobTitle: string;
  companySize: string;
  isApplicationLimitCap: boolean;
  isPostEndDate: boolean;
  postType: 'company' | 'candidate';
  applicationLimitCapNumber?: string;
  actualPostEndDate?: string;
};

export const companySizeData = [
  {
    title: 'Less than 10',
    value: '0-10',
  },
  {
    title: '11-50',
    value: '11-50',
  },
  {
    title: '51-200',
    value: '51-200',
  },
  {
    title: '201-300',
    value: '201-300',
  },
  {
    title: '301-1000',
    value: '301-1000',
  },
  {
    title: '1001-5000',
    value: '1001-5000',
  },
  {
    title: 'More than 5000',
    value: '5000-',
  },
] as const;

const initialValues: FormItems = {
  jobTitle: '',
  companySize: companySizeData[0].value,
  isApplicationLimitCap: false,
  isPostEndDate: false,
  postType: 'company',
};

export const PostCreationContextProvider = ({ children }: { children: ReactElement }) => {
  const [postValue, setPostValue] = useState<FormItems>(initialValues);
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayStepComponents = (index: number) => {
    switch (index) {
      case 0:
        return <JobTitle />;
      case 1:
        return <CompanySize />;
      case 2:
        return <ApplicationLimit />;
      case 3:
        return <CompanyOrCandidate />;
      case 4:
        return <Overview />;
      default:
        return null;
    }
  };
  const steps = [
    'Job Title',
    'Company Size',
    'Application Limit',
    'Company or Candidate',
    'Overview',
  ];
  const stepsNumber = steps.length;

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

  //COMMENT::Context Type
  const contextValue: PostCreationContextType = {
    postValue,
    currentIndex,
    stepsNumber,
    steps,
    updatePostValue,
    nextStep,
    previousStep,
    setCurrentIndex,
    displayStepComponents,
  };

  //COMMENT::Return Type
  return (
    <PostCreationContext.Provider value={contextValue}>{children}</PostCreationContext.Provider>
  );
};

export const usePostCreationContext = () => {
  const context = useContext(PostCreationContext);
  if (!context) {
    throw new Error('usePostCreationContext  must be used within a PostCreationContextProvider');
  }
  return context;
};
