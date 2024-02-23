import Image from 'next/image';
import React from 'react';
import { PeopleCollectionLanding } from '../_images/LandingPage';

type Props = {};

export default function HireTalent({}: Props) {
  return (
    <section className=" relative mx-auto aspect-[360/216]  w-full lg:aspect-[1440/865]">
      <Image alt="" src={PeopleCollectionLanding.src} fill />
      <div className="absolute left-[50%] top-[50%]">
        <p className="translate-x-[-50%] text-[23px] font-[500] leading-[48px] text-[#E7E7E7] lg:text-[56px]  lg:leading-[48px]">
          Hire Talent Globally
        </p>
      </div>
    </section>
  );
}
