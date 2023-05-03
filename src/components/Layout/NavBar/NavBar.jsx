import { useRouter } from 'next/router.js';
import { useState } from 'react';

import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import HamburgerButton from './HamburgerButton/HamburgerButton.jsx';
import styles from './NavBar.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx';

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();

  const toggleMenuHandler = () => {
    setIsMenuActive((currentState) => !currentState);
  };

  const clickLogoHandler = () => {
    router.push('/');
    setIsMenuActive(false);
  };

  return (
    <header className={styles.navbar}>
      <button
        onClick={clickLogoHandler}
        aria-label="home page"
        type="button"
        className={styles['logo-button']}
      >
        <CircleLogo text="MURAWSKA.STUDIO" className={styles.logo} />
      </button>
      <nav>
        <HamburgerButton
          onClick={toggleMenuHandler}
          isMenuActive={isMenuActive}
          className={styles.hamburger}
        />
        <NavMenu
          onMenuItemClick={toggleMenuHandler}
          isMenuActive={isMenuActive}
          className={styles.menu}
        />
      </nav>
    </header>
  );
}
