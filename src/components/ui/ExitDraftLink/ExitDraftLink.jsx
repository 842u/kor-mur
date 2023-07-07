import Link from 'next/link';

import styles from './ExitDraftLink.module.scss';

export default function ExitDraftLink() {
  return (
    <Link className={styles.link} href="/api/disable-draft" prefetch={false}>
      Exit Draft Mode
    </Link>
  );
}
