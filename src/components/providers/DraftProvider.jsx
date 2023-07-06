import { LiveQueryProvider } from 'next-sanity/preview';
import { useMemo } from 'react';

import getClient from '../../../sanity/lib/client';

export default function DraftProvider({ children, readToken }) {
  const client = useMemo(() => getClient(readToken), [readToken]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
