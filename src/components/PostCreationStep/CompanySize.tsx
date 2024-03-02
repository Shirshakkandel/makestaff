import React from 'react';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { companySizeData, usePostCreationContext } from '@/context/PostCreationContextProvider';

type Props = {};

export default function CompanySize({}: Props) {
  const { updatePostValue, postValue } = usePostCreationContext();

  return (
    <PostCreationStepsWrapper
      title="What’s your company size"
      description="How large is your company workforce?"
    >
      <Select
        value={postValue.companySize}
        required
        onValueChange={value => updatePostValue({ companySize: value })}
        // defaultValue={postValue.jobTitle}
      >
        <SelectTrigger className="h-12 w-full   md:w-[90%] lg:min-h-16 2xl:h-[5vh] ">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {companySizeData.map(({ value, title }, index) => (
            <SelectItem value={value} key={index}>
              <span className="flex items-center gap-2 text-base 3xl:text-[clamp(1rem,1vw+0.2rem,1.5rem)]">
                {title}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </PostCreationStepsWrapper>
  );
}
