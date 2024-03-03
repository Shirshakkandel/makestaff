import React from 'react';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';

export const companySizeData = [
  {
    title: 'Less than 10',
    value: '0-10',
  },
  {
    title: '11-50',
    value: '11-50',
  },
  {
    title: '51-200',
    value: '51-200',
  },
  {
    title: '201-300',
    value: '201-300',
  },
  {
    title: '301-1000',
    value: '301-1000',
  },
  {
    title: '1001-5000',
    value: '1001-5000',
  },
  {
    title: 'More than 5000',
    value: '5000-',
  },
] as const;

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
