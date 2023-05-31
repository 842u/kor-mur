import apolloClient from '@/../graphql/apolloClient';

import GET_ABOUT_SECTION_SETTINGS from '../../../graphql/queryAboutSectionSettings';

export default function AboutPage({ aboutSectionSettings }) {
  console.log(aboutSectionSettings);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
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
