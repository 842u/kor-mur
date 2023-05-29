import Head from 'next/head';

import apolloClient from '@/../graphql/apolloClient';
import GET_ALL_FEATURED_PROJECTS_DATA from '@/../graphql/queryAllFeaturedProjectsData';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import ProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

export default function HomePage({ featuredProjects }) {
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
    query: GET_ALL_FEATURED_PROJECTS_DATA,
    variables: { limit: 1 },
  });

  const featuredProjects = data.allFeaturedProjects[0]?.projects || data;

  return {
    props: {
      featuredProjects,
    },
  };
}
