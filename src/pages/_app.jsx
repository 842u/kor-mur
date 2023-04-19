import 'normalize.css';
import '@/styles/globals.css';

// eslint-disable-next-line
import { Bebas_Neue } from 'next/font/google';

const inter = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </main>
  );
}
