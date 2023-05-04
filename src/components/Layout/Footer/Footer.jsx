import CircleLogo from '../../CircleLogo/CircleLogo';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CircleLogo text="MURAWSKA.STUDIO" className={styles.logo} />
      <p>SOCIAL</p>
      <p>SOCIAL</p>
      <p>SOCIAL</p>
      <p>copyrigths</p>
    </footer>
  );
}
