'use client';
import { Menu, X } from 'lucide-react';
import React, { useRef } from 'react';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Logo, MenuSvg } from '@/app/(public)/_images/LandingPage';
import { navItems } from './Navbar';
import { cn } from '@/lib/utils';

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
    <div>
      <Image
        className="w- h-8 cursor-pointer"
        onClick={toggleMenu}
        alt="Menu"
        src={MenuSvg.src}
        width={50}
        height={50}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <div
            ref={ref}
            className="absolute inset-x-0 top-0 z-50  origin-top-right  p-2 transition"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-secondary bg-gradient-to-tr from-purple-50 to-purple-100 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                {/* 1)Top section(logo+close icon) */}
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
                {/*TODO:: 2)Middle NavItem */}
                {navItems.map(({ link, title }) => (
                  <div className="my-4 flex flex-col items-start gap-4" key={title}>
                    <Link
                      key={title}
                      className={cn(
                        buttonVariants({ variant: 'link' }),
                        ' flex w-full justify-start text-left font-sansSerifBookFLF text-[20px] font-[550]',
                      )}
                      href={link}
                    >
                      {title}
                    </Link>
                  </div>
                ))}
                {/* 3)Bottom Section Login and Sign up */}
                <div className="mt-6 flex  items-center gap-4 md:gap-6">
                  <Link
                    href={'/employee-login'}
                    className={`w-full max-w-[500px] text-center font-workSans text-base font-[500] leading-[27px] underline-offset-4 hover:underline`}
                  >
                    Log In
                  </Link>
                  <Link
                    href={'/#'}
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'h-12 w-full rounded-[6px] font-sansSerifBookFLF text-[20px] font-[550]',
                    )}
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
