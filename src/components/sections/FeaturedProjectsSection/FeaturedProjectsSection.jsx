import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import groqQueryFeaturedProjectsSection from '../../../../groq/queryFeaturedProjectsSection';
import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import FeaturedProjectsSectionDraft from './FeaturedProjectsSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function FeaturedProjectsSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);
  const { sanityReadToken } = useContext(SanityReadTokenContext);

  return isDraftMode ? (
    <DraftProvider readToken={sanityReadToken}>
      <FeaturedProjectsSectionDraft query={groqQueryFeaturedProjectsSection} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <FeaturedProjectsSectionDefault settings={settings} />
  );
}
