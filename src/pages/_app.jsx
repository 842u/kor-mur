/* eslint-disable react/jsx-props-no-spreading */
import 'normalize.css';
import '@/styles/globals.css';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import GlobalContextProvider from '@/components/providers/GlobalContextProvider';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}
