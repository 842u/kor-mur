import Link from 'next/link.js';

import CircleLogo from '../../CircleLogo/CircleLogo.jsx';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <CircleLogo text="murawska.studio" className={styles.logo} />
      <nav>
        <ul>
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
      </nav>
    </header>
  );
}
