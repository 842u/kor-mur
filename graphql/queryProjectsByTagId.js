import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query ProjectByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default async function getGqlProjectsByTagIdData(tagId) {
  const { data } =
    (await apolloClient.query({
      query,
      variables: { where: { _: { references: tagId || null } } },
    })) || {};

  return data?.allProject || [];
}
