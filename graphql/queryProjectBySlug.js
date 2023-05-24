import { gql } from '@apollo/client';

const GET_PROJECT_BY_SLUG = gql`
  query ProjectBySlug($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      description
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default GET_PROJECT_BY_SLUG;
