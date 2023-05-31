import Head from 'next/head';

import apolloClient from '@/../graphql/apolloClient';
import GET_MOTTO_SECTION_SETTINGS from '@/../graphql/queryMottoSectionSettings';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import ProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

import GET_FEATURED_PROJECTS_SECTION_SETTINGS from '../../graphql/queryFeaturedProjectsSectionSettings';

export default function HomePage({ mottoSectionSettings, featuredProjectsSectionSettings }) {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      <MottoSection mottoSectionSettings={mottoSectionSettings} />
      <ProjectsSection featuredProjectsSectionSettings={featuredProjectsSectionSettings} />
      <ContactSection />
    </>
  );
}

export async function getStaticProps() {
  let data;

  ({ data } = await apolloClient.query({
    query: GET_MOTTO_SECTION_SETTINGS,
  }));
  const mottoSectionSettings = data.allMottoSectionSettings[0] || [];

  ({ data } = await apolloClient.query({
    query: GET_FEATURED_PROJECTS_SECTION_SETTINGS,
  }));
  const featuredProjectsSectionSettings = data.allFeaturedProjectsSectionSettings[0] || [];

  return {
    props: {
      mottoSectionSettings,
      featuredProjectsSectionSettings,
    },
  };
}
