import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query AllProjectsSlugs {
    allProject {
      slug {
        current
      }
    }
  }
`;

export default async function getGqlAllProjectsSlugsData() {
  const { data } = await apolloClient.query({
    query,
  });

  return data.allProject.map((project) => project.slug.current);
}
