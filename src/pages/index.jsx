import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

export default function Home() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <AnimatePresence>
        {showWelcomeScreen && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: -2000 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>
      AHA
    </div>
  );
}
