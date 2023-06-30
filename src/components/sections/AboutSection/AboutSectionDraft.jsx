import Link from 'next/link';

import usePreview from '../../../../sanity/lib/preview';
import AboutSectionDefault from './AboutSectionDefault';

export default function AboutSectionDraft({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <AboutSectionDefault aboutSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </>
  );
}
