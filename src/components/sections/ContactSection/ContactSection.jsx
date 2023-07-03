import dynamic from 'next/dynamic';
import Link from 'next/link';
import { groq } from 'next-sanity';

import ContactSectionDefault from './ContactSectionDefault';
import ContactSectionDraft from './ContactSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

const query = groq`*[_type == "contactSectionSettings"]{
  title,
  description,
}`;

export default function ContactSection({ readToken, draftMode, contactSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ContactSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ContactSectionDefault contactSectionSettings={contactSectionSettings} />
  );
}
