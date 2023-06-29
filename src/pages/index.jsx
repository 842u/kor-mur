import Head from 'next/head';

import apolloClient from '@/../graphql/apolloClient';
import GET_CONTACT_SECTION_SETTINGS from '@/../graphql/queryContactSectionSettings';
import GET_FEATURED_PROJECTS_SECTION_SETTINGS from '@/../graphql/queryFeaturedProjectsSectionSettings';
import GET_MOTTO_SECTION_SETTINGS from '@/../graphql/queryMottoSectionSettings';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

export default function HomePage({
  draftMode,
  mottoSectionSettings,
  featuredProjectsSectionSettings,
  contactSectionSettings,
}) {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      <MottoSection draftMode={draftMode} mottoSectionSettings={mottoSectionSettings} />
      <FeaturedProjectsSection
        draftMode={draftMode}
        featuredProjectsSectionSettings={featuredProjectsSectionSettings}
      />
      <ContactSection contactSectionSettings={contactSectionSettings} draftMode={draftMode} />
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  if (draftMode) {
    return {
      props: { draftMode },
    };
  }

  let data;

  ({ data } = await apolloClient.query({
    query: GET_MOTTO_SECTION_SETTINGS,
  }));
  const mottoSectionSettings = data.allMottoSectionSettings || [];

  ({ data } = await apolloClient.query({
    query: GET_FEATURED_PROJECTS_SECTION_SETTINGS,
  }));
  const featuredProjectsSectionSettings = data.allFeaturedProjectsSectionSettings || [];

  ({ data } = await apolloClient.query({
    query: GET_CONTACT_SECTION_SETTINGS,
  }));
  const contactSectionSettings = data.allContactSectionSettings || [];

  return {
    props: {
      mottoSectionSettings,
      featuredProjectsSectionSettings,
      contactSectionSettings,
    },
  };
}
