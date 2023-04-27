import { useState } from 'react';

import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import HamburgerButton from './HamburgerButton/HamburgerButton.jsx';
import styles from './NavBar.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx';

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const clickHandler = () => {
    setIsMenuActive((currentState) => !currentState);
  };

  return (
    <header className={styles.navbar}>
      <CircleLogo text="murawska.studio" className={styles.logo} />
      <nav>
        <HamburgerButton
          onClick={clickHandler}
          isMenuActive={isMenuActive}
          className={styles.hamburger}
        />
        <NavMenu isMenuActive={isMenuActive} className={styles.menu} />
      </nav>
    </header>
  );
}
