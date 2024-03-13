import BackButton from '@/components/dashboard/BackButton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CircleWithHalfColor } from '@/images/dashboard/extraPages';
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

type Props = {};

export default function TopOrLeftComponent({}: Props) {
  return (
    <section className="relative top-or-left-container">
      {/*COMMENT::1)Back*/}
      <BackButton />

      {/*COMMENT::2)4 Description */}
      {/* 8:15-9:10=> 55-15=> 40 lines */}
      <section className="mt-10 lg:mt-44">
        <p className="text-xl font-normal lg:text-3xl">
          Your digital <span className="font-medium">Frontend Developer</span> interviewer at{' '}
          <span className="font-semibold">smarslide</span>
        </p>
        <section className="grid grid-cols-2 gap-4  mt-section lg:w-[85%]">
          {[
            { number: 10, top: 'MINUTES', bottom: 'Duration' },
            { number: 12, top: 'AVERAGE', bottom: 'Question' },
          ].map(({ bottom, number, top }, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className={cn('flex w-full items-center gap-2', isFirst && 'border-r-2')}
              >
                <p className="text-[40px] font-normal leading-[55px] md:text-[48px] md:leading-[67px]">
                  {number}
                </p>
                <div className="flex flex-col">
                  <p className="text-14 text-tableText md:text-base ">{top}</p>
                  <p className="text-base font-medium md:text-xl ">{bottom}</p>
                </div>
              </div>
            );
          })}

          {[
            { top: 'JOB TITLE', bottom: 'Frontend developer' },
            { top: 'COMPANY', bottom: 'Smartslide.ai' },
          ].map(({ top, bottom }, index) => {
            const isFirst = index === 0;
            return (
              <div key={index} className={cn('mt-section', isFirst && 'border-r-2 ')}>
                <p className="text-14 text-tableText md:text-base">{top}</p>
                <p className="text-base font-medium md:text-xl">{bottom}</p>
              </div>
            );
          })}
        </section>
      </section>

      {/*COMMENT:: 3)Time Left */}
      {/* 9:15-9:32 => */}
      <section className="container-right mt-section mb-section">
        <Card className="border-none lg:w-[80%]">
          {/* <CardHeader className="h-0"></CardHeader> */}
          <CardContent className="flex items-center gap-5 pt-6">
            <Image
              src={CircleWithHalfColor.src}
              alt="Circle"
              width={100}
              height={100}
              className="aspect-square w-[57px] md:w-[86px] "
            />
            <div className="flex flex-col justify-center ">
              <p className="text-base text-[#706B6B] ">Time Left</p>
              <p className="text-3xl font-normal ">00:15:04</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
