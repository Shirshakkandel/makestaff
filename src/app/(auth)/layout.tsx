import Image from 'next/image';
import React from 'react';
import { Leyna } from '../(public)/_images/LandingPage';
import { TopBackground } from '@/images/auth';

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
          <Image alt="Leyna" src={Leyna.src} fill />
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(226, 241, 243, 0) 31.73%, #D6F5FE 100%)',
            }}
            className="absolute bottom-0 aspect-[301/206] w-full"
          ></div>
        </div>

        {/* Content */}
        <div className="ml-[24px] lg:ml-[77px]">
          <p className="font-sansSerifBookFLF text-base font-[550] leading-[28px] md:text-[30px]">
            Hey
          </p>
          <p className="">I’m Leyna</p>
          <p>Your personal interviewer</p>
          <p>Who will conduct the interview and shortlist the best fit for your company</p>
        </div>

        {/* Right Flower */}
      </div>
      {/*TODO::Right or Bottom  Section*/}
      <div className="w-full  lg:w-[55%]">{children}</div>
    </main>
  );
}
