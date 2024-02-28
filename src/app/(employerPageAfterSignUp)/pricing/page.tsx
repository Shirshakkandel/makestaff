'use client';
import Navbar from '@/components/EmployerPage/Navbar';
import React from 'react';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { PricingPlans } from '@/app/(public)/_components/PlanPricingData';
import { cn } from '@/lib/utils';
import { Check } from '@/app/(public)/_images/LandingPage';
import '@/app/(public)/_components/PlanPricing.css';

type Props = {};

export default function Pricing({}: Props) {
  //SECTION::LOGIC PART
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: boolean) => {
    setIsYearly(value);
  };
  //SECTION::UI PART
  return (
    <main>
      <Navbar />
      <div className="container-custom">
        {/* 1)Title */}
        <div className="mt-12 flex flex-col items-center text-center md:mt-16 lg:mt-24 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col">
            <h1 className="font-sansSerifBookFLF text-[16px] leading-[62px] md:text-[24px]">
              Professional Plans
            </h1>
            <p className=" max-w-[204px] font-workSans text-[19px] font-[600] leading-[24px] md:max-w-[346px] md:text-[40px] md:leading-[50px] ">
              Choose the best plan for you.
            </p>
          </div>
          <div className="mt-5 flex items-center justify-center space-x-2.5 md:gap-3 lg:mt-9">
            <div
              className="cursor-pointer font-sansSerifBookFLF text-[14px] font-[550] leading-[62px] md:text-[24px] md:leading-[62px]"
              onClick={() => {
                setIsYearly(false);
              }}
            >
              Monthly
            </div>

            <Switch checked={isYearly} onCheckedChange={togglePricingPeriod} />

            <div
              className="cursor-pointer font-sansSerifBookFLF text-[14px] font-[550] leading-[62px] md:text-[24px] md:leading-[62px]"
              onClick={() => {
                setIsYearly(true);
              }}
            >
              Yearly
            </div>
          </div>
        </div>

        {/* 2)Pricing Card */}
        {/* COMPLETED::2)Pricing Section */}
        <div className=" mt-[30px] flex w-full flex-wrap justify-center gap-6 md:mt-10 lg:flex-row lg:flex-nowrap lg:justify-between  lg:gap-8 2xl:justify-center 2xl:gap-12">
          {/* <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3"> */}
          {PricingPlans.map(
            (
              {
                title,
                actionLabel,
                monthlyPrice,
                yearlyPrice,
                background,
                features,
                savingPercentage,
                buttonBackground,
              },
              index,
            ) => {
              //box-shadow: 0px 1px 80px 0px #0000000F;
              const firstPlan = index === 0;

              return (
                <div
                  key={title}
                  className=" xl flex w-[288px] flex-col items-center rounded-[10px] pb-5 sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[415px]"
                  style={{ background, boxShadow: '0px 1px 80px 0px #0000000F' }}
                >
                  {/* title */}
                  <div
                    className={cn(
                      'mt-5  rounded-[20px] px-5 pb-2.5 pt-3 font-sansSerifBookFLF text-[12.5px] font-[550] leading-[12px] text-[#171717] md:mt-8 md:rounded-[30px] md:px-[29px] md:pb-[13px] md:pt-[18px] md:text-[18px] md:leading-[17px]',
                      firstPlan ? 'bg-[#EEEEEE]' : 'bg-white',
                    )}
                  >
                    {title}
                  </div>
                  {/* Pricing Per monthly and yearly */}
                  <div>
                    <p className="pricing">
                      {`$${monthlyPrice}`}
                      <span className="sub ">(Per Month)</span>
                    </p>
                    <p className="pricing">
                      {`$${yearlyPrice}`}
                      <span className="sub">(Per Year)</span>
                    </p>
                  </div>

                  {/* Saving */}
                  <p className="mt-6 text-[14px] leading-[16.5px] text-[#696969] md:mt-10 md:text-xl md:leading-[24px]">
                    ({savingPercentage}% Savings)
                  </p>

                  {/* Action button */}
                  <div className="w-full px-[25px] xl:px-[35px]">
                    <button
                      style={{ background: buttonBackground }}
                      className=" mt-[22.23px] flex h-[34px] w-full   cursor-pointer items-center  justify-center rounded-[4.16px]  text-sm font-[500] leading-[16.66px] hover:opacity-90   md:mt-8  md:h-[48px] md:text-base "
                    >
                      {actionLabel}
                    </button>
                  </div>

                  {/* features loop */}
                  <div className="margin-left  mt-5  space-y-[18px] md:mt-7">
                    {features.map((feature, index) => (
                      <p
                        key={index}
                        className="inline-flex w-full items-center gap-2  text-[11px] leading-[12.9px]"
                      >
                        <span>
                          <img src={Check.src} alt="" className="h-3 w-3 md:h-4 md:w-4" />
                        </span>

                        <span className="text-[11px] leading-[13px] md:text-sm md:leading-[16px] xl:text-base xl:leading-[18.77px]">
                          {feature}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </main>
  );
}
