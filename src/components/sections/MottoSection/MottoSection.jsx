import dynamic from 'next/dynamic';
import Link from 'next/link';
import { groq } from 'next-sanity';

import MottoSectionDefault from './MottoSectionDefault';
import MottoSectionDraft from './MottoSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

const query = groq`*[_type == "mottoSectionSettings"]{
  _id,
  text,
  title,
  description,
  "imgUrl": image.asset->url
}`;

export default function MottoSection({ draftMode, mottoSectionSettings, readToken }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <MottoSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <MottoSectionDefault mottoSectionSettings={mottoSectionSettings} />
  );
}
