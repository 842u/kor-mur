import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Tag.module.scss';

export default function Tag({ tag }) {
  const router = useRouter();

  const { name, slug } = tag;

  const style = `${styles.tag} ${router.query.slug === slug.current ? styles['tag--active'] : ''}`;

  return (
    <Link className={style} href={`/projects/tag/${slug.current}`} scroll={false}>
      {name}
    </Link>
  );
}
