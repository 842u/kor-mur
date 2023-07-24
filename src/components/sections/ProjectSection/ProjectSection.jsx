import dynamic from 'next/dynamic';
import { useContext } from 'react';

import groqQueryProjectBySlug from '@/../groq/queryProjectBySlug';
import DraftModeContext from '@/context/DraftModeContext';

import ProjectSectionDefault from './ProjectSectionDefault';
import ProjectSectionDraft from './ProjectSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);

  return isDraftMode ? (
    <DraftProvider draftMode={isDraftMode}>
      <ProjectSectionDraft query={groqQueryProjectBySlug} />
    </DraftProvider>
  ) : (
    <ProjectSectionDefault settings={settings} />
  );
}
