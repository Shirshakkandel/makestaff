'use client';
import React from 'react';

import Image from 'next/image';
import { Closed } from '@/images/auth';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
};
/* Logic to implement.
 Multi step form
1. if we use zod and form validation what about Next which should be inside form. 
2. second method => instead track state like PostCreationStepsWrapper with state if null then pass value according to current index like if current index is 1 and title then disable. 
*/
export default function PostCreationStepsWrapper({
  children,
  title,
  description,
  className,
}: Props) {
  return (
    <main className="h-full  py-5 container-custom 2xl:pt-[5%]">
      <div className="flex justify-end">
        <div className="relative flex aspect-square w-[7.7%] min-w-[28px] justify-end rounded-full border-[1px] border-[#00000066] flex-center lg:w-[4%]">
          <Image alt={'Closed'} src={Closed.src} width={32} height={32} className="w-[60%]" />
        </div>
      </div>

      <section className={cn('lg:mt-[180px] 3xl:mt-[19%]', className)}>
        <h1 className=" 3xl: text-base font-[500] leading-[50px] md:text-[32px] md:leading-[50px] 2xl:text-[clamp(32px,2vw+0.3rem,70px)] 2xl:leading-[130%]">
          {title}
        </h1>

        {description && (
          <p className=" text-xs leading-[20px] md:text-base  2xl:mt-5 2xl:text-[clamp(1rem,2vw+0.2rem,2rem)] 2xl:leading-[130%]">
            {description}
          </p>
        )}

        <div className="mt-6 w-full  lg:mt-12">{children}</div>
      </section>
    </main>
  );
}
