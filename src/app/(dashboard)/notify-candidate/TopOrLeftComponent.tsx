import { Boy } from '@/app/(public)/_images/LandingPage/LeynaExperience';
import { Flower } from '@/images/auth';
import { Qualified, QualifiedBackground } from '@/images/dashboard/extraPages';
import { HandEmoji } from '@/images/employerPage/HrLogin';
import { ArrowBack } from '@/images/employerPage/PostCreationSteps';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function TopOrLeftComponent({}: Props) {
  return (
    <section className="top-or-left-container relative">
      {/*COMMENT:: 1)Back Button */}
      {/* 8:20-8:30=> 12-21 */}
      <button className="rounded-[3px] bg-white px-2 py-2.5 pr-3 text-base font-[400] 3xl:px-[clamp(10px,1vw+0.2rem,22px)] 3xl:text-[clamp(1rem,1vw+0.1rem,2rem)]">
        <Image
          alt="Arrow back"
          src={ArrowBack.src}
          width={30}
          height={30}
          className=" inline-flex aspect-square w-4"
        />{' '}
        Back
      </button>

      {/*COMMENT:: 2)Boy Image with qualified and background */}
      {/* 8:34-9:32 27-46 lines  */}
      <div className="">
        <section className="relative mt-10 aspect-[217/222] w-[217px] lg:w-[266px] 4xl:w-[45%]">
          <Image alt="candidate" fill src={Boy.src} />
          <div className="absolute bottom-0 z-10 aspect-[217/138] w-full image-bottom-gradient  "></div>
          <Image
            alt="Qualified"
            src={Qualified.src}
            width={446}
            height={460}
            className="lg:w- absolute -right-2 -top-10 aspect-[446/460] w-20 md:w-24 lg:-right-12 lg:-top-12 xl:w-28"
          />
        </section>
        <Image
          alt="QualifiedBackground"
          src={QualifiedBackground.src}
          width={736}
          height={668}
          className="absolute right-0 top-[40%] aspect-[736/668] w-44 lg:top-[23%] lg:w-[50%]"
        />
      </div>

      {/*COMMENT:: 3)Congratulation and Best Choice */}
      <div className="mt-section">
        <p className="font-sansSerifBookFLF text-base md:text-xl xl:text-3xl">
          Congratulation’s{' '}
          <Image
            src={HandEmoji.src}
            alt="HandEmoji"
            width={30}
            height={30}
            className="inline-flex aspect-square w-4 items-center md:w-5 lg:w-7 "
          />
        </p>
        <p className="text-4xl font-semibold text-[#040404] mt-element md:text-5xl xl:text-6xl">
          Best <br /> Choice
        </p>
      </div>

      {/*COMMENT:: 4)Flower */}
      <div className="mr-6 mt-6 lg:mt-3">
        <Image
          alt="Flower"
          src={Flower.src}
          width={140}
          height={140}
          className="ml-auto aspect-square  w-20"
        />
      </div>
    </section>
  );
}
