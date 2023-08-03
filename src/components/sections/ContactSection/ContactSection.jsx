import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryContactSectionSettings from '../../../../groq/queryContactSectionSettings';
import ContactSectionDefault from './ContactSectionDefault';
import ContactSectionDraft from './ContactSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ContactSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <ContactSectionDraft query={groqQueryContactSectionSettings} />
    </DraftProvider>
  ) : (
    <ContactSectionDefault settings={settings} />
  );
}
