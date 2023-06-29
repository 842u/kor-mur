import Head from 'next/head';

import apolloClient from '@/../graphql/apolloClient';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

import GET_HOME_PAGE_SETTINGS from '../../graphql/queryHomePageSettings';

export default function HomePage({
  draftMode,
  heroSectionSettings,
  mottoSectionSettings,
  featuredProjectsSectionSettings,
  contactSectionSettings,
}) {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection draftMode={draftMode} heroSectionSettings={heroSectionSettings} />
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

  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_SETTINGS,
  });

  const heroSectionSettings = data.allHeroSectionSettings || [];

  const mottoSectionSettings = data.allMottoSectionSettings || [];

  const featuredProjectsSectionSettings = data.allFeaturedProjectsSectionSettings || [];

  const contactSectionSettings = data.allContactSectionSettings || [];

  return {
    props: {
      heroSectionSettings,
      mottoSectionSettings,
      featuredProjectsSectionSettings,
      contactSectionSettings,
    },
  };
}
