'use client';
import React, { ReactElement } from 'react';
import NavSidebar from './components/NavSidebar';
import NavMobile from './components/NavMobile';
import Footer from './components/Footer';

type Props = {
  children: ReactElement;
};

export default function Dashboard({ children }: Props) {
  return (
    <main className="flex w-full flex-col overflow-x-hidden  bg-dashboardBackground  lg:flex-row">
      {/* 1)Top or Left Section */}
      <div className=" w-36  flex-col  items-center  dashboard-sidebar-gradient non-mobile lg:w-[6vw] ">
        <NavSidebar />
      </div>

      <div className="only-mobile">
        <NavMobile />
      </div>

      {/* 2)Right or Bottom Section */}
      {/* 2.1)Children */}
      <div className=" w-full flex-1 lg:w-[94vw]">
        <section className="min-h-[90vh] ">{children}</section>
        {/* 2.2)Footer Section */}
        {/*SECTION:: SECTION:: 3)Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
