import { useContext, useEffect } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import gqlQueryAboutSectionSettings from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ readToken, draftMode, aboutSectionSettings }) {
  const { setIsDraftMode } = useContext(DraftModeContext);
  const { setSanityReadToken } = useContext(SanityReadTokenContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
    setSanityReadToken(readToken);
  }, []);

  return <AboutSection settings={aboutSectionSettings} />;
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
