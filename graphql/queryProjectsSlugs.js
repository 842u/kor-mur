import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query ProjectsSlugs {
    allProject {
      slug {
        current
      }
    }
  }
`;

export default async function getGqlProjectsSlugsData() {
  const { data } =
    (await apolloClient.query({
      query,
    })) || {};

  return data?.allProject.map((project) => project.slug.current) || [];
}
