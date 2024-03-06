'use client';
import Image from 'next/image';
import { Closed } from '@/images/auth';
import { Switch } from '@/components/ui/switch';
import {
  EmailSvg,
  FacebookSvg,
  TwitterSvg,
  Linkedin,
  CopySvg,
} from '@/images/employerPage/PostCreationSteps';
import React, { useState } from 'react';

import './BottomOrRightComponent.css';
import { useToast } from '@/components/ui/use-toast';

//SECTION::share data
export const shareData = [
  {
    title: 'LinkDin',
    image: Linkedin,
  },
  {
    title: 'Facebook',
    image: FacebookSvg,
  },
  {
    title: 'Twitter',
    image: TwitterSvg,
  },
];

const link = 'https://Lenya.ai/search?q=wavess&category';
type Props = {};

export default function BottomOrRightComponent({}: Props) {
  //SECTION::LOGIC PART
  const [isPublic, setIsPublic] = useState(false);

  //Function Part
  const { toast } = useToast();
  const togglePublicLink = () => setIsPublic(prev => !prev);

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
    <section className="h-full bg-background2">
      <main className="h-full  py-5 container-custom 2xl:pt-[5%]">
        {/* 1)Close Button */}
        <div className="flex justify-end">
          <div className="relative flex aspect-square w-[7.7%] min-w-[28px] justify-end rounded-full border-[1px] border-[#00000066] flex-center lg:w-[4%]">
            <Image alt={'Closed'} src={Closed.src} width={32} height={32} className="w-[60%]" />
          </div>
        </div>

        {/* COMPLETED::2)Share with Candidates */}
        <section className="space-y-5 md:space-y-10 lg:space-y-14">
          {/* 2.1)Top Section */}
          <section className="space-y-5 md:space-y-6">
            <div className="flex  items-end justify-between">
              <h2 className="mt-6 w-[110px] text-[19px] font-[500] leading-[24px] md:w-full md:text-[32px] md:leading-[50px] lg:mt-10 2xl:text-[clamp(2rem,2vw+0.3rem,4rem)] 2xl:leading-[120%]">
                Share with Candidates
              </h2>
              <div className="flex items-center gap-2">
                <div
                  className="cursor-pointer text-base font-[400] leading-[20px]  "
                  onClick={() => {
                    setIsPublic(prev => !prev);
                  }}
                >
                  Public
                </div>
                <Switch checked={isPublic} onCheckedChange={togglePublicLink} />
              </div>
            </div>

            <p className=" w-[95%] text-base font-[400] md:w-[80%] 2xl:text-[clamp(1rem,1vw+0.2rem,2rem)] 2xl:leading-[120%]">
              Share this with candidates via email or make the link public for anyone to participate
              in the interview
            </p>
          </section>

          {/* 2.2)Invite section */}
          <section className=" space-y-5 ">
            <h3 className="text-base font-[500] md:text-[20px] 2xl:text-[clamp(1.25rem,2vw+0.2rem,2.5rem)] 2xl:leading-[120%]">
              Invite
            </h3>

            <div className="flex gap-5 2xl:gap-[3%]">
              <div className="aspect-square w-10 rounded-[9%] bg-white flex-center md:w-[66px] 2xl:w-[9%] 2xl:max-w-20 ">
                <Image width={50} height={50} src={EmailSvg.src} alt="Email" className="w-1/2" />
              </div>
              <input
                style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
                type="email"
                className="w-[90%] max-w-[1000px] rounded-[6px] bg-white px-2.5 text-[14px] font-[400] leading-[20px] placeholder:text-[#00000066] md:text-base 2xl:text-[clamp(1rem,1vw+0.2rem,2rem)]"
                placeholder="Email"
              />
            </div>
          </section>
        </section>

        {/*TODO:: 3)Magic Public link */}
        <section className="mt-5 flex flex-col gap-[18px] md:mt-10 lg:mt-28 ">
          <h3 className="text-base font-[500] md:text-[20px] 2xl:text-[clamp(20px,1.5vw+0.2rem,40px)] 2xl:leading-[120%]">
            Magic Public Link
          </h3>

          <div className="flex justify-end gap-5">
            {/* Only Tablet and laptop Link button */}
            <div
              style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
              className="hidden aspect-[459/66] w-[459px] items-center justify-between  border-[1px] border-[#CDCDCD] bg-white  px-5  md:flex"
            >
              <p className="text-[#4370E3AD]">https://Lenya.ai/search?q=wavess&category</p>

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

            {/* Only Mobile Copy Image */}
            <Image
              alt={'Copy'}
              src={CopySvg}
              width={32}
              height={48}
              className=" h-10 w-6 cursor-pointer md:hidden"
              onClick={() => {
                copyLink();
              }}
            />

            {/* Copy Link Button*/}
            <button
              style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
              className="w-[132px] rounded-[6px] bg-white flex-center"
              onClick={copyLink}
            >
              Copy Link
            </button>
          </div>
          <p className="hidden text-[14px] font-[400] leading-[24px] text-[#AAA6A6] md:block">
            Share this link on linkedIn or other platforms for candidates interviews
          </p>
        </section>
        {/*COMPLETED:: 4)Share On */}
        <section className="mt-7 space-y-6 md:mt-10 lg:mt-14">
          <h3>Share on</h3>
          <div className="flex gap-3">
            {shareData.map(({ image, title }) => {
              return (
                <div
                  key={title}
                  style={{ boxShadow: '0px 1px 80px 0px #0000000F' }}
                  className="aspect-square w-8 cursor-pointer bg-white flex-center md:w-10 2xl:w-[2vw]"
                >
                  <Image
                    src={image.src}
                    width={66}
                    height={66}
                    alt="title"
                    className="aspect-square w-1/2"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
}
