import dynamic from 'next/dynamic';
import { useCallback } from 'react';

import ContactSection from '@/components/sections/ContactSection/ContactSection';
import DecorativeBreaker from '@/components/sections/DecorativeBreaker/DecorativeBreaker';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

import getGqlHomePageData from '../../graphql/queryHomePageData';
import groqQueryHomePageData from '../../groq/queryHomePageData';
import HeadHomePage from './HeadHomePage';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function HomePage({ draftMode, data }) {
  const renderItem = useCallback(
    (draftData) => (
      <>
        <HeroSection data={draftData?.[0]?.heroSectionSettings} />
        <MottoSection withButton data={draftData?.[0]?.mottoSectionSettings} />
        <FeaturedProjectsSection projects={draftData?.[0]?.featuredProjects} />
        <ContactSection data={draftData?.[0]?.contactSectionSettings} />
      </>
    ),
    []
  );

  const { heroSectionSettings, mottoSectionSettings, featuredProjects, contactSectionSettings } =
    data;

  return (
    <>
      <HeadHomePage />

      {draftMode ? (
        <DraftProvider query={groqQueryHomePageData} renderItem={renderItem} />
      ) : (
        <>
          <HeroSection data={heroSectionSettings} />
          <MottoSection withButton data={mottoSectionSettings} />
          <DecorativeBreaker />
          <FeaturedProjectsSection projects={featuredProjects} />
          <ContactSection data={contactSectionSettings} />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const data = await getGqlHomePageData();

  return {
    props: {
      draftMode,
      data,
    },
  };
}
