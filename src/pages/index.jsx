import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';
import MottoSection from '@/components/MottoSection/MottoSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      <MottoSection />
      <ProjectsSection />
    </>
  );
}
