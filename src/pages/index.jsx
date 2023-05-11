import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/Layout/Layout';
import MottoSection from '@/components/MottoSection/MottoSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

import apolloClient from '../../graphql/apolloClient';
import GET_ALL_FEATURED_PROJECTS from '../../graphql/queryAllFeaturedProjects';

export default function Home({ featuredProjects }) {
  console.log(featuredProjects);

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
