import 'normalize.css';
import '@/styles/globals.css';

// eslint-disable-next-line
import { Oswald } from 'next/font/google';

import Layout from '@/components/Layout/Layout';

const primaryFont = Oswald({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={primaryFont.className}>
      <Layout>
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
