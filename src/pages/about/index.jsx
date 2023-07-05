import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import gqlQueryAboutSectionSettings from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ readToken, draftMode, aboutSectionSettings }) {
  return (
    <DraftModeContext.Provider value={draftMode}>
      <SanityReadTokenContext.Provider value={readToken}>
        <AboutSection aboutSectionSettings={aboutSectionSettings} />
      </SanityReadTokenContext.Provider>
    </DraftModeContext.Provider>
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
