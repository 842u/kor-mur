import { motion } from 'framer-motion';

import CircleLogo from '../CircleLogo/CircleLogo.jsx';
import styles from './WelcomeScreen.module.scss';

export default function WelcomeScreen() {
  return (
    <div className={styles.loader}>
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        exit={{ opacity: 1, scale: 1, rotate: 900 }}
        transition={{
          type: 'spring',
          duration: 3,
        }}
      >
        <CircleLogo text="murawska.studio" className={styles['brand-logo']} />
      </motion.div>
    </div>
  );
}
