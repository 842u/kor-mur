import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import MottoSectionDefault from './MottoSectionDefault';

const MottoSectionPreview = lazy(() =>
  import('@/components/sections/MottoSection/MottoSectionPreview')
);

const query = groq`*[_type == "mottoSectionSettings"]{
  _id,
  text,
  title,
  description,
  "imgUrl": image.asset->url
}`;

export default function MottoSection({ draftMode, mottoSectionSettings }) {
  return draftMode ? (
    <PreviewSuspense fallback="loading">
      <MottoSectionPreview query={query} />
    </PreviewSuspense>
  ) : (
    <MottoSectionDefault mottoSectionSettings={mottoSectionSettings} />
  );
}
