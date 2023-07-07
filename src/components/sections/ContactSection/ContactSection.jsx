import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryContactSectionSettings from '../../../../groq/queryContactSectionSettings';
import ContactSectionDefault from './ContactSectionDefault';
import ContactSectionDraft from './ContactSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ContactSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <ContactSectionDraft query={groqQueryContactSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ContactSectionDefault settings={settings} />
  );
}
