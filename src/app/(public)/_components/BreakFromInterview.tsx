import Image from 'next/image';
import React from 'react';
import { HeroDivider } from '../_images/LandingPage/Hero';
import { Plus } from 'lucide-react';
import { Leyna, Leyna40, LeynaSvg } from '../_images/LandingPage';

type Props = {};

export default function BreakFromInterview({}: Props) {
  return (
    <section className="bg-black text-center container-custom">
      <div className="mx-auto w-full pb-[58px] pt-9 md:max-w-[677px] md:pb-[99px] md:pt-[115px]">
        {/*COMPLETED:: 1)Heading with image  after linda*/}
        <h2 className=" mx-auto max-w-[560px] align-bottom text-[19px] font-[500]  leading-[22.29px] text-white md:text-[40px] md:leading-[46.92px]">
          Take break form interviews Leyna
          <span
            style={{
              background: 'linear-gradient(90deg, #F99FAE 0%, #A5C8FF 62.81%, #A2E5FF 100%)',
            }}
            className="mx-1 inline-flex h-6 w-6 items-center justify-center rounded-[3px]  border  border-transparent  align-bottom md:mx-2  md:h-12 md:w-12 md:rounded-[6px]"
          >
            <Image
              alt="Leyna"
              quality={100}
              src={Leyna.src}
              width={100}
              height={140}
              className="relative  z-20 aspect-[30/44] h-[22px] w-[15px] md:h-[44px] md:w-[30px] "
            />
          </span>
          is here to help you.
        </h2>

        {/*COMPLETED:: 2)Horizontal Line Custom */}

        <div className="mt-5 flex w-full items-center gap-1 md:mt-16  md:gap-2">
          <div className="w-1/2 border border-[#4C4C4C]"></div>
          <Plus className="h-4 w-4 text-[#4C4C4C] md:h-[35px] md:w-[35px]" />
          <div className="w-1/2 border border-[#4C4C4C]"></div>
        </div>

        {/* 3)Description */}
        <p className="mt-5 align-middle  text-[12px] font-[400] leading-[18px] text-[#AAAAAA] md:mt-11 md:text-[20px] md:leading-[28px] ">
          in just 2 minutes, hire from a pool candidates leyna will handle the process and present
          you with the best profiles.
        </p>
      </div>
    </section>
  );
}
