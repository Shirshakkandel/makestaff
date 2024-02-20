import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
  iconClassName?: string;
  lineClassName?: string;
};

export default function Divider({
  containerClassName,
  iconClassName,
  lineClassName,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={cn('mt-5 flex w-full items-center gap-1 md:mt-16  md:gap-2', containerClassName)}
    >
      <div className={cn('w-1/2 border border-[#4C4C4C]', lineClassName)}></div>
      <Plus className={cn('h-4 w-4 text-[#4C4C4C] md:h-[35px] md:w-[35px]', iconClassName)} />
      <div className={cn('w-1/2 border border-[#4C4C4C]', lineClassName)}></div>
    </div>
  );
}
