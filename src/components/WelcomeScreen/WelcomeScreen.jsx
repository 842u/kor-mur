import { motion } from 'framer-motion';

import CircleLogo from '../CircleLogo/CircleLogo.jsx';
import styles from './WelcomeScreen.module.scss';

export default function WelcomeScreen({ className }) {
  return (
    <div className={`${styles.loader} ${className}`}>
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 900 }}
        transition={{
          type: 'spring',
          duration: 2,
        }}
      >
        <CircleLogo text="MURAWSKA.STUDIO" className={styles['brand-logo']} />
      </motion.div>
    </div>
  );
}
