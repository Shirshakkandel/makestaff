'use client';
import { Plus, SearchIcon } from '@/images/dashboard';
import Image from 'next/image';
import React from 'react';
import { TeamManagementData } from './_components/TeamManagementData';
import { cn } from '@/lib/utils';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import TeamManagementTable from './_components/TeamManagementTable';

type Props = {};

export default function TeamManagement({}: Props) {
  return (
    <div className="h-full w-full  pt-12">
      {/*SECTION:: 1)Top Section(Team Management+ 3 Card) */}
      <section className="flex w-full max-w-[2500px] flex-col container-left container-right lg:flex-row lg:items-center lg:justify-between">
        {/* 1.1)Team Management */}
        <h1 className="text-[22px] font-[400] 2xl:text-[clamp(22px,1vw+0.2rem,44px)] 2xl:leading-[120%] ">
          Team <br />
          <span className="text-[32px] font-[500] 2xl:text-[clamp(32px,1vw+0.3rem,60px)] 2xl:leading-[120%]">
            Management
          </span>
        </h1>

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

      {/* 1.3)3 card with image and gradient */}
      <section className="mt-7 flex flex-col gap-4 container-left container-right md:flex-row md:flex-wrap">
        {TeamManagementData.map(({ description, icon, title }, index) => {
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
      </section>

      {/*TODO::2)Table with filter */}
      <TeamManagementTable />
    </div>
  );
}
