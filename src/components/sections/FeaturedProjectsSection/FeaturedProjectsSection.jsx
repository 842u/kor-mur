import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryFeaturedProjectsSection from '../../../../groq/queryFeaturedProjectsSection';
import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import FeaturedProjectsSectionDraft from './FeaturedProjectsSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function FeaturedProjectsSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <FeaturedProjectsSectionDraft query={groqQueryFeaturedProjectsSection} />
    </DraftProvider>
  ) : (
    <FeaturedProjectsSectionDefault settings={settings} />
  );
}
