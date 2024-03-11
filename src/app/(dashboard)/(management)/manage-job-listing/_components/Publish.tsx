import { Row } from '@tanstack/react-table';
import React, { useState } from 'react';
import { teamManagementType } from './TeamManagementData';
import { Switch } from '@/components/ui/switch';

type Props = {
  row: Row<teamManagementType>;
};

export default function Publish({ row }: Props) {
  const [published, setPublished] = useState(row.getValue('publish') as boolean);
  // let published = row.getValue('publish') as boolean;
  function togglePublish() {
    setPublished(prev => !prev);
  }
  console.log(published);
  return <Switch checked={published} onCheckedChange={togglePublish} />;
}
