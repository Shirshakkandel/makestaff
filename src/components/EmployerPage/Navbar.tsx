import { Logo } from '@/app/(public)/_images/LandingPage';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import NavbarMobileClient from './NavbarMobileClient';

type Props = {};
export const navItems = [
  {
    title: 'Templates',
    link: '#',
  },
  {
    title: 'Resources',
    link: '#',
  },
  {
    title: 'Pricing',
    link: '/pricing',
  },
] as const;

export default function Navbar({}: Props) {
  return (
    <header className=" pt-5  container-custom  lg:pt-7">
      <div className="flex items-center justify-between">
        {/*COMPLETED:: 1)Left Logo 99/360=> 27.5% lg:167/1140=> 14.6 */}
        <Image
          src={Logo.src}
          width={200}
          height={50}
          alt="logo"
          className="aspect-[99/16] w-[100px] min-w-[27.5%] md:w-[167px] lg:min-w-[14.6%]"
        />

        {/* COMPLETED:: 2)Only Laptop NavItems */}
        <div className="non-mobile">
          <div className="flex  gap-[30px] 2xl:gap-[37px]">
            {navItems.map(({ link, title }) => {
              return (
                <Link
                  key={title}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'font-sansSerifBookFLF text-[20px] font-[550]',
                  )}
                  href={link}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>

        {/*COMPLETED:: 3)Right Login and Sign Up */}
        <div className="flex gap-3  non-mobile 2xl:gap-4">
          <Link
            className={cn(
              buttonVariants({ variant: 'link' }),
              'h-12 font-sansSerifBookFLF text-[20px] font-[550]',
            )}
            href="#"
          >
            Log in
          </Link>

          <Link
            className={cn(
              buttonVariants({ variant: 'default' }),
              'h-12 w-[126px] rounded-[6px] font-sansSerifBookFLF text-[20px] font-[550]',
            )}
            href=""
          >
            Sign Up
          </Link>
        </div>

        {/* 4)Mobile 3 line icon*/}
        <div className="only-mobile">
          <NavbarMobileClient />
        </div>

        {/* 5)Mobile NavMenu Overlay */}
      </div>
    </header>
  );
}
