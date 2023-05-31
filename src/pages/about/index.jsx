import apolloClient from '@/../graphql/apolloClient';
import AboutSection from '@/components/sections/AboutSection/AboutSection';

import GET_ABOUT_SECTION_SETTINGS from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ aboutSectionSettings }) {
  return <AboutSection aboutSectionSettings={aboutSectionSettings} />;
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: GET_ABOUT_SECTION_SETTINGS,
  });

  const aboutSectionSettings = data.allAboutSectionSettings[0] || [];

  return {
    props: {
      aboutSectionSettings,
    },
  };
}
