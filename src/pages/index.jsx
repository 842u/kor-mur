import { motion } from 'framer-motion';
import Head from 'next/head';

import WelcomeScreen from '@/components/WelcomeScreen/WelcomeScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      AHA
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -2000 }}
        transition={{ ease: 'circInOut', delay: 3, duration: 3 }}
      >
        <WelcomeScreen />
      </motion.div>
    </div>
  );
}
