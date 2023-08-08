import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query AboutPageData {
    allMottoSectionSettings {
      titles
      text
      image {
        asset {
          url
        }
      }
    }

    allAboutSectionSettings {
      imageFirst {
        asset {
          url
        }
      }
      imageSecond {
        asset {
          url
        }
      }
      description
    }
  }
`;

export default async function getGqlAboutPageData() {
  const { data } = await apolloClient.query({
    query,
  });

  return {
    aboutSectionSettings: data.allAboutSectionSettings[0],
    mottoSectionSettings: data.allMottoSectionSettings[0],
  };
}
