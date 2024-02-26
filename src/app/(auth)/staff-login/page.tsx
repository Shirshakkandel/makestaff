'use client';
import React from 'react';
//zod and useForm import
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//form import
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';
import { ArrowRight, Closed, Email, Google, Password } from '@/images/auth';
import { Logo } from '@/app/(public)/_images/LandingPage';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type Props = {};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters ' }),
  rememberPassword: z.boolean().default(false).optional(),
});

export default function StaffLogin({}: Props) {
  //SECTION::LOGIC PART
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

  return (
    <main className="mt-[18px] container-custom lg:mt-[50px]">
      {/* 1)Top Menu Icon and close */}
      <div className="flex items-center justify-between">
        <Image width={167} height={27} src={Logo.src} alt="logo" className="only-mobile" />
        <div className=" ml-auto cursor-pointer rounded-full  border-[1px] border-[#00000066] flex-center md:h-7 md:w-7">
          <Image
            src={Closed.src}
            width={30}
            height={30}
            alt=""
            className="md:h-[17px] md:w-[17px]"
          />
        </div>
      </div>
      <section className=" sm:w-[70%] sm:min-w-[493px] lg:mx-0 ">
        {/* 2)Login In with Google and Microsoft */}
        <div className="mt-7 text-[19px] font-[400] lg:mt-12">
          <h1 className="text-[19px]  font-[500] leading-[90%] md:text-[32px]">
            Sign in to Leyna.ai
          </h1>
          <p className="mt-4 font-[400] md:text-base ">Enter your details below</p>

          <section className="mt-7 flex flex-col gap-5 lg:mt-11">
            <button className="flex w-full items-center justify-center gap-1 rounded-[30px] bg-black py-4 text-white hover:opacity-70">
              <Image width={16} height={16} src={Google.src} alt="google" className="h-4 w-4" />
              <span className="text-[14px] md:text-base">Continue With Google</span>
            </button>
          </section>

          {/*COMPLETED:: 3)Divider Or sign up with email */}
          <div className="mt-9 flex w-full items-center gap-1.5">
            <div className="h-[0.7px] w-1/2 bg-[#949494] md:h-[1px]"></div>
            <p className="shrink-0 text-xs text-[#949494] md:text-base">Or Sign up with Email</p>
            <div className="h-[0.7px] w-1/2 bg-[#949494] md:h-[1px]"></div>
          </div>
          {/* COMMENT::4)FORM Components */}
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
              {/* 4.2)Password Filed */}
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
              {/* COMPLETED::4.3)CHECKBOX  and forget Password*/}
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

              {/* 4.4) LOG In */}
              <button className="relative flex h-12 w-full items-center justify-center rounded-[6px] bg-[black] hover:bg-opacity-80">
                <span className="text-base font-[400] text-white ">Sign In</span>
                <div className="absolute right-5 h-8 w-8 rounded-full bg-white  flex-center">
                  <Image src={ArrowRight.src} width={20} height={20} alt="" className="h-5 w-5" />
                </div>
              </button>

              {/*TODO:: 5)Log in and register  */}
              <div className="mx-auto flex justify-center">
                <p className=" text-[14px] font-[400] text-[#929292] md:mt-1   md:text-base">
                  Don’t have an account?{' '}
                  <Link href="#" className="text-[#000000] underline">
                    Register Now
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
