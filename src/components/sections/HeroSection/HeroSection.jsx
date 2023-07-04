import dynamic from 'next/dynamic';
import Link from 'next/link';

import groqQueryHeroSectionSettings from '../../../../groq/queryHeroSectionSettings';
import HeroSectionDefault from './HeroSectionDefault';
import HeroSectionDraft from './HeroSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function HeroSection({ draftMode, heroSectionSettings, readToken }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <HeroSectionDraft query={groqQueryHeroSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <HeroSectionDefault heroSectionSettings={heroSectionSettings} />
  );
}
