import Head from 'next/head';

import apolloClient from '@/../graphql/apolloClient';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import gqlQueryHomePageSettings from '../../graphql/queryHomePageSettings';

export default function HomePage({
  draftMode,
  readToken,
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
      <DraftModeContext.Provider value={draftMode}>
        <SanityReadTokenContext.Provider value={readToken}>
          <HeroSection settings={heroSectionSettings} />
          <MottoSection settings={mottoSectionSettings} />
          <FeaturedProjectsSection settings={featuredProjectsSectionSettings} />
          <ContactSection settings={contactSectionSettings} />
        </SanityReadTokenContext.Provider>
      </DraftModeContext.Provider>
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const readToken = draftMode ? process.env.SANITY_READ_TOKEN : '';

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
      readToken,
      heroSectionSettings,
      mottoSectionSettings,
      featuredProjectsSectionSettings,
      contactSectionSettings,
    },
  };
}
