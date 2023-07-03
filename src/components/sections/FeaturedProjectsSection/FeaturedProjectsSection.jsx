import dynamic from 'next/dynamic';
import Link from 'next/link';
import { groq } from 'next-sanity';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import FeaturedProjectsSectionDraft from './FeaturedProjectsSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

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

export default function FeaturedProjectsSection({
  readToken,
  draftMode,
  featuredProjectsSectionSettings,
}) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <FeaturedProjectsSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <FeaturedProjectsSectionDefault
      featuredProjectsSectionSettings={featuredProjectsSectionSettings}
    />
  );
}
