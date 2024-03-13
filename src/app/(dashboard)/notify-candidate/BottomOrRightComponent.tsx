import ClosedComponent from '@/components/PostCreationStep/ClosedComponent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from '@/images/auth';
import { Phone } from '@/images/dashboard';
import { ArrowRightWhite, EmailSvg } from '@/images/employerPage/PostCreationSteps';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function BottomOrRightComponent({}: Props) {
  return (
    <section className="h-full bg-[#f7f7f9] pt-4 container-left container-right md:pt-6 lg:pt-12">
      {/* 1)Close Button */}
      <ClosedComponent />
      {/*COMMENT:::: 2)Notify Candidate */}
      <section className="mt-section">
        <h1 className="text-base font-medium md:text-xl xl:text-3xl ">Notify Candidate</h1>
        <p className="text-xs font-normal text-[#3E3E3E] mt-element lg:text-base">
          This is the user-friendly typeface that is used <br /> in different notable places
        </p>
      </section>

      {/*COMMENT:: 3)Personalized message */}
      {/* 11:47-12:12 22-36lines */}
      <section className="mt-section">
        <div className="flex justify-between gap-14">
          <p className="subHeading">Do you want to share personalized messages?</p>
          <p className="text-14">Optional</p>
        </div>

        <Card className="rounded-[10px] border-none px-2 py-6 mt-element md:px-8">
          <p className="md:text-14 max-w-[390px] text-xs leading-[20px]">
            We are thrilled to inform you that you have been selected for the job position at
            (Company Name) Congratulation on this achievement?
          </p>
        </Card>
      </section>

      {/*COMMENT:: 4)Contact  */}
      <section className="mt-section ">
        <p className="subHeading">Contact for further process</p>
        <div className="mt-element-big flex w-full gap-5">
          {[
            { image: EmailSvg, title: 'Rahuljatt’s@gmail.com' },
            { image: Phone, title: '+91 97 67 111 619 ' },
          ].map(({ image, title }, index) => {
            return (
              <div
                key={index}
                className="flex w-full max-w-[400px] items-center gap-2 rounded-[3px] bg-white px-1.5 py-2 md:w-1/2"
              >
                <div className="aspect-square w-10 rounded-[3px] bg-[#F9F9F9] flex-center">
                  <Image
                    src={image.src}
                    width={60}
                    height={60}
                    alt={image.src}
                    className="w-[60%]"
                  />
                </div>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*COMMENT:: 5)No,I am Not done and Notify Candidate button */}
      {/* (2-2:13) (70-90 lines) */}
      <section className="flex flex-col gap-y-7  mt-section md:flex-row md:justify-between">
        <Button variant={'link'} className="text-14 underline underline-offset-4">
          No, i am Done
        </Button>

        <Button className="flex gap-2.5 !py-5">
          Notify Candidate
          <Image
            className="inline-flex aspect-square w-5"
            alt="Arrow Right"
            src={ArrowRightWhite.src}
            width={40}
            height={40}
          />
        </Button>
      </section>
    </section>
  );
}
