import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import MottoSectionDefault from './MottoSectionDefault';

export default function MottoSectionPreview({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <MottoSectionDefault mottoSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Preview Mode
      </Link>
    </>
  );
}
