import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query ProjectBySlug($where: ProjectFilter) {
    allProject(where: $where) {
      name
      descriptionFirst
      descriptionSecond
      year
      location
      area
      budget
      mainImage {
        asset {
          url
        }
      }

      secondaryImage {
        asset {
          url
        }
      }

      images {
        asset {
          _id
          url
        }
      }

      tags {
        _id
        name
        slug {
          current
        }
      }

      slug {
        current
      }
    }
  }
`;

export default async function getGqlProjecBySlugData(slug) {
  const { data } = await apolloClient.query({
    query,
    variables: {
      where: {
        slug: {
          current: {
            eq: slug,
          },
        },
      },
    },
  });

  return {
    project: data.allProject,
  };
}
