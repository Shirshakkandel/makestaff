import Image from 'next/image';
import React from 'react';
import {
  ArrowRight,
  EmployerColorBoxCrop,
  LaptopScreen,
  Quote,
  VectorLine,
} from '../_images/LandingPage/EmpoweringWorkForce';
import { Verified } from 'lucide-react';

type Props = {};
/* STEPS  
COMPLETED::1)Image download and export
COMPLETED::2)Layout and content
COMPLETED::3)Styling   
*/

export default function EmpoweringWorkForce({}: Props) {
  //SECTION::UI PART
  return (
    <section className="relative bg-foreground pb-11 pt-12 text-background lg:pb-[108px] lg:pt-[100px] ">
      {/* COMPLETED::1)absolute line from left to right */}
      <div className="absolute top-[35%] h-[218px] w-full non-mobile">
        <Image src={VectorLine.src} fill alt="" />
      </div>
      {/* TODO::2)Section */}
      <div className="flex flex-col overflow-hidden container-custom  lg:flex-row">
        {/* 2.1)Top or Left Section(header,paragraph and button) */}
        <div className="max-w-[85%] flex-[0.47] lg:mt-[40px] lg:max-w-none">
          <h3 className="relative text-[19px] font-[500] leading-[22px] md:text-[40px] md:leading-[56px] ">
            <span className="absolute left-[-1px] top-[-7px] lg:top-[-15px]">
              <Image
                src={Quote.src}
                alt=""
                width={85.33}
                height={63}
                className="aspect-[86/63] w-[31px] md:w-[80px] "
              />
            </span>{' '}
            Empowering Your Workforce: Nurturing Growth, Fostering Success
          </h3>
          <p className="text mt-8 text-[12px]  font-[400] leading-[18px] md:text-[24px] md:leading-[32px] lg:mt-14">
            in just 2 minutes, hire from a pool candidates. leyna will handle the process and
            present you with the best profiles
          </p>
          {/* COMPLETED:: Button */}
          <button
            style={{
              background: 'linear-gradient(90deg, #F99FAE 0%, #A5C8FF 62.81%, #A2E5FF 100%)',
            }}
            className="group mt-8 flex h-8 w-[140px] items-center justify-center gap-1 rounded-[30px] text-[14px] leading-[20px] text-foreground transition hover:scale-105 md:mt-14 md:h-[56px] md:w-[200px] md:gap-2 md:text-[20px]"
          >
            Explore More{' '}
            <span className="group-hover:translate-x-1">
              <img src={ArrowRight.src} className="w-5" />
            </span>
          </button>
        </div>

        {/* 2.2)Bottom or Right Section(Image) */}
        <div className="relative mt-14 flex-[0.53]   lg:mr-[-5%] lg:w-[110%]">
          {/* COMPLETED::1)Top color box */}
          <div className="absolute left-[50%]  top-[-130px] aspect-[922/1180] w-[250px] md:w-[300px] lg:left-[15%]">
            <Image src={EmployerColorBoxCrop.src} fill alt="" />
          </div>
          <Image
            quality={100}
            src={LaptopScreen.src}
            alt="Job Listing Laptop Frame"
            width={1264}
            height={776}
            className="relative z-30 aspect-[710/438]"
          />
        </div>
      </div>
    </section>
  );
}
