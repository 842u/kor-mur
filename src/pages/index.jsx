import Head from 'next/head';
import { useContext, useEffect } from 'react';

import ContactSection from '@/components/sections/ContactSection/ContactSection';
import DecorativeBreaker from '@/components/sections/DecorativeBreaker/DecorativeBreaker';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';

import getHomePageSettings from '../../graphql/queryHomePageSettings';

export default function HomePage({
  draftMode,
  heroSectionSettings,
  mottoSectionSettings,
  featuredProjects,
  contactSectionSettings,
}) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, [draftMode]);

  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection settings={heroSectionSettings} />
      <MottoSection settings={mottoSectionSettings} />
      <DecorativeBreaker />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ContactSection settings={contactSectionSettings} />
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const data = await getHomePageSettings();

  const { contactSectionSettings, heroSectionSettings, mottoSectionSettings, featuredProjects } =
    data;

  return {
    props: {
      draftMode,
      heroSectionSettings,
      mottoSectionSettings,
      featuredProjects,
      contactSectionSettings,
    },
  };
}
