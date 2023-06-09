import { gql } from '@apollo/client';

const gqlQueryProjectBySlug = gql`
  query ProjectBySlug($where: ProjectFilter) {
    allProject(where: $where) {
      name
      description
      year
      location
      area
      budget
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
      tags {
        name
      }
      slug {
        current
      }
    }
  }
`;

export default gqlQueryProjectBySlug;
