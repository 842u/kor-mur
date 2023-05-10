import 'normalize.css';
import '@/styles/globals.css';

import { primaryFont } from '@/utils/fonts';

export default function App({ Component, pageProps }) {
  return (
    <main className={primaryFont.className}>
      {/* eslint-disable-next-line */}
        <Component {...pageProps} />
    </main>
  );
}
