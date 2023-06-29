import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import HeroSectionDefault from './HeroSectionDefault';

const HeroSectionDraft = lazy(() => import('@/components/sections/HeroSection/HeroSectionDraft'));

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

export default function HeroSection({ draftMode, heroSectionSettings }) {
  return draftMode ? (
    <PreviewSuspense fallback="loading">
      <HeroSectionDraft query={query} />
    </PreviewSuspense>
  ) : (
    <HeroSectionDefault heroSectionSettings={heroSectionSettings} />
  );
}
