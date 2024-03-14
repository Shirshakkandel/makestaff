import { Leyna } from '@/app/(public)/_images/LandingPage';
import ClosedComponent from '@/components/PostCreationStep/ClosedComponent';
import { BoyWithBackground, Plus } from '@/images/dashboard';
import { EmailSign, ImageUpload, SendArrow, Smile } from '@/images/dashboard/extraPages';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function BottomOrRightComponent({}: Props) {
  return (
    <section className="container-section-right">
      {/*SECTION 1)Close */}
      <ClosedComponent />

      {/*SECTION:: 2)Message section */}
      {/* 8:10-9:30=> 18-108 lines      */}
      <section className="mt-element-big">
        {[
          {
            hr: true,
            message: [
              {
                text: 'Welcome 🤝 Aryaa! I’m Leyna.',
                time: '1:30 PM',
              },
              {
                text: 'Let’s Get Started',
                time: '1:30 PM',
              },
            ],
          },
          {
            hr: true,
            message: [
              {
                text: 'Can you tell me little bit about you?',
                time: '1:30 PM',
              },
            ],
          },
          {
            hr: false,
            message: [
              {
                text: 'I’m a UI/UX designer with more than 10 years of experience',
                time: '1:30 PM',
              },
            ],
          },
          {
            hr: true,
            message: [
              {
                text: "That's Awesome 😊",
                time: '1.30 PM',
              },
            ],
          },
        ].map(({ hr, message }, index) => {
          return (
            <section
              key={index}
              className={cn(
                ' w-full mt-element-big  sm:w-[90%]  md:w-[60%] lg:w-[70%] xl:w-[58%]',
                !hr && '  ml-auto text-right ',
              )}
            >
              <div className="flex items-start justify-end gap-4">
                {/* 2.1)Image Section */}
                <div
                  className={cn(
                    'aspect-square w-12 rounded-[6px] ',
                    hr ? 'body-gradient flex-center' : 'order-2',
                  )}
                >
                  <Image
                    className={cn('aspect-square', !hr ? 'w-full' : 'w-[90%] ')}
                    src={!hr ? BoyWithBackground.src : Leyna.src}
                    width={160}
                    height={160}
                    alt=""
                  />
                </div>

                {/* 2.2)Message Section Loop  */}
                <div className="flex w-full flex-col gap-2 md:gap-3">
                  {message.map(({ text, time }, index) => {
                    return (
                      <div
                        key={index}
                        className={cn(
                          'flex flex-col rounded-[3px] bg-white px-3 py-3.5 text-[#716666] ',
                          !hr && 'bg-black text-white',
                        )}
                      >
                        <p className="text-14 font-medium  md:text-base ">{text}</p>
                      </div>
                    );
                  })}
                  <p className="text-[12px] text-[#999999]">{message[message.length - 1].time}</p>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      {/* SECTION:: 3)Bottom Input section */}
      {/* 9:45-10:10-11:31-12:17 */}
      <section className="mb-element w-full rounded-sm bg-white px-2 py-2.5 mt-section  box-dropShadow">
        <div className="flex items-center justify-between gap-2">
          {/*COMMENT::3.1) Left section(+,3 images and input) */}
          <div className="flex flex-1 gap-1 sm:gap-2">
            <div className="border-r-[0.5px] border-[#D9D9D9] pr-2.5 md:border-r-[1px]">
              <button className="aspect-square w-6 rounded-full border-[1px] border-[#E4E4E4] flex-center md:w-10">
                <Image alt="Plus" src={Plus.src} width={50} height={50} className="w-1/2" />
              </button>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <Image
                alt="Image"
                src={ImageUpload.src}
                width={40}
                height={40}
                className="aspect-square w-3 cursor-pointer sm:w-4 md:w-5  xl:w-6"
              />
              <Image
                alt="Email Sign"
                src={EmailSign.src}
                width={40}
                height={40}
                className="aspect-square w-3 cursor-pointer sm:w-4 md:w-5  xl:w-6"
              />
              <Image
                alt="Smile"
                src={Smile.src}
                width={40}
                height={40}
                className="aspect-square w-3 cursor-pointer sm:w-4 md:w-5  xl:w-6"
              />
            </div>

            <input
              type="text"
              className="w-full flex-1 bg-transparent pl-0 text-xs outline-none md:pl-2 md:text-xs xl:text-base"
              placeholder="Enter your message here..."
            />
          </div>

          {/*COMMENT:: 3.2) Right Send Button */}
          <button className="rounded-[2px] bg-black px-2 py-2.5 text-white">
            Send{' '}
            <Image
              src={SendArrow.src}
              alt="Send Arrow"
              width={30}
              height={30}
              className="inline-flex w-2.5  md:w-4 xl:w-5 "
            />
          </button>
        </div>
      </section>
    </section>
  );
}
