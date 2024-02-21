import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});
// SansSerifBookFLF-Italic.otf
const sansSerifBookFLF = localFont({
  src: './SansSerifBookFLF-Italic.otf',
  variable: '--font-sanSerif-book',
});

export { workSans, sansSerifBookFLF };
