'use client';
import { Menu, X } from 'lucide-react';
import React, { useRef } from 'react';
import { Logo, MenuSvg } from '../_images/LandingPage';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {};

export default function NavbarMobileMenu({}: Props) {
  //SECTION::LOGIC PART
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = () => {
    // alert('hello');
    setIsMenuOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  //SECTION:: UI PART
  return (
    <div className="md:hidden">
      <Image
        className="cursor-pointer"
        onClick={toggleMenu}
        alt="Menu"
        src={MenuSvg.src}
        width={24}
        height={24}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <div
            ref={ref}
            className="absolute inset-x-0 top-0 z-50  origin-top-right  p-2 transition"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-secondary bg-gradient-to-tr from-purple-50 to-purple-100 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link href="/" className="inline-flex items-center space-x-2">
                    <Image
                      src={Logo.src}
                      width={167}
                      height={27}
                      alt="Company Logo"
                      className="h-[16px] w-[100px] md:h-[27px] md:w-[167px]"
                    />
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-7 w-7" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-center gap-6">
                  <Link  
                    href={'/employee-login'}
                    className={`w-full max-w-[500px] text-center font-workSans text-base font-[500] leading-[27px] underline-offset-4 hover:underline`}
                  >
                    Log In
                  </Link>
                  <Link
                    href={'/#'}
                    className={`inline-flex h-[48px] w-full max-w-[500px] items-center justify-center   rounded-[2px] bg-white   py-[18px] pl-[28px] pr-[17px] text-[16px] font-[500] leading-[26.8px] text-black hover:bg-white/25`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
