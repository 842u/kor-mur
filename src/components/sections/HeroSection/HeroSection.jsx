import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryHeroSectionSettings from '../../../../groq/queryHeroSectionSettings';
import HeroSectionDefault from './HeroSectionDefault';
import HeroSectionDraft from './HeroSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function HeroSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <HeroSectionDraft query={groqQueryHeroSectionSettings} />
    </DraftProvider>
  ) : (
    <HeroSectionDefault settings={settings} />
  );
}
