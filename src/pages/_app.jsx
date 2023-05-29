/* eslint-disable react/jsx-props-no-spreading */
import 'normalize.css';
import '@/styles/globals.css';

import Layout from '@/components/Layout/Layout';
import { primaryFont } from '@/utils/fonts';

export default function App({ Component, pageProps }) {
  return (
    <main className={primaryFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
