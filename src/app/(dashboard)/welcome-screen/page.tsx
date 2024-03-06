'use client';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { WelcomeScreenBackground, WelcomeScreenPeople } from '@/images/employerPage/WelcomeScreen';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { topSection } from './welcomeScreenData';
import {
  ArrowRightWhite,
  CopySvg,
  DownIcon,
  HandEmoji,
} from '@/images/employerPage/PostCreationSteps';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from '@/images/auth';
import Link from 'next/link';
import { shareData } from '@/app/(employerPageAfterSignUp)/post-created/BottomOrRightComponent';

type Props = {};
const link = 'https://Lenya.ai/search?q=wavess&category';

export default function WelcomeScreen({}: Props) {
  //SECTION::LOGIC PART
  const { toast } = useToast();
  const copyLink = () => {
    navigator.clipboard.writeText(link);
    toast({
      title: 'Link copied to clipboard',
      description: 'You can paste it in the search bar',
      variant: 'default',
    });
  };

  //SECTION::UI PART
  return (
    <main
      style={{
        background: 'linear-gradient(239.18deg, #FCE8DB 5.68%, #D3F5FF 59.3%, #FEF2FC 101.98%)',
      }}
      className="relative h-full min-h-[100vh] w-full pt-12 lg:pt-14 "
    >
      {/* SECTION:: Absolute Things */}
      <section>
        <div className="absolute left-[25%] top-0 hidden aspect-[1072/570] w-[75%]  lg:block">
          <Image alt="Background" src={WelcomeScreenBackground.src} fill className="" />
        </div>
        <div className="absolute left-[25%] h-full border-[1px]"></div>
      </section>

      {/*SECTION:: SECTION::1)Top Section rectangle with image */}
      <section className="relative  z-20 mx-auto w-[90%]  rounded-[6px] border-[1px] border-[#D3D3D3]  bg-white flex-center md:w-[70%]   lg:w-[55%] lg:min-w-[750px] 2xl:max-w-[1500px]">
        <div className=" flex flex-wrap items-center justify-center gap-2 gap-y-3  px-1 py-3 sm:gap-3 md:gap-6 lg:px-3 xl:flex-nowrap 2xl:gap-12">
          {topSection.map(({ description, title, number }, id) => {
            const watch = id === 4;
            return (
              <div
                key={title}
                className={cn(
                  'flex items-center gap-1 md:gap-1 lg:gap-1.5 2xl:gap-2.5',
                  watch && 'border-l-[1px] border-[#D3D3D3]',
                )}
              >
                <p
                  className={cn(
                    'text-base font-[500] lg:text-[32px] lg:leading-[50px] 2xl:text-[clamp(2rem,1vw+0.2rem,3rem)]',
                  )}
                >
                  {number}
                </p>

                <div className=" flex flex-col text-xxs font-[400] leading-[103%] lg:text-xs lg:leading-[110%] 2xl:text-[clamp(1rem,0.3vw+0.1rem,1.5rem)] 2xl:leading-[110%]">
                  <p className={cn('text-[#AAA6A6]', watch && 'text-right text-black')}>{title}</p>
                  <p className={cn('whitespace-nowrap', watch && 'text-[#AAA6A6]')}>
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
          <Image
            alt="Person"
            src={WelcomeScreenPeople.src}
            width={120}
            height={120}
            className="aspect-square w-4  rounded-[3px]  lg:w-8 2xl:w-10"
          />
        </div>
      </section>

      {/*TODO:: SECTION:: 2)Hero Section */}
      {/* ml-339px => 23% mr-165px  /1440 width=> 936/1440=> 65%
      in mobile 168/360 mx-auto 46.66px  gap-55px => */}
      <section className="mt-7 flex flex-col gap-10 sm:mt-10 md:gap-12 lg:ml-[23%] lg:mt-32 lg:w-[70%] lg:flex-row lg:gap-14 2xl:gap-[4%] ">
        {/*COMMENT:: 2.1)Top or Left section */}
        <section className="relative mx-auto aspect-[271/391] w-[46.6%] min-w-[168px] lg:mx-0 lg:w-[29%] xl:min-w-[271px]">
          <Image alt="Leyna" src={Leyna.src} fill />
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(226, 241, 243, 0) 31.73%, #DCF3F9 100%)',
            }}
            className="absolute bottom-0 aspect-[168/116] w-full "
          ></div>
        </section>

        {/*COMMENT: 2.2)Bottom or Right Section */}
        <section className="mx-auto w-[90%] lg:w-full ">
          <p className="pt-8 font-sansSerifBookFLF text-[19px] font-[550]   text-black  2xl:text-[clamp(19px,1.5vw+0.2rem,2.2rem)] 2xl:leading-[110%]">
            Welcome{' '}
            <span className="inline-flex items-end align-bottom">
              <Image
                alt="HandEmoji"
                src={HandEmoji.src}
                width={48}
                height={48}
                className=" aspect-square w-7 2xl:w-[80%]"
              />
            </span>{' '}
            Pavan! <span className="font-workSans text-[600]">I’ am Leyna</span>
          </p>

          <p className="mt-5 text-[19px] font-[400] leading-[24px]  md:mt-7 lg:text-[32px] lg:leading-[38px] 2xl:leading-[110%] 2xl:text-[2rem,2vw+0.2rem,4rem]">
            Your digital Frontend Developer interviewer at{' '}
            <span className="font-[500]">smarslide</span>
          </p>

          {/* Magic link section */}
          <div className="mt-7 hidden space-y-3  md:mt-8 md:block md:space-y-4 lg:mt-10 lg:space-y-5">
            <p className="text-[14px] font-[500] text-black md:text-base">Magic Public Link</p>
            <div className="flex justify-start gap-4">
              {/* Left section */}
              <div className="flex w-full items-center justify-between gap-14 rounded-[2.5px] bg-white px-2 py-2.5 lg:max-w-[850px] lg:px-5 2xl:px-[4.5%]">
                <p className="flex-1 text-xs font-[400] text-[#4370E3AD] md:text-base lg:text-xs xl:text-base ">
                  https://Lenya.ai/search?q=wavess&category
                </p>

                <Image
                  alt={'Copy'}
                  src={CopySvg}
                  width={32}
                  height={48}
                  className=" h-10 w-6 cursor-pointer"
                  onClick={() => {
                    copyLink();
                  }}
                />
              </div>

              {/* Copy Link Button*/}
              <button
                style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
                className=" hidden whitespace-nowrap rounded-[6px] bg-white px-7 py-7 flex-center md:block"
                onClick={copyLink}
              >
                Copy Link
              </button>
            </div>
          </div>

          {/* Get Started */}
          <button className="mt-8 min-h-8 min-w-[111px]  gap-2 rounded-full bg-black px-3 py-2.5 text-xs  text-[#F7F7F9] flex-center md:aspect-[197/66] md:px-7 md:py-5 md:text-base">
            Get Started{' '}
            <Image
              alt="Right"
              src={ArrowRightWhite.src}
              width={24}
              height={24}
              className="aspect-square w-4 md:w-5"
            />
          </button>
        </section>
      </section>

      {/*TODO:: SECTION:: 3)Footer Section */}
      <footer className="mt-[122px] flex justify-between pb-7 container-custom md:pb-8 lg:mt-[202px] ">
        {/*COMPLETED:: 3.1)Left 3 link  */}
        <div className="flex gap-2 sm:gap-3 lg:gap-5">
          {[
            { title: 'Terms', link: '/#' },
            { title: 'Privacy', link: '/#' },
            { title: 'Cookies', link: '/#' },
          ].map(({ link, title }) => (
            <Link href={link} className="text-xs text-[#171717] md:text-base">
              {title}
            </Link>
          ))}
        </div>

        {/*TODO:: 3.2)Right Section(Links+Pricing) */}
        <div className="flex gap-9 ">
          {/* 3 Social Links */}
          <div className="flex gap-2.5 md:gap-4">
            {shareData.map(({ image, title }) => (
              <Image
                key={title}
                src={image.src}
                width={66}
                height={66}
                alt="title"
                className="aspect-square w-3 md:w-4"
              />
            ))}
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-2 ">
            <p className="text-xs text-text md:text-base">Pricing</p>
            <Image
              src={DownIcon.src}
              alt="Down"
              width={48}
              height={48}
              className="aspect-square w-3 md:w-4"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
