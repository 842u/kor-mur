import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import HeroSectionDefault from './HeroSectionDefault';

export default function HeroSectionDraft({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <HeroSectionDefault heroSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </>
  );
}
