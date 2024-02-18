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
        // background: linear-gradient(115.7deg, #FCFCE9 0%, rgba(255, 243, 247, 0.470053) 53.34%, #F0FFFC 100.66%);

        className="bg-gradient-to-tr from-purple-50 to-purple-100"
        // style={{
        //   background: 'linear-gradient(180deg, rgba(239, 243, 243, 0) 31.73%, #F8F2FB 100%)',
        // }}
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
