'use client';

import { Menu } from '@/images/dashboard';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import NavSidebar from './NavSidebar';
import { useOnClickOutside } from 'usehooks-ts';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div>
      <div className="container-left container-right">
        <Image
          onClick={prev => {
            setIsOpen(prev => !prev);
          }}
          alt="Menu"
          src={Menu.src}
          className="mt-3 aspect-square w-7 cursor-pointer "
          width={48}
          height={48}
        />
      </div>

      {/* 98/360=>  */}
      <AnimatePresence>
        {isOpen && (
          <div ref={ref} className="absolute top-0 z-50 w-24 body-gradient">
            <NavSidebar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
