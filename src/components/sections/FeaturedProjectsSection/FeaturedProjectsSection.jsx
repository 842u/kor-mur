import dynamic from 'next/dynamic';
import Link from 'next/link';

import groqQueryFeaturedProjectsSection from '../../../../groq/queryFeaturedProjectsSection';
import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import FeaturedProjectsSectionDraft from './FeaturedProjectsSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function FeaturedProjectsSection({
  readToken,
  draftMode,
  featuredProjectsSectionSettings,
}) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <FeaturedProjectsSectionDraft query={groqQueryFeaturedProjectsSection} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <FeaturedProjectsSectionDefault
      featuredProjectsSectionSettings={featuredProjectsSectionSettings}
    />
  );
}
