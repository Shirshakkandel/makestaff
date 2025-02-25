import { Row } from '@tanstack/react-table';
import React, { useState } from 'react';
import { teamManagementType } from './TeamManagementData';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
} from '@/components/ui/sheet';

import { EmailSvg } from '@/images/employerPage/PostCreationSteps';
import { CheckIcon, PlusIcon } from 'lucide-react';
import {
  Admin,
  Check,
  HelpSupport,
  HumanResources,
  Maintainer,
  Owner,
  Sales,
  Settings,
} from '@/images/dashboard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {
  row: Row<teamManagementType>;
};

export default function AssignDepartment({ row }: Props) {
  const assignDepartment = row.getValue('assignDepartment') as string[];
  console.log({ assignDepartment });
  const [selectedRole, setSelectedRole] = useState('Admin');

  //SECTION::UI PART
  return (
    <div className="flex justify-start ">
      {assignDepartment.map((department, index) => {
        const firstDepartment = index === 0;
        return (
          <p key={index} className={cn('text-[14px]', !firstDepartment && 'ml-6 md:ml-7 lg:ml-9')}>
            {department}
          </p>
        );
      })}
      {/* SECTION::Sheet Integration  */}
      <Sheet>
        <SheetTrigger>
          <PlusIcon className="ml-4 w-3  cursor-pointer text-tableText md:ml-5 lg:ml-6" />
        </SheetTrigger>

        <SheetContent className="w-[80%] overflow-y-scroll ">
          <SheetHeader>
            <SheetTitle className="">Assign Roles</SheetTitle>
            <div className="relative h-14 w-full flex-center">
              <div className="absolute left-3.5 z-10 h-10 w-10 rounded-[3px] bg-[#F4F4F4] flex-center">
                <img src={EmailSvg.src} alt="" />
              </div>
              <input className="absolute inset-0 z-0 h-full w-full rounded-[6px] border-[1px] border-[#EDEDED] pl-14 text-base placeholder-[10px]" />
            </div>
          </SheetHeader>

          {/*COMMENT:: 3.1)Roles */}
          <div className="mt-10">
            <p className="text-[20px] ">Roles</p>
            <p>Assign the roles</p>
            <div className="mt-7 flex flex-col gap-7 md:gap-10">
              {[
                { role: 'Owner', image: Owner },
                { role: 'Admin', image: Admin },
                { role: 'Maintainer', image: Maintainer },
              ].map(({ image, role }) => {
                const selected = role === selectedRole;
                return (
                  <div
                    key={role}
                    className="flex cursor-pointer flex-row items-center justify-between"
                    onClick={() => setSelectedRole(role)}
                  >
                    {/* Left image and Owner  */}
                    <div className="flex items-center gap-7">
                      <div className="aspect-square w-10 bg-[#F4F4F4] flex-center">
                        <Image
                          alt={role}
                          src={image.src}
                          width={40}
                          height={40}
                          className="aspect-square w-[60%]"
                        />
                      </div>

                      <div className="flex flex-col ">
                        <p className="text-[18px] font-[500]">{role}</p>
                        <p className="text-[14px] font-[400] text-[#706B6B]">Assign the roles</p>
                      </div>
                    </div>

                    {/* Check Box */}
                    <div className="aspect-square w-5 items-start border-[2.8px] border-black flex-center">
                      {selected && (
                        <Image
                          alt={role}
                          className="w-[80%]"
                          src={Check.src}
                          width={20}
                          height={20}
                        />
                      )}

                      {/* <Check className="w-3 font-bold" /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/*COMMENT:: 3.2)Department */}
          <div className="mt-10">
            <p className="text-[20px] ">Departments</p>
            <p>Assign the Departments</p>
            <div className="mt-7 flex flex-col gap-7 md:gap-10">
              {[
                { role: 'Sales', image: Sales },
                { role: 'Human Resource', image: HumanResources },
                { role: 'Help & Support', image: HelpSupport },
                { role: 'Setting', image: Settings },
              ].map(({ image, role }) => {
                const selected = role === selectedRole;
                return (
                  <div
                    key={role}
                    className="flex cursor-pointer flex-row items-center justify-between"
                    onClick={() => setSelectedRole(role)}
                  >
                    {/* Left image and Owner  */}
                    <div className="flex items-center gap-7">
                      <div className="aspect-square w-10 bg-[#F4F4F4] flex-center">
                        <Image
                          alt={role}
                          src={image.src}
                          width={40}
                          height={40}
                          className="aspect-square w-[60%]"
                        />
                      </div>

                      <div className="flex flex-col ">
                        <p className="text-[18px] font-[500]">{role}</p>
                        <p className="text-[14px] font-[400] text-[#706B6B]">Assign the roles</p>
                      </div>
                    </div>

                    {/* Check Box */}

                    {selected && (
                      <div className="relative aspect-square w-6 rounded-full bg-black flex-center">
                        {/* <Image
                          src={Check.src}
                          alt="check"
                          width={48}
                          height={48}
                          className="absolute w-[50%]"
                        /> */}
                        <CheckIcon className="absolute w-1/2" color="white" fontWeight={800} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* COMMENT:: 3.3)Assign  */}
          <Button className="mt-6 min-h-12 w-full text-[14px]">Assign</Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
