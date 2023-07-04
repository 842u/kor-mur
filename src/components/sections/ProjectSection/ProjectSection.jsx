import dynamic from 'next/dynamic';
import Link from 'next/link';

import groqQueryProjectBySlug from '@/../groq/queryProjectBySlug';

import ProjectSectionDefault from './ProjectSectionDefault';
import ProjectSectionDraft from './ProjectSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectSection({ readToken, draftMode, projectSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ProjectSectionDraft query={groqQueryProjectBySlug} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ProjectSectionDefault projectSectionSettings={projectSectionSettings} />
  );
}
