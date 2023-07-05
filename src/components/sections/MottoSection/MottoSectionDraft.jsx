import { useLiveQuery } from 'next-sanity/preview';

import MottoSectionDefault from './MottoSectionDefault';

export default function MottoSectionDraft({ query }) {
  const [data] = useLiveQuery(null, query);

  return <MottoSectionDefault settings={data} />;
}
