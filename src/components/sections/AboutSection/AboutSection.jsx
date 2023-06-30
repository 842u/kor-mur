import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import AboutSectionDefault from './AboutSectionDefault';

const AboutSectionDraft = lazy(() => import('./AboutSectionDraft'));

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

export default function AboutSection({ draftMode, aboutSectionSettings }) {
  return draftMode ? (
    <PreviewSuspense fallback="loading">
      <AboutSectionDraft query={query} />
    </PreviewSuspense>
  ) : (
    <AboutSectionDefault aboutSectionSettings={aboutSectionSettings} />
  );
}
