import React from 'react';
import {
  CreateAndShareBackground,
  CreateAndShareBackground4x,
  CreateAndShareBackgroundPdfPng,
  CreateAndShareBackgroundSvg,
  CreateJob,
  LiveInteraction,
  MagicLink,
  CreateJob4x,
} from '../_images/LandingPage/CreateShareReviewTimeline';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {};

//SECTION::Data
const data = [
  {
    id: '01',
    title: 'Create a Job',
    description: 'Give the title rest I’ll handle',
    image: CreateJob4x,
  },
  {
    id: '02',
    title: 'Share the magic link with candidates',
    description: 'Give the title rest I’ll handle',
    image: MagicLink,
  },
  {
    id: '03',
    title: 'Live Interactions',
    description: 'Give the title rest I’ll handle',
    image: LiveInteraction,
  },
] as const;

export default function CreateShareReviewTimeline({}: Props) {
  //TODO::UI PART
  return (
    <section className="mx-auto max-w-[1536px] ">
      <div className="flex flex-col  gap-10  lg:mt-0 lg:flex-row lg:items-stretch lg:justify-between 2xl:justify-center">
        {/*COMMENT:: 1)Top section or left Section */}
        <div
          style={{
            background:
              'linear-gradient(237.71deg, #FCE8DB 5.49%, #FCE8DB 5.49%, #FFFFF1 57.51%, #E8FCFF 105.23%)',
          }}
          className=" relative flex-1 pb-[38px] container-left lg:max-w-[800px] lg:pb-0"
        >
          {/* COMMENT:: absolute Image Background and fixing export resolution. */}
          <div className="absolute left-[30%] top-[-10%]  lg:top-[17%]">
            <Image
              src={CreateAndShareBackgroundSvg.src}
              alt=""
              width={619}
              height={529}
              className="aspect-[187/200] w-[80%] lg:aspect-[619/529] lg:w-[100%]"
            />
          </div>

          <div className=" flex h-full flex-col justify-center  pt-[58px] lg:pb-0 lg:pt-0">
            <h1 className="text-[19px] font-[500] leading-[40px] sm:text-[40px]">
              Create. Share. Review.
            </h1>
            <p className="mt-1 max-w-[88%] text-[12px] font-[400] leading-[18px] text-[#7D7D7D] sm:mt-10 sm:text-2xl md:max-w-[552px]">
              in just 2 minutes, hire from a pool candidates. leyna will handle the process and
              present you with the best profiles
            </p>
          </div>

          {/* COMPLETED:: Only Mobile Divider  */}
          <div className="max-w-[200px] sm:max-w-[60%] md:max-w-[400px] lg:hidden">
            <div className="mt-4 flex w-full items-center gap-1   md:gap-1">
              <div className="w-1/2 border border-[##D4D4D4]"></div>
              <Plus className="h-4 w-4 text-[#D4D4D4] md:h-[35px] md:w-[35px]" />
              <div className="w-1/2 border border-[##D4D4D4]"></div>
            </div>
          </div>
        </div>

        {/* COMMENT:::: Bottom Section or Right Section */}
        <div className="flex-1 px-7 pb-6 md:pr-[80px] lg:max-w-[620px] ">
          <div className="relative h-full w-full">
            {/*COMPLETED Middle line */}
            <div className="absolute  left-[48px] h-full border-l-2  border-dashed  border-black border-l-[1.] md:left-20 "></div>
            {/* Map each section */}

            {/* 3 steps  */}
            <div className="space-y-3 lg:space-y-5">
              {data.map(({ id, image, description, title }, index) => {
                const firstCard = index === 0;
                const lastCard = index === data.length - 1;
                return (
                  <div
                    key={id}
                    className={cn(
                      'relative h-[230px] w-full sm:h-[365px]',
                      firstCard && 'top-[33px] h-[260px] sm:h-[420px] md:top-[58px]',
                      lastCard && 'h-[160px]  sm:h-[200px]',
                    )}
                  >
                    {/* Left number */}
                    <p className="absolute font-workSans text-[27px] font-[400] leading-[31px] md:text-[48px] md:leading-[56px]">
                      {id}
                    </p>
                    {/* COMPLETED:: Circle  */}
                    <div className="absolute left-[48px] top-[9px] h-4  w-4  translate-x-[-46%] rounded-full bg-black md:left-20 md:top-[16px]  md:h-5 md:w-5"></div>
                    {/* Right section(title,description and image) */}
                    <div className=" absolute left-[65px] sm:left-[115px]">
                      <h4 className="text-[11.12px] font-[500] leading-[22.24px] sm:text-[20px] sm:leading-[40px]">
                        {title}
                      </h4>
                      <p className="text-[10.01px] font-[400] leading-[17.79px] text-[#7D7D7D] sm:text-[18px] sm:leading-[32px]">
                        {description}
                      </p>
                      <Image
                        quality={100}
                        width={435}
                        height={276}
                        src={image.src}
                        alt={title}
                        className={cn(
                          'mt-2.5 aspect-[435/276] w-[242px]  sm:w-[435px]',
                          lastCard &&
                            'aspect-[435/110] h-[110px]  w-[242px] sm:aspect-[241/153] sm:w-[435px]',
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
