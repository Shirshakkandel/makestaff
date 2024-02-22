import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  containerClassName?: string;
  iconClassName?: string;
  lineClassName?: string;
};

/**
 * Divider Component.
 * This component renders a divider with an icon in the middle.
 * @param {object} props - The props for the Divider component.
 * @param {string} [props.containerClassName] - Additional CSS classes for the container div.
 * @param {string} [props.iconClassName] - Additional CSS classes for the icon.
 * @param {string} [props.lineClassName] - Additional CSS classes for the lines.
 * @returns {JSX.Element} React component.
 * @example
 * <Divider
 *    containerClassName="non-mobile max-w-[322px] h-4 mx-auto lg:mt-4"
 *    iconClassName="text-[#D4D4D4]"
 *    lineClassName="border-[#D4D4D4]"
 * />
 */

export default function Divider({
  containerClassName,
  iconClassName,
  lineClassName,
  ...props
}: Props) {
  return (
    <div {...props} className={cn('flex w-full items-center gap-1   md:gap-2', containerClassName)}>
      <div className={cn('w-1/2 border border-[#4C4C4C]', lineClassName)}></div>
      <Plus className={cn('h-4 w-4 text-[#4C4C4C] md:h-[35px] md:w-[35px]', iconClassName)} />
      <div className={cn('w-1/2 border border-[#4C4C4C]', lineClassName)}></div>
    </div>
  );
}
