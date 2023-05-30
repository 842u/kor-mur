import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import Credits from './Credits/Credits';
import styles from './Footer.module.scss';
import Socials from './Socials/Socials';

export default function Footer({ className }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
      <Socials />
      <Credits />
    </footer>
  );
}
