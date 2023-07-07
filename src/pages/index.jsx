import Head from 'next/head';
import { useContext, useEffect } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';

import gqlQueryHomePageSettings from '../../graphql/queryHomePageSettings';

export default function HomePage({
  draftMode,
  heroSectionSettings,
  mottoSectionSettings,
  featuredProjectsSectionSettings,
  contactSectionSettings,
}) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection settings={heroSectionSettings} />
      <MottoSection settings={mottoSectionSettings} />
      <FeaturedProjectsSection settings={featuredProjectsSectionSettings} />
      <ContactSection settings={contactSectionSettings} />
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const { data } = await apolloClient.query({
    query: gqlQueryHomePageSettings,
  });

  const heroSectionSettings = data.allHeroSectionSettings;

  const mottoSectionSettings = data.allMottoSectionSettings;

  const featuredProjectsSectionSettings = data.allFeaturedProjectsSectionSettings;

  const contactSectionSettings = data.allContactSectionSettings;

  return {
    props: {
      draftMode,
      heroSectionSettings,
      mottoSectionSettings,
      featuredProjectsSectionSettings,
      contactSectionSettings,
    },
  };
}
