import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';
import { AnimatePresence, circIn, circOut, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { primaryFont } from '@/utils/fonts';

import styles from './PageTransition.module.scss';

export function PageTransition({ children }) {
  const router = useRouter();

  const removeUnusedCss = useNextCssRemovalPrevention();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window?.scrollTo(0, 0);
        removeUnusedCss();
      }}
    >
      <motion.main key={router.pathname} className={primaryFont.className}>
        {children}
        <motion.div
          animate={{ scaleY: 0 }}
          className={styles['slide-in']}
          exit={{ scaleY: 1 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.3, ease: circOut }}
        />
        <motion.div
          animate={{ scaleY: 0 }}
          className={styles['slide-out']}
          exit={{ scaleY: 0 }}
          initial={{ scaleY: 1 }}
          transition={{ duration: 0.3, ease: circIn }}
        />
      </motion.main>
    </AnimatePresence>
  );
}
