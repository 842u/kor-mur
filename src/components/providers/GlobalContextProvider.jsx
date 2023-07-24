/* eslint react/jsx-no-constructed-context-values: 0 */
import { useState } from 'react';

import DraftModeContext from '@/context/DraftModeContext';

export default function GlobalContextProvider({ children }) {
  const [isDraftMode, setIsDraftMode] = useState(false);

  return (
    <DraftModeContext.Provider value={{ isDraftMode, setIsDraftMode }}>
      {children}
    </DraftModeContext.Provider>
  );
}
