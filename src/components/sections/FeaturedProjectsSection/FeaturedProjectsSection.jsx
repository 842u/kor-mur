import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';

const FeaturedProjectsSectionDraft = lazy(() =>
  import('@/components/sections/FeaturedProjectsSection/FeaturedProjectsSectionDraft')
);

const query = groq`*[_type == "featuredProjectsSectionSettings"]{
  _id,
  title,
  description,
  "featuredProjects": 
    featuredProjects[]-> {
      _id,
      name,
      description,
      slug,
      "tags": tags[]-> {
        name
      },
      "mainImage": {
        "asset": {
          "url" : mainImage.asset->url
        }
      },
    }
}`;

export default function FeaturedProjectsSection({ draftMode, featuredProjectsSectionSettings }) {
  return draftMode ? (
    <PreviewSuspense fallback="loading">
      <FeaturedProjectsSectionDraft query={query} />
    </PreviewSuspense>
  ) : (
    <FeaturedProjectsSectionDefault
      featuredProjectsSectionSettings={featuredProjectsSectionSettings}
    />
  );
}
