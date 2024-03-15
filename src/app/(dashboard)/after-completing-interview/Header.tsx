import { SearchIcon } from '@/images/dashboard';
import Image from 'next/image';
import React from 'react';

type Props = {
  firstLine: string;
  secondLine: string;
};

export default function Header({ firstLine, secondLine }: Props) {
  return (
    <section className=" flex w-full  flex-col pt-12 container-left container-right lg:flex-row lg:items-center lg:justify-between">
      {/* 1.1)Team Management */}
      <p className="text-[19px] font-[500] leading-[140%] md:text-[32px] 2xl:text-[clamp(32px,1vw+0.3rem,60px)] 2xl:leading-[120%] ">
        {firstLine} <br />
        <span className="text-14 font-[400] md:text-[22px] 2xl:text-[clamp(22px,1vw+0.2rem,44px)] 2xl:leading-[120%]">
          {secondLine}
        </span>
      </p>

      {/* 1.2)Search Icon 226/1440=>15.69% */}
      <div className="relative mt-6 h-12 w-full max-w-[450px] flex-center lg:w-[226px] 2xl:h-[clamp(3rem,1vh+0.2rem,6rem)] 2xl:w-[15.5%] 2xl:max-w-[400px]">
        <input
          type="text"
          placeholder="Search"
          className="absolute inset-0 z-0 rounded-[6px] bg-white px-5 py-4 pl-12 text-[14px]  input-dropShadow lg:text-base "
        />

        <Image
          alt="Search"
          src={SearchIcon.src}
          width={40}
          height={40}
          className="absolute left-3.5 z-10 aspect-square w-5 flex-center 2xl:w-[8%]"
        />
      </div>
    </section>
  );
}
