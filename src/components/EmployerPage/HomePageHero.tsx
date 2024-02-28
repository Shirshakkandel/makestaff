import React from 'react';

type Props = {};

export default function HomePageHero({}: Props) {
  return (
    <div className="py-11 container-custom lg:pt-28">
      <section className="flex flex-col lg:flex-row">
        {/* TODO::1)Top or Left section */}
        <div className="w-full bg-green-500 lg:max-w-[550px]">Left Section or</div>
        {/* TODO::2)Bottom or Right section */}
        <div className="w-full bg-red-600 lg:max-w-[700px] "></div>
      </section>
    </div>
  );
}
