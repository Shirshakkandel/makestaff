import { Leyna } from '@/app/(public)/_images/LandingPage';
import ClosedComponent from '@/components/PostCreationStep/ClosedComponent';
import { Plus } from '@/images/dashboard';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function BottomOrRightComponent({}: Props) {
  return (
    <section className="container-section-right">
      {/* 1)Close */}
      <ClosedComponent />

      {/*COMMENT:: 2)Image with Subheading */}
      {/* 4:37-4:47 */}
      <section className="mt-section">
        <div className="flex aspect-square w-12 items-end justify-center rounded-[6px] body-gradient ">
          <Image
            src={Leyna.src}
            width={400}
            height={400}
            alt="Leyna"
            className="aspect-[30/44] w-[30px]"
          />
        </div>

        <p className="subHeading mt-element">
          Don’t worry about the questions <br /> I’ll ask the best ones using my intelligence
        </p>
      </section>

      {/* COMMENT::3)Add Question */}
      {/* 4:50-5:05 */}
      <section className="mt-element-big mb-section">
        <div className="flex items-center gap-2 md:gap-3">
          <button className="aspect-square w-10 rounded-sm bg-white flex-center">
            <Image src={Plus.src} width={40} height={40} alt="Plus" className="w-[40%]" />
          </button>

          <p className="text-base font-normal">
            Add Specific Question <span className="text-xs text-[#A7A7A7]">(Optional)</span>
          </p>
        </div>

        <input
          type="text"
          placeholder="Test here..."
          className="mt-element-big aspect-[312/56] w-full rounded-[6px] pl-3 input-dropShadow md:aspect-[646/66] md:pl-4"
        />
      </section>
    </section>
  );
}
