import { Row } from '@tanstack/react-table';
import React, { useCallback } from 'react';
import { manageTobListingType } from '../_data/ManageJobData';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';

type Props = {
  row: Row<manageTobListingType>;
};

export default function Invite({ row }: Props) {
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
}
