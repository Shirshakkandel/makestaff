import React, { ReactElement } from 'react';
import NavSidebar from './components/NavSidebar';

type Props = {
  children: ReactElement;
};

export default function Dashboard({ children }: Props) {
  return (
    <main className="flex min-h-[100vh] flex-col lg:flex-row ">
      {/* 1)Top or Left Section */}
      <div className="dashboard-sidebar-gradient w-36  flex-col items-center  non-mobile">
        <NavSidebar />
      </div>
      {/* 2)Right or Bottom Section */}
      {/* 2.1)Children */}
      {children}
      {/* 2.2)Footer Section */}
    </main>
  );
}
