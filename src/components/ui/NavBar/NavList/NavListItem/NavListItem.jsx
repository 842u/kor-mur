import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavListItem.module.scss';

export default function NavListItem({ href, children, onClick }) {
  const router = useRouter();
  const currentPath = router.asPath;

  const styleClass = `${styles.item} ${currentPath === href ? styles['item--active'] : ''}`;

  return (
    <li className={styleClass}>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
