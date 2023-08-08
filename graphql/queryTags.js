import { gql } from '@apollo/client';

import tagMock from '@/utils/dataMocks';

import apolloClient from './apolloClient';

const query = gql`
  query Tags {
    allTag {
      _id
      name
      slug {
        current
      }
    }
  }
`;

export default async function getGqlTagsData() {
  const { data } = await apolloClient.query({
    query,
  });

  // Additional mock tag for all projects
  const allTags = [tagMock, ...data.allTag];

  return {
    tags: allTags,
  };
}
