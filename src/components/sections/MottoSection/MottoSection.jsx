import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryMottoSectionSettings from '../../../../groq/queryMottoSectionSettings';
import MottoSectionDefault from './MottoSectionDefault';
import MottoSectionDraft from './MottoSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function MottoSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <MottoSectionDraft query={groqQueryMottoSectionSettings} />
    </DraftProvider>
  ) : (
    <MottoSectionDefault settings={settings} />
  );
}
