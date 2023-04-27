import { useRouter } from 'next/router.js';
import { useState } from 'react';

import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import HamburgerButton from './HamburgerButton/HamburgerButton.jsx';
import styles from './NavBar.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx';

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();

  const clickHamburgerHandler = () => {
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
        <CircleLogo text="murawska.studio" className={styles.logo} />
      </button>
      <nav>
        <HamburgerButton
          onClick={clickHamburgerHandler}
          isMenuActive={isMenuActive}
          className={styles.hamburger}
        />
        <NavMenu isMenuActive={isMenuActive} className={styles.menu} />
      </nav>
    </header>
  );
}