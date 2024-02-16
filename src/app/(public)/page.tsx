import React from 'react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import BreakFromInterview from './_components/BreakFromInterview';
import CreateShareReviewTimeline from './_components/CreateShareReviewTimeline';
import EmpoweringWorkForce from './_components/EmpoweringWorkForce';
import HoursSave from './_components/HoursSave';
import PlansPricing from './_components/PlansPricing';
import LeynaLovedByCompanies from './_components/LeynaLovedByCompanies';
import LeynaExperience from './_components/LeynaExperience';
import HireTalent from './_components/HireTalent';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <div
        className="bg-gradient-to-tr from-white to-purple-50"
        // className="bg-gradient-to-tr from-[#F9E7D6] "
        style={{ backgroundImage: 'linear-gradient(top right , white, #F3FEF9  #FFE0FA)' }}
      >
        <Navbar />
        <Hero />
      </div>

      <BreakFromInterview />
      <CreateShareReviewTimeline />
      <EmpoweringWorkForce />
      <HoursSave />
      <PlansPricing />
      <LeynaLovedByCompanies />
      <LeynaExperience />
      <HireTalent />
    </main>
  );
}
