'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { usePathname } from 'next/navigation';
import { StaticImageData } from 'next/image';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: StaticImageData;
    variant: 'default' | 'ghost';
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = usePathname();
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-4 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => {
            const isSixthElement = index === 5;
            return (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative h-10 w-10 rounded-full bg-[#F7F7F7] shadow-sm flex-center',
                      isSixthElement && 'mt-40',
                    )}
                  >
                    {/* <link.icon className="h-4 w-4" /> */}
                    <img src={link.icon.src} alt="" className="aspect-square w-[50%]" />
                    <span className="sr-only">{link.title}</span>
                    {link.label && (
                      <div className="button-gradient absolute -right-[20%] -top-[20%] aspect-square w-6 rounded-full flex-center">
                        <p className="text-xxs">{link.label}</p>
                      </div>
                    )}
                  </Link>
                </TooltipTrigger>

                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {/* {link.label && (
                    <span className="ml-auto text-muted-foreground">{link.label}</span>
                  )} */}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
