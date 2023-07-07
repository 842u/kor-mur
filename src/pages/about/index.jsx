import { useContext, useEffect } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import DraftModeContext from '@/context/DraftModeContext';

import gqlQueryAboutSectionSettings from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ draftMode, aboutSectionSettings }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return <AboutSection settings={aboutSectionSettings} />;
}

export async function getStaticProps({ draftMode = false }) {
  const { data } = await apolloClient.query({
    query: gqlQueryAboutSectionSettings,
  });

  const aboutSectionSettings = data.allAboutSectionSettings;

  return {
    props: {
      draftMode,
      aboutSectionSettings,
    },
  };
}
