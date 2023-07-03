import dynamic from 'next/dynamic';
import Link from 'next/link';
import { groq } from 'next-sanity';

import HeroSectionDefault from './HeroSectionDefault';
import HeroSectionDraft from './HeroSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

const query = groq`*[_type == "heroSectionSettings"]{
  "imageLeft": {
    "asset": {
      "url": imageLeft.asset->url
    }
  },
  
  "imageMiddleTop": {
    "asset": {
      "url": imageMiddleTop.asset->url
    }
  },
  
  "imageMiddleBottom": {
    "asset": {
      "url": imageMiddleBottom.asset->url
    }
  },
  
  "imageRightTop": {
    "asset": {
      "url": imageRightTop.asset->url
    }
  },
  
  "imageRightBottom": {
    "asset": {
      "url": imageRightBottom.asset->url
    }
  },
}`;

export default function HeroSection({ draftMode, heroSectionSettings, readToken }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <HeroSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <HeroSectionDefault heroSectionSettings={heroSectionSettings} />
  );
}
