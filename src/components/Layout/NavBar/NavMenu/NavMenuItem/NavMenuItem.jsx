import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavMenuItem.module.scss';

export default function NavMenuItem({ href, children, onClick }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const styleClass = `${styles.item} ${currentPath === href ? styles['item--active'] : ''}`;

  return (
    <li className={styleClass}>
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
}
