import React from 'react';
import { Candidate } from '../_data/Results';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {};

const ResultCard = ({ date, firstName, jobTitle, lastName, rating, active, image }: Candidate) => {
  return (
    <div className="space-y-4 rounded-[10px] bg-white pb-4 pl-2.5 pt-5">
      {image ? (
        <Image src={image.src} alt={firstName} width={120} height={120} className="w-1/2" />
      ) : (
        <div className="aspect-square w-1/2 rounded-[10px] bg-[#F7F7F7] flex-center">
          <p className="text-2xl 2xl:text-[clamp(1.5rem,1vw+0.3rem,3rems)]">
            {firstName.charAt(0)}
          </p>
        </div>
      )}

      <p className="text-base font-[600] 2xl:text-[clamp(16px,1vw+0.3rem,32px)] 2xl:leading-[120%]">
        {firstName} <br />
        {lastName}
      </p>
      <p className="text-[14px] leading-[20px] text-[#706B6B] 2xl:text-[clamp(14px,1vw+0.2rem,28px)] 2xl:leading-[120%]">
        {date}
      </p>
      <p className="!mt-1 text-xs leading-[20px] text-black 2xl:text-[clamp(12px,1vw+0.3rem,24px)] 2xl:leading-[120%]">
        {jobTitle}
      </p>

      <div
        className={cn(
          'w-[36.5%] rounded-[3px] bg-[#F6F6F6] py-2 flex-center 2xl:py-[clamp(0.5rem,1vw+0.1rem,1rem)]',
          active && 'bg-[#E8FCFF]',
        )}
      >
        <p>{rating}/10</p>
      </div>
    </div>
  );
};

export default ResultCard;
