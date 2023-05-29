import Head from 'next/head';

import ContactSection from '@/components/ContactSection/ContactSection';
import ProjectsSection from '@/components/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import MottoSection from '@/components/MottoSection/MottoSection';

import apolloClient from '../../graphql/apolloClient';
import GET_ALL_FEATURED_PROJECTS from '../../graphql/queryAllFeaturedProjects';

export default function Home({ featuredProjects }) {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      <MottoSection />
      <ProjectsSection featuredProjects={featuredProjects} />
      <ContactSection />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: GET_ALL_FEATURED_PROJECTS,
    variables: { limit: 1 },
  });

  const featuredProjects = data.allFeaturedProjects[0]?.projects || data;

  return {
    props: {
      featuredProjects,
    },
  };
}
