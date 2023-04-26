import { motion } from 'framer-motion';

import CircleLogo from '../CircleLogo/CircleLogo.jsx';
import styles from './WelcomeScreen.module.scss';

export default function WelcomeScreen() {
  return (
    <div className={styles.loader}>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 900 }}
        transition={{ type: 'spring', duration: 4, delay: 0.5 }}
      >
        <CircleLogo text="murawska.studio" className={styles['brand-logo']} />
      </motion.div>
    </div>
  );
}
