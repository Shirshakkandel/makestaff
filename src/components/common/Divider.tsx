import { Plus } from 'lucide-react';
import React from 'react';

type Props = {};

export default function Divider({}: Props) {
  return (
    <div className="mt-5 flex w-full items-center gap-1 md:mt-16  md:gap-2">
      <div className="w-1/2 border border-[#4C4C4C]"></div>
      <Plus className="h-4 w-4 text-[#4C4C4C] md:h-[35px] md:w-[35px]" />
      <div className="w-1/2 border border-[#4C4C4C]"></div>
    </div>
  );
}
