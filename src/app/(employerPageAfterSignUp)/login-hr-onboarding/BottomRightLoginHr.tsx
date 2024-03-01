'use client';
import { Logo } from '@/app/(public)/_images/LandingPage';
import { ArrowRight, Closed, Email, Google, Microsoft, Password } from '@/images/auth';
import Image from 'next/image';
import React, { experimental_taintUniqueValue } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters ' }),
  rememberPassword: z.boolean().default(false).optional(),
});

type Props = {};

export default function BottomRightLoginHr({}: Props) {
  //1. Define your forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberPassword: false,
    },
  });
  //2. Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  //SECTION::UI PART
  return (
    <section className="mt-[18px] pb-4  container-custom lg:mt-[50px] lg:pb-0">
      {/* 1)Top Menu Icon and close */}
      <div className="flex items-center justify-between">
        <Image width={167} height={27} src={Logo.src} alt="logo" />
      </div>

      <section className=" sm:w-[70%] sm:min-w-[493px] lg:mx-0 ">
        {/* 2)Login In with Google and Microsoft */}
        <div className="mt-7 text-[19px] font-[400] lg:mt-12">
          <h1 className="text-[19px] font-[400] md:text-[28px]">Log In</h1>
          <section className="mt-7 flex flex-col gap-5 lg:mt-16">
            <button className="flex w-full items-center justify-center gap-1 rounded-[30px] bg-[#F4F4F4] py-4 hover:opacity-70">
              <Image width={16} height={16} src={Google.src} alt="google" className="h-4 w-4" />
              <span className="text-[14px]">Continue With Google</span>
            </button>
          </section>
        </div>

        {/*COMPLETED:: 3)Divider Or sign up with email */}
        <div className="mt-9 flex w-full items-center gap-1.5">
          <div className="h-[0.7px] w-1/2 bg-[#949494] md:h-[1px]"></div>
          <p className="shrink-0 text-xs text-[#949494] md:text-base">Or Sign up with Email</p>
          <div className="h-[0.7px] w-1/2 bg-[#949494] md:h-[1px]"></div>
        </div>
  
        {/* COMPLETED:: 4)Email and password,remember me forget password  */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5 lg:mt-[54px]">
            {/* 4.1)Email Filed */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <div className="relative h-12 w-full flex-center">
                      <div className="absolute left-3.5 z-10 h-7 w-7 rounded-full bg-black flex-center">
                        <img src={Email.src} alt="" />
                      </div>
                      <input
                        {...field}
                        className="absolute inset-0 z-0 h-full w-full rounded-[6px] border-[1px] border-[#EDEDED] pl-14 text-base placeholder-[10px]"
                        placeholder="Email"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <div className="relative h-12 w-full flex-center">
                      <div className="absolute left-3.5 z-10 h-7 w-7 rounded-full bg-black flex-center">
                        <img src={Password.src} alt="" />
                      </div>
                      <input
                        {...field}
                        className="absolute inset-0 z-0 h-full w-full rounded-[6px] border-[1px] border-[#EDEDED] pl-14 text-base placeholder-[10px]"
                        placeholder="Password"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* COMPLETED::CHECKBOX  and forget Password*/}
            <div className="mt-5 flex items-center justify-between text-xs text-[#949494] md:text-base">
              <FormField
                control={form.control}
                name="rememberPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex  flex-row  items-center gap-1">
                      <FormControl>
                        <Checkbox
                          className="h-4 w-4"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer text-xs font-[400] leading-[100%] md:text-base">
                        Remember Me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              {/* Forget Password */}
              <Link
                href="#"
                title="Forgot Password?"
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'text-sm font-[400] text-[#949494] md:text-base',
                )}
              >
                Forgot Password?
              </Link>
            </div>

            {/* LOG In */}
            <button className="relative flex h-12 w-full items-center justify-center rounded-[6px] bg-[#FF7541] hover:bg-opacity-80">
              <span className="text-base font-[400] text-white ">Log In</span>
              <div className="absolute right-5 h-8 w-8 rounded-full bg-white  flex-center">
                <Image src={ArrowRight.src} width={20} height={20} alt="" className="h-5 w-5" />
              </div>
            </button>

            {/*TODO:: 5)Log in and register  */}
            <div className="mx-auto flex justify-center">
              <p className=" text-[14px] font-[400] md:mt-1   md:text-base">
                Not Registered yet?{' '}
                <Link href="#" className="text-[#FF7541]">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </Form>

        {/* 6)Get Started as a employee */}
        <div className="mt-11 flex items-center justify-between lg:mt-20">
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="  text-[14px] font-[400] md:text-[20px] ">Get Started as a Company</p>
            <div className="h-[1px] w-14 bg-black"></div>
          </div>

          <Link
            href={'/staff-login'}
            className="h-[34px] w-[34px] rounded-[3px] border-[1px] border-[#71C4CF] bg-[#71C4CF38] flex-center md:h-12 md:w-12"
          >
            <Image alt="ArrowRight" src={ArrowRight.src} width={20} height={20} />
          </Link>
        </div>
      </section>
    </section>
  );
}
