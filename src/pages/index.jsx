import Head from 'next/head';
import { useEffect, useState } from 'react';

import WelcomeScreen from '@/components/WelcomeScreen/WelcomeScreen';

export default function Home() {
  const [isWelcomeAnimationFinished, setIsWelcomeAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeAnimationFinished(true);
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      {!isWelcomeAnimationFinished && <WelcomeScreen />}
    </>
  );
}
