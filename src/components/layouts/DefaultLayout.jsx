import { useContext, useEffect, useState } from 'react';

import Footer from '@/components/ui/Footer/Footer';
import NavBar from '@/components/ui/NavBar/NavBar';
import WelcomeScreen from '@/components/ui/WelcomeScreen/WelcomeScreen';
import DraftModeContext from '@/context/DraftModeContext';
import { primaryFont } from '@/utils/fonts';

import ExitDraftLink from '../ui/ExitDraftLink/ExitDraftLink';

export default function DefaultLayout({ children }) {
  const [isWelcomeAnimationFinished, setIsWelcomeAnimationFinished] = useState(false);
  const { isDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeAnimationFinished(true);
    }, 5000);
  }, []);

  return (
    <>
      {!isWelcomeAnimationFinished && <WelcomeScreen className={primaryFont.className} />}
      <NavBar className={primaryFont.className} />
      <main className={primaryFont.className}>{children}</main>
      {isDraftMode && <ExitDraftLink />}
      <Footer className={primaryFont.className} />
    </>
  );
}
