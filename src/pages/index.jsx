import CircleLogo from '@/components/CircleLogo/CircleLogo';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.center}>
      <CircleLogo text="murawska.studio" className={styles['brand-logo']} />
    </div>
  );
}
