import Link from 'next/link';

import styles from './NavMenu.module.scss';

export default function NavMenu({ isMenuActive }) {
  const activeClass = isMenuActive ? '--active' : '';

  return (
    <ul className={styles[`links${activeClass}`]}>
      <li>
        <Link href="/">Strona Główna</Link>
      </li>
      <li>
        <Link href="/services">Oferta</Link>
      </li>
      <li>
        <Link href="/projects">Projekty</Link>
      </li>
      <li>
        <Link href="/about">O mnie</Link>
      </li>
      <li>
        <Link href="/#contact">Kontakt</Link>
      </li>
    </ul>
  );
}
