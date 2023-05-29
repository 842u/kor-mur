import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import Credits from './Credits/Credits';
import styles from './Footer.module.scss';
import Socials from './Socials/Socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
      <Socials />
      <Credits />
    </footer>
  );
}
