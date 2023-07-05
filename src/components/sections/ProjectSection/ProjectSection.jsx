import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import groqQueryProjectBySlug from '@/../groq/queryProjectBySlug';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import ProjectSectionDefault from './ProjectSectionDefault';
import ProjectSectionDraft from './ProjectSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectSection({ settings }) {
  const draftMode = useContext(DraftModeContext);
  const readToken = useContext(SanityReadTokenContext);

  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ProjectSectionDraft query={groqQueryProjectBySlug} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ProjectSectionDefault settings={settings} />
  );
}
