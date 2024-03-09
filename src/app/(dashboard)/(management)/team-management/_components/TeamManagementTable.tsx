'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DataTable } from './data-table';
import { columns } from './columns';
import UpgradeToPro from '@/components/dashboard/UpgradeToPro';
import { tableDataTeamManagement } from './TeamManagementData';

type Props = {};

export const departments = ['All', 'Sales', 'Design', 'Marketing'] as const;

export default function TeamManagementTable({}: Props) {
  const [assignDepartment, setAssignDepartment] = useState<(typeof departments)[number]>(
    departments[0],
  );

  return (
    <div>
      {/*SECTION:: 1)Top (Department Section selection) */}
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

      {/* 2)Table Section */}
      {/* 1)columns.tsx, data-table.tsx and page.tsx. */}
      <div className="relative inset-0 mt-9 w-full md:mt-10 lg:mt-14">
        <div className="container-left lg:container-right">
          <DataTable columns={columns} data={tableDataTeamManagement} />
          <UpgradeToPro />
        </div>
      </div>
    </div>
  );
}
