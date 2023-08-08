import { useLiveQuery } from 'next-sanity/preview';

import ExitDraftLink from '@/components/ui/ExitDraftLink/ExitDraftLink';

export default function DraftRenderer({ query, queryParams, renderItem }) {
  const [data] = useLiveQuery(null, query, queryParams);

  return (
    <>
      <ExitDraftLink />
      {renderItem(data)}
    </>
  );
}
