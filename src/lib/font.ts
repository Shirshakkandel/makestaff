import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const workSans = Work_Sans({ subsets: ['latin'] });
// SansSerifBookFLF-Italic.otf
const sansSerifBookFLF = localFont({ src: './SansSerifBookFLF-Italic.otf' });

export { workSans, sansSerifBookFLF };
