import React, { ReactElement } from 'react';
import NavSidebar from '../(management)/components/NavSidebar';
import NavMobile from '../(management)/components/NavMobile';

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flex w-full flex-col overflow-x-hidden  bg-dashboardBackground  lg:flex-row">
      {/*COMMENT:: 1)Top or Left Section */}
      <div className=" w-36  flex-col  items-center  dashboard-sidebar-gradient non-mobile lg:w-[6vw] ">
        <NavSidebar />
      </div>

      <div className="only-mobile">
        <NavMobile />
      </div>

      <div className=" h-full w-full flex-1  lg:w-[94vw]">
        <section className="h-full min-h-[90vh]">{children}</section>
      </div>
    </main>
  );
}
