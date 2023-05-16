import { domAnimation, LazyMotion, m } from 'framer-motion';

import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import styles from './WelcomeScreen.module.scss';

export default function WelcomeScreen({ className }) {
  return (
    <div className={`${styles.loader} ${className}`}>
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{ scale: 1, rotate: 900 }}
          initial={{ scale: 0, rotate: 0 }}
          transition={{
            type: 'spring',
            duration: 2,
          }}
        >
          <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
        </m.div>
      </LazyMotion>
    </div>
  );
}
