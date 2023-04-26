import Head from 'next/head';

import WelcomeScreen from '@/components/WelcomeScreen/WelcomeScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      AHA
      <WelcomeScreen />
    </div>
  );
}
