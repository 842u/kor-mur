import 'normalize.css';
import '@/styles/globals.css';

// eslint-disable-next-line
import { Bebas_Neue } from 'next/font/google';

const primaryFont = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={primaryFont.className}>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </main>
  );
}
