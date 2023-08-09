/* eslint-disable react/jsx-props-no-spreading */
import 'normalize.css';
import '@/styles/globals.css';

import DefaultLayout from '@/components/layouts/DefaultLayout';

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}
