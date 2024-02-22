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
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
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
          '@apply max-w-[1536px] px-6 lg:px-20 xl:px-[85px] mx-auto': {},
        },
        '.mdMaxWidth': {
          '@apply w-full max-w-[614px] lg:max-w-none': {},
        },
        '.container-left': {
          '@apply pl-6 lg:pl-20 xl:pl-[85px]': {},
        },
        '.container-right': {
          '@apply pr-6 lg:pr-20 xl:pr-[85px]': {},
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
          '@apply mt-16 md:mt-24': {},
        },
        '.py-section': {
          '@apply py-16 md:py-24': {},
        },
        '.mb-section': {
          '@apply mb-10 md:mb-16': {},
        },

        '.mt-element': {
          '@apply mt-3 md:mt-4': {},
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
      });
    },
  ],
} satisfies Config;

export default config;
