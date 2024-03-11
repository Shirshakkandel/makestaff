'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreVertical, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { manageTobListingType } from './_data/ManageJobData';
import Link from 'next/link';
import Image from 'next/image';
import { CopySvg, HandEmoji, SalesJob } from '@/images/employerPage/PostCreationSteps';
import { useToast } from '@/components/ui/use-toast';
import {
  BusinessOverview,
  Candidate1,
  Candidate2,
  Candidate3,
  FinancialForecast,
  ProjectProposal,
} from '@/images/dashboard';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

//SECTION::columns
export const columns: ColumnDef<manageTobListingType>[] = [
  //COMPLETEF::1)Roles
  {
    accessorKey: 'roles',
    header: ({ column, header, table }) => <p className="min-w-[240px]  ">Roles</p>,
    cell: ({ row }) => {
      //different image src according to row.original.department using Switch
      // let image = HandEmoji;

      const jobTitle = row.original.name as string;
      // const jobDepartment = row.original.department as string;
      console.log({ jobTitle });
      let image;
      switch (jobTitle) {
        case 'Frond end developer':
          image = HandEmoji;
          break;
        case 'Sales Manager':
          image = SalesJob;
          break;
        case 'Financial Forecast':
          image = FinancialForecast;
          break;
        case 'Project Proposal':
          image = ProjectProposal;
          break;
        case 'Business Overview':
          image = BusinessOverview;
          break;
        default:
          image = HandEmoji;
          break;
      }

      return (
        <div className="flex  shrink-0 items-start gap-5 md:gap-6 lg:gap-7">
          <div className="aspect-square w-10 shrink-0 bg-white flex-center">
            {/* <p className="text-[18px] font-[500] text-black">{row.original.name.charAt(0)}</p> */}
            <Image src={image.src} width={40} height={40} alt={jobTitle} className="w-1/2" />
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] font-[500] text-black ">{row.original.name}</p>
            <p className="text-[14px] text-tableText ">{row.original.department}</p>
          </div>
        </div>
      );
    },
  },
  //COMPLETED::2)Date
  {
    accessorKey: 'date',
    header: 'Date',
  },

  //COMPLETED::3)Job URL
  {
    accessorKey: 'jobUrl',
    header: 'Job URL',
    cell: ({ row }) => {
      const url = row.getValue('jobUrl') as string;
      // const { toast } = useToast();
      const copyLink = () => {
        navigator.clipboard.writeText(url);
        // toast({
        //   title: 'Job link copied to clipboard',
        //   description: 'You can paste it in the search bar',
        //   variant: 'default',
        // });
        alert('Job link copied to clipboard');
      };

      return (
        <div className="flex items-center gap-2">
          <Link href={url} target="_blank" className="text-[#4370E3AD]">
            {row.getValue('jobUrl')}
          </Link>

          <Image
            onClick={copyLink}
            alt={'Copy'}
            src={CopySvg.src}
            width={50}
            height={50}
            className="h-7 w-5 cursor-pointer"
          />
        </div>
      );
    },
  },

  //COMPLETED::4)Qualified
  {
    accessorKey: 'qualified',
    header: 'Qualified',
    cell: ({ row }) => {
      return (
        <div className=" ml-2 w-fit rounded-[6px] bg-white px-8 py-2 box-dropShadow flex-center">
          {row.getValue('qualified')}
        </div>
      );
    },
  },
  //COMPLETED::5)Limit Camp
  {
    accessorKey: 'limitCamp',
    header: 'Limit Camp',
    cell: ({ row }) => {
      return (
        <div className=" w-fit rounded-[6px] bg-white px-8 py-2 box-dropShadow flex-center">
          {row.getValue('limitCamp')}
        </div>
      );
    },
  },
  //COMPLETED::6)TotalCandidate
  {
    accessorKey: 'totalCandidate',
    header: 'Total Candidates',
    cell: ({ row }) => {
      return (
        <div className="flex min-w-[150px] items-center gap-[5px]">
          <div className="flex ">
            {[Candidate1, Candidate2, Candidate3].map((candidate, index) => {
              const first = index !== 0;
              return (
                <Image
                  key={candidate.src}
                  alt="candidate1"
                  src={candidate.src}
                  width={68}
                  height={68}
                  className={cn(`aspect-square w-9 rounded-full`, first && '-ml-4')}
                />
              );
            })}
          </div>
          <p className="text-[14px] text-black ">
            <span>+</span>
            <span>{row.getValue('totalCandidate')}</span>
          </p>
        </div>
      );
    },
  },

  //COMPLETED::7)Publish
  {
    accessorKey: 'publish',
    header: 'Publish',
    cell: ({ row }) => {
      const [published, setPublished] = useState(row.getValue('publish') as boolean);
      // let published = row.getValue('publish') as boolean;
      function togglePublish() {
        setPublished(prev => !prev);
      }
      console.log(published);
      return <Switch checked={published} onCheckedChange={togglePublish} />;
    },
  },
  //COMPLETED:: 8)Invite
  {
    accessorKey: 'invite',
    header: 'Invite',
    cell: ({ row }) => {
      const onDelete = useCallback(
        (jobId: any) => alert(`backend  delete call with delete job id  ${row.original.id}`),
        [],
      );

      const onEdit = useCallback(
        (jobId: any) => alert(`backend update call with update job id ${row.original.id}`),
        [],
      );

      return (
        <section className="flex gap-2">
          <Button className="" variant={'default'}>
            Invite
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(row.original)}>Edit</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onDelete(row.original)}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      );
    },
  },
];
