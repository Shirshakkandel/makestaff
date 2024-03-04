import React from 'react';
import Image from 'next/image';
import { HandEmoji, PostCreatedBackground } from '@/images/employerPage/PostCreationSteps';
import { Leyna, PhotoBackground } from '@/app/(public)/_images/LandingPage';
import { Flower } from '@/images/auth';
type Props = {};

export default function TopOrLeftComponent({}: Props) {
  return (
    <section className=" ">
      {/* COMMENT::1)Absolute Section */}

      {/* 1)Flower at bottom */}
      <Image
        alt="flower"
        width={188}
        height={200}
        src={Flower.src}
        className="absolute bottom-0 right-[10%] aspect-[94/107] w-[94px]"
      />
      {/*2)Multi color Background  */}
      <Image
        src={PostCreatedBackground.src}
        alt="Background"
        width={805}
        height={607}
        className="absolute right-0 top-[10%]  aspect-[275/222] w-[76%] md:w-[64%]"
      />

      {/* COMMENT::2)Content */}
      <section className="container-left">
        {/* image with bottom background */}
        <div className="relative mt-28 aspect-[54/78] w-[54px] lg:mt-[211px] 2xl:w-[8%]">
          <Image src={Leyna.src} fill alt="Leyna" />
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(226, 241, 243, 0) 31.73%, #D6F5FE 100%)',
            }}
            className="absolute bottom-0 z-10 aspect-[54/37] w-[54px] 2xl:w-[8%] "
          ></div>
        </div>
        {/* <Image /> */}
        <p className="mt-4 flex items-center gap-1 font-sansSerifBookFLF text-base  md:text-[28px] lg:mt-7 2xl:text-[clamp(1.75rem,2vw+0.2rem,3rem)] 2xl:leading-[115%] ">
          Wonderful{' '}
          <Image
            alt="Hand Emoji"
            src={HandEmoji.src}
            width={50}
            height={50}
            className="inline-flex aspect-square w-7 items-center 2xl:w-[4%] "
          />
        </p>

        <h1 className=" mt-5 text-[34px] font-[600] leading-[40px] text-heading md:mt-7 md:text-[56px] md:leading-[66px] lg:mt-10 2xl:leading-[120%] 2xl:text-[56px,2vw+0.5rem,110px]">
          Post <br />
          Created!
        </h1>
        <p className="lg:mt-102xl:leading-[120%] mt-5 pb-48 font-sansSerifBookFLF text-base font-[550] md:mt-7 md:text-[28px] 2xl:text-[1.75rem,1.5vw+0.2rem,3rem]">
          Successfully
        </p>
      </section>
    </section>
  );
}
