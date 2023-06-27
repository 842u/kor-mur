import Link from 'next/link';

import MottoSection from './MottoSection';

export default function MottoSectionPreview({ mottoSectionSettings }) {
  return (
    <>
      <MottoSection mottoSectionSettings={mottoSectionSettings} />
      <Link href="/api/disable-draft">Exit Preview Mode</Link>
    </>
  );
}
