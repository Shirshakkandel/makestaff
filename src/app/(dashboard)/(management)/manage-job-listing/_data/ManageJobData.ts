import { Department, Job, Plus } from '@/images/dashboard';

export const ManageJobListingData = [
  {
    icon: Plus,
    title: 'Invite',
    description: 'Member',
  },
  {
    icon: Job,
    title: '108',
    description: 'Job Post',
  },
  {
    icon: Department,
    title: '04',
    description: 'Departments',
  },
];

export type manageTobListingType = {
  id: string;
  name: string;
  department: string;
  date: string;
  jobUrl: string;
  qualified: number;
  limitCamp: number;
  totalCandidate: number;
  publish: boolean;
};

export const data: manageTobListingType[] = [
  {
    id: '1',
    name: 'Frond end developer',
    department: 'Coding',
    date: '25rd Jan 2023',
    jobUrl: 'https://Lenya.ai/',
    qualified: 40,
    limitCamp: 120,
    totalCandidate: 456,
    publish: true,
  },
  {
    id: '2',
    name: 'Sales Manager',
    department: 'Sales',
    date: '25rd Jan 2023',
    jobUrl: 'https://Lenya.ai/',
    qualified: 40,
    limitCamp: 120,
    totalCandidate: 456,
    publish: false,
  },
  {
    id: '3',
    name: 'Financial Forecast',
    department: 'Marketing',
    date: '25rd Jan 2023',
    jobUrl: 'https://Lenya.ai/',
    qualified: 40,
    limitCamp: 120,
    totalCandidate: 456,
    publish: true,
  },
  {
    id: '4',
    name: 'Project Proposal',
    department: 'Development',
    date: '25rd Jan 2023',
    jobUrl: 'https://Lenya.ai/',
    qualified: 40,
    limitCamp: 120,
    totalCandidate: 456,
    publish: false,
  },
  {
    id: '5',
    name: 'Business Overview',
    department: 'Marketing',
    date: '25rd Jan 2023',
    jobUrl: 'https://Lenya.ai/',
    qualified: 40,
    limitCamp: 120,
    totalCandidate: 456,
    publish: false,
  },
];
