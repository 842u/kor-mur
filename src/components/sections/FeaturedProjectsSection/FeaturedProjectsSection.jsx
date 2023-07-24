import dynamic from 'next/dynamic';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import groqQueryFeaturedProjects from '../../../../groq/queryFeaturedProjects';
import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import FeaturedProjectsSectionDraft from './FeaturedProjectsSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function FeaturedProjectsSection({ projects }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <FeaturedProjectsSectionDraft query={groqQueryFeaturedProjects} />
    </DraftProvider>
  ) : (
    <FeaturedProjectsSectionDefault projects={projects} />
  );
}
