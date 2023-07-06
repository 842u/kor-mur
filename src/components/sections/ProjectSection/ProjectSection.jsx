import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import groqQueryProjectBySlug from '@/../groq/queryProjectBySlug';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import ProjectSectionDefault from './ProjectSectionDefault';
import ProjectSectionDraft from './ProjectSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);
  const { sanityReadToken } = useContext(SanityReadTokenContext);

  return isDraftMode ? (
    <DraftProvider readToken={sanityReadToken}>
      <ProjectSectionDraft query={groqQueryProjectBySlug} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ProjectSectionDefault settings={settings} />
  );
}
