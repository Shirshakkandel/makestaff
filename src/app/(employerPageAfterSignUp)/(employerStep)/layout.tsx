import Image from 'next/image';
import React from 'react';

import { Flower, TopBackground } from '@/images/auth';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { StepProvider } from '@/context/stepContext';
import { PostCreationContextProvider } from '@/context/PostCreationContextProvider';

type Props = {
  children: React.ReactElement;
};

export default function AuthLayout({ children }: Props) {
  return (
    //Total 1440px=> left(641px)45% right 799px 55%
    <main className=" flex min-h-[100vh] flex-col lg:flex-row">
      {/*TODO:: Left or Top Section */}
      <div
        style={{
          background: 'linear-gradient(239.18deg, #FCE8DB 5.68%, #D3F5FF 59.3%, #FEF2FC 101.98%)',
        }}
        className="relative w-full  lg:w-[45%]"
      >
        {/* Background */}
        <Image
          src={TopBackground.src}
          alt=""
          width={1282}
          height={726}
          className="absolute aspect-[641/440] w-full"
        />

        {/* Image 211/360=> 58.6%, lg: 301/641 =>47% */}
        <div className="relative ml-[24px] mt-[70px] aspect-[211/307] w-[211px] min-w-[58%] lg:ml-[77px] lg:aspect-[301/438] lg:w-[301px] lg:min-w-[47%] ">
          <Image alt="Leyna" src={Leyna.src} fill priority />
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(226, 241, 243, 0) 31.73%, #D6F5FE 100%)',
            }}
            className="absolute bottom-0 aspect-[301/206] w-full"
          ></div>
        </div>

        {/* Content */}
        <div className="ml-[24px] lg:ml-[77px]">
          <p className="mt-[34px] font-sansSerifBookFLF text-base font-[550]  text-[#171717] md:text-[30px]  lg:mt-[50px]  2xl:text-[clamp(30px,1.5vw+0.4rem,80px)] 2xl:leading-[130%]">
            Hey
          </p>
          {/* Cap height Cap height */}
          <p className=" mt-5  text-[23px]  font-[600]  leading-[70%] md:text-[56px] lg:mt-7 2xl:text-[clamp(56px,1.5vw+0.4rem,120px)] 2xl:leading-[120%] ">
            I’m Leyna
          </p>
          <p className="mt-5 inline-flex flex-col font-sansSerifBookFLF  text-[16px]  font-[550] leading-[18px] text-black md:mt-7 md:text-[28px] md:leading-[30px] 2xl:text-[clamp(28px,1.5vw+0.4rem,60px)] 2xl:leading-[120%] ">
            Your personal <span className="font-sansSerifBookFLF">interviewer</span>
          </p>
          <p className="mt-7 max-w-[226px] text-xs leading-[18px] md:mt-[70px] md:max-w-[301px] md:text-base 2xl:max-w-[55%] 2xl:text-[clamp(16px,1vw+0.2rem,40px)] 2xl:leading-[120%]">
            Who will conduct the interview and shortlist the best fit for your company
          </p>
        </div>

        {/* Right Flower */}
        <Image
          alt="flower"
          src={Flower.src}
          width={188}
          height={200}
          className="ml-auto mr-3 aspect-[82/74] w-[20%] min-w-[82px]"
        />
      </div>
      {/*TODO::Right or Bottom  Section 82/360=22%*/}
      <div className="w-full lg:w-[55%]">
        <PostCreationContextProvider>{children}</PostCreationContextProvider>
      </div>
    </main>
  );
}
