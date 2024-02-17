import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { workSans } from '@/lib/font';

export const metadata: Metadata = {
  title: { default: 'MakeStaff', template: '%s | MakeStaff' },
  description:
    'AI conducts liver interviews, evaluates in real-time and identifies top performance No more manual screening, just smarter recruiting!',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          // sansSerifBookFLF.className,
          workSans.className,
          process.env.NODE_ENV === 'development' && 'debug-screens',
        )}
      >
        {children}
      </body>
    </html>
  );
}
