import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

export default function DashboardTableWrapper({ children }: Props) {
  return (
    <div className="relative inset-0 mt-7 w-full md:mt-9 lg:mt-12">
      <div className="container-left lg:container-right">{children}</div>
    </div>
  );
}
