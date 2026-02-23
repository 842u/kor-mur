import { AnimatePresence, circIn, circOut, m } from 'framer-motion';
import { useRouter } from 'next/router';

import { primaryFont } from '@/utils/fonts';

import styles from './PageTransition.module.scss';

export const PAGE_TRANSITION_DURATION = 300;

export function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window?.scrollTo(0, 0);
      }}
    >
      <m.main key={router.asPath} className={primaryFont.className}>
        {children}
        <m.div
          animate={{ scaleY: 0 }}
          className={styles['slide-in']}
          exit={{ scaleY: 1 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: PAGE_TRANSITION_DURATION / 1000, ease: circOut }}
        />
        <m.div
          animate={{ scaleY: 0 }}
          className={styles['slide-out']}
          exit={{ scaleY: 0 }}
          initial={{ scaleY: 1 }}
          transition={{ duration: PAGE_TRANSITION_DURATION / 1000, ease: circIn }}
        />
      </m.main>
    </AnimatePresence>
  );
}
