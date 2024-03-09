'use client';

import { ColumnDef, Row } from '@tanstack/react-table';

import { MoreHorizontal, MoreVertical, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus } from '@/images/dashboard';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';

type teamManagement = {
  id: string;
  name: string;
  role: string;
  date: string;
  assignDepartment: string[];
  jobPost: number;
};

//SECTION::columns
export const columns: ColumnDef<teamManagement>[] = [
  {
    accessorKey: 'roles',
    header: ({ column, header, table }) => <p className="w-[230px]">Roles</p>,
    cell: ({ row }) => {
      return (
        <div className="flex  shrink-0 items-start gap-5 md:gap-6 lg:gap-7">
          <div className="aspect-square w-10 shrink-0 bg-white flex-center">
            <p className="text-[18px] font-[500] text-black">{row.original.name.charAt(0)}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] font-[500] text-black ">{row.original.name}</p>
            <p className="text-[14px] text-tableText ">{row.original.role}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'assignDepartment',
    header: 'Assign Department',
    cell: ({ row }) => {
      const assignDepartment = row.getValue('assignDepartment') as string[];

      return (
        <div className="flex justify-start ">
          {assignDepartment.map((department, index) => {
            const firstDepartment = index === 0;
            return (
              <p className={cn('text-[14px]', !firstDepartment && 'ml-6 md:ml-7 lg:ml-9')}>
                {department}
              </p>
            );
          })}
          {/* <Image
            src={Plus.src}
            alt=""
            width={18}
            height={18}
            className="text-tableText ml-4 aspect-square w-[9px] md:ml-5 lg:ml-6 "
          /> */}
          {/* <img src={Plus.src} alt="table" className="text-tableText" /> */}
          <PlusIcon className="ml-4 w-3  cursor-pointer text-tableText md:ml-5 lg:ml-6" />
        </div>
      );
    },
  },
  {
    accessorKey: 'jobPost',
    header: 'Job Post',
    cell: ({ row }) => {
      return (
        <div className=" w-fit rounded-[6px] bg-white px-6 py-4 box-dropShadow flex-center">
          {row.getValue('jobPost')}
        </div>
      );
    },
  },

  //TODO:: onEdit and onDelete function
  {
    accessorKey: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const onDelete = useCallback(
        (teamId: any) => alert(`backend  delete call with delete id  ${row.original.id}`),
        [],
      );
      const onEdit = useCallback(
        (teamId: any) => alert(`backend update call with update id ${row.original.id}`),
        [],
      );

      return (
        <section className="flex gap-2">
          <Button className="" variant={'default'} onClick={() => onEdit(row.original)}>
            Edit
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copy payment ID
              </DropdownMenuItem> */}
              <DropdownMenuItem onClick={() => onEdit(row.original)}>Edit</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onDelete(row.original)}>Delete</DropdownMenuItem>
              {/* <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      );
    },
  },
];
