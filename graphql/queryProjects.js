import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query Projects {
    allProject {
      _id
      slug {
        current
      }
      name
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default async function getGqlProjectsData() {
  const { data } =
    (await apolloClient.query({
      query,
    })) || {};

  return data?.allProject || [];
}
