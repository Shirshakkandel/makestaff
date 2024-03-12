import { Boy } from '@/app/(public)/_images/LandingPage/LeynaExperience';
import { Button } from '@/components/ui/button';
import { Email, Flower } from '@/images/auth';
import { ExperienceYear, Phone, Plus, PlusWhite } from '@/images/dashboard';
import { ArrowBack, EmailSvg } from '@/images/employerPage/PostCreationSteps';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function TopOrLeftComponent({}: Props) {
  return (
    <section className=" relative pl-6 pt-12 lg:pl-14 lg:pt-8 3xl:pl-20 4xl:pl-[clamp(5rem,2vw+1rem,10rem)]">
      {/*COMMENT:: 1)Back button (2:25-2:52) */}
      <button className="rounded-[3px] bg-white px-2 py-2.5 pr-3 text-base font-[400] 3xl:px-[clamp(10px,1vw+0.2rem,22px)] 3xl:text-[clamp(1rem,1vw+0.1rem,2rem)]">
        <Image
          alt="Arrow back"
          src={ArrowBack.src}
          width={30}
          height={30}
          className=" inline-flex aspect-square w-4"
        />{' '}
        Back
      </button>

      {/*COMMENT:: 2)Image with bottom overlay */}
      <section className="relative mt-10 aspect-[217/222] w-[217px] lg:w-[266px] 4xl:w-[45%]">
        <Image alt="candidate" fill src={Boy.src} />
        <div className="image-bottom-gradient absolute bottom-0 z-10 aspect-[217/138] w-full  "></div>
      </section>

      {/*COMMENT::(4-4:30) 3)Description of Candidate  */}
      <div className="mt-16 ">
        <p className="font-sansSerifBookFLF text-base lg:text-[30px] lg:leading-[110%]">
          Software developer
        </p>
        <p className="mt-3 text-[23px] font-[600]">Rahul Jatt’s</p>
        {/* <p className="mt-3 font-sansSerifBookFLF text-[16px] font-[550] leading-[18px]">
          Your personal <br /> interviewer
        </p> */}

        <section className="mt-8 flex flex-col justify-center gap-6 ">
          {[
            { image: ExperienceYear, text: '5 Years+ of Experience' },
            { image: EmailSvg, text: 'Rahuljatt’s@gmail.com' },
            { image: Phone, text: '+91 97 67 111 619 ' },
          ].map(({ image, text }, index) => {
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="aspect-square w-10 rounded-[3px] bg-white flex-center">
                  <Image alt="text" src={image.src} width={80} height={80} className="w-1/2" />
                </div>
                <p className="text-[14px] font-[400] leading-[20px]">{text}</p>
              </div>
            );
          })}
        </section>
      </div>

      {/* COMMENT::(4:30-4:55) 4)Not Qualified and Qualified button */}
      <div className="flex w-[95%] gap-4 mt-section md:w-[80%] md:gap-5 lg:gap-6">
        <Button className="w-full border-[1px] border-black" variant={'outline'}>
          Not Qualified?
        </Button>

        <Button className="w-full">
          {' '}
          Qualified <Image
            alt="Plus"
            src={PlusWhite.src}
            width={12}
            height={12}
            className="w-4"
          />{' '}
        </Button>
      </div>

      {/* COMMENT:: 6) Image */}
      <div className="mr-6 mt-6 lg:mt-3">
        <Image
          alt="Flower"
          src={Flower.src}
          width={140}
          height={140}
          className="ml-auto aspect-square  w-20"
        />
      </div>
    </section>
  );
}
