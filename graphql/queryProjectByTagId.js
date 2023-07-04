import { gql } from '@apollo/client';

const gqlQueryProjectByTagId = gql`
  query ProjectByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      description
      slug {
        current
      }
      tags {
        name
      }
      mainImage {
        asset {
          url
        }
      }
      images {
        asset {
          url
        }
      }
    }
  }
`;

export default gqlQueryProjectByTagId;
