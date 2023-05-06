import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';
import MottoSection from '@/components/MottoSection/MottoSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      <MottoSection />
    </>
  );
}
