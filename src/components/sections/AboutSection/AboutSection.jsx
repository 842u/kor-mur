import dynamic from 'next/dynamic';
import Link from 'next/link';

import groqQueryAboutSectionSettings from '../../../../groq/queryAboutSectionSettings';
import AboutSectionDefault from './AboutSectionDefault';
import AboutSectionDraft from './AboutSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

export default function AboutSection({ readToken, draftMode, aboutSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <AboutSectionDraft query={groqQueryAboutSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <AboutSectionDefault aboutSectionSettings={aboutSectionSettings} />
  );
}
