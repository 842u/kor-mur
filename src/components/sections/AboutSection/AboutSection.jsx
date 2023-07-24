import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryAboutSectionSettings from '../../../../groq/queryAboutSectionSettings';
import AboutSectionDefault from './AboutSectionDefault';
import AboutSectionDraft from './AboutSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

export default function AboutSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <AboutSectionDraft query={groqQueryAboutSectionSettings} />
    </DraftProvider>
  ) : (
    <AboutSectionDefault settings={settings} />
  );
}
