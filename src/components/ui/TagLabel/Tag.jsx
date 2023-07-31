import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Tag.module.scss';

export default function Tag({ tag }) {
  const router = useRouter();

  return (
    <Link
      className={`${styles.label} ${router.query.slug === tag.slug.current ? styles.active : ''}`}
      href={`/projects/tag/${tag.slug.current}`}
    >
      {tag.name}
    </Link>
  );
}
