import Image from 'next/image';
import React from 'react';
import { Boy, Evaluation, MoneySvg, PlusSvg } from '../_images/LandingPage/LeynaExperience';
import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';
import { PlusIcon } from '../_images/LandingPage';

type Props = {};

const ThreeFeatures = [
  {
    icon: MoneySvg,
    firstLine: 'Human like',
    secondLine: 'interaction',
  },
  {
    icon: Evaluation,
    firstLine: 'Real Time',
    secondLine: 'Evaluation',
  },
  {
    icon: Evaluation,
    firstLine: 'Automated',
    secondLine: 'Scheduled',
  },
] as const;

export default function LeynaExperience({}: Props) {
  return (
    <div className="bg-[#EAEAEA]">
      <section className=" relative w-full  pt-5 container-custom2 lg:pt-0">
        {/* COMMENT:: Leyna text with text gradient */}
        <div>
          <p
            style={{
              backgroundImage:
                'linear-gradient(180deg, #FFFFFF 0%, rgba(254, 254, 254, 0.33) 100%)',
            }}
            className=" relative top-[40px] z-10 mx-auto w-fit bg-clip-text text-center text-[96px] font-[500] leading-[63px] text-transparent lg:top-[100px] lg:pt-[-20px] lg:text-[356px] lg:leading-[235px]"
          >
            Leyna
          </p>
        </div>
        {/* COMPLETED:: Boy Image */}
        <div className="relative z-20 mx-auto  aspect-[332/328] w-[332px]  lg:aspect-[632/624] lg:w-[632px]">
          {/* COMMENT:: 1)Image center */}
          <Image alt="client" src={Boy.src} fill className="  " />
          {/*COMMENT:: 2)Left Text Box */}
          <div className="absolute bottom-[96px] left-[10px] z-30 w-[112px]  lg:left-[-115px]  lg:w-[283px]">
            <div className="relative z-10">
              <div className="ml-auto mr-2 mt-1 flex h-4 w-4 items-center justify-center bg-[#F6F6F6] opacity-60 lg:h-12 lg:w-12 ">
                <Plus className="h-1.5 w-1.5 font-bold text-gray-500 lg:h-4 lg:w-6" />
              </div>
              <p className=" mx-auto my-3  w-[100px] text-right    text-[10px] font-[400]  italic text-[#1B1B1B] lg:w-[194px] lg:pb-[35px] lg:text-[24px] lg:leading-[30px]">
                Had a wonderful experience with leyna as the interviewer
              </p>
            </div>
            <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#F4F4F4] opacity-60"></div>
          </div>

          {/* COMMENT::3)Right Three Box */}
          {/* 112px left from content and 201px width of box total right -313px */}
          <div className="absolute right-[6px] top-7 flex flex-col gap-2.5 lg:right-[calc(-112px-201px)] lg:top-[-70px]">
            {/* COMPLETED:: Loop on Features */}
            {ThreeFeatures.map(({ firstLine, icon, secondLine }, index) => {
              const first = index === 0;
              return (
                <div
                  className={cn(
                    'flex h-[86px] w-[87px] flex-col  pl-2 pt-2.5 lg:h-[196px] lg:w-[201px] lg:pl-5 lg:pt-4',
                    first ? 'bg-[#FFFFFF]' : 'bg-[#FFFFFF80] ',
                  )}
                >
                  <div className="flex h-5 w-5 items-center justify-center  rounded-[0.43px] border border-[#C1C1C1]  lg:h-12 lg:w-12">
                    <Image
                      alt={`${firstLine} ${secondLine}`}
                      src={icon.src}
                      width={20}
                      height={20}
                      className="h-2 w-2 lg:h-4 lg:w-4 "
                    />
                  </div>
                  {/* Content */}
                  <p className="font inline-flex flex-col pt-[14px] text-[10px]  lg:pt-8 lg:text-[18px] lg:leading-[24px]">
                    <span>{firstLine}</span>
                    <span>{secondLine}</span>
                  </p>
                </div>
              );
            })}
          </div>
          {/* COMPLETED::4)Center Plus Icon */}
          <div className="absolute bottom-[5%] left-[50%]  flex  h-11 w-11 translate-x-[-50%] items-center justify-center rounded-full bg-[#FFFFFF9E] lg:h-20 lg:w-20">
            <img src={PlusSvg.src} alt="" className="h-4 w-4 lg:h-9 lg:w-9" />
          </div>
        </div>
      </section>
    </div>
  );
}
