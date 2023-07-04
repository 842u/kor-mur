import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';

import gqlQueryAboutSectionSettings from '../../../graphql/queryAboutSectionSettings';

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
    query: gqlQueryAboutSectionSettings,
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
