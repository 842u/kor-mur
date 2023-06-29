import Link from 'next/link';

import usePreview from '@/../sanity/lib/preview';

import ContactSectionDefault from './ContactSectionDefault';

export default function ContactSectionDraft({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <ContactSectionDefault contactSectionSettings={data} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </>
  );
}
