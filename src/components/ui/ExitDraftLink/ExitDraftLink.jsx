import Link from 'next/link';

import { primaryFont } from '@/utils/fonts';

import styles from './ExitDraftLink.module.scss';

export default function ExitDraftLink() {
  return (
    <Link
      className={`${styles.link} ${primaryFont.className}`}
      href="/api/disable-draft"
      prefetch={false}
    >
      EXIT DRAFT MODE
    </Link>
  );
}
