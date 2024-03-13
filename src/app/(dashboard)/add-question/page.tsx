import PageLayout from '@/components/common/PageLayout';
import React from 'react';
import TopOrLeftComponent from './TopOrLeftComponent';
import BottomOrRightComponent from './BottomOrRightComponent';

type Props = {};

export default function AddQuestion({}: Props) {
  return (
    <PageLayout
      topOrLeftComponents={<TopOrLeftComponent />}
      bottomOrRightComponents={<BottomOrRightComponent />}
    />
  );
}
