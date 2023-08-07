import { useLiveQuery } from 'next-sanity/preview';

export default function DraftProvider({ query, queryParams, renderItem }) {
  const data = useLiveQuery(null, query, queryParams);

  return renderItem(data);
}
