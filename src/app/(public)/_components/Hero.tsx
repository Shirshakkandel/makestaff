import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import React from 'react';

const sansSerifBookFLF = localFont({ src: './SansSerifBookFLF-Italic.otf' });

type Props = {};

export default function Hero({}: Props) {
  //SECTION::UI PART
  return (
    <div className="flex flex-col ">
      <p className={cn(sansSerifBookFLF.className)}>Leyna</p>
    </div>
  );
}
