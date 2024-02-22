import React from 'react';
import {
  Companies,
  PaypalSvg,
  PeopleCollection,
  Play,
  SallSvg,
  WomenPresentation,
  ZirSvg,
} from '../_images/LandingPage/LeynaLovedByCompanies';
import './LeynaLovedByCompanies.css';
import Image from 'next/image';
import { LeynaThreeProcess } from './LeynaLovedByCompaniesData';
import Divider from '@/components/common/Divider';
import { cn } from '@/lib/utils';

type Props = {};

/*Steps 
1. COMPLETED::Image download and export
2. COMPLETED::First section::
3. COMPLETED::Second Section::
4. COMPLETED::Third Section::
*/
export default function LeynaLovedByCompanies({}: Props) {
  //SECTION::UI PART
  return (
    <section className="mt-7 min-h-[100vh] pb-5 pt-6 lg:mt-[72px] lg:pb-0 lg:pt-24">
      {/*SECTION:: First  SECTION */}
      <section
        style={{
          background:
            'linear-gradient(115.7deg, #FCFCE9 0%, rgba(255, 243, 247, 0.470053) 53.34%, #F0FFFC 100.66%)',
        }}
      >
        <section className="container-custom">
          <div className=" flex flex-row items-center justify-between  ">
            <h3 className="max-w-[150px] flex-1 text-[19px] font-[500] leading-[22px] lg:max-w-[300px] lg:text-[40px] lg:leading-[48px]">
              Leyna is loved by companies
            </h3>
            <div className="relative flex w-[110px] max-w-full lg:w-[150px] ">
              <img
                src={PaypalSvg.src}
                alt="Paypal"
                className="relative h-[49px] w-[49px] lg:h-[66px] lg:w-[66px]"
              />
              <img
                src={ZirSvg.src}
                alt="Zir"
                className="relative left-[-20%] top-0 h-[52px] w-[52px] lg:h-[70px] lg:w-[70px]"
              />
              <img
                src={SallSvg.src}
                alt={'Sall'}
                className="relative left-[-40%] h-[49px] w-[49px] lg:h-[66px] lg:w-[66px]"
              />
            </div>
          </div>
          <div className="ml-auto mt-4 w-[200px] md:w-[250px]">
            <p className="text-end text-xs font-[500] leading-[18px] md:text-base">
              +24k companies using it
            </p>
            {/* Table */}
            <div className="ml-auto mt-6 w-fit">
              <table className="table-auto border border-black text-center">
                <thead>
                  <tr className="border-b border-black text-[8px]  leading-[18px] md:text-[10px] md:leading-[24px]">
                    <th>Companies</th>
                    <th>Employee</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-[500] leading-[18px] md:text-base md:leading-[24px]">
                  <tr>
                    <td>+24k</td>
                    <td>+54k</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/*FIXED::SECOND SECTION(fix in lg device with w-[50%] and shrink-1 and shrink 0) */}
        <section className="mt-5 container-custom lg:mt-14">
          {/* 614+536=> 1150 => 53.3% and 46.6% */}
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 xl:gap-[70px]">
            {/*Left Image */}
            <Image
              src={Companies.src}
              width={1842}
              height={1326}
              alt="Companies"
              className="mdMaxWidth aspect-[314/226] w-full  shrink lg:aspect-[614/442] lg:w-[50%]  xl:w-[53%] xl:min-w-[612px]"
            />
            {/* Right Image overlay with absolute text */}
            <div className="mdMaxWidth relative aspect-[313/254] w-full  shrink-0 lg:aspect-[536/435]  lg:w-[50%]  xl:w-[47%]">
              <Image fill src={PeopleCollection.src} alt="" />
              <div className="absolute left-[10%] top-[15%]">
                {/* Play Icon */}
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FF7137] md:h-12 md:w-12">
                  <img src={Play.src} alt="play" className="h-[14px] w-[14px] md:h-6 md:w-6" />
                </div>
                {/* Text */}
                <p className="mt-5 max-w-[104px] text-[14px] font-[500] leading-[17.5px] text-white md:mt-9 md:max-w-[178px] md:text-2xl md:leading-[30px]">
                  Wow what a Seamless onboarding Experience
                </p>
              </div>
              <button className="absolute bottom-[15%] left-[10%] flex h-[33px] w-[95px] items-center justify-center  rounded-[3.5px] border-[0.58px] border-white text-[11.68px] font-[400] text-white md:h-[56px] md:w-[162px] md:border-[1px] md:text-[20px] lg:bottom-[10%] xl:bottom-[15%]">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </section>

      {/*SECTION:: Third SECTION */}
      {/* Large screen calculation=>  756+422=> 1178(64%, 36%)+Gap(133px) */}
      <section
        style={{
          background:
            'linear-gradient(237.71deg, #FCE8DB 5.49%, #FCE8DB 5.49%, #FFFFF1 57.51%, #E8FCFF 105.23%)',
        }}
        className="mt-5 lg:mt-[55px]"
      >
        <div className="mx-auto  flex max-w-[1536px] flex-col items-center gap-7 lg:flex-row lg:gap-[100px] xl:gap-[133px]">
          {/* Image with text overlay */}
          <section className="mdMaxWidth relative aspect-[360/538] lg:aspect-[756/1131] lg:w-[64%]">
            <Image alt="women Presenting" fill src={WomenPresentation.src} />
            {/* Absolute content section */}
            <div className="absolute left-[10%] top-[50%] w-[150px] md:w-[380px]">
              <h1 className="text-[19px] leading-[22px] text-white md:text-[48px] md:leading-[56px] ">
                Benefits of using Leyna.Ai
              </h1>
            </div>
          </section>
          {/* 3 Benefit content divide by divider component */}
          <section className="mdMaxWidth container-right flex flex-col items-center gap-[34px] pb-4 md:gap-[55px] lg:w-[36%] lg:pb-0">
            {LeynaThreeProcess.map(({ description, icon, titleSpan1, titleSpan2 }, index) => {
              const firstProcess = index === 0;
              const secondProcess = index === 1;
              const lastProcess = LeynaThreeProcess.length - 1 === index;
              return (
                <div
                  key={index}
                  className={cn(
                    'flex w-[317px] flex-col items-center md:w-[422px]',
                    secondProcess ? 'w-[317px] md:w-[422px]' : 'w-[247.14px] md:w-[329px]',
                  )}
                >
                  <div
                    className={cn(
                      'flex h-[50px] w-[50px] items-center justify-center border border-[#C1C1C1] md:h-[66px] md:w-[66px]',
                    )}
                  >
                    <img
                      className="h-[18px] w-[18px] md:h-6 md:w-6 "
                      src={icon.src}
                      alt={`${titleSpan1} ${titleSpan2}}`}
                    />
                  </div>

                  <p className="mt-7 inline-flex flex-col text-center text-[25.5px] font-[400] leading-[27px]">
                    <span>{titleSpan1}</span>
                    <span>{titleSpan2}</span>
                  </p>

                  <p
                    className={cn(
                      'mt-6 text-center text-[15px] font-[400] leading-[21px] text-[#7D7D7D] md:text-[20px] md:leading-[28px]',
                    )}
                  >
                    {description}
                  </p>
                  <Divider
                    containerClassName="mt-6 h-4 max-w-[242px] md:max-w-[322px] md:h-4 mt-[35px]"
                    iconClassName="text-[#D4D4D4]"
                    lineClassName="border-[#D4D4D4]"
                  />
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </section>
  );
}
