import React, { useCallback } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Row } from '@tanstack/react-table';
import { teamManagementType } from './TeamManagementData';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';

type Props = {
  row: Row<teamManagementType>;
};

export default function Actions({ row }: Props) {
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
}
