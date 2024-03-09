import { Plus, TeamUser, Department } from '@/images/dashboard';

export const TeamManagementData = [
  {
    icon: Plus,
    title: 'Invite',
    description: 'Member',
  },
  {
    icon: TeamUser,
    title: '06',
    description: 'Team Member',
  },
  {
    icon: Department,
    title: '04',
    description: 'Departments',
  },
];

export type teamManagementType = {
  id: string;
  name: string;
  role: string;
  date: string;
  assignDepartment: string[];
  jobPost: number;
};

export const tableDataTeamManagement: teamManagementType[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Frontend developer',
    date: '25rd Jan 2023',
    assignDepartment: ['Sales', 'Design', 'Marketing'],
    jobPost: 123,
  },
  {
    id: '2',
    name: 'Mark Luis',
    role: 'Frontend developer',
    date: '25rd Jan 2023',
    assignDepartment: ['Sales', 'Design', 'Marketing'],
    jobPost: 123,
  },
  {
    id: '3',
    name: 'Sara Jain',
    role: 'Frontend developer',
    date: '25rd Jan 2023',
    assignDepartment: ['Sales', 'Design', 'Marketing'],
    jobPost: 123,
  },
  {
    id: '4',
    name: 'David Warn',
    role: 'Frontend developer',
    date: '25rd Jan 2023',
    assignDepartment: ['Sales', 'Design', 'Marketing'],
    jobPost: 123,
  },
  {
    id: '5',
    name: 'Sarah Johnson',
    role: 'Frontend developer',
    date: '25rd Jan 2023',
    assignDepartment: ['Sales', 'Design', 'Marketing'],
    jobPost: 123,
  },
];
