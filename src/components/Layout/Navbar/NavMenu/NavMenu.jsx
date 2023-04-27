import { useState } from 'react';

import HamburgerButton from './HamburgerButton/HamburgerButton';
import NavLinks from './NavLinks/NavLinks';

export default function NavMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const clickHandler = () => {
    setIsMenuActive((currentState) => !currentState);
  };

  return (
    <nav>
      <HamburgerButton onClick={clickHandler} isMenuActive={isMenuActive} />
      <NavLinks isMenuActive={isMenuActive} />
    </nav>
  );
}
