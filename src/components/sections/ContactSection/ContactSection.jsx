import dynamic from 'next/dynamic';
import Link from 'next/link';

import groqQueryContactSectionSettings from '../../../../groq/queryContactSectionSettings';
import ContactSectionDefault from './ContactSectionDefault';
import ContactSectionDraft from './ContactSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ContactSection({ readToken, draftMode, contactSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ContactSectionDraft query={groqQueryContactSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ContactSectionDefault contactSectionSettings={contactSectionSettings} />
  );
}
