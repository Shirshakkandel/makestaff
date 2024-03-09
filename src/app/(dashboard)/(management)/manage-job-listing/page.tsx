'use client';
import DashboardCards from '@/components/dashboard/DashboardCards';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import React, { useState } from 'react';
import { ManageJobListingData, data } from './_data/ManageJobData';
import DashboardTableWrapper from '@/components/dashboard/DashboardTableWrapper';
import UpgradeToPro from '@/components/dashboard/UpgradeToPro';
import DepartmentSection from '@/components/dashboard/DepartmentSection';
import { columns } from './columns';
import { DataTable } from './data-table';

type Props = {};

export default function ManageJobListing({}: Props) {
  const departments = ['All', 'Sales', 'Design', 'Marketing'];
  const [assignDepartment, setAssignDepartment] = useState<(typeof departments)[number]>(
    departments[0],
  );

  return (
    <main className="w-full">
      <DashboardHeader firstLine="Manage" secondLine="Job Listing" />
      <DashboardCards array={ManageJobListingData} />

      <DepartmentSection
        assignDepartment={assignDepartment}
        setAssignDepartment={value => setAssignDepartment(value)}
        departments={departments}
      />

      <DashboardTableWrapper>
        <>
          <DataTable columns={columns} data={data} />
          <UpgradeToPro />
        </>
      </DashboardTableWrapper>
    </main>
  );
}
