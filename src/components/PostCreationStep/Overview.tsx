'use client';
import React, { ReactElement } from 'react';
import PostCreationStepsWrapper from './PostCreationStepsWrapper';
import { SwitchComponents } from './ApplicationLimit';
import { usePostCreationContext } from '@/context/PostCreationContextProvider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DownloadCloud, PanelsTopLeft, Users } from 'lucide-react';
import { DownIcon } from '@/images/employerPage/PostCreationSteps';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Email } from '@/images/auth';

type Props = {};

let daysArray = Array.from({ length: 31 }, (_, index) => {
  if (index < 9) {
    return `0${index + 1}`;
  } else {
    return `${index + 1}`;
  }
});

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentYear = new Date().getFullYear();
//create a array from currentYear to next 5 years
let yearsArray = Array.from({ length: 6 }, (_, index) => {
  return `${currentYear + index}`;
});
// console.log(yearsArray);

export default function Overview({}: Props) {
  //SECTION::Context value import
  const { postValue, toggleApplicationLimitCap, togglePostEndDate, updatePostValue } =
    usePostCreationContext();

  //SECTION::UI PART
  return (
    <PostCreationStepsWrapper title="Just last step..." className="lg:mt-[99px] 3xl:mt-[12%]">
      <section className="mt-12 space-y-11 lg:mt-16">
        {/*SECTION:: Application Limit Cap */}
        <section className="space-y-5">
          <SwitchComponents
            heading="Applicant Limit Cap"
            paragraph="How many applicant can apply through this link?"
            value={postValue.isApplicationLimitCap}
            onCheckedChange={toggleApplicationLimitCap}
          />
          <AnimationPresenceWrapper isVisible={postValue.isApplicationLimitCap}>
            <div className="relative h-12 w-full flex-center">
              <div className="absolute left-3.5 z-10 h-7 w-7 rounded-full bg-black flex-center">
                <Users className="w-1/2 text-white" />
                {/* <img src={Email.src} alt="" /> */}
              </div>
              <input
                value={postValue.applicationLimitCapNumber}
                className="absolute inset-0 z-0 h-full w-full rounded-[6px] border-[1px] border-[#EDEDED] pl-14 text-base placeholder-[10px]"
                placeholder="Applicant Limit"
                onChange={e => updatePostValue({ applicationLimitCapNumber: e.target.value })}
              />
            </div>
          </AnimationPresenceWrapper>
        </section>

        {/*SECTION:: Post end Date */}
        <section className="space-y-5">
          <SwitchComponents
            heading="Post End Date"
            paragraph="How many applicant can apply through this link?"
            value={postValue.isPostEndDate}
            onCheckedChange={togglePostEndDate}
          />
          {/* SECTION Date selection(day,month and year) */}
          <AnimationPresenceWrapper isVisible={postValue.isPostEndDate}>
            <section className={cn('flex justify-start gap-10 pb-10')}>
              <DateSelect
                data={daysArray}
                type="Days"
                onValueChange={value => updatePostValue({ days: value })}
                placeholder={(new Date().getUTCDay() + 1).toString()}
                defaultValue={postValue.days}
              />
              <DateSelect
                data={months}
                type="Months"
                onValueChange={value => updatePostValue({ months: value })}
                placeholder={months[new Date().getMonth()]}
                defaultValue={postValue.months}
              />
              <DateSelect
                data={yearsArray}
                type="Years"
                onValueChange={value => updatePostValue({ years: value })}
                placeholder={new Date().getFullYear().toString()}
                defaultValue={postValue.years}
              />
            </section>
          </AnimationPresenceWrapper>
        </section>
      </section>
    </PostCreationStepsWrapper>
  );
}

//SECTION::DateSelect
export const DateSelect = ({
  type,
  onValueChange,
  data,
  placeholder,
  defaultValue,
}: {
  type: string;
  onValueChange: (value: string) => void;
  data: string[];
  placeholder: string;
  defaultValue: string | undefined;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[14px] font-[400] leading-[20px] text-[#BEBEBE]">{type}</p>
      <Select required defaultValue={defaultValue} onValueChange={value => onValueChange(value)}>
        <SelectTrigger
          className=" space-x-2 font-[500]"
          icon={<img src={DownIcon.src} alt="download" className="w-3" />}
          // icon={<DownloadCloud width={10} />}
        >
          <SelectValue className="" placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="h-60">
          {data.map((value, index) => (
            <SelectItem value={value} key={index}>
              <span className="flex items-center gap-2 text-base 3xl:text-[clamp(1rem,1vw+0.2rem,1.5rem)]">
                {value}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

//SECTION:: AnimationPresenceWrapper
export const AnimationPresenceWrapper = ({
  children,
  isVisible,
}: {
  children: ReactElement;
  isVisible: boolean;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
