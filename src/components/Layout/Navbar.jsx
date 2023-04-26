import CircleLogo from '../CircleLogo/CircleLogo.jsx';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <CircleLogo text="murawska.studio" className={styles.logo} />
      <nav>
        <ul className={styles.menu}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  );
}
