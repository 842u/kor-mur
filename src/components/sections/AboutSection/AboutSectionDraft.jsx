import { useLiveQuery } from 'next-sanity/preview';

import AboutSectionDefault from './AboutSectionDefault';

export default function AboutSectionDraft({ query }) {
  const [data] = useLiveQuery(null, query);

  return <AboutSectionDefault aboutSectionSettings={data} />;
}
