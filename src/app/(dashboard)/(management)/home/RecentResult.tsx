'use client';
import { Button } from '@/components/ui/button';
import { ScrollBar } from '@/components/ui/scroll-area';
import { Plus } from '@/images/dashboard';

import { cn } from '@/lib/utils';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import Image from 'next/image';
import React, { useState } from 'react';
import { results } from '../_data/Results';
import UpgradeToPro from '@/components/dashboard/UpgradeToPro';

export const departments = ['All', 'Sales', 'Design', 'Marketing'];

const RecentResult = () => {
  const [assignDepartment, setAssignDepartment] = useState<(typeof departments)[number]>(
    departments[0],
  );
  return (
    <section className=" ">
      {/* COMMENT::1)ScrollBar  */}
      <div>
        <ScrollArea>
          <section className="mb-4 mt-6 flex w-full  gap-4 container-left md:mt-7 md:gap-6 lg:mt-14 ">
            {departments.map((department, index) => {
              const active = assignDepartment === department;
              return (
                <Button
                  onClick={() => setAssignDepartment(department)}
                  key={index}
                  variant={active ? 'default' : 'outline'}
                  className={cn(
                    'h-12 rounded-[30px] px-6  text-xs md:px-7 md:text-base lg:px-9 ',
                    active ? 'font-[400] text-white ' : '',
                  )}
                >
                  {department}
                </Button>
              );
            })}
            <button className="aspect-square w-12 rounded-full bg-white flex-center">
              <Image className="w-1/2" width={40} height={40} src={Plus.src} alt={'Plus'} />
            </button>
          </section>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* COMMENT::2)Recent Result. */}
      <section className="mt-7 grid w-[98%] grid-cols-2 gap-x-4 gap-y-6 container-left container-right md:mt-8 md:grid-cols-3 lg:mt-10 lg:grid-cols-6 2xl:gap-x-[clamp(1rem,1.4vw+0.1rem,2rem)]">
        {results.map(({ firstName, lastName, date, jobTitle, rating, image, active }, index) => {
          return (
            <div key={index} className="space-y-4 rounded-[10px] bg-white pb-4 pl-2.5 pt-5">
              {image ? (
                <Image src={image.src} alt={firstName} width={120} height={120} className="w-1/2" />
              ) : (
                <div className="aspect-square w-1/2 rounded-[10px] bg-[#F7F7F7] flex-center">
                  <p className="text-2xl 2xl:text-[clamp(1.5rem,1vw+0.3rem,3rems)]">
                    {firstName.charAt(0)}
                  </p>
                </div>
              )}

              <p className="text-base font-[600] 2xl:text-[clamp(16px,1vw+0.3rem,32px)] 2xl:leading-[120%]">
                {firstName} <br />
                {lastName}
              </p>
              <p className="text-[14px] leading-[20px] text-[#706B6B] 2xl:text-[clamp(14px,1vw+0.2rem,28px)] 2xl:leading-[120%]">
                {date}
              </p>
              <p className="!mt-1 text-xs leading-[20px] text-black 2xl:text-[clamp(12px,1vw+0.3rem,24px)] 2xl:leading-[120%]">
                {jobTitle}
              </p>
              <div
                className={cn(
                  'w-[36.5%] rounded-[3px] bg-[#F6F6F6] py-2 flex-center 2xl:py-[clamp(0.5rem,1vw+0.1rem,1rem)]',
                  active && 'bg-[#E8FCFF]',
                )}
              >
                <p>{rating}/10</p>
              </div>
            </div>
          );
        })}
      </section>
      <UpgradeToPro />
      {/* TODO::Bottom Aryaa Section */}
      <div className="ml-auto w-[98%] container-left container-right"></div>
    </section>
  );
};

export default RecentResult;
