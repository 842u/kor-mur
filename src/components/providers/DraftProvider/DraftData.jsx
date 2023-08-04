import { useLiveQuery } from 'next-sanity/preview';

export default function DraftData({ query, queryParams, renderItem }) {
  const data = useLiveQuery(null, query, queryParams);

  return renderItem(data);
}
