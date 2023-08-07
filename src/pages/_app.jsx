/* eslint-disable react/jsx-props-no-spreading */
import 'normalize.css';
import '@/styles/globals.css';

import { LiveQueryProvider } from 'next-sanity/preview';
import { useMemo } from 'react';

import DefaultLayout from '@/components/layouts/DefaultLayout';

import getClient from '../../sanity/lib/client';

export default function App({ Component, pageProps }) {
  const { draftMode = false } = pageProps;

  const sanityClient = useMemo(() => getClient(draftMode), [draftMode]);

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <LiveQueryProvider client={sanityClient}>
        <DefaultLayout>{page}</DefaultLayout>
      </LiveQueryProvider>
    ));

  return getLayout(<Component {...pageProps} />);
}
