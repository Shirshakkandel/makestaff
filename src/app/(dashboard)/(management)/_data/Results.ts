import { Amelia, Emma, NishaPatel, Shivani } from '@/images/dashboard/candidate';
import { StaticImageData } from 'next/image';

// Define an interface for the candidate data
interface Candidate {
  firstName: string;
  lastName: string;
  image?: StaticImageData;
  date: string;
  jobTitle: string;
  rating: string;
  active?: boolean;
}

export const results: Candidate[] = [
  {
    firstName: 'Nisha',
    lastName: 'Patel',
    image: NishaPatel,
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
  },
  {
    firstName: 'Amila',
    lastName: 'Kimani',
    image: Amelia,
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
    active: true,
  },
  {
    firstName: 'Shivani',
    lastName: 'Sharma',
    image: Shivani,
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
  },
  {
    firstName: 'Emma',
    lastName: 'Smith',
    image: Emma,
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
  },
  {
    firstName: 'Emma',
    lastName: 'Smith',
    image: Emma,
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
  },
  {
    firstName: 'Tanveer',
    lastName: 'Sinha',
    date: '10th April',
    jobTitle: 'Php Developer',
    rating: '08',
  },
];
