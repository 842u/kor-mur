import Head from 'next/head';
import { useContext, useEffect } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import DecorativeBreaker from '@/components/sections/DecorativeBreaker/DecorativeBreaker';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';

import gqlQueryHomePageSettings from '../../graphql/queryHomePageSettings';

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
  const { data } = await apolloClient.query({
    query: gqlQueryHomePageSettings,
    variables: {
      where: {
        featured: {
          eq: true,
        },
      },
    },
  });

  const heroSectionSettings = data.allHeroSectionSettings;

  const mottoSectionSettings = data.allMottoSectionSettings;

  const featuredProjects = data.allProject;

  const contactSectionSettings = data.allContactSectionSettings;

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
