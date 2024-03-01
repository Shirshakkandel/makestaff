import React, { useState } from 'react';

type Props = {};
export type FormItems = {
  jobTitle: string;
  companySize: string;
  applicationLimitCap: boolean;
  postEndDate: boolean;
  postType: 'company' | 'candidate';
  applicationLimitCapNumber?: string;
  actualPostEndDate?: string;
};

const initialValues: FormItems = {
  jobTitle: '',
  companySize: '',
  applicationLimitCap: false,
  postEndDate: false,
  postType: 'company',
};

export default function usePostCreationLogic() {
  //COMMENT::State and data
  const [postValue, setPostValue] = useState(initialValues);
  const [currentIndex, setCurrentIndex] = useState(0);
  const steps = [
    'Job Title',
    'Company Size',
    'Application Limit',
    'Company or Candidate',
    'Overview',
  ];
  const stepsNumber = steps.length;

  //COMMENT::Function
  const nextStep = () => {
    if (currentIndex < stepsNumber - 1) {
      setCurrentIndex(i => i + 1);
    }
    // if (currentIndex === 3) {
    //   setShowSuccessMsg(true);
    // }
  };

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const updatePostValue = (value: Partial<FormItems>) => {
    setPostValue({ ...postValue, ...value });
  };

  //COMMENT::Return object
  return {
    postValue,
    currentIndex,
    setPostValue,
    setCurrentIndex,
    updatePostValue,
    stepsNumber,
    steps,
    nextStep,
    previousStep,
  };
}
