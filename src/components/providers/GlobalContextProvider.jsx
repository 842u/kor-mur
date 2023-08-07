/* eslint react/jsx-no-constructed-context-values: 0 */
import { LiveQueryProvider } from 'next-sanity/preview';
import { useMemo, useState } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

import getClient from '../../../sanity/lib/client';

export default function GlobalContextProvider({ children }) {
  const [isDraftMode, setIsDraftMode] = useState(false);

  const sanityClient = useMemo(() => getClient(isDraftMode), [isDraftMode]);

  return (
    <DraftModeContext.Provider value={{ isDraftMode, setIsDraftMode }}>
      <LiveQueryProvider client={sanityClient}>{children}</LiveQueryProvider>
    </DraftModeContext.Provider>
  );
}
