import dynamic from 'next/dynamic';
import Link from 'next/link';

import ProjectSectionDefault from './ProjectSectionDefault';
import ProjectSectionDraft from './ProjectSectionDraft';

const DraftProvider = dynamic(() => import('@/components/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

const query = `*[_type == "project"]{
  name,
  description,
  year,
  location,
  area,
  budget,
  "mainImage": {
    "asset": {
      "url": mainImage.asset->url
    }
  },
  "tags": tags[]->{name},
  "slug": {
    "current": slug.current
  }
}[slug.current == $slug]`;

export default function ProjectSection({ readToken, draftMode, projectSectionSettings }) {
  return draftMode ? (
    <DraftProvider readToken={readToken}>
      <ProjectSectionDraft query={query} />
      <Link href="/api/disable-draft" prefetch={false}>
        Exit Draft Mode
      </Link>
    </DraftProvider>
  ) : (
    <ProjectSectionDefault projectSectionSettings={projectSectionSettings} />
  );
}
