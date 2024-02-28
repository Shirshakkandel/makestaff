import HomePageHero from '@/components/EmployerPage/HomePageHero';
import Navbar from '@/components/EmployerPage/Navbar';

import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main
      style={{
        background: 'linear-gradient(239.18deg, #FCE8DB 5.68%, #D3F5FF 59.3%, #FEF2FC 101.98%)',
      }}
      className="min-h-[100vh]"
    >
      <Navbar />
      <HomePageHero />
    </main>
  );
}
