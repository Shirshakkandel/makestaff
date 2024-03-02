import React from 'react';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';
import { Tick } from '@/images/employerPage/HrLogin';
import Image from 'next/image';
import { Check } from '@/images/employerPage/PostCreationSteps';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';

type Props = {};

export default function CompanyOrCandidate({}: Props) {
  const { postValue, updatePostValue } = usePostCreationContext();
  return (
    <PostCreationStepsWrapper title="Just few step..." className="lg:mt-[99px] 3xl:mt-[12%]">
      <>
        <p className="inline-flex flex-col gap-3">
          <span className="text-2xl font-medium  3xl:text-[clamp(1.5rem,1vw+0.2rem,3rem)] 3xl:leading-[120%]">
            I’m a
          </span>

          <span className="text-base font-[400] 3xl:text-[clamp(1rem,1vw+0.1rem,2.2rem)] 3xl:leading-[120%]">
            Select whether you are a company or a candidate
          </span>
        </p>

        <div className="mt-5 flex flex-col gap-6 md:mt-8">
          {/* <div
            className="relative w-full rounded-[6px] border-[1px] border-[#A2A2A2] bg-white px-4 py-3 md:px-6 md:py-4  lg:w-[100%] 3xl:min-w-[580px] 2xl:w-[90%]"
            style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
          >
            <Image
              src={Check.src}
              width={48}
              height={48}
              alt="checked"
              className="absolute right-0  top-0 z-30 h-6 w-6 translate-x-[20%] translate-y-[-35%] 2xl:h-8 2xl:w-8"
            />
            <p className="text-base font-bold 3xl:text-[clamp(1rem,1vw+0.1rem,2rem)] 3xl:leading-[120%] ">
              Company
            </p>
            <p className="mt-1 text-xs text-[#676767] md:text-[14px] lg:text-xs xl:text-base 3xl:text-[clamp(1rem,1vw+0.2rem,2.1rem)] 3xl:leading-[120%]">
              I’m Interested in implementing Leyn.ai at my company
            </p>
          </div> */}
          <CardSelect
            value="Company"
            description="  I’m Interested in implementing Leyn.ai at my company"
            isSelected={postValue.postType === 'company'}
            onClick={() => {
              updatePostValue({ postType: 'company' });
            }}
          />
          <CardSelect
            value="Candidate"
            description="I’m applying for a job at a company that uses Leyna.ai"
            isSelected={postValue.postType === 'candidate'}
            onClick={() => {
              updatePostValue({ postType: 'candidate' });
            }}
          />
        </div>
      </>
    </PostCreationStepsWrapper>
  );
}

const CardSelect = ({
  value,
  description,
  isSelected,
  onClick,
}: {
  value: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="relative w-full cursor-pointer rounded-[6px] border-[1px] border-[#A2A2A2] bg-white px-4 py-3 md:px-6 md:py-4  lg:w-[100%] 3xl:min-w-[580px] 2xl:w-[90%]"
      style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
      onClick={() => onClick()}
    >
      {isSelected && (
        <Image
          src={Check.src}
          width={48}
          height={48}
          alt="checked"
          className="absolute right-0  top-0 z-30 h-6 w-6 translate-x-[20%] translate-y-[-35%] 2xl:h-8 2xl:w-8"
        />
      )}

      <p className="text-base font-bold 3xl:text-[clamp(1rem,1vw+0.1rem,2rem)] 3xl:leading-[120%] ">
        {value}
      </p>
      <p className="mt-1 text-xs text-[#676767] md:text-[14px] lg:text-xs xl:text-base 3xl:text-[clamp(1rem,1vw+0.2rem,2.1rem)] 3xl:leading-[120%]">
        {description}
      </p>
    </div>
  );
};
