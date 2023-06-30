import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';

import GET_ABOUT_SECTION_SETTINGS from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ draftMode, aboutSectionSettings }) {
  return <AboutSection aboutSectionSettings={aboutSectionSettings} draftMode={draftMode} />;
}

export async function getStaticProps({ draftMode = false }) {
  if (draftMode) {
    return {
      props: { draftMode },
    };
  }

  const { data } = await apolloClient.query({
    query: GET_ABOUT_SECTION_SETTINGS,
  });

  const aboutSectionSettings = data.allAboutSectionSettings || null;

  return {
    props: {
      aboutSectionSettings,
    },
  };
}
