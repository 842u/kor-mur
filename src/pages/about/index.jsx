import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';

import GET_ABOUT_SECTION_SETTINGS from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ readToken, draftMode, aboutSectionSettings }) {
  return (
    <AboutSection
      aboutSectionSettings={aboutSectionSettings}
      draftMode={draftMode}
      readToken={readToken}
    />
  );
}

export async function getStaticProps({ draftMode = false }) {
  const readToken = draftMode ? process.env.SANITY_READ_TOKEN : '';

  const { data } = await apolloClient.query({
    query: GET_ABOUT_SECTION_SETTINGS,
  });

  const aboutSectionSettings = data.allAboutSectionSettings;

  return {
    props: {
      draftMode,
      readToken,
      aboutSectionSettings,
    },
  };
}
