import React from 'react';
import { shareData } from '@/app/(employerPageAfterSignUp)/post-created/BottomOrRightComponent';
import Link from 'next/link';
import Image from 'next/image';
import { DownIcon } from '@/images/employerPage/PostCreationSteps';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className=" mt-6  border-t-[1px] border-[#0000001A]">
      <footer className="mx-auto flex justify-between  py-6  pb-7 container-left container-right  lg:px-4 xl:px-20 ">
        {/*COMPLETED:: 3.1)Left 3 link  */}
        <div className="relative  flex gap-2   sm:gap-3 lg:gap-5">
          {[
            { title: 'Terms', link: '/#' },
            { title: 'Privacy', link: '/#' },
            { title: 'Cookies', link: '/#' },
          ].map(({ link, title }) => (
            <Link
              key={title}
              href={link}
              className="font-sansSerifBookFLF text-xs text-[#171717] md:text-base"
            >
              {title}
            </Link>
          ))}
        </div>
        {/*COMPLETED:: 3.2)Right Section(Links+Pricing) */}
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
    </div>
  );
}
