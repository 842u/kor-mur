import dynamic from 'next/dynamic';
import Link from 'next/link';

import AboutSectionDefault from './AboutSectionDefault';
import AboutSectionDraft from './AboutSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

const query = `*[_type == "aboutSectionSettings"]{
  title,
  firstParagraph,
  secondParagraph,
  "image": {
    "asset": {
      "url": image.asset->url
    }
  }
}`;

export default function AboutSection({ readToken, draftMode, aboutSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <AboutSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <AboutSectionDefault aboutSectionSettings={aboutSectionSettings} />
  );
}
