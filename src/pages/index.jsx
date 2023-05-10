import { gql } from '@apollo/client';
import Head from 'next/head';

import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/Layout/Layout';
import MottoSection from '@/components/MottoSection/MottoSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

import apolloClient from '../../graphql/apolloClient';

export default function Home({ data }) {
  console.log(data);

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
    query: gql`
      query RootQuery {
        allProject {
          name
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
