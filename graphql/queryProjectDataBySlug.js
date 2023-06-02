import { gql } from '@apollo/client';

const GET_PROJECT_DATA_BY_SLUG = gql`
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

export default GET_PROJECT_DATA_BY_SLUG;
