import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
    </>
  );
}
