import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/Layout/Layout';
import MottoSection from '@/components/MottoSection/MottoSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <Layout>
        <HeroSection />
        <MottoSection />
        <ProjectsSection />
      </Layout>
    </>
  );
}
