import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import groqQueryContactSectionSettings from '../../../../groq/queryContactSectionSettings';
import ContactSectionDefault from './ContactSectionDefault';
import ContactSectionDraft from './ContactSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ContactSection({ settings }) {
  const draftMode = useContext(DraftModeContext);
  const readToken = useContext(SanityReadTokenContext);

  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ContactSectionDraft query={groqQueryContactSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ContactSectionDefault settings={settings} />
  );
}
