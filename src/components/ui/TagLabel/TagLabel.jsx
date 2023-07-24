import Link from 'next/link';

import styles from './TagLabel.module.scss';

export default function TagLabel({ tag }) {
  return (
    <Link className={styles.label} href={`/projects/tag/${tag.slug.current}`}>
      {tag.name}
    </Link>
  );
}
