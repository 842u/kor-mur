import 'normalize.css';
import '@/styles/globals.css';

import { LazyMotion } from 'framer-motion';

import { PAGE_TRANSITION_DURATION } from '@/components/animations/PageTransition/PageTransition';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { preventCssRemoval } from '@/utils/preventCssRemoval';

preventCssRemoval(PAGE_TRANSITION_DURATION);

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <LazyMotion strict features={loadFeatures}>
      {getLayout(<Component {...pageProps} />)}
    </LazyMotion>
  );
}
