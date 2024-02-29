import { Check, Logo } from '@/app/(public)/_images/LandingPage';
import { LaptopScreen } from '@/app/(public)/_images/LandingPage/EmpoweringWorkForce';
import { Flower } from '@/images/auth';
import {
  BigFlower,
  Circle,
  HandEmoji,
  HrWomen,
  IdealCandidate,
  LampSvg,
  LaptopArrow,
  MobilePoint,
  PointArrow,
  SaveTime,
  StreamLine,
  Tick,
} from '@/images/employerPage/HrLogin';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import React from 'react';

type Props = {};
//SECTION::DATA SECTION
const features = [
  {
    image: StreamLine,
    title: 'Streamline Recruitment',
  },
  {
    image: SaveTime,
    title: 'Save Time',
  },
  {
    image: IdealCandidate,
    title: 'Find Your Ideal Candidates ',
  },
];

export default function LoginHrOnBoardingTopLeft({}: Props) {
  return (
    <section
      className="relative  w-full pt-5 lg:w-[50%]"
      style={{ background: 'linear-gradient(211.73deg, #CBF6ED 0%, #F9DBC5 100%)' }}
    >
      {/* TODO::0)Absolute Image of Container */}
      <section>
        <Image
          width={100}
          height={200}
          src={LampSvg.src}
          alt="Lamp"
          className="absolute right-[1%] top-0 aspect-[49/124] w-[13%] min-w-[49px] md:right-[5%] md:w-[8%]"
        />
        <Image
          width={100}
          height={200}
          src={LampSvg.src}
          alt="Lamp"
          className="absolute  right-[16%] top-0 aspect-[49/100] w-[13%] min-w-[49px] md:right-[15%] md:w-[8%]"
        />
      </section>

      <div className="container-custom">
        {/* 1.1)Only Mobile Image */}
        <div className="lg:hidden ">
          <Image
            src={Logo.src}
            width={200}
            height={50}
            alt="logo"
            className="aspect-[99/16] w-[100px] min-w-[27.5%] md:w-[167px] lg:w-0 lg:min-w-[14.6%]"
          />
        </div>

        <div className="mt-10 w-full space-y-3 md:space-y-5 lg:mt-28 3xl:mt-[calc(max(7rem,12.3vh))]">
          <h2 className=" text-[19px] font-[600] leading-[100%] md:text-[32px] 3xl:text-[clamp(32px,2vw+0.5rem,100px)]">
            HR Onboarding
          </h2>
          <p className="text-[14px] md:text-[20px] 3xl:text-[clamp(20px,1.5vw+0.4rem,40px)]">
            Connect with your Employee
          </p>
          {/* Image 858,118=> 13.7%, 86/360=> 23.8% */}
          <div className="relative aspect-[86/24] w-[13%] min-w-[86px] flex-center md:aspect-[118/32] md:w-[23%] md:min-w-[118px] ">
            <Image src={Circle.src} fill alt="circle" />
            <p className="text-xs md:text-[13px] 3xl:text-[clamp(13px,1vw+2px,30px)]">New Joinee</p>
          </div>
        </div>

        {/* 1.2)Finished Feature section */}
        <div className="relative z-10 mt-8 flex flex-col gap-5">
          {features.map(({ image, title }) => (
            <div className="flex gap-2  md:gap-3 lg:gap-4">
              {/* 1)Left Section */}
              <div className="flex aspect-[302/48] w-[50.8%] min-w-[183px] items-center gap-1 rounded-[10px] bg-white px-2 py-1  md:w-[40%] md:min-w-[302px] md:gap-5">
                <Image
                  src={image.src}
                  alt={title}
                  width={90}
                  height={90}
                  className="aspect-[1/1] w-[5.5%] min-w-5 md:w-[9.9%] md:min-w-7"
                />
                <p className="text-xxs  font-[400] md:text-base 3xl:text-[clamp(16px,1vw,32px)]">
                  {title}
                </p>
              </div>

              {/* Right Section */}
              <div className="aspect-[1/1] w-8 rounded-[3px] bg-white  flex-center sm:w-[7%]   lg:min-w-12">
                <Image
                  src={Tick.src}
                  width={72}
                  height={72}
                  alt="Check"
                  className="aspect-square  w-[50%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TODO::1.3) HR Process */}
      <div className="relative mt-10 lg:mt-[calc(max(2.5rem,4vh))]">
        {/* COMMENT::Absolute things */}
        <section>
          <div className="absolute bottom-0 right-[6.6%] z-10 aspect-[369/233] max-h-full w-[62%] rounded-tl-[36px] bg-[#FFBD41] lg:right-[7%] lg:aspect-[369/220] lg:w-[52%]"></div>
          {/* Arrow */}
          <div className="sm:hidden">
            <Image
              alt="Point Arrow"
              src={MobilePoint.src}
              width={198}
              height={351}
              className="absolute -top-[30%]  right-0 z-0  aspect-[155/200] w-[30%]"
            />
          </div>

          <div className="hidden sm:block">
            <Image
              alt="Point Arrow"
              src={LaptopArrow.src}
              width={678}
              height={610}
              className="absolute bottom-[38%] right-0 z-0  aspect-[234/306] w-[40%] lg:w-[20%] xl:w-[30%]"
            />
          </div>

          {/* Hand Emoji */}
          <div className=" absolute -top-[10%] right-[7.2%] aspect-square w-[8.6%] min-w-[31px] rounded-full bg-black flex-center sm:-top-[20%] sm:right-[15%] lg:-top-[20%] lg:right-[10%]">
            <Image
              src={HandEmoji.src}
              width={32}
              height={32}
              alt="Hand Emoji"
              className="aspect-square w-1/2"
            />
          </div>
        </section>

        <section className=" relative z-10 flex items-center  justify-end container-custom">
          <p className=" text-right text-xs font-[500] italic xl:text-[22px] xl:leading-[32px] 3xl:text-[clamp(22px,1vw+0.2rem,70px)] 3xl:leading-[1.5]">
            Revolutionize Your Hiring Process with Our AI-Powered Job Applicant Screening Tool
          </p>
          <Image
            src={HrWomen.src}
            width={762}
            height={909}
            alt="Women Holding Laptop"
            className="aspect-[158/189] w-[46%] "
          />
        </section>
      </div>

      {/* SECTION::Bottom */}
      <section className="flex max-h-[110px] items-end justify-between container-left">
        {/* Left Image */}
        <Image
          src={BigFlower.src}
          width={210}
          height={300}
          alt="Big Flower"
          className="aspect-[60/100] w-[60px] lg:w-[105px]"
        />

        {/* Hr and Step */}
        <div className="flex flex-col gap-10 pb-2.5">
          <div className="relative aspect-[90/24] w-[13%] min-w-[86px] flex-center md:aspect-[118/32] md:w-[23%] md:min-w-[118px]">
            <Image src={Circle.src} fill alt="circle" />
            <p className="text-xs md:text-[13px] 3xl:text-[clamp(13px,1vw+2px,30px)]">HR</p>
          </div>

          <div className="flex gap-1.5 ">
            {[1, 2, 3].map((value, index) => {
              const lastValue = value === 3;
              return (
                <div
                  className={cn(
                    'rounded-2.5 h-1 w-[34px]',
                    lastValue ? 'bg-[#71C4CF]' : 'bg-white',
                  )}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <Image
          alt="Flower"
          src={Flower.src}
          width={120}
          height={132}
          className="mr-5 aspect-[60/66] w-[60px]"
        />
      </section>

      <div></div>
    </section>
  );
}
