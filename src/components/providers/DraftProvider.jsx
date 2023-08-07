import { useLiveQuery } from 'next-sanity/preview';

import ExitDraftLink from '../ui/ExitDraftLink/ExitDraftLink';

export default function DraftProvider({ query, queryParams, renderItem }) {
  const data = useLiveQuery(null, query, queryParams);

  return (
    <>
      <ExitDraftLink />
      {renderItem(data)}
    </>
  );
}
