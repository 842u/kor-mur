import { useEffect, useState } from 'react';

import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

export default function Layout({ children }) {
  const [isWelcomeAnimationFinished, setIsWelcomeAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeAnimationFinished(true);
    }, 5000);
  }, []);

  return (
    <>
      {!isWelcomeAnimationFinished && <WelcomeScreen />}

      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
