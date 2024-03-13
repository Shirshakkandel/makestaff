import ClosedComponent from '@/components/PostCreationStep/ClosedComponent';
import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Boy } from '@/app/(public)/_images/LandingPage/LeynaExperience';
import { BoyWithBackground } from '@/images/dashboard';
type Props = {};

export default function BottomOrRightComponent({}: Props) {
  return (
    <section className="h-full bg-[#f7f7f9] pt-4 container-left container-right md:pt-6 lg:pt-12">
      {/*COMMENT::(5:05-6) 1)OverAll Result Top */}
      <section>
        <ClosedComponent />
        <div className="flex flex-col lg:mt-7 lg:flex-row lg:items-center lg:justify-between">
          {/* 1.1)Top or left section */}
          <div className="">
            <p className="text-base  xl:text-xl ">Rahul Jatt’s</p>
            <p className="text-[19px] font-[500]  xl:text-[32px] ">Overall Result</p>
          </div>

          <div className="mt-7 flex gap-4">
            <div className="border-r-[1px] border-[#0000004D] pr-4">
              <p className=" text-base font-[500] xl:text-xl  ">Software Developer</p>
              <p className="text-14 text-right font-[400] text-[#706B6B] lg:text-base">Job Title</p>
            </div>

            <div>
              <p className="text-base font-[500] xl:text-xl ">12th Mar 2023</p>
              <p className="text-right text-[14px] font-[400] text-[#706B6B] lg:text-base">Date</p>
            </div>
          </div>
        </div>
      </section>

      {/*COMMENT::(6-8:12) 2)AI Review */}
      <Card className="border-none mt-section">
        <CardContent className="pb-4 pt-3">
          {/* 2.1)Card header */}
          <div className="flex  justify-between">
            <div className="flex  items-center gap-1 rounded-[3px] bg-[#F6F6F6]  px-1.5">
              <Image
                alt="Leyna"
                src={Leyna.src}
                width={44}
                height={52}
                className="aspect-[22/32] w-[22px] "
              />
              <p className="text-xs text-tableText">Leyna View</p>
            </div>

            <div className="flex ">
              <div className="gap-2 ">
                <p className="aspect-[63/32] w-[63px] rounded-[6px] text-xs font-[400] button-gradient flex-center ">
                  08<sub className="text-xxs ">/10</sub>
                </p>

                <p className="mt-1 text-center text-xs font-[400]">Rating</p>
              </div>
            </div>
          </div>

          {/* 2.2)Card Body */}
          <section className="mt-3 lg:mt-4">
            <p className="text-xl font-[500] ">Excellent</p>
            <p className="mt-6 lg:mt-7">
              That’s a great perpective to have as a frontend developer The Visual impact and the
              satisfaction from seeing your designs come to life can be highly motivating. Let’s
              continue
            </p>
          </section>
        </CardContent>
      </Card>

      {/*COMMENT:: 3)Chat History  */}
      {/* 88-133= 45 lines of code in 8:30-9:33 */}
      <section className="mt-section  mb-section">
        <h3 className="text-base font-[500] lg:text-xl">Chat History</h3>
        <ScrollArea className="mt-7 h-[336px] md:mt-8 lg:mt-9">
          <div className="w-[98%] space-y-6">
            {Array.from({ length: 8 }).map((_, index) => {
              //odd checking
              const even = (index + 1) % 2 === 0;
              return (
                <Card key={index} className="px-4 py-2">
                  <section className="flex flex-col border-none lg:flex-row lg:justify-between">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          'aspect-square w-12 rounded-[6px] ',
                          !even && 'body-gradient flex-center',
                        )}
                      >
                        <Image
                          className={cn('aspect-square', even ? 'w-full' : 'w-[90%] ')}
                          src={even ? BoyWithBackground.src : Leyna.src}
                          width={80}
                          height={80}
                          alt=""
                        />
                      </div>
                      <p className="text] w-[70%] text-xs  leading-[20px] md:text-[14px] lg:w-[330px]">
                        Can you briefly introduce yourself and describe your experience as a
                        Frontend developer
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-6 ">
                      <p className="text-xxs text-tableText md:text-[14px]">1:30 PM</p>
                      <div className="aspect-square w-8 bg-[#F6F6F6] flex-center">
                        <p className="text-[16px] font-[500]">{even ? 'A' : 'Q'}</p>
                      </div>
                    </div>
                  </section>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </section>
    </section>
  );
}
