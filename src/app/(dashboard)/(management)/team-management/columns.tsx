'use client';

import { ColumnDef, Row } from '@tanstack/react-table';

import { Email } from '@/images/auth';
import AssignDepartment from './_components/AssignDepartment';
import Actions from './_components/Actions';

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
  //1)Roles
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
  //2)Date
  {
    accessorKey: 'date',
    header: 'Date',
  },
  //3)Assign Department
  {
    accessorKey: 'assignDepartment',
    header: 'Assign Department',
    cell: ({ row }) => {
      return <AssignDepartment row={row} />;
    },
  },
  //4)Job Post
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
  //5)Action
  {
    accessorKey: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
