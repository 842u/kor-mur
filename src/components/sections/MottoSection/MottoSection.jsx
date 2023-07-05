import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import groqQueryMottoSectionSettings from '../../../../groq/queryMottoSectionSettings';
import MottoSectionDefault from './MottoSectionDefault';
import MottoSectionDraft from './MottoSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function MottoSection({ settings }) {
  const draftMode = useContext(DraftModeContext);
  const readToken = useContext(SanityReadTokenContext);

  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <MottoSectionDraft query={groqQueryMottoSectionSettings} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <MottoSectionDefault settings={settings} />
  );
}
