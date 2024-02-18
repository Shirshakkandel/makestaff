import { sansSerifBookFLF } from '@/lib/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import {
  // FullColorImageBackground,
  ImageBottomOverlay,
  Leyna,
  // LeynaWithBackground,
  // PhotoBackground,
  // FullColorImageBackgroundSvg,
  // FullColorImageBackgroundCrop,
  FullColorImageBackgroundCrop2,
} from '../_images/LandingPage';
import { HeroDivider, ImageLiner } from '../_images/LandingPage/Hero';
import { Plus } from 'lucide-react';

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
          'mx-auto px-6 text-[16px] font-[500]  leading-[14.72px] text-[#171717] container-customNoMaxWidth md:text-[34px] md:leading-[31.28px] ',
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

      {/* COMMENT::4)Image and Hire me Button */}
      <div className="relative h-full w-full md:mt-[34px]">
        {/* Line overlay with image ImageLiner */}
        <img
          src={ImageLiner.src}
          alt=""
          className="absolute top-[30%] z-0   w-full md:top-[10%] "
        />

        {/* COMPLETED::Background Color */}

        <div className="relative z-40 mx-auto w-[210px]  md:h-[437px]  md:w-[440px]">
          {/* Full color background */}
          <Image
            priority={true}
            quality={100}
            alt="Leyna"
            src={FullColorImageBackgroundCrop2.src}
            fill
            className="absolute top-[50%] z-40 mx-auto   flex items-center"
          />
          {/* SECTION::Image with bottom overlay and  Hire Me Button */}
          <div className="relative z-40 mx-auto  aspect-[142/207] w-[160px]  md:aspect-[372/437] md:w-[372px]">
            <Image
              priority={true}
              quality={70}
              alt="Leyna"
              src={Leyna.src}
              fill
              className="z-20 "
            />
            <Image
              priority={true}
              quality={70}
              alt="Leyna"
              src={ImageBottomOverlay.src}
              width={372}
              height={167}
              className="absolute bottom-0 left-0 z-30  aspect-[142/97] w-[142px]  md:aspect-[244/167]  md:w-[372px]"
            />
            {/*  Hire me Button */}
            <div className="absolute right-0 top-[60%] z-40 translate-x-[90%] md:translate-x-[76%]">
              <button className="flex h-[26px] items-center gap-[6px] rounded-[2px] bg-white pb-[7px] pl-1 pr-[5px] pt-[9px] font-[500] md:h-10 md:py-[15px]">
                <span>
                  <Plus className="h-4 w-4 md:h-5 md:w-5" />
                </span>
                <span className="text-[12px] leading-[26px] md:text-[16px]">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
        <button></button>
      </div>
    </section>
  );
}
