import { useRouter } from 'next/router';
import { useLiveQuery } from 'next-sanity/preview';

import ProjectSectionDefault from './ProjectSectionDefault';

export default function ProjectSectionDraft({ query }) {
  const router = useRouter();
  const querySlug = router.query;

  const [data] = useLiveQuery(null, query, querySlug);

  return <ProjectSectionDefault projectSectionSettings={data} />;
}
