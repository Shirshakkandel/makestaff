'use client';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import React, { Fragment } from 'react';
import { TeamManagementData } from '../team-management/_components/TeamManagementData';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Candidate1, Candidate2, Candidate3, Plus } from '@/images/dashboard';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { ApplicationResultData } from './data';
import { Button } from '@/components/ui/button';
import { CardGroup, ListGroup } from '@/images/dashboard/candidate';
import { results } from '../_data/Results';
import ResultCard from '../components/ResultCard';
import UpgradeToPro from '@/components/dashboard/UpgradeToPro';

type Props = {};

export default function ApplicationResult({}: Props) {
  return (
    <main className="">
      {/* COMMENT::1)Top Section */}
      <DashboardHeader firstLine="Application" secondLine="Result" />

      {/* COMMENT::2)Card Section */}
      <section className="mt-7 flex flex-col gap-4 container-left container-right md:flex-row md:flex-wrap">
        {ApplicationResultData.map(({ description, icon, title }, index) => {
          const firstCard = index === 0;
          return (
            <div
              key={title}
              className={cn(
                'flex min-h-[86px] w-full items-center justify-between gap-5 rounded-[10px] bg-[#F5F5F5] px-6  pt-1 md:w-[219px] 2xl:w-[clamp(219px,5vw+5rem,450px)] ',
                firstCard && ' cursor-pointer body-gradient',
              )}
              //alert if first card is clicked other do nothing
              onClick={() => {
                if (firstCard) {
                  alert('Coming soon');
                }
              }}
            >
              {/* 1)Left section(Icon+ (title+description)) */}
              <section className="flex items-center gap-1">
                {firstCard ? (
                  <Image
                    alt="Plus"
                    src={Plus.src}
                    width={60}
                    height={60}
                    className="aspect-square w-8 shrink-0 "
                  />
                ) : (
                  <div className="relative aspect-square w-12 rounded-full bg-[#FBFBFB] flex-center">
                    <Image
                      alt={title}
                      src={icon.src}
                      width={48}
                      height={48}
                      className="absolute w-[50%]"
                    />
                  </div>
                )}

                <p className="font-workSans text-2xl font-[500] leading-[100%]">
                  {title} <br />{' '}
                  <span className="text-base font-[400] text-[#989898]">{description}</span>
                </p>
              </section>

              {/* 2)Right section only for first card. */}
              {firstCard && (
                <Image
                  src={Leyna.src}
                  alt={'Leyna'}
                  height={120}
                  width={170}
                  className="aspect-[57/82] w-[57px]"
                />
              )}
            </div>
          );
        })}
        <div className="flex  items-center  gap-2">
          <div className="mt-4 flex">
            {[Candidate1, Candidate2, Candidate3].map((candidate, index) => {
              const first = index !== 0;
              return (
                <Image
                  key={candidate.src}
                  alt="candidate1"
                  src={candidate.src}
                  width={68}
                  height={68}
                  className={cn(`aspect-square w-9 rounded-full`, first && '-ml-4')}
                />
              );
            })}
          </div>

          <div className="">
            <p className="text-[40px] font-[500] leading-[50px]">
              23<sub className="text-[24px] leading-[50px] text-[#999292] ">/50</sub>
            </p>
            <div className=" flex items-center gap-1">
              <div className="aspect-square w-3 rounded-full bg-[#F07878]" />
              <p className="text-[14px] font-[400]  leading-[20px]">Live Hiring</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT::3)Filter Section */}
      {/* 3.1)Top Filter section */}
      <div className="dashboard-width flex justify-between container-left container-right mt-section">
        {/* Left section */}
        <Button className={cn('h-12 rounded-[30px] px-6  text-xs md:px-7 md:text-base lg:px-9 ')}>
          Filters
        </Button>
        <div className="flex items-center gap-2 2xl:gap-[clamp(0.5rem,1vw+0.1rem,1.5rem)]">
          <div className="aspect-square w-8 rounded-[3px] bg-white flex-center lg:w-12 2xl:w-[clamp(3rem,2vw+0.4rem,6rem)]">
            <Image alt="Group" src={CardGroup.src} width={48} height={48} className="w-1/2" />
          </div>
          <div className="aspect-square w-8 rounded-[3px] bg-white flex-center lg:w-12 2xl:w-[clamp(3rem,2vw+0.4rem,6rem)]">
            <Image alt="Group" src={ListGroup.src} width={48} height={48} className="w-1/2" />
          </div>
        </div>
      </div>

      {/* 3.2)Card Display Section */}
      <div className="relative">
        <div className="dashboard-width">
          <section className="mt-10  grid grid-cols-2 gap-x-4 gap-y-6 container-left container-right md:mt-11 md:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-x-6 xl:gap-x-7 3xl:gap-x-8">
            {results.map((result, index) => {
              return (
                <Fragment key={index}>
                  <ResultCard {...result} />
                </Fragment>
              );
            })}
          </section>
          <section className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 container-left container-right md:mt-11 md:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-x-6 xl:gap-x-7 3xl:gap-x-8">
            {results.map((result, index) => {
              return (
                <Fragment key={index}>
                  <ResultCard {...result} />
                </Fragment>
              );
            })}
          </section>
        </div>
        <UpgradeToPro />
      </div>
    </main>
  );
}
