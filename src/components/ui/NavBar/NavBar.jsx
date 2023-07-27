import { useRouter } from 'next/router.js';
import { useState } from 'react';

import LogoButton from '../LogoButton/LogoButton.jsx';
import HamburgerButton from './HamburgerButton/HamburgerButton.jsx';
import styles from './NavBar.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx';

export default function NavBar({ className }) {
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
    <header className={`${styles.navbar} ${className}`}>
      <LogoButton onClick={clickLogoHandler} />
      <nav>
        <HamburgerButton
          className={styles.hamburger}
          isMenuActive={isMenuActive}
          onClick={toggleMenuHandler}
        />
        <NavMenu
          className={styles.menu}
          isMenuActive={isMenuActive}
          onMenuItemClick={toggleMenuHandler}
        />
      </nav>
    </header>
  );
}
