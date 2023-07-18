import { gql } from '@apollo/client';

const gqlQueryProjectSlugAndTagsById = gql`
  query ProjectSlugAndTagsById($projectId: ID!) {
    Project(id: $projectId) {
      slug {
        current
      }
      tags {
        slug {
          current
        }
      }
    }
  }
`;

export default gqlQueryProjectSlugAndTagsById;
