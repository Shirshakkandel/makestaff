'use client';
import React from 'react';
import { Nav } from './Nav';
import Image from 'next/image';
import { Home, Plus, W, Bar, User, Report, Setting, Notification } from '@/images/dashboard';

const NavSidebar = () => {
  return (
    //Figma aspect aspect-[148/936]
    <nav className="mx-auto flex h-full w-full flex-col items-center pt-5 2xl:pt-[2.13%]">
      <Image
        src={W.src}
        alt="Word"
        height={120}
        width={120}
        className="mx-auto w-14 2xl:w-[40.54%]"
      />

      <button className="mt-11 aspect-square w-12 rounded-full button-gradient flex-center">
        <img src={Plus.src} alt="Plus" className="w-[50%]" />
      </button>

      <div className="mt-20">
        <Nav
          isCollapsed={true}
          links={[
            {
              title: 'Home',

              icon: Home,
              variant: 'default',
              href: '#',
            },
            {
              title: 'Analytics',

              icon: Bar,
              variant: 'ghost',
              href: '#',
            },
            {
              title: 'User',

              icon: User,
              variant: 'ghost',
              href: '#',
            },
            {
              title: 'Report',

              icon: Report,
              variant: 'ghost',
              href: '#',
            },
            {
              title: 'Setting',

              icon: Setting,
              variant: 'ghost',
              href: '#',
            },
            {
              title: 'Notification',
              label: '25',
              icon: Notification,
              variant: 'ghost',
              href: '#',
            },
            {
              title: 'User ',

              icon: User,
              variant: 'ghost',
              href: '#',
            },
          ]}
        />
      </div>
    </nav>
  );
};

export default NavSidebar;
