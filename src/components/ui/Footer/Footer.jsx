import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import Credits from './Credits/Credits';
import styles from './Footer.module.scss';
import Socials from './Socials/Socials';

export default function Footer({ className }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <Socials className={styles.socials} />
      <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
      <Credits className={styles.credits} />
    </footer>
  );
}
