import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import groqQueryAboutSectionSettings from '../../../../groq/queryAboutSectionSettings';
import AboutSectionDefault from './AboutSectionDefault';
import AboutSectionDraft from './AboutSectionDraft';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

export default function AboutSection({ settings }) {
  const { isDraftMode } = useContext(DraftModeContext);
  const { sanityReadToken } = useContext(SanityReadTokenContext);

  return isDraftMode ? (
    <DraftProvider readToken={sanityReadToken}>
      <AboutSectionDraft query={groqQueryAboutSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <AboutSectionDefault settings={settings} />
  );
}
