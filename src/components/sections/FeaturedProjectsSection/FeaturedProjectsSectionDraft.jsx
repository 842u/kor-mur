import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';

export default function FeaturedProjectsSectionPreview({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <FeaturedProjectsSectionDefault featuredProjectsSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </>
  );
}
