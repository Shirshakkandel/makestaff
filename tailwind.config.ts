import type { Config } from 'tailwindcss';

const config = {
  // darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // gradientColors: {
      //   'body-gradient':
      //     'linear-gradient(239.18deg, #FCE8DB 5.68%, #D3F5FF 59.3%, #FEF2FC 101.98%)',
      // },
      fontSize: {
        // xxxxs: '4px',
        // xxxs: '8.26px',
        verySmall: '8.26px',
        xxs: '10px',
        //custom text-size of 14px with line height 22px
        14: ['14px', '22px'],
      },
      screens: {
        '3xl': '1440px',
        '4xl': '1600px',
        '5xl': '1920px',
        '6xl': '2560px',
        '7xl': '3840px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        text: '#171717',
        heading: '#040404',
        textDim: '#00000066',
        background: 'hsl(var(--background))',
        background2: '#f7f7f9',
        tableText: '#989898',
        dashboardBackground: '#ECEEF1',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        workSans: ['var(--font-work-sans)'],
        sansSerifBookFLF: ['var(--font-sanSerif-book)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
    ({ addUtilities }: any) => {
      addUtilities({
        '.container-custom': {
          '@apply max-w-[2560px] px-6 lg:px-20 xl:px-[85px] mx-auto': {},
        },
        '.mdMaxWidth': {
          '@apply w-full max-w-[614px] lg:max-w-none': {},
        },
        '.container-left': {
          '@apply pl-4 lg:pl-10 xl:pl-[42px]': {},
        },
        '.top-or-left-container': {
          '@apply relative pl-6 pt-12 lg:pl-14 lg:pt-8 3xl:pl-20 4xl:pl-[clamp(5rem,2vw+1rem,10rem)]':
            {},
        },
        '.container-right': {
          '@apply pr-4 lg:pr-10 xl:pr-[42px]': {},
        },
        '.container-right-dashboard': {
          '@apply pr-3 lg:pr-10 lg:pr-[42px] xl:pr-[5%]': {},
        },
        '.container-section-right': {
          '@apply h-full bg-[#f7f7f9] pt-4 container-left container-right md:pt-6 lg:pt-12': {},
        },

        '.dashboard-width': {
          '@apply xl:w-[98%]': {},
        },

        '.container-customNoMaxWidth': {
          '@apply px-6 lg:px-20 xl:px-[85px] mx-auto': {},
        },
        '.container-custom2': {
          '@apply mx-auto max-w-[1536px] px-6 lg:px-10 xl:px-[40px]': {},
        },
        '.container-custom3': {
          '@apply max-w-[1000px] mx-auto': {},
        },
        '.mt-section': {
          '@apply mt-10 md:mt-11 lg:mt-12 2xl:mt-[clamp(3rem,2vw+0.4rem,6rem)]': {},
        },
        '.py-section': {
          '@apply py-16 md:py-24': {},
        },
        '.mb-section': {
          '@apply mb-10 md:mb-11 lg:mb-12': {},
        },
        '.body-gradient': {
          background: 'linear-gradient(239.18deg, #fce8db 5.68%, #d3f5ff 59.3%, #fef2fc 101.98%)',
        },
        '.dashboard-sidebar-gradient': {
          background: 'linear-gradient(180deg, rgba(234, 246, 248, 0.25) 0%, #F6F5F3 100%)',
        },
        '.button-gradient': {
          background: 'linear-gradient(151.24deg, #FBBBCC 13.33%, #B8E9FD 85.09%)',
        },
        '.vertical-gradient': {
          background: 'linear-gradient(90deg, #F99FAE 0%, #A5C8FF 62.81%, #A2E5FF 100%)',
        },
        '.image-bottom-gradient': {
          background: 'linear-gradient(180deg, rgba(226, 241, 243, 0) 31.73%, #D6F5FE 100%)',
        },
        '.box-dropShadow': {
          boxShadow: '0px 1px 100px 0px #00000008',
        },
        '.input-dropShadow': {
          'box-shadow': '0px 1px 80px 0px #0000000F',
        },

        '.mt-element': {
          '@apply mt-3 md:mt-4': {},
        },
        '.mt-element-big': {
          '@apply mt-5 md:mt-7 lg:mt-8': {},
        },

        '.only-mobile': {
          '@apply lg:hidden': {},
        },
        '.non-mobile': {
          '@apply hidden lg:flex': {},
        },
        '.flex-gap': {
          '@apply gap-y-14 gap-x-12': {},
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
        '.paragraph': {
          '@apply text-base font-[400] text-[#BABABA]': {},
        },
        '.h1': {
          '@apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl': {},
        },
        '.subHeading': {
          '@apply text-base font-medium  lg:text-xl 2xl:text-[clamp(20px,1vw+0.4rem,40px)] 2xl:leading-[110%]':
            {},
        },
      });
    },
  ],
} satisfies Config;

export default config;
