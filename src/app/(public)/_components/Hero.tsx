import { sansSerifBookFLF } from '@/lib/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Leyna, LeynaWithBackground } from '../_images/LandingPage';
import { HeroDivider, ImageLiner } from '../_images/LandingPage/Hero';

type Props = {};
/*SECTION:: Steps
1. section.mt-[65px].lg:mt-[100px]
*/

export default function Hero({}: Props) {
  //SECTION::UI PART
  return (
    <section className="mt-[65px] flex flex-col items-center text-center   lg:mt-[70px]">
      {/* 1)Small Title */}
      <p
        className={cn(
          sansSerifBookFLF.className,
          'container-customNoMaxWidth mx-auto px-6 text-[16px]  font-[500] leading-[14.72px] text-[#171717] md:text-[34px] md:leading-[31.28px] ',
        )}
      >
        Welcome I’m Leyna
      </p>

      {/* 2)heading */}
      <h1 className="  mt-4 max-w-[310px] text-center  text-[23px] font-[500] leading-[27px] text-[#492A2A]   md:mt-8 md:max-w-[40rem] md:text-[48px]  md:leading-[56.3px]">
        Your <span className="font-[600]">digital</span> interviewer for the best candidates
      </h1>

      {/* 2.1)Divider */}
      <Image
        src={HeroDivider.src}
        alt=""
        width={677}
        height={34}
        className="mb-[31px] mt-[29px] h-[20px] w-[300px] md:mt-[37px] md:h-[34px] md:w-[677px]"
      />

      {/* 3)Description v*/}
      <p className=" w-[813px] text-[20px] font-[400] leading-[24px] text-[#716666] non-mobile">
        AI conducts liver interviews, evaluates in real-time and identifies top performance No more
        manual screening, just smarter recruiting!
      </p>

      {/* 4)Image and Hire me Button */}
      <div className="relative h-full w-full md:mt-[34px]">
        {/* Line overlay with image ImageLiner */}

        <img src={ImageLiner.src} alt="" className="absolute top-10  z-0 w-full " />

        <Image
          priority={true}
          quality={70}
          alt="Leyna"
          src={Leyna.src}
          width={1008}
          height={1428}
          className="relative z-20 mx-auto aspect-[142/207] w-[160px] md:aspect-[372/437]  md:w-[372px]"
        />
        <button></button>
      </div>
    </section>
  );
}
