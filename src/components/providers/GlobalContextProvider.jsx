/* eslint react/jsx-no-constructed-context-values: 0 */
import { useState } from 'react';

import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

export default function GlobalContextProvider({ children }) {
  const [isDraftMode, setIsDraftMode] = useState(false);
  const [sanityReadToken, setSanityReadToken] = useState('');

  return (
    <DraftModeContext.Provider value={{ isDraftMode, setIsDraftMode }}>
      <SanityReadTokenContext.Provider value={{ sanityReadToken, setSanityReadToken }}>
        {children}
      </SanityReadTokenContext.Provider>
    </DraftModeContext.Provider>
  );
}
