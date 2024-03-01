'use client';

import { useStepContext } from '@/context/stepContext';
import React from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  ApplicationLimit,
  CompanyOrCandidate,
  CompanySize,
  JobTitle,
  Overview,
} from '@/components/PostCreationStep';
import usePostCreationLogic from '@/lib/hooks/usePostCreationLogic';
import { Button } from '@/components/ui/button';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';

type Props = {};

export default function PostCreationStep({}: Props) {
  const {
    currentIndex,
    setCurrentIndex,
    stepsNumber,
    nextStep,
    previousStep,
    postValue,
    displayStepComponents,
  } = usePostCreationContext();

  //COMMENT::State
  const completePercentage = ((currentIndex + 1) / stepsNumber) * 100;
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === stepsNumber - 1;

  //SECTION::Function handleOnSubmit
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  const isNextSubmitDisable = () => {
    if (currentIndex === 0 && postValue.jobTitle == '') {
      return true;
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="h-full">
      <div className="flex h-full flex-col ">
        <div className="flex-1">{displayStepComponents(currentIndex)}</div>
        {/* Line Progress */}
        <div className="">
          <div className="relative h-[3px] w-full bg-[#F0EBEB] ">
            <div
              className="absolute inset-0 bg-black transition"
              style={{ width: `${completePercentage}%` }}
            ></div>
          </div>
          {/* Back and Next Button */}
          <div className="flex justify-between">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => {
                  previousStep();
                }}
              >
                Back
              </button>
            )}
            <Button className="ml-auto" disabled={isNextSubmitDisable()} type="submit">
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
