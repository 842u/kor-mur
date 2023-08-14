import { useEffect, useState } from 'react';

import Footer from '@/components/ui/Footer/Footer';
import NavBar from '@/components/ui/NavBar/NavBar';
import WelcomeScreen from '@/components/ui/WelcomeScreen/WelcomeScreen';
import { primaryFont } from '@/utils/fonts';

import { PageTransition } from '../animations/PageTransition';

export default function DefaultLayout({ children }) {
  const [isWelcomeAnimationFinished, setIsWelcomeAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeAnimationFinished(true);
    }, 5000);
  }, []);

  return (
    <>
      {!isWelcomeAnimationFinished && <WelcomeScreen className={primaryFont.className} />}
      <NavBar className={primaryFont.className} />
      <PageTransition>{children}</PageTransition>
      <Footer className={primaryFont.className} />
    </>
  );
}
