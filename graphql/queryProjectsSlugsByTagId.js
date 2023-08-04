import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query ProjectsSlugByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      slug {
        current
      }
    }
  }
`;

export default async function getGqlProjectsSlugsByTagIdData(tagId) {
  const { data } = await apolloClient.query({
    query,
    variables: {
      where: {
        _: {
          references: tagId,
        },
      },
    },
  });

  return {
    slugs: data.allProject.map((project) => project.slug.current),
  };
}
