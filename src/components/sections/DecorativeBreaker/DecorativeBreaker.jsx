import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import styles from './DecorativeBreaker.module.scss';

export default function DecorativeBreaker() {
  return (
    <div className={styles.breaker}>
      <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
    </div>
  );
}
