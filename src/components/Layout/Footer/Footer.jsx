import CircleLogo from '../../CircleLogo/CircleLogo';
import Credits from './Credits/Credits';
import styles from './Footer.module.scss';
import Socials from './Socials/Socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CircleLogo text="MURAWSKA.STUDIO" className={styles.logo} />
      <Socials />
      <Credits />
    </footer>
  );
}
