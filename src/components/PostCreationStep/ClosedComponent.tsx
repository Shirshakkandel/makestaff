import { Closed } from '@/images/auth';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function ClosedComponent({}: Props) {
  return (
    <div className="flex justify-end">
      <button className="relative flex aspect-square w-[6%] min-w-[28px] justify-end rounded-full border-[1px] border-[#00000066] flex-center lg:w-[4%]">
        <Image alt={'Closed'} src={Closed.src} width={32} height={32} className="w-[60%]" />
      </button>
    </div>
  );
}
