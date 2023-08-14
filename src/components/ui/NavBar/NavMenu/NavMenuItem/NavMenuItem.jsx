import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavMenuItem.module.scss';

export default function NavMenuItem({ href, children, onClick }) {
  const router = useRouter();

  const currentPath = router.asPath;

  const isActive =
    currentPath === href || (currentPath.includes('projects') && href.includes('projects'));

  const styleClass = `${styles.item} ${isActive ? styles['item--active'] : ''}`;

  return (
    <li className={styleClass}>
      <Link href={href} scroll={false} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
