import Divider from '@/components/common/Divider';
import Image from 'next/image';
import React from 'react';
import { FullColorImageBackgroundCrop2, ImageBottomOverlay, Leyna } from '../_images/LandingPage';
import { Plus } from 'lucide-react';

type Props = {};

export default function HoursSave({}: Props) {
  return (
    <section
      style={{
        background:
          'linear-gradient(115.7deg, #FCFCE9 0%, rgba(255, 243, 247, 0.470053) 53.34%, #F0FFFC 100.66%)',
      }}
    >
      <div className="pt-10  text-center container-custom lg:pt-32">
        <p className="text-[40px] leading-[47px] text-[#492A2A] lg:text-[96px] lg:leading-[112px] ">
          56 millions
        </p>
        <p className="mt-5  text-base leading-[2] text-[#BDBDBD] lg:text-2xl">
          Hours Saved By Leyna
        </p>

        {/* Divider */}
        <Divider
          containerClassName="non-mobile max-w-[322px] h-4 mx-auto lg:mt-4"
          iconClassName="text-[#D4D4D4]"
          lineClassName="border-[#D4D4D4]"
        />

        {/* FIXED::Leyna Image */}
        <div className="relative mt-[34px] h-full w-full pb-[50px] lg:pb-[120px]">
          <div className="relative z-40 mx-auto w-[210px]  md:h-[437px]  md:w-[500px]">
            {/* Full color background */}

            <Image
              priority={true}
              quality={100}
              alt="Leyna"
              src={FullColorImageBackgroundCrop2.src}
              width={1318}
              height={987}
              className="absolute top-[17%] z-40 mx-auto flex aspect-[1318/987] w-full items-center"
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
        </div>
      </div>
    </section>
  );
}
