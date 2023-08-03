import { LiveQueryProvider } from 'next-sanity/preview';
import { useContext, useMemo } from 'react';

import getClient from '@/../sanity/lib/client';
import DraftModeContext from '@/context/DraftModeContext';

import DraftData from './DraftData';

export default function DraftProvider({ query, renderItem }) {
  const { isDraftMode } = useContext(DraftModeContext);

  const client = useMemo(() => getClient(isDraftMode), [isDraftMode]);

  return (
    <LiveQueryProvider client={client}>
      <DraftData query={query} renderItem={renderItem} />
    </LiveQueryProvider>
  );
}
