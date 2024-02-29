import React from 'react';

import LoginHrOnBoardingTopLeft from './LoginHrOnBoardingTopLeft';
import BottomRightLoginHr from './BottomRightLoginHr';
type Props = {};

export default function LoginHrOnboarding({}: Props) {
  return (
    <main className="flex min-h-[100vh] flex-col   lg:flex-row">
      <LoginHrOnBoardingTopLeft />
      {/*TODO::  2)Bottom Section or Right Section*/}
      <section className="w-full lg:w-[50%]">
        <BottomRightLoginHr />
      </section>
    </main>
  );
}
