import {
  AvailableIcon,
  InterviewIcon,
  ShareIcon,
} from '../_images/LandingPage/LeynaLovedByCompanies';

interface LeynaThreeProcessProps {
  icon: any;
  titleSpan1: string;
  titleSpan2?: string;
  description: string;
}

export const LeynaThreeProcess: LeynaThreeProcessProps[] = [
  {
    icon: ShareIcon,
    titleSpan1: 'Save',
    titleSpan2: 'Time',
    description:
      'AI interviews speed up the hiring process. making it quicker for both recruiters and candidates',
  },
  {
    icon: AvailableIcon,
    titleSpan1: 'Always',
    titleSpan2: 'Available',
    description:
      'AI Can conduct interviews. 24/7. providing flexibility for candidates and speeding up the hiring timeline',
  },
  {
    icon: InterviewIcon,
    titleSpan1: 'Interviews',
    description:
      'AI can handle many interviews at once. making it easier to manage a large number of candidates',
  },
] as const;
