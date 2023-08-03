import { gql } from '@apollo/client';

import tagMock from '@/utils/mocks';

import apolloClient from './apolloClient';

const query = gql`
  query AllTags {
    allTag {
      _id
      name
      slug {
        current
      }
    }
  }
`;

export default async function getGqlAllTagsData() {
  const { data } = await apolloClient.query({
    query,
  });

  // Additional mock tag for all projects
  const allTags = [tagMock, ...data.allTag];

  return {
    tags: allTags,
  };
}
