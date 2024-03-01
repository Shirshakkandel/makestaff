'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import usePostCreationLogic from '@/lib/hooks/usePostCreationLogic';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';
import Image from 'next/image';
import { Closed } from '@/images/auth';

type Props = {};
/* Logic to implement.
 Multi step form
1. if we use zod and form validation what about Next which should be inside form. 
2. second method => instead track state like JobTitle with state if null then pass value according to current index like if current index is 1 and title then disable. 
*/
export default function JobTitle({}: Props) {
  const { updatePostValue, postValue } = usePostCreationContext();

  return (
    <main className="h-full  py-5 container-custom 2xl:pt-[5%]">
      <div className="flex justify-end">
        <div className="relative flex aspect-square w-[7.7%] min-w-[28px] justify-end rounded-full border-[1px] border-[#00000066] flex-center lg:w-[4%]">
          <Image alt={Closed} src={Closed.src} width={32} height={32} className="w-[60%]" />
        </div>
      </div>
      <section className="mt-[180px] lg:mt-[19%]">
        <h1 className=" 3xl: text-base font-[500] leading-[50px] md:text-[32px] md:leading-[50px] 2xl:text-[clamp(32px,2vw+0.3rem,70px)] 2xl:leading-[130%]">
          What’s the Job Title?
        </h1>
        <p className=" text-xs leading-[20px] md:text-base  2xl:mt-5 2xl:text-[clamp(1rem,2vw+0.2rem,2rem)] 2xl:leading-[130%]">
          Give the title text here
        </p>

        <div className="mt-6 w-full  lg:mt-14">
          <Select
            value={postValue.jobTitle}
            required
            onValueChange={value => updatePostValue({ jobTitle: value })}
          >
            <SelectTrigger className="h-12 w-full  md:w-[80%] lg:h-16 2xl:h-[6vh] ">
              <SelectValue
                className="placeholder:text-[#00000066]"
                placeholder="Eg. Frontend Developer, back-end developer, salesmen"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
    </main>
  );
}
