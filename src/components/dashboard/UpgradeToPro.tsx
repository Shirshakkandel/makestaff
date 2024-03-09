import React from 'react';

type Props = {};

export default function UpgradeToPro({}: Props) {
  return (
    <button className="absolute right-0 top-[35%] aspect-[44/172] w-8 rounded-t-[6px] vertical-gradient flex-center lg:w-11">
      <p
        className="rotate-180   text-[14px] font-[400] lg:text-[16px]"
        style={{ writingMode: 'vertical-lr' }}
      >
        Upgrade to Pro
      </p>
    </button>
  );
}
