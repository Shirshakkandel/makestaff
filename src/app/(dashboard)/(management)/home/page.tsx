import { Leyna } from '@/app/(public)/_images/LandingPage';
import {
  Candidate1,
  Candidate2,
  Candidate3,
  Department,
  PlusLight,
  TeamUser,
} from '@/images/dashboard';
import { WelcomeScreenPeople } from '@/images/employerPage/WelcomeScreen';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RecentResult from './RecentResult';

type Props = {};

export default function HomPage({}: Props) {
  return (
    <main className="w-full ">
      {/* COMMENT::1)Top Section */}
      <section className="flex items-start justify-between pt-12 container-left container-right">
        <p className="text-base leading-[140%]  md:text-[22px]   ">
          Hi <br /> <span className=" text-[19px] font-[500] md:text-[32px]">Good Morning</span>
        </p>

        <div className="lg:py- flex items-center gap-5 rounded-[6px] bg-white px-3 py-2 box-dropShadow lg:px-5">
          <div className="flex flex-col justify-center  text-right">
            <p className="text-xs">Watch</p>
            <p className="text-xxs text-tableText">Our walkThrough</p>
          </div>

          <Image
            alt="Watch People"
            src={WelcomeScreenPeople.src}
            width={80}
            height={80}
            className="aspect-square w-10"
          />
        </div>
      </section>

      {/* COMMENT::2)Cards section */}
      <section className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 container-left container-right md:mt-11 md:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-x-6 xl:gap-x-7 3xl:gap-x-8">
        {[
          { image: PlusLight, isLink: true, title: 'Hire', description: 'New Onboard with Leyna' },
          { image: TeamUser, number: 108, description: 'Total Candidate' },
          { image: Department, number: 89, description: 'Qualified Candidate' },
          { image: TeamUser, number: 12, description: 'Ongoing Job Posting' },
          { image: PlusLight, isLink: true, title: 'Create', description: 'New Departments' },
        ].map(({ image, description, isLink, number, title }, index) => {
          const firstCard = index === 0;
          if (isLink) {
            return (
              <Link
                href="#"
                key={index}
                className={cn(
                  'flex justify-between rounded-[10px]  bg-[#F5F5F5]  pl-[14px] pt-6 box-dropShadow lg:pl-3 lg:pt-8 xl:pl-4',
                  firstCard ? 'body-gradient' : 'pb-6',
                )}
              >
                <div className="flex flex-col justify-center">
                  <Image
                    src={image.src}
                    alt="Plus"
                    width={50}
                    height={50}
                    className="aspect-square w-7"
                  />
                  <p className="mt-7 text-[28px]  font-[500]">{title}</p>
                  <p className="text-xs text-[#989898]">{description}</p>
                </div>

                {firstCard && (
                  <Image
                    src={Leyna.src}
                    alt={'Leyna'}
                    height={280}
                    width={150}
                    className="mt-10 aspect-[75/140] w-[57px] lg:w-[75px]"
                  />
                )}
              </Link>
            );
          }
          //COMMENT::::if not link
          return (
            <div key={index} className="rounded-[10px] bg-[#F5F5F5] pb-6 pl-[14px] pt-6">
              <div className="aspect-square w-12 rounded-full bg-white flex-center ">
                <Image alt={description} src={image.src} width={58} height={58} className="w-1/2" />
              </div>
              <p className="mt-6 text-[32px] font-[400] text-black">{number}</p>
              <p className="text-xs text-[#706B6B] xl:text-[14px]">{description}</p>
            </div>
          );
        })}

        {/* COMMENT::2.3)Live Hiring */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] font-[500] leading-[50px]">
            23<sub className="text-[24px] leading-[50px] text-[#999292] ">/50</sub>
          </p>
          <div className=" flex items-center gap-1">
            <div className="aspect-square w-3 rounded-full bg-[#F07878]" />
            <p className="text-[14px] font-[400]  leading-[20px]">Live Hiring</p>
          </div>
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
        </div>
      </section>

      {/* TODO::3)Result Section */}
      <RecentResult />
    </main>
  );
}
