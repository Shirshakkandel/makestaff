'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';

import Image from 'next/image';
import { ArrowBack, ArrowRightWhite } from '@/images/employerPage/PostCreationSteps';
import {
  ApplicationLimit,
  CompanyOrCandidate,
  CompanySize,
  JobTitle,
  Overview,
} from '@/components/PostCreationStep';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

type Props = {};

export default function PostCreationStep({}: Props) {
  const { currentIndex, setCurrentIndex, stepsNumber, nextStep, previousStep, postValue } =
    usePostCreationContext();
  const router = useRouter();

  const { toast } = useToast();

  //COMMENT::State
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
  const completePercentage = ((currentIndex + 1) / stepsNumber) * 100;
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === stepsNumber - 1;

  //SECTION::Function handleOnSubmit
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLastStep) {
      const { isApplicationLimitCap, isPostEndDate, applicationLimitCapNumber, actualPostEndDate } =
        postValue;

      //if no isApplicationLimit and isPostEndData then delete days, months, years
      if (!isApplicationLimitCap) {
        delete postValue.applicationLimitCapNumber;
      }

      if (!isPostEndDate) {
        delete postValue.actualPostEndDate;
        delete postValue.days;
        delete postValue.months;
        delete postValue.years;
      }

      toast({
        title: 'You submitted the following values to backend:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(postValue, null, 2)}</code>
          </pre>
        ),
      });

      router.push('/post-created');
    } else {
      nextStep();
    }
  };

  const isNextSubmitDisable = () => {
    if (currentIndex === 0 && postValue.jobTitle == '') {
      return true;
    }
  };
  console.log(postValue);
  //SECTION::UI PART
  return (
    <form onSubmit={handleOnSubmit} className="h-full">
      <div className="flex h-full flex-col">
        <div className="flex-1">{displayStepComponents(currentIndex)}</div>

        {/* Line Progress */}
        <div className="mt-24">
          <div className="relative h-[3px] w-full bg-[#F0EBEB] ">
            <div
              className="absolute inset-0 bg-black transition"
              style={{ width: `${completePercentage}%` }}
            ></div>
          </div>

          {/*COMMENT:: Back and Next Button */}
          <div className="mt-9 flex justify-between pb-6 container-left container-right lg:mt-14 lg:pb-10 xl:pb-[10%] ">
            {!isFirstStep && (
              <Button
                className="space-x-1 text-base hover:no-underline"
                variant={'link'}
                type="button"
                onClick={() => {
                  previousStep();
                }}
              >
                <Image
                  src={ArrowBack.src}
                  width={40}
                  height={40}
                  alt="Arrow Right"
                  className="inline-flex aspect-square w-5 "
                />
                <span>Back</span>
              </Button>
            )}

            <Button
              className="ml-auto space-x-1 rounded-[3px] px-5 text-base "
              disabled={isNextSubmitDisable()}
              type="submit"
            >
              <span>{currentIndex >= 2 ? 'Submit' : 'Next'}</span>
              <Image
                src={ArrowRightWhite.src}
                width={40}
                height={40}
                alt="Arrow Right"
                className="inline-flex aspect-square w-5 "
              />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
