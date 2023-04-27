import Link from 'next/link';

import styles from './NavMenu.module.scss';

export default function NavMenu({ isMenuActive, className }) {
  return (
    <ul className={`${styles.menu} ${isMenuActive && styles['menu--active']} ${className}`}>
      <li>
        <Link href="/">
          <button type="button">Strona Główna</button>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <button type="button">Oferta</button>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <button type="button">Projekty</button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <button type="button">O mnie</button>
        </Link>
      </li>
      <li>
        <Link href="/#contact">
          <button type="button">Kontakt</button>
        </Link>
      </li>
    </ul>
  );
}
