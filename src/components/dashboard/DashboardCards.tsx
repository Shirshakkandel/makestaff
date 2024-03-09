'use client';
import { Leyna } from '@/app/(public)/_images/LandingPage';
import { Plus } from '@/images/dashboard';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  array: {
    icon: StaticImageData;
    title: string;
    description: string;
  }[];
};

export default function DashboardCards({ array }: Props) {
  return (
    <section className="mt-7 flex flex-col gap-4 container-left container-right md:flex-row md:flex-wrap">
      {array.map(({ description, icon, title }, index) => {
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
  );
}
