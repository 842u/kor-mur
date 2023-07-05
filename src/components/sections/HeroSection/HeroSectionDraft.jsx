import { useLiveQuery } from 'next-sanity/preview';

import HeroSectionDefault from './HeroSectionDefault';

export default function HeroSectionDraft({ query }) {
  const [data] = useLiveQuery(null, query);

  return <HeroSectionDefault settings={data} />;
}
