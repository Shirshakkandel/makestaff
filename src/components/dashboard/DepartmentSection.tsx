import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Props = {
  assignDepartment: string;
  setAssignDepartment: (department: string) => void;
  departments: string[];
};

export default function DepartmentSection({
  assignDepartment,
  setAssignDepartment,
  departments,
}: Props) {
  return (
    <ScrollArea>
      <section className="mt-6 flex gap-4 container-left md:mt-7 md:gap-6 lg:mt-14 ">
        {departments.map((department, index) => {
          const active = assignDepartment === department;
          return (
            <Button
              onClick={() => setAssignDepartment(department)}
              key={'department'}
              variant={active ? 'default' : 'outline'}
              className={cn(
                'rounded-[30px] px-6  text-xs md:px-7 md:text-base lg:px-9 ',
                active ? 'font-[400] text-white ' : '',
              )}
            >
              {department}
            </Button>
          );
        })}
      </section>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
