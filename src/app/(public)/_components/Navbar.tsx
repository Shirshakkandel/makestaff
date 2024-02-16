import Image from 'next/image';
import React from 'react';
import { Logo } from '../_images/LandingPage';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {};

/*Steps max-w-1255px=> px-[85px] max-w 324px 
left logo 
right Log in and Sign up
*/
export default function Navbar({}: Props) {
  //SECTION::UI PART
  return (
    <header className=" py-4 container-custom ">
      <div className="w-full flex items-center justify-between">
        {/* LOGO */}
        <Image src={Logo.src} width={167} height={27} alt="Company Logo" />

        {/* Only Tablet NavItems */}
        <div className="hidden md:block">
          <div className="flex gap-[11px] items-center">
            {/* Log In and Sign Up */}
            <Link
              href={'/login'}
              className={`workSans text-base leading-[27px] font-[500] underline-offset-4 hover:underline`}
            >
              Log In
            </Link>

            <Link
              href={'/login'}
              className={`text-base leading-[26.8px]  font-[500] py-[18px] pl-[28px] pr-[17px] rounded-[2px] bg-white hover:bg-white/25 text-black`}
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* Only Mobile Navbar Icon */}
      </div>
    </header>
  );
}
