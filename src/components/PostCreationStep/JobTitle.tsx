'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { usePostCreationContext } from '@/context/PostCreationContextProvider';
import Image from 'next/image';

import {
  BackendJob,
  FrontendJob,
  SalesJob,
  UIUxJob,
} from '@/images/employerPage/PostCreationSteps';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';

const jobTitle = [
  {
    title: 'Front-end Developer',
    icon: FrontendJob,
  },
  {
    title: 'Sales Manager',
    icon: SalesJob,
  },
  {
    title: 'UI/UX Designer',
    icon: UIUxJob,
  },
  {
    title: 'Back-end Developer',
    icon: BackendJob,
  },
];

type Props = {};
/* Logic to implement.
 Multi step form
1. if we use zod and form validation what about Next which should be inside form. 
2. second method => instead track state like JobTitle with state if null then pass value according to current index like if current index is 1 and title then disable. 
*/
export default function JobTitle({}: Props) {
  const { updatePostValue, postValue } = usePostCreationContext();
  // console.log({ postValue });

  return (
    <PostCreationStepsWrapper
      title={'What’s the Job Title?'}
      description="Give the title text here"
    >
      <Select
        value={postValue.jobTitle}
        required
        onValueChange={value => updatePostValue({ jobTitle: value })}
      >
        <SelectTrigger className="h-12 w-full   md:w-[80%] lg:min-h-16 2xl:h-[5vh] ">
          <SelectValue
            className=""
            placeholder="Eg. Frontend Developer, back-end developer, salesmen"
          />
        </SelectTrigger>

        <SelectContent>
          {jobTitle.map(({ icon, title }, index) => (
            <SelectItem value={title} key={index}>
              <span className="flex items-center gap-2 text-base 3xl:text-[clamp(1rem,1vw+0.2rem,1.5rem)]">
                <Image
                  src={icon.src}
                  alt={title}
                  width={30}
                  height={30}
                  className="aspect-square  w-4 3xl:w-6 4xl:w-8 "
                />
                {title}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </PostCreationStepsWrapper>
  );
}
