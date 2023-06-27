import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import MottoSection from './MottoSection';

export default function MottoSectionPreview({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <MottoSection mottoSectionSettings={data} />
      <Link href="/api/disable-draft">Exit Preview Mode</Link>
    </>
  );
}
