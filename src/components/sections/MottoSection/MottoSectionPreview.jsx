import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import MottoSection from './MottoSection';

export default function MottoSectionPreview({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <MottoSection mottoSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Preview Mode
      </Link>
    </>
  );
}
