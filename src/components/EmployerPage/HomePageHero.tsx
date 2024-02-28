import React from 'react';
import Image from 'next/image';
import { ImageBottomOverlay, Leyna } from '@/app/(public)/_images/LandingPage';
import {
  ArrowRightSvg,
  Calender,
  Freelancer,
  Jenny,
  Student,
} from '@/images/employerPage/HomePage';
import Link from 'next/link';

type Props = {};

export default function HomePageHero({}: Props) {
  return (
    <div className="py-11 font-sansSerifBookFLF container-custom lg:pt-28">
      {/* Total 1250=> left 550/1250=>44% and right 700/1250=> 56%  */}
      <section className="flex flex-col gap-8 text-center lg:flex-row lg:text-left">
        {/* TODO::1)Top or Left section */}
        <div className="flex  w-full flex-col  lg:w-[50%] xl:w-[44%] 3xl:min-w-[550px]">
          <p className="text-text font-sansSerifBookFLF text-[16px] font-[550] md:text-[40px] ">
            Hey
          </p>

          <p className="text-heading mt-3 text-[28px] font-[600] leading-[100%] md:text-[40px] lg:mt-7 lg:text-[100px]">
            I’m Leyna
          </p>

          <p className="text-[14px]  leading-[62px]   text-black md:text-[56px] lg:mt-14">
            Your personal <span className="lg:block">interviewer</span>
          </p>

          <p className="mt-7  text-base text-black lg:mt-14 lg:text-2xl">
            World
            <span className="mx-1 inline-flex items-center rounded-[2.44px] bg-black px-1 pb-[3px] font-sansSerifBookFLF text-[14px] text-white ">
              1 <sup className="">st</sup>
            </span>
            employee Centric platform
          </p>

          <Link
            href={'/login-hr-onboarding'}
            style={{ background: 'linear-gradient(90.3deg, #FF8EA0 -0.71%, #93E1FF 105.52%)' }}
            className="mx-auto mt-[13px] h-10 w-[132px] gap-2 text-black flex-center lg:mx-0 lg:mt-14 lg:h-[66px] lg:w-[222px] "
          >
            Get Started{' '}
            <Image
              src={ArrowRightSvg.src}
              width={24}
              height={24}
              alt="ArrowRight"
              className="h-auto w-4 md:w-6"
            />
          </Link>

          <p className="text-text mt-10 gap-1 text-[14px] text-[500]">
            <Image
              src={Calender.src}
              alt="Calender"
              width={32}
              height={32}
              className="inline-flex h-4 w-4  items-center md:h-6 md:w-6 md:text-xl"
            />{' '}
            Schedule Demo
          </p>
        </div>

        {/* COMPLETED::2)Bottom or Right section */}
        <div className="relative w-full  lg:w-[50%] xl:w-[56%] 3xl:min-w-[700px] ">
          {/* 2.1) 181/360=> 50.2%  lg:342/700=> 49%          */}
          <div className="relative mx-auto aspect-[342/497] w-[50.2%] min-w-[181px] lg:w-[49%]">
            <Image src={Leyna.src} alt="leyna" fill />
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #E0ECFB 100%)',
              }}
              className="absolute bottom-0 aspect-[248/123] h-40 w-full"
            ></div>
          </div>
          {/* 2.2)Freelancer Image and text */}
          <div className="absolute right-0 top-0 flex flex-col ">
            <Image
              priority
              src={Freelancer.src}
              alt="Freelancer"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full lg:h-[74px]  lg:w-[74px]"
            />
            <p className="w-full translate-x-[-0.5rem] text-center font-sansSerifBookFLF text-[14px] font-[550] lg:translate-x-0 lg:text-base">
              Freelancer
            </p>
          </div>

          {/* 2.3)Student Image and text */}
          <div className="absolute -bottom-0 right-0 flex flex-col ">
            <Image
              priority
              src={Student.src}
              alt="Student "
              width={100}
              height={100}
              className="h-10 w-10 rounded-full lg:h-[74px]  lg:w-[74px]"
            />
            <p className="w-full  text-center font-sansSerifBookFLF text-[14px] font-[550] lg:translate-x-0 lg:text-base">
              Students
            </p>
          </div>

          {/*COMPLETED:: 2.4)Jenny Image and text */}
          <div className="text-text mt-4 flex items-center gap-4 lg:mt-9">
            <Image
              src={Jenny.src}
              width={100}
              height={100}
              alt="Jenny"
              className="h-12 w-12 rounded-full lg:h-[97px] lg:w-[97px]"
            />
            <div className="flex flex-col font-sansSerifBookFLF text-[14px] leading-[18px] lg:text-base">
              <p>Thanks Jenny</p>
              <p>looking Cool!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
