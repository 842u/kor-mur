import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import styles from './NavBar.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <CircleLogo text="murawska.studio" className={styles.logo} />
      <NavMenu />
    </header>
  );
}
