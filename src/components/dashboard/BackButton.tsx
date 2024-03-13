'use client';
import { ArrowBack } from '@/images/employerPage/PostCreationSteps';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

export default function BackButton({}: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="rounded-[3px] bg-white px-2 py-2.5 pr-3 text-base font-[400] 3xl:px-[clamp(10px,1vw+0.2rem,22px)] 3xl:text-[clamp(1rem,1vw+0.1rem,2rem)]"
    >
      <Image
        alt="Arrow back"
        src={ArrowBack.src}
        width={30}
        height={30}
        className=" inline-flex aspect-square w-4"
      />{' '}
      Back
    </button>
  );
}
