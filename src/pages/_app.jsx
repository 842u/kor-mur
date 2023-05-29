/* eslint-disable react/jsx-props-no-spreading */
import 'normalize.css';
import '@/styles/globals.css';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import { primaryFont } from '@/utils/fonts';

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <main className={primaryFont.className}>
        <DefaultLayout>{page}</DefaultLayout>
      </main>
    ));

  return getLayout(<Component {...pageProps} />);
}
