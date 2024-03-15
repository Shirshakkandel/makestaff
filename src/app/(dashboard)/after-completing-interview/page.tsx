import DashboardHeader from '@/components/dashboard/DashboardHeader';
import React from 'react';
import Header from './Header';
import { Google, Play, Instagram, Facebook } from '@/images/dashboard/extraPages';
import Link from 'next/link';
import Image from 'next/image';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/images/auth';
import { ArrowRightWhite } from '@/images/employerPage/PostCreationSteps';

type Props = {};

export default function AfterCompletingInterview({}: Props) {
  return (
    <section>
      {/*COMMENT:: 1)Header */}
      {/* 8:50-9:20 */}
      <Header
        firstLine="Thrilled you’ve joined us!"
        secondLine="Kindly await an invitation from the company"
      />

      {/*COMMENT:: 2)4 cards(watch,google,Instagram, Facebook)  */}
      {/* 9:20-1:20 */}
      <section className=" mt-10 sm:mt-12  lg:mt-32">
        <div className="flex flex-wrap gap-x-4 gap-y-6 container-left container-right ">
          {[
            { image: Play, title: 'Watch', description: 'How Leyna Works' },
            {
              image: Google,
              title: 'Google Inc',
              description: 'PHP Developer',
              date: '10th April',
              rating: '08',
            },
            {
              image: Instagram,
              title: 'Instagram',
              description: 'UI/UX Designer',
              date: '10th April',
              rating: '08',
            },
            {
              image: Facebook,
              title: 'Facebook',
              description: 'UI/UX Designer',
              date: '10th April',
            },
          ].map(({ image, description, title, date, rating }, index, array) => {
            const first = index === 0;
            const last = index === array.length - 1;
            if (first) {
              //COMMENT::2.1)First Card
              return (
                <Link
                  key={index}
                  href="#"
                  className="dashboard-gradient-2 relative w-[calc(50%-1rem)] rounded-[10px]  box-dropShadow sm:w-[140px] md:w-[163px]"
                >
                  <section className="flex flex-col  pl-3 mt-element">
                    {/* 1)Top Image section */}
                    <div className="aspect-square w-10 rounded-[1px] bg-white flex-center">
                      <Image alt={title} src={image.src} width={40} height={40} className="w-1/2" />
                    </div>

                    {/* 2)Bottom Section Flex  */}
                    <div className=" flex items-start ">
                      <div className="mt-section">
                        <p className="text-2xl font-medium ">Watch</p>
                        <p className="text-xs text-[#989898] ">
                          How Leyna <br /> Works
                        </p>
                      </div>

                      <Image
                        src={Leyna.src}
                        className=" absolute bottom-0  right-0 aspect-[75/150] w-[75px]"
                        alt="Leyna"
                        width={150}
                        height={280}
                      />
                    </div>
                  </section>
                </Link>
              );
            }
            //TODO::2.2)3 Cards
            return (
              <div
                key={index}
                className="w-[calc(50%-1rem)]  bg-white pl-3 sm:w-[140px] md:w-[163px]"
              >
                <section className="flex flex-col pb-2.5 mt-element">
                  {/* 1)top Section */}
                  <div className="aspect-square w-10 rounded-[1px] border flex-center">
                    <Image alt={title} src={image.src} width={40} height={40} className="w-1/2" />
                  </div>
                  {/*2) Description */}
                  <div className="mt-element">
                    <p className="text-base font-medium">Google Inc</p>
                    <p className="text-14 font-normal text-[#706B6B]">10th April</p>
                    <p className="text-14 font-normal text-tableText mt-element-big">
                      {description}
                    </p>
                  </div>

                  {/* 3)Rating or Start Now */}
                  <section className="mt-element">
                    {last ? (
                      <Button className="h-auto rounded-[3px] py-2 pl-2  pr-3 text-xs">
                        Start Now{' '}
                        <Image
                          alt="Arrow right"
                          src={ArrowRightWhite.src}
                          width={40}
                          height={40}
                          className="ml-1 aspect-square w-[10px]"
                        />
                      </Button>
                    ) : (
                      <div className="w-fit rounded-[3px] bg-[#EDEDED] px-3 py-2">
                        <p className="text-xs font-normal">
                          {rating}
                          {/* <sub className="-mt-4 text-xxs leading-[100%]">/10</sub> */}
                          <span className="inline-flex text-xxs">/10</span>
                        </p>
                      </div>
                    )}
                  </section>
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
