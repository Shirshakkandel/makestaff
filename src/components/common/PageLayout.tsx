import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  topOrLeftComponents: React.ReactNode;
  bottomOrRightComponents: React.ReactNode;
  leftGradient?: string;
};

export default function PageLayout({
  topOrLeftComponents,
  bottomOrRightComponents,
  leftGradient,
}: Props) {
  return (
    //Total 1440px=> left(641px)45% right 799px 55%
    <main className=" flex min-h-[100vh] flex-col  lg:flex-row  lg:justify-start">
      <div
        // style={{
        //   background: 'linear-gradient(239.18deg, #FCE8DB 5.68%, #D3F5FF 59.3%, #FEF2FC 101.98%)',
        // }}
        className={cn('relative w-full  body-gradient  lg:w-[45%]', leftGradient && leftGradient)}
      >
        {topOrLeftComponents}
      </div>

      <div className="w-full lg:w-[55%]">{bottomOrRightComponents}</div>
    </main>
  );
}
