'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useEmployeeLogic from './useEmployeeLogic';
import { useState } from 'react';
import Image from 'next/image';
import { Question } from '@/images/dashboard/extraPages';

type props = {
  isModelOpen: boolean;
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isInterviewCancel: boolean;
  setIsInterviewCancel: React.Dispatch<React.SetStateAction<boolean>>;
};

//SECTION::InterviewCancelModel
//3:20-4:14 => 28-80
export default function InterviewCancelModel({
  isInterviewCancel,
  isModelOpen,
  setIsInterviewCancel,
  setIsModelOpen,
}: props) {
  // const { isModelOpen, setIsModelOpen } = useEmployeeLogic();

  return (
    <Dialog open={isModelOpen} onOpenChange={() => setIsModelOpen(prev => !prev)}>
      <DialogContent className="max-w-[90%] px-10 sm:max-w-[425px]">
        {/*COMMENT:: 1)Question Image */}
        <section className="mx-auto justify-center mt-section  ">
          <Image
            alt="Question"
            src={Question.src}
            width={92}
            height={92}
            className="aspect-square w-7 md:w-8 lg:w-12"
          />
        </section>

        {/*COMMENT:: 2)Are you sure */}
        <section className="text-center mt-section">
          <p className="text-base font-medium md:text-xl lg:text-2xl">Are you Sure?</p>
          <p className="text-xs font-normal md:text-base lg:text-xl">
            Are you sure you want to cancel the interview?
          </p>
        </section>

        {/*COMMENT:: 3)Call to actions */}
        <section className="flex gap-3 mt-element-big ">
          <Button
            onClick={() => setIsModelOpen(prev => !prev)}
            variant={'outline'}
            className="w-full"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsInterviewCancel(true);
              setIsModelOpen(false);
            }}
            className="w-full"
          >
            Yes, Cancel It
          </Button>
        </section>
      </DialogContent>
    </Dialog>
  );
}
