type PricingPlanProps = {
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  //   description: string;
  features: string[];
  actionLabel: string;
  background: string;
  buttonBackground: string;
  //   popular?: boolean;
  savingPercentage: number;
};

export const PricingPlans: PricingPlanProps[] = [
  {
    title: 'STARTER',
    monthlyPrice: 99,
    yearlyPrice: 699,
    features: [
      'Conduct up to 5 job interviews per month',
      'Automated job interview questions',
      'AI-powered interviews',
      'Candidate rating by AI',
      'Results reporting to the dashboard',
      'Informed HR decision-making',
    ],
    actionLabel: 'Sign Up for Free',
    background: 'white',
    savingPercentage: 20,
    buttonBackground: 'linear-gradient(144.59deg, #EDC4FF -2.42%, #C1F7FF 100.74%)',
  },
  {
    title: 'PROFESSIONAL',
    monthlyPrice: 129,
    yearlyPrice: 1200,
    features: [
      'Conduct up to 10 job interviews per month',
      'Automated job interview questions',
      'AI-powered interviews',
      'Candidate rating by AI',
      'Results customer support',
      'Priority Customer Support',
      'Advance analytics and insights',
      'Custom branding options',
    ],
    actionLabel: 'Get Started',
    //background: linear-gradient(144.59deg, #EDC4FF -2.42%, #C1F7FF 100.74%);
    background: 'linear-gradient(144.59deg, #EDC4FF -2.42%, #C1F7FF 100.74%)', // This is a sample color picked from the image, you might want to get the exact color code
    savingPercentage: 22,
    buttonBackground: 'white',
  },
  {
    title: 'ENTERPRISE',
    monthlyPrice: 159,
    yearlyPrice: 899,
    features: [
      'Unlimited Job Interviews',
      'Automated Job Interview Questions',
      'AI-Powered Interviews',
      'Candidate Rating by AI',
      'Results Reporting to The Dashboard',
      'Priority Customer Support',
      'Advanced Analytics and Insights',
      'Custom Branding Options',
      'Integration Capabilities',
      'Dedicated Account Manager',
      'Enhanced Security Features',
    ],
    actionLabel: 'Contact for Pricing',
    //background: linear-gradient(144.59deg, #EDC4FF -2.42%, #C1F7FF 100.74%);
    background: 'linear-gradient(144.59deg, #EDC4FF -2.42%, #C1F7FF 100.74%)',
    savingPercentage: 50,
    buttonBackground: 'white',
  },
] as const;
