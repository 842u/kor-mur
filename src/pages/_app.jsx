/* eslint react/jsx-props-no-spreading:0  */
import 'normalize.css';
import '@/styles/globals.css';

import { PAGE_TRANSITION_DURATION } from '@/components/animations/PageTransition/PageTransition';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { preventCssRemoval } from '@/utils/preventCssRemoval';

preventCssRemoval(PAGE_TRANSITION_DURATION);

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}
