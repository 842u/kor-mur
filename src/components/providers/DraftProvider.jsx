import { LiveQueryProvider } from 'next-sanity/preview';
import { useMemo } from 'react';

import getClient from '../../../sanity/lib/client';

export default function DraftProvider({ children, draftMode }) {
  const client = useMemo(() => getClient(draftMode), [draftMode]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
