import Image from 'next/image';
import React from 'react';
import { Logo } from '../_images/LandingPage';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import NavbarMobileMenu from './NavbarMobileMenu';

type Props = {};

/*Steps max-w-1255px=> px-[85px] max-w 324px 
left logo 
right Log in and Sign up
*/
export default function Navbar({}: Props) {
  //SECTION::UI PART
  return (
    <header className=" pt-4 container-custom ">
      <div className="flex w-full items-center justify-between">
        {/* LOGO */}
        <Image
          src={Logo.src}
          width={167}
          height={27}
          alt="Company Logo"
          className="h-[16px] w-[100px] md:h-[27px] md:w-[167px]"
        />

        {/* Only Tablet NavItems */}
        <div className="hidden md:block">
          <div className="flex items-center gap-[11px]">
            {/* Log In and Sign Up */}
            <Link
              href={'/employee-login'}
              className={`font-workSans text-base font-[500] leading-[27px] underline-offset-4 hover:underline`}
            >
              Log In
            </Link>

            <Link
              href={'/#'}
              className={`inline-flex h-[48px] items-center justify-center   rounded-[2px] bg-white   py-[18px] pl-[28px] pr-[17px] text-[16px] font-[500] leading-[26.8px] text-black hover:bg-white/25`}
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* Only Mobile Navbar Icon */}

        <NavbarMobileMenu />
      </div>
    </header>
  );
}
