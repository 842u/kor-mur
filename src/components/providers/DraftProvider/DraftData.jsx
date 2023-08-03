import { useLiveQuery } from 'next-sanity/preview';

export default function DraftData({ query, renderItem }) {
  const data = useLiveQuery(null, query);

  return renderItem(data);
}
