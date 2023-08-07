import { useEffect, useState } from 'react';

import Footer from '@/components/ui/Footer/Footer';
import NavBar from '@/components/ui/NavBar/NavBar';
import WelcomeScreen from '@/components/ui/WelcomeScreen/WelcomeScreen';
import { primaryFont } from '@/utils/fonts';

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
      <main className={primaryFont.className}>{children}</main>
      <Footer className={primaryFont.className} />
    </>
  );
}
