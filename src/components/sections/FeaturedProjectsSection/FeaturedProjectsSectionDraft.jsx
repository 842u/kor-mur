import { useLiveQuery } from 'next-sanity/preview';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';

export default function FeaturedProjectsSectionPreview({ query }) {
  const [data] = useLiveQuery(null, query);

  return <FeaturedProjectsSectionDefault projects={data} />;
}
