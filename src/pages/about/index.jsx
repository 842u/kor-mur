import { useContext, useEffect } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';

import qglQueryAboutPageSettings from '../../../graphql/queryAboutPageSettings';

export default function AboutPage({ draftMode, mottoSectionSettings, aboutSectionSettings }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return (
    <>
      <MottoSection settings={mottoSectionSettings} withButton={false} />
      <AboutSection settings={aboutSectionSettings} />
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const { data } = await apolloClient.query({
    query: qglQueryAboutPageSettings,
  });

  const aboutSectionSettings = data.allAboutSectionSettings;
  const mottoSectionSettings = data.allMottoSectionSettings;

  return {
    props: {
      draftMode,
      mottoSectionSettings,
      aboutSectionSettings,
    },
  };
}
