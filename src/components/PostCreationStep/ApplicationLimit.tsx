import React from 'react';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';
import { Switch } from '../ui/switch';

type Props = {};

export default function ApplicationLimit({}: Props) {
  const { postValue, updatePostValue } = usePostCreationContext();

  const toggleApplicationLimitCap = (value: boolean) => {
    updatePostValue({ ...postValue, isApplicationLimitCap: value });
  };
  const togglePostEndDate = (value: boolean) => {
    updatePostValue({ ...postValue, isPostEndDate: value });
  };

  return (
    <PostCreationStepsWrapper className="lg:mt-[99px] 3xl:mt-[12%]" title="Just few step...">
      <section className="mt-12 space-y-11 lg:mt-16">
        {/* Application Limit Cap */}
        <SwitchComponents
          heading="Applicant Limit Cap"
          paragraph="How many applicant can apply through this link?"
          value={postValue.isApplicationLimitCap}
          onCheckedChange={toggleApplicationLimitCap}
        />

        {/* Post end Date */}
        <SwitchComponents
          heading="Post End Date"
          paragraph="How many applicant can apply through this link?"
          value={postValue.isPostEndDate}
          onCheckedChange={togglePostEndDate}
        />
      </section>
    </PostCreationStepsWrapper>
  );
}

const SwitchComponents = ({
  heading,
  paragraph,
  value,
  onCheckedChange,
}: {
  heading: string;
  paragraph: string;
  value: boolean;
  onCheckedChange: (value: boolean) => void;
}) => {
  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-base font-medium leading-none md:text-xl 2xl:text-[clamp(20px,1vw+0.2rem,40px)] 2xl:leading-[110%]">
        {heading}
      </h2>

      <p className="3xl: text-xs leading-5 md:text-base 2xl:text-[clamp(1rem,1vw+0.1rem,2rem)] 2xl:leading-[120%]">
        {paragraph}
      </p>
      <Switch checked={value} onCheckedChange={onCheckedChange} />
    </div>
  );
};
