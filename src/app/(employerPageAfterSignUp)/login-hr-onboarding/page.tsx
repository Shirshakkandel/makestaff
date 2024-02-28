import React from 'react';

type Props = {};

export default function LoginHrOnboarding({}: Props) {
  return (
    <main className="flex flex-col container-custom lg:flex-row">
      {/* TODO::1)Top Section or Left Section */}
      <section className="relative w-full lg:w-[50%]">
        <h2>HR Onboarding</h2>
        <p>Connect with your Employee</p>
      </section>

      {/*  2)Bottom Section or Right Section*/}
      <section className="w-full lg:w-[50%]"></section>
    </main>
  );
}
