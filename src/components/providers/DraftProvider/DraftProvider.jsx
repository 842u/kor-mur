import { LiveQueryProvider } from 'next-sanity/preview';

import getClient from '../../../../sanity/lib/client';
import DraftRenderer from './DraftRenderer';

export default function DraftProvider({ query, queryParams, renderItem }) {
  const sanityClient = getClient(true);

  return (
    <LiveQueryProvider client={sanityClient}>
      <DraftRenderer query={query} queryParams={queryParams} renderItem={renderItem} />
    </LiveQueryProvider>
  );
}
