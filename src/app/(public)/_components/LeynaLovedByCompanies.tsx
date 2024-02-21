import React from 'react';
import {
  Companies,
  PaypalSvg,
  PeopleCollection,
  Play,
  SallSvg,
  ZirSvg,
} from '../_images/LandingPage/LeynaLovedByCompanies';
import './LeynaLovedByCompanies.css';
import Image from 'next/image';

type Props = {};

/*Steps 
1. TODO::Image download and export
2. TODO::First section::
3. TODO::Second Section::
4. TODO::Third Section::
*/
export default function LeynaLovedByCompanies({}: Props) {
  //SECTION::UI PART
  return (
    <section
      style={{
        background:
          'linear-gradient(115.7deg, #FCFCE9 0%, rgba(255, 243, 247, 0.470053) 53.34%, #F0FFFC 100.66%)',
      }}
      className="mt-7 min-h-[100vh] pb-5 pt-6 lg:mt-[72px] lg:pb-0 lg:pt-24"
    >
      {/*SECTION:: First  SECTION */}
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
      {/*TODO::SECOND SECTION */}
      <section className="mt-5 container-custom lg:mt-14">
        {/* 614+536=> 1150 => 53.3% and 46.6% */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 xl:gap-[70px]">
          {/* Image */}
          <Image
            src={Companies.src}
            width={1842}
            height={1326}
            alt="Companies"
            className="aspect-[314/226] w-full max-w-[614px] lg:aspect-[614/442] lg:w-[53.3%] lg:max-w-none xl:min-w-[612px]"
          />
          <div className="relative aspect-[313/254] w-full  max-w-[536px] lg:aspect-[536/435] lg:w-[46.6%] lg:max-w-none xl:min-w-[536px]">
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
            <button className="absolute bottom-[15%] left-[10%] flex h-[33px] w-[95px]  items-center justify-center rounded-[3.5px] border-[0.58px] border-white text-[11.68px] font-[400] text-white md:h-[56px] md:w-[162px] md:border-[1px] md:text-[20px]">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/*SECTION:: Third SECTION */}
    </section>
  );
}
